import ServiceDetailPage from "@/app/services/[slug]/page";

export default function BritishCitizenshipPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "british-citizenship" })} />;
}
