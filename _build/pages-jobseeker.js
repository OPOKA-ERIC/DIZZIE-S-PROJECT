/* Job seeker pages */
module.exports = ({ page, hero, icon }) => {

  /* ============ FIND A JOB ============ */
  page({
    file: 'find-a-job.html',
    title: 'Search Jobs | Smart Recruiters Limited',
    description: 'Search and filter live vacancies by job title, keyword, location, industry, employment type, experience level and date posted. Find your next opportunity in Uganda.',
    current: 'find-a-job',
    body: `
${hero({
  eyebrow: 'For job seekers',
  h1: 'Find Your Next Opportunity',
  p: 'Your next career opportunity could be closer than you think. Browse available vacancies and find positions that match your qualifications, skills, experience and career goals.',
  trail: [{ label: 'Find a Job', current: true }]
})}

<section class="search-panel">
  <div class="container">
    <div class="search-panel__card">
      <div class="search-panel__head">
        <h2>Search Jobs</h2>
        <p>Search and filter by job title, keyword, location, industry, employment type, experience level or date posted.</p>
      </div>
      <div class="search-grid search-grid--compact">
        <div class="field">
          <label for="f-title">Job title or keyword</label>
          <input class="input" type="search" id="f-title" placeholder="e.g. accountant" autocomplete="off">
        </div>
        <div class="field">
          <label for="f-location">Location</label>
          <input class="input" type="search" id="f-location" placeholder="e.g. Kampala" autocomplete="off">
        </div>
        <div class="field">
          <label for="f-industry">Industry</label>
          <select class="select" id="f-industry"><option value="">All industries</option></select>
        </div>
        <div class="field">
          <label for="f-type">Employment type</label>
          <select class="select" id="f-type"><option value="">All types</option></select>
        </div>
      </div>
      <div class="field-row mt-2">
        <div class="field">
          <label for="f-level">Experience level</label>
          <select class="select" id="f-level"><option value="">All levels</option></select>
        </div>
        <div class="field">
          <label for="f-sort">Sort by</label>
          <select class="select sort-select" id="f-sort">
            <option value="">Most relevant</option>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="closing">Closing soonest</option>
            <option value="title">Job title (A–Z)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="jobs-layout">
      <aside class="filters" aria-label="Filter vacancies">
        <div class="jobs-toolbar" style="margin-bottom:6px">
          <h2 style="font-size:1.06rem;margin:0">Filters</h2>
          <button class="filters__reset" type="button" id="f-reset">Reset all</button>
        </div>

        <div class="filters__group">
          <span class="label">Experience level</span>
          <div class="filters__options">
            <p class="text-muted" style="font-size:.86rem;margin:0">Use the dropdown above, or clear it here to show every level.</p>
          </div>
        </div>

        <div class="filters__group">
          <span class="label">Quick links</span>
          <div class="filters__options">
            <a class="link-arrow" href="job-alerts.html">${icon('bell')} Create a job alert</a>
            <a class="link-arrow" href="submit-cv.html">${icon('upload')} Submit your CV instead</a>
            <a class="link-arrow" href="resources.html#cv-tips">${icon('fileText')} Get CV advice</a>
            <a class="link-arrow" href="resources.html#interview-tips">${icon('message')} Interview tips</a>
          </div>
        </div>

        <div class="filters__group">
          <span class="label">No luck yet?</span>
          <p class="text-muted" style="font-size:.88rem">
            Submit your CV and we will contact you when a matching role is posted.
          </p>
          <a class="btn btn--primary btn--sm btn--block" href="submit-cv.html">Submit Your CV</a>
        </div>
      </aside>

      <div>
        <div class="jobs-toolbar">
          <p class="jobs-toolbar__count" id="job-count" style="margin:0"></p>
        </div>
        <div class="chip-row" id="active-chips" style="margin-bottom:16px"></div>

        <div id="job-list"></div>

        <div class="empty-state" id="job-empty" hidden>
          <div class="empty-state__icon">${icon('search')}</div>
          <h2>No vacancies match your search</h2>
          <p class="text-muted">
            Try a broader keyword, remove a filter, or submit your CV so we can contact you when
            a matching opportunity is posted.
          </p>
          <div class="btn-row btn-row--center mt-3">
            <button class="btn btn--outline" type="button" onclick="document.getElementById('f-reset').click()">Clear filters</button>
            <a class="btn btn--primary" href="submit-cv.html">Submit Your CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft section--tight">
  <div class="container">
    <div class="grid grid-3">
      <a class="card card--hover resource-card" href="resources.html#cv-tips">
        <div class="resource-card__meta">${icon('fileText')} Tip</div>
        <h3>Build a CV that gets noticed</h3>
        <p>Ten practical rules for a CV that shows an employer exactly why you are suitable.</p>
        <span class="link-arrow">Read CV advice ${icon('arrowRight')}</span>
      </a>
      <a class="card card--hover resource-card" href="resources.html#interview-tips">
        <div class="resource-card__meta">${icon('message')} Tip</div>
        <h3>Prepare for the interview</h3>
        <p>What to research, how to answer, and what to do after — before, during and after.</p>
        <span class="link-arrow">Read interview tips ${icon('arrowRight')}</span>
      </a>
      <a class="card card--hover resource-card" href="job-alerts.html">
        <div class="resource-card__meta">${icon('bell')} Tool</div>
        <h3>Never miss a vacancy</h3>
        <p>Set a job alert and get matching opportunities sent to your email.</p>
        <span class="link-arrow">Create a job alert ${icon('arrowRight')}</span>
      </a>
    </div>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Are you an employer?</span>
        <h2>Post a vacancy with Smart Recruiters</h2>
        <p>
          Tell us about the role and our team will contact you to understand your recruitment
          needs and recommend the right solution.
        </p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
        <a class="btn btn--ghost-light" href="employers.html">Hire Talent ${icon('arrowRight')}</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ JOB DETAILS ============ */
  page({
    file: 'job-details.html',
    title: 'Job Details | Smart Recruiters Limited',
    description: 'Full details of a vacancy including job overview, key responsibilities, qualifications, required skills, employer offers, application deadline and how to apply.',
    current: 'find-a-job',
    body: `
<div id="job-detail">
  <section class="page-hero">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="find-a-job.html">Find a Job</a></li>
          <li aria-current="page" id="job-crumb-title">Job Details</li>
        </ol>
      </nav>
      <span class="eyebrow">Vacancy details</span>
      <h1>Job Details</h1>
      <p>Every vacancy page shows the full description, requirements and how to apply — with no hidden steps.</p>
    </div>
  </section>
  <section class="section">
    <div class="container"><div class="empty-state">
      <div class="empty-state__icon">${icon('fileText')}</div>
      <h2>Loading vacancy…</h2>
      <p class="text-muted">If nothing loads, <a href="find-a-job.html">browse all vacancies</a>.</p>
    </div></div>
  </section>
</div>`
  });

  /* ============ APPLY ============ */
  page({
    file: 'apply.html',
    title: 'Apply for a Position | Smart Recruiters Limited',
    description: 'Submit your application for a vacancy. Complete the application form with your details, education, work experience and CV upload.',
    current: 'find-a-job',
    body: `
${hero({
  eyebrow: 'Application',
  h1: 'Apply for a Position',
  p: 'Interested in this opportunity? Complete the application form and submit your information for consideration.',
  trail: [
    { label: 'Find a Job', href: 'find-a-job.html' },
    { label: 'Apply', current: true }
  ]
})}

<section class="section">
  <div class="container">
    <div class="grid" style="grid-template-columns:1fr 340px;gap:40px;align-items:start" data-form-layout>
      <div>
        <div data-form-wrap>
          <div class="alert alert--info">
            ${icon('info')}
            <div>
              <b>Before you apply</b>
              Have an updated CV ready. Applications without a CV cannot be considered, and
              incomplete applications are usually not shortlisted.
            </div>
          </div>

          <div class="alert alert--info" id="app-job-wrap" hidden>
            ${icon('briefcase')}
            <div><span id="app-job-note"></span></div>
          </div>

          <form data-srl-form="application" novalidate>
            <input type="hidden" name="jobId" id="app-job-id">

            <h2 class="mt-0">Personal details</h2>
            <div class="field">
              <label for="app-name">Full Name <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="app-name" name="fullName" required autocomplete="name" placeholder="e.g. Sarah Nakato">
              <span class="field__error"></span>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="app-email">Email Address <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="email" id="app-email" name="email" required autocomplete="email" placeholder="you@example.com">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="app-phone">Phone Number <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="tel" id="app-phone" name="phone" required autocomplete="tel" placeholder="+256 7XX XXX XXX">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field">
              <label for="app-location">Current Location <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="app-location" name="location" required placeholder="e.g. Kampala, Uganda">
              <span class="field__error"></span>
            </div>

            <h2>Education and experience</h2>
            <div class="field">
              <label for="app-education">Education <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="app-education" name="education" required data-minlen="20" placeholder="List your highest qualification, institution and year of completion."></textarea>
              <span class="hint">e.g. Bachelor of Human Resource Management, Makerere University, 2021</span>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="app-experience">Work Experience <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="app-experience" name="experience" required data-minlen="20" placeholder="Summarise your relevant work experience, including roles, organisations and time served."></textarea>
              <span class="hint">Write &ldquo;None yet&rdquo; if you are applying for your first role.</span>
              <span class="field__error"></span>
            </div>

            <h2>Documents</h2>
            <div class="field">
              <label for="app-cv">CV Upload <span class="req" aria-hidden="true">*</span></label>
              <label class="file-drop" for="app-cv">
                <span class="file-drop__icon">${icon('upload')}</span>
                <span>
                  <b data-file-name-block>Click to upload your CV</b>
                  <span data-file-name class="file-drop__name" style="display:block;margin-top:2px"></span>
                  <span>PDF or DOCX, maximum 5 MB</span>
                </span>
                <input type="file" id="app-cv" name="cv" accept=".pdf,.doc,.docx,.rtf" required>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="app-cover">Cover Letter</label>
              <textarea class="textarea" id="app-cover" name="coverLetter" maxlength="1500" placeholder="Explain why you are suitable for this position."></textarea>
              <span class="hint">A short, specific cover letter strengthens your application considerably.</span>
              <span class="field__error"></span>
            </div>

            <h2>Additional information</h2>
            <div class="field">
              <label for="app-linkedin">LinkedIn Profile <span class="hint" style="display:inline">(if applicable)</span></label>
              <input class="input" type="url" id="app-linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/yourname">
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="app-additional">Additional Information</label>
              <textarea class="textarea" id="app-additional" name="additional" maxlength="1200" placeholder="Anything else we should know — availability, salary expectations, notice period, professional certificates."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label class="check">
                <input type="checkbox" name="consent" required data-msg="Please confirm before submitting.">
                <span>I confirm that the information provided is accurate and I consent to Smart
                Recruiters Limited processing it for recruitment purposes, as described in the
                <a href="privacy-policy.html">Privacy Policy</a>.</span>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="form-actions">
              <button class="btn btn--primary btn--lg" type="submit">Submit Application ${icon('send')}</button>
              <a class="btn btn--outline" href="find-a-job.html">Back to vacancies</a>
            </div>

            <p class="form-note">
              ${icon('lock')}
              <span>Your information is used only for this application and is never sold or shared
              with third parties for marketing.</span>
            </p>
          </form>
        </div>

        <div data-form-live hidden>
          <div class="form-success">
            <div class="form-success__icon">${icon('check')}</div>
            <h2>Application submitted</h2>
            <p class="text-muted">
              Thank you. Your application has been received and recorded. If your profile matches
              the requirements, you will be contacted for the next stage.
            </p>
            <div class="recap" data-recap></div>
            <p class="alert alert--warn" data-save-note hidden style="text-align:left"></p>
            <div class="btn-row btn-row--center">
              <a class="btn btn--primary" href="find-a-job.html">View more vacancies</a>
              <a class="btn btn--outline" href="submit-cv.html">Submit CV for future roles</a>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="apply-panel">
          <h3>What happens next</h3>
          <ol class="dot-list" style="margin-top:14px">
            <li>We confirm receipt of your application.</li>
            <li>Your CV is screened against the role requirements.</li>
            <li>Shortlisted candidates are contacted for interview.</li>
            <li>You receive a decision either way.</li>
          </ol>
          <a class="btn btn--outline btn--block mt-3" href="resources.html#interview-tips">${icon('message')} Get interview tips</a>
          <a class="btn btn--outline btn--block mt-2" href="resources.html#cv-tips">${icon('fileText')} Get CV advice</a>
          <a class="btn btn--outline btn--block mt-2" href="job-alerts.html">${icon('bell')} Create a job alert</a>
        </div>

        <div class="card mt-3">
          <h3>No vacancy selected?</h3>
          <p>You can submit your CV for future consideration without applying to a specific role.</p>
          <a class="btn btn--primary btn--sm btn--block mt-2" href="submit-cv.html">Submit Your CV</a>
        </div>
      </aside>
    </div>
  </div>
</section>`
  });

  /* ============ SUBMIT CV ============ */
  page({
    file: 'submit-cv.html',
    title: 'Submit Your CV | Smart Recruiters Limited',
    description: 'Submit your CV to the Smart Recruiters Limited talent database for consideration for current and future opportunities.',
    current: 'find-a-job',
    body: `
${hero({
  eyebrow: 'Talent database',
  h1: 'Submit Your CV',
  p: 'No suitable vacancy today? Send us your CV and we will contact you when an opportunity matching your profile is identified.',
  trail: [
    { label: 'Find a Job', href: 'find-a-job.html' },
    { label: 'Submit CV', current: true }
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
              <b>Why submit your CV?</b>
              Your details go into our talent database, which we search when employers brief us.
              We only contact you about roles that match your qualifications and career goals.
            </div>
          </div>

          <form data-srl-form="cv" novalidate>
            <div class="field-row">
              <div class="field">
                <label for="cv-name">Full Name <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="text" id="cv-name" name="fullName" required autocomplete="name">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="cv-email">Email Address <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="email" id="cv-email" name="email" required autocomplete="email">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="cv-phone">Phone Number <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="tel" id="cv-phone" name="phone" required autocomplete="tel">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="cv-location">Current Location <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="text" id="cv-location" name="location" required placeholder="e.g. Kampala, Uganda">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field">
              <label for="cv-role">Role You Are Seeking <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="cv-role" name="jobTitle" required placeholder="e.g. Human Resources Officer">
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="cv-education">Education <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="cv-education" name="education" required data-minlen="20" placeholder="Highest qualification, institution and year."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="cv-experience">Work Experience <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="cv-experience" name="experience" required data-minlen="20" placeholder="Relevant roles, organisations and time served."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="cv-file">CV Upload <span class="req" aria-hidden="true">*</span></label>
              <label class="file-drop" for="cv-file">
                <span class="file-drop__icon">${icon('upload')}</span>
                <span>
                  <b data-file-name-block>Click to upload your CV</b>
                  <span data-file-name class="file-drop__name" style="display:block;margin-top:2px"></span>
                  <span>PDF or DOCX, maximum 5 MB</span>
                </span>
                <input type="file" id="cv-file" name="cv" accept=".pdf,.doc,.docx,.rtf" required>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="cv-linkedin">LinkedIn Profile <span class="hint" style="display:inline">(if applicable)</span></label>
              <input class="input" type="url" id="cv-linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/yourname">
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="cv-message">Additional Information</label>
              <textarea class="textarea" id="cv-message" name="message" maxlength="1000" placeholder="Availability, salary expectations, notice period or anything else useful."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label class="check">
                <input type="checkbox" name="consent" required data-msg="Please confirm before submitting.">
                <span>I consent to Smart Recruiters Limited storing my information in its talent
                database and contacting me about suitable opportunities, as described in the
                <a href="privacy-policy.html">Privacy Policy</a>.</span>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="form-actions">
              <button class="btn btn--primary btn--lg" type="submit">Submit CV ${icon('upload')}</button>
              <a class="btn btn--outline" href="find-a-job.html">Browse vacancies instead</a>
            </div>

            <p class="form-note">${icon('lock')}<span>We never sell your data or share it with third parties for marketing.</span></p>
          </form>
        </div>

        <div data-form-live hidden>
          <div class="form-success">
            <div class="form-success__icon">${icon('check')}</div>
            <h2>CV received</h2>
            <p class="text-muted">
              Thank you. Your CV has been added to our talent database and we will contact you when
              a matching opportunity is identified.
            </p>
            <div class="recap" data-recap></div>
            <p class="alert alert--warn" data-save-note hidden style="text-align:left"></p>
            <div class="btn-row btn-row--center">
              <a class="btn btn--primary" href="job-alerts.html">${icon('bell')} Create a job alert</a>
              <a class="btn btn--outline" href="resources.html#cv-tips">${icon('fileText')} Improve your CV</a>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="apply-panel">
          <h3>Make your CV stronger</h3>
          <p class="text-muted" style="font-size:.92rem">Before you submit, spend ten minutes on these:</p>
          <ul class="dot-list mt-2" style="font-size:.92rem">
            <li>Lead with your most relevant information</li>
            <li>Highlight achievements, not only duties</li>
            <li>Use a professional email address</li>
            <li>Check spelling and grammar</li>
            <li>Remove unnecessary personal information</li>
          </ul>
          <a class="btn btn--outline btn--block mt-3" href="resources.html#cv-tips">Read full CV advice ${icon('arrowRight')}</a>
        </div>

        <div class="card mt-3">
          <h3>Prefer to apply directly?</h3>
          <p>Browse current vacancies and apply to a specific role instead.</p>
          <a class="btn btn--navy btn--sm btn--block mt-2" href="find-a-job.html">Search Jobs</a>
        </div>
      </aside>
    </div>
  </div>
</section>`
  });

  /* ============ JOB ALERTS ============ */
  page({
    file: 'job-alerts.html',
    title: 'Job Alerts | Smart Recruiters Limited',
    description: 'Create a free job alert and get matching vacancies from Smart Recruiters Limited sent to your email as they are posted.',
    current: 'find-a-job',
    body: `
${hero({
  eyebrow: 'Stay informed',
  h1: 'Job Alerts',
  p: 'Tell us what you are looking for and we will send matching vacancies to your email as soon as they are posted.',
  trail: [
    { label: 'Find a Job', href: 'find-a-job.html' },
    { label: 'Job Alerts', current: true }
  ]
})}

<section class="section">
  <div class="container">
    <div class="grid" style="grid-template-columns:1fr 340px;gap:40px;align-items:start">
      <div>
        <form id="alert-form" novalidate>
          <div class="alert alert--info">
            ${icon('bell')}
            <div>
              <b>How it works</b>
              We match new vacancies against your preferences. There is no fee and no obligation —
              you can change or cancel your alert at any time.
            </div>
          </div>

          <div class="field">
            <label for="alert-name">Full Name <span class="req" aria-hidden="true">*</span></label>
            <input class="input" type="text" id="alert-name" name="fullName" required autocomplete="name">
            <span class="field__error"></span>
          </div>

          <div class="field-row">
            <div class="field">
              <label for="alert-email">Email Address <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="email" id="alert-email" name="email" required autocomplete="email">
              <span class="field__error"></span>
            </div>
            <div class="field">
              <label for="alert-phone">Phone Number</label>
              <input class="input" type="tel" id="alert-phone" name="phone" autocomplete="tel">
              <span class="field__error"></span>
            </div>
          </div>

          <div class="field">
            <label for="alert-role">Job Title or Keyword <span class="req" aria-hidden="true">*</span></label>
            <input class="input" type="text" id="alert-role" name="jobTitle" required placeholder="e.g. Human Resources, Accountant, Driver">
            <span class="hint">Separate multiple keywords with commas.</span>
            <span class="field__error"></span>
          </div>

          <div class="field">
            <label for="alert-location">Preferred Location</label>
            <input class="input" type="text" id="alert-location" name="location" placeholder="e.g. Kampala, or leave blank for all locations">
            <span class="field__error"></span>
          </div>

          <div class="field-row">
            <div class="field">
              <label for="alert-industry">Industry</label>
              <select class="select" id="alert-industry" name="industry">
                <option value="">Any industry</option>
              </select>
              <span class="field__error"></span>
            </div>
            <div class="field">
              <label for="alert-type">Employment Type</label>
              <select class="select" id="alert-type" name="type">
                <option value="">Any employment type</option>
              </select>
              <span class="field__error"></span>
            </div>
          </div>

          <div class="field">
            <span class="label">Alert frequency</span>
            <div class="choice-group">
              <label class="choice"><input type="radio" name="frequency" value="Daily" checked> ${icon('zap')} Daily</label>
              <label class="choice"><input type="radio" name="frequency" value="Weekly"> ${icon('calendar')} Weekly digest</label>
              <label class="choice"><input type="radio" name="frequency" value="As posted"> ${icon('bell')} As posted</label>
            </div>
          </div>

          <div class="field">
            <label class="check">
              <input type="checkbox" name="consent" required data-msg="Please confirm before saving your alert.">
              <span>I agree to receive job alerts by email and accept the
              <a href="privacy-policy.html">Privacy Policy</a>.</span>
            </label>
            <span class="field__error"></span>
          </div>

          <div class="form-actions">
            <button class="btn btn--primary btn--lg" type="submit">Create Job Alert ${icon('bell')}</button>
            <a class="btn btn--outline" href="find-a-job.html">Browse vacancies instead</a>
          </div>
        </form>

        <div id="alert-result" hidden></div>
      </div>

      <aside>
        <div class="apply-panel">
          <h3>Other ways to stay informed</h3>
          <p class="text-muted" style="font-size:.92rem">Follow us or send your CV so we can reach you directly.</p>
          <a class="btn btn--outline btn--block mt-2" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
          <a class="btn btn--outline btn--block mt-2" href="index.html#latest-jobs">${icon('briefcase')} View latest vacancies</a>
          <a class="btn btn--outline btn--block mt-2" href="contact.html">${icon('mail')} Contact our team</a>
        </div>

        <div class="card mt-3">
          <h3>Our values</h3>
          <p>We keep candidate data confidential and never sell or share your information for marketing.</p>
          <a class="link-arrow mt-2" href="privacy-policy.html" style="display:inline-flex">Read our Privacy Policy ${icon('arrowRight')}</a>
        </div>
      </aside>
    </div>
  </div>
</section>`
  });

};