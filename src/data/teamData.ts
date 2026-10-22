export interface TeamMember {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  specialization: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "A. Rahman",
    role: "Senior Immigration Solicitor & Legal Director",
    qualifications: "LLB (Hons), LLM International Law",
    bio: "Over 18 years representing corporate sponsors and private clients across high-stakes immigration appeals, judicial reviews, and nationality law.",
    specialization: "Corporate Sponsorship & Judicial Reviews",
  },
  {
    name: "S. Bennett",
    role: "Principal Business Immigration Consultant",
    qualifications: "IAA Level 3 Regulated Practitioner",
    bio: "Specializes in Sponsor License auditing, Global Business Mobility, and Tier 1 entrepreneur legacy settlement applications.",
    specialization: "Sponsor Licensing & Business Visas",
  },
  {
    name: "M. Chowdhury",
    role: "Head of Family & Private Client Services",
    qualifications: "BA (Hons), Graduate Diploma in Law",
    bio: "Dedicated advocate with a 98% success rate in Appendix FM spouse, parent, and complex child dependency applications.",
    specialization: "Spouse Visas & Family Reunification",
  },
  {
    name: "E. Davies",
    role: "Senior Case Manager & Appeals Specialist",
    qualifications: "BSc, Legal Practice Course (LPC)",
    bio: "Coordinates bespoke documentation portfolios, tribunal representations, and Administrative Review appeals for global professionals.",
    specialization: "Appeals & Administrative Reviews",
  },
];
