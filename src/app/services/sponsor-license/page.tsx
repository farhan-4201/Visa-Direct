import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function SponsorLicensePage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "sponsor-license" })} />;
}
