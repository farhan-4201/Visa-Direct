"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
  containerClassName?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackText,
  className = "",
  containerClassName = "",
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt || "Image placeholder"}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500 p-4 text-center rounded-lg border border-slate-200 min-h-[140px] ${containerClassName}`}
      >
        <ImageOff className="w-8 h-8 mb-2 text-slate-400" />
        <span className="text-xs font-semibold text-slate-600 line-clamp-2">
          {fallbackText || alt || "Image unavailable"}
        </span>
        <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
          Visa Direct Asset
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
