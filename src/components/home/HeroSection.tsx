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

          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-[#c68a4c]/40 text-xs sm:text-sm font-semibold text-[#c68a4c] shadow-lg">
            UK Visa and Immigration Advice
          </span>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.08] tracking-tight text-white">
            UK Immigration Advice for Individuals, Families and Businesses
          </h1>

          {/* Gold Accent Rule */}
          <div className="accent-rule" />

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
            Navigating UK immigration requirements can be complicated. Visa Direct Immigration
            provides guidance and application support for individuals, families, students, workers
            and businesses exploring their UK immigration options.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
            Whether you need help with a spouse visa, student visa, sponsor licence, visitor visa,
            settlement or British citizenship, our team can help you understand the relevant
            requirements and the steps involved in your application.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
            With consultation options in Birmingham, Bristol and Reading, we aim to make it easier
            to discuss your immigration needs and understand your next steps.
          </p>

          {/* Optional trust line */}
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            Immigration guidance tailored to your circumstances.
          </p>

          {/* Modern CTA Buttons with Elevated Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/appointment"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
            >
              <Calendar className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>Book a Consultation</span>
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
