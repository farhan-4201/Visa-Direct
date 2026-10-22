"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CallbackFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "Business",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    return newErrors;
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

    // Simulated callback dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-20 bg-white" id="callback-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Side: Contact Information Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c4c6d] to-[#072333] p-8 sm:p-12 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-[#f5caa1] uppercase tracking-wider block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Contact Us for Visa & Immigration
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our Bristol and Birmingham offices. We offer tailored case
                assessments, document reviews, and transparent legal advice.
              </p>

              {/* Contact Information Points */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#c68a4c]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Head Office Address
                    </h3>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      66-68 Hagley Rd, Birmingham B16 8PF
                    </p>
                    <p className="text-xs text-slate-400">
                      Bristol: Park House, 10 Park St, BS1 5HX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#c68a4c]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Email Address
                    </h3>
                    <a
                      href="mailto:info@visadirectimmigration.com"
                      className="text-sm font-semibold text-white hover:text-[#f5caa1] transition-colors block mt-0.5"
                    >
                      info@visadirectimmigration.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#c68a4c]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Direct Telephone
                    </h3>
                    <a
                      href="tel:03330040117"
                      className="text-sm font-bold text-white hover:text-[#f5caa1] transition-colors block mt-0.5"
                    >
                      0333 0040117
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom guarantee */}
            <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Confidential, GDPR-compliant legal assessments.</span>
            </div>
          </div>

          {/* Right Side: Request a Callback Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex flex-col justify-center">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="text-center py-10 px-4 space-y-4 animate-in fade-in zoom-in duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Callback Request Submitted!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. An immigration specialist will
                  review your inquiry regarding <strong>{formData.visaType} visas</strong> and call
                  you back within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      visaType: "Business",
                      message: "",
                    });
                  }}
                  className="mt-4 text-xs font-bold text-[#0c4c6d] hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#c68a4c] uppercase tracking-wider block mb-1">
                    Free Consultation Assessment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072333] tracking-tight">
                    Request a Call Back from Our Immigration Experts
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="cb-name"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="cb-name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-colors ${
                          errors.name
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-300 bg-white"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="cb-email"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="cb-email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-colors ${
                          errors.email
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-300 bg-white"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="cb-phone"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="cb-phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="07123 456789"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] transition-colors ${
                          errors.phone
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-300 bg-white"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Type of Visa */}
                    <div>
                      <label
                        htmlFor="cb-visatype"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Type of Visa
                      </label>
                      <select
                        id="cb-visatype"
                        value={formData.visaType}
                        onChange={(e) =>
                          setFormData({ ...formData, visaType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0c4c6d]"
                      >
                        <option value="Business">Business / Sponsor License</option>
                        <option value="Personal">Personal / Spouse / Family</option>
                        <option value="Student">Student / Graduate</option>
                        <option value="Settlement">Settlement & Citizenship</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="cb-message"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="cb-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your current visa situation, deadlines, or requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0c4c6d] hover:bg-[#083248] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Callback Request</span>
                          <Send className="w-4 h-4 text-[#c68a4c]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
