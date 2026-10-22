export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Business Visas" | "Personal Visas" | "Specialty Visas";
  shortDescription: string;
  fullDescription?: string;
  heroTagline: string;
  iconName: string;
  keyFeatures: string[];
  eligibilityRequirements: string[];
  documentsRequired: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "sponsor-license",
    slug: "sponsor-license",
    title: "Sponsor License",
    category: "Business Visas",
    shortDescription: "Secure authorization to employ qualified foreign professionals in your UK organization.",
    heroTagline: "Empower your business to recruit international talent lawfully with full Home Office compliance.",
    iconName: "Briefcase",
    keyFeatures: [
      "Full eligibility audit & HR systems readiness check",
      "Drafting and collation of mandatory supplementary proof",
      "Mock compliance inspection and interview preparation",
      "Dedicated SMS (Sponsorship Management System) management",
    ],
    eligibilityRequirements: [
      "Operating genuine trading presence within the United Kingdom",
      "Key personnel appointed: Authorising Officer, Key Contact, and Level 1 User",
      "Robust human resources record-keeping and tracking mechanisms",
      "Absence of unspent immigration convictions or sponsor license revocations",
    ],
    documentsRequired: [
      "Certificate of VAT Registration and PAYE confirmation",
      "Latest audited corporate financial accounts",
      "Corporate business bank statements (minimum 3 months)",
      "Proof of business premises ownership or lease contract",
    ],
    processSteps: [
      {
        title: "Initial HR & Systems Audit",
        description: "Our legal advisors evaluate your organizational structure and ensure your compliance policies satisfy Home Office standards.",
      },
      {
        title: "Document Collation & Online Submission",
        description: "Preparation of application bundle with required mandatory Appendix A documents.",
      },
      {
        title: "Home Office Verification & Audit",
        description: "Guidance through potential pre-licence site inspections or digital audits by immigration enforcement.",
      },
      {
        title: "License Grant & Allocation",
        description: "Grant of rating A sponsor license followed by Certificate of Sponsorship (CoS) allocation.",
      },
    ],
    faqs: [
      {
        question: "How long does a UK sponsor license remain valid?",
        answer: "A sponsor license remains active for 4 years, after which it can be renewed provided the employer continues meeting sponsor duties.",
      },
      {
        question: "Can small businesses or startups apply for a sponsor license?",
        answer: "Yes, newly formed enterprises and startups can successfully obtain a sponsor license if they have registered premises, PAYE, and legitimate trading documentation.",
      },
    ],
  },
  {
    id: "skilled-worker-visa",
    slug: "skilled-worker-visa",
    title: "Skilled Worker Visa",
    category: "Business Visas",
    shortDescription: "Pursue legal employment in eligible occupations with an authorized UK employer.",
    heroTagline: "Fast-track your professional UK career with end-to-end sponsorship and application support.",
    iconName: "Award",
    keyFeatures: [
      "Standard occupation code (SOC) matching & salary threshold verification",
      "Defined or Undefined Certificate of Sponsorship (CoS) review",
      "Priority and Super Priority processing coordination",
      "Direct pathway towards UK settlement after qualifying period",
    ],
    eligibilityRequirements: [
      "Valid Certificate of Sponsorship issued by an approved sponsor",
      "Job offer at appropriate skill level (RQF level 3 or above)",
      "Meeting the general salary threshold or the going rate for the occupation",
      "Satisfying English language proficiency (CEFR level B1 minimum)",
    ],
    documentsRequired: [
      "Valid international passport with blank visa pages",
      "Certificate of Sponsorship reference number and details",
      "English language qualification test results or approved degree certificate",
      "Tuberculosis test certificate (if originating from listed countries)",
    ],
    processSteps: [
      {
        title: "Job Offer & CoS Issuance",
        description: "Confirming the sponsoring company allocates a compliant Certificate of Sponsorship.",
      },
      {
        title: "Evidence & Credential Verification",
        description: "Verifying English proficiency, academic credentials, and criminal background disclosures.",
      },
      {
        title: "Visa Application Submission",
        description: "Lodging online visa submission, paying Immigration Health Surcharge, and booking biometrics.",
      },
      {
        title: "Decision & Entry Clearance",
        description: "Receiving your digital eVisa or passport vignette ready for travel.",
      },
    ],
    faqs: [
      {
        question: "Can I bring my family members on a Skilled Worker visa?",
        answer: "Eligible partners and dependent children under 18 can apply to join you as dependents.",
      },
      {
        question: "Can this visa lead to British citizenship?",
        answer: "Yes, continuous lawful residence under the Skilled Worker route leads to settlement and subsequent citizenship.",
      },
    ],
  },
  {
    id: "spouse-visa",
    slug: "spouse-visa",
    title: "Spouse Visa",
    category: "Personal Visas",
    shortDescription: "Join and live with your British or settled partner in the UK with full work rights.",
    heroTagline: "Navigate relationship proof and financial thresholds to build your life together in the UK.",
    iconName: "HeartHandshake",
    keyFeatures: [
      "Comprehensive genuine relationship dossier assembly",
      "Financial requirement calculations (salary, cash savings, or combined)",
      "Adequate accommodation assessment reporting",
      "Spouse visa extensions and transition to settlement",
    ],
    eligibilityRequirements: [
      "Both partners must be 18 years of age or older",
      "Marriage or civil partnership legally recognized in the UK",
      "Satisfying the minimum financial income threshold or permitted exemptions",
      "Suitable accommodation available without recourse to public funds",
    ],
    documentsRequired: [
      "Original marriage certificate or civil partnership registration",
      "Sponsor's proof of British citizenship, settled status, or ILR",
      "Payslips, bank statements, and employer letter proving income requirements",
      "Proof of genuine cohabitation and ongoing communication history",
    ],
    processSteps: [
      {
        title: "Case Assessment & Financial Planning",
        description: "Evaluating financial documents to ensure strict compliance with immigration rules Appendix FM-SE.",
      },
      {
        title: "Relationship Evidence Portfolio",
        description: "Building an unassailable bundle demonstrating your genuine and subsisting partnership.",
      },
      {
        title: "Submission & Biometrics",
        description: "Filing application online and attending visa application appointment.",
      },
      {
        title: "Arrival & BRP / eVisa Setup",
        description: "Receiving your entry vignette and registering your UK digital status.",
      },
    ],
    faqs: [
      {
        question: "Can savings be used instead of employment salary?",
        answer: "Yes, qualifying cash savings held for a minimum of 6 months can be used to meet or offset the income threshold.",
      },
      {
        question: "How long is the initial Spouse Visa granted for?",
        answer: "Initial entry clearance is granted for 33 months (or 30 months if switching from within the UK).",
      },
    ],
  },
  {
    id: "british-citizenship",
    slug: "british-citizenship",
    title: "British Citizenship",
    category: "Personal Visas",
    shortDescription: "Achieve the final milestone of British nationality and secure a UK passport.",
    heroTagline: "Expert legal representation for naturalisation, registration, and passport applications.",
    iconName: "GraduationCap",
    keyFeatures: [
      "Good character verification and background checks audit",
      "Absence allowance calculations and travel history review",
      "Life in the UK & English language compliance checks",
      "Child registration and complex nationality claims",
    ],
    eligibilityRequirements: [
      "Held Indefinite Leave to Remain or Settled Status for at least 12 months (or immediate if married to a British citizen)",
      "Continuous residence without exceeding maximum permitted absences",
      "Passing the Life in the UK test and recognized English qualification",
      "Meeting the statutory good character and sound mind criteria",
    ],
    documentsRequired: [
      "Proof of indefinite settlement status or EU settled status confirmation",
      "Life in the UK test pass notification letter",
      "Two acceptable referee declarations meeting Home Office criteria",
      "Complete international travel log and historical passport records",
    ],
    processSteps: [
      {
        title: "Eligibility & Absences Calculation",
        description: "Detailed tally of travel history and verification of the 5-year or 3-year qualifying residency period.",
      },
      {
        title: "Referee Endorsement & File Preparation",
        description: "Coordination of professional and personal referees and evidence compilation.",
      },
      {
        title: "Home Office Nationality Lodgement",
        description: "Online submission to UKVI with uploaded certified document bundle.",
      },
      {
        title: "Citizenship Ceremony & Passport",
        description: "Attending local council ceremony, taking the oath of allegiance, and receiving your Certificate of Naturalisation.",
      },
    ],
    faqs: [
      {
        question: "What is the maximum absence allowed in the last year before applying?",
        answer: "You generally must not have spent more than 90 days outside the United Kingdom in the 12 months immediately preceding application.",
      },
      {
        question: "Do children automatically become British citizens?",
        answer: "Children born abroad or before parents settled require specific registration under Section 1(3) or 3(1) of the British Nationality Act.",
      },
    ],
  },
  {
    id: "business-visit-visa",
    slug: "business-visit-visa",
    title: "Business Visitor Visa",
    category: "Business Visas",
    shortDescription: "Attend commercial meetings, international conferences, and corporate events in the UK.",
    heroTagline: "Facilitating seamless corporate travel and short-term commercial engagements in Great Britain.",
    iconName: "Globe2",
    keyFeatures: [
      "Verification of permitted corporate and commercial activities",
      "Invitation letter and itinerary structuring",
      "Demonstration of ties to home country and financial maintenance",
      "Multi-year business visitor visa options (2, 5, or 10 years)",
    ],
    eligibilityRequirements: [
      "Intention to carry out only permitted corporate activities",
      "Intention to leave the UK at the conclusion of the visit",
      "Sufficient funds to cover all living and travel expenses without working",
      "Proof of genuine ongoing employment or enterprise in home country",
    ],
    documentsRequired: [
      "Letter of invitation from UK host company or event organiser",
      "Letter of support from applicant's overseas employer",
      "Personal and corporate bank statements (past 6 months)",
      "Detailed itinerary of business engagements and accommodations",
    ],
    processSteps: [
      {
        title: "Business Purpose Verification",
        description: "Aligning planned visit activities with UK immigration appendix for visitors.",
      },
      {
        title: "Documentation & Letter of Support",
        description: "Drafting robust sponsorship and purpose-of-visit letters.",
      },
      {
        title: "Biometric Appointment",
        description: "Attending Visa Application Centre in home country.",
      },
      {
        title: "Visa Grant",
        description: "Collection of passport with entry vignette.",
      },
    ],
    faqs: [
      {
        question: "Can I receive payment for services on a business visit visa?",
        answer: "You cannot take UK employment or receive direct UK payment, though permitted paid engagements exist for specific artistic or academic activities.",
      },
    ],
  },
  {
    id: "uk-student-visa",
    slug: "uk-student-visa",
    title: "Student Visa",
    category: "Personal Visas",
    shortDescription: "Pursue world-class undergraduate, postgraduate, or research studies at UK institutions.",
    heroTagline: "Turn educational ambitions into reality with expert guidance on CAS and maintenance funding.",
    iconName: "BookOpen",
    keyFeatures: [
      "Confirmation of Acceptance for Studies (CAS) validation",
      "Maintenance financial calculation & 28-day funds rule tracking",
      "ATAS certificate advice for specialized sciences",
      "Post-study Graduate Route transition preparation",
    ],
    eligibilityRequirements: [
      "Unconditional course offer from an approved licensed student sponsor",
      "Sufficient money to pay course fees and monthly living costs",
      "Meeting English language proficiency standard of the university",
      "Consent from parents/guardians if under 18",
    ],
    documentsRequired: [
      "Valid Confirmation of Acceptance for Studies (CAS) reference",
      "Bank statements showing maintenance funds held consecutively for 28 days",
      "Academic transcripts and qualification certificates listed on CAS",
      "TB clearance test certificate where required",
    ],
    processSteps: [
      {
        title: "University Acceptance & CAS",
        description: "Confirming unconditional offer and issuance of CAS reference number.",
      },
      {
        title: "Financial Maintenance Audit",
        description: "Reviewing bank accounts to ensure funds meet exact 28-day seasoning rules.",
      },
      {
        title: "Application Lodgement",
        description: "Submitting visa forms, IHS healthcare surcharge, and biometric booking.",
      },
      {
        title: "Enrolment in the UK",
        description: "Arrival in the UK and university registration.",
      },
    ],
    faqs: [
      {
        question: "Can international students work during their studies?",
        answer: "Degree-level students at higher education institutions are permitted to work up to 20 hours per week during term time and full-time during holidays.",
      },
    ],
  },
  {
    id: "uk-ancestry-visa",
    slug: "uk-ancestry-visa",
    title: "UK Ancestry Visa",
    category: "Specialty Visas",
    shortDescription: "Leverage Commonwealth heritage and British grandparentage to live and work in the UK.",
    heroTagline: "Honor your family lineage with a 5-year work visa leading directly to settlement.",
    iconName: "Compass",
    keyFeatures: [
      "Family tree ancestral verification and registry searches",
      "5-year direct validity with full employment & business rights",
      "No sponsor needed and no minimum salary constraints",
      "Dependents can accompany with equal working privileges",
    ],
    eligibilityRequirements: [
      "Commonwealth citizen aged 17 or over",
      "At least one grandparent born in the UK, Channel Islands, or Isle of Man",
      "Able and intending to take up employment or self-employment in the UK",
      "Able to maintain and accommodate yourself without recourse to public funds",
    ],
    documentsRequired: [
      "Applicant's full birth certificate showing parents' details",
      "Parents' marriage and birth certificates",
      "UK-born grandparent's full birth certificate and marriage certificate",
      "Evidence of ability and intention to work in the UK (CV, job applications)",
    ],
    processSteps: [
      {
        title: "Genealogical Document Search",
        description: "Locating official certified copies from general register offices.",
      },
      {
        title: "Work Intention Dossier",
        description: "Compiling professional history and employment search preparations.",
      },
      {
        title: "Online Filing & Biometrics",
        description: "Lodging the ancestry petition from outside the United Kingdom.",
      },
      {
        title: "Arrival with 5-Year Status",
        description: "Commence employment with a clear path to settlement after 5 years.",
      },
    ],
    faqs: [
      {
        question: "Can an adopted grandparent qualify for the Ancestry route?",
        answer: "Yes, provided the adoption was legal and valid official adoption certificates are submitted.",
      },
    ],
  },
  {
    id: "charity-worker-visa",
    slug: "charity-worker-visa",
    title: "Charity Worker Visa",
    category: "Specialty Visas",
    shortDescription: "Undertake voluntary unpaid work for an authorized UK charitable organisation.",
    heroTagline: "Contribute to humanitarian causes with a dedicated temporary voluntary worker visa.",
    iconName: "ShieldCheck",
    keyFeatures: [
      "Up to 12 months voluntary stay in the UK",
      "Sponsorship from a licensed registered charity",
      "Coverage for essential living allowance and accommodation",
      "Simplified application timeline and requirements",
    ],
    eligibilityRequirements: [
      "Certificate of Sponsorship from an approved charity sponsor",
      "Work must be voluntary and directly related to the charity's mission",
      "Applicant must not receive pay for work other than reasonable expenses",
      "Financial maintenance requirement met or certified by sponsor",
    ],
    documentsRequired: [
      "Certificate of Sponsorship reference number",
      "Proof of funds or sponsor maintenance endorsement on CoS",
      "Valid passport with entry eligibility",
      "Letter from charity outlining voluntary role and duties",
    ],
    processSteps: [
      {
        title: "Charity Matching & CoS",
        description: "Confirmation of voluntary appointment with licensed charitable sponsor.",
      },
      {
        title: "Financial Review",
        description: "Ensuring maintenance allowance or personal savings are verified.",
      },
      {
        title: "Visa Lodgement",
        description: "Online filing and biometric enrolment.",
      },
      {
        title: "Community Impact",
        description: "Arrival in the UK to commence voluntary mission.",
      },
    ],
    faqs: [
      {
        question: "Can this visa be extended beyond 12 months?",
        answer: "The maximum duration for a Charity Worker visa is 12 months or the time on your CoS plus 14 days, whichever is shorter.",
      },
    ],
  },
  {
    id: "uk-settlement-visa",
    slug: "uk-settlement-visa",
    title: "EU Settlement Scheme",
    category: "Specialty Visas",
    shortDescription: "Secure settled or pre-settled status for European nationals and family members in the UK.",
    heroTagline: "Preserve your permanent rights to live, work, and access healthcare in Britain.",
    iconName: "FileCheck2",
    keyFeatures: [
      "Switching from Pre-Settled to Settled Status assistance",
      "Late application representations with reasonable grounds justification",
      "Joining family member applications for European relatives",
      "Resolution of complex continuous residence gaps",
    ],
    eligibilityRequirements: [
      "Resident in the UK before December 31, 2020 (or eligible joining family member)",
      "Proof of continuous qualifying residence in the UK",
      "Clean criminal and immigration compliance record",
      "Reasonable grounds documentation if lodging a retrospective application",
    ],
    documentsRequired: [
      "Valid biometric passport or national identity card",
      "National Insurance number or alternative tax/utility proof of residence",
      "Relationship evidence if applying as a joining dependent relative",
      "Evidence explaining why application was not submitted before deadline",
    ],
    processSteps: [
      {
        title: "Continuous Residence Audit",
        description: "Gathering evidence of 5 years continuous physical presence in the UK.",
      },
      {
        title: "Reasonable Grounds Argument",
        description: "Drafting legal representations if applying as a late or exceptional applicant.",
      },
      {
        title: "Digital App ID Verification",
        description: "Submitting identity via the official digital scanning framework.",
      },
      {
        title: "Settled Status Grant",
        description: "Acquiring permanent indefinite right to reside and work.",
      },
    ],
    faqs: [
      {
        question: "Can I still apply under the EU Settlement Scheme today?",
        answer: "Yes, late applications continue to be accepted where there are reasonable grounds for the delay, as well as for joining family members.",
      },
    ],
  },
  {
    id: "global-business-mobility",
    slug: "global-business-mobility",
    title: "Global Business Mobility Visa",
    category: "Business Visas",
    shortDescription: "Transfer key overseas employees, expansion specialists, and senior executives to the UK branch.",
    heroTagline: "Seamless intra-company personnel relocation for multinational groups and overseas parent entities.",
    iconName: "Briefcase",
    keyFeatures: [
      "Senior or Specialist Worker assignment guidance",
      "UK Expansion Worker route for new UK office establishment",
      "Secondment and Service Supplier visa assistance",
      "Full compliance with overseas employment tenure rules",
    ],
    eligibilityRequirements: [
      "Sponsoring business holds an approved UK Global Business Mobility licence",
      "Applicant currently employed by linked overseas entity (usually min. 12 months)",
      "Role on the eligible occupation list at graduate level (RQF 6+)",
      "Minimum salary threshold satisfied according to standard going rates",
    ],
    documentsRequired: [
      "Valid Certificate of Sponsorship (CoS) reference number",
      "Overseas payslips and employment agreement verifying qualifying tenure",
      "Proof of corporate link between UK sponsor and overseas enterprise",
      "Valid passport and tuberculosis test certificate if applicable",
    ],
    processSteps: [
      {
        title: "Corporate Link Verification",
        description: "Documenting common ownership, joint venture, or subsidiary relationship.",
      },
      {
        title: "Certificate of Sponsorship Assignment",
        description: "Allocation and assignment of specific GBM Certificate of Sponsorship.",
      },
      {
        title: "Visa Application & Biometrics",
        description: "Submission of entry clearance application and priority biometric appointment.",
      },
      {
        title: "UK Onboarding & Right to Work",
        description: "Pre-arrival compliance briefing and right-to-work file setup.",
      },
    ],
    faqs: [
      {
        question: "Does the Global Business Mobility route lead directly to UK settlement?",
        answer: "The GBM Senior or Specialist Worker route does not directly count toward 5-year settlement, but holders can switch into the Skilled Worker route to pursue ILR.",
      },
    ],
  },
  {
    id: "hiring-foreign-workers",
    slug: "hiring-foreign-workers",
    title: "Hiring Foreign Workers Guidance",
    category: "Business Visas",
    shortDescription: "Strategic counsel on navigating UK labor shortages and onboarding international specialists.",
    heroTagline: "Build a global workforce in full compliance with UK immigration law and Home Office regulations.",
    iconName: "Briefcase",
    keyFeatures: [
      "Shortage occupation analysis and SOC code alignment",
      "Right to work verification procedures and audits",
      "HR compliance system implementation and staff training",
      "Assistance with sponsor license applications and renewals",
    ],
    eligibilityRequirements: [
      "UK business actively trading with genuine staffing needs",
      "Roles meet Home Office skill and salary thresholds",
      "No adverse immigration civil penalties or sanctions",
      "Capable key personnel appointed within the UK organisation",
    ],
    documentsRequired: [
      "Company registration, VAT, and business premises documentation",
      "Detailed job descriptions, employment contracts, and salary schedules",
      "Proof of recruitment efforts and candidate qualifications",
      "Staff HR files and right-to-work recording protocols",
    ],
    processSteps: [
      {
        title: "Role & Salary Assessment",
        description: "Evaluating candidate qualifications against UK SOC codes and going rates.",
      },
      {
        title: "Licence Verification & CoS Request",
        description: "Obtaining defined or undefined Certificates of Sponsorship.",
      },
      {
        title: "Application Support",
        description: "Assisting prospective employees with their visa documentation bundle.",
      },
      {
        title: "Post-Arrival Compliance",
        description: "Setting up right-to-work verification and ongoing tracking logs.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to hire an international worker under the UK system?",
        answer: "If your company already has a Sponsor License, the visa application typically takes 3 to 8 weeks depending on whether priority processing is used.",
      },
    ],
  },
  {
    id: "graduate-visa",
    slug: "graduate-visa",
    title: "UK Graduate Visa",
    category: "Personal Visas",
    shortDescription: "Work or look for work in the UK for at least 2 years after graduating from a UK university.",
    heroTagline: "Launch your international career in the UK without needing immediate company sponsorship.",
    iconName: "GraduationCap",
    keyFeatures: [
      "No employer sponsorship or minimum salary requirement",
      "Unrestricted employment rights across any UK sector",
      "2-year permission (3 years for doctoral graduates)",
      "Direct pathway to switch into Skilled Worker status later",
    ],
    eligibilityRequirements: [
      "Currently present in the UK on an active Student visa",
      "Successfully completed an eligible UK degree from a licensed sponsor",
      "Education institution has officially notified the Home Office of completion",
      "Clean UK immigration history with timely submission before Student visa expires",
    ],
    documentsRequired: [
      "Valid passport with current Student visa biometric details",
      "Confirmation of course completion from UK university registrar",
      "Confirmation of Acceptance for Studies (CAS) reference number",
      "Immigration Health Surcharge (IHS) payment confirmation",
    ],
    processSteps: [
      {
        title: "University Notification Check",
        description: "Confirming your university has formally reported your course completion to the Home Office.",
      },
      {
        title: "Online Application & Identity App",
        description: "Completing digital identity verification using the UK Immigration: ID Check app.",
      },
      {
        title: "Fee & Health Surcharge Payment",
        description: "Processing application fee and IHS coverage.",
      },
      {
        title: "Visa Issuance",
        description: "Receiving your digital eVisa granting unrestricted UK employment rights.",
      },
    ],
    faqs: [
      {
        question: "Can I bring my family dependents on a Graduate Visa?",
        answer: "Only family members who are already in the UK as your dependents on your Student visa can extend as dependents under the Graduate route.",
      },
    ],
  },
  {
    id: "indefinite-leave-to-remain",
    slug: "indefinite-leave-to-remain",
    title: "Indefinite Leave to Remain (ILR)",
    category: "Personal Visas",
    shortDescription: "Permanent UK settlement allowing you to live, work, and study without immigration time limits.",
    heroTagline: "Your final milestone toward permanent UK residency and British citizenship.",
    iconName: "Award",
    keyFeatures: [
      "5-year qualifying continuous residence calculation",
      "Absence allowance audits (under 180 days in any 12-month period)",
      "Life in the UK test and English language proof assistance",
      "Preparation of comprehensive cover letter and supporting dossier",
    ],
    eligibilityRequirements: [
      "5 years continuous lawful residence on a qualifying visa route (Skilled Worker, Spouse, Ancestry)",
      "Passed the official Life in the UK Test",
      "Demonstrated English language proficiency at CEFR B1 or higher",
      "Clean criminal record and no unresolved debts to the NHS",
    ],
    documentsRequired: [
      "Current and previous passports covering the entire 5-year qualifying period",
      "Life in the UK Test pass reference and English language test certificate",
      "Letter from current employer confirming continued employment and salary",
      "Full absence schedules, travel history, and boarding passes",
    ],
    processSteps: [
      {
        title: "Residence & Absence Calculation",
        description: "Precise audit of your entry/exit stamps to verify compliance with the 180-day absence rule.",
      },
      {
        title: "Evidence Bundle Compilation",
        description: "Gathering payslips, P60s, employer confirmation letters, and accommodation evidence.",
      },
      {
        title: "Super-Priority or Standard Submission",
        description: "Lodging digital application with optional 24-hour super-priority decision.",
      },
      {
        title: "Settlement Status Confirmation",
        description: "Receipt of indefinite leave status, paving the way for British passport application after 12 months.",
      },
    ],
    faqs: [
      {
        question: "When can I apply for British citizenship after getting ILR?",
        answer: "If married to a British citizen, you can apply immediately upon obtaining ILR. Otherwise, you must hold ILR for 12 months before applying for naturalisation.",
      },
    ],
  },
  {
    id: "innovator-visa-uk",
    slug: "innovator-visa-uk",
    title: "Innovator Founder Visa",
    category: "Business Visas",
    shortDescription: "For innovative entrepreneurs looking to set up and run an innovative business in the UK.",
    heroTagline: "Bring your disruptive business idea to the UK with endorsed government support.",
    iconName: "Sparkles",
    keyFeatures: [
      "Endorsement body liaison and pitch deck preparation",
      "Innovative, viable, and scalable business plan assessment",
      "No statutory minimum investment capital requirement",
      "Accelerated 3-year settlement pathway to Indefinite Leave to Remain",
    ],
    eligibilityRequirements: [
      "Business idea endorsed by an approved Home Office endorsing body",
      "Idea is innovative, viable, and capable of national and international growth",
      "Active key role in day-to-day management of the business",
      "English language proficiency at level B2 CEFR and maintenance funds",
    ],
    documentsRequired: [
      "Endorsement letter issued by an approved endorsing body",
      "Comprehensive business plan and financial model projections",
      "Bank statements demonstrating required personal maintenance funds",
      "Proof of qualifications, intellectual property, and market research",
    ],
    processSteps: [
      {
        title: "Business Plan Refinement",
        description: "Aligning your venture documentation with the criteria of designated endorsing bodies.",
      },
      {
        title: "Endorsement Body Pitch & Interview",
        description: "Presenting your innovation to the assessing panel to secure your endorsement letter.",
      },
      {
        title: "Home Office Visa Lodgement",
        description: "Submitting formal visa application once endorsement is secured.",
      },
      {
        title: "3-Year Settlement Progression",
        description: "Bi-annual checkpoint reviews leading to accelerated ILR in 3 years.",
      },
    ],
    faqs: [
      {
        question: "Can Innovator Founder visa holders take secondary employment?",
        answer: "Yes, under current rules Innovator Founders can take secondary employment in skilled roles alongside managing their business.",
      },
    ],
  },
  {
    id: "family-visa",
    slug: "family-visa",
    title: "UK Family & Dependent Visa",
    category: "Personal Visas",
    shortDescription: "Reunite with your children, parents, or adult dependents in the United Kingdom.",
    heroTagline: "Keeping families together through rigorous, compassionate immigration representation.",
    iconName: "Heart",
    keyFeatures: [
      "Child dependent and sole responsibility representations",
      "Adult Dependent Relative (ADR) exceptional care applications",
      "Parent of a British Child visa submissions",
      "Human Rights Act Article 8 private and family life arguments",
    ],
    eligibilityRequirements: [
      "Sponsor has British citizenship, ILR, or settled status in the UK",
      "Genuine relationship and dependency verified through legal evidence",
      "Adequate accommodation available without recourse to public funds",
      "Satisfying specific financial maintenance criteria",
    ],
    documentsRequired: [
      "Birth certificates, adoption papers, or custody/guardianship orders",
      "Evidence of medical dependency and lack of care in country of origin (for ADR)",
      "Proof of sponsor's accommodation and housing inspection report",
      "Financial evidence including sponsor's employment and savings",
    ],
    processSteps: [
      {
        title: "Family Relationship Audit",
        description: "Establishing undisputed legal relationship and sole responsibility where applicable.",
      },
      {
        title: "Evidence & Witness Statements",
        description: "Drafting detailed witness statements and assembling medical and financial records.",
      },
      {
        title: "Entry Clearance or In-Country Application",
        description: "Submitting the application with targeted legal representations.",
      },
      {
        title: "Decision & Family Reunion",
        description: "Securing biometric residence permit and lawful status for your loved ones.",
      },
    ],
    faqs: [
      {
        question: "What is required to prove sole responsibility for a child dependent visa?",
        answer: "Sole responsibility requires demonstrating that one parent has had exclusive control and responsibility for making all major decisions regarding the child's upbringing.",
      },
    ],
  },
];
