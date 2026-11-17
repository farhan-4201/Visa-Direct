import ServiceDetailPage from "@/app/services/[slug]/page";

export default function BusinessVisitorVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "business-visitor-visa" })} />;
}
