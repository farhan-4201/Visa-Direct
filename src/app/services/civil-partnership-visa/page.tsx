import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function CivilPartnershipVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "civil-partnership-visa" })} />;
}
