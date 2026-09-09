import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/portfolio/page-intro";
import { insights, publication } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Selected writing on technology, engineering, institutions, and human performance.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights · Selected writing"
        title="Think beyond the system."
        description="I write to connect engineering with institutions, decisions with consequences, and technical progress with the people it affects."
        aside="Depth, Deterrence & Disruption · Published on Substack"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-2">
          {insights.map((insight) => (
            <a
              key={insight.title}
              href={insight.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[360px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8"
            >
              <div className="flex items-start justify-between">
                <p className="section-label">{insight.theme}</p>
                <ArrowUpRight className="size-4 text-steel group-hover:text-signal" />
              </div>
              <div className="my-auto py-8">
                <p className="instrument-readout">{insight.date}</p>
                <h2 className="mt-4 max-w-xl [font-size:var(--type-h3)] leading-[0.98] tracking-[-0.04em]">
                  {insight.title}
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-copy-muted">
                  {insight.summary}
                </p>
              </div>
              <span className="border-t border-line pt-4 text-sm font-semibold">
                Read on Substack
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <p className="section-label">The publication</p>
          <div>
            <h2 className="[font-size:var(--type-h2)] tracking-[-0.045em]">
              {publication.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-copy-muted">
              {publication.description}
            </p>
            <a
              href={publication.archive}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-5 text-sm font-semibold text-ground"
            >
              Browse the full archive <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
