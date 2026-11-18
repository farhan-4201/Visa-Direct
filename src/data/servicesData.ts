export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Business Immigration" | "Personal Immigration" | "Specialty Immigration";
  shortDescription: string;
  fullDescription?: string;
  heroTagline: string;
  seoTitle?: string;
  seoDescription?: string;
  primaryCta?: string;
  secondaryCta?: string;
  heroImage?: string;
  supportingImages?: { src: string; alt: string; caption: string }[];
  contentSections?: {
    heading: string;
    paragraphs?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    paragraphsAfterTable?: string[];
    bullets?: string[];
    subsections?: {
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
  }[];
  iconName: string;
  keyFeatures: string[];
  eligibilityRequirements: string[];
  documentsRequired: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const allServicesData: ServiceItem[] = [
  {
    id: "parent-visa",
    slug: "parent-visa",
    title: "Parent Visa",
    category: "Personal Immigration",
    shortDescription:
      "Get help with your UK Parent Visa application, eligibility, parental responsibility and Home Office requirements.",
    heroTagline: "Understand the UK Parent Visa route and prepare your family immigration application.",
    seoTitle: "Apply for a UK Parent Visa | Visa Direct Immigration",
    seoDescription:
      "Get help with your UK Parent Visa application. Understand eligibility, parental responsibility, & Home Office requirements with Visa Direct Immigration.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/parent-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK parent visa family immigration support",
        caption: "Support with your UK Parent Visa application",
      },
    ],
    contentSections: [
      {
        heading: "Parent Visa UK",
        paragraphs: [
          "If your child lives in the UK, you may be able to apply for a Parent Visa UK to join them and take an active role in their upbringing. The parent route is designed for eligible adults who want to live in the UK to care for their child and maintain their family relationship.",
          "However, applying for a parent visa involves meeting specific immigration requirements. You may need to demonstrate your parental responsibility, provide evidence of your involvement in your child's life and meet the financial and English language conditions.",
          "Visa Direct Immigration provides parent visa application support to help you understand the requirements, prepare your documents and navigate the Home Office application process.",
        ],
      },
      {
        heading: "UK Parent Visa Application Support",
        paragraphs: [
          "A parent visa application needs to demonstrate that your relationship with your child meets the relevant immigration rules. The evidence required will depend on your child's immigration status, where they live and your parental arrangements.",
          "Our parent visa services can help with:",
        ],
        bullets: [
          "Assessing your eligibility under the parent route.",
          "Understanding parental responsibility and access requirements.",
          "Reviewing evidence of your involvement in your child's upbringing.",
          "Preparing financial and accommodation documents.",
          "Completing the online parent visa application.",
          "Understanding extension and settlement options.",
        ],
        subsections: [
          {
            heading: "Parent Visa Support",
            paragraphs: [
              "Whether you are applying from outside the UK or switching from another eligible visa category, our team can help you understand the steps involved.",
              "Need help bringing your family together in the UK? Contact Visa Direct Immigration to discuss your parent visa application.",
            ],
          },
        ],
      },
      {
        heading: "Parent Visa UK Requirements in 2026",
        paragraphs: [
          "To qualify for a UK Parent Visa, you generally need to be at least 18 years old and have a qualifying child living in the UK. You must also meet the relationship, parental responsibility and other immigration requirements.",
          "The main eligibility conditions include:",
          "Your child's age: Your child must normally be under 18 when you apply. If you are extending permission already granted under the parent route, they may be over 18 provided they were under 18 when you were first granted permission and have not formed an independent family unit or started living an independent life.",
          "Your child's UK status: Your child must live in the UK and generally be a British or Irish citizen, have settled status or qualifying pre-settled status. In certain applications made from inside the UK, a child who has lived continuously in the UK for at least seven years may also qualify if it would not be reasonable for them to leave.",
          "Parental responsibility: You must have sole or shared parental responsibility for your child. If responsibility is shared, the other parent must meet the relevant immigration status conditions and must not be your partner for this route.",
          "Access and involvement: If your child normally lives with their other parent or carer, you must have direct access to them in person, agreed with that parent or carer or established through a court order. You must also demonstrate that you take an active role in your child's upbringing and intend to continue doing so.",
          "English language and financial requirements: You generally need to demonstrate the required knowledge of English and show that you can maintain and accommodate yourself, and any dependants, without relying on public funds. Certain exceptions may apply depending on your circumstances.",
          "If you are eligible to apply under the partner route, you will generally need to use that route instead.",
        ],
      },
      {
        heading: "Documents Required for a UK Parent Visa",
        paragraphs: [
          "Your supporting documents should demonstrate your relationship with your child, your parental responsibilities and your ability to meet the immigration requirements.",
          "Common documents include:",
        ],
        bullets: [
          "A valid passport or travel document.",
          "Your child's birth certificate or other evidence of your parental relationship.",
          "Proof of your child's British citizenship or qualifying UK immigration status.",
          "Evidence of sole or shared parental responsibility.",
          "Court orders or written parental agreements, where relevant.",
          "Letters from your child's school, doctor or other relevant professionals confirming your involvement.",
          "Evidence of direct access arrangements, if your child lives with another parent or carer.",
          "Financial documents and evidence of suitable accommodation.",
          "English language test results or evidence of an accepted exemption.",
        ],
        subsections: [
          {
            heading: "Supporting Evidence",
            paragraphs: [
              "Official letters from schools, local authorities, courts or medical professionals can be particularly useful when demonstrating your active involvement in your child's life. Evidence should generally be recent and relevant to the application.",
              "Not sure which documents you need? Speak to our team for guidance on preparing your parent visa evidence.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Parent Visa UK",
        paragraphs: [
          "The application process depends on whether you are applying from outside the UK or already have permission to stay in the country.",
          "The usual steps include:",
        ],
        bullets: [
          "1. Check your eligibility: Review your child's immigration status, age and living arrangements, along with your parental responsibility.",
          "2. Gather supporting evidence: Prepare documents demonstrating your relationship, involvement in your child's upbringing, finances and accommodation.",
          "3. Complete the online application: Use the relevant Home Office application route for your circumstances.",
          "4. Pay the required fees: Pay the visa application fee and Immigration Health Surcharge, where applicable.",
          "5. Prove your identity: Follow the instructions to use the UK Immigration: ID Check app or attend a biometric appointment, if required.",
          "6. Wait for a decision: The Home Office will assess your application and may request additional information.",
        ],
        subsections: [
          {
            heading: "Applying from Inside or Outside the UK",
            paragraphs: [
              "Applicants applying from outside the UK must submit their application before travelling. Those applying from inside the UK should check that their current immigration permission allows them to switch to the parent route.",
            ],
          },
        ],
      },
      {
        heading: "Parent Visa UK Cost in 2026",
        paragraphs: [
          "The cost of a UK Parent Visa depends on where you apply. You will generally need to pay the application fee and Immigration Health Surcharge.",
          "Application type",
          "Visa application fee",
          "Applying from outside the UK",
          "£2,064",
          "Applying from inside the UK",
          "£1,407",
          "The adult Immigration Health Surcharge is generally:",
          "Length of permission",
          "Healthcare surcharge",
          "2 years and 6 months",
          "£2,587.50",
          "2 years and 9 months",
          "£3,105",
          "Additional costs may include English language tests, certified translations and other supporting document expenses. Fee waivers may be available in certain circumstances where applicants cannot afford the application fee and meet the relevant conditions.",
          "Always check the latest Home Office fees before submitting your application.",
        ],
      },
      {
        heading: "UK Parent Visa Processing Time",
        paragraphs: [
          "The UK Parent Visa processing time depends on whether you apply from overseas or within the UK.",
          "The usual processing times are:",
        ],
        bullets: [
          "Outside the UK: Around 12 weeks.",
          "Inside the UK: Currently around 12 months.",
        ],
        subsections: [
          {
            heading: "Processing Times",
            paragraphs: [
              "These are typical time frames rather than guaranteed decision dates. Additional checks, complex circumstances or requests for further evidence may affect how long the application takes. Faster processing may be available in certain circumstances.",
            ],
          },
        ],
      },
      {
        heading: "How Long Can You Stay on a UK Parent Visa?",
        paragraphs: [
          "If your application is approved from outside the UK, you will generally receive permission to stay for 2 years and 9 months. If you extend your visa or switch to the parent route from within the UK, you will generally receive permission for 2 years and 6 months.",
          "You can apply for an extension before your current permission expires, provided you continue to meet the relevant requirements.",
          "If you complete five continuous years on the qualifying parent route, you may be eligible to apply for Indefinite Leave to Remain",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your Parent Visa Application",
        paragraphs: [
          "Applying for a parent visa can be challenging, particularly when you need to demonstrate parental responsibility, maintain regular contact with your child and provide the correct supporting evidence.",
          "Visa Direct Immigration offers application guidance to help you understand the parent route, assess your eligibility and organise the documents required for your application. We can also discuss extension and settlement options based on your immigration circumstances.",
          "We support applicants in Birmingham, Bristol, Reading and across the UK.",
          "Contact Visa Direct Immigration today to discuss your UK Parent Visa application and book your immigration consultation.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Who is eligible for a Parent Visa UK?",
            paragraphs: [
              "An adult may qualify if they have a child living in the UK who meets the relevant citizenship or immigration status requirements, and they can demonstrate parental responsibility and an active role in the child's upbringing. Financial, English language and other requirements also apply.",
            ],
          },
          {
            heading: "Can I apply for a UK Parent Visa if my child is British?",
            paragraphs: [
              "Yes. Having a British child may satisfy the child's immigration status requirement. However, you must also meet the parental responsibility, relationship, financial, English language and other applicable conditions.",
            ],
          },
          {
            heading: "Is there a minimum income requirement for a UK Parent Visa?",
            paragraphs: [
              "The parent route does not generally have the same fixed £29,000 minimum income threshold used for many partner visa applications. Instead, you must normally demonstrate that you can adequately maintain and accommodate yourself and any dependants without relying on public funds.",
            ],
          },
          {
            heading: "Can I work in the UK on a Parent Visa?",
            paragraphs: [
              "People granted permission under the standard parent family route can generally work in the UK, subject to their immigration conditions. Check your grant of permission for any restrictions.",
            ],
          },
          {
            heading: "Can I get Indefinite Leave to Remain through the Parent Visa route?",
            paragraphs: [
              "You may be eligible to apply for Indefinite Leave to Remain after five continuous years on the qualifying parent route, provided you meet the relevant settlement requirements.",
            ],
          },
        ],
      },
    ],
    iconName: "UsersRound",
    keyFeatures: [
      "Parent route eligibility assessment",
      "Parental responsibility and access evidence guidance",
      "Financial, accommodation and English language document support",
      "Extension and settlement options guidance",
    ],
    eligibilityRequirements: [
      "At least 18 years old with a qualifying child living in the UK",
      "Sole or shared parental responsibility and active involvement",
      "Required English language and financial circumstances",
      "A route-specific application from inside or outside the UK",
    ],
    documentsRequired: [
      "Valid passport or travel document",
      "Birth certificate and evidence of the child's UK status",
      "Parental responsibility, access and involvement evidence",
      "Financial, accommodation and English language evidence",
    ],
    processSteps: [
      {
        title: "Eligibility Assessment",
        description: "Reviewing your child's status, parental responsibility and family circumstances.",
      },
      {
        title: "Evidence Preparation",
        description: "Organising relationship, involvement, financial and accommodation evidence.",
      },
      {
        title: "Application Submission",
        description: "Guidance with the online application, fees and identity checks.",
      },
      {
        title: "Decision and Next Steps",
        description: "Support understanding the outcome and future extension or settlement options.",
      },
    ],
    faqs: [],
  },
  {
    id: "sponsor-license",
    slug: "sponsor-license",
    title: "Sponsor License",
    category: "Business Immigration",
    shortDescription: "Secure authorization to employ qualified foreign professionals in your UK organization.",
    heroTagline: "Empower your business to recruit international talent lawfully with full Home Office compliance.",
    seoTitle: "Apply for Sponsor Licence UK | Business Immigration Help",
    seoDescription:
      "Looking to apply for a UK sponsor licence? Get expert guidance with eligibility, documents and Home Office applications for your business.",
    primaryCta: "Get Help with Your Sponsor Licence Application",
    heroImage: "/images/services/sponsor-license.webp",
    supportingImages: [
      {
        src: "/images/service-business.webp",
        alt: "Business immigration and sponsor licence consultation",
        caption: "Support for your sponsor licence application and compliance duties",
      },
    ],
    contentSections: [
      {
        heading: "Sponsor License UK",
        paragraphs: [
          "If your UK business wants to recruit skilled workers from overseas, obtaining a sponsor licence is an important step. A valid UK sponsor licence allows eligible employers to sponsor foreign workers under approved immigration routes, including the Skilled Worker and Temporary Worker routes.",
          "However, applying involves more than completing an online form. Your organisation must demonstrate that it operates lawfully, has suitable HR systems and can meet the Home Office's sponsorship responsibilities.",
          "Visa Direct Immigration provides guidance and application support for businesses looking to apply for a Sponsor License UK, helping employers understand the eligibility criteria, prepare supporting documents and navigate the application process.",
        ],
      },
      {
        heading: "UK Sponsor Licence Application Support",
        paragraphs: [
          "Preparing a sponsor licence application requires careful attention to your organisation's structure, recruitment plans and compliance procedures. Missing documents or inadequate HR arrangements can put an application at risk.",
          "Visa Direct Immigration can assist your business with:",
        ],
        bullets: [
          "Eligibility assessment: Reviewing whether your organisation meets the relevant sponsor licence requirements.",
          "Licence route selection: Helping you identify the appropriate Worker or Temporary Worker licence.",
          "Document preparation: Identifying and organising the supporting evidence required by the Home Office.",
          "Application assistance: Guidance with completing the online application and submitting the required information.",
          "Compliance preparation: Explaining your responsibilities as a sponsor licence holder.",
        ],
        subsections: [
          {
            heading: "Our Aim",
            paragraphs: [
              "Our aim is to help employers approach the process with a clear understanding of the requirements and responsibilities involved.",
              "CTA: Discuss Your Sponsor Licence Requirements",
            ],
          },
        ],
      },
      {
        heading: "Who Can Apply for a UK Sponsor Licence?",
        paragraphs: [
          "A UK business or eligible organisation can apply for a sponsor licence if it meets the Home Office's requirements. There is no general restriction based solely on business size or industry, but the organisation must demonstrate that it is genuine and operating lawfully.",
          "To qualify, your organisation will generally need to:",
        ],
        bullets: [
          "Be a genuine organisation operating lawfully in the UK.",
          "Have appropriate systems to manage sponsored workers and monitor their activities.",
          "Appoint suitable people to manage the sponsor licence.",
          "Have no relevant history of serious immigration breaches or other circumstances that make the organisation unsuitable.",
          "Be able to fulfil its sponsorship duties.",
        ],
        subsections: [
          {
            heading: "Skilled Worker Sponsorship",
            paragraphs: [
              "If you intend to sponsor workers under the Skilled Worker route, the roles must also meet the relevant occupation, skill and salary requirements. The Home Office may assess whether the proposed employment is genuine and appropriate for your organisation.",
            ],
          },
          {
            heading: "Choosing the Right Sponsor Licence",
            paragraphs: [
              "The type of licence you need depends on the workers you intend to recruit and the immigration route they will use.",
              "Worker licence: This covers eligible employment routes, including Skilled Worker, Senior or Specialist Worker and certain other sponsored employment categories.",
              "Temporary Worker licence: This covers eligible temporary routes, such as Charity Worker, Religious Worker, Creative Worker and Seasonal Worker.",
              "Your organisation may apply for more than one route if it meets the relevant requirements. Selecting the correct licence is important because it determines which categories of workers your business can sponsor.",
            ],
          },
        ],
      },
      {
        heading: "Documents Required to Apply for a Sponsor Licence UK",
        paragraphs: [
          "The supporting documents help the Home Office assess whether your organisation is genuine, legally operating and capable of meeting its sponsorship responsibilities.",
          "Most organisations must provide at least four documents or combinations of documents, although the exact requirements depend on the organisation's structure and the licence routes requested.",
          "Depending on your business, supporting evidence may include:",
        ],
        bullets: [
          "Business registration: Companies House registration details or other evidence of the organisation's legal status.",
          "HMRC records: PAYE registration, Corporation Tax records or relevant tax documentation.",
          "Business premises: Evidence of your operating address, such as a lease or premises documentation.",
          "Financial information: Business bank statements or other relevant financial records.",
          "Business activities: Information explaining what your organisation does and how it operates.",
          "Organisation structure: Details of directors, owners, employees and reporting arrangements.",
          "Recruitment information: Details of the roles you intend to sponsor, where required.",
        ],
        subsections: [
          {
            heading: "Additional Evidence",
            paragraphs: [
              "Additional information may be necessary for particular business types or immigration routes. Documents that are not in English or Welsh must generally be accompanied by a certified translation.",
            ],
          },
        ],
      },
      {
        heading: "Sponsor Licence Application Process",
        paragraphs: [
          "The sponsor licence application involves several stages. Preparing your organisation before submitting the online form can help reduce avoidable problems.",
        ],
        subsections: [
          {
            heading: "1. Assess Your Eligibility",
            paragraphs: [
              "The first step is to review your organisation's legal status, business activities, HR procedures and proposed recruitment requirements. This helps identify potential issues before you apply.",
            ],
          },
          {
            heading: "2. Appoint Key Personnel",
            paragraphs: [
              "Your organisation must identify suitable people to manage the licence. The main roles include:",
            ],
            bullets: [
              "Authorising Officer: Responsible for the organisation's sponsorship activities and overall compliance.",
              "Key Contact: Acts as the main contact between the organisation and the Home Office.",
              "Level 1 User: Manages the day-to-day sponsorship administration through the relevant Home Office system.",
              "Some roles may be held by the same person if they meet the applicable requirements.",
            ],
          },
          {
            heading: "3. Prepare Supporting Documents",
            paragraphs: [
              "You must gather the documents required for your organisation and the routes you are applying for. The Home Office's Appendix A guidance explains the evidence needed for different types of applicants.",
            ],
          },
          {
            heading: "4. Complete the Online Application",
            paragraphs: [
              "The application is submitted through the official Home Office online service. You must provide accurate information about your organisation, select the relevant licence routes and pay the applicable application fee.",
            ],
          },
          {
            heading: "5. Submit Your Supporting Evidence",
            paragraphs: [
              "After completing the online application, you must send the submission sheet and supporting documents in accordance with the instructions provided by UK Visas and Immigration (UKVI).",
            ],
          },
          {
            heading: "6. Home Office Assessment",
            paragraphs: [
              "UKVI reviews your application and may request additional information or arrange a compliance visit. Your organisation must be prepared to demonstrate that its systems and procedures meet the sponsorship requirements.",
              "CTA: Get Support with Your Sponsor Licence Application",
            ],
          },
        ],
      },
      {
        heading: "UK Sponsor Licence Application Fees",
        paragraphs: [
          "The sponsor licence application fee depends on the licence type and the size or charitable status of your organisation.",
          "The current standard fees are:",
          "Licence type",
          "Small or charitable organisation",
          "Medium or large organisation",
          "Worker licence",
          "£611",
          "£1,682",
          "Temporary Worker licence",
          "£611",
          "£611",
          "Worker and Temporary Worker licence",
          "£611",
          "£1,682",
          "An organisation is generally classed as a small sponsor if at least two of the following apply:",
        ],
        bullets: [
          "Annual turnover is £15 million or less.",
          "Total assets are £7.5 million or less.",
          "It has 50 employees or fewer.",
        ],
        subsections: [
          {
            heading: "Priority Service and Payment",
            paragraphs: [
              "An additional £750 priority service may be available for an eligible application, subject to daily availability. This aims to provide a decision within 10 working days.",
              "The sponsor must pay the application fee itself. You must not pass the sponsor licence application fee or prohibited sponsorship costs to sponsored workers.",
            ],
          },
        ],
      },
      {
        heading: "How Long Does a Sponsor Licence Application Take?",
        paragraphs: [
          "Most sponsor licence applications are processed in less than eight weeks. However, the decision may take longer if UKVI needs additional information, further checks or a compliance visit.",
          "Eligible employers may be able to use the priority service for a decision within 10 working days, subject to availability and payment of the additional fee.",
          "Your business should allow enough time for document preparation and Home Office assessment before making recruitment arrangements.",
        ],
      },
      {
        heading: "Sponsor Licence Responsibilities After Approval",
        paragraphs: [
          "Obtaining a sponsor licence is not the end of the process. Your organisation must continue meeting its sponsorship duties for as long as it holds the licence.",
          "These responsibilities generally include:",
        ],
        bullets: [
          "Keeping accurate records of sponsored workers and their employment.",
          "Checking and monitoring workers' immigration status.",
          "Reporting relevant changes in employment or personal circumstances to UKVI.",
          "Maintaining suitable HR and recruitment systems.",
          "Cooperating with Home Office requests and compliance visits.",
          "Ensuring Certificates of Sponsorship are assigned only where the relevant requirements are met.",
        ],
        subsections: [
          {
            heading: "Compliance Consequences",
            paragraphs: [
              "Failure to meet these responsibilities can result in compliance action, suspension or revocation of your sponsor licence.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Applying for a sponsor licence can involve detailed eligibility checks, supporting evidence and ongoing compliance responsibilities. Visa Direct Immigration can guide your organisation through the process, from assessing eligibility to preparing the application.",
          "Whether you are a new business planning to recruit overseas workers or an established employer looking to expand your recruitment options, our team can help you understand the relevant requirements.",
          "We support businesses in Birmingham, Bristol, Reading and across the UK.",
          "Contact Visa Direct Immigration to discuss your recruitment plans and find out how we can assist with your sponsor licence application.",
        ],
        subsections: [
          {
            heading: "Our Locations",
          },
        ],
        bullets: ["CTA: Book Your Immigration Consultation"],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Can a small business apply for a UK sponsor licence?",
            paragraphs: [
              "Yes. Small businesses can apply if they meet the Home Office eligibility requirements and can demonstrate that they have suitable systems to manage sponsored workers.",
            ],
          },
          {
            heading: "Do I need to have a foreign worker before applying?",
            paragraphs: [
              "You do not necessarily need to have selected a specific overseas worker before applying. However, your organisation must have a genuine reason for seeking a sponsor licence and must meet the relevant requirements when sponsoring a worker.",
            ],
          },
          {
            heading: "Does a sponsor licence expire?",
            paragraphs: [
              "Sponsor licences no longer require periodic renewal. However, your organisation must continue meeting its sponsorship duties. UKVI can take action against a licence if the sponsor fails to comply with its responsibilities.",
            ],
          },
          {
            heading: "Can I apply for a sponsor licence if my business is new?",
            paragraphs: [
              "A newer business may be eligible, but it must provide evidence that it is genuine and operating lawfully in the UK. Additional documents may be required depending on how long it has been trading and its business circumstances.",
            ],
          },
          {
            heading: "What happens if my sponsor licence application is refused?",
            paragraphs: [
              "If your application is refused, you may be able to request an administrative review if you believe UKVI made a caseworking error or failed to consider supporting documents. You should review the refusal reasons before deciding whether to challenge the decision or submit a fresh application.",
            ],
          },
        ],
      },
    ],
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
    category: "Business Immigration",
    shortDescription: "Pursue legal employment in eligible occupations with an authorized UK employer.",
    heroTagline: "Fast-track your professional UK career with end-to-end sponsorship and application support.",
    seoTitle: "Skilled Worker Visa Solicitors UK | Visa Direct Immigration",
    seoDescription:
      "Need help with a UK Skilled Worker visa? Get guidance on eligibility, applications, fees and extensions from Visa Direct Immigration.",
    primaryCta: "Discuss Your Skilled Worker Visa",
    secondaryCta: "Contact Our Team",
    heroImage: "/images/services/skilled-worker-visa.webp",
    supportingImages: [
      {
        src: "/images/skilled-worker-visa-feature.webp",
        alt: "Professional reviewing employment and visa paperwork",
        caption: "Practical support with sponsorship and application evidence",
      },
    ],
    contentSections: [
      {
        heading: "Skilled Worker Visa Solicitors UK",
        paragraphs: [
          "Looking to work in the United Kingdom? The Skilled Worker visa allows eligible overseas nationals to take up qualifying jobs with approved UK employers. However, meeting the sponsorship, occupation, salary and English language requirements is essential before submitting an application.",
          "Visa Direct Immigration provides guidance to individuals looking to apply for a Skilled Worker visa, switch from another eligible immigration route or extend their existing permission. We help applicants understand the relevant requirements, prepare supporting documents and navigate the application process.",
          "Whether you are making an application from overseas or already living in the UK, our team can discuss your circumstances and explain the assistance available. We welcome enquiries from individuals in Birmingham, Bristol, Reading and elsewhere in the UK.",
        ],
      },
      {
        heading: "What is the UK Skilled Worker Visa?",
        paragraphs: [
          "The UK Skilled Worker visa is an immigration route that allows eligible overseas nationals to come to or remain in the United Kingdom to work in an eligible job for an employer approved by the Home Office. It replaced the former Tier 2 (General) work visa and is designed to help approved UK employers recruit workers for qualifying skilled positions.",
          "To apply, you must have a confirmed job offer from an approved UK sponsor, a valid Certificate of Sponsorship (CoS), and meet the relevant occupation, salary and English language requirements. The exact requirements depend on the job and your individual circumstances.",
        ],
        subsections: [
          {
            heading: "What Does a Skilled Worker Visa Allow You to Do?",
            bullets: [
              "Work in the eligible role for your sponsoring employer.",
              "Study in the UK, subject to any applicable conditions.",
              "Bring your eligible partner and children as dependants, where the rules permit.",
              "Undertake additional work in certain circumstances.",
              "Travel outside the UK and return while your permission remains valid.",
              "Work towards settlement through Indefinite Leave to Remain (ILR), if you meet the qualifying requirements.",
            ],
          },
          {
            heading: "How Long Can You Stay in the UK?",
            paragraphs: [
              "A Skilled Worker visa can generally be granted for up to five years, depending on the length of your sponsorship and the permission granted. You may be able to extend your visa if you continue to meet the relevant requirements.",
              "After completing the required qualifying period, you may be eligible to apply for Indefinite Leave to Remain, subject to the applicable residence, employment, salary and other settlement requirements.",
            ],
          },
        ],
      },
      {
        heading: "Skilled Worker Visa Eligibility Requirements",
        paragraphs: [
          "To qualify for a UK Skilled Worker visa, you must meet the following main requirements:",
        ],
        subsections: [
          {
            heading: "Job Offer from an Approved UK Employer",
            paragraphs: [
              "You need a confirmed job offer from a UK employer with a valid Home Office sponsor licence.",
            ],
          },
          {
            heading: "Certificate of Sponsorship (CoS)",
            paragraphs: [
              "Your employer must assign you a Certificate of Sponsorship containing details of your job and salary. You need its reference number to apply.",
            ],
          },
          {
            heading: "Eligible Occupation and Salary Requirements",
            paragraphs: [
              "Your role must meet the occupation requirements and the applicable salary threshold. The usual threshold is £41,700 per year or the going rate for your job, whichever is higher. Exceptions may apply.",
            ],
          },
          {
            heading: "English Language Requirements",
            paragraphs: [
              "Most new applicants must demonstrate English language ability at CEFR level B2 in reading, writing, speaking and listening. Some exemptions and alternative ways to meet this requirement are available.",
            ],
          },
          {
            heading: "Financial Requirements",
            paragraphs: [
              "You will usually need at least £1,270 in savings, held for 28 consecutive days, unless your sponsor certifies your maintenance or an exemption applies.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Skilled Worker Visa in the UK",
        paragraphs: [
          "The application process depends on whether you are applying from outside the UK or switching from another visa while already in the country.",
        ],
        subsections: [
          {
            heading: "Applying from Outside the UK",
            paragraphs: [
              "You must complete the online Skilled Worker visa application, pay the required fees and prove your identity. Depending on your circumstances, you may use the UK Immigration: ID Check app or attend a visa application centre for biometrics.",
            ],
          },
          {
            heading: "Switching to a Skilled Worker Visa from Inside the UK",
            paragraphs: [
              "If you hold an eligible UK visa, you may be able to switch to the Skilled Worker route without leaving the country. You must apply before your current permission expires. Visitors and certain other visa holders cannot switch from within the UK.",
            ],
          },
          {
            heading: "Skilled Worker Visa Application Process",
            bullets: [
              "Receive a job offer and Certificate of Sponsorship from an approved employer.",
              "Prepare your supporting documents and complete the online application.",
              "Pay the fees and Immigration Health Surcharge, if applicable.",
              "Prove your identity and submit any required biometrics.",
            ],
            paragraphs: [
              "Make sure your application is complete and accurate before submitting it.",
            ],
          },
        ],
      },
      {
        heading: "Documents Required for a Skilled Worker Visa Application",
        paragraphs: [
          "When applying for a UK Skilled Worker visa, you will need documents to confirm your identity, employment and eligibility. The exact requirements depend on your circumstances.",
          "You may also need additional evidence, such as documents confirming your relationship with dependants. Check the requirements for your circumstances before submitting your application.",
        ],
        bullets: [
          "A valid passport or travel document.",
          "Your Certificate of Sponsorship reference number.",
          "Your job title, annual salary and occupation code.",
          "Your employer’s name and sponsor licence number.",
          "Evidence of your English language ability, where required.",
          "Proof of savings, if applicable.",
          "Tuberculosis test results, if required for your country of residence.",
          "Certified translations of documents that are not in English or Welsh.",
        ],
      },
      {
        heading: "Skilled Worker Visa Fees in the UK",
        paragraphs: [
          "The cost of a Skilled Worker visa depends on your application location, sponsorship period and eligibility for reduced fees.",
        ],
        subsections: [
          {
            heading: "Skilled Worker Visa Fees for 3 Years",
            paragraphs: [
              "For a standard application of up to three years, the application fee is:",
              "Reduced fees may apply if your job qualifies under the Immigration Salary List.",
            ],
            bullets: ["Outside the UK: £819", "Inside the UK: £943"],
          },
          {
            heading: "Additional Costs and Immigration Health Surcharge",
            paragraphs: [
              "Most applicants must also pay the Immigration Health Surcharge, currently £1,035 per year. For a three-year visa, this is usually £3,105 per applicant.",
              "Your total cost may also include dependant application fees and other expenses. Check the official fee calculator before applying.",
            ],
          },
        ],
      },
      {
        heading: "Skilled Worker Visa Processing Times",
        paragraphs: [
          "The standard Skilled Worker visa processing time depends on where you apply:",
        ],
        bullets: [
          "Outside the UK: Usually 3 weeks.",
          "Inside the UK: Usually 8 weeks.",
        ],
        subsections: [
          {
            heading: "Processing Information",
            paragraphs: [
              "Processing starts after you have submitted your application, proved your identity and provided the required documents.",
              "Applications may take longer if UKVI needs additional information, document checks or further consideration. Priority services may be available for an additional fee.",
            ],
          },
        ],
      },
      {
        heading: "Skilled Worker Visa Extension UK",
        paragraphs: [
          "You can usually extend your Skilled Worker visa if you continue working for the same employer in the same occupation code and still meet the visa requirements. You must apply online before your current permission expires.",
        ],
        subsections: [
          {
            heading: "Skilled Worker Visa Extension Documents",
            paragraphs: ["You will generally need:"],
            bullets: [
              "A valid passport or travel document.",
              "Your new Certificate of Sponsorship reference, if required.",
              "Your current employment and salary details.",
              "Any additional evidence requested during the application.",
            ],
          },
          {
            heading: "When Should You Apply for an Extension?",
            paragraphs: [
              "Apply before your current visa expires. You will usually receive a decision within eight weeks. Avoid travelling outside the UK, Ireland, the Channel Islands or the Isle of Man while your application is pending, as your application may be withdrawn.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your Skilled Worker Visa",
        paragraphs: [
          "Visa Direct Immigration provides guidance to individuals applying for, switching to or extending a UK Skilled Worker visa. Support may include:",
        ],
        bullets: [
          "Eligibility assessment: Understanding whether you meet the visa requirements.",
          "Document guidance: Identifying the evidence needed for your application.",
          "Application support: Assistance with completing and submitting your application.",
          "Extension guidance: Understanding the requirements for extending your visa.",
        ],
        subsections: [
          {
            heading: "Our Locations",
          },
        ],
      },
      {
        heading: "Frequently Asked Questions About the UK Skilled Worker Visa",
        subsections: [
          {
            heading: "1. How long does a Skilled Worker visa last?",
            paragraphs: [
              "A UK Skilled Worker visa can be granted for up to five years, depending on your Certificate of Sponsorship and employment arrangements. You may be able to extend it if you continue meeting the visa requirements.",
            ],
          },
          {
            heading: "2. Can I change employers on a Skilled Worker visa?",
            paragraphs: [
              "Yes, but you will usually need to apply to update your visa if you change employers. Your new employer must have a valid sponsor licence and provide a new Certificate of Sponsorship.",
            ],
          },
          {
            heading: "3. Can my family join me in the UK?",
            paragraphs: [
              "Your eligible partner and children may be able to apply as your dependants. However, dependant eligibility depends on your occupation and the applicable immigration rules.",
            ],
          },
          {
            heading: "4. Can I extend my Skilled Worker visa?",
            paragraphs: [
              "Yes. You can usually apply for a Skilled Worker visa extension if you continue meeting the requirements, including the relevant sponsorship and employment conditions. Apply before your current visa expires.",
            ],
          },
          {
            heading: "5. Can I apply for a Skilled Worker visa without a job offer?",
            paragraphs: [
              "No. You generally need a confirmed job offer from a Home Office-approved UK employer and a valid Certificate of Sponsorship before applying.",
            ],
          },
          {
            heading: "6. Can I apply for ILR after five years?",
            paragraphs: [
              "Some Skilled Worker visa holders can apply for Indefinite Leave to Remain after five years of qualifying residence. You must also meet the applicable settlement requirements.",
            ],
          },
        ],
      },
      {
        heading: "Need Help with Your Skilled Worker Visa Application?",
        paragraphs: [
          "Applying for a UK Skilled Worker visa can involve several requirements, from employer sponsorship to supporting documents and application fees. Visa Direct Immigration can help you understand the process and the support available for your circumstances.",
          "Contact our team to discuss your Skilled Worker visa application, extension or eligibility.",
          "Speak to Our Immigration Team Today",
          "Call: 0333 004 0117",
          "Email: info@visadirectimmigration.com",
          "Serving clients in Birmingham, Bristol, Reading and across the UK.",
        ],
      },
    ],
    iconName: "Award",
    keyFeatures: [
      "Standard occupation code (SOC) matching & salary threshold verification",
      "Defined or Undefined Certificate of Sponsorship (CoS) review",
      "Priority and Super Priority processing coordination",
      "Direct pathway towards UK settlement after qualifying period",
    ],
    eligibilityRequirements: [
      "A confirmed job offer from an approved UK employer with a valid Home Office sponsor licence",
      "A valid Certificate of Sponsorship containing your job and salary details",
      "An eligible occupation and the applicable salary threshold, usually £41,700 per year or the going rate, whichever is higher",
      "English language ability at CEFR level B2, unless an exemption or alternative applies",
      "At least £1,270 in savings held for 28 consecutive days, unless your sponsor certifies maintenance or an exemption applies",
    ],
    documentsRequired: [
      "A valid passport or travel document",
      "Your Certificate of Sponsorship reference number",
      "Your job title, annual salary, occupation code, employer name and sponsor licence number",
      "Evidence of your English language ability, where required",
      "Proof of savings, if applicable",
      "Tuberculosis test results, if required for your country of residence",
      "Certified translations of documents that are not in English or Welsh",
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
    id: "partner-visa",
    slug: "partner-visa",
    title: "Partner Visa",
    category: "Personal Immigration",
    shortDescription:
      "Join your British or settled partner in the UK with guidance on relationship, financial and immigration requirements.",
    heroTagline: "Understand your UK Partner Visa options and prepare your application with confidence.",
    seoTitle: "Partner Visa UK: Requirements, Fees & How to Apply",
    seoDescription:
      "Need a UK Partner Visa? Explore eligibility, financial requirements, application fees and processing times. Get guidance from Visa Direct Immigration.",
    primaryCta: "Check Your Partner Visa Eligibility",
    heroImage: "/images/services/partner-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK partner visa and relationship documents",
        caption: "Guidance on relationship, financial and supporting evidence",
      },
    ],
    contentSections: [
      {
        heading: "Partner Visa UK",
        paragraphs: [
          "Want to join your spouse or partner in the United Kingdom? A Partner Visa UK allows eligible individuals to live with their British or settled partner in the UK, provided they meet the relevant relationship, financial and English language requirements.",
          "The UK partner route covers married couples, civil partners and qualifying unmarried partners. Applicants must provide evidence of their relationship and meet the applicable Home Office requirements.",
          "At Visa Direct Immigration, we provide guidance on UK partner visa requirements, supporting documents and the application process, helping couples understand their options before applying.",
        ],
      },
      {
        heading: "Partner Visa UK: How We Can Help",
        paragraphs: [
          "Applying for a UK Partner Visa involves several requirements, including proving your relationship, meeting the financial criteria and preparing the correct documents. Understanding these requirements before applying can help you avoid common mistakes.",
          "Visa Direct Immigration can provide guidance with:",
        ],
        bullets: [
          "Eligibility assessment: Reviewing your relationship and immigration circumstances.",
          "Financial requirements: Explaining the income and savings criteria.",
          "Document preparation: Identifying suitable relationships and financial evidence.",
          "Application assistance: Guidance with completing and submitting your application.",
          "Extension guidance: Explaining the requirements for extending your partner visa.",
        ],
        subsections: [
          {
            heading: "Our Aim",
            paragraphs: [
              "Our aim is to make the process easier to understand and help you prepare an application based on your individual circumstances.",
              "CTA: Get Partner Visa Guidance",
            ],
          },
        ],
      },
      {
        heading: "UK Partner Visa Requirements",
        paragraphs: [
          "To qualify for a UK Partner Visa, you must meet the relationship, sponsor, financial, English language and accommodation requirements. The exact evidence depends on your relationship and individual circumstances.",
        ],
        subsections: [
          {
            heading: "Relationship Requirements",
            paragraphs: [
              "You must be in a genuine and continuing relationship with your partner. You must have met in person, intend to live together permanently in the UK and show that any previous relationships have permanently ended.",
            ],
          },
          {
            heading: "Eligible UK Sponsor",
            paragraphs: [
              "Your partner must usually be a British or Irish citizen, settled in the UK, or hold another qualifying immigration status, such as refugee or humanitarian protection status.",
            ],
          },
          {
            heading: "Financial Requirements",
            paragraphs: [
              "The usual minimum income requirement is £29,000 per year, based on eligible income or savings. Different rules may apply to existing applicants and certain exceptional circumstances.",
            ],
          },
          {
            heading: "English Language Requirements",
            paragraphs: [
              "Most first-time applicants must demonstrate English language ability at CEFR level A1 in speaking and listening, unless they qualify for an exemption or meet the requirement through an accepted qualification.",
            ],
          },
          {
            heading: "Accommodation Requirements",
            paragraphs: [
              "You must show that suitable accommodation will be available for you and your partner in the UK. It must not be overcrowded or breach public health regulations.",
            ],
          },
        ],
      },
      {
        heading: "UK Partner Visa Documents",
        paragraphs: [
          "Preparing the correct UK Partner Visa documents helps demonstrate your relationship and eligibility. Depending on your circumstances, you may need:",
        ],
        bullets: [
          "Valid passport: Your current passport and relevant previous travel documents.",
          "Relationship evidence: Marriage or civil partnership certificate, photographs and communication records where relevant.",
          "Financial evidence: Bank statements, payslips and employer letters to demonstrate the income requirement.",
          "Sponsor's documents: Evidence of your partner's British citizenship or immigration status.",
          "English language evidence: An approved English test certificate or accepted qualification, if required.",
          "Accommodation evidence: Tenancy agreement, mortgage documents or other proof of suitable accommodation.",
          "Previous relationship documents: Divorce or dissolution certificates, where applicable.",
        ],
        subsections: [
          {
            heading: "Document Translation",
            paragraphs: [
              "Documents not written in English or Welsh generally need certified translations. The exact checklist depends on whether you are applying from inside or outside the UK.",
              "CTA: Get Help Preparing Your Partner Visa Documents",
            ],
          },
        ],
      },
      {
        heading: "Partner Visa Application Process",
        paragraphs: [
          "The UK Partner Visa application process depends on whether you are applying from outside the UK or switching from another eligible immigration route while already in the country. In both cases, you must complete the relevant online form and provide evidence that you meet the visa requirements.",
        ],
        subsections: [
          {
            heading: "Applying from Outside the UK",
            paragraphs: [
              "If you are living outside the UK, you must submit your Partner Visa application online before travelling. You will need to provide your personal and immigration details, information about your relationship and supporting documents.",
              "Depending on your location and application requirements, you will usually need to attend a biometric appointment to provide your fingerprints and photograph. Once you have submitted the required information and completed the necessary checks, UK Visas and Immigration will assess your application.",
            ],
          },
          {
            heading: "Applying from Inside the UK",
            paragraphs: [
              "If you are already in the UK on an eligible visa, you may be able to switch to the Partner Visa route before your current permission expires. However, people in the UK as visitors or on visas lasting six months or less will usually need to leave the country and apply from overseas. Exceptions can apply in specific circumstances.",
              "You must complete the online application from within the UK and provide the required supporting evidence. Check that your current immigration status allows you to switch before applying.",
              "CTA: Get Support with Your Partner Visa Application",
            ],
          },
        ],
      },
      {
        heading: "Cost of UK Partner Visa",
        paragraphs: [
          "The cost of a UK Partner Visa depends on whether you apply from inside or outside the UK. You should also budget for the Immigration Health Surcharge (IHS), which is normally payable for the length of your visa.",
          "Current standard application fees are:",
          "Application type",
          "Visa fee",
          "Applying from outside the UK",
          "£2,064",
          "Applying from inside the UK",
          "£1,407",
          "Most adult applicants must also pay the IHS. For a standard initial partner visa, this is currently £3,105 for 2 years and 9 months when applying from overseas, or £2,587.50 for 2 years and 6 months when applying inside the UK.",
          "These figures do not include optional priority services, biometric appointment charges or professional assistance. Each eligible dependant will also have their own application fee and IHS to pay.",
          "If you cannot afford the application fee because you cannot meet essential living costs or have other qualifying financial circumstances, you may be eligible for a fee waiver. Check the latest fees before applying, as Home Office charges can change.",
          "CTA: Get Advice on Your Partner Visa Costs",
        ],
      },
      {
        heading: "UK Partner Visa Processing Time",
        paragraphs: [
          "The UK Partner Visa processing time depends on where you apply and whether your application meets the financial and English language requirements. The time can also be affected by document checks or requests for further information.",
          "Current standard processing times are:",
          "Application type",
          "Usual decision time",
          "Applying from outside the UK",
          "12 weeks",
          "Applying from inside the UK, meeting the financial and English requirements",
          "8 weeks",
          "Applying from inside the UK under the relevant private life route",
          "Around 12 months",
          "Processing normally starts after you have verified your identity and submitted your documents through the relevant app, or attended your biometric appointment.",
        ],
      },
      {
        heading: "Can You Work on a Partner Visa UK?",
        paragraphs: [
          "Most people granted a UK Partner Visa as a spouse, civil partner or eligible unmarried partner can work and study in the UK. However, the fiancé(e) visa has different conditions.",
          "If you enter the UK on a fiancé(e) or proposed civil partner visa, you cannot work or study during the initial six-month period. After you marry or enter a civil partnership and successfully apply to extend your stay as a partner, you can work and study.",
          "Partner visa holders are generally not restricted to a particular employer or job type. You should always check the conditions attached to your immigration permission before starting work.",
          "CTA: Check Your Right to Work in the UK",
        ],
      },
      {
        heading: "Partner Visa Extension and Settlement",
        paragraphs: [
          "A UK Partner Visa can usually lead to settlement, provided you continue to meet the relevant relationship and immigration requirements. Most applicants on the five-year partner route can apply for Indefinite Leave to Remain (ILR) after completing five years of qualifying continuous residence.",
        ],
        subsections: [
          {
            heading: "Extending Your Partner Visa",
            paragraphs: [
              "If you initially receive permission to stay for 2 years and 9 months, you will usually need to apply for an extension before it expires. An extension normally allows you to stay for a further 2 years and 6 months.",
              "You must continue to meet the relevant requirements, including proving that your relationship is genuine and ongoing and meeting the applicable financial and English language criteria.",
            ],
          },
          {
            heading: "Applying for Indefinite Leave to Remain",
            paragraphs: [
              "After five continuous years on the qualifying partner route, you may be eligible to apply for ILR. You will generally need to demonstrate that you still meet the relationship requirements, satisfy the applicable financial and English language rules, and pass the Life in the UK Test if required.",
              "Time spent in the UK on a fiancé(e) visa or another immigration route does not normally count towards the five-year partner route.",
              "CTA: Get Help with Your Partner Visa Extension",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Choosing the right application route and preparing suitable evidence can make your UK Partner Visa application easier to manage. Visa Direct Immigration provides guidance tailored to your relationship, immigration history and personal circumstances.",
          "We can assist with:",
        ],
        bullets: [
          "Eligibility guidance: Reviewing your circumstances against the relevant partner visa requirements.",
          "Relationship evidence: Helping you identify documents that demonstrate a genuine and continuing relationship.",
          "Financial requirements: Explaining which income or savings evidence may apply to your situation.",
          "Application preparation: Supporting you with the online form and required documentation.",
          "Extensions and settlement: Explaining the requirements for extending your permission or applying for Indefinite Leave to Remain.",
        ],
        subsections: [
          {
            heading: "Partner Visa Support",
            paragraphs: ["CTA: Speak to Our Immigration Team"],
          },
        ],
      },
      {
        heading: "UK Partner Visa FAQs",
        subsections: [
          {
            heading: "1. Who can apply for a UK Partner Visa?",
            paragraphs: [
              "You may apply if you are married to, in a civil partnership with, or in a qualifying relationship with someone who is a British or Irish citizen, settled in the UK or holds another eligible immigration status. Both partners must usually be at least 18 and intend to live together permanently in the UK.",
            ],
          },
          {
            heading: "2. Can I apply for a UK Partner Visa if I am unmarried?",
            paragraphs: [
              "Yes. You may qualify if you have been in a relationship similar to marriage or civil partnership for at least two years. You do not necessarily have to have lived together throughout that period, but you must provide evidence that your relationship is genuine and continuing.",
            ],
          },
          {
            heading: "3. Can I work on a UK Partner Visa?",
            paragraphs: [
              "Yes. Most people granted permission under the standard partner route can work and study in the UK. However, applicants on a fiancé(e) visa cannot work or study until they marry or enter a civil partnership and receive permission to stay under the partner route.",
            ],
          },
          {
            heading: "4. How long does a UK Partner Visa last?",
            paragraphs: [
              "An initial partner visa usually allows you to stay for up to 2 years and 9 months if you apply from outside the UK, or up to 2 years and 6 months if you switch or extend from inside the UK. A fiancé(e) visa normally lasts six months.",
            ],
          },
          {
            heading: "5. Can I switch to a Partner Visa from another UK visa?",
            paragraphs: [
              "You may be able to switch if your current immigration permission allows it and you meet the partner route requirements. Visitors and people with permission for six months or less will usually need to apply from outside the UK, subject to limited exceptions.",
            ],
          },
          {
            heading: "6. Can I apply for ILR after a Partner Visa?",
            paragraphs: [
              "Yes. If you are on the five-year partner route, you may be eligible for Indefinite Leave to Remain after five years of continuous qualifying residence. You must also meet the relevant relationship, financial, English language and other settlement requirements.",
            ],
          },
        ],
      },
      {
        heading: "Need Help with Your UK Partner Visa Application?",
        paragraphs: [
          "Applying for a UK Partner Visa can involve detailed eligibility checks, financial evidence and relationship documents. Getting the right guidance can help you understand the requirements and prepare your application with greater confidence.",
          "Visa Direct Immigration can guide you through the process, whether you are applying to join your partner in the UK, switching from an eligible visa or preparing an extension.",
          "Contact our team to discuss your circumstances and understand the next steps.",
          "CTA: Book Your Immigration Consultation",
        ],
      },
    ],
    iconName: "HeartHandshake",
    keyFeatures: [
      "Relationship and sponsor eligibility assessment",
      "Financial and English language requirement guidance",
      "Partner visa document preparation support",
      "Extension and settlement pathway guidance",
    ],
    eligibilityRequirements: [
      "Genuine and continuing relationship with an eligible partner",
      "Eligible British, Irish, settled or qualifying UK sponsor",
      "Meeting the applicable financial and English language requirements",
      "Suitable accommodation available in the UK",
    ],
    documentsRequired: [
      "Valid passport and relevant travel documents",
      "Relationship and sponsor evidence",
      "Financial and accommodation evidence",
      "English language evidence, where required",
    ],
    processSteps: [
      {
        title: "Eligibility Assessment",
        description: "Reviewing relationship, sponsor, financial and immigration circumstances.",
      },
      {
        title: "Evidence Preparation",
        description: "Identifying relationship, financial, accommodation and language evidence.",
      },
      {
        title: "Application Submission",
        description: "Guidance with the online application and biometric appointment.",
      },
      {
        title: "Decision and Next Steps",
        description: "Support understanding the outcome, extension and settlement pathway.",
      },
    ],
    faqs: [],
  },
  {
    id: "civil-partnership-visa",
    slug: "civil-partnership-visa",
    title: "Civil Partnership Visa",
    category: "Personal Immigration",
    shortDescription:
      "Join your civil partner in the UK with guidance on relationship, financial, English language and accommodation requirements.",
    heroTagline: "Prepare your Civil Partnership Visa application with clear, practical guidance.",
    seoTitle: "Civil Partnership Visa Specialists UK | Apply with Guidance",
    seoDescription:
      "Applying for Civil Partnership Visa UK? Check eligibility, financial requirements, application costs & documents. Get guidance from Visa Direct Immigration.",
    primaryCta: "Check Your Civil Partnership Visa Eligibility",
    heroImage: "/images/services/civil-partnership-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "Civil partnership visa and relationship documents",
        caption: "Guidance on relationship, financial and supporting evidence",
      },
    ],
    contentSections: [
      {
        heading: "Civil Partnership Visa UK",
        paragraphs: [
          "A Civil Partnership Visa in the UK allows eligible individuals to join their civil partner in the United Kingdom and live together. It is part of the UK Family Visa route and is available to applicants whose partner is a British or Irish citizen, settled in the UK or holds another qualifying immigration status.",
          "You may also apply as a proposed civil partner if you intend to register your civil partnership in the UK within six months of arriving. Applicants must meet the relevant relationship, financial, English language and accommodation requirements.",
          "Visa Direct Immigration provides guidance on eligibility, supporting documents and the civil partnership visa application process.",
        ],
      },
      {
        heading: "Civil Partnership Visa UK: How We Can Help",
        paragraphs: [
          "Applying for a UK Civil Partnership Visa requires evidence that your relationship meets the Home Office rules. You may also need to demonstrate that your partner meets the sponsorship and financial requirements.",
          "Visa Direct Immigration can guide you through the main stages of your application, including:",
        ],
        bullets: [
          "Eligibility assessment: Reviewing your relationship and immigration circumstances.",
          "Relationship evidence: Identifying documents that support your civil partnership.",
          "Financial guidance: Explaining the applicable income and savings requirements.",
          "Document preparation: Helping you organise the evidence required for your application.",
          "Application assistance: Guidance with completing and submitting the relevant forms.",
        ],
        subsections: [
          {
            heading: "Our Aim",
            paragraphs: [
              "Our aim is to help you understand the requirements and prepare an application that reflects your individual circumstances.",
              "CTA: Get Guidance on Your Civil Partnership Visa",
            ],
          },
        ],
      },
      {
        heading: "UK Civil Partnership Visa Requirements",
        paragraphs: [
          "To qualify for a UK Civil Partnership Visa, you and your partner must meet the relevant relationship, sponsorship, financial, English language and accommodation requirements. Both partners must normally be at least 18 years old and intend to live together permanently in the UK.",
        ],
        subsections: [
          {
            heading: "Relationship and Civil Partnership Requirements",
            paragraphs: [
              "You must provide evidence of one of the following:",
            ],
            bullets: [
              "Existing civil partnership: You are in a legally recognised civil partnership that is valid under UK law.",
              "Proposed civil partnership: You intend to register your civil partnership in the UK within six months of arriving.",
              "Qualifying unmarried relationship: You have been in a relationship similar to marriage or civil partnership for at least two years.",
              "If you are applying as a proposed civil partner, you must also show that any previous marriage or civil partnership has legally ended. The six-month proposed civil partner visa does not allow you to work or study.",
            ],
          },
          {
            heading: "Eligible UK Sponsor",
            paragraphs: [
              "Your partner must usually be a British or Irish citizen, have indefinite leave to remain or settled status, or hold another qualifying immigration status. Certain people with pre-settled status, refugee status or humanitarian protection may also be eligible to sponsor a partner.",
            ],
          },
          {
            heading: "Financial Requirements",
            paragraphs: [
              "The usual minimum income requirement is £29,000 per year in combined eligible income. You may be able to meet this through employment, self-employment, pension income, other permitted income or qualifying cash savings.",
              "Different rules may apply if your partner receives certain disability or carer benefits, or if you are extending a visa under transitional arrangements after an earlier application made before 11 April 2024.",
            ],
          },
          {
            heading: "English Language Requirements",
            paragraphs: [
              "Most first-time applicants must demonstrate English language ability at CEFR level A1 in speaking and listening. You may meet this requirement through an approved English test or an accepted academic qualification. Exemptions apply in certain circumstances.",
            ],
          },
          {
            heading: "Accommodation Requirements",
            paragraphs: [
              "You must show that suitable accommodation will be available for you and your partner in the UK. It must provide enough space for everyone living there and must not be overcrowded or breach public health regulations.",
            ],
          },
        ],
      },
      {
        heading: "Civil Partnership Visa UK Documents",
        paragraphs: [
          "Preparing the correct documents is an important part of your civil partnership visa application. You must provide evidence of your relationship, your partner’s immigration status and your ability to meet the relevant financial and accommodation requirements.",
          "Depending on your circumstances, you may need:",
        ],
        bullets: [
          "Valid passport: Your current passport and relevant previous travel documents.",
          "Civil partnership certificate: Evidence that your partnership is legally registered and recognised in the UK, if already registered.",
          "Relationship evidence: Joint bank statements, tenancy agreements, utility bills, photographs or communication records where relevant.",
          "Sponsor’s documents: Evidence of your partner’s British citizenship, settled status or other qualifying immigration permission.",
          "Financial evidence: Payslips, bank statements, employer letters or relevant self-employment records.",
          "English language evidence: An approved test certificate or accepted qualification, if required.",
          "Accommodation evidence: Tenancy agreement, mortgage documents or other proof of suitable accommodation.",
          "Previous relationship documents: Divorce or civil partnership dissolution certificates, where applicable.",
        ],
        subsections: [
          {
            heading: "Proposed Civil Partner Evidence",
            paragraphs: [
              "If you are applying as a proposed civil partner, you should provide evidence of your intention to register your civil partnership within six months of arriving in the UK.",
            ],
          },
        ],
      },
      {
        heading: "Civil Partnership Visa Application Process",
        paragraphs: [
          "The civil partnership visa application process depends on whether you are applying from outside the UK or switching from another immigration route while already in the country. You must complete the relevant online application and provide evidence that you meet the Home Office requirements.",
        ],
        subsections: [
          {
            heading: "Applying from Outside the UK",
            paragraphs: [
              "If you are living overseas, you must apply online before travelling to the UK. You will need to provide details about your relationship, your UK-based partner, your financial circumstances and your immigration history.",
              "After submitting the application and paying the relevant fees, you will usually need to attend a biometric appointment to provide your fingerprints and photograph. You must also submit the supporting documents requested for your application.",
              "If you are applying as a proposed civil partner, you must demonstrate your intention to register your civil partnership in the UK within six months of arrival.",
            ],
          },
          {
            heading: "Applying from Inside the UK",
            paragraphs: [
              "If you are already in the UK, you may be able to switch to the civil partnership route if your current immigration permission allows it. Visitors and people with permission for six months or less will usually need to leave the UK and apply from overseas, although specific exceptions exist.",
              "If you entered the UK on a proposed civil partner visa, you can apply to extend your stay after registering your civil partnership. Make sure you submit the application before your current permission expires.",
              "The correct application route depends on your current visa and relationship circumstances, so check your eligibility before submitting an application.",
            ],
          },
        ],
      },
      {
        heading: "Civil Partnership Visa UK Cost",
        paragraphs: [
          "The civil partnership visa UK cost depends on whether you apply from inside or outside the UK. You must also budget for the Immigration Health Surcharge (IHS), which is normally payable for the length of your visa.",
          "The current standard application fees are:",
          "Application type",
          "Visa application fee",
          "Applying from outside the UK",
          "£2,064",
          "Applying from inside the UK",
          "£1,407",
          "Most adult applicants must also pay the IHS:",
        ],
        bullets: [
          "Outside the UK: £3,105 for an initial visa lasting 2 years and 9 months.",
          "Inside the UK: £2,587.50 for an initial visa lasting 2 years and 6 months.",
        ],
        subsections: [
          {
            heading: "Additional Costs",
            paragraphs: [
              "Additional costs may include biometric appointment services, optional priority processing and professional application assistance. Each dependant included in the application will also have a separate visa fee and healthcare surcharge.",
              "If you cannot afford the application fee because you are unable to meet essential living costs or have other qualifying financial circumstances, you may be eligible for a fee waiver.",
            ],
          },
        ],
      },
      {
        heading: "Civil Partnership Visa Extension and Settlement",
        paragraphs: [
          "A UK Civil Partnership Visa can provide a route to settlement if you continue to meet the relevant immigration requirements. Applicants on the five-year partner route may generally apply for Indefinite Leave to Remain (ILR) after completing five years of qualifying continuous residence.",
        ],
        subsections: [
          {
            heading: "Extending Your Civil Partnership Visa",
            paragraphs: [
              "If you initially receive permission as a civil partner, you will usually need to apply for an extension before your current visa expires. An extension normally allows you to stay for a further 2 years and 6 months.",
              "You must continue to meet the applicable requirements, including proving that your relationship is genuine and ongoing and satisfying the relevant financial and English language rules.",
            ],
          },
          {
            heading: "Applying for Indefinite Leave to Remain",
            paragraphs: [
              "After five continuous years on the qualifying partner route, you may be eligible to apply for ILR. You will generally need to show that you are still in a genuine relationship, meet the applicable financial requirements and satisfy the English language and Life in the UK Test requirements.",
              "Time spent in the UK on a proposed civil partner visa does not count towards the five-year qualifying period. You must first register your civil partnership and obtain permission to stay under the partner route.",
              "CTA: Get Help with Your Civil Partnership Visa Extension",
            ],
          },
        ],
      },
      {
        heading: "Civil Partnership Visa UK FAQs",
        subsections: [
          {
            heading: "1. Who can apply for a UK Civil Partnership Visa?",
            paragraphs: [
              "You may apply if you are in a legally recognised civil partnership with a British or Irish citizen, someone settled in the UK or another eligible sponsor. You must meet the relationship, financial, English language and accommodation requirements.",
            ],
          },
          {
            heading: "2. Can I apply before registering my civil partnership?",
            paragraphs: [
              "Yes. You can apply as a proposed civil partner if you intend to register your civil partnership in the UK within six months of arriving. You must meet the relevant eligibility requirements and provide evidence of your plans.",
            ],
          },
          {
            heading: "3. What is the Civil Partnership Visa processing time?",
            paragraphs: [
              "Applications made outside the UK usually take around 12 weeks. Applications from inside the UK usually take around 8 weeks if you meet the financial and English language requirements. Some applications take longer, and priority services may be available.",
            ],
          },
          {
            heading: "4. Can you work on a Civil Partnership Visa?",
            paragraphs: [
              "If you have been granted permission as a civil partner under the standard partner route, you can generally work and study in the UK. However, proposed civil partner visa holders cannot work or study during their initial six-month stay. You must first register your partnership and receive approval for your further partner visa application.",
            ],
          },
          {
            heading: "5. Can I switch to a Civil Partnership Visa from another UK visa?",
            paragraphs: [
              "You may be able to switch if your current immigration permission allows it and you meet the partner route requirements. Visitors and people with permission for six months or less will usually need to apply from outside the UK, subject to limited exceptions.",
            ],
          },
          {
            heading: "6. Can I apply for ILR after a Civil Partnership Visa?",
            paragraphs: [
              "Yes. Applicants on the five-year partner route may generally apply for Indefinite Leave to Remain after five years of continuous qualifying residence. Time spent in the UK on a proposed civil partner visa does not count towards this period.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your Civil Partnership Visa",
        paragraphs: [
          "Preparing a civil partnership visa application requires careful attention to eligibility rules, relationship evidence and supporting documents. Visa Direct Immigration can help you understand the requirements and prepare for each stage of the process.",
          "Whether you are applying from overseas, switching from an eligible UK visa or planning to extend your stay, our team can provide guidance based on your circumstances.",
          "We support applicants in Birmingham, Bristol, Reading and across the UK.",
          "Contact Visa Direct Immigration to discuss your situation and understand the next steps for your application.",
        ],
      },
    ],
    iconName: "HeartHandshake",
    keyFeatures: [
      "Civil partnership and relationship eligibility assessment",
      "Financial, English language and accommodation guidance",
      "Civil partnership visa document preparation",
      "Extension and settlement pathway support",
    ],
    eligibilityRequirements: [
      "Genuine civil partnership or qualifying proposed civil partnership",
      "Eligible British, Irish, settled or qualifying UK sponsor",
      "Meeting applicable financial and English language requirements",
      "Suitable accommodation available in the UK",
    ],
    documentsRequired: [
      "Valid passport and travel documents",
      "Civil partnership and relationship evidence",
      "Sponsor, financial and accommodation evidence",
      "English language evidence, where required",
    ],
    processSteps: [
      {
        title: "Eligibility Assessment",
        description: "Reviewing relationship, sponsor, financial and immigration circumstances.",
      },
      {
        title: "Evidence Preparation",
        description: "Identifying civil partnership, financial, accommodation and language evidence.",
      },
      {
        title: "Application Submission",
        description: "Guidance with the online application and biometric appointment.",
      },
      {
        title: "Decision and Next Steps",
        description: "Support understanding the outcome, extension and settlement pathway.",
      },
    ],
    faqs: [],
  },
  {
    id: "spouse-visa",
    slug: "spouse-visa",
    title: "Spouse Visa",
    category: "Personal Immigration",
    shortDescription:
      "Get guidance with UK Spouse Visa eligibility, financial requirements, documents, fees, extensions and application processing.",
    heroTagline: "Understand the UK Spouse Visa requirements and prepare your application with confidence.",
    seoTitle: "UK Spouse Visa Application Support | Visa Direct Immigration",
    seoDescription:
      "Applying for a UK Spouse Visa? Get guidance with eligibility, financial requirements, documents, fees, extensions and application processing.",
    primaryCta: "Get Help with Your UK Spouse Visa Application",
    heroImage: "/images/services/spouse-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK spouse visa and immigration documents",
        caption: "Guidance for relationship evidence, documents and applications",
      },
    ],
    contentSections: [
      {
        heading: "UK Spouse Visa",
        paragraphs: [
          "Applying for a UK Spouse Visa allows eligible applicants to join their husband or wife and build their life together in the UK. However, the application involves several requirements, including proving your relationship is genuine, meeting the financial and English language criteria, and providing the correct supporting documents.",
          "Visa Direct Immigration provides guidance and application support for individuals and couples applying for a UK Spouse Visa. Whether you are applying from overseas or extending your permission to stay in the UK, our team can help you understand the requirements and prepare your application.",
        ],
      },
      {
        heading: "UK Spouse Visa Application Support",
        paragraphs: [
          "A Spouse Visa application must satisfy the relevant Home Office requirements. Missing evidence, inconsistent information or an incomplete application can lead to delays or refusal.",
          "We can help you with:",
        ],
        bullets: [
          "Understanding your eligibility and the applicable visa route.",
          "Reviewing relationship and financial evidence.",
          "Preparing the required supporting documents.",
          "Completing the online application.",
          "Understanding the application process and biometric requirements.",
          "Preparing for a spouse visa extension.",
        ],
        subsections: [
          {
            heading: "Spouse Visa Support",
            paragraphs: [
              "Need help with your application? Contact Visa Direct Immigration to discuss your circumstances.",
            ],
          },
        ],
      },
      {
        heading: "UK Spouse Visa Requirements in 2026",
        paragraphs: [
          "To qualify for a UK Spouse Visa, you and your partner must meet the relationship, financial, accommodation and English language requirements.",
          "The main eligibility conditions include:",
          "Relationship requirements: You must be legally married to a partner whose marriage is recognised in the UK. Your relationship must be genuine and continuing, and you must intend to live together permanently in the UK.",
          "Eligible sponsor: Your spouse must generally be a British or Irish citizen, have settled status or indefinite leave to remain, or hold another qualifying immigration status under the relevant rules.",
          "Financial requirement: Most new applications require you and your partner to demonstrate a combined annual income of at least £29,000. Different provisions may apply if your partner receives certain disability or carer benefits. Transitional rules may also apply to applicants who first applied before 11 April 2024 and are extending with the same partner.",
          "English language requirement: Applicants generally need to demonstrate the required level of English through an approved test or an accepted exemption. The level and evidence required depend on whether you are applying for the first time or extending your visa.",
          "Accommodation: You must show that suitable accommodation will be available for you and your family without relying on public funds or overcrowding the property.",
          "Meeting these requirements is essential, but the evidence needed will depend on your individual circumstances.",
        ],
      },
      {
        heading: "UK Spouse Visa Documents Required",
        paragraphs: [
          "Providing accurate and relevant documents helps the Home Office assess your eligibility. The exact checklist depends on your circumstances, including where you are applying from and how you meet the financial requirement.",
          "Commonly required documents include:",
        ],
        bullets: [
          "Valid passport and previous passport details, where relevant.",
          "Marriage certificate or recognised civil partnership certificate.",
          "Evidence of your spouse's British citizenship or qualifying immigration status.",
          "Relationship evidence, such as photographs, travel records, communication history and shared financial commitments.",
          "Financial documents, such as payslips, bank statements or employment letters.",
          "Evidence of suitable accommodation in the UK.",
          "English language test results or proof of an exemption.",
          "Details of previous immigration applications and travel history, where relevant.",
        ],
        subsections: [
          {
            heading: "Document Translation",
            paragraphs: [
              "Documents not in English or Welsh generally need to be accompanied by an appropriate certified translation. Your evidence should be consistent, up to date and relevant to the requirements being assessed.",
              "Let our team help you organise your spouse visa documents before submitting your application.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a UK Spouse Visa",
        paragraphs: [
          "The application process depends on whether you are applying from outside the UK or extending your existing permission from within the country.",
          "The usual process involves:",
        ],
        bullets: [
          "1. Check your eligibility: Confirm that your relationship, sponsor's status, finances and English language evidence meet the requirements.",
          "2. Prepare your documents: Collect the marriage, relationship, financial and accommodation evidence needed for your application.",
          "3. Complete the online form: Apply through the appropriate Home Office application route.",
          "4. Pay the application fees: Pay the relevant visa application fee and Immigration Health Surcharge, where applicable.",
          "5. Attend your biometrics appointment: Follow the instructions to provide your fingerprints and photograph, unless an alternative process applies.",
          "6. Wait for a decision: The Home Office will assess your application and may request further information.",
          "Applying with the correct documents and information can help avoid preventable issues.",
        ],
      },
      {
        heading: "Spouse Visa Cost UK in 2026",
        paragraphs: [
          "The cost of a UK Spouse Visa depends on whether you apply from outside or inside the UK. Applicants must also consider the Immigration Health Surcharge, which is charged separately.",
        ],
        table: {
          headers: ["Application type", "Visa application fee"],
          rows: [
            ["Applying from outside the UK", "£2,064"],
            ["Applying from inside the UK", "£1,407"],
          ],
        },
        paragraphsAfterTable: [
          "For most adult applicants, the Immigration Health Surcharge is:",
        ],
        subsections: [
          {
            heading: "Immigration Health Surcharge",
            table: {
              headers: ["Permission granted", "Healthcare surcharge"],
              rows: [
                ["2 years and 6 months", "£2,587.50"],
                ["2 years and 9 months", "£3,105"],
              ],
            },
            paragraphs: [
              "You may also need to budget for an English language test, document translations and biometric-related expenses, where applicable. Fees can change, so check the official rates before submitting your application.",
            ],
          },
        ],
      },
      {
        heading: "UK Spouse Visa Processing Time",
        paragraphs: [
          "The UK Spouse Visa processing time depends on where you apply and whether your application meets the relevant requirements.",
          "As a general guide:",
        ],
        bullets: [
          "Outside the UK: A decision usually takes around 12 weeks.",
          "Inside the UK: A decision usually takes around 8 weeks if you meet the financial and English language requirements.",
          "Certain applications inside the UK: Where the relevant financial or English language requirements are not met, processing can take around 12 months.",
          "These are usual service times rather than guaranteed deadlines. Complex circumstances, additional checks or requests for further evidence may affect the waiting time. Faster services may be available for some applications at an additional cost.",
        ],
      },
      {
        heading: "How to Renew a Spouse Visa in the UK",
        paragraphs: [
          "A UK Spouse Visa extension allows you to continue living with your partner after your initial permission expires. If you are extending with the same partner, you can generally apply for a further period of up to 2 years and 6 months.",
          "To apply for an extension, you will usually need to:",
        ],
        bullets: [
          "Continue to meet the relationship requirements.",
          "Demonstrate that you and your partner intend to live together permanently.",
          "Meet the applicable financial and English language requirements.",
          "Provide updated relationship, financial and accommodation evidence.",
          "Submit the online extension application and pay the required fees.",
        ],
        subsections: [
          {
            heading: "Settlement After a Spouse Visa",
            paragraphs: [
              "If you complete five continuous years on the qualifying partner route, you may be eligible to apply for Indefinite Leave to Remain, provided you meet the settlement requirements. Time spent in the UK as a fiancé or proposed civil partner does not count towards this five-year period.",
            ],
          },
        ],
      },
      {
        heading: "The 28 Days Rule for Spouse Visa UK",
        paragraphs: [
          "The 28-day rule is often misunderstood. You do not have to wait until the final 28 days of your current Spouse Visa before applying for an extension.",
          "You can generally submit your extension application at any time before your existing permission expires. However, if you extend with the same partner, up to a separate 28-day provision generally allows eligible applicants on the five-year partner route to apply for Indefinite Leave to Remain up to 28 days before completing their qualifying residence period. The correct timing depends on your visa history and route.",
        ],
      },
      {
        heading: "What Happens if Your UK Spouse Visa is Refused?",
        paragraphs: [
          "A UK Spouse Visa refusal can happen if the Home Office is not satisfied that the eligibility requirements have been met or the supporting evidence is insufficient.",
          "Common reasons include:",
        ],
        bullets: [
          "Insufficient financial evidence.",
          "Incomplete or inconsistent relationship documents.",
          "Failure to meet the English language requirement.",
          "Incorrect information in the application.",
          "Concerns about the genuineness of the relationship.",
        ],
        subsections: [
          {
            heading: "Refusal Next Steps",
            paragraphs: [
              "If your application is refused, read the decision letter carefully. Depending on the reasons and circumstances, you may have the option to request an administrative review, appeal where a right of appeal exists, or submit a fresh application. The appropriate next step depends on the refusal grounds and your immigration position.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your UK Spouse Visa",
        paragraphs: [
          "Preparing a spouse visa application can be challenging, particularly when you need to meet several requirements and provide evidence from different sources.",
          "Visa Direct Immigration offers application guidance and support to help you understand the process, organise your documents and address potential issues before submission. Whether you are applying from outside the UK or renewing your existing visa, we can discuss the available options based on your circumstances.",
          "We support applicants in Birmingham, Bristol, Reading and across the UK.",
          "Contact Visa Direct Immigration today to discuss your UK Spouse Visa application and book your immigration consultation.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "How much does a UK Spouse Visa cost in 2026?",
            paragraphs: [
              "The application fee is £2,064 when applying from outside the UK and £1,407 when applying from inside the UK. The Immigration Health Surcharge is additional and depends on the length of permission granted.",
            ],
          },
          {
            heading: "Can I work in the UK on a Spouse Visa?",
            paragraphs: [
              "Yes. People granted permission under the standard spouse or partner family route can generally work and study in the UK, subject to their visa conditions. This does not apply to the initial fiancé or proposed civil partner visa.",
            ],
          },
          {
            heading: "How long does it take to renew a UK Spouse Visa?",
            paragraphs: [
              "An in-country extension application usually takes around 8 weeks if you meet the financial and English language requirements. Some applications can take longer, depending on their circumstances and the service used.",
            ],
          },
          {
            heading: "Can I apply for ILR after five years on a UK Spouse Visa?",
            paragraphs: [
              "You may be eligible to apply for Indefinite Leave to Remain after five continuous years on the qualifying partner route. You must also meet the applicable relationship, residence, English language and other settlement requirements.",
            ],
          },
          {
            heading: "What happens if my UK Spouse Visa application is refused?",
            paragraphs: [
              "Your refusal letter will explain the reasons for the decision and whether you have a right to appeal or request an administrative review. Depending on your circumstances, submitting a new application may also be an option. Consider obtaining appropriate guidance before taking further action.",
            ],
          },
        ],
      },
    ],
    iconName: "HeartHandshake",
    keyFeatures: [
      "Relationship and financial evidence review",
      "Supporting document preparation",
      "Online application and biometric guidance",
      "Spouse visa extensions and settlement guidance",
    ],
    eligibilityRequirements: [
      "Genuine and continuing relationship recognised under UK immigration rules",
      "Eligible sponsor with British, Irish, settled or other qualifying status",
      "Meeting the applicable financial and English language requirements",
      "Suitable accommodation available without overcrowding or reliance on public funds",
    ],
    documentsRequired: [
      "Passport and marriage or civil partnership certificate",
      "Sponsor's proof of British citizenship or qualifying immigration status",
      "Relationship, financial and accommodation evidence",
      "English language test result or proof of an exemption",
    ],
    processSteps: [
      {
        title: "Check Eligibility",
        description: "Reviewing your relationship, sponsor status, finances and English language evidence.",
      },
      {
        title: "Prepare Documents",
        description: "Organising the marriage, relationship, financial and accommodation evidence required.",
      },
      {
        title: "Submit Application",
        description: "Completing the online application, paying the fees and attending biometrics.",
      },
      {
        title: "Home Office Decision",
        description: "Monitoring the application while the Home Office assesses the evidence and reaches a decision.",
      },
    ],
    faqs: [
      {
        question: "Can I work in the UK on a Spouse Visa?",
        answer: "People granted permission under the standard spouse or partner family route can generally work and study in the UK, subject to their visa conditions.",
      },
      {
        question: "Can I apply for ILR after five years on a UK Spouse Visa?",
        answer: "You may be eligible after five continuous years on the qualifying partner route, provided you meet the applicable settlement requirements.",
      },
    ],
  },
  {
    id: "british-citizenship",
    slug: "british-citizenship",
    title: "British Citizenship",
    category: "Personal Immigration",
    shortDescription:
      "Learn how to apply for British citizenship, including eligibility, required documents, application fees and processing times.",
    heroTagline: "Understand the British citizenship requirements and prepare your application with confidence.",
    seoTitle: "British Citizenship Application | UK Lawyers",
    seoDescription:
      "Learn how to apply for British citizenship, including eligibility, required documents, application fees and processing times. Get expert application support.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/british-citizenship.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "British citizenship application and nationality documents",
        caption: "Guidance for British citizenship applications and supporting evidence",
      },
    ],
    contentSections: [
      {
        heading: "British Citizenship",
        paragraphs: [
          "Becoming a British citizen is an important step for people who have made the UK their home. It provides the right to live in the country permanently as a citizen, apply for a British passport and enjoy the rights and responsibilities associated with British nationality.",
          "If you are considering a British citizenship application, you need to understand the eligibility criteria, residence requirements, English language rules and documents required by the Home Office. Most adults apply through naturalisation after obtaining Indefinite Leave to Remain (ILR) or settled status.",
          "Visa Direct Immigration provides application guidance and support to individuals in Birmingham, Bristol, Reading and across the UK. Our immigration team can help you understand the requirements, prepare your documents and approach the application process with greater confidence.",
          "Book Your Immigration Consultation to discuss your eligibility for British citizenship.",
        ],
      },
      {
        heading: "Who Can Apply for British Citizenship?",
        paragraphs: [
          "Most adults aged 18 or over who have lived lawfully in the UK and obtained permanent immigration status may qualify for British citizenship through naturalisation. The exact requirements depend on your circumstances and whether you are applying as the spouse or civil partner of a British citizen.",
          "Common eligibility routes include:",
        ],
        bullets: [
          "Standard naturalisation: Usually available to people who have lived in the UK for at least five years and held ILR or settled status for at least 12 months.",
          "Spouse or civil partner route: Available to eligible applicants who have lived in the UK for at least three years and are married to, or in a civil partnership with, a British citizen.",
          "EU Settlement Scheme: People with settled status may apply once they meet the relevant residence and other requirements. Some people with pre-settled status may also qualify under specific conditions.",
          "Other nationality routes: People with a British parent, certain British nationality connections or special circumstances may qualify through registration or another route rather than naturalisation.",
        ],
        subsections: [
          {
            heading: "Choosing the Correct Route",
            paragraphs: [
              "Being born in the UK does not automatically make everyone a British citizen. Your eligibility depends on when you were born and your parents' nationality or immigration status at the time.",
              "It is important to identify the correct route before submitting an application, as the evidence and legal requirements can differ.",
            ],
          },
        ],
      },
      {
        heading: "British Citizenship Requirements",
        paragraphs: [
          "To apply for British citizenship through naturalisation, you must meet the Home Office requirements for age, immigration status, residence, English language and good character.",
        ],
        subsections: [
          {
            heading: "1. Age and Immigration Status",
            paragraphs: [
              "You must be at least 18 and normally hold ILR or settled status. Standard applicants must usually have held this status for 12 months, while spouses or civil partners of British citizens can apply without this additional waiting period.",
            ],
          },
          {
            heading: "2. UK Residence Requirements",
            paragraphs: [
              "You generally need five years of UK residence, or three years if married to or in a civil partnership with a British citizen. You must also have been physically present in the UK on the relevant date at the start of your qualifying period.",
            ],
            table: {
              headers: ["Residence route", "Maximum absences", "Final 12 months"],
              rows: [
                ["Standard five-year route", "450 days", "90 days"],
                ["British citizen spouse route", "270 days", "90 days"],
              ],
            },
          },
          {
            heading: "3. English Language Requirement",
            paragraphs: [
              "Most applicants must demonstrate English language ability at B1 level or above through an approved qualification. Certain degrees and nationalities may also meet this requirement. Exemptions are available in specific circumstances.",
            ],
          },
          {
            heading: "4. Life in the UK Test",
            paragraphs: [
              "You must normally pass the Life in the UK Test, which contains 24 questions. You need at least 75% to pass, and the current fee is £50. Previous passes can generally be reused for citizenship applications.",
            ],
          },
          {
            heading: "5. Good Character Requirement",
            paragraphs: [
              "The Home Office considers your criminal record, immigration history, tax affairs and financial conduct. You must provide honest and complete information. Previous convictions, immigration breaches or outstanding tax issues may affect your application.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for British Citizenship",
        paragraphs: [
          "The British citizenship application process involves checking your eligibility, preparing evidence, submitting the correct form and completing biometric enrolment. Most applicants living in the UK can apply online.",
          "The usual steps are:",
        ],
        subsections: [
          {
            heading: "Step 1: Check Your Eligibility",
            paragraphs: [
              "Confirm that you meet the relevant residence period, immigration status, language, Life in the UK and good character requirements. You should also calculate your absences carefully and check that you were physically present in the UK on the required qualifying date.",
            ],
          },
          {
            heading: "Step 2: Prepare Your British Citizenship Documents",
            paragraphs: [
              "Gather your identity documents, residence evidence, immigration status details and referee information. Make sure the information is accurate and consistent across your application.",
            ],
          },
          {
            heading: "Step 3: Complete the Online Application",
            paragraphs: [
              "Most adults applying from within the UK use the naturalisation application, commonly known as Form AN. Complete the questions carefully and provide details of your residence, immigration history, employment and other relevant circumstances.",
            ],
          },
          {
            heading: "Step 4: Pay the Application Fee",
            paragraphs: [
              "Pay the applicable Home Office fee when submitting your application. You may also be able to select the optional priority service if you meet its conditions.",
            ],
          },
          {
            heading: "Step 5: Attend Your Biometric Appointment",
            paragraphs: [
              "You will receive instructions about providing your fingerprints and photograph. Depending on the arrangements available, you may need to attend a UK Visa and Citizenship Application Services (UKVCAS) appointment. You can usually upload supporting documents online or arrange for them to be scanned at your appointment.",
            ],
          },
          {
            heading: "Step 6: Wait for the Home Office Decision",
            paragraphs: [
              "The Home Office will review your application and may contact you if further information or evidence is required. Keep your contact details and immigration permission valid while your application is being considered.",
            ],
          },
          {
            heading: "Step 7: Attend Your Citizenship Ceremony",
            paragraphs: [
              "If your application is approved and you are aged 18 or over, you will normally need to attend a citizenship ceremony. You will make an oath or affirmation of allegiance and receive your naturalisation certificate. You become a British citizen at the ceremony, not simply when you receive the approval decision.",
            ],
          },
        ],
      },
      {
        heading: "What Documents Do I Need to Apply for British Citizenship?",
        paragraphs: [
          "The documents required depend on your personal circumstances, immigration history and the route under which you are applying. Providing clear and relevant evidence helps the Home Office assess your application.",
          "Common British citizenship documents include:",
        ],
        table: {
          headers: ["Document", "Why it may be required"],
          rows: [
            ["Current passport or travel document", "To confirm your identity and nationality"],
            ["Biometric Residence Permit (BRP), if issued", "To support your immigration status evidence, even if the card has expired"],
            ["ILR or settled status details", "To demonstrate that you have the required immigration status"],
            ["Previous passports", "To help establish residence and travel history"],
            ["Residence evidence", "To support your qualifying period in the UK"],
            ["Life in the UK Test reference", "To confirm that you have passed the required test"],
            ["English language evidence", "To demonstrate that you meet the language requirement, where applicable"],
            ["Marriage or civil partnership certificate", "If applying as the spouse or civil partner of a British citizen"],
            ["Two referee details", "To support your identity and application"],
            ["Name change documents", "If your name has changed since your identity documents were issued"],
          ],
        },
        paragraphsAfterTable: [
          "You will normally need two referees who meet the Home Office criteria. One must be a professional person, while the other must hold a British citizen status and meet the relevant age requirements.",
          "Need help organising your British citizenship documents? Our team can help you review the evidence required for your circumstances before you submit your application.",
        ],
      },
      {
        heading: "Cost of Applying for British Citizenship",
        paragraphs: [
          "The cost of applying for British citizenship depends on the application route and any additional services you choose. As of November 2026, the standard adult naturalisation costs are:",
        ],
        table: {
          headers: ["Expense", "Current cost"],
          rows: [
            ["Adult naturalisation application", "£1,709"],
            ["Citizenship ceremony fee", "£130"],
            ["Total application and ceremony cost", "£1,839"],
            ["Life in the UK Test", "£50"],
            ["Citizenship priority service (optional)", "£500 additional"],
          ],
        },
        paragraphsAfterTable: [
          "The standard application and ceremony total is £1,839. If you also need to take the Life in the UK Test, the combined cost becomes £1,889, excluding any English language test, document translation or professional assistance fees.",
        ],
      },
      {
        heading: "British Citizenship Processing Time",
        paragraphs: [
          "The standard British citizenship processing time is usually up to six months from the date the Home Office receives your application. Some applications may take longer if additional checks or supporting evidence are required.",
          "If you are eligible, you may be able to use the priority service for an additional £500. This usually aims to provide a decision within 30 working days.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "A British citizenship application requires careful preparation, particularly where there are complex travel records, previous immigration issues, name changes or questions about good character.",
          "Visa Direct Immigration offers application guidance and support to people preparing for British citizenship. Our team can help you:",
        ],
        bullets: [
          "Understand the naturalisation requirements that apply to your circumstances.",
          "Review your residence history and travel absences.",
          "Identify the supporting documents needed for your application.",
          "Organise your application information and referee details.",
          "Check your application for missing information before submission.",
          "Understand the steps following a Home Office decision.",
        ],
        subsections: [
          {
            heading: "Application Support",
            paragraphs: [
              "We support clients through our offices in Birmingham, Bristol and Reading, as well as remotely across the UK.",
              "Book Your Immigration Consultation to discuss your British citizenship application and the support you may need.",
            ],
          },
        ],
      },
      {
        heading: "Frequently Asked Questions About British Citizenship",
        subsections: [
          {
            heading: "1. How do I get British citizenship?",
            paragraphs: [
              "Most adults apply through naturalisation after meeting the required UK residence period and obtaining ILR or settled status. You must also meet the applicable English language, Life in the UK and good character requirements.",
            ],
          },
          {
            heading: "2. Can I apply for British citizenship after five years in the UK?",
            paragraphs: [
              "You may qualify after five years of UK residence if you meet the other requirements. However, most standard applicants must also have held ILR or settled status for at least 12 months before applying.",
            ],
          },
          {
            heading: "3. Can I apply for British citizenship if I am married to a British citizen?",
            paragraphs: [
              "Yes. If you have lived in the UK for at least three years and hold ILR or settled status, you may qualify under the spouse or civil partner route. You do not normally need to wait 12 months after receiving permanent immigration status.",
            ],
          },
          {
            heading: "4. What documents do I need for a British citizenship application?",
            paragraphs: [
              "Common documents include your passport, immigration status evidence, previous passports, residence records, English language evidence where required, Life in the UK Test reference, two referee details and relevant marriage or name change certificates.",
            ],
          },
          {
            heading: "5. How long does a British citizenship application take?",
            paragraphs: [
              "Most naturalisation applications receive a decision within six months. Eligible applicants may use the optional priority service, which usually aims for a decision within 30 working days for an additional £500.",
            ],
          },
          {
            heading: "6. Can I keep my original nationality after becoming a British citizen?",
            paragraphs: [
              "The UK allows dual citizenship, so you can usually retain your existing nationality when becoming British. However, some countries do not permit dual nationality, so check the rules of your current country before applying.",
            ],
          },
        ],
      },
    ],
    iconName: "GraduationCap",
    keyFeatures: [
      "Naturalisation eligibility and residence review",
      "Absence calculations and travel history assessment",
      "Life in the UK and English language guidance",
      "Good character and referee evidence checks",
    ],
    eligibilityRequirements: [
      "Held ILR or settled status for the required period",
      "Met the relevant residence and absence requirements",
      "Passed the Life in the UK Test and met the English language requirement",
      "Satisfied the Home Office good character requirements",
    ],
    documentsRequired: [
      "Current and previous passports or travel documents",
      "ILR or settled status details",
      "Life in the UK Test reference and English language evidence",
      "Two referee details and relevant residence records",
    ],
    processSteps: [
      {
        title: "Check Eligibility",
        description: "Reviewing your route, immigration status, residence period and travel absences.",
      },
      {
        title: "Prepare Documents",
        description: "Organising identity, residence, language, test and referee evidence.",
      },
      {
        title: "Submit Application",
        description: "Completing the naturalisation form, paying the fee and attending biometrics.",
      },
      {
        title: "Ceremony and Certificate",
        description: "Attending the citizenship ceremony and receiving your naturalisation certificate.",
      },
    ],
    faqs: [
      {
        question: "How long does a British citizenship application take?",
        answer: "Most naturalisation applications receive a decision within six months.",
      },
      {
        question: "Can I keep my original nationality after becoming British?",
        answer: "The UK allows dual citizenship, but you should check whether your current country permits dual nationality.",
      },
    ],
  },
  {
  id: "visitor-visa",
  slug: "visitor-visa",
  title: "Visitor Visa",
  category: "Personal Immigration",
  shortDescription:
    "Visit the UK for tourism, family gatherings or permitted short-term activities with application guidance.",
  heroTagline: "Prepare your UK Visitor Visa application with clear guidance on eligibility and evidence.",
  seoTitle: "UK Visitor Visa Application Support | Visa Direct",
  seoDescription:
    "Applying for a UK Visitor Visa? Get guidance with eligibility, documents, financial evidence, application fees and visa refusal concerns.",
  primaryCta: "Book Your Immigration Consultation",
  heroImage: "/images/services/visitor-visa.webp",
  supportingImages: [
    {
      src: "/images/service-personal.webp",
      alt: "UK visitor visa and travel documents",
      caption: "Guidance for visitor visa evidence and travel plans",
    },
  ],
  contentSections: [
    {
      heading: "UK Visitor Visa",
      paragraphs: [
        "Planning to visit the UK for a holiday, family gathering or business trip? A UK Visitor Visa allows eligible individuals to travel to the United Kingdom for permitted short-term activities, usually for up to six months per visit.",
        "However, getting a visitor visa requires more than completing an application form. You must explain the purpose of your visit, demonstrate that you can afford your trip and show that you intend to leave the UK when your visit ends. Visa Direct Immigration provides guidance and application support to help you understand the requirements and prepare your application.",
      ],
    },
    {
      heading: "UK Visitor Visa Application Support",
      paragraphs: [
        "A visitor visa application needs to present a clear and consistent explanation of your travel plans, personal circumstances and financial position. Incomplete documents or information that does not support your stated purpose of travel may create difficulties during the assessment.",
        "Our visit visa services can help you with:",
        "Whether you are visiting relatives, planning a holiday or travelling for an eligible business activity, we can help you prepare for the application process.",
        "Planning a trip to the UK? Book an immigration consultation to discuss your visitor visa application.",
      ],
      bullets: [
        "Reviewing your circumstances and identifying the relevant visitor visa category.",
        "Understanding the eligibility requirements.",
        "Preparing financial and supporting documents.",
        "Completing the online UK visitor visa application.",
        "Reviewing information before submission.",
        "Understanding the biometric appointment and application process.",
      ],
    },
    {
      heading: "Requirements for a Visitor Visa to the UK",
      paragraphs: [
        "To qualify for a UK Standard Visitor Visa, you must demonstrate that your visit is for a permitted purpose and that you meet the Home Office visitor requirements.",
        "Generally, you must:",
        "You may apply to visit for tourism, family visits, certain business activities, short-term study and eligible medical treatment. The conditions depend on the reason for your visit, so it is important to select the correct application category.",
      ],
      bullets: [
        "Intend to leave the UK at the end of your visit.",
        "Have enough money to cover your travel, accommodation and living expenses.",
        "Be visiting for an activity permitted under the Standard Visitor route.",
        "Not intend to work, claim public funds or live in the UK through frequent visits.",
        "Demonstrate that any financial support from another person is genuine and available to you.",
      ],
    },
    {
      heading: "UK Visitor Visa Documents",
      paragraphs: [
        "The documents required for a UK Visitor Visa depend on your personal circumstances, employment status and purpose of travel. Your evidence should support the information provided in your application.",
        "Commonly required documents include:",
        "Documents that are not in English or Welsh generally need to be accompanied by a certified translation. You should provide evidence that reflects your actual circumstances rather than relying on a generic document checklist.",
      ],
      bullets: [
        "A valid passport or travel document.",
        "Details of your planned visit and intended travel dates.",
        "Evidence of your employment, business or studies in your home country, where relevant.",
        "Recent bank statements and evidence of your available funds.",
        "Information about your accommodation arrangements.",
        "Details of any family members or friends you intend to visit.",
        "An invitation letter, if someone in the UK is hosting or sponsoring your visit.",
        "Evidence of your sponsor's immigration status and financial position, where applicable.",
      ],
    },
    {
      heading: "How to Apply for a UK Visitor Visa",
      paragraphs: [
        "Most applicants who need a Standard Visitor Visa must apply online before travelling to the UK. You can normally apply up to three months before your intended travel date.",
        "The application process involves the following steps:",
        "Providing consistent information across your application form and supporting documents is important.",
      ],
      bullets: [
        "1. Check your eligibility: Confirm that your travel purpose is permitted under the Standard Visitor route.",
        "2. Complete the online form: Provide accurate information about your personal circumstances, finances and travel plans.",
        "3. Prepare your documents: Gather your passport, financial evidence and other supporting paperwork.",
        "4. Pay the application fee: Complete the required payment when submitting your application.",
        "5. Book a biometric appointment: Attend the relevant visa application centre to provide your fingerprints and photograph.",
        "6. Submit supporting evidence: Upload or provide the documents requested for your application.",
        "7. Wait for a decision: The Home Office will assess your application and communicate its decision.",
      ],
    },
    {
      heading: "UK Visitor Visa Fees in 2026",
      paragraphs: [
        "The visa fee for a UK Visitor Visa depends on the length of permission you are applying for.",
        "Visitor visa type",
        "Application fee",
        "Standard Visitor Visa, up to 6 months",
        "£135",
        "Long-term Visitor Visa, 2 years",
        "£506",
        "Long-term Visitor Visa, 5 years",
        "£903",
        "Long-term Visitor Visa, 10 years",
        "£1,128",
        "Long-term visitor visas allow multiple visits during their validity, but each individual visit is normally limited to six months. The application fee is not refundable simply because your visa is refused.",
      ],
    },
    {
      heading: "UK Visitor Visa 180 Days Rule",
      paragraphs: [
        "The UK Visitor Visa 180-day rule refers to the usual maximum period a Standard Visitor can stay in the UK during one visit. Most visitors can remain for up to six months, which is approximately 180 days.",
        "However, holding a two-year, five-year or ten-year visitor visa does not allow you to live in the UK permanently or stay for six months on every visit without further scrutiny. The Home Office may question your travel pattern if you spend extended or repeated periods in the UK.",
        "Your visits should remain temporary and consistent with the purpose of your visa.",
      ],
    },
    {
      heading: "UK Visitor Visa Extension",
      paragraphs: [
        "Most Standard Visitor Visa holders can apply to extend their stay only up to a total of six months. Extensions are permitted in limited circumstances, including certain medical treatment cases, eligible academic visits and specific professional examination or clinical attachment arrangements.",
        "An extension is not automatically granted. You must meet the relevant requirements and provide supporting evidence for your circumstances.",
        "If you need to remain in the UK longer than originally planned, it is important to check whether your situation qualifies for an extension before your existing permission expires.",
      ],
    },
    {
      heading: "UK Visitor Visa Refusal: Common Reasons",
      paragraphs: [
        "A UK Visitor Visa may be refused if the Home Office is not satisfied that the applicant meets the visitor requirements. Common concerns include:",
        "If your visitor visa is refused, read the refusal notice carefully to understand the reasons. The appropriate next step depends on the decision and your circumstances. Submitting another application without addressing the original concerns may lead to another refusal.",
      ],
      bullets: [
        "Insufficient or unclear financial evidence.",
        "Unexplained deposits or inconsistencies in bank statements.",
        "An unclear purpose of travel.",
        "Weak evidence of personal, employment or family circumstances.",
        "Doubts about whether the applicant intends to leave the UK.",
        "Inconsistent information between the application form and supporting documents.",
      ],
    },
    {
      heading: "How Visa Direct Immigration Can Help with Your UK Visitor Visa",
      paragraphs: [
        "Preparing a visitor visa application can be challenging, particularly when you need to demonstrate your financial circumstances, explain your travel purpose and provide evidence of your intention to return home.",
        "Visa Direct Immigration provides immigration guidance and application support to help you understand the relevant requirements and organise your supporting documents. Whether you are visiting family, travelling for tourism or attending an eligible business activity, our team can discuss your circumstances and explain the application process.",
        "We support applicants in Birmingham, Bristol and Reading, as well as individuals across the UK.",
        "Ready to apply for a UK Visitor Visa? Book Your Immigration Consultation with Visa Direct Immigration today.",
      ],
    },
    {
      heading: "Frequently Asked Questions",
      subsections: [
        {
          heading: "How much bank balance is required for a UK Visitor Visa?",
          paragraphs: [
            "There is no fixed minimum bank balance required for a UK Visitor Visa. You must demonstrate that you have enough accessible funds to cover your travel, accommodation and living expenses. The amount should be reasonable for your planned visit and consistent with your income and financial circumstances.",
          ],
        },
        {
          heading: "Can I stay in the UK for 180 days on a Visitor Visa?",
          paragraphs: [
            "Yes. Most Standard Visitor Visa holders can stay in the UK for up to six months per visit. However, frequent or successive visits must not be used to make the UK your main home.",
          ],
        },
        {
          heading: "Can I extend my UK Visitor Visa beyond six months?",
          paragraphs: [
            "Only in limited circumstances. Certain visitors, including eligible medical patients and academics, may qualify for an extension beyond the usual six-month period if they meet the relevant requirements.",
          ],
        },
        {
          heading: "How long does a UK Visitor Visa application take?",
          paragraphs: [
            "A Standard Visitor Visa application made outside the UK usually receives a decision within three weeks after the applicant has attended their appointment and completed the required identity checks. Some applications may take longer if additional checks are needed.",
          ],
        },
        {
          heading: "What should I do if my UK Visitor Visa is refused?",
          paragraphs: [
            "Read your refusal notice carefully to understand why the application was unsuccessful. Depending on the circumstances, you may be able to challenge the decision where an appropriate legal route exists or submit a new application addressing the concerns raised.",
          ],
        },
      ],
    },
  ],
  iconName: "Globe2",
  keyFeatures: [
    "Visitor route and eligibility assessment",
    "Financial and travel evidence guidance",
    "Online application and biometric appointment support",
    "Refusal concern and reapplication guidance",
  ],
  eligibilityRequirements: [
    "Permitted short-term visit purpose",
    "Sufficient funds for travel, accommodation and living expenses",
    "Genuine intention to leave the UK after the visit",
    "No intention to work, claim public funds or live in the UK through frequent visits",
  ],
  documentsRequired: [
    "Valid passport or travel document",
    "Travel plans, accommodation and invitation evidence",
    "Financial and employment or study evidence",
    "Sponsor evidence and certified translations, where applicable",
  ],
  processSteps: [
    {
      title: "Eligibility Assessment",
      description: "Reviewing your visit purpose, personal circumstances and visitor route requirements.",
    },
    {
      title: "Evidence Preparation",
      description: "Organising financial, travel, accommodation and supporting documents.",
    },
    {
      title: "Application and Biometrics",
      description: "Guidance with the online form, payment and biometric appointment.",
    },
    {
      title: "Decision and Next Steps",
      description: "Support understanding the outcome and addressing any refusal concerns.",
    },
  ],
  faqs: [],
},
{
    id: "business-visit-visa",
    slug: "business-visitor-visa",
    title: "Business Visitor Visa",
    category: "Business Immigration",
    shortDescription: "Attend commercial meetings, international conferences, and corporate events in the UK.",
    heroTagline: "Facilitating seamless corporate travel and short-term commercial engagements in Great Britain.",
    seoTitle: "Business Visitor Visa UK | Application & Requirements",
    seoDescription:
      "Applying for a UK Business Visitor Visa? Get guidance on eligibility, requirements, documents, fees and processing times from Visa Direct Immigration.",
    primaryCta: "Get Business Visitor Visa Guidance",
    heroImage: "/images/services/business-visitor-visa.webp",
    supportingImages: [
      {
        src: "/images/service-business.webp",
        alt: "Business professionals meeting in the UK",
        caption: "Guidance for permitted UK business visit activities",
      },
    ],
    contentSections: [
      {
        heading: "Business Visitor Visa UK",
        paragraphs: [
          "Planning a business trip to the United Kingdom? A Business Visitor Visa UK allows eligible overseas professionals and business representatives to visit for permitted activities, such as attending meetings, conferences, negotiating contracts and exploring business opportunities.",
          "The business visit route falls under the UK's Standard Visitor visa. Depending on your nationality, you may need a visitor visa, an Electronic Travel Authorisation (ETA), or neither. You must also meet the relevant visitor requirements and ensure your planned activities are permitted.",
          "At Visa Direct Immigration, we provide guidance on UK business visit visa requirements, supporting documents and the application process, helping you understand what is needed before you travel.",
        ],
      },
      {
        heading: "What is a UK Business Visitor Visa?",
        paragraphs: [
          "A UK Business Visitor Visa is commonly used to describe a Standard Visitor visa for overseas professionals visiting the UK for permitted business activities. It allows eligible visitors to stay for up to six months, depending on their circumstances and permission granted.",
        ],
        subsections: [
          {
            heading: "What Can You Do on a Business Visit Visa?",
            paragraphs: [
              "Permitted activities can include:",
            ],
            bullets: [
              "Attending business meetings, conferences and seminars.",
              "Negotiating and signing contracts.",
              "Visiting UK business premises or inspecting sites.",
              "Attending trade fairs to promote your business, without selling products.",
              "Receiving work-related training if you are employed overseas.",
              "You must follow the visitor conditions and cannot use this route to take an ordinary job in the UK.",
            ],
          },
          {
            heading: "Who Needs a Business Visit Visa?",
            paragraphs: [
              "Whether you need a visa depends on your nationality. Some travellers must apply for a Standard Visitor visa before travelling, while others may need an Electronic Travel Authorisation (ETA) or may not need either.",
              "Check your immigration requirements before making travel arrangements.",
            ],
          },
        ],
      },
      {
        heading: "UK Business Visit Visa Requirements",
        paragraphs: [
          "To qualify for a UK business visit visa, you must meet the Standard Visitor visa requirements and show that your visit is temporary and for a permitted purpose.",
        ],
        subsections: [
          {
            heading: "Genuine Purpose of Visit",
            paragraphs: [
              "You must explain why you are travelling to the UK and provide evidence of your planned business activities, such as meetings, conferences or negotiations.",
            ],
          },
          {
            heading: "Financial Requirements",
            paragraphs: [
              "You must have sufficient funds to cover your travel, accommodation and living expenses without relying on public funds. You may also provide evidence of financial support from your employer or a UK business host.",
            ],
          },
          {
            heading: "Intention to Leave the UK",
            paragraphs: [
              "You must demonstrate that you intend to leave the UK at the end of your visit. Evidence of your employment, business commitments or personal circumstances in your home country may help support your application.",
            ],
          },
        ],
      },
      {
        heading: "Permitted Business Activities in the UK",
        paragraphs: [
          "A UK Business Visitor Visa allows eligible visitors to undertake specific business activities without taking employment in the UK. These activities must comply with the Standard Visitor immigration rules.",
          "Permitted activities include:",
        ],
        bullets: [
          "Attending business meetings, conferences and seminars.",
          "Negotiating and signing business contracts.",
          "Visiting trade fairs to promote your business, without selling products.",
          "Carrying out business site visits and inspections.",
          "Gathering information for your overseas employer.",
          "Receiving work-related training connected to your overseas employment.",
        ],
        subsections: [
          {
            heading: "Visitor Conditions",
            paragraphs: [
              "You may also undertake certain activities remotely for your overseas employer, provided remote working is not the main purpose of your UK visit.",
              "Before travelling, check that your planned activities are permitted under the visitor rules.",
            ],
          },
        ],
      },
      {
        heading: "What You Cannot Do on a Business Visit Visa",
        paragraphs: [
          "A UK Business Visitor Visa does not allow you to take ordinary employment or work freely for a UK company. You must stay within the activities permitted under the Standard Visitor route.",
          "Generally, you cannot:",
        ],
        bullets: [
          "Take a permanent or temporary job in the UK.",
          "Work as a self-employed person or provide services to UK clients, unless a specific permitted activity applies.",
          "Receive payment from a UK source for prohibited work.",
          "Use repeated visits to live in the UK.",
          "Access public funds.",
        ],
        subsections: [
          {
            heading: "Important Visitor Rule",
            paragraphs: [
              "Carrying out activities outside the visitor rules could affect your immigration status and future UK visa applications. Check the rules carefully before accepting any business activity in the UK.",
            ],
          },
        ],
      },
      {
        heading: "Documents for a Business Visitor Visa",
        paragraphs: [
          "Preparing the right documents helps demonstrate the purpose of your visit and your ability to meet the UK visitor requirements. Depending on your circumstances, you may need:",
        ],
        bullets: [
          "Valid passport: A passport valid for your intended stay.",
          "Invitation letter: Details of meetings, conferences or business activities from your UK host.",
          "Employment evidence: Confirmation of your overseas employment or business ownership.",
          "Financial evidence: Bank statements or evidence of sponsorship covering your trip.",
          "Travel details: Your planned dates, accommodation and itinerary.",
          "Business evidence: Contracts, meeting schedules or relevant correspondence.",
          "Previous travel history: Details of previous visits, where relevant.",
        ],
        subsections: [
          {
            heading: "Supporting Evidence",
            paragraphs: [
              "Not every applicant needs every document. Your evidence should be relevant to your circumstances and consistent with the information in your application.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a UK Business Visitor Visa",
        paragraphs: [
          "If you need a Standard Visitor visa for your business trip, you must apply online before travelling to the UK. The main steps are:",
        ],
        bullets: [
          "1. Check your eligibility: Confirm that your planned activities are permitted under the visitor rules.",
          "2. Complete the application: Fill in the online form with accurate personal, travel and business details.",
          "3. Prepare your documents: Gather your passport and relevant supporting evidence.",
          "4. Attend your appointment: Visit a visa application centre to provide your fingerprints and photograph, if required.",
          "5. Wait for a decision: Receive a decision before making final travel arrangements.",
        ],
        subsections: [
          {
            heading: "Application Timing",
            paragraphs: [
              "You can generally apply up to three months before your intended travel date.",
            ],
          },
        ],
      },
      {
        heading: "Business Visitor Visa Processing Time",
        paragraphs: [
          "The standard processing time for a UK Business Visitor Visa application made outside the UK is usually three weeks. This period begins after you have submitted your application, proved your identity and provided the required documents.",
          "Processing may take longer if UKVI needs additional documents, verification or an interview. Priority services may be available for an additional fee, depending on your location.",
          "We recommend applying well before your planned business trip and waiting for your visa decision before booking travel.",
        ],
      },
      {
        heading: "UK Business Visitor Visa Fees",
        paragraphs: [
          "The standard UK Standard Visitor visa fee for a stay of up to six months is £135. This is the usual application fee for overseas visitors applying for a business trip.",
          "Longer-term Standard Visitor visas are also available:",
        ],
        bullets: [
          "2 years: £506",
          "5 years: £903",
          "10 years: £1,128",
        ],
        subsections: [
          {
            heading: "Longer-Term Visitor Visas",
            paragraphs: [
              "These longer-term visas allow multiple visits, but each individual stay is normally limited to six months. The fee is generally non-refundable if your application is refused.",
              "Check the official GOV.UK fee information before applying, as charges may change.",
            ],
          },
        ],
      },
      {
        heading: "Common Reasons for UK Business Visitor Visa Refusals",
        paragraphs: [
          "A UK Business Visitor Visa application may be refused if the applicant fails to demonstrate that they meet the Standard Visitor requirements. Common concerns include:",
        ],
        bullets: [
          "Unclear purpose of the business visit.",
          "Insufficient evidence of available funds.",
          "Inconsistent information in the application.",
          "Weak evidence of employment or business commitments overseas.",
          "Doubts about the intention to leave the UK.",
          "Plans to undertake activities that are not permitted under visitor rules.",
        ],
        subsections: [
          {
            heading: "Addressing Refusal Concerns",
            paragraphs: [
              "Providing accurate information and relevant supporting documents can help address these concerns. If you have previously received a refusal, you should understand the reasons before submitting another application.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Visa Direct Immigration provides guidance to individuals and business representatives planning to visit the UK. We can help you understand the visitor requirements and prepare your application.",
          "Our support may include:",
        ],
        bullets: [
          "Reviewing your planned business activities.",
          "Explaining the relevant visa requirements.",
          "Identifying suitable supporting documents.",
          "Providing guidance with the online application.",
          "Helping you understand previous visa refusal reasons.",
        ],
        subsections: [
          {
            heading: "Business Visit Support",
            paragraphs: [
              "Whether you are attending business meetings, negotiating contracts or visiting UK partners, our team can discuss your circumstances and explain the support available.",
            ],
          },
          {
            heading: "Our Locations",
          },
        ],
      },
      {
        heading: "Frequently Asked Questions About the UK Business Visitor Visa",
        subsections: [
          {
            heading: "1. Do I need a visa for a business visit to the UK?",
            paragraphs: [
              "It depends on your nationality. Some travellers need a Standard Visitor visa, while others may need an Electronic Travel Authorisation (ETA) or can visit without either. Check the entry requirements before travelling.",
            ],
          },
          {
            heading: "2. How long can I stay in the UK on a business visit?",
            paragraphs: [
              "Most Standard Visitor visa holders can stay for up to six months per visit, subject to the permission granted and visitor conditions.",
            ],
          },
          {
            heading: "3. Can I work in the UK on a Business Visitor Visa?",
            paragraphs: [
              "No. You cannot take ordinary employment or work for a UK company under this route. However, certain business activities are permitted under the visitor rules.",
            ],
          },
          {
            heading: "4. Can I attend business meetings and conferences?",
            paragraphs: [
              "Yes. Attending business meetings, conferences, seminars and contract negotiations are permitted activities under the Standard Visitor route.",
            ],
          },
          {
            heading: "5. Can I receive payment during my business visit?",
            paragraphs: [
              "Generally, you cannot receive payment from a UK source for ordinary work. However, specific permitted paid engagements and activities have exceptions under the visitor rules.",
            ],
          },
          {
            heading: "6. Can I extend my Business Visitor Visa?",
            paragraphs: [
              "In most cases, you cannot extend a standard six-month visit simply to continue your business activities. Limited exceptions exist, so check whether your circumstances qualify.",
            ],
          },
        ],
      },
      {
        heading: "Need Help with Your UK Business Visit Visa?",
        paragraphs: [
          "Planning a business trip to the United Kingdom? Understanding the visitor requirements and preparing the correct documents can make the application process easier to navigate.",
          "Visa Direct Immigration can guide you through the UK Business Visitor Visa process, from understanding your eligibility to preparing your supporting documents.",
          "Contact our team to discuss your business travel plans and the immigration guidance available for your circumstances.",
        ],
      },
    ],
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
    category: "Personal Immigration",
    shortDescription:
      "Get help with your UK Student Visa application, eligibility, documents, fees, extensions and Home Office requirements.",
    heroTagline: "Prepare your UK Student Visa application with clear guidance from CAS to decision.",
    seoTitle: "Student Visa UK Application Help | Visa Direct Immigration",
    seoDescription:
      "Get help with your UK Student Visa application. Our team provides guidance on eligibility, documents, fees, extensions and Home Office requirements.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/uk-student-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK Student Visa application support",
        caption: "Support with your UK Student Visa application",
      },
    ],
    contentSections: [
      {
        heading: "Student Visa UK",
        paragraphs: [
          "Planning to study in the UK? A Student Visa UK allows eligible international students aged 16 or over to study at an approved educational institution. However, the application involves several requirements, including securing a place with a licensed student sponsor, meeting the financial conditions and providing the correct supporting documents.",
          "Visa Direct Immigration provides UK Student Visa application support to help students understand their eligibility, prepare their applications and navigate the Home Office process. Whether you are applying for the first time or need to extend your existing visa, our team can guide you through the relevant requirements.",
        ],
      },
      {
        heading: "UK Student Visa Application Services",
        paragraphs: [
          "A Student Visa application must meet the Home Office requirements. Errors involving your Confirmation of Acceptance for Studies, financial evidence or immigration history can cause complications.",
          "Our student visa services include:",
        ],
        bullets: [
          "Reviewing your eligibility for the Student route.",
          "Checking your Confirmation of Acceptance for Studies (CAS).",
          "Preparing financial and supporting documents.",
          "Providing guidance on the online application.",
          "Explaining Student Visa extension requirements.",
          "Advising on dependant applications and permitted working conditions.",
          "Discussing possible visa options after completing your studies.",
        ],
        subsections: [
          {
            heading: "Student Visa Guidance",
            paragraphs: [
              "If you are looking for a student visa lawyer or solicitor, it is important to check the professional qualifications and authorisation of anyone providing regulated legal services. Visa Direct Immigration can discuss the application guidance and support available for your circumstances.",
              "Need help with your UK Student Visa? Contact our team to discuss your application.",
            ],
          },
        ],
      },
      {
        heading: "Student Visa Requirements UK",
        paragraphs: [
          "To qualify for a UK Student Visa, you must satisfy the relevant eligibility conditions under the Immigration Rules.",
          "The main requirements include:",
          "Age: You must generally be at least 16 years old. Applicants aged 16 or 17 may also need written consent from their parents or legal guardians.",
          "Confirmation of Acceptance for Studies: You must have an unconditional offer for an eligible course from a licensed student sponsor. Your education provider will issue a CAS reference, which you need before submitting your application.",
          "Eligible course: Your course must meet the Student route requirements. Eligible options include qualifying degree-level courses, certain below-degree-level courses and recognised foundation or pre-sessional programmes.",
          "Financial requirement: You must demonstrate that you can pay your outstanding course fees and support yourself during your studies. The amount depends on where you will be studying and your individual circumstances.",
          "English language requirement: You must demonstrate the required English language ability. Your university may assess your English or require an approved English language test, depending on the course and applicable rules.",
          "You must also meet the relevant immigration suitability requirements and provide accurate information throughout your application.",
        ],
      },
      {
        heading: "Documents Required for a UK Student Visa",
        paragraphs: [
          "Preparing the correct documents is an important part of your application. The documents required may vary depending on your nationality, education provider and personal circumstances.",
          "Common documents include:",
        ],
        bullets: [
          "A valid passport or travel document.",
          "Your Confirmation of Acceptance for Studies reference number.",
          "Evidence of sufficient funds, where required.",
          "Academic qualifications and transcripts, if requested.",
          "English language test results, where applicable.",
          "Evidence of parental consent for applicants aged 16 or 17.",
          "Written consent from a financial sponsor, where applicable.",
          "ATAS certificate, if your course and nationality require one.",
        ],
        subsections: [
          {
            heading: "Student Visa Evidence",
            paragraphs: [
              "You may also need certified translations for documents that are not in English or Welsh. Your CAS should contain the relevant course information and confirm how certain requirements have been met.",
              "Not sure which documents apply to your circumstances? Our team can help you prepare your Student Visa application evidence.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Student Visa UK",
        paragraphs: [
          "The UK Student Visa application is completed online. You can generally apply from outside the UK or switch from another eligible immigration category while already in the country.",
          "The application process involves:",
        ],
        bullets: [
          "1. Secure your university offer: Receive an unconditional offer from a licensed student sponsor.",
          "2. Obtain your CAS: Your education provider issues a Confirmation of Acceptance for Studies reference.",
          "3. Prepare your documents: Gather your passport, financial evidence, qualifications and other required documents.",
          "4. Complete the online application: Provide accurate information through the official GOV.UK application process.",
          "5. Pay the fees: Pay the visa application fee and Immigration Health Surcharge.",
          "6. Prove your identity: Use the UK Immigration: ID Check app or attend a biometric appointment, depending on your circumstances.",
          "7. Wait for a decision: UK Visas and Immigration will assess your application and notify you of the outcome.",
        ],
        subsections: [
          {
            heading: "Application Timing",
            paragraphs: [
              "Applicants applying from outside the UK can generally submit their applications up to six months before their course begins. Those applying from inside the UK can generally apply up to three months before the course starts, subject to the relevant switching or extension rules.",
            ],
          },
        ],
      },
      {
        heading: "Student Visa UK Cost",
        paragraphs: [
          "The Student Visa UK application fee is currently £558, whether you apply from outside or inside the UK.",
          "You must also pay the Immigration Health Surcharge (IHS), which is charged separately.",
          "Application expense",
          "Current amount",
          "Student Visa application fee",
          "£558",
          "Immigration Health Surcharge per year",
          "£776",
          "The total healthcare surcharge depends on the length of permission granted. You should also budget for course fees, English language tests and document-related expenses where applicable.",
        ],
      },
      {
        heading: "UK Student Visa Processing Time",
        paragraphs: [
          "The UK Student Visa processing time depends on where you submit your application.",
          "The usual Home Office processing times are:",
        ],
        bullets: [
          "Outside the UK: Around 3 weeks.",
          "Inside the UK: Around 8 weeks.",
        ],
        subsections: [
          {
            heading: "Processing Times",
            paragraphs: [
              "These are standard processing estimates, not guaranteed decision dates. Additional checks, interviews or requests for supporting evidence may cause delays. Priority services may be available for eligible applications at an additional cost.",
            ],
          },
        ],
      },
      {
        heading: "UK Student Visa Working Hours",
        paragraphs: [
          "International students can work in the UK, but the permitted hours depend on their course and education provider.",
          "The usual restrictions are:",
          "Type of study",
          "Permitted work during term time",
          "Full-time degree-level course at an eligible higher education provider",
          "Up to 20 hours per week",
          "Full-time below-degree-level course at an eligible higher education provider",
          "Up to 10 hours per week",
          "Other courses, including part-time study",
          "Generally no employment permitted",
          "Eligible students can generally work full-time outside term time, subject to their visa conditions.",
          "Student Visa holders cannot normally be self-employed, work as professional sportspersons or work as sports coaches. You should always check the conditions attached to your individual immigration permission before accepting employment.",
        ],
      },
      {
        heading: "How to Extend a UK Student Visa",
        paragraphs: [
          "You may be able to apply for a Student Visa extension if you need more time to complete your current course or want to study another eligible course in the UK.",
          "To extend your visa, you generally need to:",
        ],
        bullets: [
          "Already hold a Student Visa or Tier 4 (General) permission.",
          "Have an unconditional offer from a licensed student sponsor.",
          "Obtain a new CAS for your course.",
          "Meet the academic progress requirement, unless an exception applies.",
          "Demonstrate sufficient funds if the financial requirement applies.",
          "Submit your application before your current permission expires.",
        ],
        subsections: [
          {
            heading: "Extension Timing and Cost",
            paragraphs: [
              "Your new course must generally begin within 28 days of your current visa expiring, and you must apply within six months of receiving your CAS.",
              "The current extension application fee is £558, plus the applicable Immigration Health Surcharge. A standard in-country extension decision usually takes around eight weeks.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your Student Visa",
        paragraphs: [
          "Applying for a UK Student Visa involves several important steps, from securing your CAS to preparing financial evidence and completing the online application.",
          "Visa Direct Immigration provides application guidance and support to help you understand the requirements, organise your documents and address potential issues before submission. We can also discuss extension options if you need additional time to complete your studies.",
          "Our team supports applicants in Birmingham, Bristol, Reading and across the UK.",
          "Contact Visa Direct Immigration today to discuss your Student Visa application and book your immigration consultation.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Can I apply for a UK Student Visa without a CAS?",
            paragraphs: [
              "No. You generally need a valid Confirmation of Acceptance for Studies issued by a licensed student sponsor before submitting your Student Visa application.",
            ],
          },
          {
            heading: "How much bank balance is required for a UK Student Visa?",
            paragraphs: [
              "You generally need enough money to cover outstanding course fees and living costs of £1,529 per month in London or £1,171 per month outside London, for up to nine months. The required funds must usually be held for 28 consecutive days. Exemptions may apply.",
            ],
          },
          {
            heading: "Can I bring my family on a UK Student Visa?",
            paragraphs: [
              "Some students can bring eligible dependants, but most international students cannot. The main exceptions include qualifying postgraduate research students and certain government-sponsored students.",
            ],
          },
          {
            heading: "Can I switch from a Student Visa to a Graduate Visa?",
            paragraphs: [
              "Yes. If you successfully complete an eligible course and meet the Graduate route requirements, you may be able to apply for a Graduate Visa from inside the UK before your Student permission expires.",
            ],
          },
          {
            heading: "What happens if my UK Student Visa application is refused?",
            paragraphs: [
              "The refusal decision will explain the reasons for the outcome. Depending on the circumstances, you may be able to request an administrative review or consider submitting a fresh application. You should understand the refusal grounds before deciding what to do next.",
            ],
          },
        ],
      },
    ],
    iconName: "BookOpen",
    keyFeatures: [
      "Confirmation of Acceptance for Studies (CAS) guidance",
      "Financial evidence and 28-day funds guidance",
      "Student Visa extension and dependant guidance",
      "Post-study Graduate Visa options discussion",
    ],
    eligibilityRequirements: [
      "At least 16 years old for the Student route",
      "Unconditional offer from a licensed student sponsor",
      "Sufficient funds for outstanding fees and living costs",
      "Required English language ability and immigration suitability",
    ],
    documentsRequired: [
      "Valid passport or travel document",
      "Confirmation of Acceptance for Studies reference",
      "Financial evidence, academic qualifications and English evidence",
      "Parental, financial sponsor or ATAS evidence where applicable",
    ],
    processSteps: [
      {
        title: "Offer and CAS",
        description: "Confirming your unconditional offer and Confirmation of Acceptance for Studies.",
      },
      {
        title: "Evidence Preparation",
        description: "Preparing financial, academic, identity and supporting documents.",
      },
      {
        title: "Online Application",
        description: "Submitting the application, fees, Immigration Health Surcharge and identity checks.",
      },
      {
        title: "Decision and Next Steps",
        description: "Understanding the outcome and discussing extensions or post-study options.",
      },
    ],
    faqs: [],
  },
  {
    id: "uk-ancestry-visa",
    slug: "uk-ancestry-visa",
    title: "UK Ancestry Visa",
    category: "Specialty Immigration",
    shortDescription:
      "Applying for a UK Ancestry Visa? Get application support with eligibility, family documents, financial evidence, fees and Home Office requirements.",
    heroTagline:
      "Understand your UK Ancestry Visa eligibility, documents and application requirements.",
    seoTitle: "Apply for a UK Ancestry Visa | Application Support",
    seoDescription:
      "Applying for a UK Ancestry Visa? Get application support with eligibility, family documents, financial evidence, fees and Home Office requirements.",
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
    contentSections: [
      {
        heading: "UK Ancestry Visa",
        paragraphs: [
          "A UK Ancestry Visa provides eligible Commonwealth citizens with the opportunity to live and work in the United Kingdom based on their family history. If you have a grandparent who was born in the UK, you may be able to apply, provided you also meet the other eligibility requirements.",
          "Although the family connection is central to the application, you must also provide evidence of your ancestry, demonstrate that you can support yourself and show that you intend to work in the UK. Visa Direct Immigration provides guidance throughout the application process, helping applicants understand the requirements and prepare the relevant documents.",
        ],
      },
      {
        heading: "UK Ancestry Visa Application Support",
        paragraphs: [
          "Applying for a UK Ancestry Visa involves more than proving that you have a British-born grandparent. Your application must demonstrate that you meet the nationality, family relationship, financial and employment requirements set by the Home Office.",
          "Visa Direct Immigration can help you understand the application requirements, identify the documents relevant to your circumstances and prepare your application for submission. We can also explain the process for family members who wish to apply as your dependants.",
          "Whether you are applying from outside the UK for the first time or looking into extending an existing Ancestry Visa, getting the requirements right is important.",
          "Need guidance with your application? Contact our team to discuss your UK Ancestry Visa circumstances.",
        ],
      },
      {
        heading: "UK Ancestry Visa Requirements",
        paragraphs: [
          "To qualify for a UK Ancestry Visa, you must meet specific requirements relating to your age, nationality, family history, finances and intention to work.",
          "The main UK Ancestry Visa requirements include:",
        ],
        bullets: [
          "Age: You must be at least 17 years old when you intend to arrive in the UK.",
          "Nationality: You must be a Commonwealth citizen or fall within another nationality category specified by the Immigration Rules.",
          "Ancestry: You must have a grandparent who was born in the UK, the Channel Islands or the Isle of Man.",
          "Employment intention: You must be able and intend to work in the UK, whether as an employee or through self-employment.",
          "Financial support: You must be able to maintain and accommodate yourself, and any dependants, without relying on public funds.",
          "Application location: Your first UK Ancestry Visa application must be made from outside the UK.",
        ],
        paragraphsAfterTable: [
          "Meeting the family history requirement alone does not guarantee approval. The Home Office will consider the evidence provided and whether you satisfy all relevant Immigration Rules.",
        ],
      },
      {
        heading: "Who Can Apply for a UK Ancestry Visa?",
        paragraphs: [
          "You may be eligible if you are a qualifying Commonwealth citizen and can establish a direct family connection to a grandparent born in the UK or the Islands recognised under the route.",
          "The grandparents can be related to you through either your maternal or paternal side. You will generally need to establish the family connection through the relevant birth certificates.",
          "For example, if your maternal grandmother was born in England, you may be able to rely on that connection. You would need to provide evidence linking your birth to your mother and your mother to your grandmother.",
          "Adoption can also be relevant in certain circumstances, but specific rules apply to adopted applicants and family relationships. The documents must establish that the relationship qualifies under the Immigration Rules.",
          "You must also be able to show that you intend to take up employment or self-employment in the UK. You do not necessarily need to have a confirmed job offer before applying, but your plans should be genuine and supported by appropriate evidence.",
        ],
      },
      {
        heading: "UK Ancestry Visa Documents Required",
        paragraphs: [
          "Providing the correct ancestry and supporting documents is an important part of the application. The Home Office needs to be satisfied that your family connection is genuine and that you meet the other eligibility conditions.",
          "Depending on your circumstances, the documents may include:",
        ],
        bullets: [
          "Current passport: A valid passport or travel document showing your identity and nationality.",
          "Your full birth certificate: This should normally include your parents' details.",
          "Parent's full birth certificate: The certificate of the parent through whom you are claiming ancestry.",
          "Grandparent's full birth certificate: Evidence confirming that your grandparent was born in the UK, the Channel Islands or the Isle of Man.",
          "Financial evidence: Recent bank statements or other acceptable evidence showing that you can support yourself and your dependants.",
          "Employment plans: Evidence of your intention to work, such as job enquiries, employment opportunities or a business plan if you intend to become self-employed.",
          "Name change evidence: Relevant marriage, deed poll or other documents if names differ across your records.",
          "Adoption documents: Where the ancestry claim involves an adoption, the relevant adoption records may be required.",
          "Family documents: Evidence of your relationship with a partner or children if they are applying with you.",
        ],
        paragraphsAfterTable: [
          "Financial evidence must meet the Home Office's document requirements, including the applicable date rules. Additional documents may be needed depending on your family history and personal circumstances.",
          "Visa Direct Immigration can help you review the documents relevant to your case and identify potential gaps before submission.",
          "Have questions about your ancestry documents? Book a consultation to discuss the evidence you may need.",
        ],
      },
      {
        heading: "How to Apply for a UK Ancestry Visa",
        paragraphs: [
          "The UK Ancestry Visa application process involves completing an online application, providing supporting evidence and attending a biometric appointment.",
        ],
        subsections: [
          { heading: "1. Check your eligibility", paragraphs: ["Confirm that you meet the nationality, age, ancestry, financial and employment requirements before starting the application."] },
          { heading: "2. Collect your supporting documents", paragraphs: ["Obtain the relevant full birth certificates and other evidence linking you to your UK-born grandparent. Prepare financial documents and evidence of your plans to work."] },
          { heading: "3. Complete the online application", paragraphs: ["Apply through the official UK government application service from outside the UK. You can normally apply up to three months before your intended travel date."] },
          { heading: "4. Pay the application fee", paragraphs: ["Pay the relevant visa application fee and any applicable Immigration Health Surcharge."] },
          { heading: "5. Attend your biometric appointment", paragraphs: ["You will usually need to attend an appointment at a visa application centre to provide your fingerprints and photograph. You may also need to submit your supporting documents through the relevant service."] },
          { heading: "6. Wait for the decision", paragraphs: ["The Home Office will assess your application and supporting evidence. If approved, you will receive permission to travel to the UK under the Ancestry route."] },
        ],
      },
      {
        heading: "UK Ancestry Visa Fees in 2026",
        paragraphs: [
          "The cost of a UK Ancestry Visa includes the application fee and the Immigration Health Surcharge. The amount you pay will depend on whether you are applying for the initial visa or an extension, as well as the length of permission granted.",
        ],
        table: {
          headers: ["Application type", "Application fee"],
          rows: [
            ["Initial UK Ancestry Visa", "£726"],
            ["UK Ancestry Visa extension", "£1,407"],
            ["Indefinite Leave to Remain", "£3,226"],
          ],
        },
        paragraphsAfterTable: [
          "The Immigration Health Surcharge is payable separately where applicable. The total amount will depend on the visa period and the number of applicants, including any dependants.",
          "You should check the official GOV.UK fee information before submitting your application, as immigration fees can change.",
        ],
      },
      {
        heading: "UK Ancestry Visa Processing Time",
        paragraphs: [
          "A UK Ancestry Visa application made from outside the UK usually receives a decision within three weeks after you have completed the identity and document submission requirements.",
          "If you are applying to extend an existing UK Ancestry Visa from within the UK, the usual processing time is around eight weeks.",
          "These are standard processing estimates, not guaranteed decision dates. Applications may take longer if the Home Office needs further information, additional checks or clarification about your documents.",
          "You should allow enough time before making travel arrangements and avoid booking non-refundable travel before receiving a decision.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Understanding the UK Ancestry Visa rules and preparing the right evidence can take time, particularly when documents come from different generations or countries.",
          "Visa Direct Immigration provides application guidance to help you understand the process and prepare for the relevant requirements. Depending on your circumstances, support may include:",
        ],
        bullets: [
          "Reviewing your eligibility and family history.",
          "Explaining the birth certificates and ancestry evidence required.",
          "Helping you identify relevant financial and employment documents.",
          "Guiding you through the online application process.",
          "Explaining dependant applications and extension options.",
          "Providing guidance on the route from an Ancestry Visa to settlement.",
        ],
        paragraphsAfterTable: [
          "If you are searching for a UK Ancestry Visa lawyer or solicitor, make sure you check the individual's professional qualifications and authorisation before instructing them. You should understand who will handle your application and what services they are authorised to provide.",
          "Visa Direct Immigration offers immigration application guidance from its offices in Birmingham, Bristol and Reading, with support for applicants across the UK.",
          "Book Your Immigration Consultation to discuss your eligibility, documents and next steps.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          { heading: "Can I apply for a UK Ancestry Visa if my grandparent was born in the UK?", paragraphs: ["Yes, you may qualify if you are a qualifying Commonwealth citizen, are at least 17 and can provide evidence of your grandparent's birth in the UK, Channel Islands or Isle of Man. You must also meet the financial and employment requirements."] },
          { heading: "Can I work in the UK on an Ancestry Visa?", paragraphs: ["Yes. A UK Ancestry Visa generally allows you to work in paid employment, undertake voluntary work or become self-employed. You can also study, although additional requirements may apply to certain courses."] },
          { heading: "Can I bring my spouse and children to the UK?", paragraphs: ["Yes. Your eligible partner and dependent children may be able to apply to join you as dependants. Each family member must meet the relevant requirements and provide supporting documents."] },
          { heading: "Can I extend my UK Ancestry Visa after five years?", paragraphs: ["Yes. You may be able to extend your permission for another five years if you continue to meet the route requirements. If you have completed five years of qualifying residence, you may also be eligible to apply for Indefinite Leave to Remain."] },
          { heading: "Can I apply for British citizenship after a UK Ancestry Visa?", paragraphs: ["A UK Ancestry Visa does not automatically lead to British citizenship. You will generally need to qualify for Indefinite Leave to Remain first. You may then be able to apply for citizenship if you meet the relevant residence, status and other naturalisation requirements."] },
        ],
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
    title: "Charity Worker Visa UK",
    category: "Business Immigration",
    shortDescription:
      "Need a Charity Worker Visa UK? Get application support with eligibility, sponsorship, documents and Home Office requirements from Visa Direct Immigration.",
    heroTagline:
      "Understand your UK Charity Worker Visa eligibility, sponsorship and application requirements.",
    seoTitle: "Charity Worker Visa UK Services | Application Support",
    seoDescription:
      "Need a Charity Worker Visa UK? Get application support with eligibility, sponsorship, documents and Home Office requirements from Visa Direct Immigration.",
    iconName: "ShieldCheck",
    keyFeatures: [
      "Eligibility assessment for the Charity Worker route",
      "Sponsorship and Certificate of Sponsorship guidance",
      "Financial and supporting document review",
      "Application, conditions, extension and dependant guidance",
    ],
    eligibilityRequirements: [
      "You must be at least 18 years old when you apply",
      "A valid Certificate of Sponsorship from an approved charity sponsor",
      "Genuine unpaid voluntary work that directly contributes to the charity's purpose",
      "At least £1,270 in savings held for 28 consecutive days, unless exempt",
      "Compliance with previous visa history and immigration suitability requirements",
    ],
    documentsRequired: [
      "Certificate of Sponsorship reference number",
      "Valid passport or travel document",
      "Bank statements showing the required maintenance funds, unless exempt",
      "Evidence of the voluntary role and sponsoring charity",
      "Supporting information for any dependant applications",
    ],
    processSteps: [
      {
        title: "Find an Eligible Charity Sponsor",
        description: "Secure a suitable voluntary position with an organisation holding the appropriate sponsor licence.",
      },
      {
        title: "Obtain Your Certificate of Sponsorship",
        description: "Your sponsor assigns a CoS containing details of your role and sponsorship.",
      },
      {
        title: "Prepare and Submit Your Application",
        description: "Check eligibility, prepare documents, complete the online application and pay the required fees.",
      },
      {
        title: "Prove Identity and Await a Decision",
        description: "Use the ID Check app or attend a biometric appointment before UK Visas and Immigration assesses your application.",
      },
    ],
    contentSections: [
      {
        heading: "Charity Worker Visa UK",
        paragraphs: [
          "Would you like to come to the UK to undertake voluntary work for a charitable organisation? The Charity Worker Visa UK route allows eligible individuals to carry out temporary unpaid voluntary work with an approved UK sponsor.",
          "However, obtaining this visa involves meeting specific immigration requirements. You must have an eligible voluntary role, receive a Certificate of Sponsorship and demonstrate that you can support yourself during your stay.",
          "Visa Direct Immigration provides UK Charity Worker Visa application support to help applicants understand their eligibility, prepare supporting documents and navigate the Home Office application process.",
          "Contact Visa Direct Immigration to discuss your eligibility and application requirements.",
        ],
      },
      {
        heading: "UK Charity Worker Visa Application Services",
        paragraphs: [
          "Applying for a Temporary Charity Worker Visa involves more than securing a voluntary position. Your sponsoring organisation, the nature of your work and your personal circumstances must meet the relevant immigration requirements.",
          "Our Charity Worker Visa services can help with:",
        ],
        bullets: [
          "Assessing your eligibility under the Charity Worker route.",
          "Understanding sponsorship and Certificate of Sponsorship requirements.",
          "Reviewing your voluntary role and supporting evidence.",
          "Preparing financial and personal documents.",
          "Completing the online visa application.",
          "Understanding visa conditions, extensions and dependant applications.",
          "Whether you are applying from overseas or already hold permission under the Charity Worker route, our team can provide guidance based on your circumstances.",
        ],
      },
      {
        heading: "Charity Worker Visa UK Requirements",
        paragraphs: [
          "To qualify for a UK Charity Worker Visa, you must meet the eligibility conditions under the Temporary Work immigration route.",
          "The main requirements include:",
        ],
        bullets: [
          "Age: You must be at least 18 years old when you apply.",
          "Eligible charity sponsor: You must have an offer of voluntary work from a UK organisation authorised to sponsor Charity Workers. Your sponsor must hold the appropriate Home Office sponsor licence.",
          "Certificate of Sponsorship: Your sponsor must issue you a valid Certificate of Sponsorship containing details of your voluntary role and proposed stay. You must normally use the reference within three months of it being assigned.",
          "Genuine voluntary work: Your role must involve unpaid voluntary fieldwork that directly contributes to the charitable purpose of your sponsoring organisation. Ordinary administrative, retail, sales, fundraising and office maintenance roles generally do not qualify under this route.",
          "Financial requirement: You generally need at least £1,270 available to support yourself in the UK. You must normally have held this money for 28 consecutive days, with the final day falling within 31 days of your application. You may be exempt if you have already lived in the UK with valid permission for at least 12 months or your A-rated sponsor certifies your maintenance.",
          "Previous visa history: You may not qualify if you have held a Charity Worker or Religious Worker Visa during the previous 12 months, unless you can demonstrate that you were outside the UK throughout that period.",
          "You must also satisfy the relevant immigration suitability requirements and genuinely intend to undertake the voluntary role described in your sponsorship certificate.",
        ],
      },
      {
        heading: "How to Apply for a Charity Worker Visa UK",
        paragraphs: [
          "The UK Charity Worker Visa application process involves securing sponsorship and submitting an online application with the required supporting information.",
        ],
        subsections: [
          { heading: "1. Find an eligible charity sponsor", paragraphs: ["Secure a suitable voluntary position with an organisation holding the appropriate sponsor licence."] },
          { heading: "2. Obtain your Certificate of Sponsorship", paragraphs: ["Your organisation assigns a CoS containing details of your role and sponsorship."] },
          { heading: "3. Check your eligibility", paragraphs: ["Confirm that you meet the age, financial and immigration history requirements."] },
          { heading: "4. Prepare your documents", paragraphs: ["Gather your passport, financial evidence and other supporting information."] },
          { heading: "5. Complete the online application", paragraphs: ["Apply through the official GOV.UK Temporary Work application process."] },
          { heading: "6. Pay the required fees", paragraphs: ["Pay the visa application fee and Immigration Health Surcharge, where applicable."] },
          { heading: "7. Prove your identity", paragraphs: ["Use the UK Immigration: ID Check app or attend a biometric appointment, depending on your circumstances."] },
          { heading: "8. Wait for a decision", paragraphs: ["UK Visas and Immigration will assess your application. You can normally apply up to three months before the start date stated on your Certificate of Sponsorship, which must also be valid when you submit your application."] },
        ],
      },
      {
        heading: "Charity Worker Visa UK Cost in 2026",
        paragraphs: [
          "The cost of a UK Charity Worker Visa includes the application fee and Immigration Health Surcharge.",
        ],
        table: {
          headers: ["Application expense", "Amount"],
          rows: [
            ["Charity Worker Visa application fee", "£340"],
            ["Immigration Health Surcharge per year", "£1,035"],
          ],
        },
        paragraphsAfterTable: [
          "The Immigration Health Surcharge depends on the length of permission granted and the applicable charging rules. Applicants and eligible dependants must each pay their own relevant fees.",
          "Additional expenses may include document translations, tuberculosis tests where required and travel costs. Always check the latest Home Office fees before applying.",
        ],
      },
      {
        heading: "UK Charity Worker Visa Processing Time",
        paragraphs: [
          "The UK Charity Worker Visa processing time depends on where you submit your application.",
          "The usual processing estimates are:",
        ],
        bullets: [
          "Outside the UK: Around 3 weeks.",
          "Inside the UK: Around 8 weeks.",
          "These are standard processing estimates rather than guaranteed decision dates. Additional checks, interviews or requests for further evidence may cause delays. Faster processing options may be available for eligible applicants at an additional cost.",
        ],
      },
      {
        heading: "How Long Can You Stay on a Temporary Charity Worker Visa?",
        paragraphs: [
          "A Temporary Charity Worker Visa allows you to stay in the UK for up to 12 months or the period stated on your Certificate of Sponsorship plus 14 days, whichever is shorter.",
          "You may be able to extend your visa from inside the UK if you continue to meet the eligibility requirements. However, your total stay under the route cannot exceed the permitted 12-month maximum.",
          "Your permission is linked to your sponsored voluntary role. You cannot receive payment for the work, take a permanent job or access public funds. Reasonable expenses and appropriate accommodation may be permitted under the relevant rules.",
          "The Charity Worker route is not a direct route to Indefinite Leave to Remain. If you intend to remain in the UK after your permission ends, you may need to explore another eligible immigration category.",
        ],
      },
      {
        heading: "Can You Bring Dependants on a UK Charity Worker Visa?",
        paragraphs: [
          "Yes. Eligible Charity Worker Visa applicants can bring their partner and dependent children to the UK, provided they meet the relevant dependant requirements.",
          "Your partner will generally need to demonstrate that your relationship meets the immigration rules. Children must also satisfy the applicable age, relationship and care requirements.",
          "Additional maintenance funds are normally required for dependants unless the relevant sponsor maintenance arrangements apply. Their visa permission will generally be linked to your own immigration permission.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your Charity Worker Visa",
        paragraphs: [
          "Understanding the Temporary Charity Worker Visa requirements and preparing the correct application can be challenging, particularly when sponsorship and financial evidence are involved.",
          "Visa Direct Immigration provides application guidance to help you:",
        ],
        bullets: [
          "Assess your eligibility for the Charity Worker route.",
          "Understand your sponsor and Certificate of Sponsorship requirements.",
          "Organise the documents needed for your application.",
          "Understand the application process and relevant fees.",
          "Explore extension and other immigration options where applicable.",
          "We support applicants in Birmingham, Bristol, Reading and across the UK.",
          "Ready to start your UK Charity Worker Visa application? Contact Visa Direct Immigration today and book your immigration consultation.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          { heading: "Who is eligible for a UK Charity Worker Visa?", paragraphs: ["Applicants aged 18 or over may qualify if they have a valid Certificate of Sponsorship from an approved charitable organisation, intend to undertake eligible unpaid voluntary work and meet the financial and immigration requirements."] },
          { heading: "Can I apply for a Charity Worker Visa without a sponsor?", paragraphs: ["No. You must have a valid Certificate of Sponsorship from an organisation authorised to sponsor Charity Workers before applying."] },
          { heading: "Can I receive a salary on a Temporary Charity Worker Visa?", paragraphs: ["No. The role must involve unpaid voluntary work. However, reasonable expenses and appropriate accommodation may be permitted under the relevant rules."] },
          { heading: "Can I extend my UK Charity Worker Visa?", paragraphs: ["Yes. You may apply for an extension from inside the UK before your current permission expires, provided you continue to meet the requirements. Your total stay cannot exceed 12 months under this route."] },
          { heading: "Can a Charity Worker Visa lead to permanent residence?", paragraphs: ["No. The Charity Worker route does not lead directly to settlement. You may need to qualify for another immigration route if you wish to remain in the UK longer term."] },
        ],
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
    title: "UK Settlement Visa",
    category: "Personal Immigration",
    shortDescription: "Join eligible family members in the UK with guidance on settlement visa applications and requirements.",
    heroTagline: "Understand your UK Settlement Visa options and prepare your family application with confidence.",
    seoTitle: "UK Settlement Visa Application Support | Visa Direct",
    seoDescription:
      "Need a UK Settlement Visa? Get guidance on spouse and family visa requirements, documents, application fees and processing times.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/uk-settlement-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK settlement visa and family immigration documents",
        caption: "Guidance for family settlement applications and supporting evidence",
      },
    ],
    contentSections: [
      {
        heading: "UK Settlement Visa",
        paragraphs: [
          "A UK Settlement Visa can allow eligible individuals to join family members who are living permanently in the United Kingdom. Whether you are applying to join your spouse, partner, child or another qualifying relative, you must meet the relevant immigration requirements and provide supporting evidence.",
          "The application process can involve relationship checks, financial requirements, English language evidence and several supporting documents. Visa Direct Immigration provides guidance and application support to help you understand the requirements, prepare your paperwork and navigate the process.",
        ],
      },
      {
        heading: "UK Settlement Visa Application Support",
        paragraphs: [
          "Applying for a UK Settlement Visa requires careful preparation. Choosing the correct application route and providing accurate evidence can help you avoid common mistakes that may delay or affect your application.",
          "Visa Direct Immigration can assist you with:",
        ],
        bullets: [
          "Reviewing your circumstances and identifying the relevant visa route.",
          "Understanding the eligibility and financial requirements.",
          "Preparing relationships and supporting documents.",
          "Completing the online application process.",
          "Understanding application fees and biometric appointment requirements.",
        ],
        subsections: [
          {
            heading: "Settlement Consultation",
            paragraphs: [
              "Whether you are applying from outside the UK or need guidance about your family immigration options, our team can help you understand the steps involved.",
              "Planning to join your family in the UK? Book an immigration consultation to discuss your application.",
            ],
          },
        ],
      },
      {
        heading: "UK Settlement Visa Requirements",
        paragraphs: [
          "The settlement visa UK requirements depend on your relationship with the person you intend to join and their immigration status. For a standard spouse or partner application, you generally need to meet the following conditions:",
        ],
        bullets: [
          "Eligible sponsor: Your partner must usually be a British or Irish citizen, settled in the UK or hold another qualifying status.",
          "Genuine relationship: You must be married, in a recognised civil partnership or meet the requirements for an eligible unmarried partner relationship.",
          "Intention to live together: You and your partner must intend to live together permanently in the UK.",
          "Financial requirement: You must meet the applicable income or savings requirement. For many new partner applications, the usual combined income threshold is £29,000 per year.",
          "English language: You must demonstrate the required English language ability unless an exemption applies.",
          "Accommodation: You must have suitable accommodation available in the UK without relying on prohibited public funds.",
        ],
        subsections: [
          {
            heading: "Other Family Routes",
            paragraphs: [
              "Different conditions apply to child, parent and adult dependent relative applications. Your eligibility should therefore be assessed according to the specific family route.",
            ],
          },
        ],
      },
      {
        heading: "Who Can Apply for a UK Settlement Visa?",
        paragraphs: [
          "Several family categories may qualify for a UK family visa, depending on the sponsor's status and the applicant's circumstances.",
          "You may be able to apply as:",
        ],
        bullets: [
          "Spouse or civil partner: If you are legally married or in a recognised civil partnership with an eligible person in the UK.",
          "Unmarried partner: If you have been in a relationship similar to marriage or civil partnership for at least two years and meet the relevant evidence requirements.",
          "Fiancé or proposed civil partner: If you intend to marry or enter a civil partnership in the UK within six months of arrival.",
          "Child: If you meet the relevant age, dependency and family requirements.",
          "Parent: If you qualify under the specific parent family visa rules.",
          "Adult dependent relative: If you require long-term personal care that can only be provided by a qualifying relative in the UK.",
        ],
        subsections: [
          {
            heading: "Fiancé and Proposed Civil Partner Conditions",
            paragraphs: [
              "Each category has different eligibility conditions. A fiancé or proposed civil partner visa, for example, normally lasts six months and does not allow the holder to work or study during that period.",
            ],
          },
        ],
      },
      {
        heading: "UK Settlement Visa Conditions and Documents",
        paragraphs: [
          "Applicants must provide evidence that supports their eligibility and satisfies the conditions of their chosen route. The documents for a settlement visa UK application vary, but commonly include:",
        ],
        bullets: [
          "A valid passport or travel document.",
          "Details of the UK sponsor's identity and immigration status.",
          "Marriage or civil partnership certificate, where applicable.",
          "Evidence of an ongoing relationship, such as communication records or shared financial commitments.",
          "Payslips, bank statements or other financial evidence.",
          "Accommodation details for the UK.",
          "Approved English language test evidence, if required.",
          "Previous immigration details and relevant travel history.",
        ],
        subsections: [
          {
            heading: "Certified Translations",
            paragraphs: [
              "If any documents are not in English or Welsh, you will generally need a certified translation. The Home Office may request additional evidence depending on your circumstances, so it is important to follow the checklist for your specific application.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Settlement Visa UK",
        paragraphs: [
          "Most family settlement visa applications made from outside the UK are submitted online. The process generally involves these steps:",
        ],
        bullets: [
          "1. Check your eligibility: Confirm that your relationship, sponsor's status and personal circumstances meet the relevant requirements.",
          "2. Prepare your documents: Gather relationship, financial, accommodation and identity evidence.",
          "3. Complete the application: Fill in the appropriate online form with accurate information.",
          "4. Pay the fees: Pay the application fee and Immigration Health Surcharge where applicable.",
          "5. Book biometrics: Follow the instructions to attend your appointment and provide your fingerprints and photograph.",
          "6. Submit your evidence: Upload or provide the supporting documents requested.",
          "7. Wait for a decision: The Home Office will assess your application and notify you of the outcome.",
        ],
        subsections: [
          {
            heading: "Application Preparation",
            paragraphs: [
              "Applying through the correct route and preparing your documents carefully can make the process easier to manage.",
            ],
          },
        ],
      },
      {
        heading: "UK Settlement Visa Cost in 2026",
        paragraphs: [
          "The standard application fee for a family visa as a partner, spouse, parent or child made from outside the UK is currently £2,064 per applicant. Applications to extend or switch to a family visa from inside the UK generally cost £1,407 per applicant.",
          "The Immigration Health Surcharge is normally payable separately. For an adult applicant, the usual surcharge is £1,035 per year. This means a typical partner visa lasting two years and nine months has an estimated surcharge of £3,105.",
          "Other costs may include English language tests, document translations and optional priority processing. Fees can change, so check the latest GOV.UK charges before submitting your application.",
        ],
      },
      {
        heading: "How Long Does a Settlement Visa Take for the UK?",
        paragraphs: [
          "A standard spouse or partner family visa application made outside the UK usually receives a decision within 12 weeks. Applications made inside the UK usually take around 8 weeks when the financial and English language requirements are met.",
          "Some in-country applications can take longer, particularly where the applicant does not meet those requirements or additional checks are needed. Faster decision services may be available for an additional charge, depending on the application location and route.",
          "The UK spouse settlement visa timeline is an estimate rather than a guaranteed decision date.",
        ],
      },
      {
        heading: "2 Year and 5 Year Settlement Visa Routes Explained",
        paragraphs: [
          "The five-year route is the standard route for many eligible partner applicants. After completing five continuous years on the qualifying family visa partner route and meeting the other conditions, you may be able to apply for Indefinite Leave to Remain.",
          "Some applicants follow a ten-year route because of their circumstances or applicable human rights provisions. A two-year settlement route is a legacy arrangement for certain people who received partner permission under immigration rules before 9 July 2012. It is not the standard option for new applicants.",
          "The time required to qualify for settlement depends on your immigration history and the route granted by the Home Office. You should check your previous decision letters if you are unsure which route applies to you.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your UK Settlement Visa",
        paragraphs: [
          "Preparing a family visa application can be challenging, particularly when you need to demonstrate a genuine relationship, meet financial conditions and provide evidence from different sources.",
          "Visa Direct Immigration provides guidance and application support to help you understand the relevant requirements, organise your documents and navigate the Home Office process. Whether you are applying to join your spouse, partner or another eligible family member, our team can discuss your circumstances and explain the available options.",
          "We support applicants in Birmingham, Bristol and Reading, as well as individuals across the UK.",
          "Ready to start your UK Settlement Visa application? Book Your Immigration Consultation with Visa Direct Immigration today.",
        ],
      },
      {
        heading: "UK Settlement Visa FAQs",
        subsections: [
          {
            heading: "Can I apply for a UK Settlement Visa without being married?",
            paragraphs: [
              "Yes. You may qualify as an unmarried partner if you have been in a relationship similar to marriage or civil partnership for at least two years and meet the relevant relationship evidence requirements. You do not necessarily need to have lived together throughout that period.",
            ],
          },
          {
            heading: "What is the minimum income requirement for a UK spouse settlement visa?",
            paragraphs: [
              "The usual minimum combined income requirement for many new spouse and partner applications is £29,000 per year. Different rules may apply to certain applicants, including those covered by transitional arrangements or sponsors receiving qualifying disability or carer benefits.",
            ],
          },
          {
            heading: "Can I bring my children to the UK on a Settlement Visa?",
            paragraphs: [
              "Yes. Eligible children may be able to apply for a UK family visa to join a parent in the UK. Their eligibility depends on factors such as age, dependency, parental responsibility and the immigration status of the parent they are joining.",
            ],
          },
          {
            heading: "Can I extend my UK Settlement Visa?",
            paragraphs: [
              "Yes. If you hold a family visa as a partner and continue to meet the relevant requirements, you can usually apply to extend your permission before it expires. The extension period and requirements depend on your immigration route.",
            ],
          },
          {
            heading: "Can a UK Settlement Visa lead to British citizenship?",
            paragraphs: [
              "Yes. An eligible family visa holder may first qualify for Indefinite Leave to Remain and later apply for British citizenship. The qualifying period and naturalisation requirements depend on your circumstances, including whether you are married to a British citizen.",
            ],
          },
        ],
      },
    ],
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
    category: "Business Immigration",
    shortDescription:
      "Explore Global Business Mobility Visa requirements, routes, fees and extensions with guidance on UK sponsorship and work visa applications.",
    heroTagline:
      "Understand the Global Business Mobility routes and prepare your UK work visa application with confidence.",
    seoTitle: "Global Business Mobility Visa UK | Application Support",
    seoDescription:
      "Explore Global Business Mobility Visa requirements, routes, fees and extensions. Get guidance on UK sponsorship and work visa applications.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/global-business-mobility.webp",
    supportingImages: [
      {
        src: "/images/service-business.webp",
        alt: "Global Business Mobility Visa UK business documents",
        caption: "Guidance for sponsorship, overseas employment and UK assignments",
      },
    ],
    contentSections: [
      {
        heading: "Global Business Mobility Visa UK",
        paragraphs: [
          "The Global Business Mobility Visa allows eligible overseas workers to undertake temporary work assignments in the United Kingdom. It is designed for international businesses that need to transfer employees, establish a UK presence, provide contracted services or complete specific commercial assignments.",
          "There are five routes under this category, each with different eligibility, sponsorship and employment requirements. Applicants must choose the route that matches their circumstances and have the necessary sponsorship before applying.",
          "Visa Direct Immigration provides guidance on UK work visa applications, helping individuals understand the relevant requirements, prepare supporting documents and navigate the application process.",
        ],
      },
      {
        heading: "What is the Global Business Mobility Visa UK?",
        paragraphs: [
          "The Global Business Mobility route is a group of temporary work visas introduced for overseas businesses and their employees. It allows qualifying organisations to send workers to the UK for specific business purposes without using the standard Skilled Worker route.",
          "The visa category covers five pathways:",
        ],
        bullets: [
          "1. Senior or Specialist Worker",
          "2. Graduate Trainee",
          "3. UK Expansion Worker",
          "4. Service Supplier",
          "5. Secondment Worker",
        ],
        subsections: [
          {
            heading: "Temporary Route",
            paragraphs: [
              "The Global Business Mobility Visa does not provide a direct route to indefinite leave to remain. Applicants should therefore understand the temporary nature of this permission before applying.",
            ],
          },
        ],
      },
      {
        heading: "Five Global Business Mobility Visa Routes",
        paragraphs: [
          "Choosing the correct route is essential because the eligibility conditions and permitted length of stay vary.",
        ],
        subsections: [
          {
            heading: "1. Senior or Specialist Worker Visa",
            paragraphs: [
              "This route is for senior managers and specialist employees transferring to a UK business linked to their overseas employer. It replaced the former Intra-company Transfer route.",
            ],
          },
          {
            heading: "2. Graduate Trainee Visa",
            paragraphs: [
              "This pathway is for employees taking part in a structured graduate training programme leading to a senior management or specialist position. The UK assignment must form part of that training.",
            ],
          },
          {
            heading: "3. UK Expansion Worker Visa",
            paragraphs: [
              "This route allows senior managers or specialist employees to come to the UK to establish a branch of an overseas business that has not started trading in the UK.",
            ],
          },
          {
            heading: "4. Service Supplier Visa",
            paragraphs: [
              "This route is for overseas employees or self-employed professionals providing services to a UK business under a qualifying international trade agreement.",
            ],
          },
          {
            heading: "5. Secondment Worker Visa",
            paragraphs: [
              "This pathway is for employees of overseas organisations assigned to the UK under qualifying high-value contracts with UK sponsors.",
              "The correct category depends on your employer, job responsibilities and the purpose of your UK assignment.",
            ],
          },
        ],
      },
      {
        heading: "Global Business Mobility Requirements",
        paragraphs: [
          "Although each route has its own eligibility conditions, applicants must meet several general requirements.",
          "These commonly include:",
        ],
        bullets: [
          "Age: You must be at least 18 when applying.",
          "Sponsorship: You need a valid Certificate of Sponsorship from an approved UK sponsor.",
          "Employment: You must meet the relevant overseas employment or professional experience requirement.",
          "Eligible occupation: Your proposed role must meet the skill and occupation requirements for your chosen route.",
          "Salary: You must meet the applicable salary threshold and occupation-specific going rate where required.",
          "Financial support: You must normally demonstrate access to at least £1,270 in personal savings unless an exemption applies or your sponsor certifies maintenance.",
        ],
        subsections: [
          {
            heading: "Route-Specific Employment Periods",
            paragraphs: [
              "The overseas employment period differs between routes. For example, Senior or Specialist Workers generally need 12 months of overseas employment unless an exception applies, while Graduate Trainees usually need three months. Other routes have their own conditions.",
              "There is no single salary threshold for every Global Business Mobility application. The required amount depends on the route, occupation and applicable immigration rules.",
            ],
          },
        ],
      },
      {
        heading: "Global Business Mobility Visa Documents",
        paragraphs: [
          "The documents required depend on the route and your personal circumstances. Preparing accurate evidence helps the Home Office assess your identity, employment and sponsorship.",
          "Common documents include:",
        ],
        bullets: [
          "A valid passport or travel document.",
          "Your Certificate of Sponsorship reference number.",
          "Evidence of your overseas employment or professional experience, where required.",
          "Bank statements showing the required maintenance funds, if applicable.",
          "Details of your UK job, salary and occupation code.",
          "A tuberculosis test certificate, if required based on your country of residence.",
          "An ATAS certificate, if your role involves research covered by the relevant requirements.",
          "Relationship documents if your partner or children are applying as dependants.",
        ],
        subsections: [
          {
            heading: "Additional Route Evidence",
            paragraphs: [
              "Some routes require additional evidence about an international trade agreement, a high-value contract or plans to establish a UK business. Documents not written in English or Welsh must normally have a certified translation.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Global Business Mobility Visa",
        paragraphs: [
          "Applications are submitted online through the official UK government website. The process depends on whether you are applying from overseas, extending your current permission or switching from another eligible visa.",
          "The general application process involves:",
        ],
        bullets: [
          "1. Choose the correct route: Confirm whether your assignment falls under Senior or Specialist Worker, Graduate Trainee, UK Expansion Worker, Service Supplier or Secondment Worker.",
          "2. Confirm eligibility: Check the employment, occupation, salary and experience requirements.",
          "3. Obtain sponsorship: Ask your UK sponsor to issue a valid Certificate of Sponsorship.",
          "4. Prepare documents: Gather your passport, financial evidence and any route-specific supporting documents.",
          "5. Complete the application: Submit the correct online form with accurate personal and employment information.",
          "6. Pay the fees: Pay the application fee and Immigration Health Surcharge where applicable.",
          "7. Verify your identity: Use the UK Immigration: ID Check app if eligible or attend a biometric appointment.",
        ],
        subsections: [
          {
            heading: "When to Apply",
            paragraphs: [
              "You can generally apply up to three months before your intended start date, as recorded on your Certificate of Sponsorship. You should wait for the relevant immigration permission before starting your sponsored work.",
            ],
          },
        ],
      },
      {
        heading: "Global Business Mobility Visa Fees",
        paragraphs: [
          "The application fee depends on the route and, for Senior or Specialist Workers, the length of permission requested.",
        ],
        table: {
          headers: ["Visa route", "Application fee"],
          rows: [
            ["Senior or Specialist Worker, outside UK up to 3 years", "£819"],
            ["Senior or Specialist Worker, outside UK over 3 years", "£1,618"],
            ["Senior or Specialist Worker, applying inside UK up to 3 years", "£943"],
            ["Senior or Specialist Worker, applying inside UK over 3 years", "£1,865"],
            ["Graduate Trainee", "£340"],
            ["UK Expansion Worker", "£340"],
            ["Service Supplier", "£340"],
            ["Secondment Worker", "£340"],
          ],
        },
        paragraphsAfterTable: [
          "You must also budget for the Immigration Health Surcharge, usually £1,035 per year for adults. Most applicants will need to show £1,270 in maintenance funds unless an exemption or sponsor certification applies.",
          "The Certificate of Sponsorship fee is paid by the sponsoring employer, not the worker. Other employer sponsorship costs may also apply. Check the latest Home Office fee information before submitting an application.",
        ],
      },
      {
        heading: "Global Business Mobility Visa Extension",
        paragraphs: [
          "Some Global Business Mobility routes allow applicants to extend their permission from inside the UK, provided they continue to meet the relevant requirements.",
          "The extension rules differ by category:",
        ],
        bullets: [
          "Senior or Specialist Worker: Extensions may be possible up to the maximum permitted stay of five years in any six-year period, or nine years in any ten-year period for qualifying high earners.",
          "Graduate Trainee: This visa cannot be extended. Applicants may be able to apply for another Graduate Trainee Visa from outside the UK.",
          "UK Expansion Worker: You may extend by 12 months, up to a maximum stay of two years.",
          "Service Supplier: Extensions may be possible if you remain under the qualifying contract and have not reached the maximum stay allowed by the relevant trade agreement.",
          "Secondment Worker: You may be able to extend by a further 12 months, subject to the maximum two-year stay.",
        ],
        subsections: [
          {
            heading: "Dependants and Expiry Dates",
            paragraphs: [
              "You should apply before your current permission expires. Your dependants must also submit separate extension applications if they wish to remain beyond their existing visa expiry dates.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Global Business Mobility applications involve several different routes, each with its own sponsorship, employment and financial conditions. Selecting the wrong pathway or submitting incomplete evidence can cause delays or refusal.",
          "Visa Direct Immigration provides guidance to individuals navigating UK work visa applications. Our team can help you understand the relevant route, review document requirements and prepare for the application process.",
          "If you are searching for Global Business Mobility lawyers or Global Business Mobility Visa lawyers, it is important to check the professional's qualifications and authorisation before instructing them. You can contact Visa Direct Immigration to discuss the application guidance available for your circumstances.",
          "Book Your Immigration Consultation.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "What are the five Global Business Mobility routes?",
            paragraphs: [
              "The five routes are Senior or Specialist Worker, Graduate Trainee, UK Expansion Worker, Service Supplier and Secondment Worker. Each is designed for a different type of overseas business assignment.",
            ],
          },
          {
            heading: "Who is eligible for a Global Business Mobility Visa?",
            paragraphs: [
              "Eligibility depends on the route. Applicants generally need to be at least 18, have qualifying overseas employment or professional experience, receive sponsorship from an approved UK organisation and meet the relevant job and salary requirements.",
            ],
          },
          {
            heading: "How much does a Global Business Mobility Visa cost?",
            paragraphs: [
              "Most routes have a £340 application fee. Senior or Specialist Worker fees vary according to the application location and length of permission. The Immigration Health Surcharge is payable separately.",
            ],
          },
          {
            heading: "Can I extend my Global Business Mobility Visa?",
            paragraphs: [
              "Some routes allow extensions, subject to their individual rules and maximum stay limits. Graduate Trainee permission cannot be extended, although another application from outside the UK may be possible.",
            ],
          },
          {
            heading: "Can I change employers on a Global Business Mobility Visa?",
            paragraphs: [
              "You cannot freely change employers. Your permission is linked to your sponsorship and job. If your employment changes, you may need a new Certificate of Sponsorship and an application to update your visa.",
            ],
          },
          {
            heading: "Does the Global Business Mobility Visa lead to ILR?",
            paragraphs: [
              "No. None of the five Global Business Mobility routes provides a direct settlement pathway. You may need to qualify for a different immigration route if you intend to settle permanently in the UK.",
            ],
          },
        ],
      },
    ],
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
    category: "Business Immigration",
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
    title: "Graduate Visa",
    category: "Business Immigration",
    shortDescription:
      "Get expert application support with Graduate Visa UK eligibility, documents, fees and Home Office requirements.",
    heroTagline: "Move from UK study to professional experience with clear Graduate Visa guidance.",
    seoTitle: "Graduate Visa UK Experts | Application Support",
    seoDescription:
      "Need help applying for a Graduate Visa UK? Get expert application support with eligibility, documents, fees and Home Office requirements.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/graduate-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK Graduate Visa application support",
        caption: "Support for your Graduate Visa application",
      },
    ],
    contentSections: [
      {
        heading: "Graduate Visa UK",
        paragraphs: [
          "Completing a degree in the UK is an important achievement, and many international students want to remain in the country to gain professional experience after their studies. The Graduate Visa UK route allows eligible international graduates to stay in the UK after successfully completing an approved course, without needing a job offer or employer sponsorship.",
          "Visa Direct Immigration provides guidance and application support for graduates planning to apply for this visa. Whether you need help checking your eligibility, preparing documents or understanding the upcoming 2027 changes, our team can help you navigate the application process.",
        ],
      },
      {
        heading: "UK Graduate Visa Application Support",
        paragraphs: [
          "A Graduate Visa application must meet the Home Office requirements, including successful course completion, valid Student immigration permission and the correct application timing.",
          "Visa Direct Immigration can assist with:",
        ],
        bullets: [
          "Reviewing your eligibility for the Graduate route.",
          "Checking your university and course completion requirements.",
          "Preparing the documents needed for your application.",
          "Understanding the application fee and Immigration Health Surcharge.",
          "Providing guidance on the online application process.",
          "Explaining your options if you plan to switch to another UK visa route.",
        ],
        subsections: [
          {
            heading: "Graduate Visa Guidance",
            paragraphs: [
              "Planning to stay in the UK after graduation? Contact our team to discuss your Graduate Visa application.",
            ],
          },
        ],
      },
      {
        heading: "Graduate Visa UK Requirements in 2026",
        paragraphs: [
          "To qualify for a Graduate Visa, you must meet specific eligibility conditions under the UK Immigration Rules.",
          "The main requirements include:",
          "Current immigration status: You must be in the UK and hold a valid Student Visa or have last held permission under the Tier 4 (General) Student route.",
          "Successful course completion: You must have successfully completed an eligible course with a recognised UK higher education provider that has a track record of compliance. Your university or education provider must notify the Home Office of your successful completion before you apply.",
          "Eligible qualification: You must have completed an eligible qualification, generally a UK bachelor's degree, postgraduate degree or another recognised qualification, such as a PGCE or PGDE.",
          "Study in the UK: You must have studied in the UK for the required period. For a course lasting 12 months or less, you must generally have held Student permission for the full course. For a course lasting longer than 12 months, you must usually have studied in the UK for at least 12 months under the relevant Student permission.",
          "Application location: You must be physically present in the UK when submitting your application.",
          "You must also meet the relevant suitability requirements and pay the required application fee and healthcare surcharge.",
        ],
      },
      {
        heading: "Documents Required for a UK Graduate Visa",
        paragraphs: [
          "Preparing the correct documents helps ensure that your application contains the information required by the Home Office. Your exact document checklist may depend on your circumstances.",
          "Commonly required documents include:",
        ],
        bullets: [
          "A valid passport or travel document.",
          "Your Confirmation of Acceptance for Studies (CAS) reference number.",
          "Your Biometric Residence Permit (BRP), if applicable.",
          "Details of your current or most recent Student Visa.",
          "Evidence of your relationship with eligible dependants, if they are applying.",
          "Written consent from a government or international scholarship provider, if applicable.",
        ],
        subsections: [
          {
            heading: "Supporting Documents",
            paragraphs: [
              "You may also need certified translations for documents that are not in English or Welsh. Your university should confirm when it has reported your successful course completion to the Home Office.",
              "Need help preparing your documents? Speak to Visa Direct Immigration before submitting your application.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Graduate Visa UK",
        paragraphs: [
          "The UK Graduate Visa application is completed online while you are in the UK. You must apply before your current Student Visa expires and after your education provider has notified the Home Office that you have successfully completed your course.",
          "The application process generally involves:",
        ],
        bullets: [
          "1. Check your eligibility: Confirm that your qualification, Student immigration status and study period meet the requirements.",
          "2. Confirm course completion: Contact your university if you are unsure whether it has informed the Home Office.",
          "3. Prepare your documents: Gather your passport, CAS reference and any additional supporting evidence.",
          "4. Complete the online application: Submit the Graduate Visa form through the official GOV.UK website.",
          "5. Prove your identity: Follow the instructions to use the UK Immigration: ID Check app or attend a biometric appointment, if required.",
          "6. Pay the fees: Pay the application fee and Immigration Health Surcharge.",
          "7. Wait for a decision: You can normally remain in the UK while your valid application is being considered.",
        ],
        subsections: [
          {
            heading: "Travel While Waiting",
            paragraphs: [
              "You should not travel outside the UK, Ireland, the Channel Islands or the Isle of Man while waiting for a decision, as doing so will result in your application being withdrawn.",
            ],
          },
        ],
      },
      {
        heading: "Graduate Visa UK Cost in 2026",
        paragraphs: [
          "The total Graduate Visa UK cost includes the application fee and the Immigration Health Surcharge (IHS). The amount you pay depends on the length of permission you receive.",
          "Cost",
          "Amount",
          "Graduate Visa application fee",
          "£937",
          "Immigration Health Surcharge per year",
          "£1,035",
          "IHS for 18 months",
          "£1,552.50",
          "IHS for 2 years",
          "£2,070",
          "IHS for 3 years",
          "£3,105",
          "For example, a graduate applying for a two-year visa would normally pay £3,007 in total, including the application fee and healthcare surcharge. A PhD graduate receiving three years of permission would normally pay £4,042.",
          "These figures are based on the published fees and may change. Check the official GOV.UK payment information before applying.",
        ],
      },
      {
        heading: "UK Graduate Visa Processing Time",
        paragraphs: [
          "The usual UK Graduate Visa processing time is around eight weeks after you have submitted your online application, proved your identity and provided the required documents.",
          "Your application may take longer if the Home Office needs to verify information, review additional evidence or carry out further checks. You can normally remain in the UK while waiting for a decision, provided you submitted a valid application before your Student Visa expired.",
        ],
      },
      {
        heading: "Graduate Visa Duration UK: 2026 and 2027 Changes",
        paragraphs: [
          "The duration of a Graduate Visa depends on your qualification and the date you apply.",
          "Under the published rules:",
          "Qualification and application date",
          "Graduate Visa duration",
          "Bachelor's or master's graduate applying before 1 January 2027",
          "2 years",
          "Bachelor's or master's graduate applying from 1 January 2027",
          "18 months",
          "PhD or other doctoral graduate",
          "3 years",
          "The government has also announced plans to restore a two-year Graduate Visa for graduates from high-compliance universities with strong labour market outcomes. Further details, including eligibility and transitional arrangements, have not yet been confirmed.",
          "If you are planning to apply around the end of 2026 or during 2027, it is important to check the rules in force on your actual application date.",
        ],
      },
      {
        heading: "Can You Extend a Graduate Visa UK?",
        paragraphs: [
          "A Graduate Visa cannot be extended beyond the period originally granted. However, you may be able to switch to another eligible immigration route before your Graduate permission expires.",
          "Depending on your circumstances, possible options may include:",
        ],
        bullets: [
          "Skilled Worker Visa: If you receive an eligible job offer from an approved sponsor and meet the relevant salary and other requirements.",
          "Global Talent Visa: If you meet the eligibility criteria for recognition as a leader or potential leader in an eligible field.",
          "Innovator Founder Visa: If you qualify with an innovative, viable and scalable business idea endorsed by an approved body.",
        ],
        subsections: [
          {
            heading: "Future Immigration Options",
            paragraphs: [
              "The right option depends on your qualifications, employment, career plans and individual circumstances. You should explore your next immigration route before your Graduate Visa expires.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your Graduate Visa UK Application",
        paragraphs: [
          "Moving from a Student Visa to the Graduate route involves important eligibility checks and application deadlines. Understanding the rules can help you avoid mistakes and make informed decisions about your next steps in the UK.",
          "Visa Direct Immigration provides application guidance to help you assess your eligibility, organise supporting documents and understand the application process. We can also discuss possible visa options if you intend to remain in the UK after your Graduate permission ends.",
          "Our team supports applicants in Birmingham, Bristol, Reading and across the UK.",
          "Contact Visa Direct Immigration today to discuss your Graduate Visa application and book your immigration consultation.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Can I apply for a UK Graduate Visa before receiving my degree certificate?",
            paragraphs: [
              "Yes. You do not need to wait for your graduation ceremony or degree certificate. However, your education provider must have notified the Home Office that you have successfully completed your eligible course before you apply.",
            ],
          },
          {
            heading: "Can I work in the UK on a Graduate Visa?",
            paragraphs: [
              "Yes. Graduate Visa holders can generally work in most jobs, look for employment, become self-employed and undertake voluntary work. However, working as a professional sportsperson is not permitted.",
            ],
          },
          {
            heading: "Can my spouse or children apply as dependants?",
            paragraphs: [
              "Your eligible partner and children may be able to apply as dependants if they meet the relevant requirements. Generally, they must already have permission as your dependants under the Student route, subject to specific exceptions such as children born in the UK during your Student permission.",
            ],
          },
          {
            heading: "Does a Graduate Visa lead to Indefinite Leave to Remain?",
            paragraphs: [
              "No. The Graduate route is not a direct settlement route. However, you may be able to switch to another qualifying visa route and later apply for settlement if you meet that route's requirements.",
            ],
          },
          {
            heading: "What happens if my Graduate Visa application is refused?",
            paragraphs: [
              "If your application is refused, the decision letter should explain the reasons. Depending on the circumstances, you may be able to request an administrative review or consider another appropriate immigration option. You should review the refusal grounds before taking further action.",
            ],
          },
        ],
      },
    ],
    iconName: "GraduationCap",
    keyFeatures: [
      "Graduate route eligibility and course completion checks",
      "Application timing, documents and fee guidance",
      "2026 and 2027 visa duration guidance",
      "Options for switching to another immigration route",
    ],
    eligibilityRequirements: [
      "Valid Student or qualifying Tier 4 immigration permission",
      "Successful completion of an eligible UK qualification",
      "Education provider notification to the Home Office",
      "Application submitted from inside the UK before permission expires",
    ],
    documentsRequired: [
      "Valid passport or travel document",
      "CAS reference and current or most recent Student Visa details",
      "BRP, if applicable",
      "Dependant or scholarship evidence, where applicable",
    ],
    processSteps: [
      {
        title: "Eligibility Check",
        description: "Reviewing your qualification, Student status and application timing.",
      },
      {
        title: "Course Completion Confirmation",
        description: "Checking that your education provider has notified the Home Office.",
      },
      {
        title: "Online Application",
        description: "Preparing documents, identity evidence, fees and healthcare surcharge.",
      },
      {
        title: "Decision and Next Steps",
        description: "Understanding the outcome and possible future visa routes.",
      },
    ],
    faqs: [],
  },
  {
    id: "indefinite-leave-to-remain",
    slug: "indefinite-leave-to-remain",
    title: "Indefinite Leave to Remain (ILR)",
    category: "Personal Immigration",
    shortDescription: "Permanent UK settlement allowing you to live, work, and study without immigration time limits.",
    heroTagline: "Your final milestone toward permanent UK residency and British citizenship.",
    seoTitle: "Indefinite Leave to Remain UK | ILR Application Help",
    seoDescription:
      "Applying for indefinite leave to remain in UK? Understand ILR requirements, documents, fees & processing times. Get application support.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/indefinite-leave-to-remain.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK settlement and indefinite leave to remain documents",
        caption: "Guidance for your settlement application and supporting evidence",
      },
    ],
    contentSections: [
      {
        heading: "Indefinite Leave to Remain in the UK",
        paragraphs: [
          "Indefinite Leave to Remain (ILR) allows eligible individuals to settle permanently in the UK without time restrictions on their stay. If you have lived in the UK on a qualifying visa and meet the relevant immigration conditions, you may be able to apply for settlement.",
          "Applying for indefinite leave to remain in the UK involves more than completing an online form. You must meet the qualifying residence period, satisfy the requirements of your immigration route and provide the correct supporting documents. Visa Direct Immigration offers guidance and application support to help you understand the process and prepare your application.",
        ],
      },
      {
        heading: "Indefinite Leave to Remain Application Support",
        paragraphs: [
          "Preparing an ILR application requires careful attention to your immigration history and the rules that apply to your visa category. Missing documents, incorrect information or applying before you qualify could affect your application.",
          "Visa Direct Immigration can help you understand the relevant requirements and prepare for the application process. Our support can include:",
        ],
        bullets: [
          "Reviewing your current visa and immigration history.",
          "Checking your eligibility and qualifying residence period.",
          "Explaining the documents and evidence you may need.",
          "Providing guidance on the online application process.",
          "Helping you understand the relevant fees and appointment requirements.",
        ],
        subsections: [
          {
            heading: "Settlement Consultation",
            paragraphs: [
              "Planning to settle in the UK? Book an immigration consultation to discuss your eligibility for ILR.",
            ],
          },
        ],
      },
      {
        heading: "UK Indefinite Leave to Remain Requirements",
        paragraphs: [
          "The UK indefinite leave to remain requirements depend on the immigration route you currently hold. Although qualifying residence is important for most applications, you may also need to meet financial, employment, relationship, language or other route-specific conditions.",
          "Common requirements include:",
        ],
        bullets: [
          "Qualifying residence: You must have completed the required period in the UK under an eligible immigration route.",
          "Continuous residence: You must meet the applicable absence limits and continuous residence rules.",
          "English language: You may need to demonstrate the required level of English, depending on your route and any applicable exemptions.",
          "Life in the UK Test: Most applicants aged 18 to 64 must pass this test, although exemptions apply.",
          "Route-specific conditions: You may need to meet salary, employment, sponsorship, relationship or other requirements.",
          "Immigration history: Your previous permission to stay and compliance with immigration conditions may be relevant.",
        ],
        subsections: [
          {
            heading: "Route-Specific Conditions",
            paragraphs: [
              "For example, Skilled Worker applicants must meet the relevant employment and salary conditions, while partner visa applicants must satisfy the relationship and financial requirements applicable to their settlement route.",
            ],
          },
        ],
      },
      {
        heading: "Who Can Apply for Indefinite Leave to Remain in the UK?",
        paragraphs: [
          "Several immigration routes can lead to settlement, but eligibility depends on the visa you hold and how long you have lived in the UK.",
          "You may be eligible to apply through routes such as:",
        ],
        bullets: [
          "Skilled Worker visa: Eligible applicants can generally apply after five years of qualifying residence, provided they meet the employment, salary and other settlement conditions.",
          "Family and partner visas: Settlement may be available after five years or under a ten-year route, depending on the applicant's circumstances and immigration permission.",
          "Long residence: Applicants who have completed ten years of continuous lawful residence may qualify under the long-residence route.",
          "Global Talent and Innovator Founder: Some applicants may qualify after three years, subject to the relevant route requirements.",
          "UK Ancestry visa: Eligible applicants can generally apply after five years of continuous residence.",
          "Other eligible routes: Certain applicants with refugee status, humanitarian protection or other qualifying immigration permission may have a separate settlement route.",
        ],
        subsections: [
          {
            heading: "Important Route Limitation",
            paragraphs: [
              "Not every visa leads directly to ILR. For example, time spent in the UK on a Standard Visitor visa does not normally count towards the ten-year long-residence route.",
            ],
          },
        ],
      },
      {
        heading: "Indefinite Leave to Remain UK Rules: Qualifying Periods",
        paragraphs: [
          "The time you must spend in the UK before applying depends on your immigration category. Some routes have a five-year qualifying period, while others allow settlement after three or ten years.",
          "Immigration route",
          "Common qualifying period",
          "Skilled Worker",
          "5 years",
          "Eligible partner or family visa",
          "5 or 10 years",
          "Long residence",
          "10 years",
          "Global Talent",
          "3 or 5 years, depending on eligibility",
          "Innovator Founder",
          "3 years",
          "UK Ancestry",
          "5 years",
        ],
        subsections: [
          {
            heading: "Qualifying Period Guidance",
            paragraphs: [
              "These are general qualifying periods, not automatic entitlements. The rules on continuous residence, permitted absences and other conditions must also be satisfied. Some applicants may qualify under different arrangements depending on their immigration history.",
            ],
          },
        ],
      },
      {
        heading: "Documents Required for Indefinite Leave to Remain UK",
        paragraphs: [
          "The documents required for indefinite leave to remain in the UK depend on your visa route and personal circumstances. You should prepare evidence that establishes your identity, immigration status and eligibility for settlement.",
          "Common documents may include:",
        ],
        bullets: [
          "A valid passport or other accepted identity document.",
          "Details of your current immigration status, including your eVisa or relevant UKVI records.",
          "Previous passports covering your residence in the UK.",
          "Evidence of employment, salary and sponsorship, where required.",
          "Proof of your relationship and shared residence for relevant family applications.",
          "Evidence of your qualifying residence and travel history.",
          "Your Life in the UK Test reference, where required.",
          "Evidence of meeting the English language requirement, if applicable.",
        ],
        subsections: [
          {
            heading: "Certified Translations",
            paragraphs: [
              "Documents that are not in English or Welsh may need to be accompanied by a certified translation. The exact checklist will depend on the application route, so it is important to follow the relevant Home Office instructions.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for Indefinite Leave to Remain in the UK",
        paragraphs: [
          "Most ILR applications are submitted online using the form for the relevant immigration category. Before applying, you should confirm that you meet all the conditions and are using the correct application route.",
          "The general process involves:",
        ],
        bullets: [
          "1. Check your eligibility: Confirm your qualifying residence period and any additional conditions attached to your visa.",
          "2. Prepare your documents: Gather identity, immigration, employment, financial or relationship evidence as required.",
          "3. Complete the application: Use the appropriate online form and provide accurate information about your circumstances.",
          "4. Pay the application fee: Pay the relevant Home Office fee and any optional faster-decision charge if available.",
          "5. Provide biometric information: Follow the instructions to provide your fingerprints and photograph, where required.",
          "6. Submit supporting evidence: Upload your documents or follow the instructions for submitting them through the relevant service.",
          "7. Wait for a decision: UK Visas and Immigration will assess your application and may request further information if necessary.",
        ],
        subsections: [
          {
            heading: "When to Apply",
            paragraphs: [
              "You should normally apply once you meet the eligibility requirements. For several routes, you can apply up to 28 days before completing the required residence period, but the earliest permitted date depends on your route.",
              "Need help preparing your application? Speak to Visa Direct Immigration about your ILR circumstances.",
            ],
          },
        ],
      },
      {
        heading: "Indefinite Leave to Remain UK Fees in 2026",
        paragraphs: [
          "The standard indefinite leave to remain UK application fee is currently £3,226 per applicant. Each eligible family member applying for settlement must pay their own application fee.",
          "You may also need to consider additional expenses, depending on your circumstances. These can include:",
        ],
        bullets: [
          "Optional priority or super priority processing charges, where available.",
          "English language test fees, if you need to take an approved test.",
          "Life in the UK Test fees.",
          "Translation or document certification costs, where required.",
        ],
        subsections: [
          {
            heading: "Priority Service Fees",
            paragraphs: [
              "The Home Office currently lists an additional £500 for the priority service and £1,000 for the super priority service, subject to availability for the application route. Check the available options before paying.",
              "The UK indefinite leave to remain application fee can change, so confirm the latest amount on GOV.UK before submitting your application.",
            ],
          },
        ],
      },
      {
        heading: "Benefits of Indefinite Leave to Remain in the UK",
        paragraphs: [
          "Receiving ILR provides greater stability because you can remain in the UK without needing to extend your temporary visa. It also removes many of the restrictions associated with time-limited immigration permission.",
          "The main benefits include:",
        ],
        bullets: [
          "Permanent residence: You can live in the UK without a fixed visa expiry date.",
          "Work opportunities: You can work for different employers or establish your own business without needing a work visa.",
          "Education: You can study in the UK without the restrictions attached to certain temporary visa categories.",
          "Public funds: You can apply for benefits if you meet the relevant eligibility conditions.",
          "Future citizenship: You may be able to apply for British citizenship once you meet the naturalisation requirements.",
        ],
        subsections: [
          {
            heading: "Absence from the UK",
            paragraphs: [
              "ILR can normally lapse if you remain outside the UK for more than two continuous years. Different absence rules apply to certain settlement categories, so check the conditions relevant to your status before travelling for an extended period.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help with Your ILR Application",
        paragraphs: [
          "Applying for indefinite leave to remain is an important step towards settling permanently in the UK. Understanding the correct route, checking your qualifying period and preparing the required evidence can help you approach the process with greater confidence.",
          "Visa Direct Immigration provides immigration guidance and application support for individuals considering settlement in the UK. Whether you are applying through a work route, family route or long residence, our team can help you understand the relevant requirements and the steps involved.",
          "We support applicants in Birmingham, Bristol and Reading, as well as individuals across the UK.",
          "Ready to apply for Indefinite Leave to Remain? Book Your Immigration Consultation with Visa Direct Immigration to discuss your application.",
        ],
      },
      {
        heading: "FAQs",
        subsections: [
          {
            heading: "Can I apply for Indefinite Leave to Remain before my visa expires?",
            paragraphs: [
              "Yes. You can apply before your current visa expires if you already meet the settlement requirements for your immigration route. Some applicants can submit their application up to 28 days before completing their qualifying residence period. Check the rules for your specific visa before applying.",
            ],
          },
          {
            heading: "Can I apply for British citizenship after receiving Indefinite Leave to Remain?",
            paragraphs: [
              "Yes. You may be eligible to apply for British citizenship after receiving ILR. Most applicants must hold ILR for at least 12 months before applying, although this waiting period generally does not apply if you are married to or in a civil partnership with a British citizen. You must also meet the other naturalisation requirements.",
            ],
          },
          {
            heading: "How long does an Indefinite Leave to Remain application take?",
            paragraphs: [
              "Most standard ILR applications receive a decision within six months after biometric information is provided. Eligible applicants may be able to use the priority service for a decision within 30 working days or the super priority service for a decision by the next working day, subject to availability and additional fees. Delays may occur if further checks or documents are required.",
            ],
          },
          {
            heading: "Can I travel while my ILR application is pending?",
            paragraphs: [
              "No. You should not travel outside the UK, Ireland, the Channel Islands or the Isle of Man while your application is pending, as it may be treated as withdrawn.",
            ],
          },
        ],
      },
    ],
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
    category: "Business Immigration",
    shortDescription:
      "Get guidance on Innovator Founder Visa eligibility, business endorsement, application fees, documents and settlement requirements.",
    heroTagline:
      "Understand the Innovator Founder route and prepare your endorsed business visa application with confidence.",
    seoTitle: "Innovator Founder Visa UK | Application Support",
    seoDescription:
      "Applying for an Innovator Founder Visa UK? Get guidance on business endorsement, eligibility, application fees, documents and settlement requirements.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/innovator-visa-uk.webp",
    supportingImages: [
      {
        src: "/images/service-business.webp",
        alt: "Innovator Founder Visa UK business plan and immigration documents",
        caption: "Guidance for endorsement, business plans and visa applications",
      },
    ],
    contentSections: [
      {
        heading: "Innovator Founder Visa",
        paragraphs: [
          "The Innovator Founder Visa UK allows entrepreneurs to establish and develop an innovative business in the United Kingdom. It is designed for individuals with a business idea that offers something different from existing products or services and has the potential to grow in the UK and international markets.",
          "Unlike some other business immigration routes, this visa does not require a fixed minimum investment amount. However, applicants must demonstrate that their business idea is innovative, viable and scalable, and obtain endorsement from an approved endorsing body.",
          "Successful applicants can stay in the UK for up to three years initially, with opportunities to extend their permission or apply for settlement if they meet the relevant requirements.",
          "Visa Direct Immigration provides guidance to individuals who need help understanding the Innovator Founder route, preparing their supporting documents and navigating the application process.",
        ],
      },
      {
        heading: "Innovator Founder Visa Support",
        paragraphs: [
          "Applying for an Innovator Founder Visa involves several important stages, particularly developing a suitable business plan and obtaining endorsement. Applicants must demonstrate that their proposed business has genuine commercial potential and that they will play an active role in its development.",
          "Visa Direct Immigration can help you understand the immigration requirements, identify the evidence needed for your application and prepare for the different stages of the process.",
          "Our application guidance may include explaining the endorsement process, financial requirements, supporting documents and visa conditions. We can also help you understand the requirements for extending your permission or applying for settlement later.",
          "Planning to establish a business in the UK? Book an immigration consultation to discuss your business plans and visa requirements.",
        ],
      },
      {
        heading: "Innovator Founder Visa UK Requirements",
        paragraphs: [
          "To qualify for an Innovator Founder Visa, you must meet the Home Office requirements relating to your business idea, endorsement, English language ability and personal finances.",
          "The main Innovator Founder Visa UK requirements include:",
        ],
        bullets: [
          "Innovative business idea: Your business must offer something original that meets a new or existing market need or provides a competitive advantage.",
          "Viability: Your business plan must be realistic and achievable, supported by your skills, knowledge and available resources.",
          "Scalability: You must demonstrate potential for growth, including the ability to create jobs and expand into national or international markets.",
          "Endorsement: An approved endorsing body must assess your business and issue an endorsement letter.",
          "Business involvement: You must have a key role in the day-to-day management and development of the business.",
          "English language: You must meet the English language requirement at B2 level unless an exemption applies.",
          "Financial requirement: You must normally demonstrate at least £1,270 in personal savings held for 28 consecutive days, unless an exemption applies.",
        ],
        subsections: [
          {
            heading: "Investment and Endorsement",
            paragraphs: [
              "There is no general requirement to invest a fixed minimum amount to qualify for the initial visa. However, you must show that your business plan is financially realistic and has the resources needed to develop.",
              "Meeting these conditions does not automatically guarantee endorsement or visa approval. Your business proposal and personal eligibility must satisfy the relevant requirements.",
              "Unsure whether your business idea meets the requirements? Contact Visa Direct Immigration for guidance before proceeding with your application.",
            ],
          },
        ],
      },
      {
        heading: "What Makes a Business Eligible for an Innovator Founder Visa?",
        paragraphs: [
          "The business idea is one of the most important parts of the application. The endorsing body will assess whether the proposal offers a genuine opportunity rather than simply introducing another business into an existing market.",
          "Your business must demonstrate three key qualities:",
        ],
        subsections: [
          {
            heading: "1. Innovation",
            paragraphs: [
              "Your idea should introduce something new or provide a meaningful improvement to an existing market. It could involve a new product, service, technology or business model.",
            ],
          },
          {
            heading: "2. Viability",
            paragraphs: [
              "You must show that the business can realistically operate and succeed. This includes having a credible business plan, appropriate resources and the skills needed to develop the venture.",
            ],
          },
          {
            heading: "3. Scalability",
            paragraphs: [
              "Your proposal should demonstrate potential for growth beyond a small local operation. This may involve plans for creating employment, reaching new customers or expanding into international markets.",
              "You must also show that you generated the business idea or made a significant contribution to it. Simply investing in or joining an existing trading business will not normally meet the new business requirements.",
            ],
          },
        ],
      },
      {
        heading: "Innovator Founder Visa Endorsement Process",
        paragraphs: [
          "Before applying for the visa, you must obtain an endorsement letter from an approved endorsing body. This organisation assesses your business proposal against the Home Office's innovation, viability and scalability criteria.",
          "The endorsement process generally involves:",
        ],
        bullets: [
          "Preparing a detailed business plan.",
          "Explaining the market need and what makes your idea different.",
          "Demonstrating the commercial viability of the proposal.",
          "Providing financial forecasts and growth plans.",
          "Explaining your experience and intended role in the business.",
          "Attending an assessment or interview if requested.",
        ],
        subsections: [
          {
            heading: "Endorsement Letter",
            paragraphs: [
              "If the endorsing body is satisfied, it can issue an endorsement letter supporting your application. This letter must normally be no more than three months old when you submit your visa application.",
              "You should also understand that endorsement is not a guarantee of visa approval. The Home Office makes the final immigration decision and checks whether you meet the remaining requirements.",
            ],
          },
        ],
      },
      {
        heading: "Documents Required for an Innovator Founder Visa UK",
        paragraphs: [
          "Your supporting documents must establish your identity, endorsement, English language ability and financial circumstances.",
          "Depending on your situation, you may need:",
        ],
        bullets: [
          "Valid passport: A current passport or other accepted travel document confirming your identity and nationality.",
          "Endorsement letter: Confirmation from an approved endorsing body supporting your business proposal.",
          "Business plan: Details of your idea, market research, business model, financial projections and growth strategy, where relevant to the endorsement process.",
          "Financial evidence: Bank statements showing at least £1,270 in eligible savings held for 28 consecutive days, unless exempt.",
          "English language evidence: An accepted qualification, test result or other evidence demonstrating B2 English ability, unless exempt.",
          "TB certificate: If you are applying from a country where tuberculosis testing is required.",
          "Certified translations: Translations of documents that are not in English or Welsh.",
        ],
        subsections: [
          {
            heading: "Consistent Evidence",
            paragraphs: [
              "The Home Office may request additional evidence depending on your circumstances. It is important to ensure that the information in your application is consistent with your endorsement and supporting documents.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for Innovator Founder Visa UK",
        paragraphs: [
          "The Innovator Founder Visa application is completed online. Applicants outside the UK must obtain entry clearance before travelling, while eligible individuals already in the UK may be able to switch from another visa category.",
          "The main application stages are:",
        ],
        bullets: [
          "1. Develop your business idea: Prepare a proposal demonstrating innovation, viability and scalability.",
          "2. Obtain endorsement: Submit your business proposal to an approved endorsing body and obtain an endorsement letter.",
          "3. Prepare supporting documents: Gather your passport, financial evidence, English language proof and other required documents.",
          "4. Complete the online application: Provide accurate information about your identity, business proposal and immigration circumstances.",
          "5. Pay the relevant fees: Pay the visa application fee and Immigration Health Surcharge where applicable.",
          "6. Prove your identity: Use the UK Immigration: ID Check app or attend a biometric appointment, depending on your circumstances.",
          "7. Wait for the decision: The Home Office will assess your application and supporting evidence before issuing a decision.",
        ],
        subsections: [
          {
            heading: "Check Your Endorsement",
            paragraphs: [
              "You should ensure that your endorsement letter is valid when you apply and that all information matches your supporting documents.",
            ],
          },
        ],
      },
      {
        heading: "Innovator Founder Visa Fees",
        paragraphs: [
          "The Innovator Founder Visa fees include the immigration application charge, endorsement fee and ongoing contact point meeting fees. The total cost depends on where you apply and how long you remain in the UK.",
        ],
        table: {
          headers: ["Fee", "Amount"],
          rows: [
            ["Initial application outside the UK", "£1,357"],
            ["Application to switch or extend inside the UK", "£1,693"],
            ["Endorsement fee", "£1,000"],
            ["Each contact point meeting", "£500"],
            ["Maintenance requirement", "£1,270 in savings"],
          ],
        },
        paragraphsAfterTable: [
          "The endorsement and contact point meeting fees are paid directly to the endorsing body. You must normally attend at least two contact point meetings during your initial three-year permission.",
          "The Immigration Health Surcharge is payable separately and depends on the length of your visa. Dependants also have their own application fees and applicable healthcare surcharge.",
          "These are the published charges at the time of writing. Check the latest GOV.UK fee information before submitting your application.",
        ],
      },
      {
        heading: "Innovator Founder Visa UK Processing Time",
        paragraphs: [
          "The usual Innovator Founder Visa UK processing time depends on whether you apply from outside or inside the UK.",
        ],
        bullets: [
          "Outside the UK: Usually three weeks after completing the identity and document requirements.",
          "Inside the UK: Usually eight weeks for switching or extension applications.",
          "These are standard processing estimates rather than guaranteed decision dates. Applications may take longer if the Home Office needs additional information, verifies documents or carries out further checks.",
          "You may be able to pay for a priority service where available.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Preparing an Innovator Founder Visa application requires careful attention to both business and immigration requirements. Understanding the endorsement process, preparing supporting evidence and completing the Home Office application can be challenging without clear guidance.",
          "Visa Direct Immigration provides Innovator Founder Visa support to help applicants understand the process and prepare for the relevant requirements.",
          "Depending on your circumstances, our guidance may include:",
        ],
        bullets: [
          "Reviewing your immigration eligibility.",
          "Explaining the business endorsement requirements.",
          "Identifying the documents needed for your application.",
          "Explaining financial and English language requirements.",
          "Guiding you through the online application process.",
          "Providing information about extensions and settlement requirements.",
        ],
        subsections: [
          {
            heading: "Application Support",
            paragraphs: [
              "Visa Direct Immigration provides immigration application guidance from its offices in Birmingham, Bristol and Reading, supporting individuals who need help understanding UK immigration procedures.",
              "Book Your Immigration Consultation to discuss your business plans, eligibility and next steps.",
            ],
          },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "What is the Innovator Founder Visa UK?",
            paragraphs: [
              "It is a UK immigration route for entrepreneurs who want to establish and develop an innovative, viable and scalable business. Applicants must obtain endorsement from an approved endorsing body and meet the relevant immigration requirements.",
            ],
          },
          {
            heading: "Is there a minimum investment requirement?",
            paragraphs: [
              "There is no fixed minimum investment amount for the initial Innovator Founder Visa application. However, you must demonstrate that your business plan is realistic and has the resources and potential to succeed.",
            ],
          },
          {
            heading: "Can I bring my family to the UK?",
            paragraphs: [
              "Yes. Your eligible partner and dependent children may apply to join you or remain in the UK. They must meet the relevant dependant requirements and submit their own applications.",
            ],
          },
          {
            heading: "Can I work outside my business?",
            paragraphs: [
              "Yes, you may undertake additional employment if the role requires at least RQF Level 3 skills. You must also continue to play an active role in managing and developing your endorsed business.",
            ],
          },
          {
            heading: "Does the Innovator Founder Visa lead to settlement?",
            paragraphs: [
              "Yes. You may qualify for Indefinite Leave to Remain after three years if you meet the residence, business success, endorsement and other settlement requirements.",
            ],
          },
        ],
      },
    ],
    iconName: "Sparkles",
    keyFeatures: [
      "Endorsement body and business plan guidance",
      "Innovation, viability and scalability assessment",
      "Application, document and financial evidence support",
      "Extension and three-year settlement guidance",
    ],
    eligibilityRequirements: [
      "Business idea endorsed by an approved endorsing body",
      "Idea is innovative, viable and capable of growth",
      "Active key role in day-to-day management and development",
      "B2 English and required personal maintenance funds",
    ],
    documentsRequired: [
      "Valid passport and endorsement letter",
      "Business plan, market research and financial projections",
      "Bank statements demonstrating required maintenance funds",
      "English language, TB and certified translation evidence where required",
    ],
    processSteps: [
      {
        title: "Develop Business Idea",
        description: "Preparing a proposal demonstrating innovation, viability and scalability.",
      },
      {
        title: "Obtain Endorsement",
        description: "Submitting the business proposal to an approved endorsing body.",
      },
      {
        title: "Submit Visa Application",
        description: "Completing the online application and providing supporting evidence.",
      },
      {
        title: "Build and Progress",
        description: "Developing the endorsed business and meeting extension or settlement requirements.",
      },
    ],
    faqs: [
      {
        question: "Is there a minimum investment requirement?",
        answer: "There is no fixed minimum investment amount for the initial Innovator Founder Visa application, but the business plan must be realistic and adequately resourced.",
      },
      {
        question: "Does the Innovator Founder Visa lead to settlement?",
        answer: "You may qualify for Indefinite Leave to Remain after three years if you meet the residence, business success, endorsement and other settlement requirements.",
      },
    ],
  },
  {
    id: "family-visa",
    slug: "family-visa",
    title: "Family Visa",
    category: "Personal Immigration",
    shortDescription: "Join eligible family members in the UK with guidance on applications and immigration requirements.",
    heroTagline: "Understand your UK Family Visa options and prepare your application with confidence.",
    seoTitle: "UK Family Visa Lawyers | Applications & Immigration Advice",
    seoDescription:
      "Need a UK Family Visa? Get guidance on spouse, partner, child and parent visa applications, eligibility, documents and Home Office requirements.",
    primaryCta: "Get Help with Your UK Family Visa Application",
    heroImage: "/images/services/family-visa.webp",
    supportingImages: [
      {
        src: "/images/service-personal.webp",
        alt: "UK family visa and immigration documents",
        caption: "Guidance for family relationships, documents and applications",
      },
    ],
    contentSections: [
      {
        heading: "Family Visa UK",
        paragraphs: [
          "Are you planning to join your family in the United Kingdom? A Family Visa UK allows eligible individuals to live with certain family members who are British citizens, settled in the UK or hold another qualifying immigration status.",
          "The UK Family Visa route covers different relationships, including spouses, civil partners, unmarried partners, children, parents and adult dependent relatives who need long-term care. Each category has specific eligibility, financial and documentation requirements.",
          "Visa Direct Immigration provides guidance with family visa applications, helping individuals understand their options, prepare supporting documents and navigate the UK immigration process.",
          "CTA: Get Help with Your UK Family Visa Application",
        ],
      },
      {
        heading: "UK Family Visa Application Support",
        paragraphs: [
          "Applying for a family visa involves more than proving that you have relatives in the UK. You must meet the requirements for your particular immigration route and provide suitable evidence of your relationship and circumstances.",
          "Visa Direct Immigration can assist with:",
        ],
        bullets: [
          "Eligibility assessment: Reviewing your family relationship and immigration circumstances.",
          "Route selection: Identifying the appropriate family visa category.",
          "Document preparation: Helping you organise relationship, financial and accommodation evidence.",
          "Application assistance: Guidance with completing the online application and supporting documents.",
          "Extension and settlement guidance: Explaining the requirements for extending your stay or applying for settlement.",
        ],
        subsections: [
          {
            heading: "Family Route Support",
            paragraphs: [
              "Whether you want to join your spouse, bring your child to the UK or arrange care from a dependent relative, we can help you understand the available options.",
              "CTA: Discuss Your Family Visa Options",
            ],
          },
        ],
      },
      {
        heading: "UK Family Visa Requirements",
        paragraphs: [
          "The UK family visa requirements depend on the family member you intend to join. Your UK-based relative must usually be a British or Irish citizen, have settled status or hold another qualifying immigration status.",
          "The main family visa categories include:",
        ],
        subsections: [
          {
            heading: "Partner or Spouse Visa",
            paragraphs: [
              "You may qualify if you are married to, in a civil partnership with or in a qualifying relationship with someone eligible to sponsor you. Unmarried partners generally need to demonstrate a relationship similar to marriage or civil partnership for at least two years.",
              "You must also meet the applicable financial and English language requirements and intend to live together permanently in the UK.",
            ],
          },
          {
            heading: "Child Visa",
            paragraphs: [
              "A child may qualify to join a parent in the UK, depending on the parent's immigration status and the child's circumstances. Applicants generally need to demonstrate the relevant parental relationship and satisfy the applicable care and responsibility requirements.",
            ],
          },
          {
            heading: "Parent Visa",
            paragraphs: [
              "You may be eligible to apply to join your child in the UK if they are under 18 and are living in the UK with the required citizenship or immigration status. You must meet the relevant parental responsibility and care requirements.",
            ],
          },
          {
            heading: "Adult Dependent Relative Visa",
            paragraphs: [
              "This route may be available to an adult who needs long-term personal care because of illness, disability or age. The UK-based relative must be eligible to sponsor them and demonstrate that the required care is unavailable or unaffordable in the country where the applicant lives.",
              "The requirements differ significantly between these categories, so choosing the correct route is essential.",
            ],
          },
        ],
      },
      {
        heading: "Documents Required for UK Family Visa",
        paragraphs: [
          "The documents required for UK family visa applications depend on your relationship and the category you are applying under. You may need:",
        ],
        bullets: [
          "Valid passport: Your current passport and relevant previous travel documents.",
          "Relationship evidence: Marriage or civil partnership certificates, birth certificates or other evidence of family relationships.",
          "Sponsor's immigration documents: Evidence of your relative's British citizenship, settled status or qualifying permission.",
          "Financial evidence: Bank statements, payslips, employer letters or other relevant financial records.",
          "Accommodation evidence: Tenancy agreements, mortgage documents or proof of suitable living arrangements.",
          "English language evidence: An approved test certificate or accepted qualification, if required.",
          "Medical evidence: Relevant medical reports and care assessments for adult dependent relative applications.",
        ],
        subsections: [
          {
            heading: "Document Translation",
            paragraphs: [
              "Documents not written in English or Welsh generally require certified translations. Your exact document checklist will depend on your application route.",
              "CTA: Get Help Preparing Your Family Visa Documents",
            ],
          },
        ],
      },
      {
        heading: "Applying for Family Visa UK: Application Process",
        paragraphs: [
          "The process for applying for a family visa UK depends on whether you are applying from overseas or switching from an eligible immigration category within the UK.",
        ],
        subsections: [
          {
            heading: "Applying from Outside the UK",
            paragraphs: [
              "Most applicants must complete the relevant online application before travelling. You will need to provide details about your UK-based family member, your relationship and your personal circumstances.",
              "After submitting the form and paying the application fee, you will generally need to attend a biometric appointment to provide your fingerprints and photograph. You must also submit the supporting evidence requested.",
            ],
          },
          {
            heading: "Applying from Inside the UK",
            paragraphs: [
              "If you are already in the UK, you may be able to switch to a family visa or extend your existing permission, depending on your current immigration status and the route you qualify under.",
              "Visitors and people with permission for six months or less will usually need to leave the UK and apply from overseas, subject to specific exceptions.",
              "Before submitting an application, check whether your current visa allows you to switch and whether you meet the relevant requirements.",
            ],
          },
        ],
      },
      {
        heading: "Cost of UK Family Visa",
        paragraphs: [
          "The cost of UK family visa applications depends on the family category and whether you apply from inside or outside the UK.",
          "For standard partner, parent and child applications, the current application fees are:",
          "Application location",
          "Application fee",
          "Outside the UK",
          "£2,064",
          "Inside the UK",
          "£1,407",
          "These are the standard family spouse visa UK fees as well. Adult dependent relative applications have different charges.",
          "Most applicants must also pay the Immigration Health Surcharge (IHS). For an adult, the current charges include:",
        ],
        bullets: [
          "£3,105 for 2 years and 9 months.",
          "£2,587.50 for 2 years and 6 months.",
          "£5,175 for five years.",
        ],
        subsections: [
          {
            heading: "Additional Costs",
            paragraphs: [
              "Additional expenses may include biometric services and optional priority processing. A fee waiver may be available in certain circumstances if you cannot afford the application fee.",
              "Always check the latest Home Office charges before applying.",
            ],
          },
        ],
      },
      {
        heading: "UK Family Visa Processing Time",
        paragraphs: [
          "The UK family visa processing time depends on the application category, location and individual circumstances.",
          "For standard partner applications, the usual decision times are:",
        ],
        bullets: [
          "Outside the UK: Around 12 weeks.",
          "Inside the UK: Around 8 weeks if you meet the financial and English language requirements.",
          "Inside the UK without meeting those requirements: Currently around 12 months.",
        ],
        subsections: [
          {
            heading: "Processing Information",
            paragraphs: [
              "Other family visa categories may have different processing arrangements. Applications can also take longer if UK Visas and Immigration requests additional evidence or carries out further checks.",
            ],
          },
        ],
      },
      {
        heading: "Family Visa Routes: 5-Year, 10-Year and 2-Year Options",
        paragraphs: [
          "Some applicants may qualify for different routes depending on their circumstances.",
          "Five-year route: Eligible partners can generally apply for settlement after five years of continuous qualifying residence on the family route.",
          "Ten-year route: Some applicants who cannot meet the standard requirements may qualify to remain in the UK on a ten-year route based on exceptional circumstances or human rights considerations.",
          "Two-year route: There is no general two-year family visa route for new applicants. The length of permission granted depends on the specific category and circumstances. Some older or transitional immigration arrangements may have different rules.",
          "The correct route depends on your eligibility and immigration history.",
        ],
      },
      {
        heading: "Family Visit Visas: 6-Month, 5-Year and 10-Year Options",
        paragraphs: [
          "A family visit visa is different from a Family Visa that allows someone to live in the UK. If you only want to visit relatives temporarily, you may need a Standard Visitor visa.",
          "Depending on your travel history and circumstances, you can apply for:",
        ],
        bullets: [
          "Six-month family visit visa: For a temporary visit to relatives in the UK.",
          "Five-year family visit visa: For people who visit the UK regularly.",
          "Ten-year family visit visa: For frequent visitors who want longer-term visa validity.",
        ],
        subsections: [
          {
            heading: "Visit Visa Conditions",
            paragraphs: [
              "The five-year and ten-year visitor visas allow multiple visits, but each visit is normally limited to a maximum of six months. They do not provide permission to live, work or settle in the UK.",
              "If you intend to move to the UK to live with family, you should consider the appropriate Family Visa route instead.",
            ],
          },
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Choosing the correct family immigration route and preparing the required evidence can be challenging. Visa Direct Immigration provides guidance tailored to your relationship, family circumstances and immigration history.",
          "Our team can help you understand eligibility requirements, organise supporting documents and prepare your application. We support applicants in Birmingham, Bristol, Reading and across the UK.",
          "Contact us to discuss your circumstances and understand the next steps.",
          "CTA: Book Your Immigration Consultation",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Can I apply for a UK Family Visa if my relative is on a work or student visa?",
            paragraphs: [
              "You generally cannot use the Family Visa route to join someone who is temporarily in the UK on a work or student visa. You may instead need to apply as their dependant, if the relevant visa category permits it.",
            ],
          },
          {
            heading: "Can I work on a UK Family Visa?",
            paragraphs: [
              "Most people granted permission under the standard partner route can work and study in the UK. However, fiancé or proposed civil partner visa holders cannot work or study during their initial six-month stay.",
            ],
          },
          {
            heading: "Can I extend my UK Family Visa?",
            paragraphs: [
              "Yes, you may be able to extend your permission if you continue to meet the requirements of your immigration category. You should apply before your current permission expires.",
            ],
          },
          {
            heading: "Can a UK Family Visa lead to settlement?",
            paragraphs: [
              "Yes. Certain family routes can lead to Indefinite Leave to Remain (ILR). The qualifying period depends on your immigration category and whether you are on a five-year or ten-year route.",
            ],
          },
        ],
      },
      {
        heading: "Get Support with Your UK Family Visa Application",
        paragraphs: [
          "Applying for a UK Family Visa involves choosing the correct route, meeting the relevant eligibility requirements and preparing documents that support your application. The process can be more complicated when your circumstances involve financial requirements, previous immigration history or family members applying from different countries.",
          "Visa Direct Immigration provides guidance and application support to help you understand the requirements, prepare your documents and navigate the application process. Whether you are applying to join your spouse, partner, child or parent in the UK, our team can help you understand the steps involved.",
          "Book your immigration consultation today to discuss your circumstances and get guidance on your UK Family Visa application.",
        ],
      },
    ],
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
    {
      id: "sole-representative-visa",
      slug: "sole-representative-visa",
      title: "Sole Representative Visa Extension",
      category: "Business Immigration",
      shortDescription:
        "Understand Sole Representative Visa extension eligibility, required documents, fees, processing times and settlement options.",
      heroTagline:
        "Prepare your Sole Representative Visa extension application with guidance on ongoing business and employment requirements.",
      seoTitle: "Sole Representative Visa Extension UK | Application Help",
      seoDescription:
        "Need to extend your Sole Representative Visa UK? Understand eligibility, required documents, fees, processing times and settlement options.",
      primaryCta: "Book Your Immigration Consultation",
      heroImage: "/images/services/sole-representative-visa.webp",
      supportingImages: [
        {
          src: "/images/service-business.webp",
          alt: "Sole Representative Visa extension business documents",
          caption: "Support with overseas employer and UK business evidence",
        },
      ],
      contentSections: [
        {
          heading: "Sole Representative Visa Extension",
          paragraphs: [
            "The Sole Representative Visa Extension allows eligible individuals already living in the UK under the Representative of an Overseas Business route to extend their permission to stay. It is intended for representatives who have established and are continuing to supervise a UK branch or wholly owned subsidiary of an overseas business.",
            "The Sole Representative route closed to new applicants on 11 April 2022. However, people who already hold permission under this category can still apply for an extension if they meet the current Immigration Rules.",
            "A successful extension can provide up to two additional years in the UK, allowing eligible applicants to complete the five-year qualifying period for indefinite leave to remain (ILR). Visa Direct Immigration provides guidance on extension applications, supporting documents and relevant immigration requirements.",
          ],
        },
        {
          heading: "Can You Still Extend a Sole Representative Visa?",
          paragraphs: [
            "Yes. Although the UK government no longer accepts initial applications under the Sole Representative route, existing visa holders can still apply to extend their stay.",
            "The route is now covered by the Representative of an Overseas Business provisions in the Immigration Rules. An extension is not automatic. You must demonstrate that you continue to represent the same overseas employer and meet the requirements for supervising the UK business.",
            "If you are an existing Sole Representative, you should prepare your application before your current permission expires. New applicants who want to establish a UK branch should explore the UK Expansion Worker route instead, as it is a different immigration category.",
          ],
        },
        {
          heading: "Sole Representative Visa Extension Requirements",
          paragraphs: [
            "To qualify for an extension, you must continue to meet the relevant employment and business conditions.",
            "The main requirements include:",
          ],
          bullets: [
            "Existing visa permission: You must already hold, or have last held, permission as a Sole Representative of an Overseas Business.",
            "Same overseas employer: You must continue working for the employer that sponsored your original application.",
            "Overseas headquarters: Your employer must maintain its headquarters and principal place of business outside the UK.",
            "Registered UK business: You must have established and registered the UK branch or wholly owned subsidiary.",
            "Supervisory responsibilities: You must continue working full-time and supervising the UK establishment you created.",
            "Ongoing employment: Your overseas employer must confirm that it still requires you to perform the same representative role.",
            "Business activity: The UK establishment must be operating in the same type of business activity as the overseas company.",
          ],
          subsections: [
            {
              heading: "Genuine Ongoing Role",
              paragraphs: [
                "Your role must remain genuine and consistent with the purpose of the original permission. You cannot simply use this extension to take up unrelated employment or operate a separate business.",
              ],
            },
          ],
        },
        {
          heading: "Overseas Business and UK Branch Requirements",
          paragraphs: [
            "The relationship between the overseas company and its UK establishment is central to the extension application.",
            "The overseas business must remain active and trading, with its principal place of business outside the UK. It must also continue to own the UK subsidiary wholly if the UK presence was established as a subsidiary rather than a registered branch.",
            "You must demonstrate that the UK establishment is actively conducting business on behalf of the overseas company. Evidence can include:",
          ],
          bullets: [
            "Accounts and financial records.",
            "Invoices issued to UK customers or organisations.",
            "Letters from UK businesses you have worked with.",
            "Details showing the value of commercial transactions.",
            "Evidence of ongoing business relationships.",
          ],
          subsections: [
            {
              heading: "Business Activity",
              paragraphs: [
                "The UK branch or subsidiary must operate in the same type of business activity as the overseas organisation. A registered company with little or no genuine business activity may not provide sufficient evidence for an extension.",
              ],
            },
          ],
        },
        {
          heading: "Documents Required for a Sole Representative Visa Extension",
          paragraphs: [
            "Your supporting documents must demonstrate that you continue to meet the requirements of the route. The evidence should cover both your employment and the commercial activity of the UK establishment.",
            "Common documents include:",
          ],
          bullets: [
            "Your current passport and immigration details.",
            "A letter from your overseas employer confirming that you will continue in the same role.",
            "Evidence of salary paid during the 12 months immediately before your application.",
            "Details of your salary and remuneration package.",
            "A full description of the UK business's activities.",
            "Business accounts, invoices and letters from UK organisations.",
            "Companies House registration certificate for a UK branch.",
            "Certificate of incorporation for a wholly owned UK subsidiary.",
            "Share register or an accountant's letter confirming that the overseas company owns all shares in the subsidiary.",
            "An employer's letter confirming that you supervise the UK branch or subsidiary.",
          ],
        },
        {
          heading: "How to Apply for a Sole Representative Visa Extension",
          paragraphs: [
            "You must apply online from within the UK before your current visa expires. The application process involves several important stages.",
          ],
          bullets: [
            "1. Review your eligibility: Confirm that you continue to work for the same overseas employer and supervise the UK branch or subsidiary you established.",
            "2. Obtain employer confirmation: Ask your overseas employer to provide a letter confirming your ongoing employment, role and remuneration.",
            "3. Gather business evidence: Prepare accounts, invoices, customer correspondence and other records demonstrating the UK establishment's trading activity.",
            "4. Collect company documents: Obtain the relevant Companies House certificates and ownership evidence for the UK branch or subsidiary.",
            "5. Complete the online application: Provide accurate information about your employment, overseas employer and UK business activities.",
            "6. Pay the application fee: Pay the relevant extension fee and Immigration Health Surcharge.",
            "7. Submit supporting documents and biometrics: Upload the required evidence and attend a UKVCAS appointment to provide your fingerprints and photograph if requested.",
          ],
          subsections: [
            {
              heading: "Keep Consistent Records",
              paragraphs: [
                "You should keep copies of your application and supporting documents. It is also important to check that all information matches your employer's records and the details previously provided to the Home Office.",
              ],
            },
          ],
        },
        {
          heading: "Sole Representative Visa Extension Fee",
          paragraphs: [
            "The current Home Office application fee for extending a Representative of an Overseas Business visa from inside the UK is £943 per applicant.",
            "You must also pay the Immigration Health Surcharge, which is normally £1,035 per year for adults.",
          ],
          table: {
            headers: ["Expense", "Current cost"],
            rows: [
              ["Visa extension application", "£943"],
              ["Immigration Health Surcharge for 2 years", "£2,070"],
              ["Biometric appointment", "No Home Office fee"],
              ["Document preparation or translation", "Depends on requirements"],
            ],
          },
          paragraphsAfterTable: [
            "For a standard two-year extension, the estimated Home Office application fee and adult healthcare surcharge total is £3,013 per applicant. Additional costs may apply if you need translations or professional application assistance.",
            "Your partner and children must submit separate extension applications and pay their own applicable fees and healthcare surcharges. Always check the latest government charges before applying.",
          ],
        },
        {
          heading: "Sole Representative Visa Extension Processing Time",
          paragraphs: [
            "The usual processing time for an in-country Sole Representative Visa Extension is eight weeks after you have submitted your application, proved your identity and provided the required documents.",
            "Some applications take longer if the Home Office needs to verify business records, request additional evidence or investigate the overseas company's activities.",
            "You may be contacted if further information is required. Preparing complete and accurate business evidence before applying can help avoid unnecessary delays.",
          ],
          subsections: [
            {
              heading: "Travel While Your Application Is Pending",
              paragraphs: [
                "You must not travel outside the UK, Ireland, the Channel Islands or the Isle of Man while your extension application is pending. Doing so will normally result in your application being treated as withdrawn.",
              ],
            },
          ],
        },
        {
          heading: "How Visa Direct Immigration Can Help",
          paragraphs: [
            "A Sole Representative Visa Extension requires evidence of ongoing employment, genuine UK business activity and continued supervision of the overseas company's UK establishment. Incomplete records or inconsistencies in company ownership and trading evidence can create difficulties.",
            "Visa Direct Immigration provides guidance to individuals preparing UK immigration applications. Our team can help you understand the extension requirements, organise supporting documents and prepare for the application process.",
            "If your Sole Representative permission is approaching expiry, contact us to discuss your circumstances and the guidance available.",
            "Book Your Immigration Consultation.",
          ],
        },
        {
          heading: "Frequently Asked Questions",
          subsections: [
            {
              heading: "Is the Sole Representative Visa still available?",
              paragraphs: [
                "The route closed to new Sole Representative applicants on 11 April 2022. However, existing visa holders can still apply for an extension or settlement if they meet the relevant requirements.",
              ],
            },
            {
              heading: "How long can I extend my Sole Representative Visa for?",
              paragraphs: [
                "A standard extension can provide up to two additional years after the initial three-year permission, giving you up to five years in total.",
              ],
            },
            {
              heading: "Can I extend my Sole Representative Visa if my UK company is not trading?",
              paragraphs: [
                "You must provide evidence that the UK branch or subsidiary is carrying out genuine business activities. You may have difficulty meeting the extension requirements if the UK establishment has not generated business or cannot demonstrate its commercial activity.",
              ],
            },
            {
              heading: "Can I change my overseas employer during the extension period?",
              paragraphs: [
                "No. The extension requires you to continue working for the same overseas employer under the representative role. Changing employers can affect your eligibility.",
              ],
            },
            {
              heading: "Can my family extend their visas with mine?",
              paragraphs: [
                "Your partner and children must submit separate extension applications. Their permission does not automatically extend when you receive an extension.",
              ],
            },
            {
              heading: "Can I apply for ILR after five years on a Sole Representative Visa?",
              paragraphs: [
                "Yes, if you meet the five-year continuous residence, employment, business activity, English language and other settlement requirements.",
              ],
            },
          ],
        },
      ],
      iconName: "Building",
      keyFeatures: [
        "Extension eligibility and ongoing role assessment",
        "Overseas employer and UK business evidence review",
        "Companies House and ownership document preparation",
        "Extension, travel and settlement guidance",
      ],
      eligibilityRequirements: [
        "Existing permission as a Sole Representative of an Overseas Business",
        "Continued employment with the same overseas employer",
        "Active UK branch or wholly owned subsidiary conducting genuine business",
        "Full-time supervision of the UK establishment and qualifying residence",
      ],
      documentsRequired: [
        "Current passport and immigration details",
        "Overseas employer confirmation of role, salary and ongoing employment",
        "Salary evidence for the preceding 12 months",
        "UK business accounts, invoices and commercial correspondence",
        "Companies House, incorporation and ownership documents",
      ],
      processSteps: [
        {
          title: "Review Eligibility",
          description: "Confirming your continuing role, overseas employer and UK business activity.",
        },
        {
          title: "Prepare Business Evidence",
          description: "Organising accounts, invoices, ownership records and employer documents.",
        },
        {
          title: "Submit Extension Application",
          description: "Completing the online application, paying the fee and providing biometrics.",
        },
        {
          title: "Await Home Office Decision",
          description: "Responding to any requests while maintaining consistent business evidence.",
        },
      ],
      faqs: [
        {
          question: "How long can I extend my Sole Representative Visa for?",
          answer: "A standard extension can provide up to two additional years after the initial three-year permission.",
        },
        {
          question: "Can I apply for ILR after five years on a Sole Representative Visa?",
          answer: "Yes, if you meet the five-year continuous residence, employment, business activity, English language and other settlement requirements.",
        },
      ],
    },
  {
    id: "youth-mobility-visa",
    slug: "youth-mobility-visa",
    title: "Youth Mobility Visa UK",
    category: "Business Immigration",
    shortDescription:
      "Apply for a Youth Mobility Visa UK with guidance on eligibility, documents, fees, processing times & extensions. Get support from Visa Direct Immigration.",
    heroTagline: "Live, work, and explore the UK for up to two years with complete Youth Mobility Scheme guidance.",
    seoTitle: "Youth Mobility Visa UK | Application Support",
    seoDescription:
      "Apply for a Youth Mobility Visa UK with guidance on eligibility, documents, fees, processing times &  extensions. Get support from Visa Direct Immigration.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/services/youth-mobility-visa.webp",
    supportingImages: [
      {
        src: "/images/youth-mobility-visa.webp",
        alt: "Youth Mobility Visa UK application paperwork, passport and map",
        caption: "Comprehensive application guidance for the UK Youth Mobility Scheme",
      },
    ],
    contentSections: [
      {
        heading: "Youth Mobility Visa UK",
        paragraphs: [
          "The Youth Mobility Visa UK allows eligible young people from participating countries to live, work and experience life in the United Kingdom for up to two years. It is designed for individuals who want to explore employment opportunities, travel, study or experience British culture without needing a sponsored job offer.",
          "Officially known as the Youth Mobility Scheme visa, this route is available to applicants who meet specific nationality, age and financial requirements. Some nationalities can also extend their permission for an additional year.",
          "Understanding the eligibility rules and application process before applying can help you prepare the correct documents and avoid unnecessary delays. Visa Direct Immigration provides guidance to individuals who need support understanding the Youth Mobility Scheme and preparing their applications.",
        ],
      },
      {
        heading: "Youth Mobility Scheme Visa Application Support",
        paragraphs: [
          "Applying for a Youth Mobility Scheme visa involves checking your nationality and age eligibility, meeting the financial requirement and providing the necessary supporting documents. Some applicants must also receive an invitation through a ballot before submitting their visa application.",
          "Visa Direct Immigration can help you understand the relevant requirements and identify the evidence needed for your circumstances. Our team can explain the application stages, financial evidence requirements and the conditions attached to this visa route.",
          "Whether you are planning your first application or considering an extension, getting clear guidance can help you understand what to expect before making a decision.",
        ],
        subsections: [
          {
            heading: "Consultation Support",
            paragraphs: [
              "Planning to apply for a Youth Mobility Visa UK? Book an immigration consultation to discuss your eligibility and application requirements.",
            ],
          },
        ],
      },
      {
        heading: "Eligibility for Youth Mobility Visa UK",
        paragraphs: [
          "Eligibility for the Youth Mobility Visa UK depends mainly on your nationality and age. The scheme is available to citizens of selected countries, as well as people holding certain types of British nationality.",
          "The age limits generally fall into two groups:",
        ],
        table: {
          headers: ["Eligible nationality", "Age limit"],
          rows: [
            ["Australia, Canada, New Zealand and South Korea", "18 to 35"],
            ["Andorra, Iceland, Japan, Monaco, San Marino and Uruguay", "18 to 30"],
          ],
        },
        paragraphsAfterTable: [
          "Applicants from Hong Kong who hold an SAR passport and applicants from Taiwan must be selected through the Youth Mobility Scheme ballot before applying. Japanese and South Korean nationals do not need to enter a ballot.",
          "Certain British Overseas citizens, British Overseas Territories citizens and British Nationals (Overseas) may also qualify under the scheme, subject to the applicable requirements.",
          "Indian nationals follow a separate route called the India Young Professionals Scheme. It has its own eligibility criteria and ballot arrangements, so it should not be confused with the standard Youth Mobility Scheme.",
          "The age requirement is assessed according to the rules for your nationality. Generally, you must be at least 18 when your visa starts and within the applicable upper age limit when you apply.",
        ],
      },
      {
        heading: "Youth Mobility Visa UK Requirements",
        paragraphs: [
          "Meeting the nationality and age conditions is only part of the application. You must also satisfy the financial and personal requirements set by the Home Office.",
          "The main requirements for a Youth Mobility Visa UK include:",
        ],
        bullets: [
          "Maintenance funds: You must have at least £2,530 in personal savings to show that you can support yourself when you arrive.",
          "Savings period: The required funds must have been available for at least 28 consecutive days, with the final day falling within 31 days of your application.",
          "Dependent children: You cannot apply if you have children under 18 who live with you or children for whom you are financially responsible.",
          "Previous participation: You cannot apply if you have already spent time in the UK under the Youth Mobility Scheme.",
          "Ballot selection: If your nationality requires ballot selection, you must receive confirmation that you have been selected before submitting your application.",
        ],
        subsections: [
          {
            heading: "Financial & Nationality-Specific Guidance",
            paragraphs: [
              "The £2,530 financial requirement is not a visa fee. It is evidence that you have enough savings to support yourself during your initial period in the UK.",
              "Applicants should also check whether any additional nationality-specific requirements apply to them.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Youth Mobility Visa UK",
        paragraphs: [
          "The application process normally begins online and must be completed from outside the UK. You can generally apply up to six months before your planned travel date.",
          "The main stages are:",
        ],
        subsections: [
          {
            heading: "1. Check your eligibility",
            paragraphs: [
              "Confirm that your nationality, age and personal circumstances meet the Youth Mobility Scheme requirements. If your nationality requires ballot selection, you must complete that stage first.",
            ],
          },
          {
            heading: "2. Prepare your documents",
            paragraphs: [
              "Gather your passport, bank statements and any additional evidence required for your nationality. Make sure your financial evidence meets the 28-day rule.",
            ],
          },
          {
            heading: "3. Complete the online application",
            paragraphs: [
              "Use the official UK government application service to provide your personal details, travel information and other requested information.",
            ],
          },
          {
            heading: "4. Pay the application fee and healthcare surcharge",
            paragraphs: [
              "You will need to pay the relevant visa application fee and Immigration Health Surcharge as part of the process.",
            ],
          },
          {
            heading: "5. Prove your identity",
            paragraphs: [
              "Depending on your circumstances, you may be asked to use the UK Immigration: ID Check app or attend a visa application centre to provide your fingerprints and photograph.",
            ],
          },
          {
            heading: "6. Wait for the decision",
            paragraphs: [
              "After submitting your application and completing the identity requirements, you must wait for the Home Office decision. Do not travel to the UK until your visa has been approved.",
              "A carefully prepared application can help reduce avoidable problems, particularly where financial evidence or nationality-specific documents are involved.",
            ],
          },
        ],
      },
      {
        heading: "How Much is the Youth Mobility Visa UK?",
        paragraphs: [
          "The cost of a Youth Mobility Visa UK includes the application fee and the Immigration Health Surcharge. The surcharge is normally charged at £776 per year.",
          "The following table shows the standard costs for a two-year initial visa:",
        ],
        table: {
          headers: ["Cost", "Amount"],
          rows: [
            ["Visa application fee", "£340"],
            ["Immigration Health Surcharge per year", "£776"],
            ["Two-year Immigration Health Surcharge", "£1,552"],
            ["Approximate initial total", "£1,892"],
          ],
        },
        paragraphsAfterTable: [
          "Applicants must also demonstrate that they have at least £2,530 in savings. This money is not paid to the Home Office but must be available as financial evidence.",
          "If you qualify for the one-year extension, the extension application fee is £340, with a further £776 Immigration Health Surcharge.",
          "These figures are based on the published fees at the time of writing. Check the latest government fee information before applying, as charges may change.",
          "Would you like to understand the likely cost of your application? Contact Visa Direct Immigration for guidance on the fees and requirements that apply to you.",
        ],
      },
      {
        heading: "How Long is the Youth Mobility Visa UK?",
        paragraphs: [
          "The standard Youth Mobility Visa allows eligible applicants to stay in the UK for up to 24 months. During this period, you can generally work, study and travel in and out of the UK while your permission remains valid.",
          "There is an additional one-year extension available to eligible nationals of Australia, Canada and New Zealand. This means qualifying applicants from these countries may be able to stay for up to three years in total.",
          "Applicants from other participating countries generally cannot extend their Youth Mobility Scheme visa beyond the initial two-year period.",
          "If you turn 31 or 36 after your visa has been issued, depending on your nationality's age limit, this does not automatically end your permission. You can remain in the UK until your visa expires, subject to its conditions.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Visa Direct Immigration provides guidance to help applicants understand the Youth Mobility Scheme and prepare for the application process. Depending on your circumstances, our support may include:",
        ],
        bullets: [
          "Reviewing your age and nationality eligibility.",
          "Explaining the ballot process where applicable.",
          "Identifying the financial and supporting documents required.",
          "Guiding you through the online application stages.",
          "Explaining visa conditions, work restrictions and extension options.",
        ],
        subsections: [
          {
            heading: "Professional Guidance & Legal Authorisation",
            paragraphs: [
              "If you are searching for a Youth Mobility Visa lawyer, solicitor or immigration attorney, it is important to check the professional's qualifications and authorisation before instructing them. Make sure you understand the nature of the service being provided and who will be responsible for handling your application.",
              "Visa Direct Immigration provides immigration application guidance from its offices in Birmingham, Bristol and Reading, supporting individuals who need help understanding UK immigration procedures.",
              "Book Your Immigration Consultation to discuss your circumstances and get guidance on the next steps.",
            ],
          },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Who can apply for a Youth Mobility Visa UK?",
            paragraphs: [
              "Applicants from participating countries may qualify if they meet the relevant age, nationality and financial requirements. Certain British nationality categories are also eligible. Indian nationals must consider the separate India Young Professionals Scheme.",
            ],
          },
          {
            heading: "Can I apply for a Youth Mobility Visa UK without entering a ballot?",
            paragraphs: [
              "Yes, if your nationality does not require ballot selection. Hong Kong SAR passport holders and Taiwanese nationals need to be selected through the relevant ballot. Japanese and South Korean nationals do not currently need to enter one.",
            ],
          },
          {
            heading: "Can I extend my UK Youth Mobility Visa after two years?",
            paragraphs: [
              "Yes, but only if you are a national of Australia, Canada or New Zealand. Eligible applicants can apply for one additional year while living in the UK and holding valid Youth Mobility Scheme permission.",
            ],
          },
          {
            heading: "Can I bring my spouse or children on a Youth Mobility Visa?",
            paragraphs: [
              "No. You cannot include dependants in your Youth Mobility Scheme application. Your partner or children must qualify for and apply under an appropriate immigration route separately.",
            ],
          },
          {
            heading: "Does the Youth Mobility Visa lead to Indefinite Leave to Remain?",
            paragraphs: [
              "No. The Youth Mobility Scheme does not provide a direct route to Indefinite Leave to Remain. If you want to remain in the UK after your permission expires, you must qualify for another immigration route and meet its requirements.",
            ],
          },
        ],
      },
    ],
    iconName: "Globe2",
    keyFeatures: [
      "Age & nationality eligibility assessment (18-30 or 18-35)",
      "Ballot invitation guidance for applicable nationalities",
      "£2,530 maintenance funds & 28-day financial rule verification",
      "Complete online application, IHS surcharge & biometric support",
      "Extension guidance for Australian, Canadian & New Zealand citizens",
    ],
    eligibilityRequirements: [
      "Eligible national aged 18 to 30 or 18 to 35 on date of application",
      "At least £2,530 in personal savings held for at least 28 consecutive days",
      "No dependent children under 18 living with you or financially dependent",
      "Have not previously spent time in the UK under the Youth Mobility Scheme",
      "Confirmation of selection if ballot is required for your nationality",
    ],
    documentsRequired: [
      "Valid passport or recognised travel document",
      "Bank statements showing £2,530 held for 28 consecutive days",
      "Tuberculosis (TB) test results (if from a country where required)",
      "Ballot invitation confirmation (for Hong Kong SAR & Taiwan applicants)",
      "Certified English translations for any non-English documents",
    ],
    processSteps: [
      {
        title: "Check Eligibility & Ballot",
        description: "Confirm nationality, age limits, savings requirement, and ballot requirements where applicable.",
      },
      {
        title: "Gather Documentation",
        description: "Collect passport and bank statements meeting the strict 28-day maintenance funds rule.",
      },
      {
        title: "Complete Online Application",
        description: "Fill out the official UK government online visa application up to 6 months prior to travel.",
      },
      {
        title: "Pay Fees & Health Surcharge",
        description: "Pay the £340 application fee and £776/year Immigration Health Surcharge (£1,552 total).",
      },
      {
        title: "Biometrics & Decision",
        description: "Prove your identity via the ID Check app or local VAC and await Home Office decision.",
      },
    ],
    faqs: [
      {
        question: "Who can apply for a Youth Mobility Visa UK?",
        answer:
          "Applicants from participating countries may qualify if they meet the relevant age, nationality and financial requirements. Certain British nationality categories are also eligible. Indian nationals must consider the separate India Young Professionals Scheme.",
      },
      {
        question: "Can I apply for a Youth Mobility Visa UK without entering a ballot?",
        answer:
          "Yes, if your nationality does not require ballot selection. Hong Kong SAR passport holders and Taiwanese nationals need to be selected through the relevant ballot. Japanese and South Korean nationals do not currently need to enter one.",
      },
      {
        question: "Can I extend my UK Youth Mobility Visa after two years?",
        answer:
          "Yes, but only if you are a national of Australia, Canada or New Zealand. Eligible applicants can apply for one additional year while living in the UK and holding valid Youth Mobility Scheme permission.",
      },
      {
        question: "Can I bring my spouse or children on a Youth Mobility Visa?",
        answer:
          "No. You cannot include dependants in your Youth Mobility Scheme application. Your partner or children must qualify for and apply under an appropriate immigration route separately.",
      },
      {
        question: "Does the Youth Mobility Visa lead to Indefinite Leave to Remain?",
        answer:
          "No. The Youth Mobility Scheme does not provide a direct route to Indefinite Leave to Remain. If you want to remain in the UK after your permission expires, you must qualify for another immigration route and meet its requirements.",
      },
    ],
  },

  {
    id: "long-term-work-visa",
    slug: "long-term-work-visa",
    title: "Long Term Work Visa UK",
    category: "Business Immigration",
    shortDescription:
      "Get support with your UK long-term work visa application, including eligibility, Skilled Worker sponsorship, documents and visa requirements.",
    heroTagline: "Understand your UK long-term work visa options and prepare a complete application.",
    seoTitle: "Long Term Work Visa UK Services | Visa Direct Immigration",
    seoDescription:
      "Get support with your UK long-term work visa application. We help with eligibility, Skilled Worker sponsorship, documents and visa requirements.",
    primaryCta: "Book Your Immigration Consultation",
    iconName: "Briefcase",
    keyFeatures: [
      "Long-term work visa route and eligibility assessment",
      "Skilled Worker sponsorship and Certificate of Sponsorship guidance",
      "Document preparation and application review",
      "Fees, processing times, extensions and settlement guidance",
    ],
    eligibilityRequirements: [
      "Eligible job offer from a Home Office-approved employer",
      "Valid Certificate of Sponsorship for the proposed role",
      "Role meets the applicable occupation, skill and salary requirements",
      "Required English language level, usually B2 for new Skilled Worker applicants",
      "Required maintenance funds or an applicable exemption",
    ],
    documentsRequired: [
      "Valid passport or travel document",
      "Certificate of Sponsorship reference number",
      "Evidence of your job, salary and occupation",
      "English language evidence or proof of an exemption",
      "Bank statements showing maintenance funds, where required",
      "Qualifications and other supporting documents relevant to your application",
    ],
    processSteps: [
      {
        title: "Find an Eligible UK Employer",
        description:
          "Secure a job offer from an employer approved to sponsor workers under the relevant visa route.",
      },
      {
        title: "Receive Your Certificate of Sponsorship",
        description:
          "Your employer assigns a valid Certificate of Sponsorship containing details of your role and employment.",
      },
      {
        title: "Prepare Your Documents",
        description:
          "Gather your passport, sponsorship details, qualifications, English language evidence and financial documents.",
      },
      {
        title: "Submit Your Application",
        description:
          "Complete the relevant online visa application, pay the applicable fees and complete identity verification.",
      },
      {
        title: "Receive a Decision",
        description:
          "Once approved, travel to the UK and begin the sponsored employment in accordance with your visa conditions.",
      },
    ],
    contentSections: [
      {
        heading: "Long Term Work Visa UK",
        paragraphs: [
          "A Long Term Work Visa UK allows eligible overseas nationals to live and work in the country for an extended period. The most common route is the Skilled Worker visa, although other options are available depending on your profession, employer and circumstances.",
          "If you want to apply for a long term work visa UK, you will generally need an eligible job offer from a Home Office-approved employer, a Certificate of Sponsorship (CoS) and evidence that you meet the relevant immigration requirements.",
          "Visa Direct Immigration provides application guidance to individuals seeking employment opportunities in the UK. We support applicants in Birmingham, Bristol, Reading and across the UK with understanding visa requirements, preparing documents and navigating the application process.",
          "Book Your Immigration Consultation to discuss your eligibility and available work visa options.",
        ],
      },
      {
        heading: "What is a Long Term Work Visa UK?",
        paragraphs: [
          "A long-term work visa is a general term for UK immigration routes that allow overseas nationals to work in the country for several years. It is not a separate visa category, so you must identify the route that matches your job and circumstances.",
        ],
        bullets: [
          "Skilled Worker Visa: For eligible professionals with a job offer from an approved UK sponsor.",
          "Health and Care Worker Visa: For eligible medical and healthcare professionals working for approved employers.",
          "Global Business Mobility Visa: For certain overseas employees undertaking qualifying temporary business assignments in the UK.",
          "International Sportsperson Visa: For eligible professional sportspeople and coaches endorsed by their relevant governing body.",
        ],
        subsections: [
          {
            heading: "Choosing the Correct Route",
            paragraphs: [
              "The Skilled Worker route is generally the main option for people seeking long-term employment in the UK. Some other routes have different conditions and may not lead directly to settlement.",
            ],
          },
        ],
      },
      {
        heading: "Long Term Work Visa UK Requirements",
        paragraphs: [
          "The eligibility criteria depend on the visa route you choose. However, applicants generally need to meet several important conditions.",
        ],
        subsections: [
          {
            heading: "1. Eligible Job Offer",
            paragraphs: [
              "For a Skilled Worker visa, you must have a confirmed job offer from a UK employer approved by the Home Office. Your position must also appear on the eligible occupation list and meet the applicable skill and salary requirements.",
            ],
          },
          {
            heading: "2. Certificate of Sponsorship",
            paragraphs: [
              "Your employer must issue a valid Certificate of Sponsorship containing details of your job, salary and employment arrangements. You will need its reference number when submitting your application.",
            ],
          },
          {
            heading: "3. Salary Requirements",
            paragraphs: [
              "Your salary must meet the minimum threshold and the applicable going rate for your occupation, whichever is higher, unless a permitted lower salary provision applies.",
              "For many new Skilled Worker applicants, the standard salary threshold is £41,700 per year. Different rules and salary discounts may apply to eligible applicants, including certain new entrants and healthcare professionals.",
            ],
          },
          {
            heading: "4. English Language Requirements",
            paragraphs: [
              "You must demonstrate the required knowledge of English for your visa route. For new Skilled Worker applicants, the current requirement is generally B2 level under the Common European Framework of Reference (CEFR), subject to applicable exemptions and transitional provisions.",
            ],
          },
          {
            heading: "5. Financial Requirements",
            paragraphs: [
              "You may need to demonstrate that you have at least £1,270 available to support yourself when arriving in the UK. This amount must normally have been held for 28 consecutive days unless you qualify for an exemption or your employer certifies maintenance.",
            ],
          },
        ],
      },
      {
        heading: "How to Apply for a Long Term Work Visa UK",
        paragraphs: [
          "The application process usually involves securing sponsorship, preparing the necessary evidence and submitting an online application.",
        ],
        bullets: [
          "1. Find an eligible UK employer: Secure a job offer from an employer approved to sponsor workers under the relevant visa route.",
          "2. Receive your Certificate of Sponsorship: Your employer must assign a valid CoS with the details of your role.",
          "3. Prepare your documents: Gather your passport, sponsorship details, qualifications, English language evidence and financial documents where required.",
          "4. Submit your application: Complete the relevant online visa application and provide accurate information.",
          "5. Pay the applicable fees: Pay the visa application fee and Immigration Health Surcharge, where applicable.",
          "6. Complete identity verification: Use the UK Immigration: ID Check app or attend a visa application centre for biometric enrolment if instructed.",
          "7. Receive your decision: Once approved, you can travel to the UK and begin the sponsored employment in accordance with your visa conditions.",
        ],
        subsections: [
          {
            heading: "Application Timing",
            paragraphs: [
              "You can usually apply up to three months before the start date stated on your Certificate of Sponsorship.",
            ],
          },
        ],
      },
      {
        heading: "Long Term Work Visa UK Fees and Processing Time",
        paragraphs: [
          "The cost depends on the visa category, application location and length of permission. For example, the Skilled Worker visa has different fees for applications made inside and outside the UK.",
        ],
        table: {
          headers: ["Expense", "Skilled Worker Visa"],
          rows: [
            ["Application fee", "Usually £819 to £1,865"],
            ["Immigration Health Surcharge", "Usually £1,035 per year"],
            ["Maintenance funds", "Usually £1,270"],
            ["Processing outside the UK", "Usually 3 weeks"],
            ["Processing inside the UK", "Usually 8 weeks"],
          ],
        },
        paragraphsAfterTable: [
          "Eligible Health and Care Worker applicants pay lower application fees and are exempt from the Immigration Health Surcharge. Their standard application fee is £324 for permission of up to three years or £628 for more than three years.",
          "Processing times can vary if additional checks or documents are required. Always check the latest Home Office fees before applying.",
        ],
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Choosing the right work visa and preparing a complete application can make the process easier to manage. Visa Direct Immigration provides guidance to individuals looking to work in the UK.",
          "Our team can help you:",
        ],
        bullets: [
          "Understand the available long-term work visa routes.",
          "Review your eligibility and employment circumstances.",
          "Understand employer sponsorship and Certificate of Sponsorship requirements.",
          "Identify the supporting documents needed.",
          "Prepare and check your application information.",
          "Understand visa fees, processing times and extension options.",
        ],
        subsections: [
          {
            heading: "UK-Wide Support",
            paragraphs: [
              "We support applicants through our offices in Birmingham, Bristol and Reading, as well as remotely across the UK.",
              "Book Your Immigration Consultation to discuss your UK work visa options and application requirements.",
            ],
          },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "1. What is the best long-term work visa for the UK?",
            paragraphs: [
              "The Skilled Worker visa is a common option for overseas nationals seeking long-term employment in the UK. Healthcare professionals may qualify for the Health and Care Worker visa, depending on their occupation and employer.",
            ],
          },
          {
            heading: "2. Can I apply for a long-term work visa without a job offer?",
            paragraphs: [
              "Most sponsored long-term work routes require a confirmed job offer or qualifying sponsorship arrangement. The Skilled Worker visa specifically requires an eligible job offer from an approved employer.",
            ],
          },
          {
            heading: "3. How long does a UK work visa last?",
            paragraphs: [
              "A Skilled Worker visa can generally be granted for up to five years. You may extend it if you continue to meet the eligibility requirements.",
            ],
          },
          {
            heading: "4. Can a UK work visa lead to permanent residence?",
            paragraphs: [
              "Yes. Eligible Skilled Worker and Health and Care Worker visa holders may apply for Indefinite Leave to Remain after five years, provided they meet the relevant settlement requirements.",
            ],
          },
          {
            heading: "5. Can I bring my family on a UK long-term work visa?",
            paragraphs: [
              "Eligible applicants may bring their partner and dependent children, subject to the rules of their specific visa category. Some work routes have restrictions on dependant applications.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best long-term work visa for the UK?",
        answer:
          "The Skilled Worker visa is a common option for overseas nationals seeking long-term employment in the UK. Healthcare professionals may qualify for the Health and Care Worker visa, depending on their occupation and employer.",
      },
      {
        question: "Can I apply for a long-term work visa without a job offer?",
        answer:
          "Most sponsored long-term work routes require a confirmed job offer or qualifying sponsorship arrangement. The Skilled Worker visa specifically requires an eligible job offer from an approved employer.",
      },
      {
        question: "How long does a UK work visa last?",
        answer:
          "A Skilled Worker visa can generally be granted for up to five years. You may extend it if you continue to meet the eligibility requirements.",
      },
      {
        question: "Can a UK work visa lead to permanent residence?",
        answer:
          "Yes. Eligible Skilled Worker and Health and Care Worker visa holders may apply for Indefinite Leave to Remain after five years, provided they meet the relevant settlement requirements.",
      },
      {
        question: "Can I bring my family on a UK long-term work visa?",
        answer:
          "Eligible applicants may bring their partner and dependent children, subject to the rules of their specific visa category. Some work routes have restrictions on dependant applications.",
      },
    ],
  },
  {
  id: "scale-up-visa",
  slug: "scale-up-visa",
  title: "Scale-Up Visa",
  category: "Business Immigration",
  shortDescription: "Work in the UK for a fast-growing scale-up business with initial sponsorship and unsponsored flexibility after 6 months.",
  heroTagline: "Join high-growth UK companies with independent career flexibility.",
  seoTitle: "Scale Up Visa Lawyer UK | Visa Direct Immigration",
  seoDescription: "Get professional UK Scale Up Visa application support. We help with eligibility, sponsorship, documents, requirements and the application process.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "TrendingUp",
  keyFeatures: [
    "Scale-up sponsor verification and CoS review",
    "High-growth criteria and salary threshold compliance",
    "Unsponsored renewal and job flexibility after 6 months",
    "5-year direct pathway to Indefinite Leave to Remain"
  ],
  eligibilityRequirements: [
    "At least 18 years old when applying",
    "Job offer from an approved UK scale-up business with valid CoS",
    "Eligible occupation at the required skill level",
    "Salary of at least £39,100 or the going rate for your occupation, whichever is higher",
    "English language ability at B2 level",
    "At least £1,270 in personal savings held for 28 consecutive days (unless exempt)"
  ],
  documentsRequired: [
    "Valid passport or travel document",
    "Certificate of Sponsorship reference number",
    "Job title, annual salary and occupation code",
    "Evidence of English language ability",
    "Bank statements showing required maintenance funds, if applicable",
    "TB test certificate, if required",
    "ATAS certificate, if required for research role"
  ],
  processSteps: [
    {
      title: "Eligibility Check",
      description: "Confirm that your job, employer, salary and qualifications meet the Scale-up Visa requirements."
    },
    {
      title: "Secure Job Offer & CoS",
      description: "Receive an offer from a business approved to sponsor Scale-up Workers and obtain your Certificate of Sponsorship."
    },
    {
      title: "Prepare & Submit Application",
      description: "Gather documents, complete the online application, pay the fees and provide biometric information."
    },
    {
      title: "Transition to Unsponsored Status",
      description: "After 6 months in the sponsored role, you can change employers or leave your job without updating your visa."
    }
  ],
  faqs: [
    {
      question: "What are the main Scale-up Visa requirements?",
      answer: "You must be at least 18, have a job offer from an approved UK scale-up business, meet the eligible occupation and salary requirements, receive a valid Certificate of Sponsorship and demonstrate the required English language ability."
    },
    {
      question: "Can I apply for a Scale-up Visa without a job offer?",
      answer: "No. An initial sponsored application requires a qualifying job offer and Certificate of Sponsorship from an approved UK scale-up business. However, eligible people who have already completed six months in a sponsored Scale-up role may qualify for an unsponsored application."
    },
    {
      question: "How much salary do I need for a Scale-up Visa UK?",
      answer: "The standard salary requirement is at least £39,100 per year or the going rate for your occupation, whichever is higher. Your employer should confirm the occupation code and applicable salary before you apply."
    },
    {
      question: "Can I change employers on a Scale-up Visa?",
      answer: "You must work in your sponsored job for at least the first six months. After completing this period, you can generally change employers or leave your sponsored job without updating your visa."
    },
    {
      question: "Can I extend my Scale-up Visa?",
      answer: "Yes. You may be able to extend your permission without a new Certificate of Sponsorship if you meet the applicable employment and earnings requirements. A successful unsponsored application normally grants a further three years."
    },
    {
      question: "Can my family join me on a Scale-up Visa?",
      answer: "Yes. Your eligible partner and dependent children can apply to join you or stay in the UK. Each dependant must submit an application and meet the relevant relationship and financial requirements."
    },
    {
      question: "Does the Scale-up Visa lead to permanent residence?",
      answer: "Yes. Eligible Scale-up Workers may apply for Indefinite Leave to Remain after five years of qualifying residence, provided they meet the continuous residence, earnings, English language and other settlement requirements."
    }
  ],
  contentSections: [
    {
      heading: "Scale Up Visa UK",
      paragraphs: [
        "The UK Scale-up Visa allows eligible skilled workers to take up employment with an approved, fast-growing UK business. It is designed to help qualifying businesses recruit talented professionals who can contribute to their continued growth.",
        "The route offers an initial sponsored period, followed by greater employment flexibility after the first six months. Eligible applicants may also be able to extend their permission and eventually apply for Indefinite Leave to Remain (ILR).",
        "Understanding the Scale-up Visa requirements, salary threshold, sponsorship arrangements and English language criteria is important before applying. Visa Direct Immigration provides application guidance and support to individuals and businesses in Birmingham, Bristol, Reading and across the UK."
      ]
    },
    {
      heading: "What is the UK Scale-up Visa?",
      paragraphs: [
        "The Scale-up Worker Visa is a UK work route for skilled professionals who have a job offer from an approved scale-up business. The employer must meet specific Home Office requirements, and the offered position must satisfy the occupation, salary and sponsorship criteria.",
        "One of the main benefits is that the route provides more flexibility than some other sponsored work visas. You must initially work in your sponsored position for at least six months, but after this period you can change or leave your job without updating your visa.",
        "The route may be suitable for professionals in eligible occupations who have secured employment with a qualifying UK business and want a potential pathway towards settlement."
      ]
    },
    {
      heading: "Scale-up Visa Eligibility Requirements",
      paragraphs: ["To qualify for a Scale-up Visa UK, you must meet the relevant Home Office requirements for age, employment, sponsorship, salary, English language ability and maintenance funds."],
      subsections: [
        {
          heading: "1. Age Requirement",
          paragraphs: ["You must be at least 18 years old when you submit your Scale-up Visa application."]
        },
        {
          heading: "2. Job Offer from an Approved Scale-up Business",
          paragraphs: [
            "You must have a confirmed job offer from a UK business approved to sponsor workers under the Scale-up route. The employer must appear on the Home Office register of licensed sponsors with permission to sponsor Scale-up Workers.",
            "A business may qualify through an approved endorsing body or by meeting the relevant growth criteria."
          ]
        },
        {
          heading: "3. Eligible Occupation",
          paragraphs: ["Your proposed role must appear on the eligible occupation list and meet the required skill level. You will need the correct four-digit occupation code, which your employer should provide."]
        },
        {
          heading: "4. Salary Requirements",
          paragraphs: ["Your salary must meet the higher of:"],
          bullets: [
            "£39,100 per year.",
            "The applicable going rate for your occupation."
          ]
        },
        {
          heading: "5. Certificate of Sponsorship",
          paragraphs: ["Your employer must issue a valid Certificate of Sponsorship (CoS) confirming your job, salary and employment arrangements. The certificate must normally be used within three months of being issued."]
        },
        {
          heading: "6. English Language Requirement",
          paragraphs: ["You must demonstrate English language ability at B2 level in reading, writing, speaking and listening, unless you qualify for an exemption. You may meet this requirement through an approved English language test or another accepted method."]
        },
        {
          heading: "7. Financial Requirement",
          paragraphs: ["You normally need at least £1,270 in personal savings, held for 28 consecutive days, unless your employer certifies maintenance or you qualify for an exemption. Applicants who have already been in the UK with valid permission for at least 12 months may not need to provide separate evidence of funds."]
        }
      ]
    },
    {
      heading: "Documents Required for a Scale-up Visa Application",
      paragraphs: ["Preparing the correct documents is an important part of the Scale-up Visa application process. Your exact requirements will depend on your employment and personal circumstances.", "Common documents include:"],
      bullets: [
        "A valid passport or travel document.",
        "Certificate of Sponsorship reference number.",
        "Job title, annual salary and occupation code.",
        "Employer's name and sponsor licence number.",
        "Evidence of English language ability.",
        "Bank statements showing the required maintenance funds, if applicable.",
        "Proof of relationship if your partner or children are applying as dependants.",
        "TB test certificate, if required.",
        "ATAS certificate, if your role involves research that requires one."
      ],
      paragraphsAfterTable: [
        "Documents that are not in English or Welsh must normally be accompanied by a certified translation."
      ]
    },
    {
      heading: "How to Apply for a Scale-up Visa UK",
      paragraphs: ["You can apply for a Scale-up Visa from outside the UK or, if eligible, switch to this route or extend your permission from inside the country.", "The application process generally involves the following steps:"],
      bullets: [
        "Check your eligibility: Confirm that your job, employer, salary and qualifications meet the Scale-up Visa requirements.",
        "Secure an eligible job offer: You must receive an offer from a business approved to sponsor Scale-up Workers.",
        "Receive your Certificate of Sponsorship: Your employer will issue the electronic sponsorship reference needed for your application.",
        "Prepare your documents: Gather your passport, English language evidence, financial documents and other required information.",
        "Complete the online application: Submit the appropriate Scale-up Visa application through GOV.UK.",
        "Pay the required fees: Pay the application fee and Immigration Health Surcharge.",
        "Prove your identity: Follow the instructions to use the UK Immigration: ID Check app or attend a visa application centre for biometrics."
      ],
      paragraphsAfterTable: [
        "You can normally apply up to three months before the start date stated on your Certificate of Sponsorship. If you are switching from another UK visa, you must also check that your current immigration category allows you to switch."
      ]
    },
    {
      heading: "Scale-up Visa Fees and Processing Time",
      paragraphs: ["Applicants should budget for the visa application fee, Immigration Health Surcharge and any applicable maintenance requirements."],
      table: {
        headers: ["Requirement", "Current details"],
        rows: [
          ["Application fee", "£937"],
          ["Immigration Health Surcharge", "Usually £1,035 per year"],
          ["Maintenance funds", "£1,270"],
          ["Processing outside the UK", "Usually 3 weeks"],
          ["Processing inside the UK", "Usually 8 weeks"]
        ]
      },
      paragraphsAfterTable: [
        "The £1,270 maintenance amount must normally be held for 28 consecutive days, with the final day within 31 days of applying. An eligible sponsor may certify maintenance instead.",
        "Your actual costs may vary depending on the length of permission, application type and number of dependants. Additional charges may apply if you choose a faster decision service."
      ]
    },
    {
      heading: "How Long Can You Stay on a Scale-up Visa?",
      paragraphs: [
        "A successful initial sponsored Scale-up Visa application normally allows you to stay in the UK for two years. You must work in your sponsored role for the first six months. After that, you can generally change employers, leave your job or become self-employed without updating your visa.",
        "If you meet the requirements, you may apply for an unsponsored Scale-up Visa, which normally grants a further three years. You may also extend your permission without a new Certificate of Sponsorship, provided you meet the relevant employment and earnings requirements."
      ]
    },
    {
      heading: "Scale-up Visa Immigration Adviser Support",
      paragraphs: [
        "Applicants searching for a Scale-up Visa lawyer, solicitor or immigration adviser often need assistance understanding the sponsorship rules, checking their eligibility and preparing a complete application.",
        "The route has specific requirements, particularly around the approved employer, occupation code, salary threshold and six-month sponsored employment period. Understanding these conditions before applying can help you avoid mistakes and delays.",
        "Visa Direct Immigration provides application guidance and support. If you are looking for a Scale-up Visa immigration lawyer, check their professional qualifications and authorisation before engaging them for regulated legal or immigration advice.",
        "We support applicants in Birmingham, Bristol and Reading, as well as remotely across the UK.",
        "Book Your Immigration Consultation to discuss your Scale-up Visa application and the support you may need."
      ]
    }
  ]
},
  {
  id: "uk-expansion-worker-visa",
  slug: "uk-expansion-worker-visa",
  title: "UK Expansion Worker Visa",
  category: "Business Immigration",
  shortDescription: "Global Business Mobility route enabling senior managers or specialist employees to establish a UK commercial presence.",
  heroTagline: "Establish your overseas business in the UK commercial marketplace.",
  seoTitle: "UK Expansion Worker Visa Lawyers | Visa Direct Immigration",
  seoDescription: "Need a UK Expansion Worker Visa consultant? Get professional application support with eligibility, sponsorship, documents, fees and requirements.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "Building2",
  keyFeatures: [
    "UK expansion sponsor licence setup support",
    "Senior manager & specialist worker CoS allocation",
    "Overseas trading evidence verification (3+ years)",
    "Permission to stay up to 2 years while setting up operations"
  ],
  eligibilityRequirements: [
    "Currently employed by overseas business linked to UK sponsor",
    "Worked outside UK for the overseas business for at least 12 months (unless high earner)",
    "Valid CoS from an approved UK Expansion Worker sponsor",
    "Eligible role and salary meeting the route threshold"
  ],
  documentsRequired: [
    "Passport and proof of overseas employment",
    "Overseas company trading records and commercial expansion plan",
    "Certificate of Sponsorship reference",
    "Evidence of personal maintenance funds"
  ],
  processSteps: [
    {
      title: "Sponsor Licence Establishment",
      description: "Assisting overseas company to obtain a provisional UK Expansion Worker sponsor licence."
    },
    {
      title: "Key Personnel Deployment",
      description: "Assigning Certificate of Sponsorship to the Authorising Officer / senior specialist."
    },
    {
      title: "UK Presence & Trading",
      description: "Deploying personnel to the UK to establish physical premises and begin operations."
    }
  ],
  faqs: [
    {
      question: "Who is eligible for a UK Expansion Worker Visa?",
      answer: "Senior managers and specialist employees of overseas businesses may qualify if they meet the employment, occupation, salary and sponsorship requirements. The business must also meet the relevant expansion and sponsor licence conditions."
    },
    {
      question: "Can I apply for a UK Expansion Worker Visa without a sponsor?",
      answer: "No. You must have a valid Certificate of Sponsorship from an approved UK sponsor before submitting your application."
    },
    {
      question: "Can I extend my UK Expansion Worker Visa?",
      answer: "Yes. You may apply for a further 12 months if you continue to meet the requirements. Your total stay under this route cannot exceed two years."
    },
    {
      question: "Does the UK Expansion Worker Visa lead to ILR?",
      answer: "No. This route does not directly lead to settlement. You may be able to switch to another eligible visa route if you meet its requirements."
    }
  ],
  contentSections: [
    {
      heading: "UK Expansion Worker Visa",
      paragraphs: [
        "The UK Expansion Worker Visa allows an overseas business to send an eligible senior manager or specialist employee to the UK to establish its first branch or subsidiary. It is part of the Global Business Mobility visa category and is intended for businesses that have not yet started trading in the UK.",
        "Visa Direct Immigration provides guidance for individuals and overseas businesses preparing a UK Expansion Worker Visa application. We can help you understand the sponsorship process, eligibility requirements, supporting documents and application stages."
      ]
    },
    {
      heading: "What is the UK Expansion Worker Visa?",
      paragraphs: [
        "The UK Expansion Worker Visa is a temporary sponsored work route for employees of overseas businesses planning to expand into the British market. It allows an eligible employee to travel to the UK and undertake work connected with establishing the company's UK presence.",
        "The route is suitable for senior managers and specialist employees who already work for the overseas business. If the company is already actively trading in the UK, a different immigration route, such as the Senior or Specialist Worker Visa, may be more appropriate."
      ]
    },
    {
      heading: "UK Expansion Worker Visa Requirements",
      paragraphs: [
        "Applicants must meet specific sponsorship, employment, occupation and salary requirements. The overseas business must also qualify to sponsor workers under this route.",
        "The main eligibility criteria include:"
      ],
      subsections: [
        {
          heading: "1. Valid Certificate of Sponsorship",
          paragraphs: [
            "You must receive a valid Certificate of Sponsorship (CoS) from an approved UK sponsor. It confirms your proposed job, salary, occupation code and employment details. You must apply within three months of receiving your CoS."
          ]
        },
        {
          heading: "2. Previous Employment with the Overseas Business",
          paragraphs: [
            "You must normally have worked for the overseas employer outside the UK for at least 12 months. Exceptions apply if you earn more than £73,900, or if you are a qualifying Japanese national or an Australian national or permanent resident working for an expanding company from that country."
          ]
        },
        {
          heading: "3. Eligible Job and Salary",
          paragraphs: [
            "Your position must appear on the eligible occupation list and meet the required skill level. You must normally earn at least £52,500 per year or the going rate for your occupation, whichever is higher."
          ]
        },
        {
          heading: "4. Age Requirement",
          paragraphs: ["You must be at least 18 years old when applying."]
        },
        {
          heading: "5. Financial Requirement",
          paragraphs: [
            "You generally need at least £1,270 in personal savings, held for 28 consecutive days, unless you have already been in the UK with valid permission for at least 12 months or your sponsor certifies your maintenance."
          ]
        }
      ]
    },
    {
      heading: "Requirements for the Overseas Business",
      paragraphs: [
        "The UK Expansion Worker route also has specific requirements for the sponsoring organisation. The overseas business must be actively trading outside the UK and have a qualifying link with the proposed UK branch or subsidiary.",
        "The business must demonstrate a UK footprint, such as registered UK premises or a qualifying Companies House registration, and provide credible plans to establish a UK trading presence within two years. The overseas business will generally need to demonstrate at least three years of active trading, subject to applicable exceptions.",
        "A UK Expansion Worker sponsor licence is required before the business can assign a Certificate of Sponsorship. The employer must also comply with its ongoing sponsorship duties."
      ]
    },
    {
      heading: "Benefits of the UK Expansion Worker Visa",
      paragraphs: ["This route offers several advantages for overseas companies and eligible employees:"],
      bullets: [
        "Establish a UK presence: Send experienced staff to help set up a UK branch or subsidiary.",
        "Transfer specialist knowledge: Bring senior managers and specialist employees who understand the overseas business.",
        "Develop UK operations: Support the company's expansion plans and prepare for future trading.",
        "Bring eligible family members: Qualifying partners and dependent children can apply to accompany the main applicant.",
        "Travel and study: Visa holders can travel abroad and return to the UK and undertake permitted study.",
        "Explore future immigration options: After establishing a UK trading presence, the business may be able to qualify for additional sponsorship routes."
      ]
    },
    {
      heading: "Documents Required for UK Expansion Worker Visa",
      paragraphs: ["You should prepare the required documents before submitting your application. These generally include:"],
      bullets: [
        "Valid passport or travel document.",
        "Certificate of Sponsorship reference number.",
        "Job title, annual salary and occupation code.",
        "Employer's name and sponsor licence number.",
        "Bank statements showing the required maintenance funds, if applicable.",
        "Evidence of previous employment outside the UK, if requested.",
        "Tuberculosis test certificate, if required.",
        "Evidence of relationship for accompanying dependants.",
        "Certified translations of documents not written in English or Welsh."
      ]
    },
    {
      heading: "How to Apply for a UK Expansion Worker Visa",
      paragraphs: ["The application process involves both the overseas employer and the proposed employee."],
      bullets: [
        "Check eligibility: Confirm that the employee and overseas business meet the route's requirements.",
        "Obtain a sponsor licence: The overseas business must establish its UK footprint and apply for the appropriate sponsor licence.",
        "Receive a Certificate of Sponsorship: Once authorised, the employer assigns a CoS to the eligible employee.",
        "Prepare documents: Gather identity, employment, financial and other supporting evidence.",
        "Submit the online application: Complete the relevant application form and pay the visa fee and Immigration Health Surcharge.",
        "Complete identity checks: Use the UK Immigration ID Check app or attend a biometric appointment, depending on the instructions.",
        "Wait for a decision: UK Visas and Immigration will assess the application and notify you of the outcome."
      ],
      paragraphsAfterTable: [
        "You can normally apply up to three months before the employment start date shown on your Certificate of Sponsorship."
      ]
    },
    {
      heading: "Cost of UK Expansion Worker Visa",
      paragraphs: ["The standard application fee is £340 per applicant. You must also budget for the Immigration Health Surcharge and any other applicable costs."],
      table: {
        headers: ["Expense", "Cost"],
        rows: [
          ["Visa application fee", "£340"],
          ["Immigration Health Surcharge for an adult", "Usually £1,035 per year"],
          ["Maintenance funds", "£1,270, where required"]
        ]
      },
      paragraphsAfterTable: [
        "The £1,270 maintenance requirement is money you must hold to support yourself, not a fee paid to the Home Office. Dependants have separate application fees, healthcare surcharges and financial requirements. The employer may also have separate sponsor licence and business establishment costs.",
        "Always check the latest Home Office fees before applying."
      ]
    },
    {
      heading: "UK Expansion Worker Visa Lawyers and Consultant Support",
      paragraphs: [
        "Applying for this visa involves both personal eligibility and detailed business sponsorship requirements. Mistakes in the sponsor licence application, overseas trading evidence, Certificate of Sponsorship or employee documents can cause delays or refusal.",
        "If you are searching for UK Expansion Worker Visa lawyers, the best solicitors for UK Expansion Worker Visas or an immigration consultant, check the professional's qualifications, authorisation and experience with business immigration applications.",
        "Visa Direct Immigration can provide application guidance to help you understand the requirements, prepare supporting documents and navigate the application process. We support clients in Birmingham, Bristol, Reading and across the UK through remote consultations.",
        "Book Your Immigration Consultation to discuss your UK Expansion Worker Visa application."
      ]
    }
  ]
},
  {
  id: "secondment-worker-visa",
  slug: "secondment-worker-visa",
  title: "Secondment Worker Visa",
  category: "Business Immigration",
  shortDescription:
    "Understand UK Secondment Worker Visa eligibility, sponsorship, documents, application costs and processing times.",
  heroTagline: "Prepare your UK Secondment Worker Visa application with clear sponsorship and contract guidance.",
  seoTitle: "UK Secondment Worker Visa Lawyers in the UK",
  seoDescription:
    "Applying for a UK Secondment Worker Visa? Understand eligibility, sponsorship, documents, application costs and processing times. Get immigration guidance.",
  primaryCta: "Book Your Immigration Consultation",
  heroImage: "/images/services/secondment-worker-visa.webp",
  supportingImages: [
    {
      src: "/images/service-business.webp",
      alt: "UK Secondment Worker Visa contract and sponsorship documents",
      caption: "Guidance for high-value contracts, sponsorship and secondment applications",
    },
  ],
  contentSections: [
    {
      heading: "UK Secondment Worker Visa",
      paragraphs: [
        "The UK Secondment Worker Visa allows eligible employees of overseas organisations to undertake temporary work assignments in the United Kingdom. It is part of the Global Business Mobility route and applies where an overseas employer has a qualifying high-value contract with a UK organisation.",
        "Applicants must meet specific employment and sponsorship requirements, including having worked for their overseas employer for at least six months. The UK organisation must also hold the appropriate sponsor licence and assign a valid Certificate of Sponsorship.",
        "Visa Direct Immigration provides guidance on UK work visa applications, helping individuals understand eligibility, prepare documents and follow the relevant application process.",
      ],
    },
    {
      heading: "What is a UK Secondment Worker Visa?",
      paragraphs: [
        "The Secondment Worker Visa is designed for overseas employees who are temporarily transferred to the UK to work for a different organisation as part of a qualifying business arrangement.",
        "Unlike the Skilled Worker Visa, this route is not intended for people independently seeking employment with a UK company. It applies to specific secondment arrangements connected to a high-value contract between the overseas employer and the UK sponsor.",
        "The route is temporary and does not provide a direct path to permanent settlement.",
      ],
    },
    {
      heading: "Eligibility Criteria for a UK Secondment Worker Visa",
      paragraphs: [
        "To qualify, applicants must meet the employment, sponsorship and job requirements set by the Home Office.",
        "The main eligibility criteria include:",
      ],
      bullets: [
        "Existing overseas employment: You must already work for an overseas organisation that has a qualifying contract with your UK sponsor.",
        "Six months of employment: You must normally have worked for your overseas employer outside the UK for at least six months.",
        "High-value contract: Your overseas employer must have a contract worth at least £50 million with the UK organisation sponsoring you.",
        "Approved UK sponsor: The UK organisation must hold the appropriate sponsor licence and have the relevant contract approved by the Home Office.",
        "Certificate of Sponsorship: You must receive a valid CoS containing details of your proposed UK role.",
        "Eligible occupation: Your job must appear on the list of occupations permitted under the Secondment Worker route.",
        "Minimum age: You must be at least 18 years old when you apply.",
      ],
      subsections: [
        {
          heading: "Contract and Role Check",
          paragraphs: [
            "Your employer should confirm that the contract and your proposed role meet the requirements before you begin the application. Having an overseas employer or a UK business contact alone is not enough to qualify.",
          ],
        },
      ],
    },
    {
      heading: "High-Value Contract and Sponsorship Requirements",
      paragraphs: [
        "The high-value contract is central to this visa route. The overseas organisation must have a qualifying contract with the UK sponsor worth at least £50 million.",
        "The UK organisation must be authorised to sponsor Secondment Workers and have the relevant contract registered and approved by the Home Office. The UK sponsor is responsible for assigning your Certificate of Sponsorship.",
      ],
      bullets: [
        "Your personal details.",
        "Job title and occupation code.",
        "Details of the UK sponsor.",
        "Proposed employment dates.",
        "Information about the sponsored role.",
      ],
      subsections: [
        {
          heading: "Certificate of Sponsorship Validity",
          paragraphs: [
            "You must use the CoS reference number when completing your visa application. It is normally valid for three months from the date it is assigned, so you should apply within that period.",
          ],
        },
      ],
    },
    {
      heading: "UK Secondment Worker Visa Documents",
      paragraphs: [
        "Preparing the correct documents helps the Home Office verify your identity, employment, sponsorship and ability to support yourself in the UK.",
        "You will generally need:",
      ],
      bullets: [
        "A valid passport or other accepted travel document.",
        "Your Certificate of Sponsorship reference number.",
        "Your job title and occupation code.",
        "Your UK sponsor's name and sponsor licence number.",
        "Bank statements showing the required maintenance funds, if applicable.",
        "Evidence of your employment with the overseas organisation, if requested.",
        "Tuberculosis test results, if required based on your country of residence.",
        "Proof of your relationship with your partner or children if they are applying as dependants.",
        "An ATAS certificate, if your sponsored research role requires one.",
      ],
      subsections: [
        {
          heading: "Employment Evidence and Translations",
          paragraphs: [
            "The Home Office may request evidence that you have worked for your overseas employer outside the UK for at least six months. Documents that are not in English or Welsh must normally be accompanied by a certified translation.",
          ],
        },
      ],
    },
    {
      heading: "Application Process of UK Secondment Worker Visa",
      paragraphs: [
        "You must apply online for a Secondment Worker Visa. The process depends on whether you are applying from outside the UK, extending your current permission or switching from another eligible visa category.",
      ],
      bullets: [
        "1. Confirm your eligibility: Check your overseas employment, high-value contract and proposed UK job.",
        "2. Obtain your Certificate of Sponsorship: Your UK sponsor must assign a valid CoS.",
        "3. Prepare your documents: Gather your passport, financial evidence and employment records.",
        "4. Complete the online application: Provide accurate identity, immigration, sponsor and employment information.",
        "5. Pay the application fee: Pay the visa application fee and Immigration Health Surcharge.",
        "6. Prove your identity: Use the ID Check app or attend a biometric appointment.",
        "7. Wait for the decision: The Home Office will assess your application and evidence.",
      ],
      subsections: [
        {
          heading: "When to Apply",
          paragraphs: [
            "You can generally apply up to three months before the start date stated on your Certificate of Sponsorship. Do not travel to begin sponsored work until you have received the required permission.",
          ],
        },
      ],
    },
    {
      heading: "UK Secondment Worker Visa Cost",
      paragraphs: [
        "The current Secondment Worker Visa application fee is £340 per applicant. You must also budget for the Immigration Health Surcharge and any required maintenance funds.",
      ],
      table: {
        headers: ["Expense", "Amount"],
        rows: [
          ["Visa application fee", "£340"],
          ["Immigration Health Surcharge", "Usually £1,035 per year for adults"],
          ["Maintenance funds", "Usually £1,270"],
          ["Document translation", "Depends on requirements"],
        ],
      },
      paragraphsAfterTable: [
        "The £1,270 maintenance requirement is money you must have available to support yourself, not a fee paid to the Home Office. It must normally be held for 28 consecutive days, with the final day within 31 days of applying.",
        "Your partner and children will have separate application fees, healthcare surcharges and financial requirements if they apply as dependants.",
      ],
    },
    {
      heading: "How Visa Direct Immigration Can Help",
      paragraphs: [
        "A Secondment Worker application involves more than submitting an online form. The overseas employment relationship, high-value contract, UK sponsor and eligible occupation must all meet the relevant requirements.",
        "Visa Direct Immigration provides guidance to individuals navigating UK work visa applications. Our team can help you understand the eligibility criteria, identify the documents needed and prepare for the application process.",
        "If you are planning to apply for a UK Secondment Worker Visa, contact us to discuss your circumstances and the support available. Book Your Immigration Consultation.",
      ],
    },
    {
      heading: "Frequently Asked Questions",
      subsections: [
        {
          heading: "Who can apply for a UK Secondment Worker Visa?",
          paragraphs: [
            "An existing employee of an overseas organisation may qualify if their employer has a qualifying high-value contract with an approved UK sponsor, they have worked for the overseas employer for at least six months and their UK job is eligible.",
          ],
        },
        {
          heading: "Does the Secondment Worker Visa require a job offer?",
          paragraphs: [
            "You need an eligible sponsored role and a valid Certificate of Sponsorship from the UK organisation. The secondment must be connected to the qualifying contract.",
          ],
        },
        {
          heading: "What is the minimum contract value for this visa?",
          paragraphs: [
            "The overseas employer's contract with the UK sponsor must be worth at least £50 million and meet the Home Office requirements.",
          ],
        },
        {
          heading: "Can I change employers on a Secondment Worker Visa?",
          paragraphs: [
            "You cannot freely change employers. If your job changes to a different occupation code, you must normally update your visa and obtain a new CoS from the same sponsor.",
          ],
        },
        {
          heading: "Can I extend my Secondment Worker Visa?",
          paragraphs: [
            "You may be able to extend your permission by a further 12 months if you continue to meet the requirements. The maximum stay is two years.",
          ],
        },
        {
          heading: "Does the Secondment Worker Visa lead to permanent residence?",
          paragraphs: [
            "No. You would need to qualify under a different immigration category if you intend to settle permanently in the UK.",
          ],
        },
      ],
    },
  ],
  iconName: "Briefcase",
  keyFeatures: [
    "Eligible high-value contract assessment (min £50m value)",
    "Certificate of Sponsorship compliance guidance",
    "Stay for up to 12 months with extension to 24 months",
    "Accompanying dependant partner and children support"
  ],
  eligibilityRequirements: [
    "Employed by overseas business for at least 12 months outside the UK",
    "Overseas business holds a registered qualifying contract with a UK sponsor",
    "Assigned CoS from an approved Secondment Worker sponsor",
    "Role meets eligible skill level threshold"
  ],
  documentsRequired: [
    "Valid passport",
    "CoS reference number",
    "Proof of overseas employment for 12 months",
    "Contract reference documentation between UK and overseas entities"
  ],
  processSteps: [
    {
      title: "Contract Registration Review",
      description: "Verifying high-value commercial agreement registration with Home Office."
    },
    {
      title: "CoS Assignment & Visa Petition",
      description: "Sponsor assigns Certificate of Sponsorship and files visa petition."
    },
    {
      title: "UK Deployment",
      description: "Completing entry clearance and commencing contracted duties in the UK."
    }
  ],
  faqs: [
    {
      question: "Can I bring my family members?",
      answer: "Yes, eligible partners and children can apply as dependants under the Secondment Worker route."
    }
  ]
},
  {
  id: "creative-worker-visa",
  slug: "creative-worker-visa",
  title: "Creative Worker Visa UK",
  category: "Business Immigration",
  shortDescription:
    "Applying for a Creative Worker Visa UK? Get guidance on sponsorship, eligibility, documents, fees, processing times and visa extensions.",
  heroTagline:
    "Understand your Creative Worker Visa UK sponsorship, eligibility and application requirements.",
  seoTitle: "Creative Worker Visa UK | Application Support",
  seoDescription:
    "Applying for a Creative Worker Visa UK? Get guidance on sponsorship, eligibility, documents, fees, processing times and visa extensions.",
  iconName: "Sparkles",
  keyFeatures: [
    "Creative work and sponsorship eligibility assessment",
    "Certificate of Sponsorship and supporting document review",
    "Creative Worker visa concession guidance",
    "Fees, processing times, extensions and dependant guidance"
  ],
  eligibilityRequirements: [
    "Eligible creative work in the arts, entertainment or cultural sector",
    "A valid Certificate of Sponsorship from a licensed UK sponsor",
    "Genuine temporary employment that does not fill a permanent position",
    "At least £1,270 in savings unless sponsor maintenance or an exemption applies",
    "Compliance with the relevant immigration and suitability requirements"
  ],
  documentsRequired: [
    "Valid passport or accepted travel document",
    "Certificate of Sponsorship reference number and sponsorship details",
    "Bank statements showing at least £1,270 in eligible savings, where required",
    "Sponsor maintenance confirmation, where applicable",
    "Tuberculosis test certificate, if required",
    "Additional supporting evidence relevant to your circumstances"
  ],
  processSteps: [
    {
      title: "Check Eligibility and Sponsorship",
      description: "Confirm that your creative role, sponsor and personal circumstances meet the route requirements."
    },
    {
      title: "Obtain a Certificate of Sponsorship",
      description: "Your approved UK sponsor provides a valid certificate detailing your role, pay and engagement dates."
    },
    {
      title: "Submit the Application and Await a Decision",
      description: "Prepare documents, complete the online application, prove your identity and wait for Home Office approval."
    }
  ],
  contentSections: [
    {
      heading: "Creative Worker Visa UK",
      paragraphs: [
        "The Creative Worker Visa UK allows eligible creative professionals to come to the United Kingdom for temporary work in the arts, entertainment and cultural industries. It is suitable for people such as actors, dancers, musicians, performers, artists and certain film or television production professionals who have been offered eligible work by a UK organisation.",
      ],
    },
    {
      heading: "Creative Worker Visa UK Application Support",
      paragraphs: [
        "Applying for a Creative Worker Visa involves more than receiving an offer from a UK production company, theatre or entertainment organisation. Your work must meet the requirements of the immigration route, and your UK sponsor must hold the appropriate sponsor licence.",
        "Visa Direct Immigration can help you understand the application requirements, identify the supporting documents you may need and prepare for the different stages of the process. Our team can also explain the role of your Certificate of Sponsorship and the conditions attached to your visa.",
        "Whether you are an actor joining a production, a musician performing at an event or another eligible creative professional, understanding the correct route is important before making travel arrangements.",
        "Planning to work in the UK as a creative professional? Book an immigration consultation to discuss your circumstances and application requirements.",
      ],
    },
    {
      heading: "Creative Worker Visa UK Requirements",
      paragraphs: [
        "To qualify for a Creative Worker Visa UK, you must meet the Home Office requirements relating to your proposed work, sponsorship, finances and personal circumstances.",
        "The main requirements include:",
      ],
      bullets: [
        "Eligible creative work: You must be coming to the UK to undertake work within the creative sector that meets the route's requirements.",
        "Licensed sponsor: Your employer or sponsoring organisation must hold the appropriate Home Office sponsor licence.",
        "Certificate of Sponsorship: You must receive a valid Certificate of Sponsorship containing details of your role, pay and proposed work.",
        "Genuine employment: You must genuinely intend and be able to undertake the sponsored role.",
        "Financial requirement: You must normally demonstrate that you have at least £1,270 in personal savings, unless your sponsor certifies maintenance or an exemption applies.",
        "Temporary position: The sponsored role must not be used to fill a permanent position.",
        "Suitability requirements: You must satisfy the relevant immigration and suitability conditions.",
        "Your sponsor must also demonstrate that the role meets the relevant creative sector requirements and that the proposed pay and working arrangements comply with applicable employment rules.",
        "A job offer alone does not guarantee eligibility. The nature of the work, sponsorship arrangements and supporting evidence must all meet the immigration requirements.",
        "Unsure whether your proposed creative work qualifies? Contact Visa Direct Immigration for guidance before starting your application.",
      ],
    },
    {
      heading: "Who Can Apply for a UK Creative Worker Visa?",
      paragraphs: [
        "The Creative Worker route is intended for people who can make a unique contribution to the UK's cultural life through eligible creative work.",
        "Examples of professionals who may qualify include:",
      ],
      bullets: [
        "Actors and theatre performers.",
        "Dancers and choreographers.",
        "Musicians, singers and members of performing groups.",
        "Entertainers and artists.",
        "Eligible film and television production crew.",
        "Models contributing to the UK fashion industry.",
        "The list is not exhaustive. Eligibility depends on the actual role, the nature of the work and whether the sponsor can meet the relevant requirements.",
      ],
    },
    {
      heading: "Creative Worker Visa Documents Required",
      paragraphs: [
        "Preparing the correct documents is an important part of the application. The Home Office needs to verify your identity, sponsorship arrangements and ability to meet the financial requirements.",
        "Depending on your circumstances, you may need:",
      ],
      bullets: [
        "Valid passport: A current passport or accepted travel document confirming your identity and nationality.",
        "Certificate of Sponsorship: Your reference number and relevant sponsorship details from the UK organisation.",
        "Financial evidence: Bank statements showing at least £1,270 in eligible personal savings, where required.",
        "Sponsor maintenance confirmation: Evidence through your Certificate of Sponsorship if your sponsor agrees to maintain and accommodate you for the required initial period.",
        "Tuberculosis test certificate: If you are applying from a country where a TB certificate is required for your circumstances.",
        "Additional supporting documents: Any further evidence requested based on your nationality, personal history or application circumstances.",
        "Visa Direct Immigration can help you understand which documents are relevant to your circumstances and identify potential gaps before submission.",
        "Need help checking your sponsorship documents? Book a consultation to discuss your Creative Worker Visa application.",
      ],
    },
    {
      heading: "How to Apply for a Creative Worker Visa UK",
      paragraphs: [
        "Most applicants must apply online from outside the UK, up to three months before their sponsored work is due to begin.",
      ],
      subsections: [
        { heading: "1. Check your eligibility", paragraphs: ["Make sure your role and personal circumstances meet the Creative Worker Visa requirements."] },
        { heading: "2. Obtain a Certificate of Sponsorship", paragraphs: ["Your approved UK sponsor must provide a valid certificate detailing your role, pay and engagement dates."] },
        { heading: "3. Prepare your documents", paragraphs: ["Gather your passport, financial evidence and any additional supporting documents."] },
        { heading: "4. Complete the online application", paragraphs: ["Submit your details through the official UK government application service."] },
        { heading: "5. Pay the fees", paragraphs: ["Pay the visa application fee and Immigration Health Surcharge where applicable."] },
        { heading: "6. Prove your identity", paragraphs: ["Use the ID Check app or attend a visa application centre for biometric enrolment, depending on your circumstances."] },
        { heading: "7. Wait for a decision", paragraphs: ["The Home Office will assess your application. Wait for approval before travelling to begin your sponsored work."] },
      ],
    },
    {
      heading: "Creative Worker Visa Concession",
      paragraphs: [
        "The Creative Worker visa concession allows certain eligible creative professionals to enter the UK for short-term engagements of up to three months without applying for a full Creative Worker Visa in advance.",
        "To qualify, you must be a non-visa national, have a valid Certificate of Sponsorship from an approved sponsor, undertake eligible creative work for no more than three months, meet the relevant financial and immigration requirements and have an Electronic Travel Authorisation if required.",
        "On arrival, you must speak to a Border Force officer and present your Certificate of Sponsorship rather than using the automatic ePassport gates. Visa nationals generally need to apply for the full visa before travelling.",
        "The concession cannot be extended into a longer Creative Worker stay. Unsure whether you qualify for the concession? Contact our team for guidance before travelling.",
      ],
    },
    {
      heading: "Creative Worker Visa Fee and Other Costs",
      paragraphs: [
        "The Creative Worker Visa fee is separate from the Immigration Health Surcharge and any personal expenses associated with your application.",
      ],
      table: {
        headers: ["Cost", "Amount"],
        rows: [
          ["Creative Worker Visa application fee", "£340"],
          ["Immigration Health Surcharge", "Usually £1,035 per year"],
          ["Maintenance requirement", "£1,270 in savings, where applicable"],
        ],
      },
      paragraphsAfterTable: [
        "The £1,270 maintenance requirement is not a payment to the Home Office. It is evidence that you can support yourself during your initial period in the UK. An eligible A-rated sponsor may certify maintenance on your Certificate of Sponsorship instead.",
        "The Immigration Health Surcharge is generally payable for the period of permission granted, where applicable. Additional costs may arise if you use optional priority services or need supporting documents and translations.",
        "The Creative Worker visa concession does not involve the standard visa application fee, although an Electronic Travel Authorisation may be required.",
        "Check the latest GOV.UK fee information before applying because immigration charges can change.",
      ],
    },
    {
      heading: "UK Creative Worker Visa Processing Time",
      paragraphs: [
        "The UK Creative Worker Visa processing time depends on where you apply and when you complete your identity and document requirements.",
        "The usual decision times are:",
      ],
      bullets: [
        "Applications outside the UK: Around three weeks.",
        "Applications inside the UK: Around eight weeks.",
      ],
    },
    {
      heading: "How Visa Direct Immigration Can Help",
      paragraphs: [
        "Visa Direct Immigration provides application guidance to help creative professionals understand the relevant immigration requirements and prepare for the process.",
        "Depending on your circumstances, our support may include:",
      ],
      bullets: [
        "Reviewing your eligibility for the Creative Worker route.",
        "Explaining the Certificate of Sponsorship requirements.",
        "Identifying the supporting documents needed for your application.",
        "Explaining the Creative Worker visa concession and its limitations.",
        "Providing guidance on application fees and processing times.",
        "Explaining extension requirements and dependant applications.",
        "If you are searching for a Creative Worker Visa lawyer or solicitor, check the individual's professional qualifications and authorisation before instructing them. It is important to understand who will handle your case and what immigration services they are authorised to provide.",
        "Visa Direct Immigration provides immigration application guidance from its offices in Birmingham, Bristol and Reading, supporting individuals who need help understanding UK immigration procedures.",
        "Book Your Immigration Consultation to discuss your creative work, sponsorship arrangements and next steps.",
      ],
    },
    {
      heading: "Frequently Asked Questions",
      subsections: [
        { heading: "How long can I stay in the UK on a Creative Worker Visa?", paragraphs: ["You can normally stay for up to 12 months initially, or for the period covered by your Certificate of Sponsorship plus the permitted additional time, whichever is shorter. Eligible extensions may allow a total stay of up to 24 months with the same sponsor."] },
        { heading: "Can I apply for a Creative Worker Visa without a Certificate of Sponsorship?", paragraphs: ["No. A valid Certificate of Sponsorship from an approved sponsor is normally required for a standard Creative Worker Visa application. Certain eligible non-visa nationals may instead use the Creative Worker visa concession for short engagements."] },
        { heading: "Can I bring my family on a Creative Worker Visa?", paragraphs: ["Yes. Your eligible partner and dependent children may apply to join you as dependants. They must meet the relevant requirements and submit their own applications."] },
        { heading: "Can I change employers on a Creative Worker Visa?", paragraphs: ["You may be able to change sponsors, but the new organisation must meet the sponsor requirements and assign a valid Certificate of Sponsorship. Changing sponsors can also affect the maximum period you are allowed to remain in the UK."] },
        { heading: "Does the Creative Worker Visa lead to Indefinite Leave to Remain?", paragraphs: ["No. The Creative Worker route is temporary and does not provide a direct route to settlement. If you want to remain in the UK after your permission expires, you must qualify for another immigration route."] },
      ],
    },
  ],
  faqs: [
    {
      question: "Can creative groups apply together?",
      answer: "Yes, entourage and group members (e.g. musical bands or production crews) can be sponsored simultaneously."
    }
  ]
},
  {
  id: "international-agreement-visa",
  slug: "international-agreement-visa",
  title: "International Agreement Visa",
  category: "Business Immigration",
  shortDescription:
    "Understand International Agreement Visa eligibility, sponsorship, documents, fees and processing times.",
  heroTagline: "Prepare your International Agreement Visa application with clear treaty and sponsorship guidance.",
  seoTitle: "International Agreement Visa UK | Application Support",
  seoDescription:
    "Need an International Agreement Visa UK? Understand eligibility, sponsorship, documents, fees and processing times. Get guidance from Visa Direct Immigration.",
  primaryCta: "Book Your Immigration Consultation",
  heroImage: "/images/services/international-agreement-visa.webp",
  supportingImages: [
    {
      src: "/images/service-business.webp",
      alt: "International Agreement Visa UK diplomatic and treaty documents",
      caption: "Guidance for international organisations, diplomatic households and treaty work",
    },
  ],
  contentSections: [
    {
      heading: "International Agreement Visa UK",
      paragraphs: [
        "The International Agreement Visa UK, officially known as the Temporary Work – International Agreement visa, allows eligible overseas workers to come to the UK for certain jobs covered by international law or treaties. These include employment with overseas governments or recognised international organisations and private service in diplomatic households.",
        "Applicants must meet specific eligibility conditions and have sponsorship from an approved employer before applying. Visa Direct Immigration provides guidance on UK immigration applications, helping applicants understand the requirements, prepare supporting documents and follow the correct application process.",
      ],
    },
    {
      heading: "What is the International Agreement Visa UK?",
      paragraphs: [
        "The International Agreement Visa is a temporary work route for people undertaking eligible services covered by international agreements or UK treaty obligations. It replaced the former Temporary Worker – International Agreement Worker visa under the T5 system.",
        "The route generally covers overseas government or international organisation employees and private servants in diplomatic households. You cannot use this visa simply because your employer has an international business; the employment must fall within the specific permitted categories.",
        "If you are contracted to provide services to a UK company, a different route, such as the Service Supplier visa under Global Business Mobility, may be more appropriate.",
      ],
    },
    {
      heading: "International Agreement Visa Requirements",
      paragraphs: [
        "To qualify, applicants must meet the relevant immigration requirements and have a genuine eligible job with an approved sponsor.",
        "The main requirements include:",
      ],
      bullets: [
        "Age: You must be at least 18 when you apply.",
        "Sponsorship: You must have a valid Certificate of Sponsorship reference number from an approved employer.",
        "Eligible employment: Your work must be covered by the International Agreement route.",
        "Financial requirement: You will usually need at least £1,270 in personal savings, unless an exemption applies or your sponsor certifies maintenance.",
        "Genuine role: You must intend and be able to carry out the job described in your sponsorship details.",
        "Employment conditions: Your employer must comply with UK minimum wage and working time requirements.",
      ],
      subsections: [
        {
          heading: "Private Servants",
          paragraphs: [
            "Additional conditions apply to private servants in diplomatic households. Applicants applying from outside the UK must normally demonstrate English language ability at B1 level in reading, writing, speaking and listening.",
          ],
        },
      ],
    },
    {
      heading: "Who is Eligible for an International Agreement Visa?",
      paragraphs: [
        "Eligibility depends mainly on the type of work you will perform and the organisation employing you. You may qualify as an employee of an overseas government, an employee of a recognised international organisation or a private servant in a diplomatic household.",
        "Your job duties, employment arrangements and sponsor details must meet the route's requirements. If your role does not fall into one of these categories, another UK work visa may be more suitable.",
      ],
    },
    {
      heading: "Certificate of Sponsorship for an International Agreement Visa",
      paragraphs: [
        "A Certificate of Sponsorship is an electronic reference containing information about your employer, job, salary and proposed employment. Your sponsor must hold the appropriate licence and assign a valid CoS before you submit your visa application.",
        "Check your personal information, job title, employment dates, working hours, salary and the International Agreement route under which you are sponsored. A CoS is normally valid for three months from the date it is assigned.",
      ],
    },
    {
      heading: "International Agreement Visa UK Documents",
      paragraphs: [
        "Common documents include:",
      ],
      bullets: [
        "A valid passport or travel document.",
        "Your Certificate of Sponsorship reference number.",
        "Bank statements showing the required maintenance funds, if applicable.",
        "English language evidence if you are a private servant applying from outside the UK.",
        "Relationship evidence for a partner or children applying as dependants.",
        "A tuberculosis test certificate, if required.",
        "An ATAS certificate, if your sponsored role involves qualifying research.",
      ],
      subsections: [
        {
          heading: "Translations and Extension Evidence",
          paragraphs: [
            "If you are extending as a private servant, you may also need recent payslips and bank statements proving salary. Documents not written in English or Welsh must normally have a certified translation.",
          ],
        },
      ],
    },
    {
      heading: "How to Apply for an International Agreement Visa UK",
      paragraphs: [
        "Applications are submitted online through the official UK government application service. Apply only after receiving your valid Certificate of Sponsorship.",
      ],
      bullets: [
        "1. Confirm your eligibility.",
        "2. Receive sponsorship and obtain your CoS reference.",
        "3. Prepare your passport, financial evidence and route-specific documents.",
        "4. Complete the online application accurately.",
        "5. Pay the relevant visa fee and Immigration Health Surcharge.",
        "6. Verify your identity using the ID Check app or a biometric appointment.",
        "7. Wait for the Home Office decision.",
      ],
      subsections: [
        {
          heading: "Application Timing",
          paragraphs: [
            "You can generally apply up to three months before the start date stated on your CoS. You must not begin sponsored employment before receiving permission to work in the UK.",
          ],
        },
      ],
    },
    {
      heading: "International Agreement Visa UK Cost",
      paragraphs: [
        "The visa application fee is currently £340 per applicant, whether you apply from inside or outside the UK.",
      ],
      table: {
        headers: ["Expense", "Current cost"],
        rows: [
          ["Visa application fee", "£340"],
          ["Immigration Health Surcharge", "Usually £1,035 per year for adults"],
          ["Maintenance funds", "Usually £1,270, if required"],
          ["Translation or document services", "Depends on your requirements"],
        ],
      },
      paragraphsAfterTable: [
        "The £1,270 maintenance requirement is evidence of available funds, not a fee. It must normally have been held for 28 consecutive days, with the final day within 31 days of the application.",
        "Your partner and children must also pay their own application fees and healthcare surcharge if they apply as dependants. Check the latest government fee information before applying.",
      ],
    },
    {
      heading: "International Agreement Visa Processing Time",
      paragraphs: [
        "Applications outside the UK usually take around three weeks, while applications inside the UK usually take around eight weeks after identity checks and document submission.",
        "Some applications may take longer if additional information is needed or sponsorship details require verification. Priority services may be available for eligible applicants.",
      ],
    },
    {
      heading: "Can You Bring Dependants or Apply for ILR?",
      paragraphs: [
        "Eligible applicants can bring their partner and dependent children to the UK. Each family member must submit a separate application and meet the relevant requirements.",
        "The International Agreement route is not a route to indefinite leave to remain. If you want to remain in the UK after your permission ends, you will need to consider another immigration route.",
      ],
    },
    {
      heading: "How Visa Direct Immigration Can Help",
      paragraphs: [
        "Applying under the International Agreement route requires the correct sponsorship, eligible employment and supporting evidence. Visa Direct Immigration provides UK immigration application guidance, helping individuals understand visa requirements, organise documents and prepare for the application process.",
        "If you are searching for international agreement visa solicitors or professional application support, contact our team to discuss your circumstances. Book Your Immigration Consultation.",
      ],
    },
    {
      heading: "Frequently Asked Questions",
      subsections: [
        {
          heading: "Is the International Agreement Visa the same as the T5 visa?",
          paragraphs: [
            "The current Temporary Work – International Agreement visa replaced the former T5 Temporary Worker – International Agreement Worker route.",
          ],
        },
        {
          heading: "Do I need a job offer?",
          paragraphs: [
            "Yes. You need eligible employment with an approved sponsor and a valid Certificate of Sponsorship.",
          ],
        },
        {
          heading: "Can I work for another employer?",
          paragraphs: [
            "Work is generally restricted to the job described in your CoS. Supplementary employment may be permitted in some circumstances, but private servants have different restrictions.",
          ],
        },
        {
          heading: "Can I extend my International Agreement Visa?",
          paragraphs: [
            "Extensions may be possible if you continue to meet the requirements and remain within the maximum stay for your employment category.",
          ],
        },
        {
          heading: "Does the International Agreement Visa lead to permanent residence?",
          paragraphs: [
            "No. This route does not lead directly to ILR. You would need to qualify under a separate settlement route.",
          ],
        },
      ],
    },
  ],
  iconName: "Globe",
  keyFeatures: [
    "Diplomatic mission & international organisation representation",
    "GATS and international trade agreement worker support",
    "Private servants in diplomatic households guidance",
    "Multi-year permission according to treaty terms"
  ],
  eligibilityRequirements: [
    "Valid CoS under the Temporary Work - International Agreement route",
    "Work covered by international law, diplomatic engagement, or treaty",
    "Proof of personal savings (£1,276) unless certified by sponsor",
    "Tuberculosis test results where applicable"
  ],
  documentsRequired: [
    "Valid passport or official travel document",
    "Certificate of Sponsorship reference",
    "Proof of diplomatic accreditation or international treaty agreement",
    "Financial maintenance evidence"
  ],
  processSteps: [
    {
      title: "Treaty & Treaty Role Audit",
      description: "Verifying appointment terms against Home Office international agreement rules."
    },
    {
      title: "CoS Assignment & Application",
      description: "Sponsor issues Certificate of Sponsorship and visa is lodged."
    },
    {
      title: "Diplomatic Service",
      description: "Undertaking official duties in the UK under treaty conditions."
    }
  ],
  faqs: [
    {
      question: "How long can private servants in diplomatic households stay?",
      answer: "They can stay for up to 2 years initially, extendable up to a maximum of 5 years."
    }
  ]
},
  {
  id: "seasonal-worker-visa",
  slug: "seasonal-worker-visa",
  title: "UK Seasonal Worker Visa",
  category: "Business Immigration",
  shortDescription:
    "Applying for a UK Seasonal Worker Visa? Understand eligibility, sponsorship, documents, fees and processing times. Get immigration application guidance.",
  heroTagline:
    "Understand your UK Seasonal Worker Visa eligibility, sponsorship and application requirements.",
  seoTitle: "UK Seasonal Worker Visa | Application Support",
  seoDescription:
    "Applying for a UK Seasonal Worker Visa? Understand eligibility, sponsorship, documents, fees and processing times. Get immigration application guidance.",
  iconName: "Clock",
  keyFeatures: [
    "Approved scheme operator and sponsorship guidance",
    "Horticulture and poultry eligibility assessment",
    "Financial evidence and document review",
    "Application, processing and permitted-stay guidance"
  ],
  eligibilityRequirements: [
    "At least 18 years old when applying",
    "Eligible horticulture or poultry production employment",
    "Valid Certificate of Sponsorship from an authorised scheme operator",
    "At least £1,270 in savings, unless sponsor maintenance applies",
    "No Seasonal Worker permission during the four months before the new CoS start date"
  ],
  documentsRequired: [
    "Valid passport or accepted travel document",
    "Certificate of Sponsorship reference and job details",
    "Bank statements showing £1,270 held for 28 consecutive days, unless exempt",
    "TB certificate where required",
    "Certified translations for documents not in English or Welsh"
  ],
  processSteps: [
    {
      title: "Find an Approved Scheme Operator",
      description: "Identify a genuine authorised sponsor offering eligible seasonal employment."
    },
    {
      title: "Receive Your Certificate of Sponsorship",
      description: "Your approved sponsor provides the reference and details of your seasonal job."
    },
    {
      title: "Submit the Application and Complete Biometrics",
      description: "Prepare documents, apply online, prove your identity and await the Home Office decision."
    }
  ],
  contentSections: [
    {
      heading: "UK Seasonal Worker Visa",
      paragraphs: [
        "The UK Seasonal Worker Visa allows eligible overseas workers to come to the United Kingdom for temporary employment in horticulture or poultry production. It provides an opportunity to undertake seasonal jobs such as fruit picking, vegetable harvesting, flower production and certain poultry processing activities.",
        "Officially known as the Temporary Work Seasonal Worker visa, this route requires sponsorship through an approved scheme operator. Applicants must receive a valid Certificate of Sponsorship and meet the relevant age and financial requirements before applying.",
      ],
    },
    {
      heading: "UK Seasonal Worker Visa Application Support",
      paragraphs: [
        "Applying for a Seasonal Worker Visa involves more than finding a temporary job in the UK. You must obtain an eligible position through an approved scheme operator that can sponsor your application.",
        "Visa Direct Immigration can help you understand the visa requirements, explain the role of sponsorship and identify the documents you may need. We can also provide guidance on application procedures, financial evidence and the conditions attached to your permission.",
        "Whether you are planning to work in agriculture, crop harvesting or poultry production, understanding the correct immigration route is an important first step.",
        "Planning to apply for a Seasonal Worker Visa UK? Book an immigration consultation to discuss your circumstances and application requirements.",
      ],
    },
    {
      heading: "Seasonal Worker Visa UK Requirements",
      paragraphs: [
        "To qualify for a UK Seasonal Worker Visa, you must meet the Home Office requirements relating to your age, employment, sponsorship and finances.",
        "The main requirements include:",
      ],
      bullets: [
        "Age: You must be at least 18 years old when applying.",
        "Eligible employment: Your job must be in an approved horticulture or poultry production role.",
        "Approved sponsor: You must have sponsorship from an authorised scheme operator.",
        "Certificate of Sponsorship: You need a valid Certificate of Sponsorship containing details of your job and employment period.",
        "Financial requirement: You must normally have at least £1,270 in personal savings, unless your sponsor certifies maintenance.",
        "Previous seasonal work: You must not have been in the UK as a Seasonal Worker during the four months immediately before the start date on your new Certificate of Sponsorship.",
        "There is no general English language test requirement for this visa route. However, you must satisfy the relevant immigration suitability requirements.",
      ],
    },
    {
      heading: "Seasonal Worker Visa UK Eligibility: Which Jobs Qualify?",
      paragraphs: [
        "The Seasonal Worker route is limited to specific types of temporary employment. It does not cover every agricultural or food production job.",
        "There are two main employment categories:",
      ],
      subsections: [
        {
          heading: "1. Horticulture",
          paragraphs: [
            "This category includes seasonal work involving the growing and harvesting of fruit such as strawberries, apples and raspberries; vegetables, potatoes and salad crops; flowers, bulbs and ornamental plants; and mushrooms and certain nursery plants. Jobs may involve planting, picking, sorting, packing and preparing crops.",
          ],
        },
        {
          heading: "2. Poultry Production",
          paragraphs: [
            "This category covers specific approved roles connected with poultry production, including certain processing, dressing, plucking, packing and handling jobs. Poultry work has a restricted seasonal period, running from 2 October to 31 December each year.",
          ],
        },
      ],
      paragraphsAfterTable: [
        "Your job must fall within the permitted occupation and sponsorship requirements. Having an offer for an unrelated farm or food production position does not automatically make you eligible.",
        "Not sure whether your job qualifies? Contact our team for guidance on the Seasonal Worker eligibility requirements.",
      ],
    },
    {
      heading: "Approved Sponsors for the UK Seasonal Worker Visa",
      paragraphs: [
        "An approved scheme operator is essential to the Seasonal Worker application process. You cannot obtain a Certificate of Sponsorship from just any farm, recruitment agency or employer.",
        "The UK government recognises approved scheme operators that manage recruitment and sponsorship under this route. These include:",
      ],
      bullets: [
        "AGRI-HR",
        "Concordia (UK) Ltd",
        "Fruitful Jobs",
        "HOPS Labour Solutions Ltd",
        "Pro-Force Limited",
        "RE Recruitment, for poultry workers only",
        "You should check the latest official list before accepting an offer because approved sponsors and their permitted activities may change.",
        "Be careful of recruitment scams. A Certificate of Sponsorship is not something you should purchase from an individual or an unverified agent. Approved scheme operators should not charge workers money in exchange for sponsorship.",
      ],
    },
    {
      heading: "UK Seasonal Worker Visa Documents Required",
      paragraphs: [
        "Preparing the correct documents helps the Home Office verify your identity, employment and financial circumstances.",
        "Depending on your application, you may need:",
      ],
      bullets: [
        "Valid passport: A current passport or accepted travel document confirming your identity and nationality.",
        "Certificate of Sponsorship: Your reference number and details of the sponsored seasonal job.",
        "Bank statements: Evidence showing that you have maintained at least £1,270 for the required 28 consecutive days, unless your sponsor certifies maintenance.",
        "Additional evidence: Any further documents requested based on your nationality or personal circumstances.",
        "TB certificate: If required for your circumstances and country of application.",
        "Your Certificate of Sponsorship must contain accurate information about your role, salary and employment dates. Documents that are not in English or Welsh generally need certified translations.",
      ],
    },
    {
      heading: "How to Apply for a Seasonal Worker Visa in the UK",
      paragraphs: [
        "Most applicants must apply online from outside the UK. You can normally submit your application up to three months before the employment start date stated on your Certificate of Sponsorship.",
      ],
      subsections: [
        { heading: "1. Find an approved scheme operator", paragraphs: ["Identify an authorised sponsor offering eligible seasonal employment. Make sure the opportunity and recruitment arrangements are genuine."] },
        { heading: "2. Receive your Certificate of Sponsorship", paragraphs: ["Your approved sponsor will provide a reference number containing your job and employment details."] },
        { heading: "3. Prepare your supporting documents", paragraphs: ["Gather your passport, financial evidence and any additional documents required for your circumstances."] },
        { heading: "4. Complete the online application", paragraphs: ["Use the official UK government application service and provide accurate information about your identity and sponsored employment."] },
        { heading: "5. Pay the application fee", paragraphs: ["Pay the required visa fee and follow the instructions for proving your identity."] },
        { heading: "6. Complete biometric checks", paragraphs: ["Depending on your circumstances, you may need to attend a visa application centre to provide your fingerprints and photograph or use the relevant identity verification service."] },
        { heading: "7. Wait for a decision", paragraphs: ["The Home Office will assess your application and supporting evidence. You should wait for approval before travelling to the UK to begin work."] },
      ],
    },
    {
      heading: "UK Seasonal Worker Visa Fee",
      paragraphs: [
        "The standard UK Seasonal Worker Visa application fee is £340.",
        "You must also have enough money to support yourself when arriving in the UK. The normal financial requirement is £1,270 in savings, held for at least 28 consecutive days. This is not a payment to the Home Office.",
        "An approved A-rated sponsor can certify maintenance on your Certificate of Sponsorship, confirming that it will support you up to the required amount during your first month in the UK.",
        "The route normally permits stays of six months or less, so the Immigration Health Surcharge is not normally payable.",
      ],
    },
    {
      heading: "UK Seasonal Worker Visa Processing Time",
      paragraphs: [
        "The usual UK Seasonal Worker Visa processing time is around three weeks after you have completed the identity checks and submitted the required documents.",
        "However, processing can take longer if the Home Office needs additional information, further checks or clarification about your sponsorship.",
        "You can normally apply up to three months before your job is due to start. It is sensible to allow enough time for your application and avoid making non-refundable travel arrangements before receiving a decision.",
      ],
    },
    {
      heading: "How Long Can You Stay on a UK Seasonal Worker Visa?",
      paragraphs: [
        "The permitted stay depends on the type of seasonal employment.",
      ],
      bullets: [
        "Horticulture: You can stay for up to six months in any ten-month period.",
        "Poultry production: You can stay between 2 October and 31 December in the relevant year, subject to your sponsored employment dates.",
        "You can enter the UK up to 14 days before the job start date stated on your Certificate of Sponsorship, provided your visa is valid.",
        "The visa is temporary and does not allow you to remain in the UK indefinitely.",
      ],
    },
    {
      heading: "How Visa Direct Immigration Can Help",
      paragraphs: [
        "Visa Direct Immigration provides application guidance to help individuals understand the Seasonal Worker route and its requirements.",
        "Depending on your circumstances, our support may include:",
      ],
      bullets: [
        "Reviewing your eligibility for the Seasonal Worker route.",
        "Explaining approved sponsorship and Certificate of Sponsorship requirements.",
        "Identifying the documents needed for your application.",
        "Explaining financial evidence and application fees.",
        "Guiding you through the online application process.",
        "Explaining visa conditions and permitted employment periods.",
        "If you are searching for a UK Seasonal Worker Visa lawyer or solicitor, check the professional's qualifications and authorisation before instructing them. It is important to understand who will handle your application and what services they are authorised to provide.",
        "Visa Direct Immigration provides immigration application guidance from its offices in Birmingham, Bristol and Reading, supporting individuals who need help understanding UK immigration procedures.",
        "Book Your Immigration Consultation to discuss your eligibility, sponsorship documents and application process.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I extend my stay past 6 months?",
      answer: "No, the Seasonal Worker route cannot be extended beyond the statutory 6-month limit."
    }
  ]
},
  {
  id: "entrepreneur-visa-tier-1",
  slug: "entrepreneur-visa-tier-1",
  title: "Entrepreneur Visa (Tier 1)",
  category: "Business Immigration",
  shortDescription: "Extension and settlement (Indefinite Leave to Remain) guidance for existing Tier 1 Entrepreneur visa holders.",
  heroTagline: "Secure permanent settlement and business extensions under Tier 1 Entrepreneur.",
  seoTitle: "Tier 1 Entrepreneur Visa UK | Extension & ILR Settlement Support",
  seoDescription: "Specialist legal representation for existing Tier 1 Entrepreneur visa holders applying for business extensions or Indefinite Leave to Remain.",
  iconName: "Award",
  keyFeatures: [
    "Job creation audit (2 full-time settled worker jobs for 12 months)",
    "Qualifying capital investment evidence review",
    "Accelerated 3-year ILR qualification analysis",
    "Dependant extension and settlement synchronization"
  ],
  eligibilityRequirements: [
    "Currently hold valid Tier 1 Entrepreneur permission",
    "Registered as director or self-employed within 6 months of entry",
    "Invested specified funds directly into one or more UK businesses",
    "Created at least 2 full-time jobs for settled workers for at least 12 months"
  ],
  documentsRequired: [
    "HMRC Real Time Information (RTI) returns and payroll summaries",
    "Statutory business accounts and corporate tax submissions",
    "Bank statements confirming capital investment",
    "Evidence of continuous residence and absence calculations"
  ],
  processSteps: [
    {
      title: "Job Creation & Investment Audit",
      description: "Thorough legal audit of payroll and investment proofs to eliminate Home Office refusal risks."
    },
    {
      title: "Dossier Preparation & Submission",
      description: "Compiling detailed legal representation letter with structured financial evidence."
    },
    {
      title: "Indefinite Leave to Remain Grant",
      description: "Achieving permanent UK settlement for you and your family."
    }
  ],
  faqs: [
    {
      question: "Can new applicants apply for a Tier 1 Entrepreneur visa?",
      answer: "No, this route is closed to new applicants. However, existing visa holders can continue to apply for extensions and Indefinite Leave to Remain."
    }
  ]
},
  {
  id: "graduate-trainee-visa",
  slug: "graduate-trainee-visa",
  title: "Graduate Trainee Visa",
  category: "Business Immigration",
  shortDescription: "Global Business Mobility route for overseas graduates transferring to a UK branch as part of a graduate training programme.",
  heroTagline: "Structured corporate training in the UK for overseas graduates.",
  seoTitle: "Graduate Trainee Visa Services UK | Visa Direct Immigration",
  seoDescription: "Need a UK Graduate Trainee Visa? Get application support with eligibility, sponsorship, documents, fees and visa requirements.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "GraduationCap",
  keyFeatures: [
    "Structured specialist training programme verification",
    "Global Business Mobility sponsorship compliance",
    "Stay up to 12 months per placement",
    "Clear transition pathways to Skilled Worker status"
  ],
  eligibilityRequirements: [
    "Employed by linked overseas business for at least 3 months",
    "Enrolled in a genuine structured graduate training programme",
    "Assigned Certificate of Sponsorship from an approved UK sponsor",
    "Salary meeting the route threshold (£27,300 or 70% of going rate)"
  ],
  documentsRequired: [
    "Valid passport",
    "CoS reference number",
    "University degree certificate",
    "Formal documentation of the corporate graduate training scheme"
  ],
  processSteps: [
    {
      title: "Programme Assessment",
      description: "Confirming corporate training programme meets Home Office requirements."
    },
    {
      title: "CoS Assignment & Filing",
      description: "Assigning Certificate of Sponsorship and lodging the entry clearance application."
    },
    {
      title: "UK Training Placement",
      description: "Commencing the rotational training programme in the UK."
    }
  ],
  faqs: [
    {
      question: "Who can apply for a Graduate Trainee Visa?",
      answer: "Existing employees of eligible overseas businesses may apply if they are undertaking a structured training programme at a linked UK business and meet the sponsorship, occupation and salary requirements."
    },
    {
      question: "Can I apply for a Graduate Trainee Visa from inside the UK?",
      answer: "No. You must apply from outside the UK and meet the requirement of having worked for your employer overseas for at least three months immediately before applying."
    },
    {
      question: "How much does a Graduate Trainee Visa cost?",
      answer: "The application fee is £340. You will also usually pay the Immigration Health Surcharge of £1,035 per year and need to meet the £1,270 maintenance requirement, unless exempt."
    },
    {
      question: "Can I extend my Graduate Trainee Visa?",
      answer: "You cannot extend this visa from inside the UK. However, you may apply for another Graduate Trainee Visa from outside the UK if you continue to meet the eligibility requirements."
    },
    {
      question: "Can a Graduate Trainee Visa solicitor help with my application?",
      answer: "An appropriately qualified immigration solicitor can provide legal advice and assistance where required. Visa Direct Immigration provides application guidance, document preparation support and help understanding the relevant immigration requirements."
    },
    {
      question: "Can my family join me on a Graduate Trainee Visa?",
      answer: "Your eligible partner and dependent children may apply to join you. They must submit separate applications and meet the relevant relationship and financial requirements."
    }
  ],
  contentSections: [
    {
      heading: "Graduate Trainee Visa",
      paragraphs: [
        "The UK Graduate Trainee Visa allows eligible overseas employees to complete a temporary work placement at their employer's UK branch as part of a structured graduate training programme. The programme must lead to a senior management or specialist position.",
        "This visa is part of the Global Business Mobility route and is intended for employees transferring within an international business group, rather than graduates seeking their first job in the UK.",
        "If you are considering a Graduate Trainee Visa application, understanding the sponsorship, employment and salary requirements is essential. Visa Direct Immigration provides application guidance to individuals and businesses in Birmingham, Bristol, Reading and across the UK."
      ]
    },
    {
      heading: "What is a Graduate Trainee Visa?",
      paragraphs: [
        "A Graduate Trainee Visa is a temporary UK work visa for existing employees of overseas businesses undertaking structured training at a linked UK organisation. The placement must be part of a graduate training programme designed to prepare the employee for a managerial or specialist role.",
        "It is not the same as the Graduate Visa, which is intended for eligible international students who have completed a UK degree.",
        "If your employer wants to transfer you to its UK branch for a different type of role, the Senior or Specialist Worker Visa may be more suitable."
      ]
    },
    {
      heading: "Eligibility Criteria for a UK Graduate Trainee Visa",
      paragraphs: ["To qualify, you must meet the Home Office requirements for employment, sponsorship, occupation and salary."],
      subsections: [
        {
          heading: "1. Existing Overseas Employment",
          paragraphs: [
            "You must be an existing employee of an organisation approved by the Home Office as a sponsor. You must have worked for your employer outside the UK for at least three months immediately before applying."
          ]
        },
        {
          heading: "2. Eligible Training Programme",
          paragraphs: [
            "Your UK placement must form part of a structured graduate training programme leading to a senior management or specialist position."
          ]
        },
        {
          heading: "3. Certificate of Sponsorship",
          paragraphs: [
            "Your UK employer must issue a valid Certificate of Sponsorship (CoS) containing details of your training placement, job and salary. You must apply within three months of receiving it."
          ]
        },
        {
          heading: "4. Eligible Job and Salary",
          paragraphs: [
            "Your role must appear on the eligible occupation list. You must generally earn at least £27,300 per year or 70% of the applicable going rate for your occupation, whichever is higher. Different salary rules may apply to certain healthcare and education roles."
          ]
        },
        {
          heading: "5. Financial Requirements",
          paragraphs: [
            "You normally need at least £1,270 in personal savings, held for 28 consecutive days, unless your employer certifies maintenance or you qualify for an exemption."
          ]
        }
      ]
    },
    {
      heading: "Documents Required for a Graduate Trainee Visa",
      paragraphs: ["The documents you need will depend on your circumstances. Common requirements include:"],
      bullets: [
        "Valid passport or travel document.",
        "Certificate of Sponsorship reference number.",
        "Job title, salary and occupation code.",
        "UK employer details and sponsor licence number.",
        "Bank statements showing required maintenance funds, if applicable.",
        "Evidence of overseas employment, such as payslips or bank statements, if requested.",
        "Details of your graduate training programme.",
        "TB test certificate, if required."
      ]
    },
    {
      heading: "How to Apply for a UK Graduate Trainee Visa",
      paragraphs: ["You must apply online from outside the UK. The usual application process involves:"],
      bullets: [
        "Check your eligibility: Confirm that your employment, training programme and occupation meet the requirements.",
        "Obtain sponsorship: Your UK employer must issue a valid Certificate of Sponsorship.",
        "Prepare your documents: Gather your passport, employment evidence and financial documents.",
        "Complete the application: Submit the online Graduate Trainee Visa application through GOV.UK.",
        "Pay the fees: Pay the application fee and Immigration Health Surcharge.",
        "Verify your identity: Use the UK Immigration: ID Check app or attend a visa application centre for biometrics, as instructed."
      ],
      paragraphsAfterTable: [
        "You can usually apply up to three months before your planned UK work start date."
      ]
    },
    {
      heading: "Graduate Trainee Visa Fees and Processing Time",
      paragraphs: ["The main application costs and processing times are:"],
      table: {
        headers: ["Requirement", "Current details"],
        rows: [
          ["Application fee", "£340"],
          ["Immigration Health Surcharge", "Usually £1,035 per year"],
          ["Maintenance funds", "£1,270"],
          ["Processing outside the UK", "Usually 3 weeks"]
        ]
      },
      paragraphsAfterTable: [
        "The maintenance funds must normally be held for 28 consecutive days, with the end of that period within 31 days of applying. Your employer can certify maintenance instead.",
        "Processing may take longer if UKVI needs additional documents, verification or an interview."
      ]
    },
    {
      heading: "How Long Can You Stay in the UK?",
      paragraphs: [
        "You can stay for the shorter of 12 months or the period stated on your Certificate of Sponsorship plus 14 days.",
        "You cannot extend your Graduate Trainee Visa from inside the UK or switch into this route from another visa category while in the country. However, you may apply for another Graduate Trainee Visa from outside the UK if you remain eligible.",
        "There is also a combined maximum stay of five years in any six-year period across specified Global Business Mobility routes.",
        "This visa does not lead directly to Indefinite Leave to Remain (ILR)."
      ]
    },
    {
      heading: "Graduate Trainee Visa Lawyer and Adviser Support",
      paragraphs: [
        "People searching for a Graduate Trainee Visa lawyer, solicitor or immigration adviser often need help understanding sponsorship requirements, checking their eligibility and preparing a complete application.",
        "Choosing an appropriate immigration service is important, particularly where your employment history, training programme or sponsorship arrangements require careful assessment.",
        "Visa Direct Immigration provides immigration application guidance and support. We support applicants in Birmingham, Bristol and Reading, as well as remotely across the UK.",
        "Book Your Immigration Consultation to discuss your Graduate Trainee Visa application."
      ]
    }
  ]
},
  {
  id: "minister-of-religion-visa",
  slug: "minister-of-religion-visa",
  title: "Minister of Religion Visa",
  category: "Business Immigration",
  shortDescription: "Long-term visa route for religious leaders, pastoral workers, and missionaries taking up appointments with licensed UK faith bodies.",
  heroTagline: "Religious and pastoral leadership appointments in the United Kingdom.",
  seoTitle: "Minister of Religion Visa Lawyer in the UK",
  seoDescription: "Need a Minister of Religion Visa lawyer in the UK? Get professional application support with eligibility, sponsorship, documents and visa requirements.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "Heart",
  keyFeatures: [
    "Faith institution sponsorship verification",
    "Pastoral leadership duties assessment",
    "English language B2 proficiency compliance",
    "Direct 5-year pathway to Indefinite Leave to Remain"
  ],
  eligibilityRequirements: [
    "Valid CoS from an authorized UK Minister of Religion sponsor",
    "Role involves leading congregation in worship, performing rituals, or pastoral care",
    "Demonstrated English language proficiency at level B2",
    "At least £1,270 in personal savings held for 28 consecutive days (unless exempt)",
    "Must be at least 18 years old when applying"
  ],
  documentsRequired: [
    "Valid passport or other accepted travel document",
    "Certificate of Sponsorship reference number",
    "Evidence of English language ability, if required",
    "Bank statements showing required savings, where applicable",
    "TB test certificate, if required",
    "Certified translations of non-English/Welsh documents"
  ],
  processSteps: [
    {
      title: "Confirm Eligibility",
      description: "Check that your proposed religious role meets the T2 route requirements and that you meet the age, English language and financial criteria."
    },
    {
      title: "Obtain Certificate of Sponsorship",
      description: "Your UK religious organisation must hold the appropriate sponsor licence and issue a valid CoS for your role."
    },
    {
      title: "Prepare & Submit Application",
      description: "Gather all required documents, complete the online application and pay the visa fee and Immigration Health Surcharge."
    },
    {
      title: "Attend Biometrics & Await Decision",
      description: "Provide fingerprints and photograph at a visa application centre, then wait for UKVI to assess your application."
    }
  ],
  faqs: [
    {
      question: "Who can apply for a UK Minister of Religion Visa?",
      answer: "A person aged 18 or over with an eligible religious role and a valid Certificate of Sponsorship from an approved UK sponsor may apply, provided they meet the other immigration requirements."
    },
    {
      question: "Is there an upper age limit for the Minister of Religion Visa UK?",
      answer: "No general upper age limit is specified. However, applicants must be at least 18 on the date of application and satisfy the sponsorship, English language, financial and other eligibility criteria."
    },
    {
      question: "Can I apply for a Minister of Religion Visa without a Certificate of Sponsorship?",
      answer: "No. You must have a valid Certificate of Sponsorship from an eligible UK sponsor before applying under this route."
    },
    {
      question: "Can my family join me in the UK?",
      answer: "Your eligible partner and dependent children may apply to join you or remain in the UK. Each dependant must submit a separate application and meet the relevant relationship and financial requirements."
    },
    {
      question: "Can I apply for ILR after a Minister of Religion Visa?",
      answer: "You may be eligible to apply for Indefinite Leave to Remain after five years of qualifying continuous residence, provided you meet the settlement, sponsorship, English language and other applicable requirements."
    },
    {
      question: "Is the Minister of Religion Visa the same as the Religious Worker Visa?",
      answer: "No. The Minister of Religion route is intended for qualifying religious leadership and pastoral roles, while the Temporary Work Religious Worker route covers certain other religious placements. The correct route depends on the duties and circumstances of the position."
    }
  ],
  contentSections: [
    {
      heading: "Minister of Religion Visa",
      paragraphs: [
        "The UK Minister of Religion Visa, also known as the T2 Minister of Religion Visa, allows eligible religious leaders and ministers to come to the UK to take up an approved role within a faith-based organisation. It is designed for people with a key leading or mainly pastoral role, including ministers, missionaries and certain members of religious orders.",
        "Visa Direct Immigration provides application guidance to individuals preparing a Minister of Religion visa application. We can help you understand the eligibility criteria, sponsorship requirements, supporting documents and application process."
      ]
    },
    {
      heading: "What is the UK Minister of Religion Visa?",
      paragraphs: [
        "The Minister of Religion Visa is a sponsored work route for people who have been offered an eligible religious role by a UK organisation holding a valid Home Office sponsor licence. The role must meet the requirements of the T2 route and involve an appropriate level of religious leadership or pastoral responsibility.",
        "Eligible roles may include:"
      ],
      bullets: [
        "Ministers and religious leaders.",
        "Missionaries undertaking qualifying religious duties.",
        "Members of recognised religious orders.",
        "Other religious workers whose roles meet the mainly pastoral or senior-role requirements."
      ],
      paragraphsAfterTable: [
        "The route is different from the Temporary Work Religious Worker Visa, which is generally intended for certain non-pastoral or temporary religious placements. Choosing the correct category is important because the eligibility and length of stay differ."
      ]
    },
    {
      heading: "UK Minister of Religion Visa Requirements",
      paragraphs: ["To qualify, applicants must meet the sponsorship, financial, English language and other immigration requirements. The UK faith organisation must also be eligible to sponsor the proposed role."],
      subsections: [
        {
          heading: "1. Eligible Religious Role",
          paragraphs: [
            "You must have a genuine offer of employment in an eligible role within a UK faith community or religious order. The position should meet the route's requirements for religious leadership or pastoral duties.",
            "Roles mainly involving administrative work, clerical duties, domestic work, media production or school teaching may not qualify unless an applicable exception applies, such as a senior position within the organisation or membership of a religious order."
          ]
        },
        {
          heading: "2. Certificate of Sponsorship",
          paragraphs: [
            "Your UK employer must hold an appropriate sponsor licence and assign you a valid Certificate of Sponsorship (CoS). This electronic record contains details of your role, salary, sponsor and proposed employment dates.",
            "You must use the CoS reference within three months of it being issued. The sponsoring organisation must also meet its responsibilities under the Home Office sponsorship system."
          ]
        },
        {
          heading: "3. English Language Requirement",
          paragraphs: [
            "Applicants generally need to demonstrate English language ability at B2 level across reading, writing, speaking and listening.",
            "You may meet this requirement through an approved English language test or a qualifying degree taught in English. Certain nationals and applicants who have already demonstrated the required level through a previous successful application may be exempt."
          ]
        },
        {
          heading: "4. Financial Requirement",
          paragraphs: [
            "You usually need at least £1,270 in personal savings, held for 28 consecutive days. The final day of this period must fall within 31 days of your visa application.",
            "You may not need to provide personal savings evidence if you have held valid UK permission for at least 12 months or your eligible sponsor certifies maintenance on your Certificate of Sponsorship."
          ]
        },
        {
          heading: "5. Minimum Age Requirement",
          paragraphs: ["The Minister of Religion Visa has a minimum age requirement. You must be 18 or older on the date you submit your application. There is no general upper age limit specified for this visa route."]
        }
      ]
    },
    {
      heading: "Minister of Religion Visa UK Age Restrictions",
      paragraphs: [
        "Applicants often ask whether they can apply for a Minister of Religion Visa at an older age. The Home Office rules specify that applicants must be at least 18 when applying, but they do not set a general maximum age.",
        "Meeting the age requirement alone does not guarantee eligibility. You must also have a qualifying religious role, valid sponsorship, the required English language ability and evidence that you meet the financial and other immigration conditions."
      ]
    },
    {
      heading: "Documents Required for a Minister of Religion Visa Application",
      paragraphs: ["Preparing the correct documents is an important part of the application process. The evidence must support your identity, sponsorship and eligibility.", "You will generally need:"],
      bullets: [
        "A valid passport or other accepted travel document.",
        "Your Certificate of Sponsorship reference number.",
        "Evidence of your English language ability, if required.",
        "Bank statements showing the required savings, where applicable.",
        "Previous passports or travel documents if needed to demonstrate your travel history.",
        "A tuberculosis test certificate, if you are applying from a country where one is required.",
        "Certified translations of documents that are not in English or Welsh."
      ]
    },
    {
      heading: "How to Apply for a Minister of Religion Visa UK",
      paragraphs: ["The application process involves several stages. Checking your eligibility and sponsorship arrangements before submitting the form can help reduce avoidable errors."],
      subsections: [
        {
          heading: "Step 1: Confirm Your Eligibility",
          paragraphs: ["Check that your proposed religious role meets the T2 route requirements and that you meet the age, English language and financial criteria."]
        },
        {
          heading: "Step 2: Obtain a Certificate of Sponsorship",
          paragraphs: ["Your UK religious organisation must hold the appropriate sponsor licence and issue a valid CoS for your role."]
        },
        {
          heading: "Step 3: Prepare Your Supporting Documents",
          paragraphs: ["Gather your passport, sponsorship reference, financial evidence, English language documents and any required TB certificate or translations."]
        },
        {
          heading: "Step 4: Complete the Online Application",
          paragraphs: ["Submit the relevant online application and pay the visa application fee and Immigration Health Surcharge, where applicable. You can normally apply up to three months before the employment start date stated on your CoS."]
        },
        {
          heading: "Step 5: Attend Your Biometrics Appointment",
          paragraphs: ["You will normally need to provide your fingerprints and photograph at a visa application centre if applying from outside the UK."]
        },
        {
          heading: "Step 6: Wait for a Decision",
          paragraphs: ["Once your application and supporting evidence have been submitted, UK Visas and Immigration will assess whether you meet the requirements. You should not make non-refundable travel arrangements until you receive a decision."]
        }
      ]
    },
    {
      heading: "Cost of Minister of Religion Visa UK",
      paragraphs: ["The cost depends on whether you apply from outside the UK or extend or switch your permission from within the UK. You must also account for the Immigration Health Surcharge and any dependant applications."],
      table: {
        headers: ["Application", "Visa fee"],
        rows: [
          ["Main applicant outside the UK", "£819"],
          ["Main applicant extending or switching in the UK", "£943"],
          ["Each dependant outside the UK", "£819"],
          ["Each dependant extending or switching in the UK", "£943"]
        ]
      },
      paragraphsAfterTable: [
        "The Immigration Health Surcharge is generally £1,035 per year for an adult applicant. For example, a three-year application would normally involve £3,105 in healthcare surcharge payments, in addition to the visa application fee. The exact amount depends on the permission granted.",
        "Optional priority services may also be available for an additional charge. Check the latest Home Office fees before submitting your application, as charges can change."
      ]
    },
    {
      heading: "Minister of Religion Visa Application Support",
      paragraphs: [
        "Applying under a sponsored religious work route involves more than completing an online form. The role, sponsor licence, Certificate of Sponsorship and supporting evidence must all meet the relevant immigration rules.",
        "If you are searching for a Minister of Religion Visa solicitor, immigration lawyer or specialist religious visa adviser, check that the professional you approach has the appropriate authorisation and experience. Visa Direct Immigration can provide application guidance to help you understand the process and prepare your supporting information.",
        "We offer immigration application support to individuals in Birmingham, Bristol, Reading and across the UK through remote consultations.",
        "Book Your Immigration Consultation to discuss your Minister of Religion Visa application."
      ]
    }
  ]
},
  {
    id: "service-supplier-visa",
    slug: "service-supplier-visa",
    title: "Service Supplier Visa",
    category: "Business Immigration",
    shortDescription: "The UK Service Supplier Visa allows eligible overseas employees and self-employed professionals to provide temporary services to UK businesses under qualifying international trade agreements.",
    heroTagline: "Provide temporary contract services to UK businesses under qualifying international trade agreements.",
    seoTitle: "UK Service Supplier Visa Services | Visa Direct Immigration",
    seoDescription: "Get professional UK Service Supplier Visa application support. We help with eligibility, sponsorship, documents and the application process.",
    primaryCta: "Book Your Immigration Consultation",
    iconName: "Briefcase",
    keyFeatures: [
      "Temporary work permission under eligible UK international trade agreements",
      "Open to overseas employees and independent self-employed professionals",
      "Requires a valid Certificate of Sponsorship (CoS) from a licensed UK business",
      "Dependant partner and children accompaniment options available"
    ],
    eligibilityRequirements: [
      "Eligible overseas service provider (employee of overseas company or self-employed)",
      "Service contract covered by an eligible UK international trade agreement",
      "Nationality or permanent residency requirements of the relevant trade treaty country",
      "At least 12 months of continuous relevant experience outside the UK",
      "Role meets occupation skill level or bachelor's degree/technical equivalent",
      "Valid Certificate of Sponsorship issued by an approved UK sponsor within 3 months"
    ],
    documentsRequired: [
      "Valid passport confirming identity and nationality",
      "Certificate of Sponsorship (CoS) reference number",
      "Job title and standard occupational classification (SOC) code",
      "Sponsor details confirming UK business licence",
      "Bank statements showing £1,270 maintenance funds (held 28 consecutive days)",
      "Employment evidence (contracts, payslips) or self-employed invoices and business accounts",
      "Degree certificates, technical qualifications and professional registrations",
      "Tuberculosis (TB) test certificate where applying from a listed country",
      "Certified translations for any non-English or Welsh documentation"
    ],
    processSteps: [
      {
        title: "Confirm Your Eligibility",
        description: "Check that your service contract is covered by an eligible international trade agreement, and confirm nationality, experience, and occupation requirements."
      },
      {
        title: "Obtain a Certificate of Sponsorship",
        description: "Your UK sponsor must issue a valid CoS with details of your role, assignment and employment arrangements within 3 months."
      },
      {
        title: "Prepare Your Supporting Documents",
        description: "Gather passport, employment or self-employment records, degree qualifications, financial proofs and any TB test certificate."
      },
      {
        title: "Complete the Online Application",
        description: "Submit the Global Business Mobility visa application through the official GOV.UK service up to 3 months before your start date."
      },
      {
        title: "Pay Fees & Prove Your Identity",
        description: "Pay the £340 visa application fee and Immigration Health Surcharge (£1,035/yr), and verify identity via the app or at a visa application centre."
      },
      {
        title: "Wait for the Decision",
        description: "UKVI assesses the application and evidence. Once approved, travel to the UK and undertake the sponsored assignment."
      }
    ],
    faqs: [
      {
        question: "Who can apply for a UK Service Supplier Visa?",
        answer: "Overseas employees and self-employed professionals may qualify if they provide services under a contract covered by an eligible international trade agreement and meet the relevant nationality, experience, occupation and sponsorship requirements."
      },
      {
        question: "Do I need a job offer for a Service Supplier Visa?",
        answer: "You need a qualifying service contract with a UK business that holds an approved sponsor licence. The UK sponsor must issue you with a Certificate of Sponsorship before you apply."
      },
      {
        question: "How much does a Service Supplier Visa cost?",
        answer: "The standard application fee is £340. You will also usually need to pay the Immigration Health Surcharge, currently £1,035 per year for adults, and meet the £1,270 maintenance requirement unless exempt."
      },
      {
        question: "Can I extend my Service Supplier Visa?",
        answer: "You may be able to extend your permission if you continue to meet the route requirements and your assignment remains eligible. Your total stay is subject to the applicable six or 12-month assignment limit and the combined five-year-in-six-year limit."
      },
      {
        question: "Does the Service Supplier Visa lead to ILR?",
        answer: "No. The Service Supplier Visa is a temporary work route and does not provide a direct path to settlement. You would need to qualify under a separate immigration route to obtain ILR."
      }
    ],
    contentSections: [
      {
        heading: "Service Supplier Visa",
        paragraphs: [
          "The UK Service Supplier Visa allows eligible overseas employees and self-employed professionals to provide temporary services to UK businesses under qualifying international trade agreements. It is part of the Global Business Mobility visa route and is designed for professionals undertaking specific contractual assignments in the UK.",
          "To qualify, you must meet the relevant nationality, work experience and job requirements, have a valid Certificate of Sponsorship (CoS) and provide services to a UK business with an approved sponsor licence.",
          "Visa Direct Immigration provides application guidance to individuals and businesses in Birmingham, Bristol, Reading and across the UK. Our team can help you understand the eligibility criteria, prepare supporting documents and navigate the application process.",
          "Book Your Immigration Consultation to discuss your circumstances and the UK Service Supplier Visa requirements."
        ]
      },
      {
        heading: "What is a UK Service Supplier Visa?",
        paragraphs: [
          "A UK Service Supplier Visa is a temporary work visa for overseas professionals providing services to a UK business under an eligible international trade agreement.",
          "You may qualify as either:"
        ],
        bullets: [
          "An overseas employee: Working for a business established outside the UK that has a contract to provide services to a UK company.",
          "A self-employed professional: Based overseas and contracted to provide eligible services to a UK business."
        ],
        paragraphsAfterTable: [
          "The UK business receiving the service must hold a valid Home Office sponsor licence and issue you with a Certificate of Sponsorship.",
          "This route is intended for temporary contractual assignments rather than permanent employment in the UK. It does not provide a direct route to settlement."
        ]
      },
      {
        heading: "Eligibility Criteria for a UK Service Supplier Visa",
        paragraphs: [
          "To qualify for a UK Service Supplier Visa, you must meet specific requirements relating to your employment, nationality, professional experience and sponsorship. The service you intend to provide must also be covered by an eligible international trade agreement."
        ],
        subsections: [
          {
            heading: "1. Be an Eligible Overseas Service Provider",
            paragraphs: [
              "You must either work for an overseas business providing services to a UK company or operate as a self-employed professional based outside the UK.",
              "Your work must relate to a genuine service contract covered by an eligible trade agreement."
            ]
          },
          {
            heading: "2. Meet the Nationality Requirements",
            paragraphs: [
              "You must generally be a national of the country or territory where the overseas service provider is based. Certain trade agreements also allow eligible permanent residents to qualify.",
              "The applicable nationality conditions depend on the agreement covering your services."
            ]
          },
          {
            heading: "3. Have the Required Work Experience",
            paragraphs: [
              "You must normally have at least 12 months of relevant experience:",
              "Overseas employees must have worked for their overseas employer outside the UK for at least 12 months.",
              "Self-employed professionals must have at least 12 months of relevant professional experience immediately before applying.",
              "You may need to provide evidence of your employment or business activities."
            ]
          },
          {
            heading: "4. Meet the Job and Qualification Requirements",
            paragraphs: [
              "Your role must meet the relevant occupation and skill requirements. If your occupation is not listed as eligible, you may still qualify through an alternative qualification and professional experience route, depending on the service sector.",
              "For many occupations, this may require a bachelor's degree or equivalent technical qualification, together with relevant professional experience. Some sectors have different requirements."
            ]
          },
          {
            heading: "5. Have an Approved UK Sponsor",
            paragraphs: [
              "The UK business receiving your services must hold a valid sponsor licence for the Service Supplier route. It must issue you with a Certificate of Sponsorship containing details of your assignment.",
              "You must use the CoS reference number when completing your visa application. It must normally be issued no more than three months before the application date."
            ]
          }
        ]
      },
      {
        heading: "Which Services Qualify for a UK Service Supplier Visa?",
        paragraphs: [
          "Not every professional service or overseas contract qualifies for this route. Your assignment must fall within a sector covered by an applicable UK international trade agreement.",
          "Depending on the agreement, eligible services may include:"
        ],
        bullets: [
          "Accounting and bookkeeping services.",
          "Architectural and engineering services.",
          "Computer-related and information technology services.",
          "Management consultancy.",
          "Advertising and marketing services.",
          "Legal advisory services.",
          "Environmental and technical services.",
          "Certain entertainment and fashion-related services."
        ],
        paragraphsAfterTable: [
          "The exact list varies according to the trade agreement, the country involved and the type of service being provided. Your UK sponsor should confirm which agreement covers the contract and whether your occupation meets its conditions."
        ]
      },
      {
        heading: "Documents Required for a UK Service Supplier Visa",
        paragraphs: [
          "You must provide documents that establish your identity, sponsorship, professional background and ability to support yourself in the UK.",
          "Common documents include:"
        ],
        table: {
          headers: ["Document", "Purpose"],
          rows: [
            ["Valid passport", "Confirms your identity and nationality"],
            ["Certificate of Sponsorship reference", "Confirms your sponsored assignment"],
            ["Job title and occupation code", "Identifies the role you will perform"],
            ["Sponsor details", "Confirms the UK business and its sponsor licence"],
            ["Bank statements", "Demonstrate the required personal savings, if applicable"],
            ["Employment evidence", "Shows your previous work with the overseas employer"],
            ["Qualifications and certificates", "Supports your professional eligibility, where required"],
            ["TB test certificate", "Required if you are applying from a country where testing is mandatory"]
          ]
        },
        paragraphsAfterTable: [
          "Self-employed applicants may also need invoices, business accounts, bank statements or other evidence of their professional activities.",
          "Documents that are not in English or Welsh must normally be accompanied by a certified translation."
        ]
      },
      {
        heading: "How to Apply for a UK Service Supplier Visa",
        paragraphs: [
          "The application process involves securing sponsorship, confirming your eligibility and submitting the required information to UK Visas and Immigration (UKVI)."
        ],
        subsections: [
          {
            heading: "Step 1: Confirm Your Eligibility",
            paragraphs: [
              "Check that your service contract is covered by an eligible international trade agreement. Confirm your nationality, professional experience and occupation meet the relevant conditions."
            ]
          },
          {
            heading: "Step 2: Obtain a Certificate of Sponsorship",
            paragraphs: [
              "Your UK sponsor must issue a valid CoS with details of your role, assignment and employment arrangements. You must apply within three months of receiving it."
            ]
          },
          {
            heading: "Step 3: Prepare Your Supporting Documents",
            paragraphs: [
              "Gather your passport, employment or self-employment evidence, qualifications, financial documents and any required TB test certificate."
            ]
          },
          {
            heading: "Step 4: Complete the Online Application",
            paragraphs: [
              "Submit the relevant Global Business Mobility visa application through the official GOV.UK service. You can normally apply up to three months before your scheduled UK work start date."
            ]
          },
          {
            heading: "Step 5: Pay the Fees and Prove Your Identity",
            paragraphs: [
              "Pay the visa application fee and any applicable Immigration Health Surcharge. You will also need to verify your identity using the UK Immigration: ID Check app or attend a visa application centre for biometrics, depending on your circumstances."
            ]
          },
          {
            heading: "Step 6: Wait for the Decision",
            paragraphs: [
              "UKVI will assess your application and supporting evidence. If approved, you can travel to the UK and undertake the sponsored work described in your Certificate of Sponsorship."
            ]
          }
        ]
      },
      {
        heading: "Service Supplier Visa Fees and Financial Requirements",
        paragraphs: [
          "Applicants must budget for the visa application fee, Immigration Health Surcharge and required maintenance funds.",
          "The current costs include:"
        ],
        table: {
          headers: ["Expense", "Amount"],
          rows: [
            ["Visa application fee", "£340"],
            ["Immigration Health Surcharge", "Usually £1,035 per year for adults"],
            ["Maintenance funds", "£1,270"]
          ]
        },
        paragraphsAfterTable: [
          "You must normally have at least £1,270 available in your bank account for 28 consecutive days, with the end of that period falling within 31 days of your application.",
          "You may not need to provide separate savings evidence if you have held a valid UK visa for at least 12 months or your sponsor certifies maintenance on your Certificate of Sponsorship.",
          "Your partner and children will have separate application fees, healthcare surcharge and financial requirements if they apply as dependants."
        ]
      },
      {
        heading: "How Visa Direct Immigration Can Help",
        paragraphs: [
          "Applying for a Service Supplier Visa involves more than securing a contract with a UK business. You must also meet the relevant trade agreement conditions, professional requirements and sponsorship rules.",
          "Visa Direct Immigration can provide guidance with:"
        ],
        bullets: [
          "Understanding the eligibility criteria for your circumstances.",
          "Reviewing your professional experience and supporting evidence.",
          "Identifying the documents needed for your application.",
          "Understanding the Certificate of Sponsorship requirements.",
          "Preparing and checking your application information.",
          "Explaining the application process and relevant fees."
        ],
        paragraphsAfterTable: [
          "We support applicants in Birmingham, Bristol and Reading, as well as clients across the UK.",
          "Book Your Immigration Consultation to discuss your Service Supplier Visa application and the next steps."
        ]
      }
    ],
    heroImage: "/images/services/service-supplier-visa.webp"
  },
  {
  id: "investor-visa-tier-1",
  slug: "investor-visa-tier-1",
  title: "Investor Visa (Tier 1)",
  category: "Business Immigration",
  shortDescription: "Extension and Indefinite Leave to Remain (ILR) representation for existing Tier 1 Investor visa holders.",
  heroTagline: "High-value investment compliance and settlement in the UK.",
  seoTitle: "Tier 1 Investor Visa UK | Extension & ILR Settlement Support",
  seoDescription: "Specialist legal representation for high-net-worth investors managing extensions, portfolio compliance, and accelerated UK settlement.",
  iconName: "ShieldCheck",
  keyFeatures: [
    "£2m, £5m, or £10m qualifying investment portfolio audit",
    "Accelerated settlement strategies (2, 3, or 5-year ILR)",
    "Strict absence monitoring and compliance management",
    "Family dependant settlement synchronisation"
  ],
  eligibilityRequirements: [
    "Current valid Tier 1 Investor visa permission",
    "Maintained investment in UK share or loan capital in active companies",
    "Continuous residence without exceeding 180 days absence in any 12-month period",
    "Passed Life in the UK and English language tests (for ILR)"
  ],
  documentsRequired: [
    "Quarterly investment portfolio valuation reports",
    "FCA-regulated financial institution audit letters",
    "Passports and biometric residence permits",
    "Proof of residence and absence schedules"
  ],
  processSteps: [
    {
      title: "Portfolio Audit & Verification",
      description: "Auditing all qualifying investment transactions to guarantee full Home Office compliance."
    },
    {
      title: "Settlement Application Submission",
      description: "Preparing detailed legal representations for accelerated or standard ILR."
    },
    {
      title: "Permanent Residence & Passports",
      description: "Securing ILR and progressing onto British citizenship naturalisation."
    }
  ],
  faqs: [
    {
      question: "How fast can I achieve settlement under Tier 1 Investor?",
      answer: "Investors maintaining £10m can settle after 2 years; £5m allows settlement in 3 years; and £2m allows settlement in 5 years."
    }
  ]
},
  {
  id: "global-talent-visa",
  slug: "global-talent-visa",
  title: "Global Talent Visa",
  category: "Business Immigration",
  shortDescription:
    "Explore Global Talent Visa UK eligibility, endorsement requirements, documents, fees and processing times.",
  heroTagline: "Prepare your Global Talent Visa application with guidance on endorsement and settlement.",
  seoTitle: "Global Talent Visa UK | Eligibility & Application Support",
  seoDescription:
    "Explore Global Talent Visa UK eligibility, endorsement requirements, documents, fees and processing times. Get guidance with your application.",
  primaryCta: "Book Your Immigration Consultation",
  heroImage: "/images/services/global-talent-visa.webp",
  supportingImages: [
    {
      src: "/images/service-business.webp",
      alt: "Global Talent Visa UK professional evidence and immigration documents",
      caption: "Guidance for endorsements, evidence and Global Talent applications",
    },
  ],
  contentSections: [
    {
      heading: "Global Talent Visa",
      paragraphs: [
        "The Global Talent Visa UK allows talented professionals and emerging leaders to live and work in the UK without being tied to one employer. It is designed for people with recognised achievements or strong potential in academia and research, arts and culture, or digital technology.",
        "Applicants generally need an endorsement from an approved organisation, although people who have won an eligible prestigious prize can apply without one. Visa Direct Immigration provides application guidance to help you understand the requirements, prepare supporting documents and complete the relevant application stages.",
      ],
    },
    {
      heading: "Global Talent Visa UK Application Support",
      paragraphs: [
        "A Global Talent application requires more than a standard visa form. You may need to demonstrate professional achievements, influence, experience and potential through recommendation letters and other supporting evidence.",
        "Our immigration team can help you understand the application route, organise your documents and identify information that may need further attention before submission.",
      ],
    },
    {
      heading: "Eligibility for Global Talent Visa UK",
      paragraphs: [
        "To qualify, you must be at least 18 and meet the requirements for an eligible professional field. You must normally demonstrate that you are either an established leader, known as exceptional talent, or a potential leader, known as exceptional promise.",
        "The main eligible fields are:",
      ],
      bullets: [
        "Academia and research: Science, engineering, medicine, humanities and social sciences.",
        "Arts and culture: Music, dance, theatre, literature, visual arts, architecture, fashion, film and television, and other eligible creative fields.",
        "Digital technology: Areas such as artificial intelligence, financial technology, cybersecurity and gaming.",
      ],
      subsections: [
        {
          heading: "Endorsement or Prestigious Prize",
          paragraphs: [
            "You must meet the relevant endorsement criteria or have won a qualifying prestigious prize. There is no general minimum salary or English-language requirement for the Global Talent visa itself.",
          ],
        },
      ],
    },
    {
      heading: "How to Apply for Global Talent Visa UK",
      paragraphs: [
        "There are two main application routes: applying with an endorsement or applying based on an eligible prestigious prize.",
      ],
      bullets: [
        "1. Check your eligibility: Identify the relevant field and whether you meet the exceptional talent or exceptional promise criteria.",
        "2. Prepare your evidence: Collect professional achievements, recommendation letters, career history and category-specific documents.",
        "3. Apply for endorsement: Submit an endorsement application if you do not qualify through a prestigious prize.",
        "4. Receive your endorsement decision: If successful, submit the visa application within three months.",
        "5. Submit your visa application: Complete the online form, pay the fee and provide supporting documents.",
        "6. Prove your identity: Use the ID Check app or attend a visa application centre.",
        "7. Wait for a decision: The Home Office will assess your application.",
      ],
    },
    {
      heading: "Global Talent Visa UK Documents",
      paragraphs: [
        "The documents required depend on your professional field and application route. Preparing relevant, consistent evidence is important because the endorsement assessment focuses on the quality of your achievements and contributions.",
        "You may need:",
      ],
      bullets: [
        "A valid passport or other accepted identity document.",
        "An endorsement letter, if applying through the endorsement route.",
        "A CV outlining your professional experience and career history.",
        "Recommendation letters from recognised experts or organisations in your field.",
        "Evidence of professional achievements, awards, publications, performances or significant projects.",
        "Proof of your contribution to research, innovation or the creative industry, where relevant.",
        "Certified translations for documents that are not in English or Welsh.",
      ],
      subsections: [
        {
          heading: "Category-Specific Evidence",
          paragraphs: [
            "Do not assume that the same evidence requirements apply to every applicant. Check the relevant endorsing body's guidance before submitting your documents.",
          ],
        },
      ],
    },
    {
      heading: "Global Talent Visa UK Cost",
      paragraphs: [
        "The current application fee is £766 per applicant. If you need an endorsement, the fee is divided into two payments:",
      ],
      table: {
        headers: ["Application stage", "Fee"],
        rows: [
          ["Endorsement application", "£561"],
          ["Visa application", "£205"],
          ["Total", "£766"],
        ],
      },
      paragraphsAfterTable: [
        "If you qualify through an eligible prestigious prize, you pay the full £766 when applying for the visa. The Immigration Health Surcharge is charged separately and is usually £1,035 per year for each applicant.",
        "Dependants must pay their own visa application fees and applicable surcharge. Check the published amounts before applying.",
      ],
    },
    {
      heading: "Global Talent Visa Processing Time",
      paragraphs: [
        "For the visa application itself, the usual decision time is around three weeks outside the UK and around eight weeks inside the UK after identity checks and document submission.",
        "Endorsement decisions have separate timescales. Some arts and culture applications are generally decided within eight weeks, while some digital technology applications usually take five to eight weeks. Delays can occur if documents need verification or further information is requested.",
      ],
    },
    {
      heading: "Benefits of UK Global Talent Visa",
      paragraphs: [
        "The Global Talent route offers flexibility that is not available under every UK work visa.",
      ],
      bullets: [
        "Work for an employer, become self-employed or establish a business.",
        "Change jobs or stop working without a new employer-sponsored visa.",
        "Work in your specialist field without a minimum salary requirement under this route.",
        "Bring an eligible partner and children as dependants.",
        "Choose a visa period of up to five years at a time.",
        "Extend your permission if you continue to meet the relevant requirements.",
        "Become eligible to apply for indefinite leave to remain after the qualifying period.",
      ],
      subsections: [
        {
          heading: "Visa Conditions",
          paragraphs: [
            "You are not permitted to access most public funds or work as a professional sportsperson under this route. Check the conditions attached to your permission before making changes.",
          ],
        },
      ],
    },
    {
      heading: "Global Talent Visa ILR Requirements",
      paragraphs: [
        "Global Talent visa holders may qualify for Indefinite Leave to Remain after three or five years, depending on their endorsement category or qualifying prestigious prize.",
        "A three-year period generally applies to eligible research endorsements, exceptional talent endorsements in arts and digital technology, and qualifying prestigious prize holders. Exceptional promise endorsements in arts or digital technology generally require five years.",
        "You must meet the continuous residence, earnings in your endorsed field, endorsement, English language, Life in the UK Test and suitability requirements. Dependant permission does not count towards the main applicant's qualifying period.",
      ],
    },
    {
      heading: "How Visa Direct Immigration Can Help",
      paragraphs: [
        "A Global Talent application can involve detailed evidence requirements and different endorsement criteria across professional fields. Visa Direct Immigration can provide guidance on understanding the relevant route, reviewing documents and navigating the application process.",
        "If you are searching for Global Talent Visa consultants, a Global Talent Visa lawyer or solicitor, check the provider's qualifications and regulatory authorisation before instructing them. Book Your Immigration Consultation to discuss your application.",
      ],
    },
    {
      heading: "Frequently Asked Questions",
      subsections: [
        {
          heading: "Is there an age limit for the Global Talent Visa UK?",
          paragraphs: [
            "You must be at least 18 years old to apply. There is no upper age limit if you meet the relevant requirements.",
          ],
        },
        {
          heading: "Can I apply without an endorsement?",
          paragraphs: [
            "Yes. You can apply without an endorsement if you have won an eligible prestigious prize. Other applicants generally need an endorsement.",
          ],
        },
        {
          heading: "Can I bring my family to the UK?",
          paragraphs: [
            "Yes. An eligible partner and dependent children can apply to join you. Each dependant must submit an application and pay the relevant fees.",
          ],
        },
        {
          heading: "Can I switch jobs on a Global Talent Visa?",
          paragraphs: [
            "Yes. You can change employers, become self-employed or work as a company director without obtaining a new sponsor.",
          ],
        },
        {
          heading: "How long does it take to get ILR?",
          paragraphs: [
            "Depending on your endorsement category or qualifying prize, you may be eligible after three or five years, subject to the settlement requirements.",
          ],
        },
      ],
    },
  ],
  iconName: "Sparkles",
  keyFeatures: [
    "Endorsement strategy for Tech Nation, Royal Society, British Academy & Arts Council",
    "Full employer and career independence (no sponsorship needed)",
    "Fast-track 3-year settlement for exceptional talent leaders",
    "Dependant partner and child relocation"
  ],
  eligibilityRequirements: [
    "Endorsement from an approved endorsing body (or eligible prestigious award)",
    "Demonstrated exceptional talent (leader) or exceptional promise (emerging leader)",
    "No job offer, minimum salary, or English test required for initial stage"
  ],
  documentsRequired: [
    "Endorsement application dossier with comprehensive evidence portfolio",
    "Letters of recommendation from recognized international industry leaders",
    "Curriculum Vitae highlighting notable publications, patents, or projects",
    "Valid passport"
  ],
  processSteps: [
    {
      title: "Stage 1: Endorsement Petition",
      description: "Drafting persuasive evidence portfolio and securing endorsement body sign-off."
    },
    {
      title: "Stage 2: Visa Lodgement",
      description: "Submitting official visa application to the Home Office upon endorsement approval."
    },
    {
      title: "Accelerated UK Settlement",
      description: "Working freely with qualification for ILR after 3 or 5 years."
    }
  ],
  faqs: [
    {
      question: "Do I need a job offer for the Global Talent Visa?",
      answer: "No, this route is completely unsponsored. You can work for any employer, create your own business, or be self-employed."
    }
  ]
},
  {
  id: "sports-person-visa",
  slug: "sports-person-visa",
  title: "Sports Person Visa",
  category: "Business Immigration",
  shortDescription: "Visa for elite sportspeople and coaches internationally established at the highest level of sport.",
  heroTagline: "Compete and coach at the highest level of British professional sport.",
  seoTitle: "Sports Person Visa Lawyer UK | Visa Direct Immigration",
  seoDescription: "Need help with a UK Sports Person Visa? Get professional application support with eligibility, governing body endorsement, sponsorship and documents.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "Award",
  keyFeatures: [
    "Sports governing body endorsement guidance",
    "Short-term (up to 12 months) and long-term (up to 3 years) routes",
    "Coaching and secondary work permissions review",
    "5-year settlement pathway to Indefinite Leave to Remain"
  ],
  eligibilityRequirements: [
    "Endorsement from the designated UK sports governing body",
    "Internationally established at the highest level of your sport",
    "Certificate of Sponsorship from an approved UK sports club or body",
    "English language proficiency at level A1 (for applications up to 12 months)"
  ],
  documentsRequired: [
    "Sports governing body endorsement letter",
    "Valid passport or travel document",
    "Certificate of Sponsorship reference number",
    "Evidence of English language ability, if required",
    "Bank statements showing required savings, where applicable",
    "TB test results if required based on country of residence"
  ],
  processSteps: [
    {
      title: "Governing Body Endorsement",
      description: "Securing official endorsement confirming international sporting standing."
    },
    {
      title: "Sponsorship & Visa Submission",
      description: "Club assigns CoS and application is lodged with Home Office."
    },
    {
      title: "UK Professional Competition",
      description: "Competing and training with authorized permissions."
    }
  ],
  faqs: [
    {
      question: "Who can apply for a UK Sports Person Visa?",
      answer: "Internationally established elite athletes and qualified coaches may qualify if they receive the required governing body endorsement and have a valid Certificate of Sponsorship from an approved UK employer."
    },
    {
      question: "Is there an age limit for the International Sportsperson Visa?",
      answer: "Applicants must be at least 16 years old. Applicants under 18 must also meet the applicable parental consent requirements. There is no general upper age limit specified."
    },
    {
      question: "Can my family join me in the UK?",
      answer: "Eligible partners and dependent children can apply to join you or remain in the UK under the dependant provisions. They must meet the relevant requirements and submit their own applications."
    },
    {
      question: "Can I extend my Sports Person Visa?",
      answer: "Yes. You may apply to extend your permission for up to three years at a time, provided you continue to meet the eligibility and sponsorship requirements."
    },
    {
      question: "Can I get ILR through the International Sportsperson Visa?",
      answer: "You may qualify for settlement after five years of continuous residence if you meet the applicable sponsorship, salary, English language and Life in the UK requirements."
    }
  ],
  contentSections: [
    {
      heading: "Sports Person Visa UK",
      paragraphs: [
        "The UK Sports Person Visa, officially known as the International Sportsperson Visa, allows internationally established elite athletes and qualified sports coaches to work in the UK. Applicants must receive an endorsement from the relevant sports governing body and sponsorship from an approved UK employer.",
        "Visa Direct Immigration provides application guidance to sports professionals who want to understand the eligibility criteria, sponsorship arrangements and documents required for their UK visa application."
      ]
    },
    {
      heading: "What is the International Sportsperson Visa?",
      paragraphs: [
        "The International Sportsperson Visa is designed for elite athletes and qualified coaches who are internationally recognised and can make a significant contribution to the development of their sport at the highest level in the UK.",
        "It replaced the former Sportsperson (T2) Visa and the sporting part of the Temporary Worker Creative and Sporting (T5) route.",
        "The visa may be suitable for professional athletes, internationally established competitors and qualified coaches offered an eligible position by a UK sports organisation."
      ]
    },
    {
      heading: "UK Sports Person Visa Requirements",
      paragraphs: [
        "To qualify, applicants must meet the endorsement, sponsorship, financial and other immigration requirements.",
        "The main requirements include:"
      ],
      bullets: [
        "Governing body endorsement: The relevant Home Office-approved sports governing body must confirm that you are an elite sportsperson or qualified coach, are internationally established and will contribute significantly to your sport in the UK.",
        "Certificate of Sponsorship: You must have a valid Certificate of Sponsorship from an approved UK employer for your proposed sporting role.",
        "Financial requirement: You generally need at least £1,270 in savings, held for 28 consecutive days, unless your sponsor certifies maintenance or an exemption applies.",
        "English language: If applying for permission exceeding 12 months, you generally need to demonstrate English speaking and listening ability at A1 level, unless exempt.",
        "Age requirement: Applicants must be at least 16 years old. Those under 18 must meet the relevant parental consent requirements."
      ]
    },
    {
      heading: "Documents Required for a Sports Person Visa Application",
      paragraphs: ["Preparing the correct evidence helps demonstrate that you meet the visa requirements. Depending on your circumstances, you may need:"],
      bullets: [
        "A valid passport or travel document.",
        "Your Certificate of Sponsorship reference number.",
        "An endorsement letter from the relevant sports governing body.",
        "Evidence of English language ability, if required.",
        "Bank statements showing the required savings, where applicable.",
        "Tuberculosis test results, if required based on your country of residence.",
        "Certified translations of documents not written in English or Welsh."
      ]
    },
    {
      heading: "How to Apply for a Sports Person Visa UK",
      paragraphs: ["The application process involves several stages, and the endorsement and sponsorship arrangements should be in place before you submit your application."],
      bullets: [
        "Check your eligibility: Confirm that your sporting achievements, qualifications and proposed role meet the route's requirements.",
        "Obtain governing body endorsement: Apply to the appropriate sports governing body for an endorsement confirming your eligibility.",
        "Receive sponsorship: Your UK employer must assign a valid Certificate of Sponsorship containing the required job and endorsement details.",
        "Prepare your documents: Gather your passport, financial evidence, English language documents and other supporting information.",
        "Submit your application: Complete the online application, pay the relevant fee and Immigration Health Surcharge, and provide your biometric information when required.",
        "Wait for a decision: UK Visas and Immigration will assess your application and notify you of the outcome."
      ],
      paragraphsAfterTable: [
        "You can generally apply up to three months before the employment start date shown on your Certificate of Sponsorship."
      ]
    },
    {
      heading: "Sports Person Visa UK Fees and Processing Time",
      paragraphs: ["The application fee depends on how long you intend to stay and whether you apply from inside or outside the UK."],
      table: {
        headers: ["Application type", "Visa fee"],
        rows: [
          ["Stay of up to 12 months", "£340"],
          ["More than 12 months, outside the UK", "£819"],
          ["Extension or switching, inside the UK", "£943"]
        ]
      },
      paragraphsAfterTable: [
        "The Immigration Health Surcharge is usually £1,035 per year for adults. Dependants must also pay the relevant application fees and healthcare surcharge.",
        "Standard processing usually takes three weeks for applications made outside the UK and eight weeks for eligible applications made inside the UK. Priority services may be available at an additional cost."
      ]
    },
    {
      heading: "Sports Person Visa Lawyer and Application Support",
      paragraphs: [
        "A Sports Person Visa application involves coordination between the applicant, UK employer and relevant sports governing body. Errors in endorsement details, sponsorship records or supporting evidence can affect the outcome.",
        "If you are searching for a Sports Person Visa lawyer, immigration solicitor or sports immigration adviser in the UK, check that the professional has the appropriate authorisation and experience. Visa Direct Immigration can provide application guidance to help you understand the process and prepare the relevant documentation.",
        "We support clients in Birmingham, Bristol, Reading and across the UK through remote consultations.",
        "Book Your Immigration Consultation to discuss your Sports Person Visa application."
      ]
    }
  ]
},
{
  id: "innovator-visa",
  slug: "innovator-visa",
  title: "Innovator Visa",
  category: "Business Immigration",
  shortDescription: "For experienced business founders seeking to establish an innovative, viable, and scalable business in the UK.",
  heroTagline: "Scale your innovative business in the UK with accelerated 3-year settlement.",
  seoTitle: "Innovator Founder Visa UK | Business Immigration Support",
  seoDescription: "Launch and scale your endorsed business in the UK. Comprehensive legal guidance for the Innovator Founder visa and 3-year ILR.",
  iconName: "TrendingUp",
  keyFeatures: [
    "Approved endorsing body criteria alignment",
    "Business model innovation, viability & scalability vetting",
    "Accelerated 3-year settlement pathway to Indefinite Leave to Remain",
    "Secondary employment permitted in skilled roles"
  ],
  eligibilityRequirements: [
    "Official endorsement letter from an authorized UK endorsing body",
    "Business idea is new, innovative, viable, and has demonstrable scalability",
    "English language proficiency at level B2",
    "Maintenance funds of at least £1,276 in personal savings"
  ],
  documentsRequired: [
    "Endorsement letter from approved endorsing body",
    "Complete business plan with 3-year cash flow forecasts",
    "Valid passport",
    "Bank statements showing maintenance funds"
  ],
  processSteps: [
    {
      title: "Endorsement Application",
      description: "Pitching your innovative business concept to an approved endorsing body."
    },
    {
      title: "Visa Application Lodgement",
      description: "Filing application with Home Office upon securing the endorsement letter."
    },
    {
      title: "3-Year Settlement",
      description: "Meeting business targets to apply for Indefinite Leave to Remain in 3 years."
    }
  ],
  faqs: [
    {
      question: "Is there a minimum investment fund requirement?",
      answer: "No, under the Innovator Founder rules there is no set minimum investment amount, as long as the endorsing body approves your financial plan."
    }
  ]
},
  {
  id: "business-development-visa",
  slug: "business-development-visa",
  title: "Business Development Visa",
  category: "Business Immigration",
  shortDescription: "Immigration solutions for international companies expanding into the UK market through designated personnel.",
  heroTagline: "Drive commercial growth and UK market entry with tailored immigration routes.",
  seoTitle: "Business Development Visa UK | Corporate Growth Immigration",
  seoDescription: "Help for overseas corporations sending key directors and business developers to establish and expand operations in the UK.",
  iconName: "Briefcase",
  keyFeatures: [
    "Corporate market-entry immigration strategy",
    "UK Expansion Worker and Senior Specialist visa support",
    "Sponsor licence establishment and CoS management",
    "Full compliance monitoring for overseas parent company"
  ],
  eligibilityRequirements: [
    "Overseas company with proven trading record",
    "Genuine intention to establish trading branch or subsidiary in the UK",
    "Key personnel with requisite authority and seniority",
    "Home Office compliance readiness"
  ],
  documentsRequired: [
    "Overseas company financial statements and registration",
    "Detailed UK commercial expansion strategy",
    "Passports and employment contracts for designated executives",
    "Proof of overseas trading history"
  ],
  processSteps: [
    {
      title: "Commercial Route Blueprint",
      description: "Selecting optimal corporate vehicle and visa categories."
    },
    {
      title: "Licence & Visa Execution",
      description: "Securing sponsorship permissions and employee entry clearance."
    },
    {
      title: "UK Operations Launch",
      description: "Commencing commercial activities and ongoing compliance management."
    }
  ],
  faqs: [
    {
      question: "Which visa route is best for business developers?",
      answer: "The UK Expansion Worker, Skilled Worker, or Senior Specialist routes are most commonly used depending on company structure."
    }
  ]
},
  {
  id: "child-dependent-visa",
  slug: "child-dependent-visa",
  title: "Child Dependent Visa",
  category: "Personal Immigration",
  shortDescription: "Bring your children to live with you in the UK as dependants under family or work immigration routes.",
  heroTagline: "Bring your children to the UK with dedicated family dependant support.",
  seoTitle: "Child Dependent Visa UK | Family Immigration Support",
  seoDescription: "Guidance for parents bringing minor children to the UK under family, settlement, and work visa immigration routes.",
  iconName: "Users",
  keyFeatures: [
    "Sole responsibility evidence verification",
    "Financial maintenance and adequate accommodation checks",
    "Minor child eligibility and age rule compliance",
    "Settlement alignment with parent visa permissions"
  ],
  eligibilityRequirements: [
    "Child is under 18 at the date of application",
    "Child has not formed an independent family unit or entered marriage",
    "Both parents are in the UK or applying, or sponsoring parent has sole responsibility",
    "Adequate accommodation and maintenance without public funds"
  ],
  documentsRequired: [
    "Child's full birth certificate showing parents' names",
    "Passports of child and parents",
    "Court custody orders or sole responsibility evidence where applicable",
    "Financial statements and proof of suitable housing"
  ],
  processSteps: [
    {
      title: "Sole Responsibility & Custody Check",
      description: "Reviewing legal custody and parent involvement records."
    },
    {
      title: "Application Lodgement",
      description: "Submitting application online with biometric appointment booking."
    },
    {
      title: "Family Unity in UK",
      description: "Entry clearance granted aligned with parent's leave duration."
    }
  ],
  faqs: [
    {
      question: "What is 'sole responsibility' in a child visa application?",
      answer: "It requires proof that one parent has had exclusive control and direction over the child's life and key decisions (education, medical, daily care)."
    }
  ]
},
  {
  id: "adult-dependent-relative",
  slug: "adult-dependent-relative",
  title: "Adult Dependent Relative Visa",
  category: "Personal Immigration",
  shortDescription: "For adult relatives who require long-term personal care to join their British or settled family member in the UK.",
  heroTagline: "Compassionate application support for dependent elderly or vulnerable relatives.",
  seoTitle: "Adult Dependent Relative Visa Advisors UK",
  seoDescription: "Need help with an Adult Dependent Relative Visa UK application? Get support with eligibility, care requirements, documents, fees and sponsorship.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "HeartHandshake",
  keyFeatures: [
    "Medical assessment & daily living care proof audit",
    "Home country care unavailability documentation",
    "Financial sponsorship undertaking verification",
    "Immediate Indefinite Leave to Enter for settled sponsors"
  ],
  eligibilityRequirements: [
    "Applicant is a parent, grandparent, brother, sister, or adult child of settled UK sponsor",
    "Requires long-term personal care for everyday tasks due to age, illness, or disability",
    "Required care is not available or affordable in country of residence",
    "Sponsor can maintain, accommodate, and care for relative without public funds for 5 years"
  ],
  documentsRequired: [
    "Valid passport or travel document",
    "Full birth certificate or other evidence of family relationship",
    "Medical reports explaining applicant's condition and care requirements",
    "Evidence showing why suitable care is unavailable or unaffordable in country of residence",
    "Sponsor's bank statements and payslips",
    "Signed maintenance undertaking",
    "Tenancy agreement or mortgage documents"
  ],
  processSteps: [
    {
      title: "Assess Eligibility & Obtain Medical Evidence",
      description: "Check the family relationship, sponsor's status and arrange medical reports explaining the applicant's condition and personal care needs."
    },
    {
      title: "Assess Care Availability & Prepare Sponsor Evidence",
      description: "Gather evidence showing why suitable care is unavailable or unaffordable, and collect the sponsor's financial and accommodation documents."
    },
    {
      title: "Complete Application & Pay Fees",
      description: "Submit the online Adult Dependent Relative Visa application, pay the applicable fee and Immigration Health Surcharge."
    },
    {
      title: "Complete Biometrics & Await Decision",
      description: "Provide fingerprints and photograph, then wait for the Home Office to assess the evidence."
    }
  ],
  faqs: [
    {
      question: "Who can apply for an Adult Dependent Relative Visa UK?",
      answer: "An adult aged 18 or over may qualify if they are the parent, grandparent, adult child or adult sibling of an eligible UK sponsor and need long-term personal care because of age, illness or disability."
    },
    {
      question: "Can I bring my elderly parents to the UK on an Adult Dependent Relative Visa?",
      answer: "You may be able to bring an elderly parent if they meet the care requirements. You must demonstrate that they need long-term personal care and that suitable care is unavailable or unaffordable in their country of residence. Their age alone is not sufficient."
    },
    {
      question: "Can I apply for an Adult Dependent Relative Visa from inside the UK?",
      answer: "Normally, no. Applicants must obtain entry clearance before travelling to the UK. An application from inside the country is generally available only to someone who already has permission as an Adult Dependent Relative and is applying for further permission or settlement."
    },
    {
      question: "What evidence is required for an Adult Dependent Relative Visa?",
      answer: "You will normally need identity documents, proof of your relationship with the UK sponsor, medical evidence, details of your personal care needs and evidence showing why suitable care is unavailable or unaffordable. Your sponsor must also provide financial and accommodation evidence."
    },
    {
      question: "How long does an Adult Dependent Relative Visa application take?",
      answer: "Applications made outside the UK usually take around 12 weeks, while eligible applications made inside the UK usually take around 8 weeks. Complex cases may take longer."
    },
    {
      question: "Does the Adult Dependent Relative Visa lead to settlement?",
      answer: "Yes. If your sponsor is British, Irish or settled in the UK, you will normally receive settlement when your entry clearance application is approved. Applicants whose sponsors have temporary permission generally receive permission linked to the sponsor's status."
    },
    {
      question: "Can an Adult Dependent Relative Visa solicitor help with my application?",
      answer: "An appropriately qualified and authorised immigration solicitor can provide legal advice and assistance with the application. Visa Direct Immigration can also provide application guidance, help organise supporting documents and explain the relevant requirements."
    }
  ],
  contentSections: [
    {
      heading: "Adult Dependent Relative Visa",
      paragraphs: [
        "The UK Adult Dependent Relative Visa allows eligible adults to join a close family member in the UK when they need long-term personal care that cannot reasonably be obtained or afforded in their country of residence. The route is intended for people who require ongoing assistance because of age, illness or disability.",
        "The application has strict eligibility requirements. Applicants must demonstrate their need for care, their relationship with the UK sponsor and the sponsor's ability to provide suitable accommodation, maintenance and care without relying on public funds.",
        "Visa Direct Immigration provides guidance and application support for families considering the Adult Dependent Relative Visa UK route. We assist applicants and sponsors in Birmingham, Bristol, Reading and across the UK."
      ]
    },
    {
      heading: "What is the Adult Dependent Relative Visa UK?",
      paragraphs: [
        "The Adult Dependent Relative Visa is a UK family immigration route for adults who need long-term personal care from an eligible relative living in the UK. It can allow an applicant to join a British citizen, settled person or qualifying individual with protection status.",
        "Eligible relationships generally include a parent, grandparent, adult son or daughter, or adult brother or sister. The route also has specific provisions for certain partners of parents or grandparents applying together.",
        "Unlike a standard family visa, this route does not simply allow an elderly parent or relative to move to the UK to live near their family. The applicant must meet the care and dependency requirements set out in the Immigration Rules."
      ]
    },
    {
      heading: "Adult Dependent Relative Visa Requirements",
      paragraphs: ["To qualify, both the applicant and their UK sponsor must meet the relevant Home Office requirements. The application is assessed on the applicant's care needs, family relationship and the sponsor's ability to provide support."],
      subsections: [
        {
          heading: "1. Age Requirement",
          paragraphs: ["The applicant must be at least 18 years old when applying. The UK sponsor must also be aged 18 or over."]
        },
        {
          heading: "2. Eligible Family Relationship",
          paragraphs: ["You must be one of the following relatives of your UK sponsor:"],
          bullets: [
            "Parents.",
            "Grandparent.",
            "Adult son or daughter.",
            "Adult brother or sister."
          ]
        },
        {
          heading: "3. Sponsor's Immigration Status",
          paragraphs: ["Your UK sponsor must normally be one of the following:"],
          bullets: [
            "A British citizen.",
            "An Irish citizen.",
            "A person settled in the UK, such as someone with Indefinite Leave to Remain or settled status.",
            "A qualifying EEA national with pre-settled status under the relevant provisions.",
            "A person living in the UK with refugee status or humanitarian protection."
          ]
        },
        {
          heading: "4. Long-Term Personal Care Needs",
          paragraphs: [
            "You must demonstrate that you need long-term personal care to perform everyday personal or household tasks because of your age, illness or disability.",
            "Examples may include assistance with washing, bathing, dressing, preparing meals, moving around safely and managing essential everyday activities.",
            "A medical condition alone does not automatically qualify you. You must demonstrate how your condition affects your ability to manage everyday activities and why you require ongoing personal care."
          ]
        },
        {
          heading: "5. Care Must Be Unavailable or Unaffordable",
          paragraphs: [
            "You must prove that the required level of care is unavailable or unaffordable in the country where you currently live.",
            "The Home Office considers whether suitable care can reasonably be provided locally, including whether family members or other care providers could provide it. The assessment must also consider whether the care could be afforded even with financial assistance from your UK sponsor."
          ]
        },
        {
          heading: "6. Financial and Accommodation Requirements",
          paragraphs: [
            "Your UK sponsor must demonstrate that they can provide adequate maintenance, accommodation and care without relying on public funds.",
            "They must also sign a maintenance undertaking confirming responsibility for your support. Where the applicant receives settlement on arrival, the sponsor must undertake to provide maintenance, accommodation and care for five years.",
            "There is no simple fixed minimum salary threshold for this route. The Home Office assesses the sponsor's actual financial circumstances, income, savings, housing costs and expected care expenses."
          ]
        }
      ]
    },
    {
      heading: "Documents Required for an Adult Dependent Relative Visa UK",
      paragraphs: ["Preparing detailed supporting evidence is particularly important because the Home Office must assess both the applicant's care needs and the sponsor's ability to provide support."],
      subsections: [
        {
          heading: "Applicant's documents",
          bullets: [
            "Valid passport or travel document.",
            "Full birth certificate or other evidence of the family relationship.",
            "Medical reports explaining the applicant's condition and care requirements.",
            "Evidence of daily personal care needs.",
            "Information about available care services in the country of residence.",
            "Evidence showing why suitable care is unavailable or unaffordable.",
            "TB test certificate, if required."
          ]
        },
        {
          heading: "UK sponsor's documents",
          bullets: [
            "British passport or evidence of settled or qualifying immigration status.",
            "Proof of address in the UK.",
            "Bank statements and payslips.",
            "Employment or self-employment evidence, where applicable.",
            "Evidence of savings or other income.",
            "Tenancy agreement, mortgage documents or accommodation details.",
            "Information about proposed care arrangements.",
            "Signed maintenance undertaking."
          ]
        }
      ],
      paragraphsAfterTable: [
        "Documents not in English or Welsh must normally be accompanied by a certified translation."
      ]
    },
    {
      heading: "How to Apply for an Adult Dependent Relative Visa",
      paragraphs: ["Most applicants must apply from outside the UK and obtain entry clearance before travelling. You cannot normally switch from another visa category to this route while already in the UK."],
      bullets: [
        "Assess eligibility: Check the family relationship, sponsor's immigration status and applicant's long-term care needs.",
        "Obtain medical evidence: Arrange reports explaining the applicant's condition and the personal care they require.",
        "Assess care availability: Gather evidence showing why suitable care is unavailable or unaffordable in the applicant's country.",
        "Prepare sponsor evidence: Collect financial, accommodation and care arrangement documents.",
        "Complete the application: Submit the online Adult Dependent Relative Visa application and the required Appendix 1.",
        "Pay the fees: Pay the applicable application fee and Immigration Health Surcharge, where required.",
        "Complete biometrics: Follow the instructions to provide fingerprints and a photograph.",
        "Wait for a decision: The Home Office will assess the evidence and may request additional information."
      ]
    },
    {
      heading: "Adult Dependent Relative Visa Fees and Processing Time",
      paragraphs: ["The Adult Dependent Relative Visa fees depend on the sponsor's immigration status and whether the application is made inside or outside the UK."],
      table: {
        headers: ["Application type", "Application fee"],
        rows: [
          ["Outside the UK, standard qualifying sponsor", "£3,635"],
          ["Outside the UK, sponsor with protection status", "£452"],
          ["Inside the UK, eligible application", "£1,407"]
        ]
      },
      paragraphsAfterTable: [
        "An Immigration Health Surcharge may also be payable where the applicant receives temporary permission to stay. The amount depends on the length of permission granted.",
        "Applicants who receive settlement on arrival because their sponsor is British or settled do not normally pay the Immigration Health Surcharge for that settlement grant.",
        "The usual Home Office processing times are: Outside the UK — usually 12 weeks; Inside the UK — usually 8 weeks. These are standard estimates rather than guaranteed decision dates."
      ]
    },
    {
      heading: "Adult Dependent Relative Visa Solicitors and Application Support",
      paragraphs: [
        "Families searching for Adult Dependent Relative Visa advisors or an immigration lawyer often need help understanding the strict care requirements, sponsor responsibilities and evidence needed for a successful application.",
        "This route can be challenging because the Home Office must be satisfied that the applicant genuinely requires long-term personal care and cannot obtain suitable care in their country of residence. Medical reports alone may not be sufficient without evidence of local care availability, affordability and the sponsor's financial circumstances.",
        "Visa Direct Immigration provides application guidance and support. We support families in Birmingham, Bristol and Reading, as well as remotely across the UK.",
        "Book Your Immigration Consultation to discuss your Adult Dependent Relative Visa application."
      ]
    }
  ]
},
  {
  id: "naturalization",
  slug: "naturalization",
  title: "Naturalization",
  category: "Personal Immigration",
  shortDescription: "Apply for British citizenship by naturalisation to gain full rights as a British citizen.",
  heroTagline: "Achieve British citizenship with flawless naturalisation application support.",
  seoTitle: "British Citizenship by Naturalisation | Application Support",
  seoDescription: "Apply for British citizenship by naturalisation. Expert legal checks on absences, good character, and Home Office requirements.",
  iconName: "CheckCircle2",
  keyFeatures: [
    "Absence calculation and statutory residence verification",
    "Good character requirement assessment and vetting",
    "Life in the UK & English language requirement compliance",
    "Referee eligibility checks and endorsement verification"
  ],
  eligibilityRequirements: [
    "Held Indefinite Leave to Remain or EU Settled Status for at least 12 months (or married to British citizen)",
    "Lived in the UK for at least 5 years (3 years if married to a British citizen)",
    "Absences do not exceed statutory limits (max 450 days in 5 years, 90 in last 12 months)",
    "Passed Life in the UK test and CEFR B1 English test",
    "Satisfy the Good Character requirement"
  ],
  documentsRequired: [
    "Current and previous passports covering the qualifying period",
    "Proof of Indefinite Leave to Remain or Settled Status",
    "Life in the UK test pass notification letter",
    "English language qualification certificate",
    "Two signed referee declarations meeting Home Office criteria"
  ],
  processSteps: [
    {
      title: "Residence & Character Assessment",
      description: "Calculating travel dates and auditing legal character history."
    },
    {
      title: "Online Application & Document Upload",
      description: "Submitting Form AN and attending UKVCAS biometric appointment."
    },
    {
      title: "Citizenship Ceremony & Passport",
      description: "Attending local council ceremony and applying for your first British passport."
    }
  ],
  faqs: [
    {
      question: "How long after getting ILR can I apply for British citizenship?",
      answer: "You must normally wait 12 months after receiving ILR. However, if you are married to a British citizen, you can apply immediately once you have ILR."
    }
  ],
  heroImage: "/images/services/naturalization.webp"
},
{
  id: "fee-waiver-applications",
  slug: "fee-waiver-applications",
  title: "Fee Waiver Applications",
  category: "Personal Immigration",
  shortDescription: "Application guidance for UK immigration fee waivers, helping eligible individuals avoid paying certain immigration fees or the Immigration Health Surcharge.",
  heroTagline: "Understand your eligibility and prepare a complete fee waiver application.",
  seoTitle: "Fee Waiver Application Adviser UK | Visa Direct Immigration",
  seoDescription: "Need help with a UK fee waiver application? Get professional immigration support with eligibility, financial evidence, documents and the application process.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "ShieldCheck",
  keyFeatures: [
    "Eligibility assessment for immigration fee waivers",
    "Financial evidence preparation and review",
    "Support for family, private life and human rights routes",
    "Guidance on IHS waiver and partial waiver applications"
  ],
  eligibilityRequirements: [
    "Applying under an eligible immigration route (family/private life/human rights)",
    "Financial circumstances demonstrate inability to pay immigration charges",
    "Evidence that paying fees would leave you unable to meet essential living needs",
    "Or that paying would negatively affect your dependent child's wellbeing"
  ],
  documentsRequired: [
    "Valid passport or national identity document",
    "Recent bank statements for all relevant accounts",
    "Payslips or evidence of household income",
    "Evidence of benefits or financial support received",
    "Tenancy agreement or rent statements",
    "Utility bills and essential household expense evidence",
    "Letters from local authorities or support organisations"
  ],
  processSteps: [
    {
      title: "Eligibility Check",
      description: "Confirming the intended immigration application is covered and that financial circumstances meet the affordability requirements."
    },
    {
      title: "Financial Evidence Preparation",
      description: "Collecting bank statements, income records, accommodation costs and essential household expense details."
    },
    {
      title: "Fee Waiver Request Submission",
      description: "Completing the Home Office online service and submitting accurate financial information."
    },
    {
      title: "Immigration Application Submission",
      description: "Submitting the visa application within 10 working days of receiving the fee waiver decision."
    }
  ],
  faqs: [
    {
      question: "How long does a fee waiver application take in the UK?",
      answer: "There is no standard Home Office processing time for fee waiver requests. The decision may depend on your financial circumstances, the evidence provided and whether the Home Office needs further information."
    },
    {
      question: "What is the fee waiver application decision time in the UK?",
      answer: "The Home Office does not currently guarantee a fixed decision time. Applications are considered individually, and you should allow for possible delays when planning your immigration application."
    },
    {
      question: "How do I apply for an application fee waiver?",
      answer: "You normally submit an online fee waiver request through the relevant GOV.UK service. You must explain your financial circumstances and provide supporting evidence before submitting the related immigration application."
    },
    {
      question: "Do I have to pay fees for a fee waiver application?",
      answer: "No. There is no separate Home Office charge for submitting an eligible fee waiver request. If approved, the waiver may cover the immigration application fee, the Immigration Health Surcharge or both, depending on your circumstances."
    },
    {
      question: "Can everyone applying for a UK visa request a fee waiver?",
      answer: "No. Fee waivers are available only for specific immigration routes and circumstances. Many work, visitor and other visa categories do not qualify under the standard fee waiver arrangements."
    },
    {
      question: "What happens if my fee waiver application is refused?",
      answer: "If your request is refused, you will normally need to pay the relevant immigration charges if you still want to proceed with your application. You may submit a new fee waiver request with further evidence if your circumstances justify it. A fee waiver refusal does not itself determine the outcome of your immigration case."
    },
    {
      question: "Can I include my children in a fee waiver application?",
      answer: "You may be able to include eligible dependent children in your request where they are applying with you under a qualifying route. Their circumstances and the household's overall financial position will be considered. Separate arrangements apply to certain applications to register a child as a British citizen."
    }
  ],
  contentSections: [
    {
      heading: "Fee Waiver Applications",
      paragraphs: [
        "A UK immigration fee waiver allows eligible applicants to avoid paying certain immigration application fees or the Immigration Health Surcharge (IHS) when they cannot afford these costs. It is intended to help people who would otherwise struggle to access specific immigration routes because of their financial circumstances.",
        "Visa Direct Immigration provides application guidance to individuals who need help understanding fee waiver eligibility, preparing financial evidence and completing the application process. If you are looking for an immigration fee waiver lawyer or consultant, understanding which applications qualify is an important first step."
      ]
    },
    {
      heading: "What is a UK Immigration Fee Waiver?",
      paragraphs: [
        "A fee waiver is permission from the Home Office not to pay an eligible immigration application fee, the Immigration Health Surcharge or both. It is generally available for certain applications based on family life, private life and specific human-rights circumstances.",
        "It is not a general exemption for every UK visa category. You must meet the eligibility requirements and demonstrate that paying the relevant charges would leave you unable to meet essential living needs or adequately support your children.",
        "A fee waiver decision is also separate from the immigration decision itself. Approval does not guarantee that your subsequent visa or settlement application will be successful."
      ]
    },
    {
      heading: "Who Can Apply for a Fee Waiver in the UK?",
      paragraphs: [
        "You may qualify for an immigration fee waiver if you are applying for an eligible type of permission to stay and cannot afford the required charges.",
        "Eligible categories can include:"
      ],
      bullets: [
        "Partners, parents and dependent children applying under qualifying family or private life routes.",
        "People holding certain forms of Discretionary Leave or Leave Outside the Immigration Rules on human-rights grounds.",
        "Certain people who have permission to stay in the UK as victims of modern slavery or human trafficking.",
        "Eligible children applying for British citizenship registration under the separate child citizenship fee waiver arrangements."
      ],
      paragraphsAfterTable: [
        "You may qualify financially if you do not have accommodation and cannot afford somewhere to live, you have accommodation but cannot afford essential expenses such as food, heating or other basic needs, or you have a very low income and paying the immigration charges would negatively affect your child's wellbeing.",
        "The Home Office assesses each application individually. You do not necessarily have to be completely destitute to qualify, but you must provide credible evidence of your financial circumstances."
      ]
    },
    {
      heading: "Documents Required for a Fee Waiver Application",
      paragraphs: [
        "Your evidence should clearly explain your income, savings, accommodation costs and essential household expenses. The Home Office needs enough information to assess whether you can afford the relevant immigration charges.",
        "Documents may include:"
      ],
      bullets: [
        "Valid passport, national identity document or other accepted identity evidence.",
        "Recent bank statements for relevant accounts.",
        "Payslips or other evidence of household income.",
        "Evidence of benefits or financial support received.",
        "Tenancy agreement, rent statements or accommodation details.",
        "Utility bills and other household expenses.",
        "Evidence of childcare, food, travel and essential living costs.",
        "Letters from local authorities, support organisations or family members providing financial assistance.",
        "Information about your partner's or dependants' financial circumstances, where relevant."
      ],
      paragraphsAfterTable: [
        "The exact evidence depends on your situation. Missing financial information or unexplained transactions may make it harder for the Home Office to assess your request."
      ]
    },
    {
      heading: "How to Apply for a Fee Waiver Application UK",
      paragraphs: ["For eligible online applications, you normally need to request and receive a fee waiver decision before submitting the related immigration application."],
      subsections: [
        {
          heading: "Step 1: Check Your Eligibility",
          paragraphs: ["Confirm that your intended immigration application is covered by the fee waiver provisions and that your financial circumstances meet the affordability requirements."]
        },
        {
          heading: "Step 2: Prepare Your Financial Evidence",
          paragraphs: ["Collect bank statements, income records, accommodation costs and details of your essential household expenses."]
        },
        {
          heading: "Step 3: Complete the Fee Waiver Request",
          paragraphs: ["Use the relevant Home Office online service to submit your fee waiver request and provide accurate information about your circumstances."]
        },
        {
          heading: "Step 4: Respond to Further Requests",
          paragraphs: ["The Home Office may ask for additional documents or clarification. Respond carefully and provide the requested evidence within the stated deadline."]
        },
        {
          heading: "Step 5: Receive the Decision",
          paragraphs: ["If approved, you will receive a fee waiver reference or token and instructions for making the related immigration application."]
        },
        {
          heading: "Step 6: Submit Your Immigration Application",
          paragraphs: ["For the in-country family and private life fee waiver process, you generally need to submit your visa application within 10 working days of the fee waiver decision. You must also follow the biometric appointment instructions and deadlines."]
        }
      ]
    },
    {
      heading: "Fee Waiver Application Fees: How Much Does It Cost?",
      paragraphs: [
        "There is no separate Home Office application fee for submitting an eligible fee waiver request. The purpose of the process is to help qualifying applicants avoid paying some or all of the relevant immigration charges.",
        "Depending on your financial circumstances, the Home Office may waive:"
      ],
      bullets: [
        "The full immigration application fee.",
        "The Immigration Health Surcharge only.",
        "Both the application fee and the Immigration Health Surcharge."
      ],
      paragraphsAfterTable: [
        "A partial waiver may be granted where you can afford the application fee but cannot afford the healthcare surcharge. The decision depends on the evidence provided and the relevant rules.",
        "A fee waiver does not automatically cover every expense associated with an immigration matter. You may still need to meet other requirements or pay costs that are not covered by the waiver."
      ]
    },
    {
      heading: "Immigration Fee Waiver Lawyer and Application Support",
      paragraphs: [
        "A fee waiver application requires clear evidence of financial hardship and an understanding of which immigration charges can be waived. Errors in financial information, missing documents or applying under an ineligible route can create difficulties.",
        "If you are searching for a fee waiver application lawyer, immigration solicitor or fee waiver consultant in the UK, check the professional's relevant qualifications and authorisation. Visa Direct Immigration can provide application guidance to help you understand the eligibility requirements, organise financial documents and prepare your request.",
        "We support clients in Birmingham, Bristol, Reading and across the UK through remote consultations.",
        "Book Your Immigration Consultation to discuss your fee waiver application and supporting evidence."
      ]
    }
  ],
  heroImage: "/images/services/fee-waiver-applications.webp"
},
{
  id: "eu-family-permit",
  slug: "eu-family-permit",
  title: "EU Family Permit",
  category: "Personal Immigration",
  shortDescription: "The EU Family Permit, officially known as the EU Settlement Scheme (EUSS) Family Permit, allows eligible family members of certain EU, EEA, Swiss citizens and qualifying people of Northern Ireland to travel to the UK and join or accompany their relatives.",
  heroTagline: "Understand eligibility, prepare relationship evidence and complete your EU Family Permit application.",
  seoTitle: "EU Family Permit Lawyer UK | Visa Direct Immigration",
  seoDescription: "Need an EU Family Permit lawyer in the UK? Get application support with eligibility, family evidence, documents and the application process.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "ShieldCheck",
  keyFeatures: [
    "Entry clearance for eligible family members under the EU Settlement Scheme",
    "Normally valid for 6 months with right to work and study in the UK",
    "No Home Office application fee or Immigration Health Surcharge",
    "Pathway to apply for pre-settled or settled status upon arrival in the UK"
  ],
  eligibilityRequirements: [
    "Eligible relationship with a qualifying EU, EEA, Swiss citizen or person of Northern Ireland",
    "Sponsor lived in the UK by 31 December 2020 and holds required status or eligibility",
    "Relationship generally formed by 31 December 2020 (exceptions for certain children)",
    "Intention to accompany or join the qualifying relative in the UK",
    "Applying from outside the UK with valid identity evidence and biometrics"
  ],
  documentsRequired: [
    "Valid passport or accepted identity document for applicant and family member",
    "Evidence of sponsor's UK residence and EUSS status, where applicable",
    "Marriage or civil partnership certificate",
    "Birth certificates proving parent-child or grandchild relationships",
    "Evidence of dependency for adult children or dependent parents/grandparents",
    "Evidence of a durable relationship or retained rights of residence where applicable",
    "Certified translations of any documents not in English or Welsh"
  ],
  processSteps: [
    {
      title: "Identify Eligibility Category",
      description: "Confirm whether you qualify as a spouse, partner, child, parent, grandparent or qualifying dependent family member."
    },
    {
      title: "Check Family Member's Status",
      description: "Establish that your relative meets the relevant EUSS or Northern Ireland residence and status conditions."
    },
    {
      title: "Collect Supporting Evidence",
      description: "Prepare identity documents, relationship proofs, and financial or dependency evidence."
    },
    {
      title: "Submit Online Application",
      description: "Complete the online GOV.UK EUSS Family Permit application form with accurate family details."
    },
    {
      title: "Complete Biometrics",
      description: "Attend an appointment at a designated visa application centre to provide fingerprints and photographs."
    },
    {
      title: "Receive Decision & Travel",
      description: "Once approved, receive your 6-month permit allowing travel, work, and study in the UK."
    }
  ],
  faqs: [
    {
      question: "Can I apply for an EU Family Permit if I married my EU partner after 31 December 2020?",
      answer: "In most cases, a spouse or civil partner relationship must have existed by 31 December 2020. There are specific exceptions, including certain children born or adopted after that date. A later marriage does not automatically qualify, although an earlier durable relationship may be relevant if the requirements are met."
    },
    {
      question: "Can I apply for an EU Family Permit to join my brother or sister?",
      answer: "A brother or sister does not normally qualify as a direct family member under the standard EUSS Family Permit route. Limited provisions may apply to certain extended family members with historical residence and documentation under the previous EEA rules. The exact circumstances need to be assessed."
    },
    {
      question: "Does my EU family member need settled status before I apply?",
      answer: "Not necessarily. The relevant family member must meet the applicable definition and eligibility conditions under the scheme. Their nationality, UK residence history and immigration status will determine which provisions apply."
    },
    {
      question: "How long is an EU Family Permit valid, and can I travel more than once?",
      answer: "The permit is normally valid for six months from the decision date. You can enter and leave the UK multiple times during this period, provided the permit remains valid."
    },
    {
      question: "What should I do if my EU Family Permit expires before I travel?",
      answer: "The permit cannot simply be extended. You may need to submit a fresh application if you remain eligible. Check your circumstances and the current application requirements before making further travel arrangements."
    },
    {
      question: "Can I work in the UK with an EU Family Permit?",
      answer: "Yes. A valid EUSS Family Permit allows you to work and study in the UK during its validity. You should apply to the EU Settlement Scheme if you qualify and intend to remain in the UK after the permit expires."
    },
    {
      question: "Is the EU Family Permit application free?",
      answer: "Yes. There is no Home Office application fee or Immigration Health Surcharge for the EUSS Family Permit. However, some commercial visa application centres may charge for optional services."
    }
  ],
  contentSections: [
    {
      heading: "EU Family Permit UK",
      paragraphs: [
        "The EU Family Permit, officially known as the EU Settlement Scheme (EUSS) Family Permit, allows eligible family members of certain EU, EEA, Swiss citizens and qualifying people of Northern Ireland to travel to the UK and join or accompany their relatives.",
        "It is designed for family members who qualify under the EU Settlement Scheme rules, including certain relationships established before the end of the Brexit transition period. Visa Direct Immigration provides application guidance to people who need help understanding eligibility, preparing relationship evidence and completing an EU Family Permit application."
      ]
    },
    {
      heading: "What is the EU Family Permit?",
      paragraphs: [
        "The EU Family Permit is an entry clearance document that allows an eligible family member to travel to the UK and join or accompany their qualifying relative. It is normally valid for six months and allows the holder to work, study and travel in and out of the UK while it remains valid.",
        "The permit is part of the EU Settlement Scheme. It is not the same as a standard UK Family Visa or the former EEA Family Permit, which ceased to be valid for travel after 30 June 2021.",
        "After arriving in the UK, eligible permit holders can apply to the EU Settlement Scheme for pre-settled or settled status, subject to the applicable requirements."
      ]
    },
    {
      heading: "EU Family Permit Requirements",
      paragraphs: [
        "The requirements depend on your relationship with the person in the UK and their immigration or citizenship status."
      ],
      subsections: [
        {
          heading: "1. Eligible Family Relationship",
          paragraphs: [
            "You may qualify if you are an eligible:"
          ],
          bullets: [
            "Spouse or civil partner.",
            "Durable partner who meets the relevant relationship requirements.",
            "Child or grandchild under 21.",
            "Dependent child or grandchild aged 21 or over.",
            "Dependent parent or grandparent."
          ]
        },
        {
          heading: "2. Qualifying Family Member in the UK",
          paragraphs: [
            "Your family member will generally need to be an EU, EEA or Swiss citizen who started living in the UK by 31 December 2020 and has the required status or qualifies under the relevant rules.",
            "Certain family members of eligible people of Northern Ireland may also qualify. These cases have specific citizenship, birth and parental conditions."
          ]
        },
        {
          heading: "3. Intention to Join or Accompany Your Family Member",
          paragraphs: [
            "Your qualifying family member must normally be living in the UK or travelling there with you within six months of your application. You must also intend to accompany or join them within the relevant period."
          ]
        },
        {
          heading: "4. Application from Outside the UK",
          paragraphs: [
            "You must normally be outside the UK when applying for an EUSS Family Permit. You will need to provide identity and nationality evidence and complete the required biometric process."
          ]
        }
      ]
    },
    {
      heading: "Who Can Apply for an EU Family Permit?",
      paragraphs: [
        "Eligibility is not limited to EU citizens' spouses. Certain children, grandchildren, parents and grandparents may also qualify if they meet the relationship and dependency requirements.",
        "Some applicants may qualify through retained rights of residence, for example where their relationship ended or their family member died or left the UK, provided the relevant conditions are met.",
        "There are also specific provisions for eligible family members of people of Northern Ireland. Because these cases have different requirements, it is important to identify the correct eligibility category before submitting an application."
      ]
    },
    {
      heading: "Documents Required for an EU Family Permit Application",
      paragraphs: [
        "Your documents should establish your identity, your relationship with the qualifying family member and their eligibility under the scheme.",
        "Depending on your circumstances, you may need:"
      ],
      bullets: [
        "A valid passport or accepted identity document.",
        "Your family member's passport or identity document.",
        "Evidence of their UK residence and EUSS status, where applicable.",
        "Marriage or civil partnership certificate.",
        "Birth certificates proving family relationships.",
        "Evidence of dependency for adult children or dependent parents and grandparents.",
        "Evidence of a durable relationship, where relevant.",
        "Evidence supporting a retained right of residence, if applicable.",
        "Certified translations of documents not written in English or Welsh."
      ],
      paragraphsAfterTable: [
        "The Home Office may request further evidence if the documents do not clearly establish the relationship or the sponsor's eligibility."
      ]
    },
    {
      heading: "How to Apply for an EU Family Permit",
      paragraphs: [
        "The application must be submitted from outside the UK through the relevant online GOV.UK service."
      ],
      bullets: [
        "Identify your eligibility category: Confirm whether you qualify as a spouse, partner, child, parent, grandparent or another eligible family member.",
        "Check your family member's status: Establish that your relative meets the relevant EUSS or Northern Ireland eligibility conditions.",
        "Collect supporting evidence: Prepare identity documents, relationship records and evidence of dependency where required.",
        "Complete the online application: Provide accurate information about yourself and your qualifying family member.",
        "Complete biometric requirements: Follow the instructions to provide your photograph and fingerprints at the designated visa application centre, where required.",
        "Wait for the decision: The Home Office will assess your application and notify you of the outcome."
      ],
      paragraphsAfterTable: [
        "If approved, the permit will normally be valid for six months from the decision date."
      ]
    },
    {
      heading: "EU Family Permit Fees and Processing Time",
      paragraphs: [
        "One advantage of the EU Settlement Scheme Family Permit is that there is no Home Office application fee, and applicants do not pay the Immigration Health Surcharge.",
        "However, a commercial visa application centre may charge for certain optional services, such as document scanning or additional appointment facilities.",
        "There is no guaranteed standard processing time published specifically for every EU Family Permit application. The time taken can depend on the complexity of your family relationship, the evidence supplied and whether further checks are necessary.",
        "You should avoid making non-refundable travel arrangements until your permit has been granted."
      ]
    },
    {
      heading: "EU Family Permit Lawyer and Application Support",
      paragraphs: [
        "An EU Family Permit application can involve complex questions about family relationships, dependency, residence dates and qualifying sponsor status. The correct evidence is particularly important where a relationship began after Brexit or where an applicant relies on a retained right of residence.",
        "If you are searching for an EU Family Permit lawyer, immigration solicitor or EU family immigration adviser, check the professional's relevant qualifications, authorisation and experience with the EUSS.",
        "Visa Direct Immigration can provide application guidance to help you understand the eligibility rules, organise supporting documents and prepare your application information. We support clients in Birmingham, Bristol, Reading and across the UK through remote consultations.",
        "Book Your Immigration Consultation to discuss your EU Family Permit application."
      ]
    }
  ],
  heroImage: "/images/services/eu-family-permit.webp"
},
{
  id: "sponsor-licence-audit",
  slug: "sponsor-licence-audit",
  title: "Sponsor Licence Audit",
  category: "Business Immigration",
  shortDescription: "A Sponsor Licence Audit helps UK employers check whether their sponsorship systems, records and procedures meet Home Office requirements, sponsor duties and compliance checks.",
  heroTagline: "Prepare for Home Office compliance visits, audit sponsorship records and protect your licence.",
  seoTitle: "Sponsor Licence Audit Support UK | Visa Direct Immigration",
  seoDescription: "Need a UK Sponsor Licence Audit? Get professional compliance support with Home Office checks, sponsor duties, records and reporting requirements.",
  primaryCta: "Book Your Immigration Consultation",
  iconName: "ShieldCheck",
  keyFeatures: [
    "Review of HR systems, reporting procedures and Appendix D records",
    "Assessment of Certificate of Sponsorship (CoS) allocations and salary compliance",
    "Authorising Officer, Key Contact and Level 1 User readiness checks",
    "Preparation for unannounced and announced Home Office compliance visits"
  ],
  eligibilityRequirements: [
    "UK organisation holding or applying for a Worker or Temporary Worker sponsor licence",
    "Requirement to satisfy ongoing Home Office reporting, record-keeping and compliance duties",
    "Maintenance of compliant HR monitoring systems for all sponsored personnel",
    "Accurate SMS records and up-to-date reporting of organisational and worker changes"
  ],
  documentsRequired: [
    "Right to work check documentation and Appendix D compliant records",
    "Passports, biometric residence permits and digital status verification for sponsored workers",
    "Employment contracts, job descriptions and Certificate of Sponsorship copies",
    "Payroll records, payslips and HMRC PAYE submission reports",
    "Absence monitoring sheets, holiday logs and sickness absence records",
    "Up-to-date employee contact and residential address details"
  ],
  processSteps: [
    {
      title: "Review Sponsorship Records",
      description: "Check that the records for every sponsored worker are complete, accurate and accessible under Appendix D."
    },
    {
      title: "Check Reporting History",
      description: "Review SMS reporting history to verify changes were submitted within the mandatory 10 or 20 working day limits."
    },
    {
      title: "Assess HR Procedures",
      description: "Evaluate systems for tracking attendance, absences, job title or salary changes, and residential addresses."
    },
    {
      title: "Prepare Responsible Staff",
      description: "Ensure Authorising Officers, Level 1 Users and HR teams understand their sponsorship compliance obligations."
    },
    {
      title: "Check Workplace Arrangements",
      description: "Confirm trading premises, working conditions and third-party site arrangements match official sponsor records."
    },
    {
      title: "Address Identified Problems",
      description: "Remediate documentation gaps, correct reporting errors and implement action plans before Home Office visits."
    }
  ],
  faqs: [
    {
      question: "Can the Home Office carry out a sponsor licence audit without notice?",
      answer: "Yes. The Home Office can conduct announced or unannounced compliance visits. It may also carry out digital checks, request documents or contact an organisation by telephone or letter."
    },
    {
      question: "How often does UKVI inspect sponsor licence holders?",
      answer: "There is no fixed inspection schedule that applies to every sponsor. The Home Office can carry out compliance checks at any time, including before deciding a sponsor licence application and after a licence has been granted."
    },
    {
      question: "Can a business fail a sponsor licence audit because of missing employee records?",
      answer: "Missing records can indicate a failure to meet sponsor record-keeping duties. The consequences depend on the documents involved, the reason they are missing and the wider compliance circumstances. Employers should check Appendix D and address any gaps promptly."
    },
    {
      question: "What is the difference between an A-rating and a B-rating?",
      answer: "An A-rating indicates that a sponsor is approved to hold the relevant licence without an outstanding action plan. A B-rating means the Home Office has identified issues that require improvement under a time-limited action plan. A B-rated sponsor is generally restricted from assigning CoS to new workers until its A-rating is restored."
    },
    {
      question: "Can I continue sponsoring workers if my licence is suspended?",
      answer: "A suspended sponsor cannot assign new Certificates of Sponsorship. Workers who already have valid permission are not automatically affected by the suspension, but their position may change if the licence is later revoked."
    },
    {
      question: "Can I arrange a sponsor licence audit before a Home Office visit?",
      answer: "Yes. Employers can arrange an internal or professional compliance review at any time. This is not an official Home Office audit, but it can help identify missing records, reporting errors and weaknesses in HR procedures before an inspection takes place."
    },
    {
      question: "Can I get help if my sponsor licence has been downgraded?",
      answer: "You can seek support to understand the reasons for the B-rating, review the Home Office action plan and identify the improvements required. You must follow the deadlines and instructions in the official correspondence, including any payment requirements."
    }
  ],
  contentSections: [
    {
      heading: "Sponsor Licence Audit",
      paragraphs: [
        "A Sponsor Licence Audit helps UK employers check whether their sponsorship systems, records and procedures meet Home Office requirements. If your organisation holds a Worker or Temporary Worker sponsor licence, you must follow ongoing reporting, record-keeping and compliance duties, not just the requirements you met when applying for the licence.",
        "The Home Office can carry out compliance checks at any time. These may involve reviewing documents, interviewing staff, checking sponsored workers' employment details or visiting your business premises. Preparing in advance can help you identify weaknesses and address potential issues before they become more serious.",
        "Visa Direct Immigration provides support to employers who want to review their sponsor licence arrangements, understand their responsibilities and prepare for a potential Home Office compliance visit. Whether you need a routine sponsor licence compliance review or assistance after receiving a Home Office notification, we can help you understand the requirements and organise the relevant evidence."
      ]
    },
    {
      heading: "What is a Sponsor Licence Audit?",
      paragraphs: [
        "A Sponsor Licence Audit is a review of an organisation's sponsorship records, HR procedures and compliance systems to assess whether it is meeting its responsibilities as a licensed sponsor.",
        "The term can refer to an internal or professional compliance review carried out by an employer, or to a formal compliance check conducted by UK Visas and Immigration (UKVI). A private audit is not an official Home Office inspection, but it can help identify areas that may need attention.",
        "During an official check, the Home Office may request additional information, verify documents, conduct an on-site visit, arrange a digital interview or make enquiries with other government departments. Checks may be announced or unannounced."
      ]
    },
    {
      heading: "What Does the Home Office Check During a Sponsor Licence Audit?",
      paragraphs: [
        "A Home Office compliance check assesses whether your organisation is genuine, eligible to hold a sponsor licence and meeting its sponsorship duties. The exact checks will depend on your business and circumstances."
      ],
      subsections: [
        {
          heading: "1. Sponsor Licence and Business Information",
          paragraphs: [
            "The Home Office may verify the information provided when your organisation applied for its sponsor licence. This can include checking whether your business is genuinely trading or operating in the UK, whether its business activities are consistent with the information supplied and whether it continues to meet the relevant licence requirements."
          ]
        },
        {
          heading: "2. Sponsored Worker Records",
          paragraphs: [
            "Employers must maintain the records required under Appendix D of the sponsor guidance. These can include:"
          ],
          bullets: [
            "Copies of relevant passport and immigration documents.",
            "Evidence of right to work checks.",
            "Employment contracts and job descriptions.",
            "Salary and payment records.",
            "Contact details and residential address information.",
            "Records of attendance and absences.",
            "Evidence of recruitment and qualifications where required."
          ]
        },
        {
          heading: "3. Salary and Employment Conditions",
          paragraphs: [
            "The Home Office may compare a sponsored worker's actual employment arrangements with the details recorded on their Certificate of Sponsorship (CoS). Checks may include:",
            "Whether the worker performs the sponsored role, whether the salary meets the relevant immigration requirements, whether salary payments match payroll records, whether working hours and employment arrangements are consistent with the sponsored position, and whether significant changes have been reported correctly.",
            "Differences between the CoS and actual working arrangements may require investigation or reporting."
          ]
        },
        {
          heading: "4. HR Systems and Reporting Procedures",
          paragraphs: [
            "Your organisation must have suitable systems for monitoring sponsored workers and identifying events that need to be reported.",
            "A compliance review may examine whether your HR team can track: changes to job titles, duties and work locations; salary reductions and changes to working arrangements; unauthorised absences; workers who do not start their sponsored roles; changes to employee contact details; and employees who leave the organisation.",
            "For example, certain changes to a sponsored worker's circumstances must generally be reported within 10 working days. Relevant organisational changes generally have a 20-working-day reporting deadline, subject to the specific guidance."
          ]
        },
        {
          heading: "5. Key Personnel and Sponsorship Management System",
          paragraphs: [
            "The Home Office may check whether your organisation has appropriate people managing its sponsorship responsibilities. This includes reviewing the roles and responsibilities of your Authorising Officer, Key Contact and Level 1 Users.",
            "Your business should have clear internal arrangements for accessing the SMS, assigning Certificates of Sponsorship and reporting changes. Staff responsible for sponsorship should understand the limits of their authority and the importance of keeping information accurate."
          ]
        }
      ]
    },
    {
      heading: "How to Prepare for a Home Office Sponsor Licence Compliance Visit",
      paragraphs: [
        "Preparation should be an ongoing process rather than something your business starts only after receiving an inspection notification. The following steps can help employers assess their readiness."
      ],
      subsections: [
        {
          heading: "1. Review Your Sponsorship Records",
          paragraphs: [
            "Check that the records for every sponsored worker are complete, accurate and accessible. Compare employment contracts, payroll information, job descriptions and CoS details to identify inconsistencies."
          ]
        },
        {
          heading: "2. Check Your Reporting History",
          paragraphs: [
            "Review your SMS account and confirm that reportable changes have been submitted within the relevant deadlines. Check whether any outstanding changes or reporting errors need attention."
          ]
        },
        {
          heading: "3. Assess Your HR Procedures",
          paragraphs: [
            "Make sure your HR team has a clear process for monitoring sponsored employees, recording absences, updating contact details and reporting changes in employment. Responsibilities should be clearly assigned so important information is not missed."
          ]
        },
        {
          heading: "4. Prepare Responsible Staff",
          paragraphs: [
            "Your Authorising Officer, Level 1 Users and relevant HR staff should understand their sponsorship duties. Sponsored workers should also have a clear understanding of their actual job responsibilities and employment arrangements."
          ]
        },
        {
          heading: "5. Check Your Workplace Arrangements",
          paragraphs: [
            "Make sure your business premises and working arrangements reflect the information provided to the Home Office. If sponsored workers perform their duties at a third-party location, ensure the relevant organisation understands its responsibilities and can cooperate with a compliance visit."
          ]
        },
        {
          heading: "6. Address Identified Problems",
          paragraphs: [
            "Do not ignore missing documents, reporting errors or differences between the sponsored role and actual employment arrangements. Identify the cause, establish what corrective action is required and keep a record of the steps taken."
          ]
        }
      ]
    },
    {
      heading: "Common Sponsor Licence Compliance Problems",
      paragraphs: [
        "Employers can face difficulties when sponsorship responsibilities are not properly managed. Common issues include:"
      ],
      table: {
        headers: ["Compliance problem", "Why it matters"],
        rows: [
          ["Missing employee records", "The employer may be unable to demonstrate that record-keeping duties have been met."],
          ["Late or missed SMS reports", "Relevant changes may not have been reported within the required time limits."],
          ["Incorrect salary information", "Actual pay may not match the sponsored role or applicable salary requirements."],
          ["Changes to job duties", "Changes may require reporting or a new immigration application, depending on the circumstances."],
          ["Poor absence monitoring", "Employers may fail to report unauthorised absences or other relevant events."],
          ["Inadequate HR procedures", "The organisation may be unable to identify and manage compliance issues consistently."],
          ["Incorrect right to work checks", "The employer may face civil penalties and serious sponsor licence consequences."]
        ]
      },
      paragraphsAfterTable: [
        "Identifying these problems early can give employers an opportunity to correct weaknesses and improve their sponsorship systems."
      ]
    },
    {
      heading: "What Happens If the Home Office Finds Sponsor Licence Breaches?",
      paragraphs: [
        "The consequences depend on the nature, seriousness and circumstances of the non-compliance. The Home Office may decide that corrective action is sufficient, or it may take more serious enforcement measures.",
        "Possible outcomes include:"
      ],
      bullets: [
        "B-rating: Your licence may be downgraded if the Home Office identifies relatively minor problems that can be corrected through an action plan.",
        "Sponsorship action plan: You may be required to pay a fee and complete specified improvements within the set period. A B-rated sponsor cannot normally assign Certificates of Sponsorship to new workers until its A-rating is restored.",
        "Licence suspension: The Home Office may suspend your licence while it investigates suspected breaches. You cannot assign new CoS during suspension.",
        "Licence revocation: Serious or systematic breaches may result in your sponsor licence being revoked.",
        "Consequences for sponsored workers: If your licence is revoked, the Home Office may cancel or shorten the immigration permission of workers you sponsor."
      ],
      paragraphsAfterTable: [
        "A sponsor licence revocation can also prevent your organisation from applying for another licence during the applicable cooling-off period. In many cases, this is at least 12 months, although longer periods can apply.",
        "The Home Office considers the individual circumstances before deciding what action to take. An audit finding does not automatically mean that a licence will be revoked."
      ]
    },
    {
      heading: "Sponsor Licence Audit Support from Visa Direct Immigration",
      paragraphs: [
        "Preparing for a Sponsor Licence Audit requires an understanding of the immigration rules, sponsor guidance and the practical responsibilities placed on employers. Visa Direct Immigration provides application and compliance support to businesses that want to review their sponsorship arrangements and understand their obligations.",
        "Our support can include:"
      ],
      bullets: [
        "Sponsor Licence Compliance Review: Reviewing your existing sponsorship procedures and identifying areas that may require improvement.",
        "HR and Record-Keeping Review: Checking whether relevant employee records and supporting documents are organised and accessible.",
        "SMS Reporting Guidance: Helping you understand reporting responsibilities and the relevant deadlines.",
        "Home Office Visit Preparation: Helping you organise records and prepare for questions about your business and sponsored workers.",
        "Compliance Issue Support: Helping you understand potential problems and the steps that may be needed to address them.",
        "Ongoing Sponsor Licence Guidance: Providing support as your organisation manages its continuing sponsorship responsibilities."
      ],
      paragraphsAfterTable: [
        "If you are searching for a Sponsor Licence Audit lawyer, immigration solicitor or sponsor licence compliance consultant, it is important to check the provider's relevant authorisation and professional credentials. Visa Direct Immigration can discuss the application and compliance support available for your organisation."
      ]
    }
  ],
  heroImage: "/images/services/sponsor-licence-audit.webp"
}
];


const removedServiceIds = new Set([
  "business-development-visa",
  "hiring-foreign-workers",
  "entrepreneur-visa-tier-1",
  "international-agreement-visa",
  "secondment-worker-visa",
  "investor-visa",
  "parents-visa",
]);

export const servicesData = allServicesData.filter(
  (service) => !removedServiceIds.has(service.id),
);
