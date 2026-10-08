import type React from "react";
import TechItem, { type TechItemProps } from "./TechItem";

interface TechCategory {
  title: string;
  technologies: TechItemProps[];
}

export default function TechStack() {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      technologies: [
        {
          name: "HTML5",
          iconSrc: "/icons/html5.svg",
        },
        {
          name: "CSS3",
          iconSrc: "/icons/css3.svg",
        },
        {
          name: "JavaScript",
          iconSrc: "/icons/square-js.svg",
        },
        {
          name: "TypeScript",
          iconSvg: (
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md">
              <rect width="32" height="32" rx="4" fill="#3178C6" />
              <path
                d="M8.5 12h8v2.5h-2.7v9H11.2v-9H8.5V12zm9 4.8c.8-.6 1.8-.9 2.8-.9 1.4 0 2.4.4 3 1.1.6.7.9 1.6.9 2.7 0 .8-.2 1.6-.7 2.2-.5.6-1.1 1.1-1.9 1.4-.8.3-1.8.5-2.9.5-1 0-1.9-.2-2.7-.5v-2.6c.8.5 1.7.8 2.6.8.8 0 1.4-.2 1.8-.5.4-.3.6-.8.6-1.3 0-.5-.2-.9-.5-1.2-.4-.3-1-.6-2-.9-1.2-.4-2-.9-2.6-1.5-.6-.6-.9-1.4-.9-2.3 0-.8.2-1.6.7-2.2.5-.6 1.2-1.1 2-1.4.8-.3 1.8-.5 2.8-.5 1 0 1.8.2 2.6.5v2.5c-.8-.4-1.6-.7-2.5-.7-.7 0-1.2.2-1.6.5-.4.3-.6.7-.6 1.2 0 .5.2.9.5 1.1.4.3 1 .6 1.9.9z"
                fill="#FFFFFF"
              />
            </svg>
          ),
        },
        {
          name: "React.js",
          iconSrc: "/icons/react_logo.svg",
        },
        {
          name: "Next.js",
          iconSrc: "/icons/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "/icons/tailwind.svg",
        },
        {
          name: "GSAP",
          iconSrc: "/icons/GSAPIcon.svg",
        },
        {
          name: "Framer Motion",
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 sm:w-6 sm:h-6" fill="none">
              <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "Node.js",
          iconSvg: (
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
              <path
                d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5z"
                fill="#539E43"
              />
              <path
                d="M16 4.8l9.7 5.6v11.2L16 27.2 6.3 21.6V10.4L16 4.8z"
                fill="#68BC55"
              />
              <path
                d="M15.8 10.5c.3 0 .7.1 1 .3l4.2 2.4c.6.4.7 1.1.4 1.7-.4.6-1.1.7-1.7.4l-3.9-2.2v8.2c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3v-8.2l-3.9 2.2c-.6.3-1.4.2-1.7-.4-.3-.6-.2-1.4.4-1.7l4.2-2.4c.3-.2.6-.3.9-.3z"
                fill="#FFFFFF"
              />
            </svg>
          ),
        },
        {
          name: "Express.js",
          iconSvg: (
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
              <circle cx="16" cy="16" r="14" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
              <text
                x="16"
                y="20.5"
                textAnchor="middle"
                fill="#111827"
                fontSize="12"
                fontWeight="800"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="-0.5px"
              >
                ex
              </text>
            </svg>
          ),
        },
        {
          name: "Python",
          iconSvg: (
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
              <path
                d="M15.9 2c-4.2 0-7 1.8-7 4.2v3.1h7.1v1H5.9C3.6 10.3 2 13 2 16.5c0 3.7 1.9 6.2 4.4 6.2h2.5v-3.1c0-2.4 2.1-4.4 4.5-4.4h6.9c2 0 3.6-1.6 3.6-3.6V6.2C23.9 3.8 20.3 2 15.9 2zm-2.2 2.5c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z"
                fill="#3776AB"
              />
              <path
                d="M16.1 30c4.2 0 7-1.8 7-4.2v-3.1H16v-1h10.1c2.3 0 3.9-2.7 3.9-6.2 0-3.7-1.9-6.2-4.4-6.2h-2.5v3.1c0 2.4-2.1 4.4-4.5 4.4H11.2c-2 0-3.6 1.6-3.6 3.6v5.4c0 2.4 3.6 4.2 8.5 4.2zm2.2-2.5c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z"
                fill="#FFD438"
              />
            </svg>
          ),
        },
        {
          name: "RESTful APIs",
          iconSvg: (
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
              <rect width="32" height="32" rx="7" fill="#E0F2FE" />
              <rect x="1.5" y="1.5" width="29" height="29" rx="5.5" stroke="#BAE6FD" strokeWidth="1" fill="none" />
              <text
                x="16"
                y="20"
                textAnchor="middle"
                fill="#0284C7"
                fontSize="10"
                fontWeight="800"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.5px"
              >
                API
              </text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Database & DevOps",
      technologies: [
        {
          name: "PostgreSQL",
          iconSrc: "/icons/postgresql.svg",
        },
        {
          name: "MongoDB",
          iconSrc: "/icons/mongodb.svg",
        },
        {
          name: "NeonDB",
          iconSrc: "/icons/neon.svg",
        },
        {
          name: "Docker",
          iconSvg: (
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 sm:w-6 sm:h-6">
              <path
                d="M29.5 14.2c-.5-.4-1.4-.6-2.3-.5-.3-.9-.9-1.6-1.7-2.1l-.9-.5-.5.9c-.6 1.2-.6 2.6 0 3.8-.4.2-.8.5-1.2.9H2.8C2.4 16.7 2 17 2 17.5c0 3.8 2.2 7.2 5.9 8.8 6.4 2.8 14.2 1.6 19.3-3 2.5-2.2 4-5.3 3.9-8.6-.5-.2-1.1-.4-1.6-.5zM6.9 15.6H4.2v-2.7h2.7v2.7zm3.7 0H7.9v-2.7h2.7v2.7zm3.7 0h-2.7v-2.7h2.7v2.7zm3.7 0h-2.7v-2.7h2.7v2.7zm3.8 0h-2.7v-2.7h2.7v2.7zm0-3.7h-2.7V9.2h2.7v2.7zm-3.8 0h-2.7V9.2h2.7v2.7zm-3.7 0h-2.7V9.2h2.7v2.7zm0-3.7h-2.7V5.5h2.7v2.7z"
                fill="#2496ED"
              />
            </svg>
          ),
        },
        {
          name: "Git/GitHub",
          iconSrc: "/icons/github.svg",
        },
        {
          name: "Vercel",
          iconSrc: "/icons/vercel.svg",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] select-none">
      {/* Panel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 mb-6 sm:mb-7">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-900 leading-none">
              Tech Stack
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 font-normal">
            Technologies and tools I use to craft digital experiences.
          </p>
        </div>

        {/* Pill Badge on Top Right */}
        <div className="self-start sm:self-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/70 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span className="font-sans text-xs font-medium text-neutral-700 whitespace-nowrap">
              Always learning more...
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
