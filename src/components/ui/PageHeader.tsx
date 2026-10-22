import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  categoryBadge?: string;
  bgImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
  categoryBadge,
  bgImage,
}: PageHeaderProps) {
  const dynamicBgStyle = bgImage
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(7, 35, 51, 0.90) 0%, rgba(12, 76, 109, 0.82) 100%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section
      style={dynamicBgStyle}
      className={`page-header-bg relative overflow-hidden py-20 md:py-28 text-white`}
    >
      {/* Dark overlay for maximum text legibility across all background imagery */}
      <div className="absolute inset-0 bg-[#072333]/40 pointer-events-none" />

      {/* Dot-grid texture overlay */}
      <div className="absolute inset-0 hero-overlay-pattern pointer-events-none" />

      {/* Amber orb accent highlight */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#c68a4c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#0c4c6d]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {categoryBadge && (
          <div className="mb-4">
            <span className="inline-block bg-[#c68a4c]/20 text-[#f5caa1] border border-[#c68a4c]/40 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              {categoryBadge}
            </span>
          </div>
        )}

        {/* Gold accent rule above title */}
        <div className="flex justify-center mb-4">
          <div className="accent-rule" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-[1.1]">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 mb-8 font-light leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-300 bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="hover:text-[#c68a4c] transition-colors flex items-center gap-1 font-medium"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={index} className="inline-flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#c68a4c] transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#f5caa1] font-bold" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c68a4c]/50 to-transparent" />
    </section>
  );
}
