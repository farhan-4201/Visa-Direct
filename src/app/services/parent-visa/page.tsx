import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function ParentVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "parent-visa" })} />;
}
