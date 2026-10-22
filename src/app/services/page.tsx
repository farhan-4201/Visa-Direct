import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "UK Visa & Immigration Services | Visa Direct Immigration",
  description:
    "Explore our complete range of UK visa services across business sponsorship, personal & spouse visas, ancestry, student routes, and British citizenship.",
};

export default function ServicesPage() {
  const businessVisas = servicesData.filter((s) => s.category === "Business Visas");
  const personalVisas = servicesData.filter((s) => s.category === "Personal Visas");
  const specialtyVisas = servicesData.filter((s) => s.category === "Specialty Visas");

  return (
    <>
      <PageHeader
        title="UK Immigration Services"
        subtitle="Specialist legal assistance across corporate sponsorship, skilled work, family visas, and citizenship."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Intro overview */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] block">
              Tailored Legal Representation
            </span>
            <h2 className="text-3xl font-extrabold text-[#072333] tracking-tight">
              Navigating UK Immigration Law with Precision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every UK visa route carries strict evidentiary requirements set by the Home
              Office. Our solicitors assess your circumstances, verify documentation against
              immigration rules, and prepare an unassailable application bundle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Category 1: Business Visas */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d] text-white flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#c68a4c]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Business & Corporate Immigration
                </h3>
                <p className="text-xs text-slate-500">
                  Employer sponsorship licenses, skilled workers, and corporate mobility
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessVisas.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#0c4c6d]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-[#0c4c6d] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#0c4c6d] hover:text-[#c68a4c] inline-flex items-center gap-1"
                    >
                      <span>Explore Requirements</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/appointment"
                      className="text-[11px] font-semibold text-slate-400 hover:text-slate-800"
                    >
                      Consult
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Personal & Family Visas */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d] text-white flex items-center justify-center">
                <Users className="w-5 h-5 text-[#c68a4c]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Personal, Family & Citizenship Routes
                </h3>
                <p className="text-xs text-slate-500">
                  Spouses, civil partners, dependent relatives, students, and naturalisation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalVisas.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#0c4c6d]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-[#0c4c6d] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#0c4c6d] hover:text-[#c68a4c] inline-flex items-center gap-1"
                    >
                      <span>Explore Requirements</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/appointment"
                      className="text-[11px] font-semibold text-slate-400 hover:text-slate-800"
                    >
                      Consult
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Specialty & Ancestry Visas */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-[#0c4c6d] text-white flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#c68a4c]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Specialty & Ancestral Pathways
                </h3>
                <p className="text-xs text-slate-500">
                  Commonwealth ancestry, charity workers, and EU scheme settlements
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialtyVisas.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#0c4c6d]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-[#0c4c6d] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#0c4c6d] hover:text-[#c68a4c] inline-flex items-center gap-1"
                    >
                      <span>Explore Requirements</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/appointment"
                      className="text-[11px] font-semibold text-slate-400 hover:text-slate-800"
                    >
                      Consult
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-[#072333] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Unsure Which UK Visa Category Applies to You?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Speak directly with our qualified immigration specialists. We assess your background,
            employment status, and goals to recommend the most reliable pathway.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/appointment"
              variant="accent"
              size="lg"
              icon={<Calendar className="w-4 h-4 text-white" />}
            >
              Book an Assessment
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#072333]">
              Contact Regional Office
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
