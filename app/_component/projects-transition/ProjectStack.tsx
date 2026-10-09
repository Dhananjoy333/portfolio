"use client";

import { projects } from "@/app/_component/data";
import ProjectCard from "./ProjectCard";
import type { ProjectStackProps } from "./types";

export default function ProjectStack({ cardRefs }: ProjectStackProps) {
  return (
    <div
      className="
        relative
        w-full
        min-h-130
        sm:min-h-160
        md:min-h-180
        lg:min-h-180
        2xl:min-h-225
        mt-3
        sm:mt-5
        lg:mt-5
        2xl:mt-16
      "
    >
      {projects.map((project, index) => (
        <div
          key={project.title}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          className="
            absolute
            left-0
            top-0
            w-full
            will-change-transform
          "
        >
          <ProjectCard
            project={project}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}