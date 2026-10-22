"use client";
// Real logo sourced from live site: visadirectimmigration.com

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Compass,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { rotatingAddresses } from "@/data/officesData";
import { servicesData } from "@/data/servicesData";

export function Header() {
  const pathname = usePathname();
  const [currentAddressIdx, setCurrentAddressIdx] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Rotate top addresses every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAddressIdx((prev) => (prev + 1) % rotatingAddresses.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const businessServices = servicesData.filter((s) => s.category === "Business Visas");
  const personalServices = servicesData.filter((s) => s.category === "Personal Visas");
  const specialtyServices = servicesData.filter((s) => s.category === "Specialty Visas");

  const otherServicesList = [
    { name: "Global Business Mobility", slug: "global-business-mobility" },
    { name: "Hiring Foreign Workers", slug: "hiring-foreign-workers" },
    { name: "UK Graduate Visa", slug: "graduate-visa" },
    { name: "Indefinite Leave to Remain", slug: "indefinite-leave-to-remain" },
    { name: "Innovator Founder Visa", slug: "innovator-visa-uk" },
    { name: "Family & Dependent Visa", slug: "family-visa" },
    { name: "UK Ancestry Visa", slug: "uk-ancestry-visa" },
    { name: "Charity Worker Visa", slug: "charity-worker-visa" },
    { name: "EU Settlement Scheme", slug: "uk-settlement-visa" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* Top Bar with Rotating Address & Direct Contacts */}
      <div className="bg-[#072333] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Rotating Address Ticker */}
          <div className="flex items-center gap-2 text-slate-300 overflow-hidden">
            <MapPin className="w-3.5 h-3.5 text-[#c68a4c] shrink-0" />
            <div className="transition-opacity duration-500 font-medium truncate max-w-md">
              {rotatingAddresses[currentAddressIdx]}
            </div>
          </div>

          {/* Quick Contact Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@visadirectimmigration.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c68a4c]" />
              <span>info@visadirectimmigration.com</span>
            </a>
            <a
              href="tel:03330040117"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#e5b37e] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#c68a4c]" />
              <span>0333 0040117</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-[#c68a4c] bg-[#c68a4c]/15 px-2.5 py-1 rounded text-[11px] font-bold border border-[#c68a4c]/30">
              <ShieldCheck className="w-3 h-3" />
              <span>IAA Regulated · Reg No: F202536890</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center group py-2" aria-label="Visa Direct Immigration - Home">
            <Image
              src="/images/logo-dark.png"
              alt="Visa Direct Immigration"
              width={160}
              height={57}
              className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive("/")
                  ? "text-[#0c4c6d] bg-slate-50"
                  : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive("/about")
                  ? "text-[#0c4c6d] bg-slate-50"
                  : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Popular Services Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("popular")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center gap-1 transition-colors ${
                  activeDropdown === "popular" || pathname.startsWith("/services")
                    ? "text-[#0c4c6d] bg-slate-50"
                    : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
                }`}
                aria-expanded={activeDropdown === "popular"}
              >
                <span>Popular Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "popular" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "popular" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Business Visas Column */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c4c6d]">
                        Business & Corporate Visas
                      </h4>
                      <Link
                        href="/services"
                        className="text-xs text-[#c68a4c] hover:underline font-semibold"
                      >
                        View All
                      </Link>
                    </div>
                    <ul className="space-y-1.5">
                      {businessServices.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#0c4c6d] transition-colors"
                          >
                            <div className="text-sm font-semibold">{service.title}</div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {service.shortDescription}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal & Family Visas Column */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c4c6d]">
                        Personal & Family Visas
                      </h4>
                      <span className="text-xs text-slate-400 font-medium">Fast-Track</span>
                    </div>
                    <ul className="space-y-1.5">
                      {personalServices.slice(0, 4).map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#0c4c6d] transition-colors"
                          >
                            <div className="text-sm font-semibold">{service.title}</div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {service.shortDescription}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Other Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("other")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center gap-1 transition-colors ${
                  activeDropdown === "other"
                    ? "text-[#0c4c6d] bg-slate-50"
                    : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
                }`}
                aria-expanded={activeDropdown === "other"}
              >
                <span>Other Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "other" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "other" && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">
                    Specialized UK Pathways
                  </div>
                  <ul className="space-y-1">
                    {otherServicesList.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={`/services/${item.slug}`}
                          className="flex items-center justify-between p-2 rounded-md text-xs font-semibold text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50 transition-colors"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive("/blog")
                  ? "text-[#0c4c6d] bg-slate-50"
                  : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/success-stories"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive("/success-stories")
                  ? "text-[#0c4c6d] bg-slate-50"
                  : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
              }`}
            >
              Success Stories
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive("/contact")
                  ? "text-[#0c4c6d] bg-slate-50"
                  : "text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Appointment CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/appointment"
              className="group relative overflow-hidden bg-gradient-to-r from-[#0c4c6d] via-[#0d5880] to-[#072333] hover:from-[#072333] hover:to-[#0c4c6d] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-[#0c4c6d]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#0c4c6d]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 border border-white/10"
            >
              <Calendar className="w-4 h-4 text-[#c68a4c] transition-transform duration-300 group-hover:scale-110" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/appointment"
              className="bg-gradient-to-r from-[#0c4c6d] to-[#072333] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#0c4c6d] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Direct contact prompt on mobile */}
          <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between text-xs">
            <div className="font-semibold text-slate-700 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0c4c6d]" />
              <a href="tel:03330040117" className="text-[#0c4c6d] font-bold">
                0333 0040117
              </a>
            </div>
            <span className="text-slate-500 font-medium">Mon-Fri 9am-6pm</span>
          </div>

          <div className="flex flex-col space-y-1 font-semibold text-sm text-slate-800">
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#0c4c6d]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#0c4c6d]"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#0c4c6d]"
            >
              All Visa Services
            </Link>

            {/* Popular Sub-links inside mobile menu */}
            <div className="pl-4 py-1 space-y-1 border-l-2 border-slate-200 text-xs text-slate-600">
              <Link
                href="/services/skilled-worker-visa"
                className="block py-1 hover:text-[#0c4c6d]"
              >
                • Skilled Worker Visa
              </Link>
              <Link
                href="/services/sponsor-license"
                className="block py-1 hover:text-[#0c4c6d]"
              >
                • Sponsor License
              </Link>
              <Link
                href="/services/spouse-visa"
                className="block py-1 hover:text-[#0c4c6d]"
              >
                • Spouse & Partner Visa
              </Link>
              <Link
                href="/services/british-citizenship"
                className="block py-1 hover:text-[#0c4c6d]"
              >
                • British Citizenship
              </Link>
              <Link
                href="/services/uk-student-visa"
                className="block py-1 hover:text-[#0c4c6d]"
              >
                • Student Visa
              </Link>
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#0c4c6d]"
            >
              Blog & News
            </Link>
            <Link
              href="/success-stories"
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#0c4c6d]"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#0c4c6d]"
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className="px-3 py-2 rounded-md text-[#0c4c6d] font-bold bg-[#0c4c6d]/10 flex items-center justify-between"
            >
              <span>Book Online Consultation</span>
              <Calendar className="w-4 h-4 text-[#0c4c6d]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
