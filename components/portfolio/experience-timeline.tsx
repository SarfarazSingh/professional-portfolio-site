"use client";

import { useState } from "react";
import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";

const filters = [
  { value: "all", label: "Full trajectory" },
  { value: "ai", label: "AI & digital" },
  { value: "engineering", label: "Mission-critical" },
] as const;

export function ExperienceTimeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const items =
    filter === "all"
      ? experience
      : experience.filter((item) => item.lenses.includes(filter));

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.12em]",
              filter === item.value
                ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                : "border-ink/10 text-steel dark:border-paper/10",
            )}
            aria-pressed={filter === item.value}
          >
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-[5px] top-0 w-px bg-ink/10 dark:bg-paper/10 sm:left-[140px]" />
        <div className="grid gap-14">
          {items.map((item) => (
            <article
              key={`${item.organisation}-${item.period}`}
              className="relative grid gap-5 pl-8 sm:grid-cols-[110px_1fr] sm:gap-10 sm:pl-0"
            >
              <span className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-paper bg-signal ring-1 ring-ink/15 dark:border-[#0d141b] dark:ring-paper/15 sm:left-[135px]" />
              <p className="font-mono text-[9px] tracking-[0.13em] text-steel">
                {item.period}
              </p>
              <div className="border-b border-ink/10 pb-14 dark:border-paper/10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow">{item.organisation}</p>
                    <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.04em]">
                      {item.role}
                    </h2>
                  </div>
                  <span className="rounded-full border border-ink/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-steel dark:border-paper/10">
                    {item.phase}
                  </span>
                </div>
                <p className="mt-6 max-w-3xl text-base leading-7 text-steel">
                  {item.scope}
                </p>
                <ul className="mt-7 grid gap-3">
                  {item.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="grid max-w-3xl grid-cols-[14px_1fr] gap-3 text-sm leading-6"
                    >
                      <span className="mt-2 size-1 rounded-full bg-signal" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
