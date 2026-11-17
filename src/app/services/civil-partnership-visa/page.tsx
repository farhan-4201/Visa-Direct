import ServiceDetailPage from "@/app/services/[slug]/page";

export default function CivilPartnershipVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "civil-partnership-visa" })} />;
}
