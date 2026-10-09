import type React from "react";

const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

export default function AboutIntro() {
  return (
    <div className="relative w-full flex flex-col justify-between h-full">
      {/* Top Section */}
      <div>
        {/* Section Label: 02 . About Me ─── */}
        <div className="about-label inline-flex items-center gap-2.5 select-none mb-6 sm:mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
          <span className="font-editorial italic text-lg sm:text-xl text-neutral-800 font-normal">
            About Me
          </span>
          <span className="h-px w-12 sm:w-16 bg-neutral-300 ml-1" />
        </div>

        {/* Main Heading: BEHIND THE CODE */}
        <div className="about-heading select-none relative mb-5 sm:mb-8">
          <h2 className="font-display font-black uppercase text-neutral-900 text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] 2xl:text-[110px] leading-[0.88] tracking-tight">
            <span className="block">BEHIND</span>
            <span className="relative inline-block mt-1 sm:mt-2">
              {/* Pastel yellow highlighter background */}
              <span
                aria-hidden="true"
                className="absolute -inset-x-2 bottom-1 sm:bottom-2 top-2 sm:top-3 bg-amber-200/60 rounded-md -rotate-6 -z-10"
              />
              THE CODE

              {/* Doodle burst marks next to CODE */}
              <span className="absolute -top-3 sm:-top-5 -right-9 sm:-right-11 rotate-36 doodle-float text-neutral-900 pointer-events-none">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="w-6 h-6 sm:w-9 sm:h-9"
                >
                  <path d="M 8 26 L 4 16" />
                  <path d="M 18 22 L 18 8" />
                  <path d="M 28 24 L 34 14" />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* Description Paragraph */}
        <p className="about-desc font-sans text-neutral-700 text-xs sm:text-sm lg:text-sm xl:text-[15px] 2xl:text-[17px] leading-relaxed max-w-xl">
          I&apos;m Dhananjoy Kumar Brahma, a full-stack developer who enjoys turning
          ideas into real, interactive products. I love building clean,
          performant web experiences, learning new technologies, and working on
          projects that combine creativity with problem solving.
        </p>
      </div>

      {/* Bottom Section: Stats & CTA */}
      <div className="mt-8 sm:mt-10 lg:mt-12 2xl:mt-14 relative z-10">
        {/* Stats Row */}
        <div className="about-stats flex items-center gap-4 sm:gap-7 lg:gap-8 2xl:gap-10 pb-6 sm:pb-8 2xl:pb-9">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-3xl sm:text-4xl 2xl:text-5xl text-neutral-900 leading-none tracking-tight">
                4+
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
              <span className="font-sans text-[11px] sm:text-xs 2xl:text-sm font-medium text-neutral-600">
                Projects
              </span>
            </div>
          </div>

          {/* Divider */}
          <span className="h-7 sm:h-9 w-px bg-neutral-200" />

          {/* Stat 2 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-3xl sm:text-4xl 2xl:text-5xl text-neutral-900 leading-none tracking-tight">
                2+
              </span>
            </div>
            <span className="font-sans text-[11px] sm:text-xs 2xl:text-sm font-medium text-neutral-600 mt-1 sm:mt-1.5">
              Years Learning
            </span>
          </div>

          {/* Divider */}
          <span className="h-7 sm:h-9 w-px bg-neutral-200" />

          {/* Stat 3 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-3xl sm:text-4xl 2xl:text-5xl text-neutral-900 leading-none tracking-tight">
                ∞
              </span>
            </div>
            <span className="font-sans text-[11px] sm:text-xs 2xl:text-sm font-medium text-neutral-600 mt-1 sm:mt-1.5">
              Curiosity
            </span>
          </div>
        </div>

        {/* CV Download Button */}
        <div className="about-cta flex items-center gap-4">
          <a
            href={`${IMAGEKIT_URL}/img/CV.pdf`}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 2xl:px-7 2xl:py-3.5 bg-neutral-950 text-white text-xs sm:text-sm font-medium font-sans rounded-full hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-sm group select-none"
          >
            <span>Download CV</span>
            <span className="text-sm sm:text-base group-hover:translate-y-0.5 transition-transform duration-200">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Decorative scribble loop */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -bottom-30 -left-12 w-48 h-24 pointer-events-none select-none text-neutral-300/60 z-0"
      >
        <svg
          viewBox="0 0 200 100"
          fill="none"
          className="w-full h-full"
        >
          <path
            d="M 10 70 C 70 95, 100 20, 50 35 C 10 45, 40 90, 180 70"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
