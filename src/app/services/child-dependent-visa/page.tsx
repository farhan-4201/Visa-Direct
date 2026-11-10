import { Metadata } from "next";
import ServiceDetailPage, {
  generateMetadata as generateSlugMetadata,
} from "@/app/services/[slug]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({
    params: Promise.resolve({ slug: "child-dependent-visa" }),
  });
}

export default function ChildDependentVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "child-dependent-visa" })} />;
}
