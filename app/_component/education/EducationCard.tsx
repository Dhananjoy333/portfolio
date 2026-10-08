import type React from "react";
import Image from "next/image";

export interface EducationItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  logo: string;
  annotation?: string;
  variant: "cream" | "white" | "yellow";
  position: "left" | "right";
  rotation: string;
}

interface EducationCardProps {
  item: EducationItem;
}

export default function EducationCard({ item }: EducationCardProps) {
  const variantStyles = {
    yellow:
      "bg-[#FEF3C7] border-amber-200/80 text-neutral-900 shadow-[0_12px_32px_rgba(251,191,36,0.1)]",
    white:
      "bg-white border-neutral-200/80 text-neutral-900 shadow-[0_14px_34px_rgba(0,0,0,0.05)]",
    cream:
      "bg-[#FFFDF5] border-amber-200/60 text-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,0.04)]",
  };

  const pillStyles: Record<string, string> = {
    "2016": "bg-amber-100/90 text-amber-900 border-amber-200/80",
    "2018": "bg-sky-50 text-sky-900 border-sky-200/70",
    "2024": "bg-amber-100/90 text-amber-900 border-amber-200/80",
    "2026": "bg-emerald-50 text-emerald-900 border-emerald-200/70",
  };

  return (
    <div
      className={`relative z-10 w-full max-w-120 p-6 sm:p-7 rounded-3xl border ${
        variantStyles[item.variant]
      } ${item.rotation} transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5`}
    >
      {/* Top header row: Logo + Year Pill */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200/80 p-1.5 shadow-2xs flex items-center justify-center shrink-0">
          <Image
            src={item.logo}
            alt={`${item.institution} logo`}
            width={44}
            height={44}
            className="w-full h-full object-contain"
          />
        </div>

        <span
          className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs select-none ${
            pillStyles[item.year] ||
            "bg-neutral-100 text-neutral-800 border-neutral-200"
          }`}
        >
          {item.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-black text-2xl sm:text-[25px] uppercase tracking-tight text-neutral-900 leading-tight mb-1">
        {item.title}
      </h3>

      {/* Institution name with italic editorial accent */}
      <p className="font-editorial italic text-base sm:text-lg text-neutral-700 font-medium mb-3.5 leading-snug">
        {item.institution}
      </p>

      {/* Description */}
      <p className="font-sans text-[13px] sm:text-sm text-neutral-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
