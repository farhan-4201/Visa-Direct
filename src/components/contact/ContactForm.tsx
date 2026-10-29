"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Building2,
  FileQuestion,
  MessageSquare,
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    office: "Birmingham Office",
    visaType: "Family & Partner Visa",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Please briefly describe your immigration enquiry";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-form" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 bg-white">
          {/* Left Side: Summary & Contact Points */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c4c6d] via-[#08354d] to-[#072333] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#c68a4c]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0c4c6d]/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#f5caa1] uppercase tracking-wider block mb-2">
                  Direct Immigration Enquiries
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Send Your Enquiry
                </h3>
              </div>

              <div className="w-12 h-1 bg-gradient-to-r from-[#c68a4c] to-[#e2b07a] rounded-full" />

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Briefly explain your immigration needs, circumstances, and objectives. Our specialist immigration advisors will review your enquiry and provide clear guidance on the relevant next steps.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#f5caa1] shrink-0 border border-white/15">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300">Telephone Line</div>
                    <a
                      href="tel:03330040117"
                      className="font-bold text-white hover:text-[#f5caa1] transition-colors"
                    >
                      0333 004 0117
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#f5caa1] shrink-0 border border-white/15">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300">Email Address</div>
                    <a
                      href="mailto:info@visadirectimmigration.com"
                      className="font-bold text-white hover:text-[#f5caa1] transition-colors"
                    >
                      info@visadirectimmigration.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#f5caa1] shrink-0 border border-white/15">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300">Office Working Hours</div>
                    <div className="font-semibold text-white">
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-[#c68a4c] shrink-0" />
                <span>
                  All enquiries are treated with the strictest confidentiality under UK data protection standards.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#072333]">
                  Enquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Visa Direct Immigration. One of our specialist advisors will review your enquiry and contact you via phone or email shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        office: "Birmingham Office",
                        visaType: "Family & Partner Visa",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="text-xl font-extrabold text-[#072333] tracking-tight">
                    Contact Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details and tell us about your immigration enquiry.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border ${
                          errors.name ? "border-red-500 bg-red-50/30" : "border-slate-300"
                        } focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="sarah@example.com"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border ${
                          errors.email ? "border-red-500 bg-red-50/30" : "border-slate-300"
                        } focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-all`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="07123 456789"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border ${
                          errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-300"
                        } focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Preferred Office */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Preferred Office Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.office}
                        onChange={(e) =>
                          setFormData({ ...formData, office: e.target.value })
                        }
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Birmingham Office">Birmingham Office (66-68 Hagley Rd)</option>
                        <option value="Bristol Office">Bristol Office (10 Park St)</option>
                        <option value="Reading Office">Reading Office (200 Brook Dr)</option>
                        <option value="Online / Remote Consultation">Online / Remote Consultation</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Visa Category */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Visa / Immigration Service
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <FileQuestion className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.visaType}
                      onChange={(e) =>
                        setFormData({ ...formData, visaType: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-all appearance-none cursor-pointer"
                    >
                      <option value="Family & Partner Visa">Spouse / Partner / Family Visa</option>
                      <option value="Skilled Worker Visa">Skilled Worker / Employment Route</option>
                      <option value="Sponsor Licence">Business Sponsor Licence</option>
                      <option value="Student Visa">Student Visa (UK Higher Education)</option>
                      <option value="Settlement & ILR">Settlement (Indefinite Leave to Remain)</option>
                      <option value="British Citizenship">British Citizenship / Naturalisation</option>
                      <option value="Visitor Visa">Standard Visitor / Business Visitor</option>
                      <option value="Other Immigration Enquiry">Other Immigration Matter</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Briefly Explain Your Enquiry <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-slate-400 pointer-events-none">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly explain your immigration needs, circumstances, and objectives..."
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border ${
                        errors.message ? "border-red-500 bg-red-50/30" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-all`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white font-extrabold text-sm shadow-lg shadow-[#c68a4c]/30 hover:shadow-xl hover:shadow-[#c68a4c]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-amber-300/30 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Send an Enquiry</span>
                        <Send className="w-4 h-4 shrink-0" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
