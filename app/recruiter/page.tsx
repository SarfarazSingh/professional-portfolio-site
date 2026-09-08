import type { Metadata } from "next";
import { PageIntro } from "@/components/portfolio/page-intro";
import { RecruiterBrief } from "@/components/portfolio/recruiter-brief";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Recruiter Brief",
  description:
    "A role-specific, evidence-led briefing for recruiters and hiring leaders.",
};

export default function RecruiterPage() {
  return (
    <>
      <PageIntro
        eyebrow="RECRUITER BRIEF · TWO-MINUTE MODE"
        title="Start with the mandate."
        description="Choose what you are hiring for. The brief will foreground the most relevant capabilities, evidence, fit boundaries, and CV—without changing the underlying facts."
        aside="FOUR MANDATES · ONE VERIFIED CAREER RECORD"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <RecruiterBrief />
      </section>
      <section className="border-t border-ink/10 dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12">
          <div>
            <p className="eyebrow">LOCATION</p>
            <p className="mt-3 text-sm">{profile.location}</p>
          </div>
          <div>
            <p className="eyebrow">MOBILITY</p>
            <p className="mt-3 text-sm leading-6 text-steel">
              Europe, Middle East, and India; subject to role-specific work
              authorisation.
            </p>
          </div>
          <div>
            <p className="eyebrow">LANGUAGES</p>
            <p className="mt-3 text-sm leading-6 text-steel">
              {profile.languages.join(" · ")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
