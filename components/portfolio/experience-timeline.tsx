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
              "min-h-11 rounded-full border px-4 text-sm font-semibold",
              filter === item.value
                ? "border-signal bg-signal text-ground"
                : "border-line-strong text-copy-muted",
            )}
            aria-pressed={filter === item.value}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-[5px] top-0 w-px bg-line sm:left-[140px]" />
        <div className="grid gap-14">
          {items.map((item) => (
            <article
              key={`${item.organisation}-${item.period}`}
              className="relative grid gap-5 pl-8 sm:grid-cols-[110px_1fr] sm:gap-10 sm:pl-0"
            >
              <span className="absolute left-0 top-1.5 size-[11px] border-2 border-ground bg-signal sm:left-[135px]" />
              <p className="instrument-readout">
                {item.period}
              </p>
              <div className="border-b border-line pb-14">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="section-label">{item.organisation}</p>
                    <h2 className="mt-3 text-[var(--type-h3)] leading-none tracking-[-0.04em]">
                      {item.role}
                    </h2>
                  </div>
                  <span className="instrument-readout rounded-[2px] border border-line px-3 py-1.5">
                    {item.phase}
                  </span>
                </div>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-copy-muted">
                  {item.scope}
                </p>
                <ul className="mt-7 grid gap-3">
                  {item.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="grid max-w-3xl grid-cols-[14px_1fr] gap-3 leading-7"
                    >
                      <span className="mt-2.5 size-1 bg-signal" />
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
