import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function FinalContactStrip() {
  return (
    <section className="py-16 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0c4c6d] to-[#072333] rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto">
                <Phone className="w-5 h-5 text-[#f5caa1]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
              <p className="text-sm font-bold text-white">
                <a href="tel:03330040117" className="hover:text-[#f5caa1] transition-colors">
                  0333 0040117
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto">
                <Mail className="w-5 h-5 text-[#f5caa1]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
              <p className="text-sm font-bold text-white">
                <a href="mailto:info@visadirectimmigration.com" className="hover:text-[#f5caa1] transition-colors">
                  info@visadirectimmigration.com
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5 text-[#f5caa1]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Office</p>
              <p className="text-sm font-bold text-white">Birmingham · Bristol · Reading</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="tel:03330040117"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0c4c6d] font-bold shadow-lg hover:bg-[#f4f8fa] transition-all"
            >
              <Phone className="w-4 h-4" />
              Call 0333 0040117
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
