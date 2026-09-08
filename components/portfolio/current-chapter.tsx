import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
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
    <section className="border-b border-ink/10 dark:border-paper/10">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="flex flex-col">
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
          </div>

          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-ocean">
            <Image
              src={assetPath("/images/sarfaraz-singh-wahad-portrait.png")}
              alt="Portrait of Sarfaraz Singh Wahad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-ink/92 p-5 text-paper backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-mono text-[9px] tracking-[0.16em] text-paper/55">
                  BUILT IN SPAIN · 2025—26
                </p>
                <span className="size-2 rounded-full bg-signal" />
              </div>
              <div className="grid gap-3">
                {ventures.map((venture) => (
                  <Link
                    key={venture.name}
                    href={venture.href}
                    target={venture.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center justify-between gap-4 border-t border-paper/10 pt-3"
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
          </div>
        </div>
      </div>
    </section>
  );
}
