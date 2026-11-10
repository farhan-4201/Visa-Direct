import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function BritishCitizenshipPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "british-citizenship" })} />;
}
