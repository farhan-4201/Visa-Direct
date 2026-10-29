import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 bg-[#072333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c68a4c]/20 text-[#f5caa1] border border-[#c68a4c]/30 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            IAA Regulated UK Immigration Advisors · Reg No: F202536890
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-white">
            Need Help Understanding Your UK Immigration Options?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            Whether you are planning to join family in the UK, study, visit, explore a work-related
            route or apply for settlement, understanding the relevant requirements is an important
            first step. Contact Visa Direct Immigration to discuss your circumstances, ask
            questions and find out whether the services offered match your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/appointment?consultation_type=final_enquiry" className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30 w-full sm:w-auto justify-center">
              <Calendar className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 shadow-lg transition-all duration-300 w-full sm:w-auto justify-center">
              <span>Contact Our Team</span>
            </Link>
          </div>

          <p className="text-sm text-slate-400 font-medium">
            Need help now? <a href="tel:03330040117" className="font-bold text-white hover:text-[#c68a4c] transition-colors">0333 0040117</a><br />
            <a href="mailto:info@visadirectimmigration.com" className="font-bold text-[#f5caa1] hover:text-[#c68a4c] transition-colors">info@visadirectimmigration.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
