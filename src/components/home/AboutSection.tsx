import React from "react";
import Link from "next/link";
import { Award, ArrowRight, FileText, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const points = [
    { icon: <Award className="w-6 h-6 text-[#0c4c6d]" />, title: "Skilled and Trustworthy Immigration Lawyers", desc: "Trust our experienced immigration lawyers to expertly handle your visa applications with precision and care." },
    { icon: <FileText className="w-6 h-6 text-[#0c4c6d]" />, title: "25+ Years of Experience", desc: "With years of dedicated experience, our team provides clear guidance to ensure your immigration process is smooth and successful." },
    { icon: <ShieldCheck className="w-6 h-6 text-[#0c4c6d]" />, title: "Complete Transparency", desc: "We maintain complete honesty and transparency; you will always be fully informed about every detail of your application." },
    { icon: <FileText className="w-6 h-6 text-[#0c4c6d]" />, title: "Professional Guidance", desc: "Receive authentic and professional advice from our immigration experts committed to your case's success." },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">About Visa Direct Immigration</h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">Immigration Guidance Built Around Your Circumstances. Visa Direct Immigration supports people and businesses navigating UK visa and immigration processes. We understand that an application can involve important decisions about family life, education, employment or future plans.</p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">Our approach focuses on understanding your circumstances, explaining the relevant requirements and helping you prepare for the next stage of your immigration journey. From family and partner visas to work-related immigration, student applications, settlement and citizenship, our aim is to provide clear information and support suited to the service you need.</p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">Whether you are seeking immigration advice in Birmingham, Bristol or Reading, you can contact our team to discuss your requirements and available consultation arrangements.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">{pt.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-[#072333] mb-1">{pt.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#0c4c6d] to-[#072333] p-8 text-white min-h-[360px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 leading-snug">Expertise You Can Trust, Guidance You Can Follow</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">Our team provides rigorous legal attention, strategic documentation, and constant communication until your immigration goals are secured. Welcome to Visa Direct Immigration.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c68a4c] to-[#b37438] text-white flex flex-col items-center justify-center shrink-0 shadow-lg"><span className="text-2xl font-black leading-none">25+</span><span className="text-[10px] font-bold uppercase tracking-wider">Years</span></div>
                  <div><div className="text-sm font-bold text-white">Years of Legal Experience</div><div className="text-xs text-slate-300">Guiding thousands of UK visa and settlement applications.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
