import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "international-agreement-visa" }),
  });
}

export default function InternationalAgreementVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "international-agreement-visa" })} />;
}
