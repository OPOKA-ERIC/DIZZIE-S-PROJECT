/* Browser-computed contrast audit.
   Walks every rendered text node, resolves the effective background by walking
   ancestors until an opaque colour or gradient stop is found, then computes the
   WCAG 2.1 ratio against the real rendered font size and weight. */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.svg': 'image/svg+xml' };

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      fs.readFile(p, (e, buf) => {
        if (e) { res.writeHead(404); return res.end('nf'); }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
        res.end(buf);
      });
    });
    srv.listen(0, () => resolve({ srv, port: srv.address().port }));
  });
}

const PAGES = [
  'index.html', 'find-a-job.html', 'job-details.html?id=human-resources-officer',
  'apply.html?id=software-developer', 'submit-cv.html', 'job-alerts.html',
  'employers.html', 'services.html', 'industries.html', 'about.html',
  'careers.html', 'faq.html', 'submit-vacancy.html', 'consultation.html',
  'recruitment-process.html', 'contact.html', 'resources.html',
  'employer-resources.html', 'ethical-recruitment.html', 'privacy-policy.html',
  'terms.html', 'cookie-policy.html',
];

const AUDIT = () => {
  const srgb = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
  const parse = (s) => { const m = s.match(/[\d.]+/g); return m ? m.map(Number) : null; };
  const over = (fg, bg) => { const a = fg[3] === undefined ? 1 : fg[3]; return [0, 1, 2].map((i) => fg[i] * a + bg[i] * (1 - a)); };

  function bgOf(el) {
    let node = el, acc = null;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') {
        // Take the darkest gradient stop as worst case.
        const stops = cs.backgroundImage.match(/rgba?\([^)]+\)/g) || [];
        const parsed = stops.map(parse).filter(Boolean).map(over);
        if (parsed.length) acc = acc ? acc : [255, 255, 255];
        return acc ? parsed.reduce((a, c) => (lum(c) < lum(a) ? c : a)) : acc;
      }
      const c = parse(cs.backgroundColor);
      if (c && (c[3] === undefined || c[3] > 0)) {
        const solid = over(c, acc || [255, 255, 255]);
        if (c[3] === undefined || c[3] >= 0.999) return solid;
        acc = solid;
      }
      node = node.parentElement;
    }
    return acc || [255, 255, 255];
  }

  const results = [];
  document.querySelectorAll('body *').forEach((el) => {
    const direct = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!direct) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) < 0.15) return;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    const fg = parse(cs.color);
    if (!fg) return;
    const bg = bgOf(el);
    const fgSolid = over(fg, bg);
    const px = parseFloat(cs.fontSize);
    const w = parseInt(cs.fontWeight, 10) || 400;
    const large = px >= 24 || (px >= 18.66 && w >= 700);
    const need = large ? 3 : 4.5;
    const cr = ratio(fgSolid, bg);
    if (cr < need) {
      results.push({
        text: el.textContent.trim().slice(0, 48),
        sel: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : ''),
        fg: cs.color, bg: 'rgb(' + bg.map(Math.round).join(', ') + ')',
        ratio: Math.round(cr * 100) / 100, need, px, w,
      });
    }
  });
  return results;
};

(async () => {
  const { srv, port } = await serve();
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });

  let total = 0;
  const seen = new Map();
  for (const p of PAGES) {
    await page.goto(`http://localhost:${port}/${p}`, { waitUntil: 'networkidle0' });
    const res = await page.evaluate(AUDIT);
    total += res.length;
    console.log(`${res.length === 0 ? 'PASS' : 'FAIL'}  ${p.padEnd(46)} ${res.length} issue(s)`);
    res.forEach((r) => {
      const k = `${r.sel}|${r.fg}|${r.bg}|${r.ratio}`;
      if (!seen.has(k)) seen.set(k, { ...r, pages: [] });
      seen.get(k).pages.push(p);
    });
  }

  console.log('\n--- distinct issues ---');
  [...seen.values()].forEach((r) => {
    console.log(`\n${r.ratio} (need ${r.need})  ${r.sel}`);
    console.log(`  text : "${r.text}"`);
    console.log(`  ${r.fg} on ${r.bg}  @${r.px}px/${r.w}`);
    console.log(`  pages: ${[...new Set(r.pages)].join(', ')}`);
  });
  console.log(`\n${total} occurrence(s), ${seen.size} distinct issue(s).`);

  await browser.close();
  srv.close();
})();
