import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function GlobalBusinessMobilityPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "global-business-mobility" })} />;
}
