import ServiceDetailPage from "@/app/services/[slug]/page";

export default function SponsorLicensePage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "sponsor-license" })} />;
}
