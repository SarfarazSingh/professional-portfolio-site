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
        eyebrow="INSIGHTS · SELECTED WRITING"
        title="Think beyond the system."
        description="I write to connect engineering with institutions, decisions with consequences, and technical progress with the people it affects."
        aside="DEPTH, DETERRENCE & DISRUPTION · PUBLISHED ON SUBSTACK"
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-2">
          {insights.map((insight, index) => (
            <a
              key={insight.title}
              href={insight.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[360px] flex-col rounded-[1.75rem] border border-ink/10 bg-card p-6 transition-transform hover:-translate-y-1 dark:border-paper/10 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <p className="eyebrow">{insight.theme}</p>
                <ArrowUpRight className="size-4 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
              </div>
              <div className="my-auto py-8">
                <p className="font-mono text-[10px] text-steel">
                  ESSAY 0{index + 1} · {insight.date}
                </p>
                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl">
                  {insight.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-6 text-steel">
                  {insight.summary}
                </p>
              </div>
              <span className="border-t border-ink/10 pt-4 text-sm font-medium dark:border-paper/10">
                Read on Substack
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ocean text-paper dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <p className="font-mono text-[10px] tracking-[0.16em] text-paper/55">
            THE PUBLICATION
          </p>
          <div>
            <h2 className="font-serif text-5xl tracking-[-0.045em] sm:text-6xl">
              {publication.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/65">
              {publication.description}
            </p>
            <a
              href={publication.archive}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 text-sm text-ink"
            >
              Browse the full archive <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
