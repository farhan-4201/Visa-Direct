import ServiceDetailPage from "@/app/services/[slug]/page";

export default function GraduateVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "graduate-visa" })} />;
}
