/* Employer-facing pages */
module.exports = ({ page, hero, icon }) => {

  /* ============ FOR EMPLOYERS ============ */
  page({
    file: 'employers.html',
    title: 'For Employers | Hire Talent | Smart Recruiters Limited',
    description: 'Smart Recruiters Limited helps organisations simplify recruitment by sourcing, screening and presenting candidates who match your requirements.',
    current: 'employers',
    body: `
${hero({
  eyebrow: 'For employers',
  h1: 'Find the Right Talent',
  p: 'At Smart Recruiters Limited, we help organisations find people who can contribute to their growth.',
  trail: [{ label: 'For Employers', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">Need to hire?</span>
        <h2>Looking for the right talent?</h2>
        <p class="lede">
          Finding the right employee can be challenging. We help organisations simplify the
          recruitment process by sourcing, screening and presenting candidates who match their
          requirements.
        </p>
        <p>
          We work with employers to understand their needs and provide recruitment solutions that
          save time while improving the quality of hiring decisions.
        </p>
        <div class="btn-row mt-3">
          <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
          <a class="btn btn--outline btn--lg" href="consultation.html">${icon('message')} Talk to Our Team</a>
        </div>
      </div>
      <div class="split__media">
        <div class="media-card">
          <h3>What you get from us</h3>
          <ul class="check-list" style="margin-top:16px">
            <li>A clear scope and profile before sourcing starts</li>
            <li>Candidates assessed against agreed criteria</li>
            <li>A shortlist you can act on, not a stack of CVs</li>
            <li>Interview coordination and follow-up</li>
            <li>Transparent timelines at every stage</li>
          </ul>
          <div class="media-card__stat">
            <div><b>8</b><span>Process stages</span></div>
            <div><b>12</b><span>Industries</span></div>
            <div><b>7</b><span>Services</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Our services</span>
      <h2>Recruitment services for every hiring need</h2>
      <p>Choose the approach that matches your requirement — we will recommend the best fit.</p>
    </div>
    <div class="grid grid-auto" id="services-grid"></div>
    <div class="btn-row btn-row--center mt-4">
      <a class="btn btn--primary" href="services.html">Our Recruitment Services ${icon('arrowRight')}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">How it works</span>
      <h2>Our recruitment process at a glance</h2>
      <p>Eight clear stages, so you always know what is happening with your vacancy.</p>
    </div>
    <div class="steps" id="process-steps"></div>
    <div class="btn-row btn-row--center mt-4">
      <a class="btn btn--outline" href="recruitment-process.html">See the full process ${icon('arrowRight')}</a>
    </div>
  </div>
</section>

<section class="section section--navy">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;gap:48px">
      <div>
        <span class="eyebrow">Employer resources</span>
        <h2>Get your job description right first</h2>
        <p>
          Most hiring problems start with an unclear vacancy. Our employer resources explain how to
          write effective job descriptions, plan recruitment and run fair, structured interviews.
        </p>
        <div class="btn-row mt-3">
          <a class="btn btn--primary" href="employer-resources.html">${icon('book')} Employer Resources</a>
          <a class="btn btn--ghost-light" href="consultation.html">${icon('clipboard')} Request Consultation</a>
        </div>
      </div>
      <div>
        <ul class="feature-list">
          <li>Writing effective job descriptions</li>
          <li>Recruitment planning before you advertise</li>
          <li>Structured and fair interviewing</li>
          <li>Writing adverts that attract the right candidates</li>
          <li>Onboarding advice for new hires</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Get started</span>
        <h2>Tell us about your vacancy</h2>
        <p>
          Our team will contact you to understand your recruitment needs and recommend the
          appropriate recruitment solution.
        </p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
        <a class="btn btn--ghost-light btn--lg" href="consultation.html">${icon('message')} Talk to Our Team</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ SUBMIT VACANCY ============ */
  page({
    file: 'submit-vacancy.html',
    title: 'Submit a Vacancy | Smart Recruiters Limited',
    description: 'Submit your vacancy to Smart Recruiters Limited. Tell us about the role and our team will contact you to discuss your recruitment needs.',
    current: 'employers',
    body: `
${hero({
  eyebrow: 'For employers',
  h1: 'Submit a Vacancy',
  p: 'Tell us about your vacancy and our team will contact you to understand your recruitment needs and recommend the right solution.',
  trail: [
    { label: 'For Employers', href: 'employers.html' },
    { label: 'Submit a Vacancy', current: true }
  ]
})}

<section class="section">
  <div class="container">
    <div class="grid" style="grid-template-columns:1fr 340px;gap:40px;align-items:start">
      <div>
        <div data-form-wrap>
          <div class="alert alert--info">
            ${icon('info')}
            <div>
              <b>The more detail you give, the faster we can help</b>
              A clear brief helps us send a shortlist you can actually act on — rather than a
              large number of unsuitable applications.
            </div>
          </div>

          <form data-srl-form="vacancy" novalidate>
            <h2 class="mt-0">Organisation details</h2>
            <div class="field">
              <label for="v-org">Organisation Name <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="v-org" name="company" required autocomplete="organization">
              <span class="field__error"></span>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="v-name">Contact Person <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="text" id="v-name" name="fullName" required autocomplete="name">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="v-role">Your Job Title</label>
                <input class="input" type="text" id="v-role" name="role" placeholder="e.g. HR Manager">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="v-email">Email Address <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="email" id="v-email" name="email" required autocomplete="email">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="v-phone">Phone Number <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="tel" id="v-phone" name="phone" required autocomplete="tel">
                <span class="field__error"></span>
              </div>
            </div>

            <h2>Vacancy details</h2>
            <div class="field">
              <label for="v-title">Job Title <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="v-title" name="jobTitle" required placeholder="e.g. Human Resources Officer">
              <span class="field__error"></span>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="v-location">Location <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="text" id="v-location" name="location" required placeholder="e.g. Kampala, Uganda">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="v-vacancies">Number of Vacancies <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="number" id="v-vacancies" name="vacancies" required min="1" value="1">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="v-industry">Industry <span class="req" aria-hidden="true">*</span></label>
                <select class="select" id="v-industry" name="industry" required>
                  <option value="">Select an industry</option>
                </select>
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="v-type">Employment Type <span class="req" aria-hidden="true">*</span></label>
                <select class="select" id="v-type" name="contractType" required>
                  <option value="">Select a type</option>
                  <option>Permanent</option>
                  <option>Contract</option>
                  <option>Temporary</option>
                  <option>Internship</option>
                  <option>Part-time</option>
                  <option>Full-time</option>
                </select>
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="v-salary">Salary or Compensation Range</label>
                <input class="input" type="text" id="v-salary" name="salary" placeholder="e.g. UGX 2,000,000 – 3,000,000 monthly">
                <span class="hint">A range helps us attract the right candidates.</span>
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="v-start">Required Start Date</label>
                <input class="input" type="date" id="v-start" name="startDate">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field">
              <label for="v-desc">Role Description and Responsibilities <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="v-desc" name="message" required data-minlen="40" maxlength="2500" placeholder="Describe the purpose of the role, main duties and what success looks like."></textarea>
              <span class="hint">Tip: a list of key responsibilities is clearer than a paragraph.</span>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="v-requirements">Required Qualifications and Experience</label>
              <textarea class="textarea" id="v-requirements" name="qualifications" maxlength="2000" placeholder="Education, professional qualifications, required experience and skills."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="v-service">Recruitment service required</label>
              <div class="choice-group">
                <label class="choice"><input type="radio" name="service" value="Not sure — please advise"> ${icon('message')} Not sure — please advise</label>
                <label class="choice"><input type="radio" name="service" value="Permanent Recruitment"> ${icon('briefcase')} Permanent</label>
                <label class="choice"><input type="radio" name="service" value="Contract &amp; Temporary"> ${icon('clock')} Contract / Temporary</label>
                <label class="choice"><input type="radio" name="service" value="Graduate Recruitment"> ${icon('graduation')} Graduate</label>
                <label class="choice"><input type="radio" name="service" value="Executive Search"> ${icon('award')} Executive Search</label>
                <label class="choice"><input type="radio" name="service" value="Bulk Recruitment"> ${icon('layers')} Bulk</label>
                <label class="choice"><input type="radio" name="service" value="Talent Sourcing"> ${icon('target')} Talent Sourcing</label>
                <label class="choice"><input type="radio" name="service" value="Recruitment Consulting"> ${icon('clipboard')} Consulting</label>
              </div>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label class="check">
                <input type="checkbox" name="consent" required data-msg="Please confirm before submitting.">
                <span>I confirm the vacancy details are accurate and consent to Smart Recruiters
                Limited processing this information to respond to my recruitment request, as
                described in the <a href="privacy-policy.html">Privacy Policy</a>.</span>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="form-actions">
              <button class="btn btn--primary btn--lg" type="submit">Submit a Vacancy ${icon('send')}</button>
              <a class="btn btn--outline" href="consultation.html">Talk to Our Team instead</a>
            </div>

            <p class="form-note">${icon('lock')}<span>Your organisation's information is kept confidential and shared only with shortlisted candidates for this role.</span></p>
          </form>
        </div>

        <div data-form-live hidden>
          <div class="form-success">
            <div class="form-success__icon">${icon('check')}</div>
            <h2>Vacancy submitted</h2>
            <p class="text-muted">
              Thank you. Your vacancy has been received and recorded. Our team will review the
              brief and contact you to discuss requirements, timelines and the most suitable
              recruitment solution.
            </p>
            <div class="recap" data-recap></div>
            <p class="alert alert--warn" data-save-note hidden style="text-align:left"></p>
            <div class="btn-row btn-row--center">
              <a class="btn btn--primary" href="services.html">Explore our services</a>
              <a class="btn btn--outline" href="recruitment-process.html">See the process</a>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="apply-panel">
          <h3>What happens next</h3>
          <ol class="dot-list" style="margin-top:14px">
            <li>We review your brief and identify the right approach.</li>
            <li>A consultant contacts you to clarify requirements.</li>
            <li>We agree a profile, timeline and shortlisting criteria.</li>
            <li>Sourcing and screening begin.</li>
          </ol>
          <a class="btn btn--outline btn--block mt-3" href="recruitment-process.html">${icon('layers')} See our process</a>
          <a class="btn btn--outline btn--block mt-2" href="employer-resources.html">${icon('book')} Employer resources</a>
        </div>

        <div class="card mt-3">
          <h3>Hiring several people?</h3>
          <p>If you need to recruit multiple employees within a short period, ask about our bulk recruitment service.</p>
          <a class="btn btn--navy btn--sm btn--block mt-2" href="services.html#bulk-recruitment">Bulk Recruitment</a>
        </div>

        <div class="card mt-3">
          <h3>Speak to someone directly</h3>
          <p>Prefer to talk it through? Request a consultation and we will call you back.</p>
          <a class="btn btn--outline btn--sm btn--block mt-2" href="consultation.html">Request Consultation</a>
        </div>
      </aside>
    </div>
  </div>
</section>`
  });

  /* ============ CONSULTATION ============ */
  page({
    file: 'consultation.html',
    title: 'Request Consultation | Smart Recruiters Limited',
    description: 'Request a recruitment consultation with Smart Recruiters Limited. Tell us about your hiring needs and our team will contact you.',
    current: 'employers',
    body: `
${hero({
  eyebrow: 'For employers',
  h1: 'Request a Consultation',
  p: 'Not sure which recruitment service fits your organisation? Request a consultation and one of our consultants will talk it through with you.',
  trail: [
    { label: 'For Employers', href: 'employers.html' },
    { label: 'Request Consultation', current: true }
  ]
})}

<section class="section">
  <div class="container">
    <div class="grid" style="grid-template-columns:1fr 340px;gap:40px;align-items:start">
      <div>
        <div data-form-wrap>
          <div class="alert alert--info">
            ${icon('message')}
            <div>
              <b>A consultation is free and no obligation</b>
              We will discuss your roles, timeline and the recruitment approach that makes the most
              sense — even if that is not to use our services.
            </div>
          </div>

          <form data-srl-form="consultation" novalidate>
            <div class="field-row">
              <div class="field">
                <label for="c-name">Full Name <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="text" id="c-name" name="fullName" required autocomplete="name">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="c-org">Organisation <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="text" id="c-org" name="company" required autocomplete="organization">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="c-email">Email Address <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="email" id="c-email" name="email" required autocomplete="email">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="c-phone">Phone Number <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="tel" id="c-phone" name="phone" required autocomplete="tel">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field">
              <label for="c-subject">Subject <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="c-subject" name="subject" required placeholder="e.g. Consultation on bulk recruitment for 20 staff">
              <span class="field__error"></span>
            </div>

            <div class="field">
              <span class="label">I am a <span class="req" aria-hidden="true">*</span></span>
              <div class="choice-group">
                <label class="choice"><input type="radio" name="iama" value="Employer" required> ${icon('building')} Employer</label>
                <label class="choice"><input type="radio" name="iama" value="Job Seeker" required> ${icon('user')} Job Seeker</label>
                <label class="choice"><input type="radio" name="iama" value="Other" required> ${icon('users')} Other</label>
              </div>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="c-message">How can we help? <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="c-message" name="message" required data-minlen="30" maxlength="2000" placeholder="Tell us about your hiring needs, roles, timeline and any specific challenges you are facing."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label class="check">
                <input type="checkbox" name="consent" required data-msg="Please confirm before submitting.">
                <span>I consent to Smart Recruiters Limited contacting me about this request, as
                described in the <a href="privacy-policy.html">Privacy Policy</a>.</span>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="form-actions">
              <button class="btn btn--primary btn--lg" type="submit">Send Message ${icon('send')}</button>
              <a class="btn btn--outline" href="submit-vacancy.html">Submit a vacancy instead</a>
            </div>
          </form>
        </div>

        <div data-form-live hidden>
          <div class="form-success">
            <div class="form-success__icon">${icon('check')}</div>
            <h2>Request received</h2>
            <p class="text-muted">
              Thank you. One of our consultants will contact you as soon as possible to arrange a
              convenient time to talk.
            </p>
            <div class="recap" data-recap></div>
            <p class="alert alert--warn" data-save-note hidden style="text-align:left"></p>
            <div class="btn-row btn-row--center">
              <a class="btn btn--primary" href="services.html">Explore our services</a>
              <a class="btn btn--outline" href="index.html">Back to home</a>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="apply-panel">
          <h3>Contact details</h3>
          <ul class="contact-list contact-list--light" style="margin-top:14px">
            <li style="margin-bottom:14px">${icon('mapPin')}<span>Kampala, Uganda</span></li>
            <li style="margin-bottom:14px">${icon('phone')}<a href="tel:+256700000000">+256 700 000 000</a></li>
            <li style="margin-bottom:14px">${icon('mail')}<a href="mailto:info@smartrecruiters.co.ug">info@smartrecruiters.co.ug</a></li>
            <li>${icon('clock')}<span>Monday – Friday, 9:00 – 17:00</span></li>
          </ul>
        </div>

        <div class="card mt-3">
          <h3>Common reasons to book a consultation</h3>
          <ul class="dot-list mt-2" style="font-size:.92rem">
            <li>You are not sure which service fits</li>
            <li>You need several people hired quickly</li>
            <li>A senior or specialist role is hard to fill</li>
            <li>Your current hiring process is not working</li>
            <li>You want to improve your job advertisements</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>`
  });

  /* ============ RECRUITMENT PROCESS ============ */
  page({
    file: 'recruitment-process.html',
    title: 'Recruitment Process | Smart Recruiters Limited',
    description: 'Our eight-stage recruitment process: Understand, Source, Screen, Assess, Shortlist, Select, Place and Follow Up.',
    current: 'employers',
    body: `
${hero({
  eyebrow: 'For employers',
  h1: 'Our Recruitment Process',
  p: 'A clear, structured eight-stage method that keeps your hiring decision informed, fair and on schedule.',
  trail: [
    { label: 'For Employers', href: 'employers.html' },
    { label: 'Recruitment Process', current: true }
  ]
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start;gap:48px">
      <div>
        <span class="eyebrow">Step by step</span>
        <h2>What happens after you submit a vacancy</h2>
        <p class="lede">
          Every engagement follows the same core process. We agree the timeline and shortlisting
          criteria with you before sourcing begins.
        </p>
        <div class="timeline-note mt-3">
          ${icon('clock')}
          Timelines vary depending on the role, the number of people required and the
          qualifications involved. We agree a realistic schedule with each client up front.
        </div>
        <div class="btn-row mt-4">
          <a class="btn btn--primary" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
          <a class="btn btn--outline" href="consultation.html">Request Consultation</a>
        </div>
      </div>
      <div>
        <div class="stat-strip">
          <div><b>8</b><span>Stages per hire</span></div>
          <div><b>7</b><span>Service types</span></div>
          <div><b>12</b><span>Industries</span></div>
          <div><b>100%</b><span>Structured</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container container--narrow">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">The eight stages</span>
      <h2>Our recruitment process in detail</h2>
    </div>
    <div class="steps steps--vertical" id="process-vertical"></div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Choosing an approach</span>
      <h2>Which service fits your need?</h2>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card__icon">${icon('briefcase')}</div>
        <h3>Permanent Recruitment</h3>
        <p>For roles that support long-term organisational growth and need a committed, permanent hire.</p>
        <div class="card__foot"><a class="link-arrow" href="services.html#permanent-recruitment">Learn more ${icon('arrowRight')}</a></div>
      </div>
      <div class="card">
        <div class="card__icon">${icon('clock')}</div>
        <h3>Contract &amp; Temporary</h3>
        <p>For project-based work, short-term cover or flexible capacity without a permanent commitment.</p>
        <div class="card__foot"><a class="link-arrow" href="services.html#contract-temporary">Learn more ${icon('arrowRight')}</a></div>
      </div>
      <div class="card">
        <div class="card__icon">${icon('layers')}</div>
        <h3>Bulk Recruitment</h3>
        <p>For organisations that need to hire several employees within a short, defined period.</p>
        <div class="card__foot"><a class="link-arrow" href="services.html#bulk-recruitment">Learn more ${icon('arrowRight')}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Start hiring</span>
        <h2>Ready to begin?</h2>
        <p>Submit your vacancy and our team will contact you to confirm your requirements and timeline.</p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
        <a class="btn btn--ghost-light" href="services.html">${icon('layers')} Our Recruitment Services</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ EMPLOYER RESOURCES ============ */
  page({
    file: 'employer-resources.html',
    title: 'Employer Resources | Smart Recruiters Limited',
    description: 'Practical employer guidance from Smart Recruiters Limited: writing effective job descriptions, recruitment planning and interviewing candidates fairly.',
    current: 'employers',
    body: `
${hero({
  eyebrow: 'For employers',
  h1: 'Resources for Employers',
  p: 'Recruitment decisions have a major impact on an organisation. These resources provide practical guidance for attracting, assessing and retaining talent.',
  trail: [
    { label: 'For Employers', href: 'employers.html' },
    { label: 'Employer Resources', current: true }
  ]
})}

<div data-tabs>
  <div class="container">
    <div class="tabs">
      <ul class="tabs__list" role="tablist">
        <li role="presentation"><button class="tabs__btn" type="button" role="tab" aria-selected="true" data-target="panel-jd">Job Descriptions</button></li>
        <li role="presentation"><button class="tabs__btn" type="button" role="tab" aria-selected="false" data-target="panel-planning">Recruitment Planning</button></li>
        <li role="presentation"><button class="tabs__btn" type="button" role="tab" aria-selected="false" data-target="panel-interviews">Interviewing Candidates</button></li>
        <li role="presentation"><button class="tabs__btn" type="button" role="tab" aria-selected="false" data-target="panel-adverts">Writing Adverts</button></li>
        <li role="presentation"><button class="tabs__btn" type="button" role="tab" aria-selected="false" data-target="panel-onboarding">Onboarding</button></li>
      </ul>
    </div>
  </div>
</div>

<section class="section section--tight">
  <div class="container">
    <div data-tabs-panel="panel-jd">
      <article class="article">
        <h2>Writing Effective Job Descriptions</h2>
        <p class="lede">
          A good job description should clearly explain what the role is, what the person will do
          and what they need to succeed.
        </p>
        <h3>A clear job description should cover</h3>
        <div class="grid grid-2">
          <ul class="feature-list">
            <li>Job title</li>
            <li>Main purpose of the role</li>
            <li>Key responsibilities</li>
            <li>Required qualifications</li>
            <li>Required skills</li>
          </ul>
          <ul class="feature-list">
            <li>Experience requirements</li>
            <li>Reporting relationships</li>
            <li>Location</li>
            <li>Employment type</li>
          </ul>
        </div>
        <div class="timeline-note mt-4">
          ${icon('lightbulb')}
          A clear job description helps attract candidates who understand what the organisation
          expects from them — and it reduces the number of unsuitable applications.
        </div>
        <h3>Job title</h3>
        <p>
          Use a title that candidates will recognise and search for. Avoid internal jargon or
          abbreviations that only exist inside your organisation.
        </p>
        <h3>Purpose of the role</h3>
        <p>
          Open with two or three sentences explaining why the position exists and what the
          organisation expects the person to achieve.
        </p>
        <h3>Key responsibilities</h3>
        <p>
          List the core duties in order of importance. Five to eight clear bullets is usually
          better than a long paragraph. Focus on what the person will actually do.
        </p>
        <h3>Qualifications and skills</h3>
        <p>
          Separate <strong>essential</strong> requirements from those that are
          <strong>preferred</strong>. Demanding every preferred criterion as essential is one of
          the most common reasons good candidates self-exclude.
        </p>
        <h3>Reporting relationships</h3>
        <p>
          State who the role reports to and, where relevant, who the person supervises. This sets
          realistic expectations about seniority and decision-making authority.
        </p>
      </article>
    </div>

    <div data-tabs-panel="panel-planning" hidden>
      <article class="article">
        <h2>Recruitment Planning</h2>
        <p class="lede">
          Before beginning recruitment, employers should clearly identify what the position is for
          and what success looks like. Good recruitment starts with good planning.
        </p>
        <h3>Before you advertise, decide</h3>
        <ol class="tip-list">
          <li>Why the position is needed</li>
          <li>Responsibilities of the position</li>
          <li>Required qualifications</li>
          <li>Required experience</li>
          <li>Essential skills</li>
          <li>Preferred skills</li>
          <li>Salary or compensation range</li>
          <li>Recruitment timeline</li>
        </ol>
        <h3>Why this matters</h3>
        <p>
          Agreeing these points internally before sourcing starts prevents most of the delays and
          disagreements that occur later. It also gives you a clear standard against which
          candidates can be assessed fairly.
        </p>
        <div class="timeline-note mt-4">
          ${icon('clock')}
          Agreeing a realistic timeline early keeps candidates informed and reduces the risk of
          losing strong applicants to competing offers.
        </div>
      </article>
    </div>

    <div data-tabs-panel="panel-interviews" hidden>
      <article class="article">
        <h2>Interviewing Candidates</h2>
        <p class="lede">
          Employers should use structured and fair interviews that allow candidates to demonstrate
          their knowledge, skills and experience.
        </p>
        <h3>What good interviewing looks like</h3>
        <ul class="feature-list">
          <li>Interview questions relate to the actual requirements of the position</li>
          <li>Candidates can give relevant examples from their own experience</li>
          <li>All candidates are assessed against the same criteria</li>
          <li>Interviewers record evidence against each criterion as they go</li>
          <li>Every candidate is treated with respect and given a clear next step</li>
        </ul>
        <h3>Use behavioural questions</h3>
        <p>
          Ask for specific examples of past behaviour. Questions such as
          &ldquo;Tell me about a time you&hellip;&rdquo; produce far more reliable evidence of
          capability than hypothetical questions such as &ldquo;How would you handle&hellip;?&rdquo;
        </p>
        <h3>Reduce bias</h3>
        <p>
          Decide your assessment criteria before the first interview, use the same core questions
          for every candidate, and score against those criteria rather than against impressions.
        </p>
        <div class="timeline-note mt-4">
          ${icon('shield')}
          Fair, structured interviews improve both the quality of your hire and the candidate
          experience — including for candidates you do not select.
        </div>
        <h3>Close the loop</h3>
        <p>
          Tell candidates where they stand, even when the answer is no. A clear, respectful rejection
          protects your employer brand and costs nothing.
        </p>
      </article>
    </div>

    <div data-tabs-panel="panel-adverts" hidden>
      <article class="article">
        <h2>Writing Job Adverts That Attract the Right People</h2>
        <p class="lede">
          Your advert is often the first contact a candidate has with your organisation. It should
          be honest, specific and easy to scan.
        </p>
        <h3>Lead with the opportunity</h3>
        <p>
          Open with what the role involves and why it matters, not with a list of company history.
          Candidates decide quickly whether to keep reading.
        </p>
        <h3>Be specific about the basics</h3>
        <ul class="feature-list">
          <li>Location and whether the role is on-site, hybrid or remote</li>
          <li>Employment type and expected hours</li>
          <li>Salary range where possible</li>
          <li>Experience level required</li>
          <li>Clear application instructions and deadline</li>
        </ul>
        <h3>Describe the organisation honestly</h3>
        <p>
          Explain what the organisation does, who the person will work with and what the team is
          trying to achieve. Vague claims attract vague applicants.
        </p>
        <div class="timeline-note mt-4">
          ${icon('info')}
          Include an application deadline. Open-ended adverts attract a large volume of
          low-quality applications and delay the shortlist.
        </div>
      </article>
    </div>

    <div data-tabs-panel="panel-onboarding" hidden>
      <article class="article">
        <h2>Onboarding New Employees</h2>
        <p class="lede">
          A good start decides whether a new hire stays. Onboarding should be planned before the
          person arrives, not after their first week.
        </p>
        <h3>Before the first day</h3>
        <ul class="feature-list">
          <li>Confirm equipment, access and workspace requirements</li>
          <li>Send a welcome message with day-one arrangements</li>
          <li>Share an agenda for the first week</li>
          <li>Brief the team about the new hire's role and start date</li>
        </ul>
        <h3>During the first weeks</h3>
        <ul class="feature-list">
          <li>Walk through policies, processes and expectations</li>
          <li>Set clear objectives for the first three months</li>
          <li>Schedule regular check-ins with the line manager</li>
          <li>Identify training and development needs early</li>
        </ul>
        <div class="timeline-note mt-4">
          ${icon('thumbsUp')}
          Candidates who have a positive onboarding experience are significantly more likely to
          stay — and are far more likely to recommend your organisation to others.
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Need guidance?</span>
      <h2>Let us help you hire better</h2>
      <p>Our consultants can review your job descriptions and advise on the right recruitment approach.</p>
    </div>
    <div class="btn-row btn-row--center">
      <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
      <a class="btn btn--outline btn--lg" href="consultation.html">${icon('message')} Request Consultation</a>
    </div>
  </div>
</section>`
  });

  /* ============ SERVICES ============ */
  page({
    file: 'services.html',
    title: 'Our Recruitment Services | Smart Recruiters Limited',
    description: 'Permanent recruitment, contract and temporary recruitment, graduate recruitment, executive search, bulk recruitment, talent sourcing and recruitment consulting.',
    current: 'services',
    body: `
${hero({
  eyebrow: 'What we do',
  h1: 'Recruitment Services',
  p: 'Seven services, each built around a specific hiring need — from a single permanent role to a multi-phase graduate programme.',
  trail: [{ label: 'Services', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="grid grid-4" id="services-grid"></div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div id="services-detail"></div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Industries</span>
      <h2>Sectors we know</h2>
      <p>Sector familiarity means faster sourcing and more accurate shortlists.</p>
    </div>
    <div class="grid grid-4" id="industries-grid"></div>
    <div class="btn-row btn-row--center mt-4">
      <a class="btn btn--outline" href="industries.html">View all industries ${icon('arrowRight')}</a>
    </div>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Not sure which service?</span>
        <h2>Tell us about your vacancy</h2>
        <p>We will review your requirement and recommend the most suitable recruitment solution.</p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
        <a class="btn btn--ghost-light" href="consultation.html">${icon('message')} Talk to Our Team</a>
      </div>
    </div>
  </div>
</section>`
  });

};