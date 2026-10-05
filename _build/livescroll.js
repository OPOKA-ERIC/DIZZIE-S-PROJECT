/* Can the visitor actually scroll the page horizontally on the live site?
   Also reports whether the off-canvas nav is the cause. */
const puppeteer = require('puppeteer');

const BASE = 'https://opoka-eric.github.io/DIZZIE-S-PROJECT/';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  for (const cfg of [
    { label: 'desktop-emulation 390', w: 390, h: 844, isMobile: false },
    { label: 'mobile-emulation 390', w: 390, h: 844, isMobile: true },
  ]) {
    const page = await browser.newPage();
    await page.setViewport({ width: cfg.w, height: cfg.h, isMobile: cfg.isMobile, hasTouch: cfg.isMobile });
    await page.goto(BASE + 'index.html', { waitUntil: 'networkidle0' });

    const r = await page.evaluate(() => {
      const de = document.documentElement;
      window.scrollTo(9999, 0);
      const x1 = window.scrollX;
      window.scrollTo(0, 0);

      const nav = document.querySelector('.main-nav');
      const ncs = getComputedStyle(nav);

      return {
        clientW: de.clientWidth,
        htmlScrollW: de.scrollWidth,
        bodyScrollW: document.body.scrollWidth,
        actualScrollX: x1,
        canScroll: x1 > 0,
        nav: {
          position: ncs.position, left: ncs.left, right: ncs.right,
          transform: ncs.transform, visibility: ncs.visibility,
          rectLeft: Math.round(nav.getBoundingClientRect().left),
        },
        htmlOverflowX: getComputedStyle(de).overflowX,
        bodyOverflowX: getComputedStyle(document.body).overflowX,
      };
    });

    console.log(`\n=== ${cfg.label} ===`);
    console.log(JSON.stringify(r, null, 2));
    await page.close();
  }

  await browser.close();
})();
