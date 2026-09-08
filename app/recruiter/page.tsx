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
        eyebrow="Recruiter brief · Two-minute mode"
        title="Start with the mandate."
        description="Choose what you are hiring for. The brief will foreground the most relevant capabilities, evidence, fit boundaries, and CV—without changing the underlying facts."
        aside="Four mandates · One verified career record"
      />
      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <RecruiterBrief />
      </section>
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-12">
          <div>
            <p className="section-label">Location</p>
            <p className="mt-3">{profile.location}</p>
          </div>
          <div>
            <p className="section-label">Mobility</p>
            <p className="mt-3 leading-7 text-copy-muted">
              Europe, Middle East, and India; subject to role-specific work
              authorisation.
            </p>
          </div>
          <div>
            <p className="section-label">Languages</p>
            <p className="mt-3 leading-7 text-copy-muted">
              {profile.languages.join(" · ")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
