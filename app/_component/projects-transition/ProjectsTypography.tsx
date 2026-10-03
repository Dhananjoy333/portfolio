import type React from "react";
import { FIRST_HALF, SECOND_HALF } from "./projects-transition.config";
import type { ProjectsTypographyProps } from "./types";

// ---------------------------------------------------------------------------
// ProjectsTypography
// Renders the oversized "PROJ ECTS" word with an empty gap between J and E.
// Exposes refs for GSAP to animate letter trajectories and gap measurements.
// ---------------------------------------------------------------------------
export default function ProjectsTypography({
  wordWrapperRef,
  gapRef,
  letterRefs,
}: ProjectsTypographyProps) {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-30 overflow-hidden">
      <h2
        ref={wordWrapperRef}
        className="invisible relative font-display font-black uppercase text-neutral-900 tracking-tight select-none inline-flex items-center justify-center"
        style={{
          fontSize: "clamp(3.2rem, 13vw, 13.5rem)",
          lineHeight: 0.84,
          transformOrigin: "center center",
        }}
      >
        {FIRST_HALF.map((letter, index) => (
          <span
            key={`left-${index}`}
            ref={(el) => {
              letterRefs.current[index] = el;
            }}
            className="inline-block"
          >
            {letter}
          </span>
        ))}

        {/* GAP: reserves the space between J and E (replaces the old diamond SVG) */}
        <span
          ref={gapRef}
          aria-hidden="true"
          className="inline-block mx-[0.04em]"
          style={{ width: "0.62em", height: "0.7em" }}
        />

        {SECOND_HALF.map((letter, index) => (
          <span
            key={`right-${index}`}
            ref={(el) => {
              letterRefs.current[index + 4] = el;
            }}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
}
