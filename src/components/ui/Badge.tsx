import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "neutral" | "success" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#0c4c6d]/10 text-[#0c4c6d] border border-[#0c4c6d]/20",
    accent: "bg-[#c68a4c]/15 text-[#b3773b] border border-[#c68a4c]/30 font-semibold",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    outline: "border border-slate-300 text-slate-600 bg-white",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
