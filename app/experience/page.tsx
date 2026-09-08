import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { PageIntro } from "@/components/portfolio/page-intro";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career trajectory from submarine operations through enterprise AI and venture building.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="EXPERIENCE · 2015—NOW"
        title="Operate. Transform. Build."
        description="Progressive leadership across safety-critical operations, enterprise transformation, and zero-to-one AI products."
        aside="FILTER THE SAME VERIFIED CHRONOLOGY BY RECRUITER LENS"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <ExperienceTimeline />
      </section>

      <section className="border-t border-ink/10 bg-card dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <div>
            <p className="eyebrow">CREDENTIALS</p>
          </div>
          <div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-paper/10 dark:bg-paper/10 sm:grid-cols-2">
              {profile.credentials.map((credential) => (
                <div key={credential} className="bg-card p-5 text-sm">
                  {credential}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/cv/sarfaraz-wahad-ai-digital.pdf"
                download
                className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-paper dark:bg-paper dark:text-ink"
              >
                AI & digital CV <Download className="size-4" />
              </a>
              <a
                href="/cv/sarfaraz-wahad-engineering.pdf"
                download
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3 text-sm dark:border-paper/15"
              >
                Engineering CV <Download className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
