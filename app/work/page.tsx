import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/portfolio/page-intro";
import { WorkGrid } from "@/components/portfolio/work-grid";
import { artefacts } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies across AI products, enterprise transformation, critical infrastructure, and mission-critical systems.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="SELECTED WORK · EVIDENCE LIBRARY"
        title="Proof across the system."
        description="Four flagship cases show how I frame problems, align stakeholders, design operating systems, and move technology towards measurable use."
        aside="FILTER BY RECRUITER LENS · EVERY OUTCOME INCLUDES AN EVIDENCE NOTE"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <WorkGrid />
      </section>

      <section className="border-t border-ink/10 dark:border-paper/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">PRODUCT ARTEFACTS · 06</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em]">
                Working range.
              </h2>
            </div>
            <div className="divide-y divide-ink/10 border-y border-ink/10 dark:divide-paper/10 dark:border-paper/10">
              {artefacts.map((artefact, index) => (
                <a
                  key={artefact.title}
                  href={artefact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 py-5 sm:grid-cols-[48px_1fr_auto] sm:items-center"
                >
                  <span className="font-mono text-[10px] text-steel">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block font-semibold">{artefact.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-steel">
                      {artefact.type} · {artefact.description}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
