import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  Scale,
  Target,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CallbackFormSection } from "@/components/home/CallbackFormSection";

export const metadata: Metadata = {
  title: "About Us | Visa Direct Immigration",
  description:
    "Learn about our seasoned UK immigration solicitors and consultants. With over 25 years of combined legal expertise serving clients in Bristol, Birmingham and nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Dedicated legal practitioners offering straightforward, honest, and expert UK visa consultancy."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* About Image + Copy Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Real about images — layered collage */}
            <div className="relative h-[480px] lg:h-[540px] hidden sm:block">
              {/* Large primary image */}
              <div className="absolute inset-0 right-0 w-[82%] h-[370px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 ml-auto">
                <Image
                  src="https://visadirectimmigration.com/wp-content/uploads/2024/06/about_img-2-1-1.jpeg"
                  alt="Immigration consultation office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 400px, 500px"
                  unoptimized
                />
              </div>
              {/* Overlapping portrait */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[280px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://visadirectimmigration.com/wp-content/uploads/2024/06/about_img-1-1.jpeg"
                  alt="Immigration consultant meeting"
                  fill
                  className="object-cover"
                  sizes="280px"
                  unoptimized
                />
              </div>
            </div>

            {/* Story & Philosophy */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight leading-tight">
                  A Clear, Direct & Principled Approach to UK Immigration
                </h2>
                <div className="accent-rule mt-4" />
              </div>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Visa Direct Immigration was established with a singular objective: to remove the
                confusion, anxiety, and opacity from the UK immigration process. We believe every
                client deserves straight answers, transparent fees, and unwavering advocacy.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0c4c6d]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c4c6d] to-[#072333] flex items-center justify-center text-white shadow-sm">
                      <Scale className="w-5 h-5 text-amber-300" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Our Legal Expertise</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our caseworkers and advisors stay at the forefront of Home Office policy
                    shifts, statement of changes, and Upper Tribunal precedent to provide
                    rock-solid application strategies.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0c4c6d]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c4c6d] to-[#072333] flex items-center justify-center text-white shadow-sm">
                      <Target className="w-5 h-5 text-amber-300" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Our Commitment</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We pledge complete transparency. You will receive an honest appraisal of your
                    eligibility before engaging our services, with clear agreed fees and no hidden costs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/appointment"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-sm shadow-xl shadow-[#c68a4c]/25 hover:shadow-2xl hover:shadow-[#c68a4c]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
                >
                  <Award className="w-4 h-4 text-white shrink-0" />
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <GoogleReviewsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Callback Form */}
      <CallbackFormSection />
    </>
  );
}
