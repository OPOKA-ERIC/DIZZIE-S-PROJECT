/* Verify CV upload validation: bad extension and oversize files are rejected. */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const os = require('os');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'srl-'));
const big = path.join(tmp, 'huge.pdf');
fs.writeFileSync(big, Buffer.alloc(6 * 1024 * 1024, 0x20)); // 6 MB
const wrong = path.join(tmp, 'malware.exe');
fs.writeFileSync(wrong, Buffer.alloc(1024, 0x00));
const good = path.join(tmp, 'cv.pdf');
fs.writeFileSync(good, Buffer.alloc(200 * 1024, 0x20)); // 200 KB

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const url = 'file:///' + path.resolve('submit-cv.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle0' });

  let fails = 0;
  async function submitWith(file, label, expectBlocked) {
    await page.goto(url, { waitUntil: 'networkidle0' });
    // Fill required text fields so only the file can be the cause of failure.
    await page.evaluate(() => {
      document.querySelectorAll('form[data-srl-form] [required]').forEach((el) => {
        if (el.type === 'file') return;
        if (el.type === 'checkbox') { el.checked = true; }
        else if (el.type === 'radio') { el.checked = true; }
        else if (el.type === 'email') el.value = 'test@example.com';
        else if (el.type === 'tel') el.value = '0772 123 456';
        else if (el.type === 'url') el.value = 'https://example.com';
        else if (el.tagName === 'SELECT') el.selectedIndex = 1;
        else {
          // Respect minlen so the only possible failure cause is the file.
          const min = parseInt(el.dataset.minlen || '0', 10);
          el.value = min > 0 ? 'A'.repeat(min + 5) : 'Test Value';
        }
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
    const input = await page.$('form[data-srl-form] input[type="file"]');
    await input.uploadFile(file);

    await page.evaluate(() => {
      document.querySelector('form[data-srl-form]').requestSubmit();
    });
    await new Promise((r) => setTimeout(r, 350));

    const state = await page.evaluate(() => {
      const live = document.querySelector('[data-form-live]');
      const field = document.querySelector('input[type="file"]').closest('.field');
      return {
        success: live ? !live.hidden : false,
        err: field ? (field.querySelector('.field__error') || {}).textContent || '' : '',
        hasError: field ? field.classList.contains('has-error') : false,
        allErrs: Array.from(document.querySelectorAll('.field.has-error .field__error'))
          .map((e) => e.textContent.trim())
          .filter(Boolean),
      };
    });

    const blocked = !state.success;
    const ok = blocked === expectBlocked;
    if (!ok) fails++;
    console.log(
      `${ok ? 'PASS' : 'FAIL'}  ${label.padEnd(30)} blocked=${blocked} (expected ${expectBlocked})` +
        (state.err ? `  msg="${state.err.trim()}"` : '')
    );
    if (!ok && state.allErrs.length) {
      console.log('        all field errors: ' + state.allErrs.join(' | '));
    }
  }

  console.log('CV upload validation\n');
  await submitWith(good, 'valid 200KB .pdf', false);
  await submitWith(big, 'oversize 6MB .pdf', true);
  await submitWith(wrong, 'wrong type .exe', true);

  await browser.close();
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`\n${fails ? fails + ' check(s) failed' : 'All upload checks passed'}`);
  process.exit(fails ? 1 : 0);
})();
