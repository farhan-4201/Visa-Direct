import ServiceDetailPage from "@/app/services/[slug]/page";

export default function UkAncestryVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-ancestry-visa" })} />;
}
