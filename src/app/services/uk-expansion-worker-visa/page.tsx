import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "uk-expansion-worker-visa" }),
  });
}

export default function UkExpansionWorkerVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-expansion-worker-visa" })} />;
}
