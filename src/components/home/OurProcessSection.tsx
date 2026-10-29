import React from "react";
import Link from "next/link";
import { FileText, Calendar, ArrowRight } from "lucide-react";

export function OurProcessSection() {
  const steps = [
    { stepNumber: "01", icon: <FileText className="w-7 h-7 text-[#0c4c6d]" />, title: "Submit Your Enquiry", description: "Complete our online enquiry form with your contact details, the type of visa you are considering and a brief description of your needs." },
    { stepNumber: "02", icon: <Calendar className="w-7 h-7 text-[#0c4c6d]" />, title: "Arrange a Consultation", description: "Book a meeting to discuss your circumstances, ask questions and explore the relevant immigration options." },
    { stepNumber: "03", icon: <FileText className="w-7 h-7 text-[#0c4c6d]" />, title: "Provide the Required Information", description: "Following the initial discussion, you will be advised about the documents and information needed for the agreed service. Sensitive documents should be shared through an appropriate secure channel." },
    { stepNumber: "04", icon: <Calendar className="w-7 h-7 text-[#0c4c6d]" />, title: "Review Your Case and Agree Next Steps", description: "The information provided can be reviewed within the agreed scope of work. The next steps, relevant requirements and any further assistance can then be discussed." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">How Our Immigration Consultation Process Works</h2>
          <div className="accent-rule mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">We use a structured approach to help you understand what is involved in seeking immigration assistance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:bg-white hover:border-[#0c4c6d]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="text-5xl font-black text-slate-200 group-hover:text-[#0c4c6d]/10 transition-colors mb-4">{item.stepNumber}</div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#f4f8fa] border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#0c4c6d] group-hover:text-white transition-colors">{item.icon}</div>
                <h3 className="text-base font-bold text-[#072333] mb-2.5 group-hover:text-[#0c4c6d] transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="text-[#c68a4c] font-bold">Step {idx + 1}</span>
                <span className="font-medium text-slate-500">{idx === 0 ? "Enquiry" : idx === 3 ? "Review" : "Consultation"}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/appointment?consultation_type=process" className="inline-flex items-center gap-2 text-sm font-bold text-[#0c4c6d] hover:text-[#083248] bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 transition-colors">
            <span>Arrange an Immigration Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
