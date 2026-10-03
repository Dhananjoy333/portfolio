import type React from "react";
import type { ProjectsContentProps } from "./types";

// ---------------------------------------------------------------------------
// ProjectsContent: the existing Projects UI. Two direct children so the parent's
// `justify-between` layout is preserved.
// ---------------------------------------------------------------------------
export default function ProjectsContent({ dividerRef }: ProjectsContentProps) {
  return (
    <>
      <div className="w-full flex flex-col gap-6 md:gap-8 pt-8 sm:pt-12">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-neutral-800 tracking-wider uppercase">
              01 / SELECTED WORKS
            </span>
          </div>

          <span className="hidden sm:inline-block font-sans text-xs md:text-sm font-medium text-neutral-500 tracking-tight">
            Archive (2023 — 2026)
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="flex flex-col select-none">
            <span className="font-editorial italic text-3xl sm:text-4xl md:text-5xl text-neutral-500 font-normal leading-tight">
              Featured
            </span>
            <h3 className="font-display font-black uppercase text-neutral-900 text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.84] tracking-tight">
              PROJECTS
            </h3>
          </div>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-neutral-600 max-w-md leading-relaxed select-none">
            Specialized architectural design, full-stack systems, interactive
            experiences, and high-performance digital craft.
          </p>
        </div>

        <div ref={dividerRef} className="w-full h-px bg-neutral-300 origin-left mt-2" />
      </div>

      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 select-none pb-4">
        <span className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
          Scroll to explore portfolio
        </span>
        <span>[ 01 — 06 ]</span>
      </div>
    </>
  );
}
