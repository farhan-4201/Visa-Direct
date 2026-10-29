import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About Visa Direct Immigration | UK Visa Advice",
  description: "Learn about Visa Direct Immigration and our approach to UK visa and immigration support for individuals, families, workers and businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Visa Direct Immigration"
        subtitle="Dedicated legal practitioners offering straightforward, honest, and expert UK visa consultancy."
        breadcrumbs={[{ label: "About Us" }]}
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
                About Visa Direct Immigration
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Immigration Guidance Built Around Your Needs. Visa Direct Immigration
                provides guidance and support to individuals, families, students, workers and
                businesses navigating the UK immigration process. We understand that every
                immigration journey is different, with its own requirements, circumstances and
                questions.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our approach is built on clear communication, honest advice and a careful
                understanding of each client's situation. We aim to help you understand your
                available options, the requirements relevant to your application and the
                steps involved, so you can make informed decisions about your next move.
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="relative h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#0c4c6d] to-[#072333]">
                <Image
                  src="https://visadirectimmigration.com/wp-content/uploads/2024/06/about_img-2-1-1.jpeg"
                  alt="Immigration consultation office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 400px, 500px"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[280px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://visadirectimmigration.com/wp-content/uploads/2024/06/about_img-1-1.jpeg"
                  alt="Immigration consultant meeting"
                  fill
                  sizes="280px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}