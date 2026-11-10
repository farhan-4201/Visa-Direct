import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function UkAncestryVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-ancestry-visa" })} />;
}
