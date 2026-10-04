import type { ReactNode, Ref, RefObject } from "react";

// Single source of truth for desktop + mobile. The timeline is built once by `buildTimeline`.
export interface Config {
  end: string;
  heroY: number;
  heroScale: number;
  wordFromY: number; // fraction of viewport height
  wordFromScale: number;
  wordScaleMult: number;
  maxWordScale: number;
  letterSpread: number; // multiplier on LETTER_TRAJECTORIES
  gapFit: number; // starting cat width = gap width * gapFit (raise if the PNG has lots of padding)
  maskFill: number; // final cat width, as a multiple of max(vw, vh). Raise if the cat doesn't fill the screen.
  contentFromScale: number; // Projects content scales up from this while the cat grows
}

export interface LetterTrajectory {
  dx: number;
  dy: number;
  rot: number;
}

export interface MaskedProjectsPortalProps {
  portalRef: Ref<HTMLDivElement>;
  innerRef: Ref<HTMLDivElement>;
  children: ReactNode;
}

export interface ProjectsContentProps {
  dividerRef: Ref<HTMLDivElement>;
  cardRefs: RefObject<(HTMLDivElement | null)[]>;
}

export interface ProjectStackProps {
  cardRefs: RefObject<(HTMLDivElement | null)[]>;
}

export interface ProjectsTypographyProps {
  wordWrapperRef: Ref<HTMLHeadingElement>;
  gapRef: Ref<HTMLSpanElement>;
  letterRefs: RefObject<(HTMLSpanElement | null)[]>;
}

export interface ProjectsTransitionProps {
  children?: ReactNode;
}
