import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function SpouseVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "spouse-visa" })} />;
}
