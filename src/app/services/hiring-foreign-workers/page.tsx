import ServiceDetailPage from "@/app/services/[slug]/page";

export default function HiringForeignWorkersPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "hiring-foreign-workers" })} />;
}
