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
        min-h-190
        sm:min-h-205
        lg:min-h-225
        mt-12
        sm:mt-16
        lg:mt-20
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