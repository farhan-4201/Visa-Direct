"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I contact Visa Direct Immigration?",
      answer:
        "You can contact Visa Direct Immigration by calling 0333 004 0117, emailing info@visadirectimmigration.com or submitting an enquiry through the website contact form.",
    },
    {
      question: "Can I discuss my immigration circumstances before applying?",
      answer:
        "You can contact the team to enquire about the available consultation options and explain your circumstances. The appropriate next step will depend on the nature of your enquiry.",
    },
    {
      question: "Does Visa Direct Immigration have offices in Birmingham, Bristol and Reading?",
      answer:
        "The website lists offices in all three locations. Contact the team before visiting to confirm the current arrangements and whether an appointment is required.",
    },
    {
      question: "What information should I provide when making an inquiry?",
      answer:
        "Briefly explain the type of visa or immigration matter you need help with and include your preferred contact details. You can provide further information if requested through an appropriate channel.",
    },
    {
      question: "How quickly will I receive a response?",
      answer:
        "Response times may vary depending on enquiry volumes and availability. If you have an urgent deadline, mention it in your enquiry and contact the team directly to explain your circumstances.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60" id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
            Contact Us FAQs
          </h2>
          <div className="accent-rule mx-auto mt-4 mb-5" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find quick answers to common questions about contacting our team and arranging an appointment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-[#0c4c6d]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f4f8fa] flex items-center justify-center text-[#0c4c6d] shrink-0 border border-slate-100">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#072333]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c68a4c] shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 pl-[4.5rem] pr-8 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
