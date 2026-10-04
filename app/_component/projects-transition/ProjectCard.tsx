"use client";

import Image from "next/image";
import type { projects } from "@/app/_component/data";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const PROJECT_META: Record<
  string,
  {
    category: string;
    bg: string;
    pill: string;
    decorative: string;
  }
> = {
  "Go Cart": {
    category: "ECOMMERCE",
    bg: "bg-[#e5f8e3]",
    pill: "bg-[#c8edc5] text-[#285f2b]",
    decorative: "bg-[#c7edc4]",
  },

  "World Quiz": {
    category: "GAME",
    bg: "bg-[#ffe2e5]",
    pill: "bg-[#ffc5cb] text-[#9d303c]",
    decorative: "bg-[#f7c5cb]",
  },

  "Byte Battle": {
    category: "GAME",
    bg: "bg-[#fff1bf]",
    pill: "bg-[#f8dc72] text-[#765900]",
    decorative: "bg-[#f7df8d]",
  },

  "Code Box": {
    category: "EDUCATION",
    bg: "bg-[#e3efff]",
    pill: "bg-[#c5dcff] text-[#285b9e]",
    decorative: "bg-[#c7ddff]",
  },
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const meta =
    PROJECT_META[project.title] ?? {
      category: "PROJECT",
      bg: "bg-neutral-100",
      pill: "bg-neutral-200 text-neutral-700",
      decorative: "bg-neutral-200",
    };

const description = project.description;

  return (
    <article
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[28px]
        ${meta.bg}
        border border-black/4
        shadow-[0_18px_50px_rgba(0,0,0,0.08)]
        transition-shadow
        duration-500
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]
      `}
    >
      {/* Decorative background shapes */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -bottom-24
          h-72
          w-72
          rounded-full
          ${meta.decorative}
          opacity-60
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          right-24
          -bottom-25
          h-48
          w-48
          rounded-full
          ${meta.decorative}
          opacity-40
        `}
      />

      {/* Main content */}
      <div className="relative z-10 p-4 sm:p-5 lg:p-6">
        {/* Top metadata */}
        <div className="mb-4 flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-medium tracking-wider text-neutral-800">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-10 bg-neutral-900/30" />
          </div>

          <span className="font-mono text-[11px] font-medium tracking-wider text-neutral-700">
            {project.year}
          </span>
        </div>

        {/* Card grid */}
        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-8">
          {/* Screenshot */}
          <div className="relative aspect-16/10 overflow-hidden rounded-[20px] bg-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="
                object-cover
                object-top
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.025]
              "
              priority={index === 0}
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/8 via-transparent to-white/8" />
          </div>

          {/* Information */}
          <div className="flex min-w-0 flex-col px-1 pb-2 lg:pr-5">
            {/* Category */}
            <div className="mb-4">
              <span
                className={`
                  inline-flex
                  rounded-full
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  tracking-widest
                  ${meta.pill}
                `}
              >
                {meta.category}
              </span>
            </div>

            {/* Title */}
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2
                className="
                  font-display
                  text-4xl
                  font-black
                  uppercase
                  leading-[0.85]
                  tracking-tight
                  text-neutral-950
                  sm:text-5xl
                  xl:text-6xl
                "
              >
                {project.title}
              </h2>
            </div>

            {/* Tech stack */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/6
                    bg-white/65
                    px-3
                    py-2
                    shadow-sm
                    backdrop-blur-sm
                  "
                >
                  <Image
                    src={tech.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-[10px] font-medium text-neutral-800 sm:text-[11px] 2xl:text-[12px]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p
              className="
                mb-6
                max-w-xl
                text-sm
                leading-relaxed
                text-neutral-700
                sm:text-[15px]
              "
            >
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-neutral-950
                  px-5
                  py-3
                  text-[10px]
                  font-semibold
                  tracking-widest
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-neutral-800
                  hover:shadow-lg
                "
              >
                VISIT SITE

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M7 17L17 7M8 7h9v9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-neutral-900/30
                  bg-white/45
                  px-5
                  py-3
                  text-[10px]
                  font-semibold
                  tracking-widest
                  text-neutral-900
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                "
              >
                GITHUB

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}