const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const src = process.argv[2];
  const out = process.argv[3];
  await page.goto('file:///' + path.resolve(src).replace(/\\/g, '/'), {
    waitUntil: 'networkidle0',
  });
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate:
      '<div style="width:100%;font-size:7pt;color:#8a97a8;padding:0 16mm;font-family:Segoe UI,Arial,sans-serif;display:flex;justify-content:space-between;">' +
      '<span>Smart Recruiters Limited &mdash; Work Summary</span>' +
      '<span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    margin: { top: '18mm', bottom: '16mm', left: '16mm', right: '16mm' },
  });
  await browser.close();
  console.log('PDF written to ' + out);
})();
