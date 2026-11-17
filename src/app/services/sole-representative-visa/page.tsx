import ServiceDetailPage from "@/app/services/[slug]/page";

export default function SoleRepresentativeVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "sole-representative-visa" })} />;
}
