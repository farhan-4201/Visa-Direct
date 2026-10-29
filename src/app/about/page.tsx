import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  LayoutList,
  Headphones,
  Phone,
  Mail,
  Target,
  Eye,
  Award,
  FileText,
  Calendar,
  Users2,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "About Visa Direct Immigration | UK Visa Advice",
  description:
    "Learn about Visa Direct Immigration and our approach to UK visa and immigration support for individuals, families, workers and businesses.",
};

const whyChooseFeatures = [
  {
    icon: <Target className="w-6 h-6 text-[#c68a4c]" />,
    title: "Guidance Relevant to Your Circumstances",
    desc: "We take your immigration objectives and personal circumstances into account when explaining the options and requirements relevant to your situation.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#c68a4c]" />,
    title: "Clear Communication",
    desc: "We aim to explain application requirements, supporting documents and the steps involved in straightforward language, helping you understand what needs to be done.",
  },
  {
    icon: <LayoutList className="w-6 h-6 text-[#c68a4c]" />,
    title: "A Structured Approach",
    desc: "Immigration applications can involve detailed forms, supporting evidence and specific requirements. We help clients understand the information and documentation relevant to their application.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-[#c68a4c]" />,
    title: "Support Throughout the Process",
    desc: "We aim to keep clients informed about the agreed next steps and provide guidance within the scope of the service arranged.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Contact our team and briefly explain your immigration needs, circumstances and objectives. This helps us understand the nature of your enquiry.",
    icon: <Mail className="w-7 h-7 text-[#0c4c6d]" />,
    tag: "Enquiry",
  },
  {
    number: "02",
    title: "Discuss Your Situation",
    description:
      "Arrange a consultation to discuss your circumstances, immigration history where relevant, and the questions you need answered.",
    icon: <MessageSquare className="w-7 h-7 text-[#0c4c6d]" />,
    tag: "Consultation",
  },
  {
    number: "03",
    title: "Review the Relevant Requirements",
    description:
      "Depending on the service agreed, we help you understand the applicable requirements, supporting documents and information needed for your application.",
    icon: <FileText className="w-7 h-7 text-[#0c4c6d]" />,
    tag: "Review",
  },
  {
    number: "04",
    title: "Agree on the Next Steps",
    description:
      "We explain the proposed next steps and the scope of any further assistance, so you can make an informed decision about how to proceed.",
    icon: <Calendar className="w-7 h-7 text-[#0c4c6d]" />,
    tag: "Decision",
  },
];

