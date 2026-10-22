import React from "react";
import Link from "next/link";
import {
  Briefcase,
  HeartHandshake,
  GraduationCap,
  Globe2,
  BookOpen,
  Compass,
  ShieldCheck,
  FileCheck2,
  Users,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

export function ServicesGridSection() {
  // Helper to resolve icon by name
  const getIcon = (name: string) => {
    switch (name) {
      case "Briefcase":
        return <Briefcase className="w-8 h-8 text-[#0c4c6d]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-8 h-8 text-[#0c4c6d]" />;
      case "GraduationCap":
        return <GraduationCap className="w-8 h-8 text-[#0c4c6d]" />;
      case "Globe2":
        return <Globe2 className="w-8 h-8 text-[#0c4c6d]" />;
      case "BookOpen":
        return <BookOpen className="w-8 h-8 text-[#0c4c6d]" />;
      case "Compass":
        return <Compass className="w-8 h-8 text-[#0c4c6d]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-[#0c4c6d]" />;
      case "FileCheck2":
        return <FileCheck2 className="w-8 h-8 text-[#0c4c6d]" />;
      default:
        return <Users className="w-8 h-8 text-[#0c4c6d]" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight mb-4">
            Choose the Right UK Visa Service
          </h2>
          <div className="accent-rule mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We’ll help you with whatever type of visa needs you require. Helping you with utmost
            honesty, precision, and legal integrity.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-[#f4f8fa] border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0c4c6d] transition-all duration-300">
                  <div className="group-hover:[&_svg]:text-white transition-colors duration-200">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Category tag */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c68a4c] block mb-2">
                  {service.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0c4c6d] transition-colors">
                  <Link href={`/services/${service.slug}`} className="focus:outline-none">
                    {service.title}
                  </Link>
                </h3>

                {/* Short description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c4c6d] group-hover:text-[#c68a4c] transition-colors"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/appointment"
                  className="text-[11px] font-semibold text-slate-400 hover:text-slate-700"
                >
                  Consult
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Footer Prompt */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0c4c6d] hover:text-[#083248] bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 transition-colors"
          >
            <span>View Full Scope of UK Immigration Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
