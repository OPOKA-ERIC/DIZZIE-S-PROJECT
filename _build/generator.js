/* Generates the remaining static pages with shared header/footer markup. */
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || process.cwd();

const HEAD = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">`;

const FAVICON = `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230a2540'/><path d='M28 34h44v10H28z' fill='%232dd4bf'/><path d='M38 34v-6a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v6' stroke='%232dd4bf' stroke-width='5' fill='none'/><path d='M22 44h56v30H22z' fill='%2314b8a6'/></svg>">`;

const ICONS = `<svg class="icon" aria-hidden="true"><use href="#i-CHART"></use></svg>`;

function icon(name, cls) {
  return `<svg class="icon${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

const LOGO = `<span class="brand__mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M2 13h20"/></svg></span>`;

function brand(current) {
  return `<a class="brand" href="index.html">
        ${LOGO}
        <span class="brand__text">
          <span class="brand__name">Smart <span>Recruiters</span></span>
          <span class="brand__tag">Limited &middot; Kampala</span>
        </span>
      </a>`;
}

function nav(current) {
  const home = current === 'home';
  const faj = current === 'find-a-job' || current === 'job-details' || current === 'apply' || current === 'job-alerts' || current === 'submit-cv';
  const emp = current === 'employers' || current === 'submit-vacancy' || current === 'consultation' || current === 'recruitment-process' || current === 'employer-resources';
  const srv = current === 'services';
  const ind = current === 'industries';
  const abt = current === 'about' || current === 'careers' || current === 'ethical-recruitment';
  const res = current === 'resources';
  const faq = current === 'faq';
  const con = current === 'contact';

  const on = (flag) => flag ? ' aria-current="page"' : '';
  const act = (flag) => flag ? ' is-active' : '';

  return `<nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <ul class="main-nav__list">
        <li${act(home)}><a href="index.html"${on(home)}>Home</a></li>
        <li class="has-dropdown${act(faj)}">
          <button type="button" aria-expanded="false">Find a Job ${icon('chevronDown')}</button>
          <ul class="dropdown">
            <li><span class="dropdown__label">Job Seekers</span></li>
            <li><a href="find-a-job.html"${on(faj)}>Search Jobs<small>Browse all live vacancies</small></a></li>
            <li><a href="job-alerts.html">Job Alerts<small>Get matching vacancies by email</small></a></li>
            <li><a href="submit-cv.html">Submit CV<small>Join our talent database</small></a></li>
            <li><a href="apply.html">Apply for a Position<small>Application form</small></a></li>
          </ul>
        </li>
        <li class="has-dropdown${act(emp)}">
          <button type="button" aria-expanded="false">For Employers ${icon('chevronDown')}</button>
          <ul class="dropdown dropdown--right">
            <li><span class="dropdown__label">Hiring Support</span></li>
            <li><a href="employers.html"${on(emp)}>Hire Talent<small>How we help employers</small></a></li>
            <li><a href="submit-vacancy.html">Submit a Vacancy<small>Send us your role</small></a></li>
            <li><a href="recruitment-process.html">Recruitment Process<small>Our 8-stage method</small></a></li>
            <li><a href="consultation.html">Request Consultation<small>Speak to our team</small></a></li>
          </ul>
        </li>
        <li${act(srv)}><a href="services.html"${on(srv)}>Services</a></li>
        <li${act(ind)}><a href="industries.html"${on(ind)}>Industries</a></li>
        <li class="has-dropdown${act(abt)}">
          <button type="button" aria-expanded="false">About ${icon('chevronDown')}</button>
          <ul class="dropdown dropdown--right">
            <li><a href="about.html"${on(abt)}>About Us<small>Our story, mission and values</small></a></li>
            <li><a href="about.html#team">Our Team<small>The people behind Smart Recruiters</small></a></li>
            <li><a href="ethical-recruitment.html">Ethical Recruitment<small>Our commitments</small></a></li>
            <li><a href="careers.html">Careers<small>Work with us</small></a></li>
          </ul>
        </li>
        <li class="has-dropdown${act(res)}">
          <button type="button" aria-expanded="false">Resources ${icon('chevronDown')}</button>
          <ul class="dropdown dropdown--right">
            <li><span class="dropdown__label">Career Resources</span></li>
            <li><a href="resources.html"${on(res)}>Career Advice<small>CV, interviews and growth</small></a></li>
            <li><a href="employer-resources.html">Employer Advice<small>Job descriptions and hiring</small></a></li>
            <li><span class="dropdown__label">Support</span></li>
            <li><a href="faq.html"${on(faq)}>FAQ<small>Frequently asked questions</small></a></li>
            <li><a href="contact.html"${on(con)}>Contact Us<small>Talk to our team</small></a></li>
          </ul>
        </li>
      </ul>
    </nav>`;
}

function header(current) {
  return `<a class="skip-link" href="#main">Skip to main content</a>

<div class="audience-bar">
  <div class="container">
    <span class="audience-bar__tag">Two clear journeys. One company.</span>
    <div class="audience-bar__links">
      <a href="find-a-job.html">I am looking for a job</a>
      <a href="employers.html">I am hiring talent</a>
      <a href="contact.html">Contact us</a>
    </div>
  </div>
</div>

<header class="site-header">
  <div class="container site-header__inner">
    ${brand(current)}

    ${nav(current)}

    <div class="header-cta">
      <a class="btn btn--outline btn--sm" href="employers.html">Hire Talent</a>
      <a class="btn btn--primary btn--sm" href="find-a-job.html">Find a Job</a>
    </div>

    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle navigation menu">
      <svg class="icon icon-menu" aria-hidden="true"><use href="#i-menu"></use></svg>
      <svg class="icon icon-close" aria-hidden="true"><use href="#i-x"></use></svg>
    </button>
  </div>
</header>
<div class="nav-scrim"></div>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container site-footer__top">
    <div class="site-footer__about">
      ${brand()}
      <p>Connecting Talent. Building Organisations.</p>
      <p>
        Professional recruitment and talent solutions connecting organisations with the right people
        and professionals with meaningful career opportunities.
      </p>
      <div class="socials">
        <a href="#" aria-label="LinkedIn">${icon('linkedin')}</a>
        <a href="#" aria-label="Facebook">${icon('facebook')}</a>
        <a href="#" aria-label="Instagram">${icon('instagram')}</a>
        <a href="mailto:info@smartrecruiters.co.ug" aria-label="Email">${icon('mail')}</a>
      </div>
    </div>

    <div>
      <h4>Quick Links</h4>
      <ul class="site-footer__links">
        <li><a href="index.html">Home</a></li>
        <li><a href="find-a-job.html">Find a Job</a></li>
        <li><a href="employers.html">Employers</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="resources.html">Career Resources</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>

    <div>
      <h4>Job Seekers</h4>
      <ul class="site-footer__links">
        <li><a href="find-a-job.html">Search Jobs</a></li>
        <li><a href="submit-cv.html">Submit Your CV</a></li>
        <li><a href="resources.html#cv-tips">CV Advice</a></li>
        <li><a href="resources.html#interview-tips">Interview Advice</a></li>
        <li><a href="resources.html#career-development">Career Development</a></li>
        <li><a href="job-alerts.html">Job Alerts</a></li>
      </ul>
    </div>

    <div>
      <h4>Employers</h4>
      <ul class="site-footer__links">
        <li><a href="services.html">Our Services</a></li>
        <li><a href="submit-vacancy.html">Submit a Vacancy</a></li>
        <li><a href="recruitment-process.html">Recruitment Process</a></li>
        <li><a href="employer-resources.html">Employer Resources</a></li>
        <li><a href="consultation.html">Request Consultation</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>

    <div>
      <h4>Get in Touch</h4>
      <ul class="contact-list">
        <li>${icon('mapPin')}<span>Kampala, Uganda</span></li>
        <li>${icon('phone')}<a href="tel:+256700000000">+256 700 000 000</a></li>
        <li>${icon('mail')}<a href="mailto:info@smartrecruiters.co.ug">info@smartrecruiters.co.ug</a></li>
        <li>${icon('globe')}<a href="#">www.smartrecruiters.co.ug</a></li>
      </ul>
    </div>
  </div>

  <div class="container site-footer__bottom">
    <p style="margin:0">&copy; <span data-year>2026</span> Smart Recruiters Limited. All Rights Reserved.</p>
    <ul class="footer-legal">
      <li><a href="privacy-policy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms and Conditions</a></li>
      <li><a href="cookie-policy.html">Cookie Policy</a></li>
      <li><a href="ethical-recruitment.html">Ethical Recruitment</a></li>
    </ul>
  </div>
</footer>

<div class="mobile-cta">
  <a class="btn btn--outline" href="submit-vacancy.html">${icon('building')} Hire Talent</a>
  <a class="btn btn--primary" href="find-a-job.html">${icon('search')} Find a Job</a>
</div>

<button class="to-top" type="button" aria-label="Back to top">${icon('arrowUp')}</button>

<script src="assets/js/icons.js"></script>
<script src="assets/js/data.js"></script>
<script src="assets/js/app.js"></script>`;
}

function page({ file, title, description, current, body, bodyClass = '' }) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta name="theme-color" content="#0a2540">
${FAVICON}
${HEAD}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
${header(current)}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, file), html, 'utf8');
  console.log('wrote', file);
}

function crumbs(items) {
  return `<nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>
          ${items.map((i, n) => n === items.length - 1 && i.current
            ? `<li aria-current="page">${i.label}</li>`
            : `<li><a href="${i.href}">${i.label}</a></li>`).join('\n          ')}
        </ol>
      </nav>`;
}

function hero({ eyebrow, h1, p, trail }) {
  return `<section class="page-hero">
    <div class="container">
      ${crumbs(trail)}
      <span class="eyebrow">${eyebrow}</span>
      <h1>${h1}</h1>
      <p>${p}</p>
    </div>
  </section>`;
}

module.exports = { page, hero, crumbs, icon, ROOT };