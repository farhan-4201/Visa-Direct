import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFaqSection } from "@/components/contact/ContactFaqSection";

export const metadata: Metadata = {
  title: "Contact Visa Direct Immigration | UK Visa Enquiries",
  description:
    "Contact Visa Direct Immigration to discuss your immigration enquiry. Find our contact details & office information for Birmingham, Bristol & Reading.",
};

const offices = [
  {
    city: "Birmingham",
    name: "Birmingham Office",
    address: "66-68 Hagley Rd, Birmingham B16 8PF",
    email: "info@visadirectimmigration.com",
    phone: "0333 004 0117",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM",
    isHeadquarters: true,
    mapsQuery: "66-68+Hagley+Rd+Birmingham+B16+8PF",
  },
  {
    city: "Bristol",
    name: "Bristol Office",
    address: "Park House, Business Center, 10 Park St, Bristol BS1 5HX",
    email: "info@visadirectimmigration.com",
    phone: "0333 004 0117",
    hours: "Monday – Friday: 9:00 AM – 5:30 PM",
    isHeadquarters: false,
    mapsQuery: "Park+House+10+Park+St+Bristol+BS1+5HX",
  },
  {
    city: "Reading",
    name: "Reading Office",
    address: "Green Park, 200 Brook Dr, Reading, RG2 6UB",
    email: "info@visadirectimmigration.com",
    phone: "0333 004 0117",
    hours: "Monday – Friday: 9:00 AM – 5:30 PM",
    isHeadquarters: false,
    mapsQuery: "Green+Park+200+Brook+Dr+Reading+RG2+6UB",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <PageHeader
        title="Contact Visa Direct Immigration"
        subtitle="Contact Visa Direct Immigration to discuss your immigration enquiry. Find our contact details & office information for Birmingham, Bristol & Reading."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ════════════════════════════════════════════════════════
          1. GET IN TOUCH INTRO SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c]">
                Get in Touch About Your UK Immigration Enquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                Have a Question About a UK Visa or Immigration Application?
              </h2>
              <div className="accent-rule" />
              <p className="text-base text-slate-600 leading-relaxed">
                Visa Direct Immigration welcomes enquiries from individuals,
                families, students, workers and businesses seeking guidance on
                their immigration options.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Contact our team to discuss your circumstances, ask questions
                about our services and understand the next steps relevant to your
                enquiry. We will help you identify the appropriate way to proceed
                based on the information you provide.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
                >
                  <span>Send an Enquiry</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#0c4c6d] text-[#0c4c6d] font-bold text-base hover:bg-[#0c4c6d] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right highlight card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#0c4c6d] to-[#072333] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border-4 border-white">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#c68a4c]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f5caa1] border border-white/15 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    IAA Regulated Guidance
                  </div>

                  <h3 className="text-2xl font-bold leading-snug">
                    Speak Directly With Our Advisors
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Prefer immediate assistance? You can phone our dedicated
                    enquiries line or email our caseworker team directly.
                  </p>

                  <div className="space-y-4 pt-2">
                    <a
                      href="tel:03330040117"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c68a4c] to-[#b37438] flex items-center justify-center text-white shrink-0 shadow-md">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-slate-300">
                          Direct Telephone
                        </div>
                        <div className="text-base font-bold text-white group-hover:text-[#f5caa1] transition-colors">
                          0333 004 0117
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@visadirectimmigration.com"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-[#f5caa1] shrink-0 border border-white/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-slate-300">
                          Email Enquiries
                        </div>
                        <div className="text-sm font-bold text-white group-hover:text-[#f5caa1] transition-colors truncate">
                          info@visadirectimmigration.com
                        </div>
                      </div>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-2 border-t border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c68a4c]" />
                    <span>Monday – Friday: 9:00 AM – 6:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. OUR VISA CONSULTANCY OFFICE IN UK
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60" id="offices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">
              Office Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
              Our Visa Consultancy Office in UK
            </h2>
            <div className="accent-rule mx-auto mt-4 mb-5" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Visa Direct Immigration lists the following office locations for enquiries.
              Please contact us before visiting to confirm availability and arrange an appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/40 transition-all duration-300 flex flex-col justify-between group card-lift"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#f4f8fa] text-[#0c4c6d] flex items-center justify-center border border-slate-100 group-hover:bg-[#0c4c6d] group-hover:text-white transition-all duration-300">
                      <Building2 className="w-7 h-7" />
                    </div>
                    {office.isHeadquarters ? (
                      <span className="text-[10px] font-bold text-[#c68a4c] bg-[#c68a4c]/10 px-3 py-1 rounded-full border border-[#c68a4c]/30 uppercase tracking-wider">
                        Headquarters
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                        Regional Office
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#072333] group-hover:text-[#0c4c6d] transition-colors">
                      {office.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#c68a4c] mt-0.5">
                      {office.city}, United Kingdom
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                      <span className="leading-snug text-slate-700">
                        {office.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#c68a4c] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-slate-600 hover:text-[#0c4c6d] font-medium transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#c68a4c] shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-[#072333] hover:text-[#0c4c6d] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${office.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#0c4c6d] hover:bg-[#072333] text-white text-xs font-bold transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Arrange an Appointment</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. CONTACT FORM
      ════════════════════════════════════════════════════════ */}
      <ContactForm />

      {/* ════════════════════════════════════════════════════════
          4. CONTACT US FAQS
      ════════════════════════════════════════════════════════ */}
      <ContactFaqSection />
    </>
  );
}
