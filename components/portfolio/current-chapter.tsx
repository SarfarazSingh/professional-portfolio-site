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
    <section id="current-chapter" className="station bg-ground/96">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)]">
          <div className="flex flex-col">
            <div>
              <p className="section-label">Now in Madrid</p>
              <h2 className="mt-5 max-w-4xl text-[var(--type-h2)] leading-[0.86] tracking-[-0.045em]">
                {chapter.title}
              </h2>
              <p className="mt-7 max-w-[68ch] text-lg leading-8 text-copy-muted">
                {chapter.description}
              </p>
            </div>

            <div className="mt-12 grid border-y border-line sm:grid-cols-2">
              {chapter.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="min-h-24 border-b border-line p-4 leading-7 odd:sm:border-r"
                >
                  <span className="mr-3 inline-block size-1.5 bg-signal align-middle" />
                  {highlight}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={assetPath("/experience")}
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ground"
              >
                Explore the IE chapter
                <ArrowRight className="size-4" />
              </a>
              <a
                href={assetPath("/credentials/ie-blue-torch-award.pdf")}
                target="_blank"
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold hover:border-signal hover:text-signal"
              >
                View Blue Torch credential
                <Award className="size-4" />
              </a>
            </div>
          </div>

          <aside className="flex min-h-[560px] flex-col border border-line bg-surface">
            <div className="instrument-readout flex items-center justify-between border-b border-line p-5">
              <span>Madrid venture station · 2025–26</span>
              <Crosshair className="size-4 text-signal" />
            </div>

            <div className="grid flex-1 place-items-center border-b border-line p-8 text-center">
              <div>
                <p className="instrument-readout text-signal">
                  40.4168 N · 3.7038 W
                </p>
                <p className="mt-4 font-serif text-[var(--type-h3)] leading-none">
                  Madrid
                </p>
                <p className="mx-auto mt-4 max-w-sm leading-7 text-copy-muted">
                  A working environment for infrastructure AI, community
                  products, and founder-led go-to-market.
                </p>
              </div>
            </div>

            <div>
              {ventures.map((venture) => (
                <a
                  key={venture.name}
                  href={
                    venture.href.startsWith("http")
                      ? venture.href
                      : assetPath(venture.href)
                  }
                  target={venture.href.startsWith("http") ? "_blank" : undefined}
                  className="group flex min-h-24 items-center justify-between gap-4 border-b border-line p-5 last:border-b-0 hover:bg-surface-raised"
                >
                  <span>
                    <span className="block font-semibold">{venture.name}</span>
                    <span className="mt-1 block text-sm text-copy-muted">
                      {venture.detail}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-copy-muted group-hover:text-signal" />
                </a>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
