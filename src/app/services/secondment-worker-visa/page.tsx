import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "secondment-worker-visa" }),
  });
}

export default function SecondmentWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "secondment-worker-visa" })} />;
}
