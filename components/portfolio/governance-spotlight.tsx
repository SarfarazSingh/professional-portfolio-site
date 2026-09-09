import { ArrowRight, ArrowUpRight, BookOpen, ShieldCheck } from "lucide-react";
import { governanceSignals, pdipProject } from "@/content/governance";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

export function GovernanceSpotlight() {
  return (
    <section
      aria-labelledby="governance-title"
      className="station border-y border-line bg-surface"
      id="governance"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-label">AI governance & regulated systems</p>
            <p className="instrument-readout mt-3 text-signal">
              AIGP · AERB RSO · Berlin · Warsaw
            </p>
          </div>
          <div>
            <h2
              className="max-w-5xl [font-size:var(--type-h2)] leading-[0.88] tracking-[-0.045em]"
              id="governance-title"
            >
              I learned regulation where mistakes had real consequences.
            </h2>
            <p className="mt-7 max-w-[70ch] text-lg leading-8 text-copy-muted">
              Before I worked on AI policy, I was responsible for radiation
              safety on a nuclear submarine. That experience still shapes how I
              think: know the rule, understand why it exists, test the system,
              keep records, and never hide uncertainty from the person making
              the decision.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.08fr_.92fr]">
          <div className="grid border-l border-t border-line sm:grid-cols-2">
            {governanceSignals.map((signal) => (
              <a
                className="interactive-lift flex min-h-56 flex-col border-b border-r border-line p-5 hover:bg-surface-raised sm:p-6"
                href={
                  signal.href.startsWith("/")
                    ? assetPath(signal.href)
                    : signal.href
                }
                key={signal.label}
                rel="noreferrer"
                target="_blank"
              >
                <span className="instrument-readout text-signal">
                  {signal.label}
                </span>
                <span className="mt-6 [font-size:var(--type-h3)] leading-none tracking-[-0.035em]">
                  {signal.title}
                </span>
                <span className="mt-5 leading-7 text-copy-muted">
                  {signal.detail}
                </span>
                <span className="instrument-readout mt-auto flex items-center gap-2 pt-6">
                  {signal.source}
                  <ArrowUpRight className="size-3.5 shrink-0" />
                </span>
              </a>
            ))}
          </div>

          <article className="flex min-h-full flex-col border border-signal bg-ground p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-6">
              <p className="section-label text-signal">
                A governance product I built
              </p>
              <ShieldCheck className="size-5 text-signal" />
            </div>
            <p className="instrument-readout mt-8">{pdipProject.name}</p>
            <h3 className="mt-3 [font-size:var(--type-h3)] leading-[0.98] tracking-[-0.04em]">
              {pdipProject.fullName}
            </h3>
            <p className="mt-6 text-lg leading-8 text-copy-muted">
              {pdipProject.description}
            </p>
            <p className="mt-6 border-l-2 border-signal pl-4 text-sm leading-6 text-copy-muted">
              {pdipProject.boundary}
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-10">
              <a
                className="interactive-lift inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-5 text-sm font-semibold text-ground"
                href={pdipProject.href}
                rel="noreferrer"
                target="_blank"
              >
                Try the PDIP prototype
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-5 text-sm font-semibold hover:border-signal hover:text-signal"
                href={assetPath("/work/pdip")}
              >
                Read what I built
                <ArrowRight className="size-4" />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-5 border border-line bg-ground p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6">
          <BookOpen className="size-5 text-signal" />
          <p className="leading-7 text-copy-muted">
            I also write about AI governance, nuclear risk, AI warfare, and the
            human responsibility behind technical decisions on{" "}
            <span className="font-semibold text-copy">
              Depth, Deterrence & Disruption
            </span>
            .
          </p>
          <a
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:text-signal"
            href={profile.substack}
            rel="noreferrer"
            target="_blank"
          >
            Read my Substack
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
