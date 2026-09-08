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
              "min-h-11 rounded-full border px-4 text-sm font-semibold",
              filter === item.value
                ? "border-signal bg-signal text-ground"
                : "border-line-strong text-copy-muted hover:border-signal hover:text-copy",
            )}
            aria-pressed={filter === item.value}
          >
            {item.label}
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
