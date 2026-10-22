import React from "react";
import { CheckCircle2, ShieldCheck, PhoneCall, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function WhyChooseUsSection() {
  const benefits = [
    "Delivering customized, results-driven immigration solutions to meet every client's unique needs",
    "Committed to unwavering transparency and clear communication throughout the visa process",
    "Backed by expert experience in UK immigration law, sponsor licenses, and visa applications",
    "Trusted by a diverse and extensive client base across multiple personal and business visa categories",
  ];

  const pillars = [
    {
      title: "Direct & Honest Legal Advice",
      description: "We provide an upfront, clear assessment of your application viability with no false promises.",
    },
    {
      title: "Fixed Agreed Legal Fees",
      description: "Complete transparency with fixed pricing quotes and absolutely no hidden disbursement surprises.",
    },
    {
      title: "End-to-End Home Office Representation",
      description: "From meticulous evidentiary drafting to final Home Office submission and follow-ups.",
    },
    {
      title: "IAA Regulated Practice",
      description: "Strict adherence to statutory standards and continuous regulatory compliance.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Editorial & Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                Trust, Professionalism & Proven Results
              </h2>
              <div className="accent-rule mt-3" />
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Our longstanding reputation is built on a foundation of trust, professionalism,
              and consistent dedication, supported by over 108 verified 5-star Google client reviews.
              From initial consultation through to final visa issuance, we maintain open communication
              and provide clear guidance tailored to constantly evolving UK immigration policies.
            </p>

            <ul className="space-y-3.5 pt-2">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Speak to a Consultant
              </Button>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <PhoneCall className="w-4 h-4 text-[#c68a4c]" />
                <span>Call 0333 0040117</span>
              </div>
            </div>
          </div>

          {/* Right Side: Legal Practice Standards & Google Rating Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/80 space-y-6">
              
              {/* Google Verified Review Highlight */}
              <div className="pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-lg font-black text-slate-900">5.0 Star Rated</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    108 Verified Client Reviews on Google
                  </p>
                </div>
              </div>

              {/* 4 Practice Pillars (replacing success rate percentages) */}
              <div className="space-y-4">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#0c4c6d]/20 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0c4c6d]" />
                      <span>{pillar.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Commitment callout */}
              <div className="p-4 rounded-xl bg-slate-900 text-white text-xs leading-relaxed flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-white">IAA Regulated Practice:</strong> Dedicated legal
                  advocacy for Bristol, Birmingham, Ilford & UK-wide clients.
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
