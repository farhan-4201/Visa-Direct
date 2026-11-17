import ServiceDetailPage from "@/app/services/[slug]/page";

export default function GlobalBusinessMobilityPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "global-business-mobility" })} />;
}
