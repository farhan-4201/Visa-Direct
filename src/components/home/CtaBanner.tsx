import React from "react";
import Link from "next/link";
import { Calendar, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="cta-bg relative overflow-hidden py-20 sm:py-28">
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 hero-overlay-pattern pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c68a4c]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0c4c6d]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c68a4c]/20 text-[#f5caa1] border border-[#c68a4c]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            IAA Regulated UK Immigration Advisors · Reg No: F202536890
          </div>

          {/* Gold accent rule */}
          <div className="flex justify-center">
            <div className="accent-rule" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            Ready to Start Your UK
            <br />
            <span className="text-[#c68a4c]">Visa Journey?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light max-w-2xl mx-auto">
            Book a confidential consultation with our expert immigration team.
            We handle everything — from initial eligibility assessment to final
            Home Office submission — so you can focus on your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/appointment"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#c68a4c] transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>
          </div>

          {/* Phone strip */}
          <p className="text-sm text-slate-300 font-medium pt-2">
            Prefer to call?{" "}
            <a
              href="tel:03330040117"
              className="text-white font-bold hover:text-[#c68a4c] transition-colors text-base inline-flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#c68a4c]" />
              0333 0040117
            </a>
            <span className="text-slate-400 ml-2 text-xs">(Mon–Fri 9am–6pm)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
