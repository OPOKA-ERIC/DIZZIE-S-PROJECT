/* Verifies every internal link resolves to a file that exists. */
const fs = require('fs');
const path = require('path');
const ROOT = process.argv[2] || path.join(__dirname, '..');

/* Runtime-generated anchor ids (rendered by assets/js/app.js from SRL data) */
const runtimeIds = new Set();
(function () {
  const data = fs.readFileSync(path.join(ROOT, 'assets/js/data.js'), 'utf8');
  // service slugs -> <article id="slug">
  for (const m of data.matchAll(/slug:\s*'([^']+)'/g)) runtimeIds.add(m[1]);
  // data.js / app.js literal ids
  for (const file of ['assets/js/data.js', 'assets/js/app.js']) {
    const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const m of src.matchAll(/(?:id|getElementById\(|querySelector\()['"]#?([a-z][\w-]+)['"]/g)) runtimeIds.add(m[1]);
  }
})();

const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
const known = new Set(files);
let broken = [];
let checked = 0;
let anchorsMissing = [];

const attrRe = /(href|src)="([^"]+)"/g;

for (const f of files) {
  const html = fs.readFileSync(path.join(ROOT, f), 'utf8');

  // Collect ids defined in this file for anchor validation
  const ids = new Set();
  let idm;
  const idRe = /\sid="([^"]+)"/g;
  while ((idm = idRe.exec(html))) ids.add(idm[1]);

  let m;
  while ((m = attrRe.exec(html))) {
    const url = m[2];
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(url)) continue;
    const [p, hash] = url.split('#');
    const [q] = p.split('?');

    // SVG sprite refs (#i-name) are injected at runtime by assets/js/icons.js
    if (hash && hash.startsWith('i-')) continue;

    if (!q) {
      if (hash && !ids.has(hash) && !runtimeIds.has(hash)) anchorsMissing.push(`${f}  ->  #${hash}`);
      continue;
    }

    checked++;
    const target = path.join(ROOT, q);
    if (!fs.existsSync(target)) {
      broken.push(`${f}  ->  ${url}`);
      continue;
    }
    // Cross-page anchor check
    if (hash && q.endsWith('.html')) {
      const targetHtml = fs.readFileSync(target, 'utf8');
      const tre = new RegExp('\\sid="' + hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"');
      if (!tre.test(targetHtml) && !runtimeIds.has(hash)) anchorsMissing.push(`${f}  ->  ${url}`);
    }
  }
}

console.log(`Pages: ${files.length}   Internal file refs checked: ${checked}`);
if (broken.length) {
  console.log(`\nBROKEN FILES (${broken.length}):`);
  [...new Set(broken)].forEach(b => console.log('  ' + b));
  process.exitCode = 1;
} else {
  console.log('All internal file links resolve.');
}

if (anchorsMissing.length) {
  console.log(`\nMISSING ANCHORS (${anchorsMissing.length}):`);
  [...new Set(anchorsMissing)].forEach(b => console.log('  ' + b));
  process.exitCode = 1;
} else {
  console.log('All in-page anchors resolve.');
}

// Asset check
['assets/css/style.css', 'assets/js/app.js', 'assets/js/data.js', 'assets/js/icons.js'].forEach(a => {
  console.log(`${fs.existsSync(path.join(ROOT, a)) ? 'OK  ' : 'MISS'} ${a}`);
});