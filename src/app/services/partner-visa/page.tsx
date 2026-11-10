import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function PartnerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "partner-visa" })} />;
}
