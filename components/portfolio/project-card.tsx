import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import type { Project } from "@/content/projects";
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
      <Link
        href={`/work/${project.slug}`}
        className={cn(
          "group relative flex min-h-[390px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8",
          large && "lg:min-h-[560px]",
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
            "max-w-xl text-[var(--type-h3)] leading-none tracking-[-0.04em]",
            large && "lg:text-7xl",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-5 max-w-xl text-lg leading-8 text-copy-muted">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <span className="text-sm font-semibold">Read case study</span>
        <span className="instrument-readout">
          {project.lens.join(" + ")}
        </span>
      </div>
      </Link>
    </Reveal>
  );
}
