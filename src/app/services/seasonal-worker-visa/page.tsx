import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "seasonal-worker-visa" }),
  });
}

export default function SeasonalWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "seasonal-worker-visa" })} />;
}
