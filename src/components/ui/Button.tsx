"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5 font-bold tracking-wide",
    md: "px-6 py-3 text-sm gap-2 font-bold shadow-sm",
    lg: "px-7 py-3.5 text-base gap-2.5 font-extrabold shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#0c4c6d] via-[#0d5980] to-[#072333] hover:from-[#072333] hover:to-[#0c4c6d] text-white shadow-md shadow-[#0c4c6d]/25 hover:shadow-xl hover:shadow-[#0c4c6d]/40 hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#0c4c6d] border border-white/10",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 focus:ring-slate-900 shadow-md hover:shadow-lg",
    accent:
      "bg-gradient-to-r from-[#c68a4c] via-[#cf9456] to-[#b37438] hover:from-[#b37438] hover:to-[#c68a4c] text-white shadow-md shadow-[#c68a4c]/30 hover:shadow-xl hover:shadow-[#c68a4c]/45 hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#c68a4c] border border-amber-300/20",
    outline:
      "border-2 border-[#0c4c6d] text-[#0c4c6d] bg-transparent hover:bg-gradient-to-r hover:from-[#0c4c6d] hover:to-[#072333] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#0c4c6d]/25 hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#0c4c6d]",
    white:
      "bg-white text-[#0c4c6d] hover:bg-slate-50 hover:text-[#072333] hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-0.5 active:translate-y-0 focus:ring-white shadow-md font-bold border border-slate-200/80",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5 shrink-0">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-200 group-hover:translate-x-1 shrink-0">
            {icon}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-200 group-hover:translate-x-1 shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
}
