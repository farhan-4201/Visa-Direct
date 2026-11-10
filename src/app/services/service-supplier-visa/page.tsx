import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "service-supplier-visa" }),
  });
}

export default function ServiceSupplierVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "service-supplier-visa" })} />;
}
