"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboutIntro from "./AboutIntro";
import AboutInfoCards from "./AboutInfoCards";
import TechStack from "./TechStack";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.fromTo(
        ".about-label",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 }
      )
        .fromTo(
          ".about-heading",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          ".about-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35"
        )
        .fromTo(
          ".about-info-card",
          { opacity: 0, y: 25, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".about-stats",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ".about-cta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          ".tech-item",
          { opacity: 0, y: 12, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.02, duration: 0.4 },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 text-neutral-900"
      aria-label="About Me Section"
    >
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Heading, Description, Stats & CTA */}
          <div className="w-full lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <AboutIntro />
          </div>

          {/* Right Column: Cards & Tech Stack */}
          <div className="w-full lg:col-span-7 xl:col-span-8 flex flex-col gap-8 sm:gap-10 xl:gap-12">
            <AboutInfoCards />
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}
