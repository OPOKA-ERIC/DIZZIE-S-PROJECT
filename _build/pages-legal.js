/* Legal pages */
module.exports = ({ page, hero, icon }) => {

  /* ============ PRIVACY POLICY ============ */
  page({
    file: 'privacy-policy.html',
    title: 'Privacy Policy | Smart Recruiters Limited',
    description: 'How Smart Recruiters Limited collects, uses and protects personal information submitted through this website.',
    current: 'about',
    body: `
${hero({
  eyebrow: 'Legal',
  h1: 'Privacy Policy',
  p: 'How Smart Recruiters Limited collects, uses and protects personal information submitted through this website.',
  trail: [{ label: 'Privacy Policy', current: true }]
})}

<section class="section">
  <div class="container container--narrow">
    <article class="article">
      <div class="alert alert--warn">
        ${icon('alert')}
        <div>
          <b>Placeholder policy — review before launch</b>
          This policy is a working draft that describes our commitments in plain language. It should
          be reviewed and adapted by qualified legal counsel, and updated to reflect the data
          handling systems actually in use, before the platform goes live.
        </div>
      </div>

      <h2>Our Commitment to Privacy</h2>
      <p class="lede">
        Smart Recruiters Limited respects the privacy of candidates, employers and other users of
        our services.
      </p>
      <p>
        Information submitted through our website should be handled responsibly and used only for
        legitimate recruitment, communication and service-related purposes.
      </p>
      <p>
        We are committed to protecting personal information and maintaining appropriate
        confidentiality throughout our recruitment processes.
      </p>

      <h2>Information we collect</h2>
      <p>We collect the information you choose to give us, including:</p>
      <ul>
        <li>Name, email address, phone number and current location</li>
        <li>Education, qualifications and work experience</li>
        <li>CVs, cover letters and any documents you upload</li>
        <li>LinkedIn or other professional profile links you provide</li>
        <li>Job alert preferences and application communications</li>
        <li>Vacancy details submitted by employer clients</li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use submitted information to:</p>
      <ul>
        <li>Process job applications and CV submissions</li>
        <li>Match candidates to suitable vacancies and employer requirements</li>
        <li>Communicate with candidates and employers about relevant opportunities</li>
        <li>Operate job alerts that you have requested</li>
        <li>Respond to enquiries and consultation requests</li>
        <li>Maintain our talent database for future opportunities, where consent is given</li>
        <li>Improve our website and recruitment services</li>
      </ul>
      <p>
        We do not sell personal information, and we do not share it with third parties for
        unrelated marketing purposes.
      </p>

      <h2>Sharing with employers</h2>
      <p>
        When you apply for a vacancy, the information you submit is shared with the relevant
        employer for the purpose of assessing your application. We do not disclose your information
        to other employers without your consent, except where necessary to fulfil a specific
        request you have made.
      </p>

      <h2>How we protect information</h2>
      <ul>
        <li>Access to candidate information is limited to staff who need it for recruitment</li>
        <li>Information is stored securely and handled confidentially</li>
        <li>We use responsible, professional service providers for website hosting</li>
        <li>Retention periods are limited to what is necessary for recruitment purposes</li>
      </ul>

      <h2>Your choices and rights</h2>
      <p>You may, at any time:</p>
      <ul>
        <li>Ask what information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your information from our talent database</li>
        <li>Withdraw consent for job alerts or future contact</li>
      </ul>
      <p>
        To make any of these requests, contact us using the details on our
        <a href="contact.html">contact page</a>. We will respond as promptly as we reasonably can.
      </p>

      <h2>Candidate fees</h2>
      <p>
        Smart Recruiters Limited does not charge candidates simply for accessing legitimate job
        opportunities. Candidates should always check the specific instructions given in each
        vacancy advertisement.
      </p>

      <h2>Cookies</h2>
      <p>
        This website may use cookies and similar technologies for essential operation and to
        understand how the site is used. See our <a href="cookie-policy.html">Cookie Policy</a>
        for details.
      </p>

      <h2>Children</h2>
      <p>
        Our services are intended for adults aged 18 and above. We do not knowingly collect
        information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The version published on this page is the
        version that applies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to
        <a href="mailto:info@smartrecruiters.co.ug">info@smartrecruiters.co.ug</a> or via our
        <a href="contact.html">contact form</a>.
      </p>
    </article>
  </div>
</section>`
  });

  /* ============ TERMS AND CONDITIONS ============ */
  page({
    file: 'terms.html',
    title: 'Terms and Conditions | Smart Recruiters Limited',
    description: 'Terms governing the use of the Smart Recruiters Limited website and recruitment services.',
    current: 'about',
    body: `
${hero({
  eyebrow: 'Legal',
  h1: 'Terms and Conditions',
  p: 'The terms that govern your use of this website and our recruitment services.',
  trail: [{ label: 'Terms and Conditions', current: true }]
})}

<section class="section">
  <div class="container container--narrow">
    <article class="article">
      <div class="alert alert--warn">
        ${icon('alert')}
        <div>
          <b>Placeholder terms — review before launch</b>
          These terms are a working draft and should be reviewed and adapted by qualified legal
          counsel before the platform goes live.
        </div>
      </div>

      <h2>1. About these terms</h2>
      <p>
        These terms govern your use of the Smart Recruiters Limited website and the recruitment
        services we provide. By using this website or submitting an application, vacancy or enquiry,
        you agree to these terms.
      </p>

      <h2>2. Use of this website</h2>
      <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
      <ul>
        <li>Damage, disable or interfere with the website or its functionality</li>
        <li>Attempt to gain unauthorised access to any system or data</li>
        <li>Submit misleading, fraudulent or offensive content</li>
        <li>Copy or republish our content for commercial use without permission</li>
      </ul>

      <h2>3. Candidate applications</h2>
      <ul>
        <li>Information you submit must be accurate and not misleading</li>
        <li>You confirm that any qualifications or experience you claim are genuine</li>
        <li>We may verify the information you provide</li>
        <li>We are not obliged to progress any application</li>
        <li>We do not charge candidates fees for accessing legitimate vacancies</li>
      </ul>

      <h2>4. Vacancy information</h2>
      <p>
        Vacancy details are supplied by employer clients. We take reasonable steps to check them, but
        we do not guarantee the accuracy of every detail, and we are not a party to any employment
        contract resulting from an application.
      </p>
      <p>
        If you believe a vacancy is misleading, has been filled or is not genuine, please
        <a href="contact.html">tell us</a>.
      </p>

      <h2>5. Employer services</h2>
      <ul>
        <li>Fees, timelines and deliverables are agreed in writing for each engagement</li>
        <li>Employers are responsible for the accuracy of the vacancy information they provide</li>
        <li>Employment decisions remain solely with the employer</li>
        <li>Any guarantee period is set out in the relevant service agreement</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        The content, design and branding of this website belong to Smart Recruiters Limited. You may
        view and print pages for personal, non-commercial use, but may not reproduce them as your
        own without written permission.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        We treat candidate and employer information confidentially. We share information only as
        described in our <a href="privacy-policy.html">Privacy Policy</a>.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        We take care to provide accurate information, but we do not guarantee that every detail is
        complete or error-free. To the extent permitted by law, we are not liable for decisions
        made by employers or candidates, or for loss arising from reliance on information published
        on this website.
      </p>

      <h2>9. External links</h2>
      <p>
        This website may link to external sites. We are not responsible for their content or privacy
        practices.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these terms from time to time. The version published on this page applies.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of Uganda, and any dispute will be subject to the
        exclusive jurisdiction of the competent courts of Uganda.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms can be sent to
        <a href="mailto:info@smartrecruiters.co.ug">info@smartrecruiters.co.ug</a>.
      </p>
    </article>
  </div>
</section>`
  });

  /* ============ COOKIE POLICY ============ */
  page({
    file: 'cookie-policy.html',
    title: 'Cookie Policy | Smart Recruiters Limited',
    description: 'How Smart Recruiters Limited uses cookies and similar technologies on this website.',
    current: 'about',
    body: `
${hero({
  eyebrow: 'Legal',
  h1: 'Cookie Policy',
  p: 'How this website uses cookies and similar technologies.',
  trail: [{ label: 'Cookie Policy', current: true }]
})}

<section class="section">
  <div class="container container--narrow">
    <article class="article">
      <div class="alert alert--warn">
        ${icon('alert')}
        <div>
          <b>Placeholder policy — review before launch</b>
          This page should be updated to reflect the specific cookie and analytics services in use
          once hosting and tracking providers are confirmed.
        </div>
      </div>

      <h2>What cookies are</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are widely
        used to make websites work, or work more efficiently, as well as to understand how the site
        is used.
      </p>

      <h2>How we use cookies</h2>
      <p>We may use cookies and similar technologies for the following purposes:</p>
      <table style="width:100%;border-collapse:collapse;margin:18px 0;font-size:.94rem">
        <thead>
          <tr style="background:var(--surface-2)">
            <th style="text-align:left;padding:12px;border:1px solid var(--line)">Type</th>
            <th style="text-align:left;padding:12px;border:1px solid var(--line)">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:12px;border:1px solid var(--line)"><strong>Essential</strong></td>
            <td style="padding:12px;border:1px solid var(--line)">Required for the site to function, including remembering your preferences and keeping your session secure.</td>
          </tr>
          <tr>
            <td style="padding:12px;border:1px solid var(--line)"><strong>Preference</strong></td>
            <td style="padding:12px;border:1px solid var(--line)">Remembers choices such as language or recently viewed vacancies so the site can be easier to use.</td>
          </tr>
          <tr>
            <td style="padding:12px;border:1px solid var(--line)"><strong>Analytics</strong></td>
            <td style="padding:12px;border:1px solid var(--line)">Helps us understand which pages are useful and how visitors use the site, so we can improve it.</td>
          </tr>
        </tbody>
      </table>

      <h2>How you can control cookies</h2>
      <p>
        Most web browsers allow you to view, block or delete cookies through their settings.
        Blocking essential cookies may prevent parts of this website from working correctly.
      </p>

      <h2>Do we use advertising cookies?</h2>
      <p>
        We do not use advertising or cross-site tracking cookies. We do not sell or share information
        about your use of this website with advertising networks.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies can be sent to
        <a href="mailto:info@smartrecruiters.co.ug">info@smartrecruiters.co.ug</a>.
      </p>
    </article>
  </div>
</section>`
  });

};