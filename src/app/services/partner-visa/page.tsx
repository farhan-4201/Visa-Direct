import ServiceDetailPage from "@/app/services/[slug]/page";

export default function PartnerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "partner-visa" })} />;
}
