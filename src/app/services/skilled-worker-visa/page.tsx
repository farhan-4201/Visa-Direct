import ServiceDetailPage from "@/app/services/[slug]/page";

export default function SkilledWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "skilled-worker-visa" })} />;
}
