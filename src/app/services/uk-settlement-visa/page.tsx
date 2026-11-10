import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function UkSettlementVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-settlement-visa" })} />;
}
