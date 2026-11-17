import ServiceDetailPage from "@/app/services/[slug]/page";

export default function IndefiniteLeaveToRemainPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "indefinite-leave-to-remain" })} />;
}
