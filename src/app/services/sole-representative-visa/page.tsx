import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function SoleRepresentativeVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "sole-representative-visa" })} />;
}
