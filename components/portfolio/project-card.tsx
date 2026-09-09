import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import type { Project } from "@/content/projects";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Reveal className="h-full">
      <a
        href={assetPath(`/work/${project.slug}`)}
        className={cn(
          "interactive-lift group relative flex h-full min-h-[420px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8",
          large && "lg:min-h-[500px]",
        )}
      >
        <div className="absolute inset-x-0 top-0 h-0.5 bg-signal" />
        <div className="flex items-start justify-between">
          <div>
            <p className="section-label">{project.kicker}</p>
            <p className="instrument-readout mt-2">
              {project.year} · {project.category}
            </p>
          </div>
          <span className="grid size-11 place-items-center rounded-full border border-line-strong group-hover:border-signal group-hover:text-signal">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <div className="my-auto py-10">
          <h3
            className={cn(
              "max-w-xl [font-size:var(--type-h3)] leading-none tracking-[-0.04em]",
              large && "lg:text-6xl",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl leading-7 text-copy-muted">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <span className="text-sm font-semibold">Read case study</span>
          <span className="instrument-readout">
            {project.lens.join(" + ")}
          </span>
        </div>
      </a>
    </Reveal>
  );
}
