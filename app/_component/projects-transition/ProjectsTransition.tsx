"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MaskedProjectsPortal from "./MaskedProjectsPortal";
import ProjectsContent from "./ProjectsContent";
import ProjectsTypography from "./ProjectsTypography";
import {
  LETTER_TRAJECTORIES,
  DESKTOP,
  MOBILE,
} from "./projects-transition.config";
import type { Config, ProjectsTransitionProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

// Stops mobile address-bar show/hide from triggering expensive full refreshes mid-scroll.
ScrollTrigger.config({ ignoreMobileResize: true });

export default function ProjectsTransition({ children }: ProjectsTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const wordWrapperRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const gapRef = useRef<HTMLSpanElement>(null); // empty slot between J and E: the cat lives here
  const projectsWorldRef = useRef<HTMLDivElement>(null); // the MASKED element (portal root)
  const worldInnerRef = useRef<HTMLDivElement>(null); // content wrapper, inside the mask
  const dividerLineRef = useRef<HTMLDivElement>(null);
  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      const viewport = viewportRef.current;
      const heroWrapper = heroWrapperRef.current;
      const wordWrapper = wordWrapperRef.current;
      const gapEl = gapRef.current;
      const letterEls = letterRefs.current.filter(Boolean) as HTMLSpanElement[];
      const projectsWorld = projectsWorldRef.current;
      const worldInner = worldInnerRef.current;
      const dividerLine = dividerLineRef.current;

      if (
        !container ||
        !viewport ||
        !heroWrapper ||
        !wordWrapper ||
        !gapEl ||
        !projectsWorld ||
        !worldInner
      ) {
        return;
      }

      // Warm the mask image so the first frame of the reveal never waits on the network/decoder.
      const preload = new Image();
      preload.src = "/img/cat.png";
      preload.decode?.().catch(() => {});

      // offsetWidth ignores transforms, so this is stable across refreshes.
      const getWordScale = (cfg: Config) => {
        const ratio = window.innerWidth / (wordWrapper.offsetWidth || 800);
        return Math.min(Math.max(ratio * 6, 3), cfg.maxWordScale) * cfg.wordScaleMult;
      };

      // Where the gap sits at rest (word at scale 1, y 0), as an offset from the viewport
      // center. The word is centered in the stage, so this is just the gap's offset from the
      // word's center. Layout offsets ignore transforms, so this is valid at any scroll position.
      // (h2 is `relative`, so gapEl.offsetLeft/Top are measured from the h2.)
      const measureGap = () => ({
        gx: gapEl.offsetLeft + gapEl.offsetWidth / 2 - wordWrapper.offsetWidth / 2,
        gy: gapEl.offsetTop + gapEl.offsetHeight / 2 - wordWrapper.offsetHeight / 2,
        w: gapEl.offsetWidth,
      });

      const startWidth = (cfg: Config) => measureGap().w * cfg.gapFit;
      const endWidth = (cfg: Config) =>
        Math.max(window.innerWidth, window.innerHeight) * cfg.maskFill;

      const buildTimeline = (cfg: Config) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "projects-trigger",
            trigger: container,
            start: "top top",
            end: cfg.end,
            pin: viewport,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        const projectCards =
          projectCardRefs.current.filter(Boolean) as HTMLDivElement[];

        // ---------------------------------------------------------------
        // CARD ENTRANCE ORDER
        // The data array is [Go Cart, World Quiz, Horizon, Code Box].
        // The desired entrance is Go Cart → World Quiz → Code Box → Horizon,
        // with Horizon ending on top. So the entrance indices are [0, 1, 3, 2].
        // ---------------------------------------------------------------
        const entranceOrder = [0, 1, 3, 2];
        const orderedCards = entranceOrder
          .map((i) => projectCards[i])
          .filter(Boolean) as HTMLDivElement[];
        const totalCards = orderedCards.length;

        // INITIAL STATE — every card starts hidden and below the viewport/stack.
        // Permanent z-index ordering: Horizon (40) > Code Box (30) > World Quiz (20) > Go Cart (10).
        // Since z-index is strictly monotonic and set upfront, no z-index pop or flicker can occur.
        orderedCards.forEach((card, seq) => {
          gsap.set(card, {
            y: () => window.innerHeight * 0.75,
            x: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            visibility: "hidden",
            zIndex: (seq + 1) * 10,
            transformOrigin: "50% 50%",
          });
        });

        // 1. Hero recedes smoothly, PROJECTS rises (0 -> 0.38)
        // Set hero initial steady state at 0, begin smooth ease-in recede at 0.02
        // to eliminate any abrupt initial jerk when scroll starts.
        gsap.set(heroWrapper, { autoAlpha: 1, y: 0, scale: 1 });
        tl.fromTo(
          heroWrapper,
          { autoAlpha: 1, y: 0, scale: 1 },
          { autoAlpha: 0, y: cfg.heroY, scale: cfg.heroScale, ease: "power1.in", duration: 0.36 },
          0.02
        );

        tl.fromTo(
          wordWrapper,
          { y: () => window.innerHeight * cfg.wordFromY, autoAlpha: 0, scale: cfg.wordFromScale },
          { y: 0, autoAlpha: 1, scale: 1, ease: "power2.out", duration: 0.25 },
          0.02
        );

        // The cat window rides up with the word: same ease, same duration, and the same
        // y / scale, so it stays locked inside the PROJ_ECTS gap while the word rises.
        // (The portal element itself never moves; only the mask's position and size do.)
        tl.fromTo(
          projectsWorld,
          {
            autoAlpha: 0,
            maskSize: () => `${Math.round(startWidth(cfg) * cfg.wordFromScale)}px auto`,
            "--cat-dx": () => `${measureGap().gx * cfg.wordFromScale}px`,
            "--cat-dy": () =>
              `${window.innerHeight * cfg.wordFromY + measureGap().gy * cfg.wordFromScale}px`,
          },
          {
            autoAlpha: 1,
            maskSize: () => `${Math.round(startWidth(cfg))}px auto`,
            "--cat-dx": () => `${measureGap().gx}px`,
            "--cat-dy": () => `${measureGap().gy}px`,
            ease: "power2.out",
            duration: 0.38,
          },
          0
        );

        // 2. Focus beat (0.38 -> 0.44): letters ease apart slightly, transform-only
        letterEls.forEach((letter, i) => {
          tl.to(
            letter,
            {
              x: () => {
                const em = parseFloat(getComputedStyle(wordWrapper).fontSize) || 100;
                return (i - 3.5) * em * 0.04;
              },
              duration: 0.06,
              ease: "none",
            },
            0.38
          );
        });

        // 3. Word expansion + letter dispersal (0.44 -> 0.88)
        tl.to(
          wordWrapper,
          { scale: () => getWordScale(cfg), ease: "power2.inOut", duration: 0.44 },
          0.44
        );

        letterEls.forEach((letter, i) => {
          const t = LETTER_TRAJECTORIES[i];
          tl.to(
            letter,
            {
              x: () => t.dx * window.innerWidth * cfg.letterSpread,
              y: () => t.dy * window.innerHeight * cfg.letterSpread,
              rotation: t.rot,
              ease: "power2.inOut",
              duration: 0.44,
            },
            0.44
          );
        });

        // 4. CAT MASK GROWS (0.44 -> 0.88)
        // Same concept as Velvet Pour: animate the MASK SIZE small -> huge. ProjectsContent is a
        // child of this element, so it is revealed through the cat as it enlarges. The offsets
        // tween to 0 so the cat ends centered, where it will cover the whole viewport.
        tl.to(
          projectsWorld,
          {
            maskSize: () => `${Math.round(endWidth(cfg))}px auto`,
            "--cat-dx": "0px",
            "--cat-dy": "0px",
            ease: "power2.inOut",
            duration: 0.44,
          },
          0.44
        );

        // The content expands slightly with the opening (transform-only).
        tl.fromTo(
          worldInner,
          { scale: cfg.contentFromScale },
          { scale: 1, ease: "power2.out", duration: 0.44 },
          0.44
        );

        // 5. The word is removed from rendering once it has cleared the screen
        tl.to(wordWrapper, { autoAlpha: 0, duration: 0.08, ease: "power1.in" }, 0.76);

        // 6. Divider draws in as the shape opens up
        if (dividerLine) {
          tl.fromTo(
            dividerLine,
            { scaleX: 0 },
            { scaleX: 1, ease: "power2.out", duration: 0.22 },
            0.66
          );
        }

        // ---------------------------------------------------------------
        // 6b. SEQUENTIAL PHYSICAL CARD STACKING ANIMATION
        //
        // Physical card placement animation (bottom -> up -> front):
        // 1. Every card starts below the stack/viewport (y: window.innerHeight * 0.75).
        // 2. DOM/z-index order is permanent and strictly monotonic:
        //    Horizon (40) > Code Box (30) > World Quiz (20) > Go Cart (10).
        //    Because z-indexes never mutate during scrub, there is zero flicker.
        // 3. Card 1 (Go Cart) rises from below first, settling at (0, 0, 0).
        // 4. Each subsequent card (World Quiz, Code Box, Horizon) rises UPWARD
        //    from below the stack directly into the front position (y: 0, x: 0).
        // 5. At the exact same time as a new card rises, all previously entered
        //    cards are physically pushed DOWN, slightly to the RIGHT, and rotated
        //    subtly CLOCKWISE, allowing their top-right corners to remain visible.
        // 6. Horizon finishes at the top/front of the stack.
        // ---------------------------------------------------------------
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const STACK_Y = isMobile ? 18 : 22;      // downward push per depth level
        const STACK_X = isMobile ? 6 : 10;       // rightward push per depth level
        const ROTATIONS = isMobile ? [0, 1.4, 2.5, 3.8] : [0, 2.0, 3.5, 5.0];
        // Timing sequence:
        // 1. Cat mask expands from 0.44 to 0.88 and clears at 0.89.
        // 2. Card 0 enters at 0.74 (as the mask is almost completely gone) and settles at 0.88.
        // 3. When the mask drops, Card 0 is completely visible and settled alone.
        // 4. After a pause (at 1.00), Card 1 begins its stacked entrance.
        // 5. Subsequent cards follow in deliberate, clean succession.
        const CARD_STARTS = [0.74, 1.00, 1.18, 1.36];
        const ENTRANCE_DURATION = 0.14;          // duration of each card's arrival and push

        orderedCards.forEach((card, seq) => {
          const start = CARD_STARTS[seq];

          // Reveal card at the start of its entrance.
          // Note: z-index is already permanently configured in initial state.
          tl.set(card, { visibility: "visible" }, start);

          // Incoming card starts substantially BELOW the stack and travels UPWARD to y: 0.
          tl.fromTo(
            card,
            {
              y: () => window.innerHeight * 0.75,
              x: 0,
              rotation: 0,
              scale: 1,
            },
            {
              y: 0,
              x: 0,
              rotation: 0,
              scale: 1,
              duration: ENTRANCE_DURATION,
              ease: "power2.out",
            },
            start
          );

          // SIMULTANEOUSLY push previous cards down/right and rotate clockwise
          for (let prev = 0; prev < seq; prev++) {
            const depth = seq - prev; // 1 for immediately prior card, 2 for older, etc.
            tl.to(
              orderedCards[prev],
              {
                y: depth * STACK_Y,
                x: depth * STACK_X,
                rotation: ROTATIONS[depth],
                scale: 1,
                duration: ENTRANCE_DURATION,
                ease: "power2.out",
              },
              start
            );
          }
        });

        // Lock final deterministic state after the sequence completes.
        // Guarantees pixel-perfect stack state during scrubbing in both directions.
        const settleTime = CARD_STARTS[totalCards - 1] + ENTRANCE_DURATION;
        orderedCards.forEach((card, seq) => {
          const depth = (totalCards - 1) - seq; // 0 for Horizon (top), 3 for Go Cart (bottom)
          tl.set(
            card,
            {
              y: depth * STACK_Y,
              x: depth * STACK_X,
              rotation: ROTATIONS[depth],
              scale: 1,
              opacity: 1,
              visibility: "visible",
              zIndex: (seq + 1) * 10,
            },
            settleTime
          );
        });

        // 7. Hand-off: the mask now covers the viewport, so drop it entirely.
        // From here the Projects section is a normal, unmasked block in the document flow.
        tl.set(projectsWorld, { maskImage: "none", WebkitMaskImage: "none" }, 0.89);

        return tl;
      };

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        buildTimeline(DESKTOP);
      });
      mm.add("(max-width: 767px)", () => {
        buildTimeline(MOBILE);
      });

      // Font metrics change the word's width and the gap's position, so re-measure after fonts load.
      let cancelled = false;
      if (typeof document !== "undefined" && document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelled) ScrollTrigger.refresh();
        });
      }

      return () => {
        cancelled = true;
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id="projects"
      className="relative w-full bg-white select-none"
      aria-label="Hero to Projects Section Transition"
    >
      {/* PINNED VIEWPORT STAGE */}
      <div
        ref={viewportRef}
        className="w-full h-screen relative overflow-hidden bg-white flex items-center justify-center will-change-transform"
      >
        {/* 1. HERO LAYER */}
        <div
          ref={heroWrapperRef}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-start z-10 will-change-[transform,opacity]"
        >
          {children}
        </div>

        {/* 2. MASKED PORTAL: cat.png is its CSS mask; ProjectsContent is its child */}
        <MaskedProjectsPortal portalRef={projectsWorldRef} innerRef={worldInnerRef}>
          <ProjectsContent
            dividerRef={dividerLineRef}
            cardRefs={projectCardRefs}
          />
        </MaskedProjectsPortal>

        {/* 3. TYPOGRAPHY STAGE: P R O J [ gap ] E C T S
            The gap is an empty slot. The cat-shaped window of the masked portal sits in it. */}
        <ProjectsTypography
          wordWrapperRef={wordWrapperRef}
          gapRef={gapRef}
          letterRefs={letterRefs}
        />
      </div>
    </div>
  );
}
