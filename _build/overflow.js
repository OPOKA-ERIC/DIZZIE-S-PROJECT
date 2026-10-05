/* Find the elements that genuinely expand the layout viewport.
   Skips fixed-position subtrees (they are sized BY the expanded viewport, so they
   are symptoms rather than causes) and off-screen skip links. */
const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

const PAGES = [
  'index.html', 'find-a-job.html', 'job-details.html?id=human-resources-officer',
  'apply.html?id=software-developer', 'submit-cv.html', 'job-alerts.html',
  'employers.html', 'services.html', 'industries.html', 'about.html',
  'careers.html', 'faq.html', 'submit-vacancy.html', 'consultation.html',
  'recruitment-process.html', 'contact.html', 'resources.html',
  'employer-resources.html', 'ethical-recruitment.html', 'privacy-policy.html',
  'terms.html', 'cookie-policy.html',
];

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      fs.readFile(f, (e, buf) => {
        if (e) { res.writeHead(404); return res.end('nf'); }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' });
        res.end(buf);
      });
    });
    srv.listen(0, () => resolve({ srv, port: srv.address().port }));
  });
}

const FIND = () => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  const desc = (el) => el.tagName.toLowerCase() +
    (typeof el.className === 'string' && el.className.trim()
      ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : '');

  document.querySelectorAll('body *').forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    if (cs.position === 'fixed') return;
    if (el.classList.contains('skip-link')) return;
    if (parseFloat(cs.opacity) < 0.15) return;

    const r = el.getBoundingClientRect();
    if (r.width === 0) return;
    const right = r.right + window.scrollX;
    if (right <= vw + 1 && r.left >= -1) return;

    // Only report if no ancestor clips or scrolls it.
    let p = el.parentElement, contained = false;
    while (p && p !== document.documentElement) {
      const pcs = getComputedStyle(p);
      if (pcs.overflowX !== 'visible' || pcs.overflowY !== 'visible') { contained = true; break; }
      if (pcs.display === 'none') { contained = true; break; }
      p = p.parentElement;
    }
    if (contained) return;

    out.push({
      sel: desc(el),
      left: Math.round(r.left), right: Math.round(right), w: Math.round(r.width),
      scrollW: el.scrollWidth,
      text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 44),
    });
  });
  // Deepest offenders last is not useful; sort widest overflow first.
  out.sort((a, b) => (b.right - vw) - (a.right - vw));
  return { vw, out };
};

(async () => {
  const { srv, port } = await serve();
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 320, height: 720, isMobile: true });

  let total = 0;
  for (const p of PAGES) {
    await page.goto(`http://localhost:${port}/${p}`, { waitUntil: 'networkidle0' });
    const { vw, out } = await page.evaluate(FIND);
    if (!out.length) { console.log(`PASS  ${p}`); continue; }
    total += out.length;
    console.log(`FAIL  ${p}  (vw ${vw}, ${out.length})`);
    out.slice(0, 6).forEach((o) =>
      console.log(`        ${o.sel}  x:${o.left}..${o.right} w:${o.w} scrollW:${o.scrollW}  "${o.text}"`));
  }

  console.log(`\n${total ? total + ' genuine overflow element(s)' : 'No genuine overflow at 320px'}`);
  await browser.close();
  srv.close();
  process.exit(total ? 1 : 0);
})();
