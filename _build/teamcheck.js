/* Confirm the named team renders on the deployed About and Careers pages. */
const puppeteer = require('puppeteer');

const BASE = 'https://opoka-eric.github.io/DIZZIE-S-PROJECT/';
const EXPECTED = [
  'Mutesi Daphine', 'Aciga Collins', 'Opiro Desire', 'Oredo Thomas',
  'Agola Benedicta', 'Nagobi Sarah', 'Mugabi Gloria Peace', 'Auma Wafula',
];
const ROLES = [
  'Chief Executive Officer', 'Head of Recruitment', 'Talent Acquisition Specialist',
  'Consultant — Executive Search', 'HR & Compliance Officer',
  'Business Development Manager', 'Marketing Manager', 'Finance Manager',
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  let fails = 0;

  for (const p of ['about.html', 'careers.html']) {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(BASE + p, { waitUntil: 'networkidle0' });

    const r = await page.evaluate(() =>
      Array.from(document.querySelectorAll('#team-grid .team-card')).map((c) => ({
        name: c.querySelector('h3').textContent.trim(),
        role: c.querySelector('.team-card__role').textContent.trim(),
        avatar: c.querySelector('.avatar').textContent.trim(),
        tags: c.querySelectorAll('.team-card__tags .chip').length,
      })));

    const missing = EXPECTED.filter((n) => !r.some((m) => m.name === n));
    const badRole = ROLES.filter((role) => !r.some((m) => m.role === role));
    const noTags = r.filter((m) => m.tags < 2).map((m) => m.name);
    const dupes = r.filter((m, i) => r.findIndex((x) => x.name === m.name) !== i);

    console.log(`\n=== ${p} === ${r.length} cards`);
    r.forEach((m) => console.log(`  ${m.avatar.padEnd(3)} ${m.name.padEnd(22)} ${m.role}`));
    if (missing.length) { console.log('  MISSING: ' + missing.join(', ')); fails++; }
    if (badRole.length) { console.log('  MISSING ROLE: ' + badRole.join(', ')); fails++; }
    if (noTags.length) { console.log('  NO TAGS: ' + noTags.join(', ')); fails++; }
    if (dupes.length) { console.log('  DUPLICATES: ' + dupes.map((d) => d.name).join(', ')); fails++; }
    if (!missing.length && !badRole.length && !noTags.length && !dupes.length) {
      console.log('  OK all named members present with roles and tags');
    }
    await page.close();
  }

  console.log(`\n${fails ? fails + ' failure(s)' : 'Team section live and correct'}`);
  await browser.close();
  process.exit(fails ? 1 : 0);
})();
