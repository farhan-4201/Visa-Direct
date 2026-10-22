import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Award,
  SearchCheck,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AboutPreviewSection() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-[#0c4c6d]" />,
      title: "Skilled and Trustworthy Immigration Lawyers",
      desc: "Trust our experienced immigration lawyers to expertly handle your visa applications with precision and care.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#0c4c6d]" />,
      title: "25+ Years of Experience",
      desc: "With years of dedicated experience, our team provides clear guidance to ensure your immigration process is smooth and successful.",
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-[#0c4c6d]" />,
      title: "Complete Transparency",
      desc: "We maintain complete honesty and transparency; you will always be fully informed about every detail of your application.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#0c4c6d]" />,
      title: "Professional Guidance",
      desc: "Receive authentic and professional advice from our immigration experts committed to your case's success.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy and Points */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                See Why You Should Choose Visa Direct
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Embark on Your Path to a Prosperous Future with Visa Direct Immigration Where
              Dreams Become Reality and Opportunities Know No Borders. Our team provides
              rigorous legal attention, strategic documentation, and constant communication
              until your immigration goals are secured.
            </p>

            {/* 4 Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    {pt.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/about" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                More About Us
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Experience Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Box */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#0c4c6d] to-[#072333] p-8 text-white min-h-[360px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 leading-snug">
                    Dedicated Representation for Every Immigration Stage
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                    From preliminary eligibility assessments to tribunal representations, our
                    specialists protect your family's future and business growth with verified legal
                    integrity.
                  </p>
                </div>

                {/* Experience Highlight Box */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c68a4c] to-[#b37438] text-white flex flex-col items-center justify-center shrink-0 shadow-lg">
                    <span className="text-2xl font-black leading-none">25+</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Years</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Years of Legal Experience</div>
                    <div className="text-xs text-slate-300">
                      Guiding thousands of UK visa and settlement applications.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
