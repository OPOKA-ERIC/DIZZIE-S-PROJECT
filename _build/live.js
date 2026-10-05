/* Smoke-test the deployed GitHub Pages site over HTTP. */
const puppeteer = require('puppeteer');

const BASE = 'https://opoka-eric.github.io/DIZZIE-S-PROJECT/';

const PAGES = [
  '', 'find-a-job.html', 'job-details.html?id=human-resources-officer',
  'apply.html?id=software-developer', 'submit-cv.html', 'job-alerts.html',
  'employers.html', 'services.html', 'industries.html', 'about.html',
  'careers.html', 'faq.html', 'submit-vacancy.html', 'consultation.html',
  'recruitment-process.html', 'contact.html', 'resources.html',
  'employer-resources.html', 'ethical-recruitment.html', 'privacy-policy.html',
  'terms.html', 'cookie-policy.html',
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const missing = [];
  page.on('response', (r) => {
    if (r.status() >= 400) missing.push(`${r.status()} ${r.url()}`);
  });

  let fails = 0;
  for (const vp of [{ w: 1440, h: 1000 }, { w: 390, h: 844 }]) {
    await page.setViewport({ width: vp.w, height: vp.h });
    console.log(`\n=== ${vp.w}px ===`);
    for (const p of PAGES) {
      const url = BASE + p;
      let res;
      try {
        res = await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
      } catch (e) {
        console.log(`FAIL  ${p || 'index.html'}  ${e.message}`);
        fails++;
        continue;
      }
      const status = res.status();
      const info = await page.evaluate(() => ({
        title: document.title,
        h1: (document.querySelector('h1') || {}).textContent?.trim().slice(0, 40) || '',
        header: !!document.querySelector('.site-header'),
        footer: !!document.querySelector('.site-footer'),
        icons: document.querySelectorAll('svg use').length,
        iconBroken: Array.from(document.querySelectorAll('svg use'))
          .filter((u) => !document.querySelector(u.getAttribute('href'))).length,
        cssApplied: getComputedStyle(document.body).getPropertyValue('--teal-600').trim(),
        hscroll: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      }));

      const problems = [];
      if (status !== 200) problems.push('HTTP ' + status);
      if (!info.title) problems.push('no title');
      if (!info.h1) problems.push('no h1');
      if (!info.header) problems.push('no header');
      if (!info.footer) problems.push('no footer');
        if (info.iconBroken) problems.push(info.iconBroken + ' broken icon refs');
        if (info.cssApplied !== '#0b8078') problems.push('css token=' + (info.cssApplied || 'missing'));
        // Measure real scrollability, not scrollWidth: an off-canvas drawer parked
        // outside the viewport widens scrollWidth without letting anyone scroll.
        const scrolled = await page.evaluate(() => {
          window.scrollTo(9999, 0);
          const x = window.scrollX;
          window.scrollTo(0, 0);
          return x;
        });
        if (scrolled > 0) problems.push('scrolls sideways by ' + scrolled + 'px');
        if (info.hscroll > 1) problems.push('scrollWidth +' + info.hscroll);

      if (problems.length) {
        fails++;
        console.log(`FAIL  ${(p || 'index.html').padEnd(44)} ${problems.join(', ')}`);
      } else {
        console.log(`PASS  ${(p || 'index.html').padEnd(44)} "${info.h1}"`);
      }
    }
  }

  if (missing.length) {
    console.log('\nHTTP errors:');
    [...new Set(missing)].forEach((m) => console.log('  ' + m));
    fails += new Set(missing).size;
  }

  console.log(`\n${fails ? fails + ' failure(s)' : 'Deployed site fully healthy'}`);
  await browser.close();
  process.exit(fails ? 1 : 0);
})();
