/* Verify every industry / employment-type select is populated from data.js. */
const puppeteer = require('puppeteer');
const path = require('path');

const TARGETS = {
  'find-a-job.html': ['f-industry', 'f-type', 'f-level'],
  'job-alerts.html': ['alert-industry', 'alert-type'],
  'submit-vacancy.html': ['v-industry', 'v-type'],
  'index.html': ['hs-industry', 'hs-type'],
};

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  let fails = 0;

  for (const [file, ids] of Object.entries(TARGETS)) {
    const url = 'file:///' + path.resolve(file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle0' });
    console.log('\n' + file);
    for (const id of ids) {
      const info = await page.$eval('#' + id, (el) => ({
        count: el.options.length,
        values: Array.from(el.options).map((o) => o.value),
        required: el.required,
      }));
      const blank = info.values[0] === '';
      const real = info.count - (blank ? 1 : 0);
      const ok = real > 0;
      if (!ok) fails++;
      console.log(
        `  ${ok ? 'PASS' : 'FAIL'}  #${id.padEnd(16)} ${String(real).padStart(2)} real option(s)` +
          `${info.required ? ' [required]' : ''}  ${info.values.slice(0, 3).join(' / ')}`
      );
    }
  }

  await browser.close();
  console.log(`\n${fails ? fails + ' select(s) empty' : 'All selects populated'}`);
  process.exit(fails ? 1 : 0);
})();
