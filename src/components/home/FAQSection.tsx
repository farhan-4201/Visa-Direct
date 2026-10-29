import React from "react";
import { FileText, HelpCircle, ChevronDown, Lightbulb, ShieldCheck } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What services does Visa Direct Immigration provide?",
      answer:
        "Visa Direct Immigration advertises support across several UK immigration routes, including spouse and family visas, student visas, visitor visas, sponsor licences, UK Ancestry visas, Charity Worker visas, settlement and British citizenship. Contact the team to confirm whether your particular case falls within its services.",
    },
    {
      question: "Can I get immigration advice in Birmingham, Bristol or Reading?",
      answer:
        "The website lists office locations in all three cities. Contact the business before visiting to confirm current opening arrangements, appointment availability and the services available at your preferred location.",
    },
    {
      question: "Can I get help with a UK visa application?",
      answer:
        "You can enquire about assistance with the visa routes advertised on the website. The type of support available will depend on your circumstances and the service agreed with the business.",
    },
    {
      question: "What documents do I need for a UK visa application?",
      answer:
        "The required documents depend on the immigration route, your circumstances and the applicable rules. These may include identity documents, financial evidence, relationship records, sponsorship information or other supporting documents. Check the current official requirements before submitting an application.",
    },
    {
      question: "Does Visa Direct Immigration guarantee visa approval?",
      answer:
        "No immigration adviser can guarantee a Home Office decision. The outcome depends on the applicable rules, the evidence provided and the decision made by the relevant UK authorities.",
    },
    {
      question: "How do I arrange a consultation?",
      answer:
        "You can use the website's consultation or contact form, or call 0333 0040117. Explain the type of visa you are considering and ask about consultation availability, fees and the scope of the service.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
            Frequently Asked Questions About UK Immigration
          </h2>
          <div className="accent-rule mx-auto mt-4 mb-6" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all hover:border-[#0c4c6d]/30"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f4f8fa] flex items-center justify-center text-[#0c4c6d]">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#072333]">{faq.question}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-[#c68a4c] transform transition-transform duration-300" />
              </button>
              <div className="px-6 pb-5 pl-20 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
