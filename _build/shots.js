const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(__dirname, 'shots');
const PORT = 8096;
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!fs.existsSync(f)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' });
  res.end(fs.readFileSync(f));
});

const SHOTS = [
  ['index.html', 'home', 0],
  ['index.html', 'home-services', 1],
  ['index.html', 'home-process', 2],
  ['find-a-job.html', 'find-a-job', 0],
  ['job-details.html?id=human-resources-officer', 'job-details', 0],
  ['apply.html?id=software-developer', 'apply', 0],
  ['employers.html', 'employers', 0],
  ['services.html', 'services', 0],
  ['about.html', 'about', 0],
  ['contact.html', 'contact', 0],
  ['faq.html', 'faq', 0],
  ['resources.html', 'resources', 0]
];

(async () => {
  await new Promise(r => server.listen(PORT, r));
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);
  const b = await puppeteer.launch({ args: ['--no-sandbox'] });

  for (const [url, name, scroll] of SHOTS) {
    const p = await b.newPage();
    await p.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
    await p.goto(`http://localhost:${PORT}/${url}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));
    if (scroll === 1) await p.evaluate(() => document.getElementById('services').scrollIntoView());
    if (scroll === 2) await p.evaluate(() => document.getElementById('process').scrollIntoView());
    await new Promise(r => setTimeout(r, 350));
    await p.screenshot({ path: path.join(OUT, name + '-desktop.png') });
    await p.close();
  }

  // Mobile shots
  for (const [url, name] of [['index.html', 'home'], ['find-a-job.html', 'find-a-job'], ['contact.html', 'contact']]) {
    const p = await b.newPage();
    await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
    await p.goto(`http://localhost:${PORT}/${url}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));
    await p.screenshot({ path: path.join(OUT, name + '-mobile.png') });
    await p.close();
  }

  await b.close();
  server.close();
  console.log('screenshots written to _build/shots');
})();