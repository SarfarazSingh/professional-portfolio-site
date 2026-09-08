import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const accents = {
  teal: "bg-signal",
  ocean: "bg-ocean",
  amber: "bg-amber",
  steel: "bg-steel",
};

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
          "group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-signal/10 dark:border-paper/10 sm:p-8",
          large && "lg:min-h-[560px]",
        )}
      >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 transition-[height] duration-500 group-hover:h-2",
          accents[project.accent],
        )}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow">{project.kicker}</p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-steel">
            {project.year} · {project.category}
          </p>
        </div>
        <span className="grid size-10 place-items-center rounded-full border border-ink/10 transition-colors group-hover:bg-ink group-hover:text-paper dark:border-paper/10 dark:group-hover:bg-paper dark:group-hover:text-ink">
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <div className="my-auto py-10">
        <span className="font-mono text-xs text-steel">CASE {project.index}</span>
        <h3
          className={cn(
            "mt-4 max-w-xl font-serif text-4xl leading-none tracking-[-0.045em] sm:text-5xl",
            large && "lg:text-7xl",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-steel">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5 dark:border-paper/10">
        <span className="text-sm font-medium">Read case study</span>
        <span className="font-mono text-[9px] tracking-[0.12em] text-steel">
          {project.lens.map((lens) => lens.toUpperCase()).join(" + ")}
        </span>
      </div>
      </Link>
    </Reveal>
  );
}
