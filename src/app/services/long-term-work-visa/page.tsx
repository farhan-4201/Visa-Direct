import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "long-term-work-visa" }),
  });
}

export default function LongTermWorkVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "long-term-work-visa" })} />;
}
