import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function InnovatorVisaUkPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "innovator-visa-uk" })} />;
}
