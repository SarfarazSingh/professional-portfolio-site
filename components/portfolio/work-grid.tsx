"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

const filters = [
  { value: "all", label: "All evidence" },
  { value: "ai", label: "AI & digital" },
  { value: "engineering", label: "Mission-critical" },
] as const;

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.lens.includes(filter));

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.12em] transition-colors",
              filter === item.value
                ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                : "border-ink/10 text-steel hover:border-signal hover:text-signal dark:border-paper/10",
            )}
            aria-pressed={filter === item.value}
          >
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            large={index === 0 && filter === "all"}
          />
        ))}
      </div>
    </>
  );
}
