import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function HiringForeignWorkersPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "hiring-foreign-workers" })} />;
}
