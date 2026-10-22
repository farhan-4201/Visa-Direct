import React from "react";
import Link from "next/link";
import { Compass, Home, Phone, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0c4c6d]/10 text-[#0c4c6d] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-[#0c4c6d]" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-black text-[#0c4c6d] block mb-2">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is currently unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Button href="/" variant="primary" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/services" variant="outline" icon={<Search className="w-4 h-4" />}>
            Browse Visa Services
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need immediate legal assistance? Call us at{" "}
          <a href="tel:03330040117" className="font-bold text-[#0c4c6d] hover:underline">
            0333 0040117
          </a>
        </div>
      </div>
    </div>
  );
}
