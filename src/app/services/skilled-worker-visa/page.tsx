import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function SkilledWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "skilled-worker-visa" })} />;
}
