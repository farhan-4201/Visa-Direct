import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  Calendar,
  Compass,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { officeLocations } from "@/data/officesData";
import { CallbackFormSection } from "@/components/home/CallbackFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Visa Direct Immigration",
  description:
    "Get in touch with our immigration offices in Birmingham, Bristol, and Reading. Call 0333 0040117 or visit us for an in-person case evaluation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Our immigration solicitors and caseworkers are ready to assist across multiple regional offices."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 3 Regional Office Cards */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] block mb-2">
              Our Regional Offices
            </span>
            <h2 className="text-3xl font-extrabold text-[#072333] tracking-tight mb-3">
              Visit Us in Birmingham, Bristol, or Reading
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We welcome clients for scheduled in-person strategy sessions or digital consultations
              across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <div
                key={office.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0c4c6d]/10 text-[#0c4c6d] flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#0c4c6d]" />
                    </div>
                    {office.isHeadquarters && (
                      <span className="text-[11px] font-bold text-[#c68a4c] bg-[#c68a4c]/10 px-2.5 py-1 rounded-full border border-[#c68a4c]/30 uppercase">
                        Headquarters
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{office.name}</h3>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#c68a4c] shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-slate-900 hover:text-[#0c4c6d]"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#c68a4c] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-slate-600 hover:text-slate-900 truncate"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100 text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{office.openingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href="/appointment"
                    className="block text-center w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#0c4c6d] hover:text-white text-[#0c4c6d] text-xs font-bold border border-slate-200 transition-colors"
                  >
                    Schedule Office Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Callback Form Section */}
      <CallbackFormSection />
    </>
  );
}
