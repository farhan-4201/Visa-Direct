import ServiceDetailPage from "@/app/services/[slug]/page";

export default function VisitorVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "visitor-visa" })} />;
}
