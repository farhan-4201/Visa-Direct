export interface SuccessStory {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  clientInitials: string;
  originCountry: string;
  outcome: string;
  processingTime: string;
  details: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "story-1",
    title: "Family Reunification: Mother and Daughter Reunited After Two Prior Refusals",
    category: "Family & Visit Visas",
    date: "July 22, 2026",
    summary: "Reversed multiple historical refusals by building an extensive, verifiable documentation portfolio showing ongoing economic and social ties in origin country.",
    clientInitials: "F. A.",
    originCountry: "Pakistan",
    outcome: "Multi-Entry 2-Year Visit Visa Approved",
    processingTime: "14 working days",
    details: "After previous representatives failed to address Home Office concerns on home ties, our solicitors submitted comprehensive independent tax records, land registries, and an unassailable financial timeline.",
  },
  {
    id: "story-2",
    title: "Urgent Sponsor License Secured for Growing Engineering Firm in the Midlands",
    category: "Business & Sponsor Licensing",
    date: "May 12, 2026",
    summary: "Guided a rapidly scaling advanced engineering contractor through pre-licence HR audit and obtained an A-rated sponsor licence within 10 days.",
    clientInitials: "Midlands Tech Ltd",
    originCountry: "United Kingdom",
    outcome: "Sponsor License Granted with 5 Defined CoS",
    processingTime: "10 working days (Priority)",
    details: "Conducted mock compliance interviews with the appointed Authorising Officer, organized internal HR recordkeeping, and secured immediate CoS allocations.",
  },
  {
    id: "story-3",
    title: "Spouse Visa Granted Under Complex Cash Savings & Overseas Income Combinations",
    category: "Spouse & Partner Visas",
    date: "June 30, 2026",
    summary: "Successfully structured a non-standard financial evidence package under Category D and Category A to meet the strict financial rules.",
    clientInitials: "T. & M. J.",
    originCountry: "United States / UK",
    outcome: "Initial 33-Month Spouse Clearance",
    processingTime: "6 weeks (Standard overseas)",
    details: "Synthesized multi-currency bank declarations, verified equity liquidation from property sale, and demonstrated genuine relationship over 5 years.",
  },
  {
    id: "story-4",
    title: "Skilled Worker Visa Granted for Healthcare Professional with Dependent Family",
    category: "Skilled Worker Visas",
    date: "March 18, 2026",
    summary: "Seamless transition from graduate route to senior NHS clinical technologist with concurrent partner and child dependent visas.",
    clientInitials: "Dr. K. N.",
    originCountry: "Nigeria",
    outcome: "5-Year Skilled Worker Visa Granted",
    processingTime: "5 working days (Priority)",
    details: "Managed exact job code matching, regulatory professional registration verification, and simultaneous dependent submissions.",
  },
];
