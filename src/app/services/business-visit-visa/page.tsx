import ServiceDetailPage from "@/app/services/[slug]/page";

export default function BusinessVisitVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "business-visitor-visa" })} />;
}
