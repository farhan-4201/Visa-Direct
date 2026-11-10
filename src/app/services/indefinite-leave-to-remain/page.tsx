import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function IndefiniteLeaveToRemainPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "indefinite-leave-to-remain" })} />;
}
