import type { ProjectsContentProps } from "./types";
import ProjectStack from "@/app/_component/projects-transition/ProjectStack";

export default function ProjectsContent({
  dividerRef,
  cardRefs,
}: ProjectsContentProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 pt-3 sm:pt-6 lg:pt-6 2xl:pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 select-none">
          <div className="flex flex-col">
            <span className="font-editorial italic text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl text-neutral-500 font-normal leading-tight">
              Featured
            </span>

            <h3
              className="
                font-display
                font-black
                uppercase
                text-neutral-900
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
                xl:text-8xl
                2xl:text-9xl
                leading-[0.84]
                tracking-tight
              "
            >
              PROJECTS
            </h3>
          </div>

          <p className="font-sans text-[11px] sm:text-xs md:text-sm lg:text-sm 2xl:text-[17px] text-neutral-500 font-medium leading-relaxed tracking-tight max-w-xs sm:max-w-sm text-left md:text-right self-start md:self-end pb-1 md:pb-2">
            See how I transform concepts into engaging digital experience
          </p>
        </div>

        <div
          ref={dividerRef}
          className="w-full h-px bg-neutral-300 origin-left mt-1 sm:mt-2"
        />
      </div>

      {/* Project Stack */}
      <ProjectStack cardRefs={cardRefs} />
    </div>
  );
}