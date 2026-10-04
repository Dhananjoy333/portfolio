import type { ProjectsContentProps } from "./types";
import ProjectStack from "@/app/_component/projects-transition/ProjectStack";

export default function ProjectsContent({
  dividerRef,
  cardRefs,
}: ProjectsContentProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full flex flex-col gap-6 md:gap-8 pt-8 sm:pt-12">
        <div className="flex flex-col select-none">
          <span className="font-editorial italic text-3xl sm:text-4xl md:text-5xl text-neutral-500 font-normal leading-tight">
            Featured
          </span>

          <h3
            className="
              font-display
              font-black
              uppercase
              text-neutral-900
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
              leading-[0.84]
              tracking-tight
            "
          >
            PROJECTS
          </h3>
        </div>

        <div
          ref={dividerRef}
          className="w-full h-px bg-neutral-300 origin-left mt-2"
        />
      </div>

      {/* Project Stack */}
      <ProjectStack cardRefs={cardRefs} />
    </div>
  );
}