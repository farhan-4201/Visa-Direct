import ServiceDetailPage from "@/app/services/[slug]/page";

export default function UkStudentVisaPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: "uk-student-visa" })} />;
}
