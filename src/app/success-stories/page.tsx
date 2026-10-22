import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Calendar,
  Clock,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { successStories } from "@/data/successStoriesData";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Client Success Stories | Visa Direct Immigration",
  description:
    "Real-world visa outcomes and client success stories handled by our Bristol and Birmingham UK immigration legal advisors.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHeader
        title="Success Stories"
        subtitle="Real-world results achieved for families, businesses, and skilled individuals worldwide."
        breadcrumbs={[{ label: "Success Stories" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Intro text */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] block">
              Proven Track Record
            </span>
            <h2 className="text-3xl font-extrabold text-[#072333] tracking-tight">
              Transforming Complex Legal Challenges into Positive Outcomes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every visa application has a life, family, or business ambition behind it. Explore
              how our tailored strategies resolved previous refusals and tight deadlines.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-[#0c4c6d]/10 text-[#0c4c6d] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {story.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{story.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {story.summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-2">
                    <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Outcome: {story.outcome}</span>
                    </div>
                    <div className="text-emerald-700">
                      Processing Turnaround: <strong>{story.processingTime}</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    <strong>Case Strategy:</strong> {story.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Origin: {story.originCountry}</span>
                  </span>
                  <span className="text-slate-400 font-semibold">Client: {story.clientInitials}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial Spotlight */}
          <div className="bg-gradient-to-r from-[#0c4c6d] to-[#072333] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <Quote className="w-16 h-16 text-white/10 absolute top-6 right-6" />
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f5caa1]">
                Client Experience
              </span>
              <p className="text-lg sm:text-xl font-medium text-slate-100 italic leading-relaxed">
                "Visa Direct provided the clarity and honesty we desperately needed after two previous
                refusals. Their attention to detail was exceptional, and our spouse visa was granted
                without any questions asked."
              </p>
              <div className="text-sm font-bold text-white">
                — Maria & David S., Bristol
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="text-center pt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Have a Similar Case or Recent Refusal?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-md mx-auto">
              Our legal practitioners review past decision letters and formulate robust appeal or
              re-application strategies.
            </p>
            <Button
              href="/appointment"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Strategy Session
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
