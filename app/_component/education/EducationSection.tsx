"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import EducationCard, { type EducationItem } from "./EducationCard";

gsap.registerPlugin(ScrollTrigger);

const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopTimelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  // Desktop node refs for measuring exact coordinates
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);

  // Mobile node refs
  const mNode1Ref = useRef<HTMLDivElement>(null);
  const mNode2Ref = useRef<HTMLDivElement>(null);
  const mNode3Ref = useRef<HTMLDivElement>(null);
  const mNode4Ref = useRef<HTMLDivElement>(null);

  // Default initial path strings for SSR / zero layout shift
  const [desktopPathD, setDesktopPathD] = useState(
    "M 510 20 C 505 50, 518 70, 520 110 C 556 185, 452 265, 484 370 C 540 455, 560 540, 522 650 C 474 720, 470 815, 492 925 C 484 960, 522 985, 555 1000 M 543 994 L 555 1000 L 550 988"
  );
  const [mobilePathD, setMobilePathD] = useState(
    "M 20 10 C 16 100, 24 200, 20 280 C 16 380, 24 480, 20 580 C 16 680, 24 780, 20 880 C 16 930, 26 950, 32 970 M 26 962 L 32 970 L 32 958"
  );

  const educationList: EducationItem[] = [
    {
      id: "edu-1",
      year: "2018",
      title: "10th Standard",
      institution: "The Reality Public School",
      description:
        "Completed my CBSE Boards exam on subjects Maths, English, Science, Social Science, Hindi, and Computer.",
      logo: `${IMAGEKIT_URL}/img/rps.png`,
      variant: "yellow",
      position: "right",
      rotation: "rotate-1",
    },
    {
      id: "edu-2",
      year: "2020",
      title: "12th Standard",
      institution: "St. Francis D'Assisi Senior Secondary School, Guwahati",
      description:
        "Completed higher secondary with Science stream specializing in Maths, Physics, Chemistry (MPC).",
      logo: `${IMAGEKIT_URL}/img/HS.png`,
      variant: "white",
      position: "left",
      rotation: "-rotate-1",
    },
    {
      id: "edu-3",
      year: "2024",
      title: "Graduation",
      institution: "National Institute of Technology Nagaland",
      description:
        "Graduated with a degree in Mechanical Engineering, developing problem-solving skills, discipline, and a strong technical foundation.",
      logo: `${IMAGEKIT_URL}/img/nit.png`,
      variant: "yellow",
      position: "right",
      rotation: "rotate-1",
    },
    {
      id: "edu-4",
      year: "2026",
      title: "Data Science & Machine Learning",
      institution: "Indian Institute of Technology Guwahati",
      description:
        "Currently enrolled in a course learning about AI/ML architecture like CNN, GAN, Transformers etc.",
      logo: `${IMAGEKIT_URL}/img/iit.png`,
      variant: "white",
      position: "left",
      rotation: "-rotate-1",
    },
  ];

  // Recalculates pixel-accurate organic path based on actual DOM node positions
  const updateTimelinePaths = useCallback(() => {
    // 1. Desktop organic path
    if (
      desktopTimelineRef.current &&
      node1Ref.current &&
      node2Ref.current &&
      node3Ref.current &&
      node4Ref.current
    ) {
      const containerRect = desktopTimelineRef.current.getBoundingClientRect();
      const r1 = node1Ref.current.getBoundingClientRect();
      const r2 = node2Ref.current.getBoundingClientRect();
      const r3 = node3Ref.current.getBoundingClientRect();
      const r4 = node4Ref.current.getBoundingClientRect();

      const p1 = {
        x: r1.left + r1.width / 2 - containerRect.left,
        y: r1.top + r1.height / 2 - containerRect.top,
      };
      const p2 = {
        x: r2.left + r2.width / 2 - containerRect.left,
        y: r2.top + r2.height / 2 - containerRect.top,
      };
      const p3 = {
        x: r3.left + r3.width / 2 - containerRect.left,
        y: r3.top + r3.height / 2 - containerRect.top,
      };
      const p4 = {
        x: r4.left + r4.width / 2 - containerRect.left,
        y: r4.top + r4.height / 2 - containerRect.top,
      };

      const dy12 = p2.y - p1.y;
      const dy23 = p3.y - p2.y;
      const dy34 = p4.y - p3.y;

      // Start above Node 1
      const startX = p1.x - 10;
      const startY = Math.max(0, p1.y - 75);

      // Curve 1->2: lazy S-curve bulging right then left
      const c1x1 = p1.x + 36;
      const c1y1 = p1.y + dy12 * 0.32;
      const c1x2 = p2.x - 34;
      const c1y2 = p1.y + dy12 * 0.68;

      // Curve 2->3: wide sweeping rightward arc
      const c2x1 = p2.x + 56;
      const c2y1 = p2.y + dy23 * 0.36;
      const c2x2 = p3.x + 40;
      const c2y2 = p2.y + dy23 * 0.74;

      // Curve 3->4: gentle leftward sweep with distinct shallow contour
      const c3x1 = p3.x - 48;
      const c3y1 = p3.y + dy34 * 0.28;
      const c3x2 = p4.x - 22;
      const c3y2 = p3.y + dy34 * 0.7;

      // Exit 4->End: downward and rightward sweep with arrowhead pointing to closing text
      const endX = p4.x + 65;
      const endY = p4.y + 75;

      const pathStr = [
        `M ${startX} ${startY}`,
        `C ${p1.x - 14} ${p1.y - 45}, ${p1.x - 2} ${p1.y - 25}, ${p1.x} ${p1.y}`,
        `C ${c1x1} ${c1y1}, ${c1x2} ${c1y2}, ${p2.x} ${p2.y}`,
        `C ${c2x1} ${c2y1}, ${c2x2} ${c2y2}, ${p3.x} ${p3.y}`,
        `C ${c3x1} ${c3y1}, ${c3x2} ${c3y2}, ${p4.x} ${p4.y}`,
        `C ${p4.x - 8} ${p4.y + 35}, ${p4.x + 30} ${p4.y + 58}, ${endX} ${endY}`,
        // Hand-drawn open arrowhead
        `M ${endX - 12} ${endY - 6} L ${endX} ${endY} L ${endX - 5} ${endY - 12}`,
      ].join(" ");

      setDesktopPathD(pathStr);
    }

    // 2. Mobile organic path
    if (
      mobileTimelineRef.current &&
      mNode1Ref.current &&
      mNode2Ref.current &&
      mNode3Ref.current &&
      mNode4Ref.current
    ) {
      const containerRect = mobileTimelineRef.current.getBoundingClientRect();
      const r1 = mNode1Ref.current.getBoundingClientRect();
      const r2 = mNode2Ref.current.getBoundingClientRect();
      const r3 = mNode3Ref.current.getBoundingClientRect();
      const r4 = mNode4Ref.current.getBoundingClientRect();

      const p1 = {
        x: r1.left + r1.width / 2 - containerRect.left,
        y: r1.top + r1.height / 2 - containerRect.top,
      };
      const p2 = {
        x: r2.left + r2.width / 2 - containerRect.left,
        y: r2.top + r2.height / 2 - containerRect.top,
      };
      const p3 = {
        x: r3.left + r3.width / 2 - containerRect.left,
        y: r3.top + r3.height / 2 - containerRect.top,
      };
      const p4 = {
        x: r4.left + r4.width / 2 - containerRect.left,
        y: r4.top + r4.height / 2 - containerRect.top,
      };

      const dy12 = p2.y - p1.y;
      const dy23 = p3.y - p2.y;
      const dy34 = p4.y - p3.y;

      const pathStr = [
        `M ${p1.x} ${Math.max(0, p1.y - 40)}`,
        `C ${p1.x - 4} ${p1.y - 20}, ${p1.x + 2} ${p1.y - 10}, ${p1.x} ${p1.y}`,
        `C ${p1.x + 12} ${p1.y + dy12 * 0.35}, ${p2.x - 8} ${p1.y + dy12 * 0.7}, ${p2.x} ${p2.y}`,
        `C ${p2.x + 14} ${p2.y + dy23 * 0.4}, ${p3.x + 6} ${p2.y + dy23 * 0.75}, ${p3.x} ${p3.y}`,
        `C ${p3.x - 10} ${p3.y + dy34 * 0.3}, ${p4.x - 4} ${p3.y + dy34 * 0.7}, ${p4.x} ${p4.y}`,
        `C ${p4.x - 2} ${p4.y + 25}, ${p4.x + 8} ${p4.y + 40}, ${p4.x + 16} ${p4.y + 55}`,
        `M ${p4.x + 10} ${p4.y + 48} L ${p4.x + 16} ${p4.y + 55} L ${p4.x + 8} ${p4.y + 53}`,
      ].join(" ");

      setMobilePathD(pathStr);
    }
  }, []);

  useEffect(() => {
    updateTimelinePaths();
    window.addEventListener("resize", updateTimelinePaths);
    const timer = setTimeout(updateTimelinePaths, 250);
    return () => {
      window.removeEventListener("resize", updateTimelinePaths);
      clearTimeout(timer);
    };
  }, [updateTimelinePaths]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.fromTo(
        ".edu-label",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 }
      )
        .fromTo(
          ".edu-heading",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          ".edu-desc",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35"
        )
        .fromTo(
          ".edu-path-svg",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          ".edu-node",
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, stagger: 0.12, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          ".edu-card-wrap",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="education"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-28 text-neutral-900"
      aria-label="Education Section"
    >
      {/* Background soft pastel ambient circles (as in reference) */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-amber-200/45 blur-3xl pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-105 h-105 rounded-full bg-amber-200/40 blur-3xl pointer-events-none z-0"
      />

      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 xl:px-20 relative z-10">
        {/* =========================================================================
            DESKTOP TIMELINE (md: and above): Alternating Left/Right Organic Journey
           ========================================================================= */}
        <div
          ref={desktopTimelineRef}
          className="hidden md:block relative w-full max-w-6xl mx-auto"
        >
          {/* Continuous Organic Hand-drawn SVG Path */}
          <svg
            className="edu-path-svg absolute inset-0 w-full h-full pointer-events-none z-0"
            fill="none"
          >
            <path
              d={desktopPathD}
              stroke="#27272A"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* -----------------------------------------------------------------------
              ROW 1: Title Block (Left) | 2016 Node (Center) | 10th Standard (Right)
             ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-[1.1fr_auto_1.1fr] items-center gap-6 lg:gap-10 mb-14 lg:mb-20">
            {/* Left Column: Eyebrow + "FROM HERE TO CODE" + Description */}
            <div className="flex flex-col items-start pr-4">
              {/* Eyebrow: 03 · Education ─── */}
              <div className="edu-label inline-flex items-center gap-2 select-none mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                <span className="font-editorial italic text-lg sm:text-xl text-neutral-800 font-normal">
                  Education
                </span>
                <span className="h-px w-12 sm:w-16 bg-neutral-300 ml-1" />
              </div>

              {/* Main Heading: FROM HERE TO CODE */}
              <div className="edu-heading select-none relative mb-4">
                <h2 className="font-display font-black uppercase text-neutral-900 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.88] tracking-tight">
                  <span className="block">FROM HERE</span>
                  <span className="relative inline-block mt-1 sm:mt-2">
                    {/* Yellow marker highlight */}
                    <span
                      aria-hidden="true"
                      className="absolute -inset-x-1.5 bottom-1 top-2 bg-amber-200/70 rounded-md rotate-6 -z-10"
                    />
                    TO CODE
                    {/* Doodle burst marks */}
                    <span className="absolute -top-3 -right-8 rotate-36 doodle-float text-neutral-900 pointer-events-none">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 36 36"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      >
                        <path d="M 8 26 L 4 16" />
                        <path d="M 18 22 L 18 8" />
                        <path d="M 28 24 L 34 14" />
                      </svg>
                    </span>
                  </span>
                </h2>
              </div>

              {/* Supporting Text */}
              <p className="edu-desc font-sans text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                A journey from mechanical engineering to software development,
                and now exploring data science and machine learning.
              </p>
            </div>

            {/* Center: Node 1 (2016) with Year to its Left */}
            <div className="relative flex items-center justify-center shrink-0 translate-x-3">
              {/* Year 2016 + sketch marks on Left */}
              <div className="absolute right-8 flex items-center gap-1.5 select-none pr-1">
                <div className="flex flex-col items-end">
                  <span className="font-display font-black text-3xl lg:text-4xl text-neutral-900 leading-none tracking-tight">
                    2018
                  </span>
                  {/* 3 tiny sketch marks below year */}
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 20 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="text-neutral-900 mt-1 rotate-12 doodle-float"
                  >
                    <path d="M 4 8 L 8 11" />
                    <path d="M 10 4 L 13 8" />
                    <path d="M 15 2 L 18 5" />
                  </svg>
                </div>
              </div>

              {/* Node 1 */}
              <div
                ref={node1Ref}
                className="edu-node w-5 h-5 rounded-full bg-amber-400 border-2 border-neutral-900 shadow-xs flex items-center justify-center z-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              </div>
            </div>

            {/* Right Column: Card 1 + "Where it all started." annotation */}
            <div className="edu-card-wrap relative flex items-center pl-2">
              <div className="relative w-full xl:max-w-100 2xl:max-w-120 rotate-2">
                {/* 3 doodle rays above Card 1 */}
                <div className="absolute -top-7 right-4 rotate-26 doodle-float text-neutral-900 pointer-events-none select-none">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 32 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M 8 20 L 4 10" />
                    <path d="M 16 18 L 16 6" />
                    <path d="M 24 20 L 28 10" />
                  </svg>
                </div>

                <EducationCard item={educationList[0]} />

                {/* Annotation to the right: "Where it all started." with curved arrow */}
                <div
                  aria-hidden="true"
                  className="hidden xl:block absolute -right-28 top-8
             select-none pointer-events-none"
                >
                  <p className="font-editorial italic text-sm xl:text-lg text-neutral-500 leading-tight">
                    Where
                    <br />
                    it all
                    <br />
                    started.
                  </p>

                  <svg
                    viewBox="0 0 200 150"
                    fill="none"
                    className="absolute -left-12 top-full w-40 h-32
               text-neutral-400"
                  >
                    <path
                      d="M 80 5
                        C 65 90, 20 85, -20 100"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              ROW 2: 12th Standard (Left) | 2018 Node (Center) | Empty / Space (Right)
             ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-[1.1fr_auto_1.1fr] items-center gap-6 lg:gap-10 mb-14 lg:mb-20">
            {/* Left Column: Card 2 + "Stronger foundation." annotation & scribble */}
            <div className="edu-card-wrap relative flex justify-end pr-2">
              <div className="relative w-full xl:max-w-100 2xl:max-w-120 flex justify-end -rotate-4">
                {/* Annotation to the left: looped scribble + curved arrow */}
                <div
                  aria-hidden="true"
                  className="hidden xl:flex flex-col items-end absolute -left-32 top-6 select-none pointer-events-none "
                >
                  {/* Delicate loop scribble */}
                  <svg
                    viewBox="0 0 80 35"
                    fill="none"
                    className="w-16 h-7 text-neutral-300 mb-1"
                  >
                    <path
                      d="M 5 22 C 20 5, 38 32, 55 14 C 70 -2, 78 28, 62 32 C 45 36, 58 10, 75 18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="font-editorial italic text-sm 2xl:text-lg text-neutral-500 text-right leading-tight">
                    Stronger
                    <br />
                    foundation.
                  </p>
                  <svg
                    viewBox="0 0 200 150"
                    fill="none"
                    className="absolute top-20 -left-10 w-40 h-32 text-neutral-400 mt-1"
                  >
                    <path
                      d="M 90 4 C 100 86, 126 95, 200 86"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <EducationCard item={educationList[1]} />
              </div>
            </div>

            {/* Center: Node 2 (2018) with Year to its Right */}
            <div className="relative flex items-center justify-center shrink-0 -translate-x-3">
              {/* 3 doodle rays above Node 2 */}
              <div className="absolute -top-7 text-neutral-900 pointer-events-none select-none">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 24 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <path d="M 6 16 L 3 8" />
                  <path d="M 12 14 L 12 4" />
                  <path d="M 18 16 L 21 8" />
                </svg>
              </div>

              {/* Node 2 */}
              <div
                ref={node2Ref}
                className="edu-node w-5 h-5 rounded-full bg-amber-400 border-2 border-neutral-900 shadow-xs flex items-center justify-center z-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              </div>

              {/* Year 2018 on Right */}
              <div className="absolute left-8 select-none pl-1">
                <span className="font-display font-black text-3xl lg:text-4xl text-neutral-900 leading-none tracking-tight">
                  2020
                </span>
              </div>
            </div>

            {/* Right Column: Empty spacer */}
            <div className="w-full" />
          </div>

          {/* -----------------------------------------------------------------------
              ROW 3: Empty / Space (Left) | 2024 Node (Center) | Graduation (Right)
             ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-[1.1fr_auto_1.1fr] items-center gap-6 lg:gap-10 mb-14 lg:mb-20">
            {/* Left Column: Empty spacer */}
            <div className="w-full" />

            {/* Center: Node 3 (2024) with Year to its Left */}
            <div className="relative flex items-center justify-center shrink-0 translate-x-2">
              {/* Year 2024 on Left */}
              <div className="absolute right-8 select-none pr-1">
                <span className="font-display font-black text-3xl lg:text-4xl text-neutral-900 leading-none tracking-tight">
                  2024
                </span>
              </div>

              {/* 3 doodle rays above Node 3 */}
              <div className="absolute -top-7 text-neutral-900 pointer-events-none select-none">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 24 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <path d="M 6 16 L 3 8" />
                  <path d="M 12 14 L 12 4" />
                  <path d="M 18 16 L 21 8" />
                </svg>
              </div>

              {/* Node 3 */}
              <div
                ref={node3Ref}
                className="edu-node w-5 h-5 rounded-full bg-amber-400 border-2 border-neutral-900 shadow-xs flex items-center justify-center z-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              </div>
            </div>

            {/* Right Column: Card 3 + "Learned to solve problems." annotation */}
            <div className="edu-card-wrap relative flex items-center pl-2">
              <div className="relative w-full xl:max-w-100 2xl:max-w-120 rotate-6">
                <EducationCard item={educationList[2]} />

                {/* Annotation to the right: "Learned to solve problems." with curved arrow */}
                <div
                  aria-hidden="true"
                  className="hidden xl:block absolute -right-28 top-8
             select-none pointer-events-none"
                >
                  <p className="font-editorial italic text-sm xl:text-lg text-neutral-500 leading-tight">
                    Learned
                    <br />
                    to
                    <br />
                    solve.
                  </p>

                  <svg
                    viewBox="0 0 200 150"
                    fill="none"
                    className="absolute -left-12 top-full w-40 h-32
               text-neutral-400"
                  >
                    <path
                      d="M 80 5
                        C 65 90, 20 85, -20 100"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              ROW 4: Data Science & ML (Left) | 2026 Node (Center) | Empty / Space (Right)
             ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-[1.1fr_auto_1.1fr] items-center gap-6 lg:gap-10 mb-8">
            {/* Left Column: Card 4 + "Exploring what's next." annotation */}
            <div className="edu-card-wrap relative flex justify-end pr-2">
              <div className="relative w-full xl:max-w-100 2xl:max-w-120 flex justify-end -rotate-2">
                {/* Annotation to the left: "Exploring what's next." with curved arrow */}
                <div
                  aria-hidden="true"
                  className="hidden xl:flex flex-col items-end absolute -left-30 top-10 select-none pointer-events-none"
                >
                  <p className="font-editorial italic text-sm 2xl:text-lg text-neutral-500 text-right leading-tight">
                    Exploring
                    <br />
                    what&apos;s
                    <br />
                    next.
                  </p>
                  <svg
                    viewBox="0 0 200 150"
                    fill="none"
                    className="absolute top-20 -left-10 w-40 h-32 text-neutral-400 mt-1"
                  >
                    <path
                      d="M 90 4 C 100 86, 126 95, 200 86"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <EducationCard item={educationList[3]} />
              </div>
            </div>

            {/* Center: Node 4 (2026) with Year to its Right */}
            <div className="relative flex items-center justify-center shrink-0 -translate-x-2">
              {/* Node 4 (Current - with subtle active ping) */}
              <div
                ref={node4Ref}
                className="edu-node relative w-5 h-5 rounded-full bg-amber-400 border-2 border-neutral-900 shadow-xs flex items-center justify-center z-10"
              >
                <span className="absolute w-8 h-8 rounded-full bg-amber-400/30 animate-ping pointer-events-none" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              </div>

              {/* Year 2026 on Right */}
              <div className="absolute left-8 select-none pl-1">
                <span className="font-display font-black text-3xl lg:text-4xl text-neutral-900 leading-none tracking-tight">
                  2026
                </span>
              </div>
            </div>

            {/* Right Column: Empty spacer */}
            <div className="w-full" />
          </div>

          {/* Bottom closing: "and the journey continues..." with arrow indicator */}
          <div className="relative w-full flex justify-center pt-8">
            <div className="flex items-center gap-3 select-none ml-20 lg:ml-28">
              <span className="font-editorial italic text-base lg:text-lg text-neutral-600">
                and the journey continues...
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE TIMELINE (< md): Left Organic Line with Right-Aligned Stacked Cards
           ========================================================================= */}
        <div ref={mobileTimelineRef} className="md:hidden relative w-full pl-6">
          {/* Eyebrow + Header on Mobile */}
          <div className="flex flex-col items-start mb-10 pl-2">
            <div className="edu-label inline-flex items-center gap-2 select-none mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
              <span className="font-editorial italic text-base text-neutral-800 font-normal">
                Education
              </span>
              <span className="h-px w-10 bg-neutral-300 ml-1" />
            </div>

            <div className="edu-heading select-none relative mb-3">
              <h2 className="font-display font-black uppercase text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-[0.88] tracking-tight">
                <span className="block">FROM HERE</span>
                <span className="relative inline-block mt-1">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-1 bottom-1 top-1 bg-amber-200/60 rounded-md rotate-[-0.6deg] -z-10"
                  />
                  TO CODE
                </span>
              </h2>
            </div>

            <p className="edu-desc font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              A journey from mechanical engineering to software development, and
              now exploring data science and machine learning.
            </p>
          </div>

          {/* Continuous Organic Mobile SVG Path */}
          <svg
            className="edu-path-svg absolute top-28 bottom-12 left-6 w-12 h-[calc(100%-140px)] pointer-events-none z-0 -translate-x-1/2"
            fill="none"
          >
            <path
              d={mobilePathD}
              stroke="#27272A"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Cards Stack */}
          <div className="flex flex-col gap-9 relative z-10">
            {educationList.map((item, idx) => {
              const nodeRef =
                idx === 0
                  ? mNode1Ref
                  : idx === 1
                    ? mNode2Ref
                    : idx === 2
                      ? mNode3Ref
                      : mNode4Ref;

              return (
                <div
                  key={item.id}
                  className="relative flex items-start gap-4 sm:gap-6"
                >
                  {/* Node on line with big Year above/beside it */}
                  <div
                    ref={nodeRef}
                    className="edu-node absolute -left-6 top-6 -translate-x-1/2 flex flex-col items-center justify-center shrink-0"
                  >
                    <div className="w-4.5 h-4.5 rounded-full bg-amber-400 border-2 border-neutral-900 shadow-xs flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="edu-card-wrap w-full pl-3 sm:pl-4">
                    <EducationCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Closing Annotation on Mobile */}
          <div className="text-center mt-12 pl-2">
            <p className="font-editorial italic text-sm text-neutral-500 select-none">
              &hellip;and the journey continues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
