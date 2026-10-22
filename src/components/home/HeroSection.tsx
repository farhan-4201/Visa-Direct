import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-bg relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Soft natural scrim on left side only to protect text contrast while leaving background image 100% visible and un-tinted */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 sm:py-32 w-full">
        <div className="max-w-3xl space-y-8">

          {/* IAA Regulation Badge with Number */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-[#c68a4c]/40 text-xs sm:text-sm font-semibold text-slate-200 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#c68a4c] shrink-0" />
            <span className="font-bold text-amber-300">IAA Regulated</span>
            <span className="text-white/40">·</span>
            <span>Registration No: F202536890</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.08] tracking-tight text-white">
            Trusted UK{" "}
            <span className="text-[#c68a4c]">Immigration</span>{" "}
            Consultants
            <span className="text-slate-200 font-medium text-2xl sm:text-3xl md:text-4xl block mt-3">
              Bristol, Birmingham & Nationwide
            </span>
          </h1>

          {/* Gold Accent Rule */}
          <div className="accent-rule" />

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
            Your dedicated partner for UK visa applications, sponsor licenses, family settlement,
            and business immigration. Expert legal representation delivered with transparency,
            precision, and personal care.
          </p>

          {/* Modern CTA Buttons with Elevated Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/appointment"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
            >
              <Calendar className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 shadow-lg transition-all duration-300"
            >
              <span>Explore All Visas</span>
              <ArrowRight className="w-4 h-4 text-[#c68a4c] transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>
          </div>

          {/* Direct Telephone Strip */}
          <div className="flex items-center gap-3 pt-2 text-sm text-slate-300">
            <div className="w-8 h-8 rounded-full bg-[#c68a4c]/20 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#c68a4c]" />
            </div>
            <span>Speak directly to an advisor:</span>
            <a
              href="tel:03330040117"
              className="font-extrabold text-white hover:text-[#c68a4c] transition-colors text-base tracking-wide underline underline-offset-4 decoration-[#c68a4c]/60"
            >
              0333 0040117
            </a>
            <span className="text-slate-400 text-xs hidden sm:inline">(Mon–Fri, 9am–6pm)</span>
          </div>

        </div>
      </div>

      {/* Subtle bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
    </section>
  );
}
