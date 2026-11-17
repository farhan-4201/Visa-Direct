import ServiceDetailPage from "@/app/services/[slug]/page";

export default function FamilyVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "family-visa" })} />;
}
