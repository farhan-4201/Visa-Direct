import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "United Kingdom Visa Types: A Complete 2026 Overview",
  description: "A complete guide to United Kingdom visa types in 2026, covering visit, study, work, family and settlement routes, and how to choose the right one.",
};

export default function UkVisaTypesExplained() {
  return (
    <>
      <PageHeader
        title="United Kingdom Visa Types: A Complete 2026 Overview"
        subtitle="A complete guide to United Kingdom visa types in 2026, covering visit, study, work, family and settlement routes, and how to choose the right one."
        breadcrumbs={[{ label: "Visa Types" }]}
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                United Kingdom Visa Types Explained: Which UK Visa Is Right for You in 2026?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                UK Visa Types Explained: Which UK Visa Is Right for You in 2026
              </p>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:border-[#0c4c6d]/30 transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#c68a4c] mb-3">What You Need to Know</h3>
                <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <li>The UK visa system is organised around purpose: visiting, studying, working, joining family or settling permanently.</li>
                  <li>Not everyone needs a visa. Depending on your nationality, you may only need an electronic travel authorisation or nothing at all for a short visit.</li>
                  <li>Work visa requirements changed significantly in 2025 and 2026, including a higher salary threshold and a stricter English language requirement for Skilled Worker applicants.</li>
                  <li>Family visas cover several different routes including partner, fianc\e, child, and dependent relative, each with its own requirements.</li>
                  <li>The eVisa has now fully replaced the Biometric Residence Permit as proof of UK immigration status.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:border-[#0c4c6d]/30 transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#c68a4c] mb-3">Do You Even Need a Visa? Visa, ETA, or Neither</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Not everyone travelling to the UK needs a visa at all. Depending on your nationality and purpose of travel, you may need a full visa, a lighter electronic travel authorisation or nothing beyond a valid passport.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  British and Irish citizens don\'t need either. Nationals from a defined list of countries, including much of Europe, the United States, Canada and Australia, generally need an ETA rather than a full visa for short visits. Everyone else is generally classed as a visa national and needs to apply for a visa in advance, regardless of the length or purpose of their stay.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  There\'s a genuinely important transitional point worth knowing about right now. Some travellers who booked and paid for their journey before 3pm on 5 March 2026, and who arrived before 3pm on 16 April 2026, can still rely on an ETA they already hold even in circumstances that would otherwise require a visa. Outside that narrow window, the standard rules apply.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  If you\'re at all unsure which category you fall into, the official check if you need a UK visa tool on GOV.UK is the most reliable way to confirm it before you plan anything further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
