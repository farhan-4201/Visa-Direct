import React from "react";
import { MessageSquareText, Layers, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquareText className="w-8 h-8 text-[#0c4c6d]" />,
      title: "Book a consultation",
      description:
        "Ensure you fully understand all available options before making any immigration decisions. Knowing every possibility helps you choose the best path with confidence and clarity.",
      highlight: "Clarity & Guidance",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#0c4c6d]" />,
      title: "Process",
      description:
        "We guarantee complete transparency throughout your immigration process, keeping you informed and updated at every important step, so you feel secure and supported.",
      highlight: "Total Transparency",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0c4c6d]" />,
      title: "Results",
      description:
        "With the right consultancy and a well-structured process, you’ll experience efficient progress and see positive results in your immigration journey faster than you expect.",
      highlight: "Proven Success",
    },
  ];

  return (
    <section className="py-12 -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-[#0c4c6d]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0c4c6d]/10 flex items-center justify-center mb-6 group-hover:bg-[#0c4c6d] group-hover:text-white transition-colors duration-300">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {item.icon}
                </div>
              </div>

              <div className="text-[11px] font-bold text-[#c68a4c] tracking-wider uppercase mb-1">
                {item.highlight}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0c4c6d] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
