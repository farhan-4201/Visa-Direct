import ServiceDetailPage, {
  generateMetadata,
} from "@/app/services/[slug]/page";

export { generateMetadata };

export default function UkStudentVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-student-visa" })} />;
}
