import React from "react";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, Calendar, Building2, ShieldCheck } from "lucide-react";
import { BirminghamOfficeCard } from "./BirminghamOfficeCard";
import { BristolOfficeCard } from "./BristolOfficeCard";
import { ReadingOfficeCard } from "./ReadingOfficeCard";

export function OfficeLocationsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">
            Our Office Locations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
            Immigration Consultation Options in Birmingham, Bristol and Reading
          </h2>
          <div className="accent-rule mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Visa Direct Immigration lists three UK office locations. If you are looking for
            immigration advice in Birmingham, Bristol or Reading, contact us to discuss your
            requirements and confirm the available appointment arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BirminghamOfficeCard />
          <BristolOfficeCard />
          <ReadingOfficeCard />
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#072333] mb-2">When You Contact Us</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need help with a family visa, student visa, visitor visa, sponsor
                licence or settlement application, contact us to establish which services are
                available for your circumstances.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/appointment?consultation_type=offices"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c68a4c] text-white font-bold shadow-lg hover:bg-[#b3773b] transition-all hover:shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#0c4c6d]" />
                <span>IAA Regulated · Reg No: F202536890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
