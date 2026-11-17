import ServiceDetailPage from "@/app/services/[slug]/page";

export default function UkSettlementVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-settlement-visa" })} />;
}
