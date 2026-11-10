import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function BusinessVisitorVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "business-visitor-visa" })} />;
}
