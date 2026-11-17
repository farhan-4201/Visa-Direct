import ServiceDetailPage from "@/app/services/[slug]/page";

export default function CharityWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "charity-worker-visa" })} />;
}
