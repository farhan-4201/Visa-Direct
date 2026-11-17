import ServiceDetailPage from "@/app/services/[slug]/page";

export default function ParentVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "parent-visa" })} />;
}
