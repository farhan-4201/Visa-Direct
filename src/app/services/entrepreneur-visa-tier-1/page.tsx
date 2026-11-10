import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "entrepreneur-visa-tier-1" }),
  });
}

export default function EntrepreneurVisaTier1Page() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "entrepreneur-visa-tier-1" })} />;
}
