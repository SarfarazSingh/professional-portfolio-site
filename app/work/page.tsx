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
        eyebrow="Selected work · Evidence library"
        title="Proof across the system."
        description="Four flagship cases show how I frame problems, align stakeholders, design operating systems, and move technology towards measurable use."
        aside="Filter by recruiter lens · Every outcome includes an evidence note"
      />
      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <WorkGrid />
      </section>

      <section className="border-t border-line bg-ground/96">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="section-label">Product artefacts</p>
              <h2 className="mt-4 [font-size:var(--type-h3)] tracking-[-0.04em]">
                Working range.
              </h2>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {artefacts.map((artefact) => (
                <a
                  key={artefact.title}
                  href={artefact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid min-h-24 gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <span>
                    <span className="block font-semibold">{artefact.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-steel">
                      {artefact.type} · {artefact.description}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-steel group-hover:text-signal" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
