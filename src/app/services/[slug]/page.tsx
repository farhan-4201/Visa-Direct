import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Clock,
  Layers,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Visa Direct Immigration",
    };
  }

  return {
    title: `${service.title} Consultants | Visa Direct Immigration`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 6);

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.heroTagline}
        categoryBadge={service.category}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Main Service Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Overview */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] block">
                  Route Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#072333] tracking-tight">
                  About the {service.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.shortDescription} Applying for the {service.title} requires strict
                  compliance with current UK Home Office immigration rules, specified evidence,
                  and timely filing. Our specialist solicitors guide you through every legal nuance
                  to ensure your submission is compliant and successful.
                </p>

                {/* Key Features Bullet points */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">
                    What Our Representation Includes:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Eligibility Criteria Checklist */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0c4c6d]/10 text-[#0c4c6d] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#0c4c6d]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Eligibility Requirements
                    </h3>
                    <p className="text-xs text-slate-500">
                      Standard criteria set out under UK Immigration Rules
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Before applying, candidates and sponsors must demonstrate satisfying all core
                  thresholds:
                </p>

                <ul className="space-y-3 pt-2">
                  {service.eligibilityRequirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#0c4c6d] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Mandatory Documents */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c68a4c]/10 text-[#c68a4c] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#c68a4c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Required Documentation Portfolio
                    </h3>
                    <p className="text-xs text-slate-500">
                      Key evidentiary proof needed for submission
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.documentsRequired.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Processing Steps */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] block mb-1">
                    Application Lifecycle
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Step-by-Step Processing Stages
                  </h3>
                </div>

                <div className="space-y-4">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0c4c6d] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Frequently Asked Questions */}
              {service.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] block mb-1">
                      Legal Clarifications
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                      >
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#0c4c6d] shrink-0" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation Callout */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0c4c6d] to-[#072333] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Ready to Apply for the {service.title}?
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md">
                    Schedule an in-depth video or in-person consultation with our regional legal
                    experts today.
                  </p>
                </div>
                <Button
                  href="/appointment"
                  variant="accent"
                  size="md"
                  icon={<Calendar className="w-4 h-4 text-white" />}
                >
                  Book Assessment
                </Button>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Category Quick Navigation */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0c4c6d]" />
                  <span>Other Visa Pathways</span>
                </h3>

                <ul className="space-y-1.5 text-xs font-semibold">
                  {relatedServices.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        href={`/services/${rel.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50 transition-colors"
                      >
                        <span className="truncate">{rel.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Legal Assistance Card */}
              <div className="bg-gradient-to-br from-[#0c4c6d] to-[#072333] text-white rounded-3xl p-6 shadow-xl space-y-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Phone className="w-5 h-5 text-[#c68a4c]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold">Have Questions on {service.title}?</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Our advisors are ready to assist you right now via direct phone or scheduled
                    video.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#c68a4c]" />
                    <a href="tel:03330040117" className="font-bold text-white hover:underline">
                      0333 0040117
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#c68a4c]" />
                    <a
                      href="mailto:info@visadirectimmigration.com"
                      className="text-slate-300 hover:text-white truncate"
                    >
                      info@visadirectimmigration.com
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="block text-center w-full py-2.5 rounded-xl bg-white text-[#0c4c6d] hover:bg-slate-100 font-bold text-xs shadow-md transition-colors"
                  >
                    Contact Regional Office
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
