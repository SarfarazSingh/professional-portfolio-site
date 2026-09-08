"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import { phases } from "@/content/experience";
import { cn } from "@/lib/utils";

export function CareerTopology() {
  const [active, setActive] = useState<(typeof phases)[number]["id"]>("build");
  const selected = phases.find((phase) => phase.id === active) ?? phases[0];

  return (
    <section
      className="station bg-ground/96"
      aria-labelledby="trajectory-title"
    >
      <Reveal className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-label">Career trajectory</p>
            <h2
              id="trajectory-title"
              className="mt-4 text-balance text-[var(--type-h2)] leading-[0.88] tracking-[-0.045em]"
            >
              One operating system.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-copy-muted">
            The environments changed. The method did not: understand the
            system, establish control, align people, and make technology useful
            at the point of decision.
          </p>
        </div>

        <div className="border border-line bg-surface">
          <div className="instrument-readout flex items-center justify-between border-b border-line p-5 sm:px-8">
            <span>Operate → Transform → Build</span>
            <span className="text-signal">Active</span>
          </div>

          <div className="grid lg:grid-cols-3">
            {phases.map((phase) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActive(phase.id)}
                className={cn(
                  "group relative min-h-72 border-b border-line p-6 text-left last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0",
                  active === phase.id
                    ? "bg-copy text-ground"
                    : "bg-surface text-copy hover:bg-surface-raised",
                )}
                aria-pressed={active === phase.id}
              >
                <div className="mb-16 flex items-center justify-between">
                  <span
                    className={cn(
                      "instrument-readout grid size-11 place-items-center rounded-full border",
                      active === phase.id
                        ? "border-signal bg-signal text-ground"
                        : "border-line-strong",
                    )}
                  >
                    {phase.number}
                  </span>
                  <span
                    className={cn(
                      "instrument-readout",
                      active === phase.id && "text-ground",
                    )}
                  >
                    {phase.years}
                  </span>
                </div>
                <h3 className="text-[var(--type-h3)] leading-none tracking-[-0.035em]">
                  {phase.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 max-w-xs leading-7",
                    active === phase.id
                      ? "text-ground"
                      : "text-copy-muted",
                  )}
                >
                  {phase.statement}
                </p>
              </button>
            ))}
          </div>

          <div className="grid gap-4 border-t border-line bg-ground p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
            <span className="instrument-readout text-signal">
              Selected / {selected.title}
            </span>
            <p className="text-lg font-semibold">{selected.statement}</p>
            <ArrowDownRight className="size-5 text-signal" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
