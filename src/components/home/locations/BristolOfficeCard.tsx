import React from "react";
import Link from "next/link";
import { Phone, MapPin, Building2, Clock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export function BristolOfficeCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Address Card */}
        <div className="bg-gradient-to-br from-[#0c4c6d] to-[#072333] p-8 sm:p-10 text-white flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-[#f5caa1]">
              <Building2 className="w-4 h-4" />
              Regional Office
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-6 tracking-tight">
              Bristol Office
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Our listed Bristol address is at Park House on Park Street. Contact us to discuss your
              visa application needs and the available consultation arrangements.
            </p>
            <div className="flex items-start gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#f5caa1]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Address</p>
                <p className="text-sm font-semibold text-white">Park House, Business Center, 10 Park Street, Bristol, BS1 5HX</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#f5caa1]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                <p className="text-sm font-semibold text-white">0333 004 0117</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/appointment?consultation_type=bristol_office"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0c4c6d] font-bold shadow-lg hover:bg-[#f4f8fa] transition-all hover:shadow-xl"
            >
              <span>Contact Our Bristol Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right: Office Details Card */}
        <div className="p-8 sm:p-10 bg-slate-50 flex flex-col justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#c68a4c]">
            Office Details
          </h4>
          <div className="space-y-5 mt-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0c4c6d] shrink-0" />
              <span className="text-sm text-slate-600">
                Park House, Business Center, 10 Park Street, Bristol, BS1 5HX
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 flex items-center justify-center text-[#0c4c6d]">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm text-slate-700">0333 004 0117</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 flex items-center justify-center text-[#0c4c6d]">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:info@visadirectimmigration.com" className="text-sm text-[#0c4c6d] hover:text-[#c68a4c]">
                info@visadirectimmigration.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 flex items-center justify-center text-[#0c4c6d]">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-sm text-slate-600">Mon-Fri 9:00 AM - 5:30 PM</span>
            </div>
          </div>
          <div className="mt-6">
            <ShieldCheck className="w-4 h-4 text-[#c68a4c] shrink-0" />
            <span className="text-xs text-slate-500">IAA Regulated · Reg No: F202536890</span>
          </div>
        </div>
      </div>
    </div>
  );
}
