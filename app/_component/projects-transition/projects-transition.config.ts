import type React from "react";
import type { Config, LetterTrajectory } from "./types";

// ---------------------------------------------------------------------------
// CAT MASK
// The cat PNG is ONLY a mask. It is never rendered as an <img>. The browser reads its
// ALPHA channel (default for image masks): opaque pixels = visible, transparent = hidden.
// Requirements for /public/img/cat.png:
//   - REAL transparency around the cat (not a baked-in checkerboard / white background)
//   - high resolution (~1500px+), because the edge is enlarged a lot mid-reveal
//   - the image CENTER should sit inside the cat's body (the mask grows from its center)
//
// The mask is positioned with two CSS variables so GSAP can slide it:
//   --cat-dx / --cat-dy = offset of the cat's center from the viewport center.
// At rest they equal the offset of the PROJ_ECTS gap; they tween to 0 as the cat grows.
// ---------------------------------------------------------------------------
const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

export const CAT_MASK = `url("${IMAGEKIT_URL}/img/cat.png")`;

export const CAT_POSITION =
  "calc(50% + var(--cat-dx, 0px)) calc(50% + var(--cat-dy, 0px))";

export const CAT_MASK_STYLE: React.CSSProperties = {
  WebkitMaskImage: CAT_MASK,
  maskImage: CAT_MASK,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: CAT_POSITION,
  maskPosition: CAT_POSITION,
  WebkitMaskSize: "120px auto",
  maskSize: "120px auto",
  "--cat-dx": "0px",
  "--cat-dy": "0px",
} as React.CSSProperties;

// Surface color of the Projects section. The masked portal AND the runway below share it.
// It needs to differ from the white hero, otherwise the cat in the gap is invisible.
export const PROJECTS_BG = "bg-neutral-200";

export const FIRST_HALF = ["P", "R", "O", "J"];
export const SECOND_HALF = ["E", "C", "T", "S"];

// Per-letter direction (fractions of viewport) + tilt. Flat 2D only.
export const LETTER_TRAJECTORIES: LetterTrajectory[] = [
  { dx: -1.6, dy: -0.9, rot: -14 }, // P
  { dx: -1.15, dy: -1.15, rot: -8 }, // R
  { dx: -0.65, dy: -1.35, rot: -4 }, // O
  { dx: -0.25, dy: -1.55, rot: -2 }, // J
  { dx: 0.25, dy: 1.55, rot: 2 }, // E
  { dx: 0.65, dy: 1.35, rot: 4 }, // C
  { dx: 1.15, dy: 1.15, rot: 8 }, // T
  { dx: 1.6, dy: 0.9, rot: 14 }, // S
];

export const DESKTOP: Config = {
  end: "+=260%",
  heroY: -70,
  heroScale: 0.95,
  wordFromY: 0.82,
  wordFromScale: 0.88,
  wordScaleMult: 1,
  maxWordScale: 10,
  letterSpread: 0.6,
  gapFit: 1.25,
  maskFill: 4, // ~ the 400% from Velvet Pour
  contentFromScale: 0.9,
};

export const MOBILE: Config = {
  end: "+=190%",
  heroY: -45,
  heroScale: 0.96,
  wordFromY: 0.8,
  wordFromScale: 0.85,
  wordScaleMult: 0.85,
  maxWordScale: 8,
  letterSpread: 0.75,
  gapFit: 1.25,
  maskFill: 5, // portrait screens need a larger multiple of the long side to cover the width
  contentFromScale: 0.92,
};
