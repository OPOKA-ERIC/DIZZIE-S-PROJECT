/* Smart Recruiters Limited — Site data (single source of truth) */
window.SRL = {
  site: {
    name: 'Smart Recruiters Limited',
    tagline: 'Connecting Talent. Building Organisations.',
    location: 'Kampala, Uganda',
    phone: '+256 700 000 000',
    phoneHref: '+256700000000',
    email: 'info@smartrecruiters.co.ug',
    website: 'www.smartrecruiters.co.ug',
    linkedin: 'Smart Recruiters Limited',
    facebook: 'smartrecruiterslimited',
    instagram: '@smartrecruitersug'
  },

  industries: [
    { slug: 'finance-banking', name: 'Finance & Banking', icon: 'banknote',
      blurb: 'Banking, microfinance, insurance, accounting and financial services roles.' },
    { slug: 'ict-technology', name: 'ICT & Technology', icon: 'code',
      blurb: 'Software, networks, support, data and technology operations positions.' },
    { slug: 'hr-administration', name: 'HR & Administration', icon: 'users',
      blurb: 'Human resources, recruitment, office administration and operations support.' },
    { slug: 'sales-marketing', name: 'Sales & Marketing', icon: 'trending',
      blurb: 'Sales, business development, marketing, brand and customer growth roles.' },
    { slug: 'education', name: 'Education', icon: 'graduation',
      blurb: 'Teaching, academic administration, training and education support roles.' },
    { slug: 'healthcare', name: 'Healthcare', icon: 'stethoscope',
      blurb: 'Clinical, nursing, pharmacy, public health and medical support positions.' },
    { slug: 'agriculture', name: 'Agriculture', icon: 'sprout',
      blurb: 'Agronomy, agribusiness, food processing and value chain roles.' },
    { slug: 'engineering', name: 'Engineering', icon: 'wrench',
      blurb: 'Civil, mechanical, electrical, technical and maintenance engineering roles.' },
    { slug: 'construction', name: 'Construction', icon: 'hardHat',
      blurb: 'Construction, civil works, quantity surveying and site supervision roles.' },
    { slug: 'hospitality-tourism', name: 'Hospitality & Tourism', icon: 'coffee',
      blurb: 'Hotel, restaurant, travel, events and customer service positions.' },
    { slug: 'ngo-development', name: 'NGO & Development', icon: 'heart',
      blurb: 'Programme, project, monitoring, safeguarding and development roles.' },
    { slug: 'legal', name: 'Legal & Compliance', icon: 'scale',
      blurb: 'Legal, compliance, contracts and corporate governance positions.' }
  ],

  services: [
    { slug: 'permanent-recruitment', name: 'Permanent Recruitment', icon: 'briefcase',
      blurb: 'We help organisations find qualified professionals for permanent positions that support long-term organisational growth.',
      points: ['Role scoping and profile definition', 'Active and passive candidate sourcing', 'CV screening and shortlisting', 'Interview coordination and offer support'],
      for: 'Employers hiring for the long term' },
    { slug: 'contract-temporary', name: 'Contract & Temporary Recruitment', icon: 'clock',
      blurb: 'We connect organisations with skilled professionals for short-term, project-based and contract opportunities.',
      points: ['Short-term and project staffing', 'Payroll and contract administration support', 'Skills-matched temporary professionals', 'Extension and replacement planning'],
      for: 'Employers needing flexible capacity' },
    { slug: 'graduate-recruitment', name: 'Graduate Recruitment', icon: 'graduation',
      blurb: 'We help organisations identify promising graduates and young professionals while giving emerging talent access to career opportunities.',
      points: ['Campus and graduate sourcing', 'Entry-level and trainee positions', 'Structured graduate assessment', 'Onboarding and development support'],
      for: 'Employers building early-career pipelines' },
    { slug: 'executive-search', name: 'Executive Search', icon: 'award',
      blurb: 'We identify experienced professionals and leadership talent for specialist and senior-level positions.',
      points: ['Board and senior leadership search', 'Confidential and discreet processes', 'Market mapping and competitor research', 'Candidate motivation and engagement'],
      for: 'Employers filling leadership roles' },
    { slug: 'bulk-recruitment', name: 'Bulk Recruitment', icon: 'layers',
      blurb: 'We support organisations that need to recruit several employees within a short period through structured sourcing, screening and selection.',
      points: ['High-volume candidate pipelines', 'Standardised screening criteria', 'Assessment centre coordination', 'Timely and organised delivery'],
      for: 'Employers hiring multiple employees' },
    { slug: 'talent-sourcing', name: 'Talent Sourcing', icon: 'target',
      blurb: 'We actively search for qualified candidates who match specific organisational requirements.',
      points: ['Direct and headhunting search', 'Professional networking and referrals', 'Employer-branded outreach', 'Market and talent mapping'],
      for: 'Employers with hard-to-fill roles' },
    { slug: 'recruitment-consulting', name: 'Recruitment Consulting', icon: 'clipboard',
      blurb: 'We provide recruitment guidance to organisations that want to improve their hiring processes and attract better talent.',
      points: ['Hiring process review', 'Job description and scorecard design', 'Interviewer training and structure', 'Recruitment policy development'],
      for: 'Employers improving how they hire' }
  ],

  employmentTypes: ['Permanent', 'Contract', 'Temporary', 'Internship', 'Part-time', 'Full-time'],
  experienceLevels: ['Entry Level', 'Graduate', 'Mid Level', 'Senior Level', 'Management', 'Executive'],

  team: [
    { name: 'E. Okopa', role: 'Founder & Managing Director', initials: 'EO',
      bio: 'Leads the company with over a decade of experience in recruitment, talent management and business development in Uganda.',
      expertise: ['Business Strategy', 'Client Relations'] },
    { name: 'N. Mwangi', role: 'Head of Recruitment', initials: 'NM',
      bio: 'Oversees candidate sourcing and selection, with a strong focus on structured, merit-based recruitment practice.',
      expertise: ['Permanent Recruitment', 'Candidate Sourcing'] },
    { name: 'A. Nakato', role: 'Talent Acquisition Specialist', initials: 'AN',
      bio: 'Specialises in graduate and entry-level recruitment and supports candidates through the application process.',
      expertise: ['Graduate Recruitment', 'Candidate Support'] },
    { name: 'S. Kintu', role: 'Consultant — Executive Search', initials: 'SK',
      bio: 'Handles senior and specialist searches, including confidential leadership mandates for client organisations.',
      expertise: ['Executive Search', 'Market Mapping'] },
    { name: 'B. Namutebi', role: 'HR & Compliance Officer', initials: 'BN',
      bio: 'Responsible for candidate data protection, fair recruitment practice and internal HR operations.',
      expertise: ['Compliance', 'Candidate Relations'] },
    { name: 'T. Wasswa', role: 'Business Development Manager', initials: 'TW',
      bio: 'Works with employer clients to understand requirements and recommend suitable recruitment solutions.',
      expertise: ['Employer Partnerships', 'Account Management'] }
  ],

  jobs: [
    {
      id: 'human-resources-officer',
      title: 'Human Resources Officer',
      org: 'Kampala Fintech Holdings',
      initials: 'KF',
      location: 'Kampala, Uganda',
      type: 'Permanent',
      industry: 'Finance & Banking',
      level: 'Mid Level',
      posted: '2026-10-02',
      deadline: '2026-11-06',
      salary: 'Negotiable based on experience',
      featured: true,
      overview: 'Our client is a growing financial services company looking for a Human Resources Officer to support day-to-end HR operations, staff welfare and recruitment coordination across its branches.',
      responsibilities: [
        'Support recruitment activities including drafting job descriptions, scheduling interviews and coordinating candidate communication.',
        'Maintain accurate employee records and manage leave, attendance and staff documentation.',
        'Handle staff welfare, disciplinary matters and internal communication.',
        'Support staff training, performance management and onboarding of new employees.',
        'Ensure compliance with employment policies and labour requirements.',
        'Assist in preparing HR reports and department budgets.'
      ],
      qualifications: [
        "Bachelor's degree in Human Resource Management, Business Administration or a related field.",
        'At least 2 years of working experience in a HR role.',
        'Professional HR certification is an added advantage.',
        'Strong working knowledge of Ugandan labour laws.'
      ],
      skills: [
        'Recruitment and interviewing support',
        'Employee relations',
        'Records management and report writing',
        'MS Office and HR systems',
        'Communication and confidentiality'
      ],
      offers: [
        'Monthly salary with performance incentives',
        'Medical insurance cover for you and your dependants',
        'Professional development and certification support',
        'Structured career progression'
      ],
      howToApply: 'Submit your application through this website including an updated CV. shortlisted candidates will be contacted for an interview.'
    },
    {
      id: 'software-developer',
      title: 'Software Developer (Backend)',
      org: 'Mbarara Digital Solutions',
      initials: 'MD',
      location: 'Mbarara, Uganda (Hybrid)',
      type: 'Full-time',
      industry: 'ICT & Technology',
      level: 'Mid Level',
      posted: '2026-10-01',
      deadline: '2026-11-10',
      salary: 'Negotiable based on experience',
      featured: true,
      overview: 'A technology company is seeking a backend developer to build and maintain scalable services for its client platforms. You will work closely with the product and front-end teams.',
      responsibilities: [
        'Design, build and maintain backend services and APIs.',
        'Write clean, tested and well-documented code.',
        'Work with databases, integrations and deployment pipelines.',
        'Identify and fix performance and reliability issues.',
        'Participate in code reviews and technical planning.'
      ],
      qualifications: [
        "Bachelor's degree in Computer Science, Software Engineering or Information Technology.",
        'At least 3 years of professional backend development experience.',
        'Strong knowledge of at least one backend language such as Python, Node.js or Java.',
        'Experience with relational databases and REST APIs.'
      ],
      skills: [
        'Python, Node.js or Java',
        'SQL and database design',
        'Git and version control',
        'API design and integration',
        'Problem-solving and attention to detail'
      ],
      offers: [
        'Hybrid working arrangement',
        'Health insurance and paid leave',
        'Learning budget for certifications',
        'Exposure to challenging technical projects'
      ],
      howToApply: 'Apply online with your CV and a short description of a project you are proud of. Applications are reviewed on a rolling basis.'
    },
    {
      id: 'sales-representative',
      title: 'Sales Representative',
      org: 'BrightPath Trading Company',
      initials: 'BT',
      location: 'Kampala, Uganda',
      type: 'Permanent',
      industry: 'Sales & Marketing',
      level: 'Entry Level',
      posted: '2026-09-28',
      deadline: '2026-10-31',
      salary: 'Commission plus fixed monthly allowance',
      featured: false,
      overview: 'Our client distributes consumer products across Uganda and is looking for energetic sales representatives to grow retail coverage in the central region.',
      responsibilities: [
        'Drive product sales to retailers and outlets.',
        'Build and maintain customer relationships.',
        'Report daily sales activity and market information.',
        'Ensure stock availability and proper merchandising at outlets.'
      ],
      qualifications: [
        'A minimum of a diploma in Business, Sales or Marketing.',
        'At least 1 year of sales experience is preferred but not mandatory.',
        'Strong communication and interpersonal skills.',
        'Willingness to travel within the region.'
      ],
      skills: ['Sales and negotiation', 'Customer service', 'Communication', 'Teamwork', 'Basic record keeping'],
      offers: ['Fixed monthly allowance plus commission', 'Performance bonuses', 'Transport allowance', 'Product training'],
      howToApply: 'Apply through this website with your CV. Shortlisted candidates will be invited for a short interview.'
    },
    {
      id: 'project-manager',
      title: 'Project Manager — Water & Sanitation',
      org: 'Sustainable Development Network',
      initials: 'SD',
      location: 'Jinja, Uganda',
      type: 'Contract',
      industry: 'NGO & Development',
      level: 'Senior Level',
      posted: '2026-09-26',
      deadline: '2026-10-28',
      salary: 'Negotiable based on experience',
      featured: true,
      overview: 'An NGO is implementing a water and sanitation programme across several districts and requires an experienced project manager to lead delivery and reporting.',
      responsibilities: [
        'Manage project delivery, budget and team performance.',
        'Coordinate with community leaders, contractors and local authorities.',
        'Prepare donor and partner progress reports.',
        'Monitor implementation against workplans and indicators.',
        'Ensure compliance with organisational and donor standards.'
      ],
      qualifications: [
        "Bachelor's degree in Engineering, Development Studies, Project Management or a related field.",
        'At least 5 years of experience managing donor-funded development projects.',
        'Strong report writing and stakeholder management skills.',
        'Knowledge of monitoring and evaluation frameworks.'
      ],
      skills: ['Project management', 'Budget control', 'Donor reporting', 'Stakeholder engagement', 'Team leadership'],
      offers: ['Contract with possible renewal', 'Field and travel allowance', 'Professional development support'],
      howToApply: 'Send your CV and a one-page summary of a project you have managed, through the application form on this site.'
    },
    {
      id: 'accountant',
      title: 'Accountant',
      org: 'Rwenzori Agro processors Ltd',
      initials: 'RA',
      location: 'Kasese, Uganda',
      type: 'Permanent',
      industry: 'Agriculture',
      level: 'Mid Level',
      posted: '2026-09-24',
      deadline: '2026-11-02',
      salary: 'Negotiable based on experience',
      featured: false,
      overview: 'An agro-processing company requires a detail-oriented accountant to manage financial records, statutory reporting and internal financial controls.',
      responsibilities: [
        'Prepare monthly management accounts and financial reports.',
        'Manage statutory taxes, statutory filings and compliance.',
        'Supervise bookkeeping and reconciliations.',
        'Support budgeting and cash-flow management.',
        'Ensure internal financial controls are followed.'
      ],
      qualifications: [
        "Bachelor's degree in Accounting, Finance or a related field.",
        'Professional accounting qualification (CPA, ACCA or equivalent) is an added advantage.',
        'At least 3 years of accounting experience, ideally in manufacturing or agribusiness.',
        'Working knowledge of tax and statutory reporting requirements.'
      ],
      skills: ['Financial reporting', 'Tax compliance', 'Financial controls', 'Bookkeeping', 'Use of accounting software'],
      offers: ['Attractive salary package', 'Medical and group life cover', 'Transport allowance'],
      howToApply: 'Apply online with your CV and copies of your academic and professional qualifications.'
    },
    {
      id: 'primary-school-teacher',
      title: 'Primary School Teacher',
      org: 'Kampala Sunrise Schools',
      initials: 'KS',
      location: 'Kampala, Uganda',
      type: 'Permanent',
      industry: 'Education',
      level: 'Entry Level',
      posted: '2026-09-22',
      deadline: '2026-10-25',
      salary: 'Negotiable based on qualifications',
      featured: false,
      overview: 'A growing school network is looking for qualified primary school teachers to deliver quality classroom instruction and support learner development.',
      responsibilities: [
        'Plan and deliver age-appropriate lessons.',
        'Assess learner progress and keep accurate records.',
        'Maintain a safe, orderly and inclusive classroom environment.',
        'Work with parents and school administration on learner welfare.',
        'Participate in school activities and community engagement.'
      ],
      qualifications: [
        'A teaching qualification recognised by the Ministry of Education (e.g. B.Ed, Diploma in Education).',
        'At least 1 year of teaching experience is preferred.',
        'Strong command of English and at least one local language.',
        'Demonstrated classroom management skills.'
      ],
      skills: ['Lesson planning', 'Classroom management', 'Assessment', 'Communication with parents'],
      offers: ['Stable teaching environment', 'In-service training opportunities', 'Meals during school term'],
      howToApply: 'Apply through this website and attach your CV and copies of your teaching certificates.'
    },
    {
      id: 'network-administrator',
      title: 'IT Network Administrator',
      org: 'Northern Star Hospital',
      initials: 'NH',
      location: 'Arua, Uganda',
      type: 'Contract',
      industry: 'Healthcare',
      level: 'Mid Level',
      posted: '2026-09-20',
      deadline: '2026-11-14',
      salary: 'Negotiable based on experience',
      featured: false,
      overview: 'A hospital network is seeking a network administrator to support and maintain its IT infrastructure, systems and user support services.',
      responsibilities: [
        'Maintain network infrastructure, servers and endpoints.',
        'Provide first-line IT support to clinical and administrative staff.',
        'Monitor system performance and resolve incidents.',
        'Support backups, security policies and system updates.',
        'Maintain asset and configuration records.'
      ],
      qualifications: [
        "Bachelor's degree or diploma in Information Technology or Computer Science.",
        'At least 3 years of relevant IT support experience.',
        'Knowledge of Windows Server, LAN/WAN configuration and basic network security.',
        'Strong problem-solving and communication skills.'
      ],
      skills: ['Networking (LAN/WAN)', 'Windows Server', 'Technical support', 'Troubleshooting', 'IT security basics'],
      offers: ['12-month renewable contract', 'Medical insurance', 'On-call allowance'],
      howToApply: 'Apply online with your CV and indicate your earliest date of availability.'
    },
    {
      id: 'sales-marketing-manager',
      title: 'Sales & Marketing Manager',
      org: 'Lakeside Hospitality Group',
      initials: 'LH',
      location: 'Entebbe, Uganda',
      type: 'Permanent',
      industry: 'Hospitality & Tourism',
      level: 'Management',
      posted: '2026-09-18',
      deadline: '2026-10-30',
      salary: 'Negotiable based on experience',
      featured: true,
      overview: 'A hospitality group is looking for a results-oriented Sales & Marketing Manager to drive revenue, brand visibility and customer acquisition.',
      responsibilities: [
        'Develop and implement sales and marketing strategies.',
        'Drive revenue targets across the group.',
        'Manage digital marketing channels and campaigns.',
        'Manage a small marketing and sales team.',
        'Build corporate and corporate-institutional partnerships.'
      ],
      qualifications: [
        "Bachelor's degree in Marketing, Business Administration or a related field.",
        'At least 5 years of progressive experience in sales and marketing, with hospitality exposure preferred.',
        'Strong leadership and team management skills.',
        'Proven track record of meeting sales targets.'
      ],
      skills: ['Strategic marketing', 'Sales leadership', 'Digital marketing', 'Team management', 'Negotiation'],
      offers: ['Competitive salary plus performance bonus', 'Accommodation and transport', 'Leadership development'],
      howToApply: 'Submit your CV and a brief statement of your revenue achievements through the application form.'
    },
    {
      id: 'civil-engineer',
      title: 'Civil Engineer — Site Supervision',
      org: 'Harmony Construction Works',
      initials: 'HC',
      location: 'Wakiso, Uganda',
      type: 'Permanent',
      industry: 'Construction',
      level: 'Mid Level',
      posted: '2026-09-16',
      deadline: '2026-11-08',
      salary: 'Negotiable based on experience',
      featured: false,
      overview: 'A construction firm needs a civil engineer to supervise site works, monitor quality and ensure projects are delivered to specification and within programme.',
      responsibilities: [
        'Supervise site works and ensure compliance with drawings and specifications.',
        'Monitor work quality, progress and site safety.',
        'Coordinate with contractors, suppliers and project consultants.',
        'Prepare site reports and manage daily measurements.',
        'Enforce health and safety requirements on site.'
      ],
      qualifications: [
        "Bachelor's degree in Civil Engineering or a related field.",
        'At least 4 years of experience in site supervision on building or civil works.',
        'Membership with the Uganda Institution of Civil Engineers is an advantage.',
        'Strong knowledge of construction methods and materials.'
      ],
      skills: ['Site supervision', 'AutoCAD', 'Quantity take-off', 'Quality and safety control', 'Team coordination'],
      offers: ['Transport and site allowance', 'Medical insurance', 'Performance bonus on milestones'],
      howToApply: 'Apply online with your CV and copies of your academic certificates.'
    },
    {
      id: 'nurse-midwife',
      title: 'Registered Nurse / Midwife',
      org: 'Community Health Partners Uganda',
      initials: 'CH',
      location: 'Mbale, Uganda',
      type: 'Temporary',
      industry: 'Healthcare',
      level: 'Entry Level',
      posted: '2026-09-14',
      deadline: '2026-10-27',
      salary: 'Negotiable based on experience',
      featured: false,
      overview: 'A health services organisation requires registered nurses and midwives to support delivery of clinical services at its health facilities.',
      responsibilities: [
        'Deliver patient care in line with clinical protocols.',
        'Administer treatment and monitor patient progress.',
        'Maintain accurate patient records and handover.',
        'Support health education and community outreach.',
        'Participate in infection prevention and control activities.'
      ],
      qualifications: [
        'Diploma or degree in Nursing or Midwifery from a recognised institution.',
        'Valid registration and practising licence from the relevant Ugandan council.',
        'At least 1 year of clinical experience.',
        'Strong communication and patient-care skills.'
      ],
      skills: ['Patient care', 'Clinical documentation', 'Infection control', 'Emergency response', 'Teamwork'],
      offers: ['Flexible shift arrangements', 'Accommodation support', 'Medical cover'],
      howToApply: 'Apply online and upload a scan of your valid practising licence with your CV.'
    },
    {
      id: 'legal-officer',
      title: 'Legal Officer',
      org: 'Fairstone Capital Partners',
      initials: 'FC',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      industry: 'Legal & Compliance',
      level: 'Mid Level',
      posted: '2026-09-12',
      deadline: '2026-11-01',
      salary: 'Negotiable based on experience',
      featured: false,
      overview: 'A financial group requires a legal officer to support contract management, compliance and corporate governance activities.',
      responsibilities: [
        'Draft, review and negotiate contracts and agreements.',
        'Support corporate governance and board processes.',
        'Advise business units on regulatory compliance.',
        'Manage external legal counsel and legal spend.',
        'Maintain the legal and compliance documentation.'
      ],
      qualifications: [
        'LLB degree and a valid practising certificate from the Uganda Law Society.',
        'At least 3 years of post-qualification experience.',
        'Strong drafting and negotiation skills.',
        'Knowledge of financial services regulation is an advantage.'
      ],
      skills: ['Contract drafting', 'Legal research', 'Negotiation', 'Corporate governance', 'Compliance advisory'],
      offers: ['Competitive remuneration', 'Professional fee reimbursement', 'Medical cover'],
      howToApply: 'Apply with your CV, practising certificate and copies of academic qualifications.'
    },
    {
      id: 'graphic-designer',
      title: 'Graphic Designer & Social Media Assistant',
      org: 'Rooted Creatives Limited',
      initials: 'RC',
      location: 'Kampala, Uganda (Hybrid)',
      type: 'Part-time',
      industry: 'Sales & Marketing',
      level: 'Entry Level',
      posted: '2026-09-10',
      deadline: '2026-10-24',
      salary: 'Negotiable based on experience',
      featured: false,
      overview: 'A creative agency is looking for a talented designer to produce brand and social media content for multiple clients.',
      responsibilities: [
        'Design brand assets and marketing materials.',
        'Create social media content and manage content calendars.',
        'Support client briefs from concept through to delivery.',
        'Maintain brand consistency across client work.'
      ],
      qualifications: [
        'Diploma or degree in Graphic Design, Visual Communication or related field.',
        'At least 1 year of hands-on design experience.',
        'Strong proficiency in Adobe tools such as Photoshop, Illustrator and Canva.',
        'A creative eye and attention to detail.'
      ],
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Social media content', 'Attention to detail'],
      offers: ['Flexible part-time hours', 'Remote-friendly arrangement', 'Portfolio-based progression'],
      howToApply: 'Apply online and include a link to your portfolio alongside your CV.'
    }
  ],

  faqs: {
    candidates: [
      { q: 'Do you help job seekers find jobs?', a: 'Yes. We provide access to available vacancies and support candidates through the recruitment process, including application guidance and interview preparation.' },
      { q: 'Do I have to pay to apply for a job?', a: 'Candidates should always check the specific vacancy instructions. Smart Recruiters Limited promotes transparent and ethical recruitment practices and does not charge candidates simply for accessing legitimate job opportunities.' },
      { q: 'Can I submit my CV even when there is no suitable vacancy?', a: 'Yes. Where our CV database is available, candidates can submit their CVs for consideration for future opportunities.' },
      { q: 'What types of jobs do you recruit for?', a: 'We recruit across different sectors and levels, including entry-level, graduate, professional, specialist and management positions.' },
      { q: 'How do you select candidates?', a: 'Candidates are assessed against the requirements of the position. Depending on the role, this may include CV screening, interviews, skills assessments and other appropriate selection methods.' },
      { q: 'Do you recruit graduates?', a: 'Yes. Graduate recruitment is one of our services, helping organisations access emerging talent while helping graduates begin their careers.' },
      { q: 'What should I include in my CV?', a: 'Clear and well organised information, starting with your most relevant details. Highlight achievements rather than duties, use professional language, tailor it to each role, and check spelling and grammar. See our CV advice for the full list.' }
    ],
    employers: [
      { q: 'How can my organisation hire through Smart Recruiters?', a: 'Employers can submit a vacancy through our website or contact our team directly. We will discuss the requirements and recommend the appropriate recruitment solution.' },
      { q: 'What recruitment services do you offer employers?', a: 'We provide permanent recruitment, contract and temporary recruitment, graduate recruitment, executive search, bulk recruitment, talent sourcing and recruitment consulting.' },
      { q: 'How long does recruitment take?', a: 'The time required depends on the position, number of candidates required, qualifications and other recruitment requirements. We agree on an appropriate recruitment timeline with each client.' },
      { q: 'Can employers request bulk recruitment?', a: 'Yes. We support organisations that need to recruit several employees within a specified period.' },
      { q: 'Do you charge employers for recruitment?', a: 'Fees, timelines and deliverables are agreed in writing for each engagement and depend on the service selected, the role and the number of people required. Please contact us for a quotation.' }
    ],
    general: [
      { q: 'What does Smart Recruiters Limited do?', a: 'Smart Recruiters Limited connects employers with qualified talent and helps job seekers find suitable employment opportunities through professional recruitment and talent solutions.' },
      { q: 'What industries do you serve?', a: 'Our recruitment services can support sectors including finance, ICT, HR and administration, sales and marketing, education, healthcare, agriculture, engineering, construction, hospitality and NGO/development organisations.' },
      { q: 'What is your commitment to ethical recruitment?', a: 'We are committed to treating candidates fairly, providing accurate vacancy information, protecting personal data, avoiding discrimination, and supporting merit-based, transparent recruitment. See our Ethical Recruitment page for the full list of commitments.' },
      { q: 'How is my personal information handled?', a: 'Information submitted through our website is used only for legitimate recruitment, communication and service-related purposes. We never sell personal data. See our Privacy Policy for full details.' },
      { q: 'How can I contact Smart Recruiters Limited?', a: 'You can contact us through our website contact form, email, telephone or social media channels. We aim to respond as quickly as possible.' }
    ]
  },

  process: [
    { n: 'Understand', icon: 'message', text: 'We first understand the organisation\'s needs, role requirements and ideal candidate profile.' },
    { n: 'Source', icon: 'search', text: 'We identify potential candidates through suitable recruitment and talent-sourcing channels.' },
    { n: 'Screen', icon: 'fileText', text: 'Candidates are reviewed based on qualifications, experience, skills and suitability for the position.' },
    { n: 'Assess', icon: 'clipboard', text: 'Where required, candidates may go through interviews, assessments or other selection processes.' },
    { n: 'Shortlist', icon: 'thumbsUp', text: 'The most suitable candidates are presented to the employer for consideration.' },
    { n: 'Select', icon: 'checkCircle', text: 'The employer conducts its final selection and makes the hiring decision.' },
    { n: 'Place', icon: 'handshake', text: 'We support the recruitment process through to successful placement.' },
    { n: 'Follow Up', icon: 'refresh', text: 'We maintain communication where appropriate to support a smooth recruitment experience.' }
  ]
};