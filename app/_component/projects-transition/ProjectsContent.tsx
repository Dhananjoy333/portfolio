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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 select-none">
          <div className="flex flex-col">
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

          <p className="font-sans text-xs sm:text-sm md:text-base lg:text-[17px] text-neutral-500 font-medium leading-relaxed tracking-tight max-w-xs sm:max-w-sm text-right self-end pb-1 md:pb-2">
            See how I transform concepts into engaging digital experience
          </p>
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