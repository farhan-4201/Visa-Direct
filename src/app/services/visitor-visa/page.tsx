import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function VisitorVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "visitor-visa" })} />;
}
