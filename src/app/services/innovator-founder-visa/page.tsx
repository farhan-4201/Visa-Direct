import ServiceDetailPage from "@/app/services/[slug]/page";

export default function InnovatorFounderVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "innovator-visa-uk" })} />;
}
