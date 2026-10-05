/* Deterministic contrast check of the actual design-token pairs. */
function hex(h) {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
function lum(c) {
  const [r, g, b] = c.map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const l1 = lum(hex(a)), l2 = lum(hex(b));
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
function check(label, fg, bg, px, weight, note) {
  const r = ratio(fg, bg);
  const large = px >= 24 || (px >= 18.66 && weight >= 700);
  const min = large ? 3 : 4.5;
  const ok = r >= min;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  r=${r.toFixed(2).padStart(5)} need=${min}  ${label.padEnd(42)} ${fg} on ${bg} @${px}px${note ? '  <- ' + note : ''}`
  );
  return ok;
}

console.log('=== TEXT ON LIGHT SURFACES ===');
let fails = 0;
const t = (l, f, b, px, w, n) => { if (!check(l, f, b, px, w, n)) fails++; };

t('body copy', '#33445c', '#ffffff', 16.5, 400);
t('muted / secondary text', '#64748b', '#ffffff', 16.5, 400);
t('muted on soft surface', '#64748b', '#f7fafc', 16.5, 400);
t('heading navy', '#0a2540', '#ffffff', 32, 800);
t('eyebrow teal', '#0d9488', '#ffffff', 11.84, 800);
t('link teal', '#0d9488', '#ffffff', 16.5, 400);
t('link-arrow teal', '#0d9488', '#ffffff', 15.2, 700);
t('nav active teal-700', '#0b7c72', '#ccfbf1', 14.56, 600);
t('brand name teal span', '#0d9488', '#ffffff', 16.5, 800);
t('chip teal', '#0b7c72', '#ccfbf1', 12.16, 700);
t('chip green', '#15803d', '#dcfce7', 12.16, 700);
t('chip amber', '#b45309', '#fef3c7', 12.16, 700);
t('chip navy', '#123458', '#dbeafe', 12.16, 700);
t('deadline flag amber', '#92400e', '#fef3c7', 13.9, 700);
t('deadline flag urgent', '#991b1b', '#fee2e2', 13.9, 700);
t('timeline note', '#0f3b3a', '#ccfbf1', 16, 400);
t('alert info', '#1e40af', '#eff6ff', 15, 400);
t('alert success', '#15803d', '#f0fdf4', 15, 400);
t('alert warn', '#b45309', '#fffbeb', 15, 400);
t('form error', '#dc2626', '#ffffff', 13.1, 600);
t('placeholder (9aa8ba)', '#9aa8ba', '#ffffff', 15, 400, 'placeholder only - 4.5 recommended');
t('tab inactive', '#64748b', '#ffffff', 15.2, 700);
t('job meta dt', '#64748b', '#f7fafc', 12.16, 800);
t('stat strip span', '#64748b', '#ffffff', 13.9, 400);
t('resource-card meta', '#0b7c72', '#ffffff', 12.8, 700);
t('quote text', '#0a2540', '#f7fafc', 17, 400);
t('cookie table th', '#0a2540', '#f7fafc', 15.04, 700);
t('cookie table td', '#33445c', '#ffffff', 15.04, 400);

console.log('\n=== WHITE TEXT ON DARK / BRAND SURFACES ===');
t('h1 on navy hero', '#ffffff', '#0a2540', 58.4, 800);
t('hero body on navy', '#b9cbdf', '#0a2540', 18.24, 400);
t('hero stat label', '#93aac4', '#0a2540', 13.1, 400);
t('page-hero body', '#adc2d8', '#0a2540', 17.28, 400);
t('page-hero eyebrow', '#2dd4bf', '#0a2540', 11.84, 800);
t('navy section body', '#c8d6e6', '#0a2540', 16.5, 400);
t('navy section lede', '#b9cbdf', '#0a2540', 17.92, 400);
t('navy section eyebrow', '#2dd4bf', '#0a2540', 11.84, 800);
t('navy section heading', '#ffffff', '#0a2540', 32, 800);
t('step num white on navy', '#ffffff', '#0a2540', 15.2, 800);
t('step num white on teal', '#ffffff', '#0d9488', 15.2, 800);
t('step num white on green', '#ffffff', '#16a34a', 15.2, 800);
t('btn primary (white on teal)', '#ffffff', '#0d9488', 13.76, 700);
t('btn accent (white on green)', '#ffffff', '#16a34a', 15.2, 700);
t('btn navy (white on navy)', '#ffffff', '#0a2540', 15.2, 700);
t('btn outline', '#0a2540', '#ffffff', 13.76, 700);
t('media-card body', '#c2d3e4', '#0a2540', 16.5, 400);
t('media-card stat label', '#93aac4', '#0a2540', 12.8, 400);
t('cta-panel body', '#adc2d8', '#0a2540', 16.5, 400);
t('cta-panel eyebrow', '#2dd4bf', '#0a2540', 11.84, 800);
t('path body', '#a7bcd3', '#132c48', 13.9, 400);
t('breadcrumb text', '#8ea6c0', '#0a2540', 13.44, 400);
t('breadcrumb link', '#c2d3e4', '#0a2540', 13.44, 400);
t('audience bar tag', '#7f97b3', '#05162b', 12.5, 700);
t('audience bar link', '#c7d6e6', '#05162b', 12.5, 600);
t('footer body', '#9db2ca', '#05162b', 14.9, 400);
t('footer heading', '#ffffff', '#05162b', 12.8, 800);
t('footer link', '#9db2ca', '#05162b', 14.9, 500);
t('footer muted', '#8ea6c0', '#05162b', 13.9, 400);
t('footer contact link', '#cfdcec', '#05162b', 14.9, 400);
t('footer icon', '#2dd4bf', '#05162b', 17, 400, 'icon, 3:1 for UI');
t('btn--ghost-light border/text', '#ffffff', '#0a2540', 15.2, 700);
t('skip link', '#ffffff', '#0a2540', 16.5, 600);
t('job logo initials', '#ffffff', '#0a2540', 24, 800);
t('avatar initials', '#ffffff', '#123458', 25.6, 800);
t('deadline flag on white card', '#92400e', '#ffffff', 13.9, 700);

console.log(`\n${fails} pair(s) below WCAG AA.`);