import type React from "react";
import Image from "next/image";

export interface TechItemProps {
  name: string;
  iconSrc?: string;
  iconSvg?: React.ReactNode;
}

export default function TechItem({ name, iconSrc, iconSvg }: TechItemProps) {
  return (
    <div className="tech-item group relative flex flex-col items-center justify-center py-2.5 px-3 sm:py-3 sm:px-3.5 min-w-18.5 sm:min-w-20.5 rounded-xl sm:rounded-2xl bg-neutral-50/80 hover:bg-white border border-neutral-200/60 hover:border-neutral-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none shrink-0">
      <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt={`${name} icon`}
            width={28}
            height={28}
            className="w-5.5 h-5.5 sm:w-6 sm:h-6 object-contain transition-transform duration-200 group-hover:scale-110"
          />
        ) : (
          <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            {iconSvg}
          </div>
        )}
      </div>

      <span className="font-sans text-[11px] sm:text-xs font-medium text-neutral-800 text-center tracking-tight mt-1.5 sm:mt-2 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
