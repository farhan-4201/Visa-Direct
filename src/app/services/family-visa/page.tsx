import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function FamilyVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "family-visa" })} />;
}
