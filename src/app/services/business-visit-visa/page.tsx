import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function BusinessVisitVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "business-visitor-visa" })} />;
}
