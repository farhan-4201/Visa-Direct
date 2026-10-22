import React from "react";
import Link from "next/link";
import { FileText, CalendarCheck, FolderArchive, CheckCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HowWeWorkSection() {
  const steps = [
    {
      stepNumber: "01",
      icon: <FileText className="w-7 h-7 text-[#0c4c6d]" />,
      title: "Fill in the Form",
      description:
        "Filling out the form on our website with a clear message will help our experts in assessing your scenario and assisting you promptly.",
    },
    {
      stepNumber: "02",
      icon: <CalendarCheck className="w-7 h-7 text-[#0c4c6d]" />,
      title: "Book a Meeting with Our Expert",
      description:
        "After submitting the form, schedule a meeting with our experts using our online booking system to discuss your needs, ask questions, and plan next steps.",
    },
    {
      stepNumber: "03",
      icon: <FolderArchive className="w-7 h-7 text-[#0c4c6d]" />,
      title: "Provide the Required Documents",
      description:
        "Following your initial meeting, crucial documents are compiled using a customized checklist and submission instructions via our secure client portal.",
    },
    {
      stepNumber: "04",
      icon: <CheckCheck className="w-7 h-7 text-[#0c4c6d]" />,
      title: "Review and Finalize",
      description:
        "Upon receiving all documentation, our legal team analyzes everything comprehensively, drafts detailed legal representations, and submits your application.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight mb-3">
              Following Steps to Apply for Your Visa
            </h2>
            <div className="accent-rule mb-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Visa Direct Immigration, we aim to provide a seamless and efficient process for our
              clients. Whether you need assistance for personal or business needs, our structured
              4-step approach ensures optimal support.
            </p>
          </div>

          <div>
            <Button
              href="/contact"
              variant="outline"
              icon={<HelpCircle className="w-4 h-4 text-[#c68a4c]" />}
            >
              Need Help? Contact Us
            </Button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:bg-white hover:border-[#0c4c6d]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step indicator watermark */}
              <div className="text-5xl font-black text-slate-200 group-hover:text-[#0c4c6d]/10 transition-colors mb-4">
                {item.stepNumber}
              </div>

              <div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#0c4c6d] transition-colors">
                  <div className="group-hover:[&_svg]:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-[#0c4c6d] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Phase {item.stepNumber}</span>
                <span className="text-[#c68a4c] font-bold">Standard Procedure</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
