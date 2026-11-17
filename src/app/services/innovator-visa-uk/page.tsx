import ServiceDetailPage from "@/app/services/[slug]/page";

export default function InnovatorVisaUkPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "innovator-visa-uk" })} />;
}
