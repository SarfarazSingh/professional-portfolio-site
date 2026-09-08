"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { phases } from "@/content/experience";
import { cn } from "@/lib/utils";

export function CareerTopology() {
  const [active, setActive] = useState<(typeof phases)[number]["id"]>("build");
  const reduceMotion = useReducedMotion();
  const selected = phases.find((phase) => phase.id === active) ?? phases[0];

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="trajectory-title"
    >
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">CAREER TRAJECTORY · 01—03</p>
          <h2 id="trajectory-title" className="mt-4 text-balance font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            One operating
            <br />
            <span className="text-steel">system.</span>
          </h2>
        </div>
        <p className="max-w-2xl self-end text-lg leading-8 text-steel">
          The environments changed. The method did not: understand the system,
          establish control, align people, and make technology useful at the
          point of decision.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-5 text-paper sm:p-8 lg:p-10">
        <div
          className="absolute inset-0 opacity-25"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,244,239,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(245,244,239,.09) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="relative mb-12 flex items-center justify-between font-mono text-[10px] tracking-[0.15em] text-paper/55">
          <span>SYSTEM MAP / CAREER</span>
          <span>STATUS · ACTIVE</span>
        </div>

        <div className="relative grid gap-4 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-paper/20 lg:block" />
          {phases.map((phase) => (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActive(phase.id)}
              className={cn(
                "group relative rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6",
                active === phase.id
                  ? "border-signal bg-paper text-ink"
                  : "border-paper/15 bg-ink/80 text-paper hover:border-paper/35",
              )}
              aria-pressed={active === phase.id}
            >
              <div className="mb-14 flex items-center justify-between">
                <span
                  className={cn(
                    "grid size-10 place-items-center rounded-full border font-mono text-[10px]",
                    active === phase.id
                      ? "border-signal bg-signal text-white"
                      : "border-paper/20",
                  )}
                >
                  {phase.number}
                </span>
                <span className="font-mono text-[10px] tracking-[0.15em] opacity-55">
                  {phase.years}
                </span>
              </div>
              <h3 className="font-serif text-4xl tracking-[-0.04em]">
                {phase.title}
              </h3>
              <p
                className={cn(
                  "mt-3 max-w-xs text-sm leading-6",
                  active === phase.id ? "text-steel" : "text-paper/55",
                )}
              >
                {phase.statement}
              </p>
            </button>
          ))}
        </div>

        <div className="relative mt-6 grid gap-4 rounded-2xl border border-paper/10 bg-paper/[0.05] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
          <span className="font-mono text-[10px] tracking-[0.16em] text-signal">
            SELECTED / {selected.number}
          </span>
          <p className="text-lg font-medium">{selected.statement}</p>
          <ArrowDownRight className="size-5 text-signal" />
        </div>
      </div>
    </motion.section>
  );
}
