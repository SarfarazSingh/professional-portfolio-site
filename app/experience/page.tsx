import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { PageIntro } from "@/components/portfolio/page-intro";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My experience from the Indian Navy’s Submarine Service to PwC and the ventures I am building in Madrid.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience · 2015—now"
        title="My work, from 2015 to now."
        description="I started in the Indian Navy’s Submarine Service, moved to PwC, and now divide my time between an MBA at IE and ventures I am building in Madrid."
        aside="Use the filters to focus on AI work or engineering work"
      />
      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <ExperienceTimeline />
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <div>
            <p className="section-label">Credentials</p>
          </div>
          <div>
            <div className="grid border-l border-t border-line sm:grid-cols-2">
              {profile.credentials.map((credential) => (
                <div key={credential} className="border-b border-r border-line bg-surface p-5">
                  {credential}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={assetPath("/cv/sarfaraz-wahad-ai-digital.pdf")}
                download
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-5 text-sm font-semibold text-ground"
              >
                AI & digital CV <Download className="size-4" />
              </a>
              <a
                href={assetPath("/cv/sarfaraz-wahad-engineering.pdf")}
                download
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-5 text-sm font-semibold"
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
