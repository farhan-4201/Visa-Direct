import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "minister-of-religion-visa" }),
  });
}

export default function MinisterOfReligionVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "minister-of-religion-visa" })} />;
}
