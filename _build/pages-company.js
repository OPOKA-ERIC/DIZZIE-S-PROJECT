/* About, industries, resources, careers, FAQ, contact, legal pages */
module.exports = ({ page, hero, icon }) => {

  /* ============ ABOUT US ============ */
  page({
    file: 'about.html',
    title: 'About Us | Smart Recruiters Limited',
    description: 'Smart Recruiters Limited was established to make finding the right person for the right opportunity smarter, more professional and more human. Read our story, mission, vision, values and team.',
    current: 'about',
    body: `
${hero({
  eyebrow: 'About us',
  h1: 'Our Story',
  p: 'Smart Recruiters Limited was established with a simple idea: finding the right person for the right opportunity should be smarter, more professional and more human.',
  trail: [{ label: 'About Us', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="article">
        <span class="eyebrow">Our story</span>
        <h2>Smart Recruiters Limited was established with a simple idea</h2>
        <p class="lede">
          Finding the right person for the right opportunity should be smarter, more professional
          and more human.
        </p>
        <p>
          We recognised that employers often struggle to find qualified people while many capable
          professionals struggle to find opportunities that match their skills and ambitions.
        </p>
        <p><strong>Smart Recruiters Limited exists to bridge that gap.</strong></p>
        <p>
          We bring employers and job seekers together through structured recruitment, talent sourcing
          and professional career support. We aim to make recruitment easier for organisations
          while helping individuals navigate the employment market with confidence.
        </p>
        <p>
          As we grow, our goal is to build a trusted recruitment brand that understands the needs of
          both employers and professionals.
        </p>
      </div>
      <div class="split__media">
        <div class="media-card">
          <h3>What we stand for</h3>
          <ul class="check-list" style="margin-top:16px">
            <li>Structured, professional recruitment practice</li>
            <li>Understanding of the employment market</li>
            <li>Modern talent-sourcing methods</li>
            <li>People-focused, ethical service</li>
          </ul>
          <div class="media-card__stat">
            <div><b>Kampala</b><span>Uganda</span></div>
            <div><b>2</b><span>Journeys we serve</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--navy">
  <div class="container">
    <div class="grid grid-2" style="gap:48px;align-items:start">
      <div>
        <span class="eyebrow">Our mission</span>
        <h2>Our Mission</h2>
        <p class="lede" style="color:#b9cbdf">
          To provide ethical, efficient and professional recruitment solutions that connect
          organisations with the right talent while helping individuals access meaningful career
          opportunities.
        </p>
      </div>
      <div>
        <span class="eyebrow">Our vision</span>
        <h2>Our Vision</h2>
        <p class="lede" style="color:#b9cbdf">
          To become a trusted recruitment and talent solutions company in Uganda, known for
          connecting organisations with exceptional talent and helping people build successful
          careers.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Core values</span>
      <h2>Our Core Values</h2>
      <p>Seven values that guide how we recruit, communicate and protect information.</p>
    </div>
    <div class="grid grid-auto">
      <div class="value">
        <div class="value__icon">${icon('shield')}</div>
        <h3>Integrity</h3>
        <p>We operate honestly, fairly and transparently in our dealings with clients, candidates and partners.</p>
      </div>
      <div class="value">
        <div class="value__icon">${icon('award')}</div>
        <h3>Professionalism</h3>
        <p>We maintain high standards in our communication, recruitment processes and service delivery.</p>
      </div>
      <div class="value">
        <div class="value__icon">${icon('heart')}</div>
        <h3>People First</h3>
        <p>We recognise that behind every vacancy and every application is a person whose future matters.</p>
      </div>
      <div class="value">
        <div class="value__icon">${icon('trending')}</div>
        <h3>Excellence</h3>
        <p>We continuously strive to provide quality recruitment services and identify the best possible talent for our clients.</p>
      </div>
      <div class="value">
        <div class="value__icon">${icon('lock')}</div>
        <h3>Confidentiality</h3>
        <p>We respect and protect the personal and professional information entrusted to us.</p>
      </div>
      <div class="value">
        <div class="value__icon">${icon('handshake')}</div>
        <h3>Partnership</h3>
        <p>We build strong and lasting relationships with employers, candidates and other stakeholders.</p>
      </div>
      <div class="value">
        <div class="value__icon">${icon('zap')}</div>
        <h3>Innovation</h3>
        <p>We embrace modern and smarter approaches to recruitment and talent sourcing.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container container--narrow">
    <span class="eyebrow">Our promise</span>
    <h2>Our Promise</h2>
    <div class="quote mt-3">
      <p>
        At Smart Recruiters Limited, we promise to treat every candidate and employer with
        professionalism, fairness and respect.
      </p>
      <p class="mt-2">
        We are committed to maintaining transparent recruitment practices, protecting confidential
        information and providing honest communication throughout the recruitment process.
      </p>
      <p class="mt-2">
        <strong>We do not simply aim to fill vacancies. We aim to create the right connection
        between people and organisations.</strong>
      </p>
    </div>
    <div class="btn-row mt-4">
      <a class="btn btn--primary" href="ethical-recruitment.html">${icon('shield')} Our Ethical Recruitment Commitments</a>
      <a class="btn btn--outline" href="contact.html">Contact Us</a>
    </div>
  </div>
</section>

<section class="section" id="team">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Our team</span>
      <h2>People Behind Smart Recruiters</h2>
      <p class="measure" style="margin-inline:auto">
        Our team brings together people with an interest in human resources, recruitment, talent
        management, communication and business. We work together to understand employer needs,
        identify suitable candidates and create a professional recruitment experience for everyone
        we serve.
      </p>
    </div>
    <div class="grid grid-3" id="team-grid"></div>
    <div class="alert alert--info mt-4">
      ${icon('users')}
      <div>
        <b>We're always interested in meeting capable people</b>
        If recruitment, human resources or talent management is your field, we would like to hear
        from you — even when no role is currently advertised.
        <a href="submit-cv.html" style="display:block;margin-top:6px;font-weight:700">Submit your CV ${icon('arrowRight')}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--navy">
  <div class="container">
    <div class="grid grid-2" style="align-items:center;gap:48px">
      <div>
        <span class="eyebrow">Two journeys</span>
        <h2>One company, two ways to work with us</h2>
        <p>
          Whether you are hiring or looking, the standard is the same: structured process, honest
          communication and respect for your information.
        </p>
      </div>
      <div class="grid" style="gap:12px">
        <a class="path" href="find-a-job.html" style="background:rgba(255,255,255,.07)">
          <span class="path__head"><span class="path__icon">${icon('user')}</span><b>Job Seekers</b></span>
          <span style="color:#a7bcd3">Search vacancies, submit your CV and get career support.</span>
        </a>
        <a class="path" href="submit-vacancy.html" style="background:rgba(255,255,255,.07)">
          <span class="path__head"><span class="path__icon">${icon('building')}</span><b>Employers</b></span>
          <span style="color:#a7bcd3">Submit a vacancy and we handle the sourcing and screening.</span>
        </a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ INDUSTRIES ============ */
  page({
    file: 'industries.html',
    title: 'Industries We Recruit For | Smart Recruiters Limited',
    description: 'We recruit across finance, ICT, HR and administration, sales and marketing, education, healthcare, agriculture, engineering, construction, hospitality, NGO and legal sectors in Uganda.',
    current: 'industries',
    body: `
${hero({
  eyebrow: 'Where we work',
  h1: 'Industries We Recruit For',
  p: 'We recruit across a wide range of sectors and levels — from entry-level and graduate roles through to specialist and senior positions.',
  trail: [{ label: 'Industries', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Sector coverage</span>
      <h2>Recruitment expertise across twelve sectors</h2>
      <p>
        Knowing how an industry works helps us search faster, screen more accurately and present
        candidates who understand your context.
      </p>
    </div>
    <div class="grid grid-4" id="industries-grid"></div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="grid grid-2" style="gap:48px;align-items:start">
      <div>
        <span class="eyebrow">How we help</span>
        <h2>Not seeing your sector?</h2>
        <p class="lede">
          Our coverage is not limited to the list above. We also support organisations with
          emerging or specialist needs.
        </p>
        <p>
          If your sector is not listed, contact us anyway. If we cannot serve you directly, we will
          tell you honestly rather than waste your time.
        </p>
        <div class="btn-row mt-3">
          <a class="btn btn--primary" href="contact.html">${icon('mail')} Ask about your sector</a>
          <a class="btn btn--outline" href="find-a-job.html">Browse all vacancies</a>
        </div>
      </div>
      <div>
        <div class="card">
          <h3>Roles we recruit for</h3>
          <div class="chip-row mt-2">
            <span class="chip chip--teal">Entry Level</span>
            <span class="chip chip--teal">Graduate</span>
            <span class="chip chip--teal">Mid Level</span>
            <span class="chip chip--teal">Senior Level</span>
            <span class="chip chip--teal">Management</span>
            <span class="chip chip--teal">Executive</span>
          </div>
          <hr>
          <h3>Typical job functions</h3>
          <div class="chip-row mt-2">
            <span class="chip">Human Resources</span>
            <span class="chip">Administration</span>
            <span class="chip">Finance &amp; Accounts</span>
            <span class="chip">ICT &amp; Support</span>
            <span class="chip">Sales &amp; Marketing</span>
            <span class="chip">Engineering</span>
            <span class="chip">Project Management</span>
            <span class="chip">Clinical &amp; Nursing</span>
            <span class="chip">Teaching</span>
            <span class="chip">Legal &amp; Compliance</span>
            <span class="chip">Customer Service</span>
            <span class="chip">Operations</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Current openings</span>
      <h2>Open vacancies by industry</h2>
      <p>Browse live opportunities across every sector we cover.</p>
    </div>
    <div class="btn-row btn-row--center">
      <a class="btn btn--primary btn--lg" href="find-a-job.html">${icon('search')} View All Jobs</a>
      <a class="btn btn--outline btn--lg" href="job-alerts.html">${icon('bell')} Create a Job Alert</a>
    </div>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Hiring now?</span>
        <h2>Tell us what you need</h2>
        <p>Submit your vacancy and our team will contact you to discuss your recruitment needs.</p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
        <a class="btn btn--ghost-light" href="employers.html">Hire Talent ${icon('arrowRight')}</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ CAREER RESOURCES ============ */
  page({
    file: 'resources.html',
    title: 'Career Resources | Smart Recruiters Limited',
    description: 'Practical career guidance: CV advice and tips, interview advice, and career development strategies to help you prepare, apply and grow professionally.',
    current: 'resources',
    body: `
${hero({
  eyebrow: 'Career resources',
  h1: 'Resources for Your Career',
  p: 'Finding a job is only one part of building a successful career. We provide practical resources to help job seekers prepare, apply and grow professionally.',
  trail: [{ label: 'Career Resources', current: true }]
})}

<section class="section section--tight">
  <div class="container">
    <div class="grid grid-3">
      <a class="card card--hover resource-card" href="#cv-tips">
        <div class="resource-card__meta">${icon('fileText')} Candidates</div>
        <h3>Build a CV That Gets Noticed</h3>
        <p>Your CV is often the first impression an employer has of you. Ten practical rules for a CV that works.</p>
        <span class="link-arrow">Read CV advice ${icon('arrowRight')}</span>
      </a>
      <a class="card card--hover resource-card" href="#interview-tips">
        <div class="resource-card__meta">${icon('message')} Candidates</div>
        <h3>Prepare Before the Interview</h3>
        <p>What to research, how to answer, and what to do afterwards — before, during and after.</p>
        <span class="link-arrow">Read interview tips ${icon('arrowRight')}</span>
      </a>
      <a class="card card--hover resource-card" href="#career-development">
        <div class="resource-card__meta">${icon('trending')} Everyone</div>
        <h3>Take Charge of Your Career</h3>
        <p>Habits that compound: skills, networks, mentors and regular review of your goals.</p>
        <span class="link-arrow">Read career advice ${icon('arrowRight')}</span>
      </a>
    </div>
  </div>
</section>

<section class="section" id="cv-tips">
  <div class="container container--narrow">
    <article class="article">
      <span class="eyebrow">Candidate advice</span>
      <h2>Build a CV That Gets Noticed</h2>
      <p class="lede">
        Your CV is often the first impression an employer has of you. A good CV should clearly
        present your qualifications, skills, experience and achievements.
      </p>

      <h3>CV tips</h3>
      <ol class="tip-list">
        <li>Keep your CV clear and well organised.</li>
        <li>Start with your most relevant information.</li>
        <li>Highlight achievements, not only duties.</li>
        <li>Use professional and simple language.</li>
        <li>Adjust your CV to match the position you are applying for.</li>
        <li>Check your spelling and grammar.</li>
        <li>Avoid including unnecessary personal information.</li>
        <li>Keep your CV updated.</li>
        <li>Use a professional email address.</li>
        <li>Make sure your contact information is correct.</li>
      </ol>

      <div class="timeline-note mt-4">
        ${icon('lightbulb')}
        <strong>Remember:</strong> Your CV should show an employer why you are suitable for the
        position.
      </div>

      <h3>Show achievements, not just duties</h3>
      <p>
        Most CVs list responsibilities. The ones that get read list results. Compare these two:
      </p>
      <div class="grid grid-2" style="gap:16px;margin:18px 0">
        <div class="card card--pad-sm">
          <span class="chip chip--amber">Weaker</span>
          <p class="mt-2" style="margin-bottom:0">
            &ldquo;Responsible for handling customer complaints and processing monthly sales
            reports.&rdquo;
          </p>
        </div>
        <div class="card card--pad-sm">
          <span class="chip chip--green">Stronger</span>
          <p class="mt-2" style="margin-bottom:0">
            &ldquo;Reduced average complaint resolution time from 9 days to 3 days and introduced
            a monthly reporting template used by four regional teams.&rdquo;
          </p>
        </div>
      </div>

      <h3>Adjust your CV for every role</h3>
      <p>
        Re-read each vacancy description and reorder your CV so the most relevant experience
        appears first. Use the same language the employer uses where it is accurate. A tailored CV
        is not dishonest — it is focused.
      </p>

      <h3>What to leave out</h3>
      <ul class="feature-list">
        <li>Full national ID numbers, unless specifically requested</li>
        <li>Marital status, religion or nationality</li>
        <li>Unrelated personal hobbies</li>
        <li>Your full home address &mdash; city and country are enough</li>
        <li>Long personal statements or slogans</li>
      </ul>

      <div class="btn-row mt-4">
        <a class="btn btn--primary" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
        <a class="btn btn--outline" href="resources.html#interview-tips">Interview tips ${icon('arrowRight')}</a>
      </div>
    </article>
  </div>
</section>

<section class="section section--soft" id="interview-tips">
  <div class="container container--narrow">
    <article class="article">
      <span class="eyebrow">Candidate advice</span>
      <h2>Prepare Before the Interview</h2>
      <p class="lede">
        Research the organisation and understand the position you applied for. Review your CV and
        be prepared to explain your experience, qualifications and achievements.
      </p>

      <h3>Prepare before the interview</h3>
      <ul class="feature-list">
        <li>Research the organisation: what it does, who it serves, recent news.</li>
        <li>Re-read the vacancy description and match it to your experience.</li>
        <li>Re-read your own CV so every claim is something you can defend.</li>
        <li>Prepare two or three examples of your achievements in detail.</li>
        <li>Prepare questions you would genuinely like to ask.</li>
        <li>Confirm the time, location, format and who you will meet.</li>
      </ul>

      <h3>During the interview</h3>
      <ul class="feature-list">
        <li>Dress appropriately.</li>
        <li>Arrive on time.</li>
        <li>Listen carefully to questions.</li>
        <li>Answer honestly and clearly.</li>
        <li>Give practical examples when explaining your experience.</li>
        <li>Maintain professional body language.</li>
        <li>Ask relevant questions when given the opportunity.</li>
        <li>Thank the interviewer before leaving.</li>
      </ul>

      <h3>After the interview</h3>
      <p>
        Reflect on your performance and remain professional regardless of the outcome. A short
        thank-you message is well received and costs you two minutes.
      </p>
      <ul class="feature-list">
        <li>Send a thank-you message within 24 hours.</li>
        <li>Note what went well and what you would improve.</li>
        <li>Do not chase excessively &mdash; one polite follow-up is enough.</li>
        <li>Keep applying &mdash; do not stop searching while waiting.</li>
      </ul>

      <div class="timeline-note mt-4">
        ${icon('message')}
        If you are asked a question you cannot answer, say so honestly and explain how you would
        find out. Interviewers value honesty far more than a confident guess.
      </div>
    </article>
  </div>
</section>

<section class="section" id="career-development">
  <div class="container container--narrow">
    <article class="article">
      <span class="eyebrow">Career development</span>
      <h2>Take Charge of Your Career</h2>
      <p class="lede">
        Career development is an ongoing process. It involves understanding your strengths,
        improving your skills and making informed decisions about your professional future.
      </p>

      <h3>Practical career development tips</h3>
      <ol class="tip-list">
        <li>Identify your career goals.</li>
        <li>Develop relevant skills.</li>
        <li>Seek learning opportunities.</li>
        <li>Build professional relationships.</li>
        <li>Gain practical experience.</li>
        <li>Look for mentors.</li>
        <li>Keep your CV updated.</li>
        <li>Follow developments in your industry.</li>
        <li>Be open to feedback.</li>
        <li>Review your career goals regularly.</li>
      </ol>

      <h3>Understand your strengths</h3>
      <p>
        Write down what you are good at, what you enjoy, and what other people say you are
        reliable for. Where those three overlap is usually where your strongest career options
        are.
      </p>

      <h3>Build professional relationships</h3>
      <p>
        Many roles are filled through people you already know. Stay in touch with former
        colleagues, join professional associations, and attend events in your field. Networking is
        not about asking for jobs &mdash; it is about being known as someone reliable in your field.
      </p>

      <h3>Review your goals regularly</h3>
      <p>
        Set aside time every few months to ask yourself what is working, what has changed and what
        you want next. Careers rarely stay still, and a plan that is never reviewed is usually a
        plan that no longer fits.
      </p>

      <div class="btn-row mt-4">
        <a class="btn btn--primary" href="find-a-job.html">${icon('search')} Find Your Next Opportunity</a>
        <a class="btn btn--outline" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
      </div>
    </article>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Ready to apply?</span>
        <h2>Your next opportunity is waiting</h2>
        <p>Browse current vacancies or send us your CV so we can contact you when the right role is posted.</p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="find-a-job.html">${icon('search')} View All Jobs</a>
        <a class="btn btn--ghost-light btn--lg" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ CAREERS ============ */
  page({
    file: 'careers.html',
    title: 'Careers | Work With Us | Smart Recruiters Limited',
    description: 'Build your career with Smart Recruiters Limited. Current opportunities within our recruitment team and how to submit your CV for future consideration.',
    current: 'about',
    body: `
${hero({
  eyebrow: 'Careers',
  h1: 'Build Your Career With Smart Recruiters',
  p: 'We believe in developing people while building a strong recruitment team.',
  trail: [{ label: 'Careers', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="article">
        <h2 class="mt-0">Work with us</h2>
        <p class="lede">
          At Smart Recruiters Limited, we believe in developing people while building a strong
          recruitment team.
        </p>
        <p>
          We welcome individuals who are passionate about recruitment, human resources, business
          development, communication, technology and helping people find opportunities.
        </p>

        <h3>Why work with us?</h3>
        <p>You will have the opportunity to:</p>
        <ul class="feature-list">
          <li>Develop professional skills</li>
          <li>Gain experience in recruitment and talent management</li>
          <li>Work with different organisations and professionals</li>
          <li>Develop your communication and networking skills</li>
          <li>Contribute to meaningful recruitment solutions</li>
          <li>Grow within a professional environment</li>
        </ul>

        <h3>Current opportunities</h3>
        <p>
          Available positions within Smart Recruiters Limited will be listed here. If there are
          currently no vacancies, applicants can submit their CV for future consideration.
        </p>

        <div class="alert alert--info mt-3">
          ${icon('inbox')}
          <div>
            <b>No internal vacancies right now</b>
            We review speculative CVs regularly. Send yours and we will keep it on file for when
            a suitable role opens.
          </div>
        </div>

        <div class="btn-row mt-3">
          <a class="btn btn--primary" href="#opportunities">View Opportunities</a>
          <a class="btn btn--outline" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
        </div>
      </div>

      <div class="split__media">
        <div class="media-card">
          <h3>What we look for</h3>
          <ul class="check-list" style="margin-top:16px">
            <li>Clear, professional communication</li>
            <li>Genuine interest in people and matching them to opportunities</li>
            <li>Reliability and follow-through</li>
            <li>Respect for confidentiality</li>
            <li>Willingness to learn and be coached</li>
            <li>Honesty and professionalism under pressure</li>
          </ul>
          <div class="media-card__stat">
            <div><b>UG</b><span>Based in Kampala</span></div>
            <div><b>2</b><span>Journeys we serve</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft" id="opportunities">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Open positions</span>
      <h2>Current Opportunities</h2>
      <p>Roles within Smart Recruiters Limited. External vacancies are listed separately.</p>
    </div>
    <div class="empty-state">
      <div class="empty-state__icon">${icon('briefcase')}</div>
      <h2 style="font-size:1.2rem">No internal vacancies at the moment</h2>
      <p class="text-muted">
        We are always interested in meeting capable people. Submit your CV and we will contact you
        when a suitable position becomes available.
      </p>
      <div class="btn-row btn-row--center mt-3">
        <a class="btn btn--primary" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
        <a class="btn btn--outline" href="contact.html">${icon('mail')} Contact Us</a>
      </div>
    </div>
    <div class="btn-row btn-row--center mt-4">
      <a class="btn btn--navy" href="find-a-job.html">${icon('search')} View external vacancies</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Meet the team</span>
      <h2>Who you would work with</h2>
      <p>Our team brings together people with an interest in human resources, recruitment, talent management, communication and business.</p>
    </div>
    <div class="grid grid-3" id="team-grid"></div>
  </div>
</section>

<section class="section final-cta">
  <div class="container">
    <div class="cta-panel">
      <div>
        <span class="eyebrow" style="color:#2dd4bf">Join us</span>
        <h2>Send us your CV</h2>
        <p>Even with no current vacancy, we review speculative applications and keep strong candidates on file.</p>
      </div>
      <div class="cta-panel__actions">
        <a class="btn btn--primary btn--lg" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
        <a class="btn btn--ghost-light" href="about.html#team">Meet the team ${icon('arrowRight')}</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ ETHICAL RECRUITMENT ============ */
  page({
    file: 'ethical-recruitment.html',
    title: 'Ethical Recruitment | Smart Recruiters Limited',
    description: 'Our commitment to ethical recruitment: fair treatment, accurate information, confidentiality, no discrimination, and merit-based selection.',
    current: 'about',
    body: `
${hero({
  eyebrow: 'Our standards',
  h1: 'Our Commitment to Ethical Recruitment',
  p: 'We believe recruitment should be fair, transparent and professional.',
  trail: [{ label: 'Ethical Recruitment', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="article">
        <h2 class="mt-0">Our commitments</h2>
        <p class="lede">
          Smart Recruiters Limited is committed to the following principles in every recruitment
          process we run.
        </p>
        <ul class="feature-list">
          <li>Treating candidates fairly and respectfully.</li>
          <li>Providing accurate information about job opportunities.</li>
          <li>Protecting candidate and employer information.</li>
          <li>Avoiding discrimination in recruitment.</li>
          <li>Maintaining professional communication.</li>
          <li>Supporting merit-based recruitment.</li>
          <li>Promoting transparent recruitment processes.</li>
        </ul>
        <div class="quote mt-4">
          Our goal is not simply to fill vacancies. It is to create professional connections that
          benefit both organisations and individuals.
        </div>
      </div>
      <div class="split__media">
        <div class="media-card">
          <h3>What this means in practice</h3>
          <ul class="check-list" style="margin-top:16px">
            <li>No fees charged to candidates for legitimate vacancies</li>
            <li>No job adverts for which we know the role is already filled</li>
            <li>No discrimination on grounds of gender, age, religion, disability or background</li>
            <li>No use of candidate information for unrelated marketing</li>
            <li>Clear communication about status and next steps</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head section-head--center">
      <span class="eyebrow eyebrow--center">Candidate protection</span>
      <h2>What you should expect from us</h2>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card__icon">${icon('banknote')}</div>
        <h3>No candidate fees</h3>
        <p>We do not charge candidates simply for accessing legitimate job opportunities. Always check the specific vacancy instructions.</p>
      </div>
      <div class="card">
        <div class="card__icon">${icon('shield')}</div>
        <h3>Fair selection</h3>
        <p>Candidates are assessed against the requirements of the position using agreed criteria, not personal preference.</p>
      </div>
      <div class="card">
        <div class="card__icon">${icon('lock')}</div>
        <h3>Confidentiality</h3>
        <p>Your information is used only for legitimate recruitment, communication and service-related purposes.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <h2>Report a concern</h2>
    <p class="lede">
      If you believe a vacancy or recruitment process has been misleading, discriminatory or
      conducted improperly, please tell us.
    </p>
    <p>
      We take such reports seriously, review them confidentially and take corrective action where
      our standards have not been met.
    </p>
    <div class="btn-row mt-3">
      <a class="btn btn--primary" href="contact.html">${icon('mail')} Contact Us</a>
      <a class="btn btn--outline" href="privacy-policy.html">${icon('lock')} Read our Privacy Policy</a>
    </div>
  </div>
</section>`
  });

  /* ============ FAQ ============ */
  page({
    file: 'faq.html',
    title: 'Frequently Asked Questions | Smart Recruiters Limited',
    description: 'Answers to common questions about applying for jobs, submitting your CV, recruitment services, timelines, selection and contacting Smart Recruiters Limited.',
    current: 'faq',
    body: `
${hero({
  eyebrow: 'Support',
  h1: 'Frequently Asked Questions',
  p: 'Everything candidates and employers ask us most often. If your question is not answered here, contact our team.',
  trail: [{ label: 'FAQ', current: true }]
})}

<section class="section">
  <div class="container container--narrow">
    <div class="faq-nav">
      <a href="#all">All questions</a>
      <a href="#candidates">For candidates</a>
      <a href="#employers">For employers</a>
      <a href="#contact">Contact</a>
    </div>

    <div data-faq-group="candidates">
      <span class="eyebrow" id="candidates" style="scroll-margin-top:120px">For candidates</span>
      <h2 class="mt-0">For Candidates</h2>
      <p class="text-muted mb-4">Applying for jobs, submitting your CV, fees, and how we select people.</p>
      <div id="faq-list-candidates"></div>
    </div>

    <div data-faq-group="employers">
      <span class="eyebrow" id="employers" style="scroll-margin-top:120px">For employers</span>
      <h2>For Employers</h2>
      <p class="text-muted mb-4">Services, timelines, selection methods and how to start hiring with us.</p>
      <div id="faq-list-employers"></div>
    </div>

    <div data-faq-group="general">
      <span class="eyebrow" id="all" style="scroll-margin-top:120px">General</span>
      <h2>General Questions</h2>
      <p class="text-muted mb-4">About the company, ethics, sectors and how to reach us.</p>
      <div id="faq-list-general"></div>
    </div>

    <div class="cta-band mt-4" id="contact" style="scroll-margin-top:120px">
      <h3 style="font-size:1.2rem">Still have a question?</h3>
      <p>Our team is happy to help — whether you are a candidate or an employer.</p>
      <div class="btn-row btn-row--center">
        <a class="btn btn--primary" href="contact.html">${icon('mail')} Contact Us</a>
        <a class="btn btn--ghost-light" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
      </div>
    </div>
  </div>
</section>`
  });

  /* ============ CONTACT ============ */
  page({
    file: 'contact.html',
    title: 'Contact Us | Smart Recruiters Limited',
    description: 'Contact Smart Recruiters Limited in Kampala, Uganda. Whether you are looking for your next career opportunity or searching for the right talent, we would like to hear from you.',
    current: 'contact',
    body: `
${hero({
  eyebrow: 'Get in touch',
  h1: "Let's Connect",
  p: 'Whether you are looking for your next career opportunity or searching for the right talent for your organisation, we would like to hear from you.',
  trail: [{ label: 'Contact Us', current: true }]
})}

<section class="section">
  <div class="container">
    <div class="grid grid-2" style="gap:20px;margin-bottom:44px">
      <article class="card">
        <div class="card__icon">${icon('user')}</div>
        <h2 style="font-size:1.3rem">For Job Seekers</h2>
        <p>Looking for a job or need career guidance?</p>
        <div class="btn-row mt-3">
          <a class="btn btn--primary" href="find-a-job.html">${icon('search')} Find a Job</a>
          <a class="btn btn--outline" href="submit-cv.html">${icon('upload')} Submit Your CV</a>
        </div>
      </article>
      <article class="card">
        <div class="card__icon card__icon--navy">${icon('building')}</div>
        <h2 style="font-size:1.3rem">For Employers</h2>
        <p>Need to recruit talent for your organisation?</p>
        <div class="btn-row mt-3">
          <a class="btn btn--navy" href="submit-vacancy.html">${icon('building')} Submit a Vacancy</a>
          <a class="btn btn--outline" href="consultation.html">${icon('message')} Contact Our Team</a>
        </div>
      </article>
    </div>

    <div class="grid" style="grid-template-columns:1fr 380px;gap:40px;align-items:start">
      <div>
        <div data-form-wrap>
          <form data-srl-form="contact" novalidate>
            <h2 class="mt-0">Send us a message</h2>
            <p class="text-muted">We aim to respond as quickly as possible.</p>

            <div class="field">
              <label for="ct-name">Full Name <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="ct-name" name="fullName" required autocomplete="name">
              <span class="field__error"></span>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="ct-email">Email Address <span class="req" aria-hidden="true">*</span></label>
                <input class="input" type="email" id="ct-email" name="email" required autocomplete="email">
                <span class="field__error"></span>
              </div>
              <div class="field">
                <label for="ct-phone">Phone Number</label>
                <input class="input" type="tel" id="ct-phone" name="phone" autocomplete="tel">
                <span class="field__error"></span>
              </div>
            </div>

            <div class="field">
              <span class="label">I am a: <span class="req" aria-hidden="true">*</span></span>
              <div class="choice-group">
                <label class="choice"><input type="radio" name="iama" value="Job Seeker" required> ${icon('user')} Job Seeker</label>
                <label class="choice"><input type="radio" name="iama" value="Employer" required> ${icon('building')} Employer</label>
                <label class="choice"><input type="radio" name="iama" value="Other" required> ${icon('users')} Other</label>
              </div>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="ct-subject">Subject <span class="req" aria-hidden="true">*</span></label>
              <input class="input" type="text" id="ct-subject" name="subject" required placeholder="How can we help?">
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label for="ct-message">Message <span class="req" aria-hidden="true">*</span></label>
              <textarea class="textarea" id="ct-message" name="message" required data-minlen="20" maxlength="2000" placeholder="Tell us about your question or requirement."></textarea>
              <span class="field__error"></span>
            </div>

            <div class="field">
              <label class="check">
                <input type="checkbox" name="consent" required data-msg="Please confirm before sending.">
                <span>I consent to Smart Recruiters Limited processing my information to respond to
                this message, as described in the <a href="privacy-policy.html">Privacy Policy</a>.</span>
              </label>
              <span class="field__error"></span>
            </div>

            <div class="form-actions">
              <button class="btn btn--primary btn--lg" type="submit">Send Message ${icon('send')}</button>
              <a class="btn btn--outline" href="faq.html">Read the FAQ</a>
            </div>

            <p class="form-note">${icon('lock')}<span>Your information is used only to respond to your enquiry.</span></p>
          </form>
        </div>

        <div data-form-live hidden>
          <div class="form-success">
            <div class="form-success__icon">${icon('check')}</div>
            <h2>Message sent</h2>
            <p class="text-muted">
              Thank you for contacting Smart Recruiters Limited. Your message has been recorded and
              a member of our team will respond as soon as possible.
            </p>
            <div class="recap" data-recap></div>
            <p class="alert alert--warn" data-save-note hidden style="text-align:left"></p>
            <div class="btn-row btn-row--center">
              <a class="btn btn--primary" href="find-a-job.html">${icon('search')} Find a Job</a>
              <a class="btn btn--outline" href="index.html">Back to home</a>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="card">
          <h3>Contact Information</h3>
          <h4 style="margin-top:18px;color:var(--muted);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase">Organisation</h4>
          <p style="margin-bottom:4px"><strong>Smart Recruiters Limited</strong></p>
          <p class="text-muted" style="font-size:.9rem;margin-bottom:18px">Connecting Talent. Building Organisations.</p>

          <ul class="contact-list contact-list--light">
            <li>${icon('mapPin')}<span>Kampala, Uganda</span></li>
            <li>${icon('phone')}<a href="tel:+256700000000">+256 700 000 000</a></li>
            <li>${icon('mail')}<a href="mailto:info@smartrecruiters.co.ug">info@smartrecruiters.co.ug</a></li>
            <li>${icon('globe')}<a href="#">www.smartrecruiters.co.ug</a></li>
            <li>${icon('linkedin')}<a href="#">LinkedIn — Smart Recruiters Limited</a></li>
            <li>${icon('facebook')}<a href="#">Facebook — smartrecruiterslimited</a></li>
            <li>${icon('instagram')}<a href="#">Instagram — @smartrecruitersug</a></li>
            <li>${icon('clock')}<span>Monday – Friday, 9:00 – 17:00</span></li>
          </ul>

          <hr>
          <h4 style="color:var(--muted);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase">Follow us</h4>
          <div class="socials" style="margin-top:12px">
            <a href="#" aria-label="LinkedIn">${icon('linkedin')}</a>
            <a href="#" aria-label="Facebook">${icon('facebook')}</a>
            <a href="#" aria-label="Instagram">${icon('instagram')}</a>
            <a href="mailto:info@smartrecruiters.co.ug" aria-label="Email">${icon('mail')}</a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>`
  });

};