export default function AboutPage() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <>
      <PageHeader
        title="About Visa Direct Immigration"
        subtitle="Immigration guidance built around your needs — clear, honest and tailored to your circumstances."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 1. WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c]">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                Immigration Guidance Built Around Your Needs
              </h2>
              <div className="accent-rule" />
              <p className="text-base text-slate-600 leading-relaxed">
                Visa Direct Immigration provides guidance and support to
                individuals, families, students, workers and businesses
                navigating the UK immigration process. We understand that every
                immigration journey is different, with its own requirements,
                circumstances and questions.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our approach is built on clear communication, honest advice and
                a careful understanding of each client&apos;s situation. We aim
                to help you understand your available options, the requirements
                relevant to your application and the steps involved, so you can
                make informed decisions about your next move.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-sm shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0c4c6d] text-[#0c4c6d] font-bold text-sm hover:bg-[#0c4c6d] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#0c4c6d] to-[#072333]">
                <Image
                  src="/images/uk-passport-flag.jpg"
                  alt="UK British passport, Union Jack flag and granted visa legal documentation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 400px, 560px"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl flex items-center gap-4 border border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c68a4c] to-[#b37438] text-white flex flex-col items-center justify-center shrink-0 shadow-lg">
                    <span className="text-xl font-black leading-none">25+</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider">Years</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#072333]">Years of Immigration Experience</div>
                    <div className="text-xs text-slate-500 mt-0.5">Supporting clients across a wide range of UK visa routes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">Our Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">What Drives Us</h2>
            <div className="accent-rule mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#f4f8fa] border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#0c4c6d] group-hover:border-[#0c4c6d] transition-all duration-300">
                <Target className="w-7 h-7 text-[#0c4c6d] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-2">Our Mission</span>
              <h3 className="text-xl font-bold text-[#072333] mb-4">Making Immigration Easier to Understand</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Our mission is to make the UK immigration process easier to understand by providing clear guidance, honest advice and support tailored to each client&apos;s circumstances. We want every client to understand their options, know what is required of them and feel better prepared to make informed decisions about their immigration journey.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#c68a4c]/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#fdf8f4] border border-amber-100 flex items-center justify-center mb-6 group-hover:bg-[#c68a4c] group-hover:border-[#c68a4c] transition-all duration-300">
                <Eye className="w-7 h-7 text-[#c68a4c] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0c4c6d] block mb-2">Our Vision</span>
              <h3 className="text-xl font-bold text-[#072333] mb-4">Building Lasting Trust Through Transparency</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Our vision is to build lasting trust through a client-centred approach to immigration support. We aim to maintain high standards of professionalism, transparency and accuracy while keeping up with changes in UK immigration rules and helping clients navigate their next steps with greater clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#072333] to-[#0c4c6d] p-10 text-white shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c68a4c]/10 rounded-full blur-3xl pointer-events-none" />
                <Award className="w-12 h-12 text-[#c68a4c] mb-6 relative z-10" />
                <h3 className="text-2xl font-bold mb-4 relative z-10 leading-snug">Support for Different Immigration Needs</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                  UK immigration rules vary depending on your circumstances, the type of application and your long-term plans. Visa Direct Immigration supports individuals, families and businesses seeking guidance on a range of UK immigration matters.
                </p>
                <Link
                  href="/services"
                  className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c68a4c] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c]">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                Guidance Across a Range of UK Immigration Routes
              </h2>
              <div className="accent-rule" />
              <p className="text-base text-slate-600 leading-relaxed">
                From family and partner visas to work and study routes, visitor applications, settlement and British citizenship, we help clients understand the relevant requirements and the steps involved in their applications. Our approach begins with understanding your situation so that the guidance provided is relevant to your needs.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are planning to join family in the UK, pursue an employment opportunity, continue your education or explore a route to settlement, we aim to make the process clearer and help you understand what to consider before proceeding.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Family & partner visa routes",
                  "Work and skilled worker applications",
                  "Student visa guidance",
                  "UK settlement & indefinite leave to remain",
                  "British citizenship applications",
                  "Visitor and business visit visas",
                  "Sponsor licence support for businesses",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#c68a4c] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COMMITMENT */}
      <section className="py-20 cta-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-overlay-pattern pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#c68a4c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block bg-[#c68a4c]/20 text-[#f5caa1] border border-[#c68a4c]/40 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Honest Advice.{" "}
              <span className="text-[#f5caa1]">Clear Expectations.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
              We believe that good immigration guidance starts with honesty. Every client&apos;s circumstances are different, and understanding the relevant requirements, possible challenges and available options is an important part of making informed decisions.
            </p>
            <p className="text-base text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
              At Visa Direct Immigration, we aim to communicate clearly, explain the steps involved and provide realistic guidance based on the information available. We do not believe in false promises or guaranteed outcomes. Our commitment is to help clients approach their immigration applications with a clearer understanding of the process and what may be required of them.
            </p>
            <div className="pt-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
              >
                <span>Speak to Our Team</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight mb-4">Choose The Visa You Need</h2>
            <div className="accent-rule mx-auto mb-5" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every immigration journey comes with different requirements and considerations. Explore our services below to learn more about the available routes, their requirements and how we may be able to assist with your application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/40 transition-all duration-300 flex flex-col justify-between group card-lift"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#f4f8fa] border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0c4c6d] transition-all duration-300">
                    <Users2 className="w-8 h-8 text-[#0c4c6d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c68a4c] block mb-2">{service.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0c4c6d] transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.shortDescription}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c4c6d] group-hover:text-[#c68a4c] transition-colors"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/appointment" className="text-[11px] font-semibold text-slate-400 hover:text-slate-700">Consult</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0c4c6d] hover:text-[#083248] bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 transition-colors"
            >
              <span>Explore All Immigration Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE VISA DIRECT */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">A Clearer Approach to Your Immigration Journey</h2>
            <div className="accent-rule mx-auto mt-4 mb-5" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Choosing the right support for an immigration application starts with understanding your circumstances and knowing what to expect. At Visa Direct Immigration, we aim to make the process easier to navigate through clear communication, practical guidance and an approach centred on your individual needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/30 transition-all duration-300 group card-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f4f8fa] border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#072333] transition-all duration-300">
                  <span className="group-hover:[&_svg]:text-white transition-colors duration-300">{feat.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-[#072333] mb-2 group-hover:text-[#0c4c6d] transition-colors">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW OUR PROCESS WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c68a4c] block mb-3">How Our Immigration Process Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">Clear Steps From Your First Enquiry</h2>
            <div className="accent-rule mx-auto mt-4 mb-6" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Every immigration matter is different, but having a clear process can help you understand what to expect. We begin by learning about your circumstances and then discuss the relevant requirements and next steps for the service you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-[#0c4c6d]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="text-5xl font-black text-slate-200 group-hover:text-[#0c4c6d]/10 transition-colors mb-4">{step.number}</div>
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#f4f8fa] border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#0c4c6d] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#072333] mb-2.5 group-hover:text-[#0c4c6d] transition-colors">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium">
                  <span className="text-[#c68a4c] font-bold">Step {idx + 1}</span>
                  <span className="text-slate-500">{step.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30"
            >
              <Calendar className="w-5 h-5 shrink-0" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONTACT CTA */}
      <section className="py-20 bg-[#072333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c68a4c]/20 text-[#f5caa1] border border-[#c68a4c]/30 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              Let&apos;s Discuss Your Immigration Needs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-white">
              Every Immigration Journey Starts With Understanding Your Options
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
              Whether you have questions about a family visa, work or study route, settlement or British citizenship, Visa Direct Immigration can help you explore the relevant requirements and understand your next steps.
            </p>
            <p className="text-sm text-slate-400">
              Get in touch with our team to discuss your circumstances and find out how we may be able to assist with your immigration enquiry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-base shadow-xl shadow-[#c68a4c]/30 hover:shadow-2xl hover:shadow-[#c68a4c]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border border-amber-300/30 w-full sm:w-auto justify-center"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book a Consultation</span>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
              <a
                href="tel:03330040117"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#c68a4c] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c68a4c]" />
                0333 004 0117
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <a
                href="mailto:info@visadirectimmigration.com"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#f5caa1] hover:text-[#c68a4c] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c68a4c]" />
                info@visadirectimmigration.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
