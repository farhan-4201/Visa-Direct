import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { AppointmentScheduler } from "@/components/appointment/AppointmentScheduler";
import { CheckCircle2, ShieldCheck, Clock, FileCheck2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Visa Direct Immigration",
  description:
    "Schedule an initial case assessment with a qualified UK immigration solicitor. Choose between online video, telephone, or in-person consultations.",
};

export default function AppointmentPage() {
  const preparationTips = [
    {
      title: "Current Immigration Status",
      desc: "Have details of your current visa validity date and BRP or eVisa reference ready.",
    },
    {
      title: "Previous Refusal Letters",
      desc: "If you have experienced a refusal, have the Home Office decision letter available for review.",
    },
    {
      title: "Financial Evidence",
      desc: "For family and spouse visas, estimate gross annual employment salary or cash savings.",
    },
    {
      title: "Questions & Deadlines",
      desc: "Prepare any urgent timeline constraints or specific questions for your solicitor.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Schedule a dedicated one-on-one consultation with our senior immigration specialists."
        breadcrumbs={[{ label: "Appointment" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Interactive Multi-Step Scheduler */}
          <AppointmentScheduler />

          {/* Preparation Advice */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 text-[#0c4c6d] flex items-center justify-center">
                <FileCheck2 className="w-6 h-6 text-[#0c4c6d]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  How to Prepare for Your Consultation
                </h3>
                <p className="text-xs text-slate-500">
                  Make the most of your strategy session by gathering key documents
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {preparationTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1"
                >
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c68a4c] shrink-0" />
                    <span>{tip.title}</span>
                  </div>
                  <p className="text-slate-600 pl-6 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All consultations are strictly private, privileged, and confidential.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
