"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { profile, type Lens } from "@/content/profile";
import { cn } from "@/lib/utils";

export function HomeHero({ initialLens = "ai" }: { initialLens?: Lens }) {
  const [lens, setLens] = useState<Lens>(initialLens);

  function selectLens(next: Lens) {
    setLens(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lens", next);
    window.history.replaceState({}, "", url);
  }

  const content = profile.lenses[lens];

  return (
    <section className="relative overflow-hidden border-b border-ink/10 dark:border-paper/10">
      <div className="absolute inset-0 blueprint-grid opacity-50 dark:opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4 font-mono text-[9px] tracking-[0.16em] text-steel dark:border-paper/10">
          <span>MADRID · 40.4168° N, 3.7038° W</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-signal animate-pulse" />
            IE MBA · BLUE TORCH · BUILDING IN SPAIN
          </span>
        </div>

        <div className="grid min-h-[540px] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">{content.eyebrow}</p>
            <h1 className="max-w-5xl text-balance font-serif text-[clamp(4.25rem,9vw,8.8rem)] leading-[0.82] tracking-[-0.065em]">
              Complex
              <br />
              technology.
              <br />
              <span className="text-steel">Made operational.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-steel sm:text-lg">
              Currently at IE Business School in Madrid—leading communities,
              building ventures, and turning applied AI into products for real
              operators and users.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-ocean dark:bg-paper dark:text-ink dark:hover:bg-signal dark:hover:text-white"
              >
                Explore selected work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/recruiter"
                className="inline-flex h-12 items-center rounded-full border border-ink/15 px-6 text-sm font-medium transition-colors hover:border-signal hover:text-signal dark:border-paper/15"
              >
                Open recruiter brief
              </Link>
            </div>
          </div>

          <div className="lg:pb-2">
            <div className="rounded-[1.75rem] border border-ink/15 bg-paper/85 p-5 backdrop-blur dark:border-paper/15 dark:bg-ink/85 sm:p-6">
              <p className="mb-4 font-mono text-[9px] tracking-[0.16em] text-steel">
                CHOOSE YOUR LENS
              </p>
              <div className="grid gap-2" role="group" aria-label="Choose portfolio lens">
                {(Object.keys(profile.lenses) as Lens[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectLens(key)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-4 text-left text-sm transition-all",
                      lens === key
                        ? "border-signal bg-signal/8"
                        : "border-ink/10 hover:border-ink/30 dark:border-paper/10 dark:hover:border-paper/30",
                    )}
                    aria-pressed={lens === key}
                  >
                    <span>
                      {key === "ai"
                        ? "AI & Digital Transformation"
                        : "Engineering & Mission-Critical"}
                    </span>
                    {lens === key ? (
                      <span className="grid size-6 place-items-center rounded-full bg-signal text-white">
                        <Check className="size-3.5" />
                      </span>
                    ) : (
                      <ArrowDownRight className="size-4 text-steel" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 border-t border-ink/10 pt-6 dark:border-paper/10">
                <p className="font-serif text-3xl leading-none tracking-[-0.035em]">
                  {content.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-steel">
                  {content.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-paper/10 dark:bg-paper/10 lg:grid-cols-4">
          {profile.proof.map((item) => (
            <div key={item.value} className="bg-paper p-5 dark:bg-ink sm:p-6">
              <p className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 max-w-[190px] text-xs leading-5 text-steel">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
