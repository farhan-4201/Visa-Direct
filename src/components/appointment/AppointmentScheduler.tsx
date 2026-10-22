"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  User,
} from "lucide-react";

interface BookingState {
  consultationType: string;
  consultationLocation: string;
  selectedDate: string;
  selectedTime: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export function AppointmentScheduler() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [booking, setBooking] = useState<BookingState>({
    consultationType: "video",
    consultationLocation: "Online Video Meeting",
    selectedDate: "2026-10-26",
    selectedTime: "10:00 AM",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const consultationTypes = [
    {
      id: "video",
      title: "Online Video Consultation",
      duration: "30 Minutes",
      fee: "Initial Case Evaluation",
      description: "Secure one-to-one consultation via Microsoft Teams or Zoom with a senior solicitor.",
      icon: <Video className="w-5 h-5 text-[#0c4c6d]" />,
      location: "Online Video Meeting",
    },
    {
      id: "in-person-birmingham",
      title: "Birmingham Office (In-Person)",
      duration: "45 Minutes",
      fee: "Face-to-Face Strategy Session",
      description: "Meet in person at 66-68 Hagley Rd, Birmingham B16 8PF.",
      icon: <MapPin className="w-5 h-5 text-[#0c4c6d]" />,
      location: "Birmingham Office",
    },
    {
      id: "in-person-bristol",
      title: "Bristol Office (In-Person)",
      duration: "45 Minutes",
      fee: "Face-to-Face Strategy Session",
      description: "Meet in person at Park House, 10 Park St, Bristol BS1 5HX.",
      icon: <MapPin className="w-5 h-5 text-[#0c4c6d]" />,
      location: "Bristol Office",
    },
    {
      id: "phone",
      title: "Direct Telephone Assessment",
      duration: "20 Minutes",
      fee: "Rapid Assessment",
      description: "Direct call with an immigration case specialist to assess eligibility.",
      icon: <Phone className="w-5 h-5 text-[#0c4c6d]" />,
      location: "Telephone Call",
    },
  ];

  const availableDates = [
    { date: "2026-10-26", label: "Mon, 26 Oct" },
    { date: "2026-10-27", label: "Tue, 27 Oct" },
    { date: "2026-10-28", label: "Wed, 28 Oct" },
    { date: "2026-10-29", label: "Thu, 29 Oct" },
    { date: "2026-10-30", label: "Fri, 30 Oct" },
  ];

  const availableTimes = [
    "09:30 AM",
    "10:00 AM",
    "11:15 AM",
    "01:30 PM",
    "02:45 PM",
    "04:00 PM",
    "05:15 PM",
  ];

  const handleNextStep = async () => {
    if (step === 3) {
      const errors: Record<string, string> = {};
      if (!booking.fullName.trim()) errors.fullName = "Full name is required";
      if (!booking.email.trim()) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(booking.email)) {
        errors.email = "Please enter a valid email address";
      }
      if (!booking.phone.trim()) errors.phone = "Phone number is required";

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});

      // Advance to confirmation step immediately — email sends in background
      setStep(4);

      // Fire Resend email
      setIsSending(true);
      setEmailError(null);
      try {
        const selectedType = consultationTypes.find(
          (t) => t.id === booking.consultationType
        );
        const res = await fetch("/api/appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: booking.fullName,
            email: booking.email,
            phone: booking.phone,
            consultationType: selectedType?.title ?? booking.consultationType,
            selectedDate: booking.selectedDate,
            selectedTime: booking.selectedTime,
            notes: booking.notes,
          }),
        });
        if (res.ok) {
          setEmailSent(true);
        } else {
          const data = await res.json();
          setEmailError(data.error ?? "Could not send confirmation email.");
        }
      } catch {
        setEmailError("Network error sending confirmation.");
      } finally {
        setIsSending(false);
      }
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      {/* Progress Steps Header */}
      <div className="bg-[#072333] text-white p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#c68a4c] uppercase tracking-wider block">
            Step {step} of 4
          </span>
          <h2 className="text-xl font-bold">
            {step === 1 && "Select Consultation Format"}
            {step === 2 && "Choose Date & Time Slot"}
            {step === 3 && "Your Contact Information"}
            {step === 4 && "Appointment Confirmed"}
          </h2>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === s
                  ? "bg-[#c68a4c] text-white ring-2 ring-white/30"
                  : step > s
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-700 text-slate-400"
              }`}
            >
              {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* Step 1: Select Format */}
        {step === 1 && (
          <div className="space-y-6">
            <p className="text-sm text-slate-600">
              Please choose how you would prefer to meet with your immigration solicitor:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      consultationType: type.id,
                      consultationLocation: type.location,
                    })
                  }
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    booking.consultationType === type.id
                      ? "border-[#0c4c6d] bg-sky-50/40 shadow-md ring-1 ring-[#0c4c6d]"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-200">
                        {type.icon}
                      </div>
                      <span className="text-xs font-bold text-[#c68a4c] bg-[#c68a4c]/10 px-2 py-0.5 rounded">
                        {type.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {type.title}
                    </h3>

                    <p className="text-xs text-slate-600 mb-4">{type.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{type.fee}</span>
                    <span className="text-[#0c4c6d]">
                      {booking.consultationType === type.id ? "Selected ✓" : "Select"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-end">
              <button
                onClick={handleNextStep}
                className="px-6 py-2.5 rounded-lg bg-[#0c4c6d] hover:bg-[#083248] text-white text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Picker */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Available Consultation Dates
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {availableDates.map((item) => (
                  <button
                    key={item.date}
                    onClick={() => setBooking({ ...booking, selectedDate: item.date })}
                    className={`p-3 rounded-xl text-center border-2 transition-all cursor-pointer ${
                      booking.selectedDate === item.date
                        ? "border-[#0c4c6d] bg-[#0c4c6d] text-white shadow-md"
                        : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                    }`}
                  >
                    <Calendar className="w-4 h-4 mx-auto mb-1 opacity-80" />
                    <span className="text-xs font-bold block">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Time Slot (UK Time - GMT)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setBooking({ ...booking, selectedTime: time })}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      booking.selectedTime === time
                        ? "border-[#0c4c6d] bg-sky-50 text-[#0c4c6d] ring-2 ring-[#0c4c6d]"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <div>
                Selected: <strong>{booking.selectedDate}</strong> at{" "}
                <strong>{booking.selectedTime}</strong> ({booking.consultationLocation})
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-[#0c4c6d] font-semibold hover:underline"
              >
                Change format
              </button>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                className="px-6 py-2.5 rounded-lg bg-[#0c4c6d] hover:bg-[#083248] text-white text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Your Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Form Details */}
        {step === 3 && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">
              Please provide your contact information so we can confirm your booking and send
              preparation guidelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Legal Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={booking.fullName}
                  onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] ${
                    formErrors.fullName ? "border-red-400 bg-red-50/20" : "border-slate-300"
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={booking.email}
                  onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] ${
                    formErrors.email ? "border-red-400 bg-red-50/20" : "border-slate-300"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Contact Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={booking.phone}
                onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                placeholder="07123 456789"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] ${
                  formErrors.phone ? "border-red-400 bg-red-50/20" : "border-slate-300"
                }`}
              />
              {formErrors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{formErrors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Case Background or Key Questions (Optional)
              </label>
              <textarea
                rows={3}
                value={booking.notes}
                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                placeholder="Provide visa category of interest, relevant deadlines, or previous refusal history..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d] resize-none"
              />
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                className="px-6 py-2.5 rounded-lg bg-[#0c4c6d] hover:bg-[#083248] text-white text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Confirm Appointment</span>
                <CheckCircle2 className="w-4 h-4 text-[#c68a4c]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Booking Confirmation */}
        {step === 4 && (
          <div
            role="status"
            aria-live="polite"
            className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Booking Reference: VD-{String(Date.now()).slice(-6)}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#072333]">
                Your Consultation is Scheduled!
              </h3>

              {/* Resend email status */}
              {isSending && (
                <p className="text-sm text-slate-500 mt-2 flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-[#0c4c6d] border-t-transparent rounded-full animate-spin" />
                  Sending confirmation email to {booking.email}…
                </p>
              )}
              {emailSent && !isSending && (
                <p className="text-sm text-emerald-600 font-semibold mt-2 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Confirmation email sent to <strong>{booking.email}</strong>
                </p>
              )}
              {emailError && !isSending && (
                <p className="text-sm text-amber-600 mt-2 max-w-md mx-auto">
                  <strong>Note:</strong> {emailError} — our team will still contact you within 24 hours.
                </p>
              )}
              {!emailSent && !isSending && !emailError && (
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Our team will confirm your appointment to{" "}
                  <strong>{booking.email}</strong> within 24 business hours.
                </p>
              )}
            </div>

            {/* Appointment Summary Box */}
            <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Applicant:</span>
                <span className="font-bold text-slate-900">{booking.fullName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Email:</span>
                <span className="font-bold text-slate-900">{booking.email}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Session:</span>
                <span className="font-bold text-slate-900">{booking.consultationLocation}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Date & Time:</span>
                <span className="font-bold text-[#0c4c6d]">
                  {booking.selectedDate} at {booking.selectedTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Phone:</span>
                <span className="font-bold text-slate-900">{booking.phone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setStep(1);
                  setEmailSent(false);
                  setEmailError(null);
                  setBooking({
                    consultationType: "video",
                    consultationLocation: "Online Video Meeting",
                    selectedDate: "2026-10-26",
                    selectedTime: "10:00 AM",
                    fullName: "",
                    email: "",
                    phone: "",
                    notes: "",
                  });
                }}
                className="text-xs font-bold text-[#0c4c6d] hover:underline"
              >
                Book another appointment
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
