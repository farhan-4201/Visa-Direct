import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function CharityWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "charity-worker-visa" })} />;
}
