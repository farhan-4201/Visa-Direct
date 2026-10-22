import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { ServicesGridSection } from "@/components/home/ServicesGridSection";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { CallbackFormSection } from "@/components/home/CallbackFormSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Welcome Section */}
      <HeroSection />

      {/* 2. Three Core Feature Value Propositions */}
      <FeaturesSection />

      {/* 3. About Firm Preview & Experience Credentials */}
      <AboutPreviewSection />

      {/* 4. Core Visa Services Grid */}
      <ServicesGridSection />

      {/* 5. Google Business Profile Reviews Slider */}
      <GoogleReviewsSection />

      {/* 6. Why Choose Us with Capability Progress Bars */}
      <WhyChooseUsSection />

      {/* 7. How We Work 4-Step Process Workflow */}
      <HowWeWorkSection />

      {/* 8. Visa Application Call Strip Banner */}
      <CtaBanner />

      {/* 9. Latest Blog & Legal Updates Articles */}
      <BlogPreviewSection />

      {/* 10. Direct Contact Details & Callback Request Form */}
      <CallbackFormSection />
    </>
  );
}
