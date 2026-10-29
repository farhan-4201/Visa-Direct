import React from "react";
import Link from "next/link";
import { Calendar, MessageSquareText, ShieldCheck, ArrowRight } from "lucide-react";

export function QuickConsultationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c]">
              Quick Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight leading-tight">
              Book an Immigration Consultation
            </h2>
            <div className="accent-rule mt-3 mb-4" />
            <p className="text-base text-slate-600 leading-relaxed">
              Every immigration case is different. A consultation gives you an opportunity to
              explain your circumstances, ask questions and understand which immigration options
              may be relevant to you.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Tell us what you need help with, and we will explain the next steps and the
              information required to assess your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/appointment?consultation_type=quick_consultation"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
              >
                <Calendar className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 shadow-lg transition-all duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#c68a4c] transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              Immigration guidance tailored to your circumstances. Consultations available in
              Birmingham, Bristol and Reading.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#0c4c6d] rounded-3xl blur-3xl opacity-10" />
            <div className="relative bg-gradient-to-br from-[#0c4c6d] to-[#072333] rounded-3xl p-8 sm:p-10 text-white">
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#f5caa1] mb-6">
                <MessageSquareText className="w-5 h-5 inline-block mr-2" />
                What to Expect at a Consultation
              </h3>
              <div className="space-y-5">
                {[
                  { icon: <ShieldCheck className="w-5 h-5 text-[#f5caa1]" />, title: "Introductions & Case Overview", desc: "We start by listening to your situation and understanding your immigration objectives." },
                  { icon: <Calendar className="w-5 h-5 text-[#f5caa1]" />, title: "Route Assessment", desc: "We discuss which immigration routes may apply to your circumstances and the requirements involved." },
                  { icon: <MessageSquareText className="w-5 h-5 text-[#f5caa1]" />, title: "Next Steps", desc: "We explain the documents needed and the process for preparing your application." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#f5caa1]">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
