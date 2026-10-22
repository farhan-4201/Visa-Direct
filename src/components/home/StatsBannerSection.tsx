import React from "react";
import { Users, Globe, Award, School } from "lucide-react";

export function StatsBannerSection() {
  const stats = [
    {
      value: "500+",
      label: "Successful Clients",
      subtext: "Personal & corporate visa applicants",
      icon: <Users className="w-8 h-8 text-[#c68a4c]" />,
    },
    {
      value: "70+",
      label: "Countries",
      subtext: "Global applicants represented",
      icon: <Globe className="w-8 h-8 text-[#c68a4c]" />,
    },
    {
      value: "1750+",
      label: "Visa Approvals",
      subtext: "Home Office grants & extensions",
      icon: <Award className="w-8 h-8 text-[#c68a4c]" />,
    },
    {
      value: "140+",
      label: "Universities",
      subtext: "Student admissions assisted",
      icon: <School className="w-8 h-8 text-[#c68a4c]" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#072333] via-[#0c4c6d] to-[#072333] py-16 text-white relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#c68a4c]/40 transition-colors"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-[#e5b37e] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300 font-normal">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
