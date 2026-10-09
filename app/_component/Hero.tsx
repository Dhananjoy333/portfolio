"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

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
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full h-full flex-1 flex flex-col justify-between overflow-hidden select-none min-h-0"
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
      <div className="hidden md:flex absolute md:max-lg:top-[20%] lg:top-[3%] xl:top-[4%] 2xl:top-[28%] inset-x-0 justify-center z-5 pointer-events-none select-none">
        <div className="w-full max-w-262.5 lg:max-w-4xl xl:max-w-4xl 2xl:max-w-280 px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 flex justify-between items-baseline">
          <div className="overflow-hidden">
            <span className="hero-hey block font-editorial italic text-neutral-900 md:max-lg:text-[76px] lg:text-[78px] xl:text-[88px] 2xl:text-[170px] leading-none tracking-tight">
              Hey,
            </span>
          </div>

          <div className="overflow-hidden">
            <span className="hero-there block font-editorial italic text-neutral-900 md:max-lg:text-[76px] lg:text-[78px] xl:text-[88px] 2xl:text-[170px] leading-none tracking-tight">
              there
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: Hey, there */}
      <div className="md:hidden w-full pt-2 pb-1 text-center z-5 pointer-events-none px-3 sm:px-4">
        <h1 className="hero-bottom font-editorial italic text-neutral-900 text-4xl sm:text-5xl leading-tight">
          Hey, there
        </h1>
      </div>

      {/* Profile Image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-10 w-full h-[62%] sm:h-[68%] md:max-lg:h-[75%] lg:h-[66%] xl:h-[68%] 2xl:h-[86%]">
        <div className="relative w-auto h-full flex items-end justify-center">
          <Image
            src={`${IMAGEKIT_URL}/img/profile.png`}
            alt="Dhananjoy Brahma portrait"
            width={1457}
            height={1080}
            priority
            className="w-auto h-full max-h-85 sm:max-h-105 md:max-lg:max-h-145 lg:max-h-90 xl:max-h-98.75 2xl:max-h-225 object-contain object-bottom pointer-events-none select-none"
          />

          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-8 sm:h-12 lg:h-12 xl:h-14 2xl:h-20 bg-linear-to-t from-white via-white/70 to-transparent pointer-events-none z-12" />
        </div>
      </div>

      {/* Desktop / Tablet: Lower Content */}
      <div className="hidden md:flex flex-1 justify-between items-end pb-4 md:max-lg:pb-8 lg:pb-3.5 xl:pb-4.5 2xl:pb-14 px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 relative z-20 pointer-events-none">

        {/* Lower Left */}
        <div className="flex flex-col items-start gap-2 md:max-lg:gap-3.5 lg:gap-1.5 xl:gap-2 2xl:gap-16 pointer-events-auto max-w-[42%] lg:max-w-[44%]">

          {/* Availability Badge */}
          <div className="hero-bottom">
            <div
              role="status"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1 sm:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] select-none hover:shadow-md transition-shadow"
            >
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-600" />
              </span>

              <span className="text-[10px] sm:text-xs lg:text-[10.5px] xl:text-[11.5px] 2xl:text-[13px] font-sans font-medium text-neutral-800 tracking-tight whitespace-nowrap">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* I AM + NAME */}
          <div className="flex flex-col gap-1 md:max-lg:gap-2 lg:gap-1 xl:gap-1.5 2xl:gap-4 select-none text-left">
            <span className="hero-bottom font-display font-bold uppercase text-neutral-700 text-3xl md:max-lg:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[136px] leading-[0.84]">
              I AM
            </span>

            <span className="hero-bottom font-display font-bold uppercase text-neutral-700 text-3xl md:max-lg:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[136px] leading-[0.84] tracking-tight">
              DHANANJOY BRAHMA
            </span>
          </div>
        </div>

        {/* Lower Right */}
        <div className="flex flex-col items-end gap-1.5 md:max-lg:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-36 pointer-events-auto max-w-[42%] lg:max-w-[44%] text-right">

          {/* Description */}
          <div className="hero-bottom text-left self-end max-w-48 md:max-lg:max-w-56 lg:max-w-52 xl:max-w-60 2xl:max-w-70">
            <p className="text-[10px] sm:text-[11px] lg:text-[9.5px] xl:text-[10.5px] 2xl:text-[16px] font-sans font-medium leading-snug lg:leading-normal text-neutral-800 tracking-tight select-none">
              Specialized in Web Development,
              <br />
              UI/UX, Interactive Experiences,
              <br />
              and Full-Stack Applications.
            </p>
          </div>

          {/* FULL STACK DEVELOPER */}
          <div className="flex flex-col items-end select-none hero-bottom">
            <span className="font-display font-black uppercase text-neutral-700 text-2xl md:max-lg:text-3xl lg:text-[26px] xl:text-[32px] 2xl:text-[100px] leading-[0.84] tracking-tight">
              FULL
            </span>

            <span className="font-display font-black uppercase text-neutral-700 text-2xl md:max-lg:text-3xl lg:text-[26px] xl:text-[32px] 2xl:text-[100px] leading-[0.84] tracking-tight">
              STACK
            </span>

            <span className="font-display font-black uppercase text-neutral-700 text-2xl md:max-lg:text-3xl lg:text-[26px] xl:text-[32px] 2xl:text-[100px] leading-[0.84] tracking-tight">
              DEVELOPER
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Lower Content */}
      <div className="md:hidden flex flex-col justify-end flex-1 pb-4 sm:pb-6 px-4 sm:px-6 relative z-20 gap-3.5 sm:gap-5 pt-36 sm:pt-52">

        {/* Availability Badge */}
        <div className="hero-bottom self-start">
          <div
            role="status"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200/90 shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-amber-600" />
            </span>

            <span className="text-[10px] sm:text-[11px] font-medium text-neutral-800 tracking-tight whitespace-nowrap">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Name + Role */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* I AM + NAME */}
          <div className="flex flex-col select-none">
            <span className="hero-bottom font-display font-bold uppercase text-black text-3xl sm:text-4xl md:text-5xl leading-[0.88] tracking-tight">
              I AM
            </span>

            <span className="hero-bottom font-display font-bold uppercase text-black text-3xl sm:text-4xl md:text-5xl leading-[0.88] tracking-tight">
              DHANANJOY BRAHMA
            </span>
          </div>

          {/* Description + Role */}
          <div className="flex flex-col items-end gap-1.5 sm:gap-2">
            <p className="hero-bottom text-[10px] sm:text-[11px] font-medium text-neutral-800 leading-snug max-w-48 sm:max-w-56 text-right">
              Specialized in Web Development, UI/UX, Interactive Experiences,
              and Full-Stack Applications.
            </p>

            <div className="flex flex-col items-end hero-bottom">
              <span className="font-display font-bold uppercase text-black text-2xl sm:text-3xl md:text-4xl leading-[0.88] tracking-tight">
                FULL
              </span>

              <span className="font-display font-bold uppercase text-black text-2xl sm:text-3xl md:text-4xl leading-[0.88] tracking-tight">
                STACK
              </span>

              <span className="font-display font-bold uppercase text-black text-2xl sm:text-3xl md:text-4xl leading-[0.88] tracking-tight">
                DEVELOPER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
