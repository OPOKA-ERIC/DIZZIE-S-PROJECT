/* Smoke-tests every page in headless Chrome: JS errors, key element renders. */
const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = 8099;

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

// What must be non-empty after JS runs on each page
const CHECKS = {
  'index.html': ['#services-grid .card', '#industries-grid .card', '#process-steps .step', '#latest-jobs .job-card', '#hs-industry option'],
  'find-a-job.html': ['#job-list .job-card', '#f-industry option', '#f-type option', '#f-level option', '#job-count b'],
  'job-details.html?id=human-resources-officer': ['.job-header h1', '.prose li', '.apply-panel a.btn', '#related-jobs .job-card'],
  'apply.html?id=software-developer': ['#app-job-note strong', '#app-job-id'],
  'submit-cv.html': ['form[data-srl-form] input[type=file]'],
  'job-alerts.html': ['#alert-form'],
  'employers.html': ['#services-grid .card', '#process-steps .step'],
  'services.html': ['#services-detail .service-detail', '#industries-grid .card'],
  'industries.html': ['#industries-grid .card'],
  'about.html': ['#team-grid .card'],
  'careers.html': ['#team-grid .card'],
  'faq.html': ['#faq-list-candidates details', '#faq-list-employers details', '#faq-list-general details'],
  'submit-vacancy.html': ['#v-industry option'],
  'recruitment-process.html': ['#process-vertical .step'],
  'contact.html': ['form[data-srl-form="contact"]'],
  'resources.html': ['#cv-tips', '#interview-tips', '#career-development'],
  'employer-resources.html': ['[data-tabs-panel="panel-jd"]', '.tabs__btn'],
  'ethical-recruitment.html': [],
  'privacy-policy.html': [], 'terms.html': [], 'cookie-policy.html': [], 'consultation.html': []
};

(async () => {
  await new Promise(r => server.listen(PORT, r));
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  let failures = 0;

  const paths = Object.keys(CHECKS);

  for (const p of paths) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    const errors = [];
    page.on('pageerror', e => errors.push('JS: ' + e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
    page.on('requestfailed', r => {
      const u = r.url();
      if (u.startsWith('http://localhost')) errors.push('404: ' + u);
    });

    await page.goto(`http://localhost:${PORT}/${p}`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 180));

    const missing = [];
    for (const sel of CHECKS[p]) {
      const n = await page.$$eval(sel, els => els.length).catch(() => 0);
      if (!n) missing.push(sel);
    }

    // Check that icon sprite actually resolved (symbols exist)
    const spriteOk = await page.evaluate(() => !!document.querySelector('#i-briefcase'));
    if (!spriteOk) missing.push('svg-sprite');

    // Check for real horizontal scrollability at mobile width.
    // scrollWidth alone is misleading: the off-canvas nav is position:fixed
    // and extends past the viewport, but body overflow-x clips it.
    await page.setViewport({ width: 375, height: 800 });
    await new Promise(r => setTimeout(r, 150));
    const overflow = await page.evaluate(() => {
      window.scrollTo(9999, 0);
      const canScroll = window.scrollX;
      window.scrollTo(0, 0);
      return canScroll;
    });

    const bad = errors.length || missing.length || overflow > 2;
    if (bad) failures++;

    console.log(
      (bad ? 'FAIL ' : 'PASS ') + p.padEnd(46) +
      ' hscroll:' + String(overflow).padStart(4) +
      (missing.length ? '  MISSING: ' + missing.join(', ') : '')
    );
    errors.slice(0, 4).forEach(e => console.log('        ' + e));

    await page.close();
  }

  // Interaction test: find-a-job filtering + form submission
  console.log('\n--- interaction tests ---');
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/find-a-job.html`, { waitUntil: 'networkidle2' });
  const total = await page.$$eval('#job-list .job-card', e => e.length);
  await page.type('#f-title', 'accountant');
  await new Promise(r => setTimeout(r, 200));
  const filtered = await page.$$eval('#job-list .job-card', e => e.length);
  console.log(`filter "accountant": ${total} -> ${filtered} ${filtered > 0 && filtered < total ? 'PASS' : 'FAIL'}`);

  await page.evaluate(() => document.getElementById('f-reset').click());
  await new Promise(r => setTimeout(r, 200));
  const reset = await page.$$eval('#job-list .job-card', e => e.length);
  console.log(`reset: back to ${reset} ${reset === total ? 'PASS' : 'FAIL'}`);

  await page.select('#f-type', 'Contract');
  await new Promise(r => setTimeout(r, 200));
  const contract = await page.$$eval('#job-list .job-card', e => e.length);
  console.log(`filter Contract: ${contract} ${contract < total ? 'PASS' : 'FAIL'}`);
  await page.close();

  // Form submission test on apply page
  const fp = await browser.newPage();
  const ferr = [];
  fp.on('pageerror', e => ferr.push(e.message));
  await fp.goto(`http://localhost:${PORT}/apply.html?id=software-developer`, { waitUntil: 'networkidle2' });
  await fp.type('#app-name', 'Test Applicant');
  await fp.type('#app-email', 'not-an-email');
  await fp.click('form[data-srl-form="application"] button[type=submit]');
  await new Promise(r => setTimeout(r, 200));
  const errShown = await fp.$$eval('.field.has-error', e => e.length);
  console.log(`invalid email blocked: ${errShown} error(s) ${errShown > 0 ? 'PASS' : 'FAIL'}`);

  await fp.evaluate(() => { document.getElementById('app-email').value = ''; });
  await fp.type('#app-email', 'test@example.com');
  await fp.type('#app-phone', '+256700111222');
  await fp.type('#app-location', 'Kampala');
  await fp.type('#app-education', 'BSc Computer Science, Mbarara University, 2022');
  await fp.type('#app-experience', 'Software Developer at a local firm for three years');
  const fileInput = await fp.$('#app-cv');
  await fileInput.uploadFile(path.join(__dirname, 'fixture.pdf'));
  await fp.click('form[data-srl-form="application"] input[name=consent]');
  await fp.click('form[data-srl-form="application"] button[type=submit]');
  await new Promise(r => setTimeout(r, 400));
  const success = await fp.$eval('[data-form-live]', e => !e.hidden);
  const rows = await fp.$$eval('.recap div', e => e.length);
  console.log(`valid submit shows success: ${success ? 'PASS' : 'FAIL'}  (recap rows: ${rows})`);
  console.log(`form js errors: ${ferr.length ? 'FAIL ' + ferr.join(';') : 'PASS none'}`);
  await fp.close();

  // Mobile nav test
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, isMobile: true });
  await mp.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle2' });
  await mp.click('.nav-toggle');
  await new Promise(r => setTimeout(r, 400));
  const navOpen = await mp.$eval('.main-nav', e => e.classList.contains('is-open'));
  const ctaVisible = await mp.$eval('.mobile-cta', e => getComputedStyle(e).display !== 'none');
  console.log(`mobile nav opens: ${navOpen ? 'PASS' : 'FAIL'}   sticky CTA visible: ${ctaVisible ? 'PASS' : 'FAIL'}`);
  await mp.close();

  await browser.close();
  server.close();

  console.log(`\n${failures ? failures + ' PAGE(S) FAILED' : 'All pages passed'}`);
  process.exitCode = (failures || ferr.length) ? 1 : 0;
})();