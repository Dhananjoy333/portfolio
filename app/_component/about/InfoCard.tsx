import type React from "react";

export interface InfoCardProps {
  number: string;
  title: string;
  description: string;
  variant: "yellow" | "white" | "cream";
  rotationClass?: string;
  icon: "target" | "education" | "lightbulb";
  hasLayeredStack?: boolean;
}

function RenderIcon({ type }: { type: InfoCardProps["icon"] }) {
  if (type === "target") {
    // Target / Bullseye icon
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-neutral-900"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "education") {
    // Graduation cap icon
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-neutral-900"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }

  // Lightbulb icon
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-neutral-900"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2v1" />
      <path d="M4.9 4.9l.7.7" />
      <path d="M19.1 4.9l-.7.7" />
    </svg>
  );
}

export default function InfoCard({
  number,
  title,
  description,
  variant,
  rotationClass = "",
  icon,
}: InfoCardProps) {
  const variantStyles = {
    yellow: "bg-[#FEF3C7] border-amber-200/80 text-neutral-900 shadow-[0_12px_32px_rgba(251,191,36,0.12)]",
    white: "bg-white border-neutral-200/80 text-neutral-900 shadow-[0_14px_34px_rgba(0,0,0,0.05)]",
    cream: "bg-[#FFFDF5] border-amber-200/60 text-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,0.04)]",
  };

  const iconBgStyles = {
    yellow: "bg-white/80 border border-amber-200/70 shadow-xs",
    white: "bg-sky-50 border border-sky-100 shadow-xs",
    cream: "bg-amber-50 border border-amber-100 shadow-xs",
  };

  return (
    <div className={`relative group ${rotationClass} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}>

      {/* Main card body */}
      <div
        className={`relative z-10 p-6 sm:p-7 rounded-3xl border flex flex-col justify-between min-h-72.5 sm:min-h-77.5 ${variantStyles[variant]}`}
      >
        <div>
          {/* Header with number & icon */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-xs font-semibold text-neutral-500 tracking-wider">
              {number}
            </span>
          </div>

          <div className="mb-4">
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center ${iconBgStyles[variant]}`}
            >
              <RenderIcon type={icon} />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight text-neutral-900 leading-tight mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="font-sans text-[13px] sm:text-sm text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
