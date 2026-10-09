import type React from "react";
import TechItem, { type TechItemProps } from "./TechItem";

interface TechCategory {
  title: string;
  technologies: TechItemProps[];
}

const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

export default function TechStack() {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      technologies: [
        {
          name: "HTML5",
          iconSrc: `${IMAGEKIT_URL}/icons/html5.svg`,
        },
        {
          name: "CSS3",
          iconSrc: `${IMAGEKIT_URL}/icons/css3.svg`,
        },
        {
          name: "JavaScript",
          iconSrc: `${IMAGEKIT_URL}/icons/square-js.svg`,
        },
        {
          name: "TypeScript",
          iconSrc: `${IMAGEKIT_URL}/icons/ts.webp`,
        },
        {
          name: "React.js",
          iconSrc: `${IMAGEKIT_URL}/icons/react_logo.svg`,
        },
        {
          name: "Next.js",
          iconSrc: `${IMAGEKIT_URL}/icons/nextjs.svg`,
        },
        {
          name: "Tailwind CSS",
          iconSrc: `${IMAGEKIT_URL}/icons/tailwind.svg`,
        },
        {
          name: "GSAP",
          iconSrc: `${IMAGEKIT_URL}/icons/GSAPIcon.svg`,
        },
        {
          name: "Framer Motion",
          iconSrc: `${IMAGEKIT_URL}/icons/framer_motion.png`,
        },
        {
          name: "Redux Toolkit",
          iconSrc: `${IMAGEKIT_URL}/icons/redux.svg`,
        },
        {
          name: "Zustand",
          iconSrc: `${IMAGEKIT_URL}/icons/zustand.jpg`,
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "Node.js",
          iconSrc: `${IMAGEKIT_URL}/icons/node.webp`,
        },
        {
          name: "Express.js",
          iconSrc: `${IMAGEKIT_URL}/icons/expressjs.svg`,
        },
        {
          name: "Python",
          iconSrc: `${IMAGEKIT_URL}/icons/python.png`,
        },
        {
          name: "RESTful APIs",
          iconSrc: `${IMAGEKIT_URL}/icons/rest.png`,
        },
      ],
    },
    {
      title: "Database & DevOps",
      technologies: [
        {
          name: "PostgreSQL",
          iconSrc: `${IMAGEKIT_URL}/icons/postgresql.svg`,
        },
        {
          name: "MongoDB",
          iconSrc: `${IMAGEKIT_URL}/icons/mongodb.svg`,
        },
        {
          name: "NeonDB",
          iconSrc: `${IMAGEKIT_URL}/icons/neon.svg`,
        },
        {
          name: "Docker",
          iconSrc: `${IMAGEKIT_URL}/icons/docker.png`,
        },
        {
          name: "Git/GitHub",
          iconSrc: `${IMAGEKIT_URL}/icons/github.svg`,
        },
        {
          name: "Vercel",
          iconSrc: `${IMAGEKIT_URL}/icons/vercel.svg`,
        },
        {
          name: "Redis",
          iconSrc: `${IMAGEKIT_URL}/icons/redis.png`,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-4.5 sm:p-7 lg:p-8 2xl:p-9 border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] select-none">
      {/* Panel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-neutral-100 mb-4 sm:mb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <h3 className="font-display font-black text-xl sm:text-2xl 2xl:text-3xl uppercase tracking-tight text-neutral-900 leading-none">
              Tech Stack
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 font-normal">
            Technologies and tools I use to craft digital experiences.
          </p>
        </div>

        {/* Pill Badge on Top Right */}
        <div className="self-start sm:self-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-amber-50/90 border border-amber-200/70 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span className="font-sans text-[10px] sm:text-xs font-medium text-neutral-700 whitespace-nowrap">
              Always learning more and adapting based on requirement...
            </span>
          </div>
        </div>
      </div>

      {/* Categorized Technology Groups */}
      <div className="flex flex-col gap-6 sm:gap-7">
        {techCategories.map((category) => (
          <div key={category.title} className="flex flex-col">
            {/* Subtle Category Heading */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {category.title}
              </span>
              <span className="flex-1 h-px bg-neutral-200/80" />
            </div>

            {/* Responsive Wrapping Layout */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {category.technologies.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
