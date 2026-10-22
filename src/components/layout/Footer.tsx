"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071d2b] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">

          {/* Column 1: About Firm with real logo */}
          <div className="space-y-4">
            <Link href="/" aria-label="Visa Direct Immigration - Home">
              <Image
                src="/images/logo-white.png"
                alt="Visa Direct Immigration Ltd"
                width={160}
                height={57}
                className="h-auto w-[130px] sm:w-[155px] object-contain brightness-[1.1]"
                unoptimized
              />
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A direct and honest approach to your immigration processes. Expert,
              transparent legal advice for work, family, study, and citizenship visas.
            </p>

            {/* Official IAA Regulated Badge Card */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-xl p-2.5 pr-4">
                <div className="bg-white rounded-lg p-1.5 shrink-0 shadow-sm flex items-center justify-center">
                  <Image
                    src="/images/iaa-badge.png"
                    alt="Immigration Advice Authority"
                    width={70}
                    height={45}
                    className="h-9 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c68a4c]" />
                    <span>IAA Regulated</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    Reg No: <span className="font-bold text-[#c68a4c]">F202536890</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Fixed-fee consultations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Strict Home Office compliance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100+ 5-Star Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c68a4c]" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Immigration Services" },
                { href: "/blog", label: "Latest News & Blog" },
                { href: "/success-stories", label: "Client Success Stories" },
                { href: "/contact", label: "Contact Our Offices" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-all group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#c68a4c] transition-colors" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/appointment"
                  className="text-[#c68a4c] font-semibold hover:text-[#e9c49a] inline-flex items-center gap-1.5 transition-all group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#c68a4c]" />
                  <span>Book Online Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c68a4c]" />
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Birmingham Office:</span>
                  <span>66-68 Hagley Rd, Birmingham B16 8PF</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">London / Ilford Office:</span>
                  <span>103 Cranbrook Rd, Ilford IG1 4PU</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Bristol Office:</span>
                  <span>Park House, 10 Park St, Bristol BS1 5HX</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c68a4c] shrink-0" />
                <a
                  href="mailto:info@visadirectimmigration.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@visadirectimmigration.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c68a4c] shrink-0" />
                <a
                  href="tel:03330040117"
                  className="font-bold text-white hover:text-[#c68a4c] transition-colors text-base"
                >
                  0333 0040117
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Visa Direct Immigration. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline">
              Bristol · Birmingham · London · Ilford
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-[#0c4c6d] text-white transition-colors border border-slate-700 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
