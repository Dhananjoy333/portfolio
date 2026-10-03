"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    console.log("GSAP HOOK RAN");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      ".hero-hey",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      0
    )
      .fromTo(
        ".hero-there",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        0.08
      )
      .fromTo(
        ".hero-bottom",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
        0.2
      );
  });

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full flex-1 flex flex-col justify-between overflow-hidden select-none min-h-160 md:min-h-180 lg:min-h-195 xl:min-h-210 2xl:min-h-222.5"
    >
      {/* Warm Radial Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 58% at 50% 44%, rgba(254, 234, 196, 0.72) 0%, rgba(254, 243, 222, 0.45) 38%, rgba(255, 252, 246, 0.15) 62%, rgba(255, 255, 255, 0) 80%)",
        }}
      />

      {/* Desktop / Tablet: Hey, there */}
      <div className="hidden md:flex absolute top-[10%] lg:top-[12%] xl:top-[30%] inset-x-0 justify-center z-5 pointer-events-none select-none">
        <div className="w-full max-w-262.5 lg:max-w-295 xl:max-w-7xl 2xl:max-w-280 px-8 sm:px-12 md:px-14 lg:px-16 flex justify-between items-baseline">
          <div className="overflow-hidden">
            <span className="hero-hey block font-editorial italic text-neutral-900 text-[85px] md:text-[105px] lg:text-[135px] xl:text-[155px] 2xl:text-[170px] leading-none tracking-tight">
              Hey,
            </span>
          </div>

          <div className="overflow-hidden">
            <span className="hero-there block font-editorial italic text-neutral-900 text-[85px] md:text-[105px] lg:text-[135px] xl:text-[155px] 2xl:text-[170px] leading-none tracking-tight">
              there
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: Hey, there */}
      <div className="md:hidden w-full pt-4 pb-1 text-center z-5 pointer-events-none px-4">
        <h1 className="hero-bottom font-editorial italic text-neutral-900 text-5xl sm:text-6xl leading-tight">
          Hey, there
        </h1>
      </div>

      {/* Profile Image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-10 w-full h-[64%] sm:h-[70%] md:h-[76%] lg:h-[82%] xl:h-[86%]">
        <div className="relative w-auto h-full flex items-end justify-center">
          <Image
            src="/img/profile.png"
            alt="Dhananjoy Brahma portrait"
            width={1457}
            height={1080}
            priority
            className="w-auto h-full max-h-125 sm:max-h-145 md:max-h-165 lg:max-h-190 xl:max-h-210 2xl:max-h-225 object-contain object-bottom pointer-events-none select-none"
          />

          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 lg:h-20 bg-linear-to-t from-white via-white/70 to-transparent pointer-events-none z-12" />
        </div>
      </div>

      {/* Desktop / Tablet: Lower Content */}
      <div className="hidden md:flex flex-1 justify-between items-end pb-7 sm:pb-9 lg:pb-12 xl:pb-14 px-8 sm:px-12 md:px-12 lg:px-16 xl:px-20 relative z-20 pointer-events-none">

        {/* Lower Left */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 2xl:gap-16 pointer-events-auto max-w-[42%] lg:max-w-[45%]">

          {/* Availability Badge */}
          <div className="hero-bottom">
            <div
              role="status"
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] select-none hover:shadow-md transition-shadow"
            >
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600" />
              </span>

              <span className="text-[11px] sm:text-xs lg:text-[13px] font-sans font-medium text-neutral-800 tracking-tight whitespace-nowrap">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* I AM + NAME */}
          <div className="flex flex-col gap-4 select-none text-left">
            <span className="hero-bottom font-display font-bold uppercase text-neutral-700 text-6xl md:text-7xl lg:text-[98px] xl:text-[118px] 2xl:text-[136px] leading-[0.84]">
              I AM
            </span>

            <span className="hero-bottom font-display font-bold uppercase text-neutral-700 text-6xl md:text-7xl lg:text-[98px] xl:text-[118px] 2xl:text-[136px] leading-[0.84] tracking-tight">
              DHANANJOY BRAHMA
            </span>
          </div>
        </div>

        {/* Lower Right */}
        <div className="flex flex-col items-end gap-3 sm:gap-4 lg:gap-8 2xl:gap-36 pointer-events-auto max-w-[42%] lg:max-w-[45%] text-right">

          {/* Description */}
          <div className="hero-bottom text-left self-end max-w-65 lg:max-w-70">
            <p className="text-[11px] sm:text-xs lg:text-[13px] 2xl:text-[16px] font-sans font-medium leading-snug lg:leading-normal text-neutral-800 tracking-tight select-none">
              Specialized in Web Development,
              <br />
              UI/UX, Interactive Experiences,
              <br />
              and Full-Stack Applications.
            </p>
          </div>

          {/* FULL STACK DEVELOPER */}
          <div className="flex flex-col items-end select-none hero-bottom">
            <span className="font-display font-black uppercase text-neutral-700 text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] 2xl:text-[100px] leading-[0.84] tracking-tight">
              FULL
            </span>

            <span className="font-display font-black uppercase text-neutral-700 text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] 2xl:text-[100px] leading-[0.84] tracking-tight">
              STACK
            </span>

            <span className="font-display font-black uppercase text-neutral-700 text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] 2xl:text-[100px] leading-[0.84] tracking-tight">
              DEVELOPER
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Lower Content */}
      <div className="md:hidden flex flex-col justify-end flex-1 pb-6 px-6 relative z-20 gap-5 pt-48 sm:pt-60">

        {/* Availability Badge */}
        <div className="hero-bottom self-start">
          <div
            role="status"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200/90 shadow-sm"
          >
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600" />
            </span>

            <span className="text-[11px] font-medium text-neutral-800 tracking-tight whitespace-nowrap">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Name + Role */}
        <div className="flex flex-col gap-4">

          {/* I AM + NAME */}
          <div className="flex flex-col select-none">
            <span className="hero-bottom font-display font-bold uppercase text-black text-5xl sm:text-6xl leading-[0.86] tracking-tight">
              I AM
            </span>

            <span className="hero-bottom font-display font-bold uppercase text-black text-5xl sm:text-6xl leading-[0.86] tracking-tight">
              DHANANJOY BRAHMA
            </span>
          </div>

          {/* Description + Role */}
          <div className="flex flex-col items-end gap-2">
            <p className="hero-bottom text-[11px] font-medium text-neutral-800 leading-snug max-w-57.5">
              Specialized in Web Development, UI/UX, Interactive Experiences,
              and Full-Stack Applications.
            </p>

            <div className="flex flex-col items-end hero-bottom">
              <span className="font-display font-bold uppercase text-black text-4xl sm:text-5xl leading-[0.86] tracking-tight">
                FULL
              </span>

              <span className="font-display font-bold uppercase text-black text-4xl sm:text-5xl leading-[0.86] tracking-tight">
                STACK
              </span>

              <span className="font-display font-bold uppercase text-black text-4xl sm:text-5xl leading-[0.86] tracking-tight">
                DEVELOPER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
