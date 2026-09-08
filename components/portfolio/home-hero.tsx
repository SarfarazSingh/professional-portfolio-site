import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, MoveUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

const identities = [
  {
    label: "Submariner",
    statement: "Judgement shaped where failure is not an option.",
  },
  {
    label: "Founder",
    statement: "Products taken from first principle to real users.",
  },
  {
    label: "AI product leader",
    statement: "AI moved beyond the pilot into operating value.",
  },
  {
    label: "Systems builder",
    statement: "People, technology, controls, and context designed as one.",
  },
  {
    label: "IE MBA",
    statement: "Venture building and cross-programme leadership in Madrid.",
  },
] as const;

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] border-b border-line bg-ground/96">
      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1600px] flex-col px-5 sm:px-8 lg:px-12">
        <div className="instrument-readout flex min-h-12 flex-wrap items-center justify-between gap-3 border-b border-line py-3">
          <span>Madrid · 40.4168 N / 3.7038 W</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 bg-signal" aria-hidden="true" />
            Available for select senior mandates
          </span>
        </div>

        <div className="grid flex-1 gap-x-12 gap-y-8 py-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,.65fr)] lg:items-end lg:py-12">
          <div className="flex min-w-0 flex-col justify-between self-stretch">
            <div>
              <p className="section-label">Sarfaraz Singh Wahad</p>
              <h1 className="mt-5 max-w-[9ch] text-[var(--type-h1)] leading-[0.79] tracking-[-0.055em]">
                Operator.
                <br />
                Transformer.
                <br />
                Builder.
              </h1>
            </div>

            <div className="mt-12 grid gap-8 border-t border-line pt-6 xl:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
              <div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-line pb-4">
                  {identities.map((item) => (
                    <span
                      key={item.label}
                      className="text-sm font-semibold text-copy"
                      title={item.statement}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
                <p className="mt-4 max-w-lg leading-7 text-copy-muted">
                  Judgement shaped where failure is not an option; products
                  built to work beyond the pilot.
                </p>
              </div>

              <div>
                <p className="max-w-xl text-lg leading-7 text-copy-muted">
                  {profile.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/work"
                    className="inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ground"
                  >
                    Enter the portfolio
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/recruiter"
                    className="inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold text-copy hover:border-signal hover:text-signal"
                  >
                    Recruiter brief
                    <MoveUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="self-end">
            <figure className="border border-line bg-surface p-2">
              <Image
                src={assetPath("/images/sarfaraz-singh-wahad-portrait.png")}
                alt="Sarfaraz Singh Wahad"
                width={960}
                height={1200}
                priority
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="grid gap-1 border-t border-line px-2 py-3 sm:grid-cols-[1fr_auto]">
                <span className="text-sm font-semibold">
                  Madrid · AI ventures · IE Business School
                </span>
                <span className="instrument-readout">Portrait / 2026</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="grid gap-4 border-t border-line py-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="flex flex-wrap gap-2" aria-label="Portfolio paths">
            {(["ai", "engineering"] as const).map((key) => (
              <Link
                key={key}
                href={`/work?lens=${key}`}
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold text-copy-muted hover:border-signal hover:text-copy"
              >
                {key === "ai" ? "AI & digital" : "Mission-critical systems"}
              </Link>
            ))}
          </div>
          <a
            href="#current-chapter"
            className="hidden min-h-11 items-center gap-2 text-sm font-semibold text-copy-muted hover:text-signal lg:flex"
          >
            Explore the current chapter
            <ArrowDown className="size-4" />
          </a>
          <p className="text-sm text-copy-muted lg:text-right">
            Two equal paths · one operating philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
