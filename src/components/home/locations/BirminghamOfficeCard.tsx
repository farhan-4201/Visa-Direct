import React from "react";
import Link from "next/link";
import { Phone, MapPin, Building2, Clock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export function BirminghamOfficeCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Top: Badge */}
      <div className="p-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c4c6d]/10 border border-[#0c4c6d]/20 text-xs font-bold uppercase tracking-wider text-[#c68a4c]">
          <Building2 className="w-4 h-4" />
          Head Office
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072333] tracking-tight mb-3">
          Birmingham Office
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Our listed Birmingham address is on Hagley Road, providing a contact point for people
          seeking information about our immigration services.
        </p>

        {/* Contact Info Grid */}
        <div className="space-y-4 mb-8 flex-1">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 flex items-center justify-center text-[#0c4c6d] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Address
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                66-68 Hagley Road, Birmingham, B16 8PF
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 flex items-center justify-center text-[#0c4c6d] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Phone
              </p>
              <p className="text-sm font-semibold text-[#072333]">0333 004 0117</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/appointment?consultation_type=birmingham_office"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] text-white font-bold shadow-lg shadow-[#c68a4c]/30 hover:shadow-xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 transition-all duration-300 border border-amber-300/30 text-center"
        >
          <span>Contact Our Birmingham Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Footer: IAA Badge */}
      <div className="p-4 border-t border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#c68a4c] shrink-0" />
          <span className="text-xs text-slate-500">IAA Regulated · Reg No: F202536890</span>
        </div>
      </div>
    </div>
  );
}
