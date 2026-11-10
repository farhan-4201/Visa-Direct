export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Business Visas" | "Personal Visas" | "Specialty Visas";
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

export const servicesData: ServiceItem[] = [
  {
    id: "parent-visa",
    slug: "parent-visa",
    title: "Parent Visa",
    category: "Personal Visas",
    shortDescription:
      "Get help with your UK Parent Visa application, eligibility, parental responsibility and Home Office requirements.",
    heroTagline: "Understand the UK Parent Visa route and prepare your family immigration application.",
    seoTitle: "Apply for a UK Parent Visa | Visa Direct Immigration",
    seoDescription:
      "Get help with your UK Parent Visa application. Understand eligibility, parental responsibility, & Home Office requirements with Visa Direct Immigration.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/service-personal.webp",
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
    category: "Business Visas",
    shortDescription: "Secure authorization to employ qualified foreign professionals in your UK organization.",
    heroTagline: "Empower your business to recruit international talent lawfully with full Home Office compliance.",
    seoTitle: "Apply for Sponsor Licence UK | Business Immigration Help",
    seoDescription:
      "Looking to apply for a UK sponsor licence? Get expert guidance with eligibility, documents and Home Office applications for your business.",
    primaryCta: "Get Help with Your Sponsor Licence Application",
    heroImage: "/images/service-business.webp",
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
    category: "Business Visas",
    shortDescription: "Pursue legal employment in eligible occupations with an authorized UK employer.",
    heroTagline: "Fast-track your professional UK career with end-to-end sponsorship and application support.",
    seoTitle: "Skilled Worker Visa Solicitors UK | Visa Direct Immigration",
    seoDescription:
      "Need help with a UK Skilled Worker visa? Get guidance on eligibility, applications, fees and extensions from Visa Direct Immigration.",
    primaryCta: "Discuss Your Skilled Worker Visa",
    secondaryCta: "Contact Our Team",
    heroImage: "/images/skilled-worker-visa-hero.webp",
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
    category: "Personal Visas",
    shortDescription:
      "Join your British or settled partner in the UK with guidance on relationship, financial and immigration requirements.",
    heroTagline: "Understand your UK Partner Visa options and prepare your application with confidence.",
    seoTitle: "Partner Visa UK: Requirements, Fees & How to Apply",
    seoDescription:
      "Need a UK Partner Visa? Explore eligibility, financial requirements, application fees and processing times. Get guidance from Visa Direct Immigration.",
    primaryCta: "Check Your Partner Visa Eligibility",
    heroImage: "/images/service-personal.webp",
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
    category: "Personal Visas",
    shortDescription:
      "Join your civil partner in the UK with guidance on relationship, financial, English language and accommodation requirements.",
    heroTagline: "Prepare your Civil Partnership Visa application with clear, practical guidance.",
    seoTitle: "Civil Partnership Visa Specialists UK | Apply with Guidance",
    seoDescription:
      "Applying for Civil Partnership Visa UK? Check eligibility, financial requirements, application costs & documents. Get guidance from Visa Direct Immigration.",
    primaryCta: "Check Your Civil Partnership Visa Eligibility",
    heroImage: "/images/service-personal.webp",
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
  id: "visitor-visa",
  slug: "visitor-visa",
  title: "Visitor Visa",
  category: "Personal Visas",
  shortDescription:
    "Visit the UK for tourism, family gatherings or permitted short-term activities with application guidance.",
  heroTagline: "Prepare your UK Visitor Visa application with clear guidance on eligibility and evidence.",
  seoTitle: "UK Visitor Visa Application Support | Visa Direct",
  seoDescription:
    "Applying for a UK Visitor Visa? Get guidance with eligibility, documents, financial evidence, application fees and visa refusal concerns.",
  primaryCta: "Book Your Immigration Consultation",
  heroImage: "/images/service-personal.webp",
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
    category: "Business Visas",
    shortDescription: "Attend commercial meetings, international conferences, and corporate events in the UK.",
    heroTagline: "Facilitating seamless corporate travel and short-term commercial engagements in Great Britain.",
    seoTitle: "Business Visitor Visa UK | Application & Requirements",
    seoDescription:
      "Applying for a UK Business Visitor Visa? Get guidance on eligibility, requirements, documents, fees and processing times from Visa Direct Immigration.",
    primaryCta: "Get Business Visitor Visa Guidance",
    heroImage: "/images/service-business.webp",
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
    category: "Personal Visas",
    shortDescription:
      "Get help with your UK Student Visa application, eligibility, documents, fees, extensions and Home Office requirements.",
    heroTagline: "Prepare your UK Student Visa application with clear guidance from CAS to decision.",
    seoTitle: "Student Visa UK Application Help | Visa Direct Immigration",
    seoDescription:
      "Get help with your UK Student Visa application. Our team provides guidance on eligibility, documents, fees, extensions and Home Office requirements.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/service-personal.webp",
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
    category: "Business Visas",
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
    title: "UK Settlement Visa",
    category: "Personal Visas",
    shortDescription: "Join eligible family members in the UK with guidance on settlement visa applications and requirements.",
    heroTagline: "Understand your UK Settlement Visa options and prepare your family application with confidence.",
    seoTitle: "UK Settlement Visa Application Support | Visa Direct",
    seoDescription:
      "Need a UK Settlement Visa? Get guidance on spouse and family visa requirements, documents, application fees and processing times.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/service-personal.webp",
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
    title: "Graduate Visa",
    category: "Business Visas",
    shortDescription:
      "Get expert application support with Graduate Visa UK eligibility, documents, fees and Home Office requirements.",
    heroTagline: "Move from UK study to professional experience with clear Graduate Visa guidance.",
    seoTitle: "Graduate Visa UK Experts | Application Support",
    seoDescription:
      "Need help applying for a Graduate Visa UK? Get expert application support with eligibility, documents, fees and Home Office requirements.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/service-personal.webp",
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
    category: "Personal Visas",
    shortDescription: "Permanent UK settlement allowing you to live, work, and study without immigration time limits.",
    heroTagline: "Your final milestone toward permanent UK residency and British citizenship.",
    seoTitle: "Indefinite Leave to Remain UK | ILR Application Help",
    seoDescription:
      "Applying for indefinite leave to remain in UK? Understand ILR requirements, documents, fees & processing times. Get application support.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/service-personal.webp",
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
    title: "Family Visa",
    category: "Personal Visas",
    shortDescription: "Join eligible family members in the UK with guidance on applications and immigration requirements.",
    heroTagline: "Understand your UK Family Visa options and prepare your application with confidence.",
    seoTitle: "UK Family Visa Lawyers | Applications & Immigration Advice",
    seoDescription:
      "Need a UK Family Visa? Get guidance on spouse, partner, child and parent visa applications, eligibility, documents and Home Office requirements.",
    primaryCta: "Get Help with Your UK Family Visa Application",
    heroImage: "/images/service-personal.webp",
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
      title: "Sole Representative Visa",
      category: "Business Visas",
      shortDescription: "Establish a UK branch of an overseas company as a senior employee.",
      heroTagline: "Expand your international business presence to the UK with the Sole Representative Visa.",
      iconName: "Building",
      keyFeatures: [
        "Setting up a UK branch office for your overseas company",
        "Proving you are a senior employee or specialist service provider",
        "Meeting the financial requirement of £50,000+ personal savings",
        "No requirement for UK-based employer sponsorship"
      ],
      eligibilityRequirements: [
        "Working for an overseas company with a UK branch",
        "Holding a senior position or specialist skills",
        "Having £50,000+ in personal savings",
        "Intending to live in the UK and establish the branch"
      ],
      documentsRequired: [
        "Company registration documents and Articles of Association",
        "Bank statements showing £50,000+ personal savings",
        "Letter from employer confirming senior role and UK branch plans",
        "Proof of English language proficiency",
        "Valid passport and immigration history"
      ],
      processSteps: [
        {
          title: "Eligibility Assessment & Document Review",
          description: "Assessing your senior role, company status, and financial readiness for the Sole Representative Visa."
        },
        {
          title: "Application Preparation & Submission",
          description: "Compiling sponsorship documents, personal evidence, and submitting the online application to UKVI."
        },
        {
          title: "Biometrics & Decision",
          description: "Attending biometric appointment and receiving visa decision for UK entry."
        }
      ],
      faqs: [
        {
          question: "Can I bring my family with me on a Sole Representative Visa?",
          answer: "Yes, you can bring your dependant partner and children under 18 as part of your application."
        },
        {
          question: "Do I need a job offer from a UK company?",
          answer: "No, the Sole Representative Visa does not require UK employer sponsorship - you establish the branch yourself."
        }
      ]
    },
  {
    id: "youth-mobility-visa",
    slug: "youth-mobility-visa",
    title: "Youth Mobility Visa UK",
    category: "Business Visas",
    shortDescription:
      "Apply for a Youth Mobility Visa UK with guidance on eligibility, documents, fees, processing times & extensions. Get support from Visa Direct Immigration.",
    heroTagline: "Live, work, and explore the UK for up to two years with complete Youth Mobility Scheme guidance.",
    seoTitle: "Youth Mobility Visa UK | Application Support",
    seoDescription:
      "Apply for a Youth Mobility Visa UK with guidance on eligibility, documents, fees, processing times &  extensions. Get support from Visa Direct Immigration.",
    primaryCta: "Book Your Immigration Consultation",
    heroImage: "/images/youth-mobility-visa.webp",
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
  title: "Long-Term Work Visa",
  category: "Business Visas",
  shortDescription: "Expert legal guidance on UK long-term work visas, sponsor licence criteria, and permanent settlement options.",
  heroTagline: "Secure long-term UK employment permission with expert sponsorship guidance.",
  seoTitle: "Long-Term Work Visa UK | Application Support | Visa Direct",
  seoDescription: "Guidance on UK long-term work visa routes, Certificate of Sponsorship compliance, and 5-year Indefinite Leave to Remain settlement pathways.",
  iconName: "Briefcase",
  keyFeatures: [
    "Sponsor compliance & Certificate of Sponsorship verification",
    "Salary threshold & SOC code matching assessment",
    "5-year settlement and ILR strategic planning",
    "Dependant partner and child visa support"
  ],
  eligibilityRequirements: [
    "Valid job offer from an approved UK licensed sponsor",
    "Assigned Certificate of Sponsorship (CoS)",
    "Role meets applicable skill level and salary thresholds",
    "Demonstrated English language proficiency at B1 level or higher"
  ],
  documentsRequired: [
    "Valid passport or national identity document",
    "Certificate of Sponsorship reference number",
    "Certified proof of English language proficiency",
    "Bank statements demonstrating financial maintenance"
  ],
  processSteps: [
    {
      title: "Eligibility & Role Assessment",
      description: "Assessing job specification, SOC code, and employer licence compliance against UKVI thresholds."
    },
    {
      title: "CoS Verification & Evidence Assembly",
      description: "Reviewing Certificate of Sponsorship details and compiling supporting financial and professional proof."
    },
    {
      title: "Application Submission & Biometrics",
      description: "Submitting the online application to UKVI and arranging biometric verification."
    }
  ],
  faqs: [
    {
      question: "What is a UK Long-Term Work Visa?",
      answer: "A long-term work visa allows foreign nationals with a licensed UK employer job offer to live and work in the UK for up to 5 years, leading to Indefinite Leave to Remain."
    },
    {
      question: "Can I bring my family members on this visa?",
      answer: "Yes, your spouse/civil partner and dependent children under 18 can apply to accompany or join you in the UK."
    }
  ]
},
  {
  id: "scale-up-visa",
  slug: "scale-up-visa",
  title: "Scale-Up Visa",
  category: "Business Visas",
  shortDescription: "Work in the UK for a fast-growing scale-up business with initial sponsorship and unsponsored flexibility after 6 months.",
  heroTagline: "Join high-growth UK companies with independent career flexibility.",
  seoTitle: "UK Scale-Up Visa | Application Support | Visa Direct",
  seoDescription: "Apply for the UK Scale-Up Visa to work for qualifying high-growth UK businesses with independent work flexibility after 6 months.",
  iconName: "TrendingUp",
  keyFeatures: [
    "Scale-up sponsor verification and CoS review",
    "High-growth criteria and salary threshold compliance",
    "Unsponsored renewal and job flexibility after 6 months",
    "5-year direct pathway to Indefinite Leave to Remain"
  ],
  eligibilityRequirements: [
    "Job offer from an authorized UK Scale-Up sponsor",
    "Valid Certificate of Sponsorship for at least 6 months",
    "Job role at skill level RQF 6 (graduate level) or higher",
    "Salary meeting the minimum Scale-Up threshold"
  ],
  documentsRequired: [
    "Valid passport or travel document",
    "CoS reference number from licensed scale-up employer",
    "English language proficiency certificate (CEFR B1)",
    "Proof of personal savings (£1,276) unless sponsor certifies maintenance"
  ],
  processSteps: [
    {
      title: "Sponsor Growth Verification",
      description: "Confirming employer meets the 20% annual turnover or employment growth criteria over 3 years."
    },
    {
      title: "CoS Allocation & Filing",
      description: "Reviewing defined CoS and filing the visa application with UKVI."
    },
    {
      title: "Transition to Unsponsored Status",
      description: "Guiding you through unsponsored extension after completing your initial 6 months."
    }
  ],
  faqs: [
    {
      question: "Can I change employers on a Scale-Up Visa?",
      answer: "Yes. After completing 6 months with your sponsoring employer, you can switch jobs, take additional roles, or become self-employed without requiring new sponsorship."
    },
    {
      question: "Does the Scale-Up Visa lead to permanent settlement?",
      answer: "Yes, you can qualify for Indefinite Leave to Remain after 5 continuous years in the UK on this route."
    }
  ]
},
  {
  id: "uk-expansion-worker-visa",
  slug: "uk-expansion-worker-visa",
  title: "UK Expansion Worker Visa",
  category: "Business Visas",
  shortDescription: "Global Business Mobility route enabling senior managers or specialist employees to establish a UK commercial presence.",
  heroTagline: "Establish your overseas business in the UK commercial marketplace.",
  seoTitle: "UK Expansion Worker Visa | Global Business Mobility Support",
  seoDescription: "Expand your overseas business to the UK. Get expert guidance on the Global Business Mobility Expansion Worker visa and UK footprint setup.",
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
      question: "How long can I stay on a UK Expansion Worker Visa?",
      answer: "You can stay for up to 12 months initially, extendable to a maximum total stay of 2 years."
    },
    {
      question: "Does this route lead to settlement directly?",
      answer: "No, but once the UK entity starts trading, workers can switch into the Skilled Worker route to pursue 5-year settlement."
    }
  ]
},
  {
  id: "startup-visa",
  slug: "startup-visa",
  title: "Startup Visa",
  category: "Business Visas",
  shortDescription: "Immigration route for early-stage entrepreneurs with an innovative, endorsed UK business idea.",
  heroTagline: "Turn your innovative business concept into a thriving UK company.",
  seoTitle: "UK Startup Visa Support | Entrepreneur Immigration | Visa Direct",
  seoDescription: "Guidance for early-stage startup founders and entrepreneurs seeking endorsement, visa application, and progression into Innovator Founder.",
  iconName: "Rocket",
  keyFeatures: [
    "Endorsing body selection and criteria matching",
    "Business plan review against innovation, viability, and scalability",
    "No minimum investment capital requirement",
    "Seamless switching pathways into the Innovator Founder route"
  ],
  eligibilityRequirements: [
    "At least 18 years old",
    "Secured endorsement letter from an authorized UK endorsing body",
    "Business idea is new, innovative, viable, and has potential for growth",
    "English language proficiency at level B2"
  ],
  documentsRequired: [
    "Official endorsement letter from approved body",
    "Comprehensive business plan and financial projections",
    "Valid passport",
    "Maintenance savings evidence"
  ],
  processSteps: [
    {
      title: "Business Plan Refinement & Pitch",
      description: "Structuring your business model and securing official endorsing body support."
    },
    {
      title: "Visa Application Filing",
      description: "Submitting application online with endorsement proof and biometrics."
    },
    {
      title: "Business Development & Transition",
      description: "Executing business milestones in the UK and preparing for Innovator Founder switching."
    }
  ],
  faqs: [
    {
      question: "Can I take supplementary employment on a Startup Visa?",
      answer: "Yes, you can work for other employers in addition to developing your startup business."
    }
  ]
},
  {
  id: "secondment-worker-visa",
  slug: "secondment-worker-visa",
  title: "Secondment Worker Visa",
  category: "Business Visas",
  shortDescription: "Global Business Mobility route for overseas workers seconded to the UK as part of a high-value contract.",
  heroTagline: "Deliver high-value commercial contracts through temporary UK staff secondment.",
  seoTitle: "Secondment Worker Visa UK | Global Business Mobility Support",
  seoDescription: "Transfer staff to the UK for high-value contract execution under the Global Business Mobility Secondment Worker route.",
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
  title: "Creative Worker Visa",
  category: "Business Visas",
  shortDescription: "Temporary Worker visa for artists, actors, dancers, musicians, and crew working in the UK creative sector.",
  heroTagline: "Perform, produce, and work across the UK creative industries.",
  seoTitle: "Creative Worker Visa UK | Temporary Work Immigration Support",
  seoDescription: "Guidance for creative professionals, artists, musicians, and production crew applying for the UK Temporary Work Creative Worker visa.",
  iconName: "Sparkles",
  keyFeatures: [
    "Creative sector code of practice compliance check",
    "Certificate of Sponsorship verification",
    "Stay up to 12 months with extension options up to 24 months",
    "Multiple engagements and touring group representation"
  ],
  eligibilityRequirements: [
    "Assigned CoS by a licensed UK creative sponsor",
    "Role meets Creative Worker Code of Practice criteria or market testing",
    "Agreed remuneration meeting National Minimum Wage or equity/industry standard",
    "Personal savings of at least £1,276 unless certified by sponsor"
  ],
  documentsRequired: [
    "Valid passport",
    "CoS reference number",
    "Schedule of UK engagements, rehearsals, or performances",
    "Bank statements showing maintenance funds"
  ],
  processSteps: [
    {
      title: "Sponsorship & Engagement Schedule",
      description: "Reviewing production contracts and ensuring sector code compliance."
    },
    {
      title: "CoS Issuance & Visa Lodgement",
      description: "Assigning Certificate of Sponsorship and submitting visa application."
    },
    {
      title: "Performances & Engagements",
      description: "Undertaking designated engagements with flexibility for eligible secondary roles."
    }
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
  category: "Business Visas",
  shortDescription: "For individuals coming to the UK to do work covered by international law, diplomatic missions, or overseas governments.",
  heroTagline: "Diplomatic, consular, and international treaty immigration representation.",
  seoTitle: "International Agreement Visa UK | Diplomatic & Treaty Support",
  seoDescription: "Legal representation for diplomatic personnel, international organisation staff, and private servants under international treaties.",
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
  title: "Seasonal Worker Visa",
  category: "Business Visas",
  shortDescription: "Temporary visa to work in the UK for up to 6 months in the horticulture or poultry sectors with an approved scheme operator.",
  heroTagline: "Short-term agricultural and seasonal work in the United Kingdom.",
  seoTitle: "Seasonal Worker Visa UK | Agricultural Work Support | Visa Direct",
  seoDescription: "Guidance on the UK Temporary Work Seasonal Worker visa for edible horticulture and poultry processing with approved scheme operators.",
  iconName: "Clock",
  keyFeatures: [
    "Approved scheme operator allocation check",
    "Up to 6 months temporary stay in horticulture",
    "National Minimum Wage & working time compliance",
    "Straightforward entry clearance support"
  ],
  eligibilityRequirements: [
    "At least 18 years of age on date of application",
    "Valid Certificate of Sponsorship from an authorized UK scheme operator",
    "Adequate maintenance funds (£1,276) or sponsor maintenance certification",
    "Intention to leave the UK at the end of the permitted stay"
  ],
  documentsRequired: [
    "Valid passport",
    "CoS reference number",
    "Evidence of personal funds if required"
  ],
  processSteps: [
    {
      title: "Scheme Operator Placement",
      description: "Securing endorsement and CoS from an authorized scheme operator."
    },
    {
      title: "Application Submission",
      description: "Filing application from outside the UK with fast-track processing options."
    },
    {
      title: "UK Seasonal Employment",
      description: "Undertaking designated agricultural or food processing employment."
    }
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
  category: "Business Visas",
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
  category: "Business Visas",
  shortDescription: "Global Business Mobility route for overseas graduates transferring to a UK branch as part of a graduate training programme.",
  heroTagline: "Structured corporate training in the UK for overseas graduates.",
  seoTitle: "Graduate Trainee Visa UK | Global Business Mobility Support",
  seoDescription: "Guidance for multinational companies transferring overseas graduates to UK branches on structured corporate development programmes.",
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
    "Salary meeting the route threshold (£25,410 or 70% of going rate)"
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
      question: "Can I bring dependants on a Graduate Trainee Visa?",
      answer: "Yes, eligible partners and children can accompany you for the duration of your training placement."
    }
  ]
},
  {
  id: "minister-of-religion-visa",
  slug: "minister-of-religion-visa",
  title: "Minister of Religion Visa",
  category: "Business Visas",
  shortDescription: "Long-term visa route for religious leaders, pastoral workers, and missionaries taking up appointments with licensed UK faith bodies.",
  heroTagline: "Religious and pastoral leadership appointments in the United Kingdom.",
  seoTitle: "Minister of Religion Visa UK (T2) | Application Support",
  seoDescription: "Legal representation for religious ministers, pastoral workers, and religious orders taking appointments with UK faith institutions.",
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
    "Adequate maintenance savings and suitable accommodation"
  ],
  documentsRequired: [
    "Valid passport",
    "CoS reference number",
    "Recognized English language certificate (CEFR B2)",
    "Proof of funds and accommodation confirmation"
  ],
  processSteps: [
    {
      title: "Religious Role Assessment",
      description: "Ensuring role qualifies as pastoral/leadership rather than non-pastoral religious work."
    },
    {
      title: "CoS & Visa Application",
      description: "Issuing Certificate of Sponsorship and filing the visa with full evidentiary pack."
    },
    {
      title: "5-Year Settlement Journey",
      description: "Advising on continuous residence leading to British settlement."
    }
  ],
  faqs: [
    {
      question: "Does the Minister of Religion visa lead to ILR?",
      answer: "Yes, applicants can apply for Indefinite Leave to Remain after 5 continuous years in the UK."
    }
  ]
},
  {
  id: "service-supplier-visa",
  slug: "service-supplier-visa",
  title: "Service Supplier Visa",
  category: "Business Visas",
  shortDescription: "Global Business Mobility route for contractual service suppliers and independent professionals under international trade agreements.",
  heroTagline: "Deliver specialized contract services under UK trade agreements.",
  seoTitle: "Service Supplier Visa UK | Global Business Mobility Support",
  seoDescription: "Guidance for overseas contractual service suppliers and self-employed professionals delivering services under international agreements.",
  iconName: "Briefcase",
  keyFeatures: [
    "Trade agreement coverage and eligibility analysis",
    "Contractual service supplier & independent professional support",
    "Stay up to 6 or 12 months depending on international agreement",
    "Dependant partner and child accompaniment"
  ],
  eligibilityRequirements: [
    "Assigned CoS by an authorized UK Service Supplier sponsor",
    "Service covered by a qualifying UK international trade agreement",
    "Employed by overseas supplier or self-employed with 12+ months experience",
    "Relevant professional qualification or university degree"
  ],
  documentsRequired: [
    "Valid passport",
    "CoS reference number",
    "Copy of commercial service contract",
    "Degree certificate and professional accreditation proof"
  ],
  processSteps: [
    {
      title: "Trade Agreement Qualification",
      description: "Determining whether your nationality and commercial contract are covered under UK trade agreements."
    },
    {
      title: "CoS Assignment & Filing",
      description: "Securing sponsorship and filing the application with evidentiary documents."
    },
    {
      title: "Contract Execution in UK",
      description: "Carrying out the contracted professional services across the UK."
    }
  ],
  faqs: [
    {
      question: "Can self-employed independent professionals apply?",
      answer: "Yes, if established in a signatory country and delivering services under an eligible trade treaty."
    }
  ]
},
  {
  id: "investor-visa-tier-1",
  slug: "investor-visa-tier-1",
  title: "Investor Visa (Tier 1)",
  category: "Business Visas",
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
  category: "Business Visas",
  shortDescription: "Prestigious unsponsored visa for leaders and emerging leaders in academia, research, arts, and digital technology.",
  heroTagline: "Work, build, and innovate in the UK with complete employer independence.",
  seoTitle: "Global Talent Visa UK | Endorsement & Application Support",
  seoDescription: "Achieve employer independence in the UK. Get expert legal representation for Global Talent endorsement and visa applications.",
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
  category: "Business Visas",
  shortDescription: "Visa for elite sportspeople and coaches internationally established at the highest level of sport.",
  heroTagline: "Compete and coach at the highest level of British professional sport.",
  seoTitle: "International Sportsperson Visa UK | Legal Support | Visa Direct",
  seoDescription: "Application representation for elite athletes, coaches, and sports clubs under the UK International Sportsperson visa route.",
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
    "English language proficiency at level A1 (short-term) or B1 (long-term)"
  ],
  documentsRequired: [
    "Sports governing body endorsement letter",
    "Valid passport",
    "CoS reference number",
    "English language test certificate"
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
      question: "Can I do secondary coaching work?",
      answer: "Yes, you can undertake secondary work as a coach or in the media, provided it complies with your visa conditions."
    }
  ]
},
  {
  id: "innovator-visa",
  slug: "innovator-visa",
  title: "Innovator Visa",
  category: "Business Visas",
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
  id: "investor-visa",
  slug: "investor-visa",
  title: "Investor Visa",
  category: "Business Visas",
  shortDescription: "Strategic UK immigration and commercial investment advice for high-net-worth individuals and families.",
  heroTagline: "Strategic UK residency and relocation solutions for international investors.",
  seoTitle: "UK Investor Visa Alternatives & Relocation | Visa Direct",
  seoDescription: "Strategic immigration guidance for international investors, corporate stakeholders, and high-net-worth families moving to the UK.",
  iconName: "ShieldCheck",
  keyFeatures: [
    "Alternative commercial investment route assessment",
    "Global Business Mobility and Innovator corporate options",
    "Family relocation and wealth transition guidance",
    "Comprehensive permanent settlement strategies"
  ],
  eligibilityRequirements: [
    "Substantial capital available for deployment in the UK economy",
    "Clean source of wealth and verifiable financial documentation",
    "Clear commercial expansion or business founding rationale",
    "Clean criminal and immigration background"
  ],
  documentsRequired: [
    "Comprehensive proof of source of wealth and banking statements",
    "Corporate registration and shareholding records",
    "Passports and identification for all family members",
    "Business plans or investment allocation proposals"
  ],
  processSteps: [
    {
      title: "Strategic Options Appraisal",
      description: "Analyzing the most effective visa route based on your capital and business objectives."
    },
    {
      title: "Application Structuring",
      description: "Drafting all corporate and personal immigration petitions."
    },
    {
      title: "UK Settlement Execution",
      description: "Guiding the family through residence, extensions, and citizenship."
    }
  ],
  faqs: [
    {
      question: "How can investors relocate to the UK now that Tier 1 is closed?",
      answer: "Investors typically utilize the UK Expansion Worker route, Innovator Founder route, or establish a commercial sponsor licence to achieve residency."
    }
  ]
},
  {
  id: "business-development-visa",
  slug: "business-development-visa",
  title: "Business Development Visa",
  category: "Business Visas",
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
  id: "talent-visa",
  slug: "talent-visa",
  title: "Talent Visa",
  category: "Business Visas",
  shortDescription: "Comprehensive legal assistance for exceptional international talent across technology, science, arts, and business.",
  heroTagline: "Fast-track unsponsored routes for world-class talent and innovators.",
  seoTitle: "UK Talent Visa Routes | Global Talent & Endorsement Support",
  seoDescription: "Guidance across all UK talent routes for leaders in tech, research, academia, and the arts seeking work independence in Britain.",
  iconName: "Award",
  keyFeatures: [
    "Endorsement qualification review across all approved bodies",
    "Evidence portfolio building and reference letter optimization",
    "No employer sponsorship or minimum salary constraints",
    "Accelerated 3-year pathway to British settlement"
  ],
  eligibilityRequirements: [
    "Recognized leadership or emerging leadership in an eligible sector",
    "Endorsement from designated body (e.g. Tech Nation, Royal Society, Arts Council)",
    "Strong portfolio of achievements, publications, patents, or notable works"
  ],
  documentsRequired: [
    "Comprehensive evidence dossier of career impact",
    "Letters of recommendation from recognized experts",
    "CV and portfolio of works",
    "Valid passport"
  ],
  processSteps: [
    {
      title: "Talent Eligibility Appraisal",
      description: "Assessing accomplishments against the specific criteria of the endorsing body."
    },
    {
      title: "Petition Compilation",
      description: "Drafting the endorsement package and submitting the application."
    },
    {
      title: "Visa Grant & UK Autonomy",
      description: "Receiving your visa with complete career independence in the UK."
    }
  ],
  faqs: [
    {
      question: "What makes the Talent route unique?",
      answer: "You are not tied to any employer, do not need a sponsor, and can freely take employment, freelance, or run a business."
    }
  ]
},
  {
  id: "parents-visa",
  slug: "parents-visa",
  title: "Parents Visa",
  category: "Personal Visas",
  shortDescription: "Live in the UK to care for and maintain an active relationship with your British or settled child.",
  heroTagline: "Parent family immigration guidance for parents of UK-resident children.",
  seoTitle: "UK Parents Visa | Eligibility, Requirements & Application Support",
  seoDescription: "Apply for a UK Parent Visa. Guidance on parental responsibility, financial requirements, and Home Office rules with Visa Direct Immigration.",
  iconName: "UsersRound",
  keyFeatures: [
    "Sole or shared parental responsibility evidence support",
    "Direct contact & access arrangements verification",
    "Adequate maintenance and housing calculation",
    "5-year settlement pathway to Indefinite Leave to Remain"
  ],
  eligibilityRequirements: [
    "Child is under 18 and living in the UK (British, settled, or 7-year resident)",
    "Sole or shared parental responsibility for the child",
    "Active involvement in your child's upbringing",
    "Ability to maintain and accommodate yourself without public funds"
  ],
  documentsRequired: [
    "Child's birth certificate and proof of British or settled status",
    "Evidence of parental responsibility and active role in upbringing",
    "Court orders or written contact agreements where applicable",
    "Proof of adequate accommodation and finances"
  ],
  processSteps: [
    {
      title: "Parental Responsibility Review",
      description: "Auditing contact agreements and active involvement documentation."
    },
    {
      title: "Application Preparation",
      description: "Submitting the online family parent visa application to UKVI."
    },
    {
      title: "Settlement Progression",
      description: "Maintaining continuous residence leading to permanent ILR."
    }
  ],
  faqs: [
    {
      question: "Can I apply if the other parent also lives in the UK?",
      answer: "Yes, provided you share parental responsibility and the other parent is British or settled, and is not your partner."
    }
  ]
},
  {
  id: "child-dependent-visa",
  slug: "child-dependent-visa",
  title: "Child Dependent Visa",
  category: "Personal Visas",
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
  category: "Personal Visas",
  shortDescription: "For adult relatives who require long-term personal care to join their British or settled family member in the UK.",
  heroTagline: "Compassionate legal support for dependent elderly or vulnerable relatives.",
  seoTitle: "Adult Dependent Relative Visa UK | Care Immigration Support",
  seoDescription: "Guidance on the Adult Dependent Relative visa for elderly parents, grandparents, or disabled adult family members needing care in the UK.",
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
    "Comprehensive medical reports from independent medical authorities",
    "Evidence of care availability, quality, and cost in home country",
    "Signed Sponsorship Undertaking form (SU07)",
    "Proof of sponsor's income, savings, and suitable accommodation"
  ],
  processSteps: [
    {
      title: "Care & Medical Evidentiary Audit",
      description: "Reviewing clinical medical documentation against strict Home Office tests."
    },
    {
      title: "Legal Representation Drafting",
      description: "Compiling detailed legal skeleton argument on care unavailability."
    },
    {
      title: "Visa Grant",
      description: "Granting immediate indefinite leave to enter or limited leave matching sponsor."
    }
  ],
  faqs: [
    {
      question: "Can an elderly parent qualify for an Adult Dependent Relative visa?",
      answer: "Yes, but they must prove that due to age, illness, or disability they need long-term daily personal care that is unavailable or unaffordable in their home country."
    }
  ]
},
  {
  id: "naturalization",
  slug: "naturalization",
  title: "Naturalization",
  category: "Personal Visas",
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
  ]
},
];
