import type React from "react";

export default function CreamyTransition() {
  return (
    <div
      className="relative w-full overflow-hidden bg-neutral-200 -mt-1 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Subtle warm glow bridging gray → cream */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-amber-100/10 to-[#FAF8F5]/30" />

      <div className="relative w-full leading-none">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-20 sm:h-28 md:h-36 lg:h-44"
        >
          {/* Very subtle depth behind the cream */}
          <path
            d="
              M 0 48

              C 120 62, 185 42, 270 68
              C 355 94, 420 45, 505 42

              C 585 39, 625 105, 690 106
              C 755 107, 785 45, 860 48

              C 935 50, 985 82, 1045 78
              C 1110 74, 1145 45, 1215 50

              C 1300 56, 1365 72, 1440 55

              L 1440 180
              L 0 180
              Z
            "
            fill="#EDE5DB"
            opacity="0.45"
          />

          {/* Main smooth creamy transition */}
          <path
            d="
              M 0 38

              C 110 52, 185 32, 270 58
              C 350 82, 420 36, 505 32

              C 585 28, 625 92, 690 94
              C 755 96, 790 35, 860 38

              C 935 40, 985 70, 1045 67
              C 1110 64, 1150 34, 1215 40

              C 1300 46, 1365 60, 1440 45

              L 1440 180
              L 0 180
              Z
            "
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </div>
  );
}