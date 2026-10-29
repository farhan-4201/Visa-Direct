import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, FileText, ShieldCheck, Users2, ArrowRight } from "lucide-react";

export function WhyWorkWithUsSection() {
  const points = [
    { icon: <CheckCircle2 className="w-6 h-6 text-[#c68a4c]" />, title: "Understanding your immigration objectives", desc: "We take time to understand your specific goals, whether you are joining family, studying, working, or building a future in the UK." },
    { icon: <ShieldCheck className="w-6 h-6 text-[#c68a4c]" />, title: "Explaining the relevant eligibility criteria", desc: "Each route has its own rules, and we help you understand exactly what is required for your situation." },
    { icon: <FileText className="w-6 h-6 text-[#c68a4c]" />, title: "Identifying the documents and evidence that may be required", desc: "We provide clear guidance on the paperwork and evidence needed to strengthen your application." },
    { icon: <Clock className="w-6 h-6 text-[#c68a4c]" />, title: "Clarifying the agreed scope of assistance", desc: "We make sure you know exactly what we will do for you and what the next steps are at every stage." },
    { icon: <Users2 className="w-6 h-6 text-[#c68a4c]" />, title: "Communicating the next steps throughout the process", desc: "From initial enquiry to submission and follow-up, we keep you informed at every stage." },
  ];

  const stats = [
    { value: "25+", label: "Years of Experience", subtext: "In UK immigration practice" },
    { value: "500+", label: "Successful Clients", subtext: "Personal and corporate applicants" },
    { value: "1,750+", label: "Visa Approvals", subtext: "Home Office grants and extensions" },
    { value: "70+", label: "Countries", subtext: "Global applicants represented" },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c]">Why Work With Our Team</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight mt-2">A Clearer Approach to Your Immigration Journey</h2>
              <div className="accent-rule mt-3 mb-4" />
              <p className="text-base text-slate-600 leading-relaxed">Immigration applications require careful preparation and an understanding of the rules that apply to each individual route. Missing evidence, misunderstanding eligibility or relying on outdated information can create avoidable difficulties. We aim to help clients understand the requirements relevant to their applications, prepare the necessary information and identify the next steps before proceeding.</p>
            </div>

            <ul className="space-y-4">
              {points.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c4c6d]/10 flex items-center justify-center shrink-0 mt-0.5"><ShieldCheck className="w-3.5 h-3.5 text-[#0c4c6d]" /></div>
                  <span className="text-sm font-medium text-slate-800 leading-relaxed">{item.desc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/appointment?consultation_type=full_assessment" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30">
                <span>Speak to Our Team</span>
                <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#072333] tracking-tight mb-1">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.subtext}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-900 text-white rounded-2xl p-6 text-sm leading-relaxed shadow-xl">
              <div className="flex items-center gap-3 mb-3"><ShieldCheck className="w-5 h-5 text-[#c68a4c]" /><span className="font-bold text-white">Important Notice</span></div>
              <p className="text-slate-300">Every application remains subject to the applicable immigration rules and the decision of the relevant UK authorities. Our role is to provide the support agreed for your case, not to guarantee a particular outcome.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
