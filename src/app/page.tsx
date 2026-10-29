import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickConsultationSection } from "@/components/home/QuickConsultationSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGridSection } from "@/components/home/ServicesGridSection";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { WhyWorkWithUsSection } from "@/components/home/WhyWorkWithUsSection";
import { OurProcessSection } from "@/components/home/OurProcessSection";
import { OfficeLocationsSection } from "@/components/home/locations/OfficeLocationsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FinalContactStrip } from "@/components/home/FinalContactStrip";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Consultation Section */}
      <QuickConsultationSection />

      {/* 3. About Visa Direct Immigration */}
      <AboutSection />

      {/* 4. Our Immigration Services */}
      <ServicesGridSection />

      {/* 5. Google Business Profile Reviews Slider */}
      <GoogleReviewsSection />

      {/* 6. Why Work With Our Team */}
      <WhyWorkWithUsSection />

      {/* 7. Our Process */}
      <OurProcessSection />

      {/* 8. Office Locations */}
      <OfficeLocationsSection />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Latest Immigration News and Guides */}
      <BlogPreviewSection />

      {/* 11. Final CTA */}
      <FinalCtaSection />

      {/* 12. Final Contact Strip */}
      <FinalContactStrip />
    </>
  );
}
