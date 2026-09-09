import type { Metadata } from "next";
import { PageIntro } from "@/components/portfolio/page-intro";
import { RecruiterBrief } from "@/components/portfolio/recruiter-brief";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "For Recruiters",
  description:
    "A quick, honest view of the roles I am considering and the work behind my experience.",
};

export default function RecruiterPage() {
  return (
    <>
      <PageIntro
        eyebrow="For recruiters · A quick, honest read"
        title="Where my experience may be useful."
        description="I have grouped my work into four areas so you can get to the relevant part quickly. Each one shows what I have done, the CV that fits, and where I may not be the right person."
        aside="Four hiring areas · One career, told as it happened"
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
              I am open to roles in Europe, the Middle East, and India,
              depending on the role and visa requirements.
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
