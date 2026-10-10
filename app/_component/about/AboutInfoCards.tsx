import type React from "react";
import InfoCard from "./InfoCard";

export default function AboutInfoCards() {
  const cards = [
    {
      number: "01",
      title: "What I Do",
      description:
        "Build full-stack web applications with modern technologies like Next.js, React, Node.js and PostgreSQL. I enjoy creating interactive, user-friendly products.",
      variant: "yellow" as const,
      icon: "target" as const,
      rotationClass: "-rotate-2 sm:-rotate-3",
      hasLayeredStack: true,
    },
    {
      number: "02",
      title: "Background",
      description:
        "Mechanical Engineering graduate, transitioned to software development and self-learning ever since. Always curious about how things work and love understanding the tech behind them.",
      variant: "white" as const,
      icon: "education" as const,
      rotationClass: "rotate-1 sm:rotate-1",
      hasLayeredStack: false,
    },
    {
      number: "03",
      title: "Interests",
      description:
        "Web development, system design, ML/DS, animations (GSAP), and exploring new technologies. I also enjoy gaming, movies, music, reading and working on fun side projects.",
      variant: "cream" as const,
      icon: "lightbulb" as const,
      rotationClass: "-rotate-1 sm:rotate-2",
      hasLayeredStack: false,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Playful Handwritten Sticker Note & Curved Arrow */}
      <div className="hidden lg:flex items-center justify-end gap-3 mb-6 pr-6 -translate-y-2 select-none pointer-events-none">
        <div className="text-right -rotate-10">
          <p className="font-editorial italic text-base xl:text-lg text-neutral-600 leading-tight">
            Building
            <br />
            interactive
            <br />
            experiences
            <br />
            one project
            <br />
            at a time.
          </p>
        </div>

        {/* Curved arrow pointing down toward the cards */}
        <div className="w-10 h-14 relative translate-y-2">
          <svg
            viewBox="0 0 50 65"
            fill="none"
            className="w-full h-full text-neutral-600"
          >
            <path
              d="M 10 8 C 36 10, 44 26, 32 54"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 24 46 L 31 55 L 40 47"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 items-start">
        {cards.map((card) => (
          <div key={card.number} className="about-info-card w-full">
            <InfoCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
