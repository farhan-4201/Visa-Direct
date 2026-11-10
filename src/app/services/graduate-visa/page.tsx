import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function GraduateVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "graduate-visa" })} />;
}
