import type React from "react";
import { PROJECTS_BG, CAT_MASK_STYLE } from "./projects-transition.config";
import type { MaskedProjectsPortalProps } from "./types";

// ---------------------------------------------------------------------------
// MaskedProjectsPortal
// The ROOT div here receives mask-image. Everything rendered inside it (ProjectsContent)
// is part of the masked element, so it is only visible where the cat is opaque.
// ---------------------------------------------------------------------------
export default function MaskedProjectsPortal({
  portalRef,
  innerRef,
  children,
}: MaskedProjectsPortalProps) {
  return (
    // `invisible` until GSAP's autoAlpha takes over (costs nothing and can't block the hero).
    <div
      ref={portalRef}
      className={`invisible absolute inset-0 w-full h-full z-20 ${PROJECTS_BG}`}
      style={CAT_MASK_STYLE}
    >
      {/* Inner wrapper: scales with the reveal (the mask itself is NOT scaled by this) */}
      <div
        ref={innerRef}
        className="relative w-full h-full max-w-[1580px] mx-auto flex flex-col justify-between px-6 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16"
        style={{ transformOrigin: "center center" }}
      >
        {children}
      </div>
    </div>
  );
}
