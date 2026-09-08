import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Crosshair } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

const ventures = [
  {
    name: "TrackSense AI",
    detail: "Predictive infrastructure intelligence",
    href: "/work/tracksense",
  },
  {
    name: "Weave",
    detail: "Curated community experiences in Madrid",
    href: "https://weave-pitch-deck.vercel.app",
  },
  {
    name: "Loco Dhaasu",
    detail: "Campus F&B venture and go-to-market experiment",
    href: "https://loco-dhaasu.vercel.app",
  },
] as const;

export function CurrentChapter() {
  const chapter = profile.currentChapter;

  return (
    <section
      id="current-chapter"
      className="border-b border-ink/10 dark:border-paper/10"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <Reveal className="flex flex-col">
            <div>
              <p className="eyebrow">{chapter.eyebrow}</p>
              <h2 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                {chapter.title}
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">
                {chapter.description}
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-paper/10 dark:bg-paper/10 sm:grid-cols-2">
              {chapter.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="grid grid-cols-[32px_1fr] gap-3 bg-paper p-4 dark:bg-[#0d141b]"
                >
                  <span className="font-mono text-[9px] text-signal">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/experience"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-sm font-medium text-paper dark:bg-paper dark:text-ink"
              >
                Explore the IE chapter
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={assetPath("/credentials/ie-blue-torch-award.pdf")}
                target="_blank"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-ink/15 px-6 text-sm font-medium dark:border-paper/15"
              >
                View Blue Torch credential
                <Award className="size-4 text-amber" />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-[#07131d] text-paper"
          >
            <div className="tech-grid absolute inset-0 opacity-70" />
            <div className="absolute left-1/2 top-[42%] size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/20">
              <div className="absolute inset-8 rounded-full border border-paper/10" />
              <div className="absolute inset-16 rounded-full border border-signal/30" />
              <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border-t border-signal" />
            </div>
            <div className="relative flex h-full min-h-[620px] flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] tracking-[0.16em] text-paper/45">
                  MADRID VENTURE MAP · 2025—26
                </p>
                <Crosshair className="size-4 animate-[spin_10s_linear_infinite] text-signal" />
              </div>

              <div className="my-auto text-center">
                <p className="font-mono text-[9px] tracking-[0.2em] text-signal">
                  40.4168° N · 3.7038° W
                </p>
                <p className="mt-4 font-serif text-6xl tracking-[-0.05em]">
                  Madrid
                </p>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-paper/45">
                  A live laboratory for infrastructure AI, community products,
                  and founder-led go-to-market.
                </p>
              </div>

              <div className="grid gap-2">
                {ventures.map((venture) => (
                  <Link
                    key={venture.name}
                    href={venture.href}
                    target={venture.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-paper/10 bg-paper/[0.04] p-4 backdrop-blur transition-colors hover:border-signal/50 hover:bg-signal/10"
                  >
                    <span>
                      <span className="block text-sm font-semibold">
                        {venture.name}
                      </span>
                      <span className="mt-1 block text-xs text-paper/50">
                        {venture.detail}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-paper/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
