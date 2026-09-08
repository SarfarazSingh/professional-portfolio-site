import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Waves, Workflow, Wrench } from "lucide-react";
import { PageIntro } from "@/components/portfolio/page-intro";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "The operating philosophy behind Sarfaraz Singh Wahad’s work in AI, transformation, and mission-critical systems.",
};

const principles = [
  {
    icon: Waves,
    number: "01",
    title: "See the whole system",
    text: "Technology, people, incentives, controls, and operating context are one design problem.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Make decisions explicit",
    text: "A useful system clarifies what happens next, who has authority, and how uncertainty is handled.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Build for operations",
    text: "The real test begins after the prototype: adoption, observability, failure handling, and value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT · OPERATING PHILOSOPHY"
        title="Built beneath the surface."
        description="My career has moved from submarines to consulting to AI ventures. The common thread is systems leadership: making complex technology understandable, governable, and operational."
        aside="FORMER INDIAN NAVY SUBMARINE OFFICER · PWC MANAGER · AI PRODUCT BUILDER · AIGP"
      />

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">THE THROUGH-LINE</p>
        </div>
        <div className="max-w-3xl">
          <p className="font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
            I learned technology leadership in an environment where the system,
            the operator, and the consequence could never be separated.
          </p>
          <div className="mt-10 grid gap-6 text-base leading-7 text-steel sm:grid-cols-2">
            <p>
              In the Indian Navy, I led technical operations, safety assurance,
              modernisation, and training across conventional and nuclear
              submarines. It taught me to respect operating boundaries,
              verification, escalation, and human authority.
            </p>
            <p>
              At PwC and through new ventures, I applied the same discipline to
              enterprise AI, product delivery, critical infrastructure, and
              commercialisation. The goal is never AI for its own sake. It is a
              better operating capability.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article
                key={principle.number}
                className="border-b border-ink/10 p-6 last:border-b-0 dark:border-paper/10 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0 lg:p-12"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-steel">
                    {principle.number}
                  </span>
                  <Icon className="size-5 text-signal" />
                </div>
                <h2 className="mt-20 font-serif text-4xl tracking-[-0.04em]">
                  {principle.title}
                </h2>
                <p className="mt-5 text-sm leading-6 text-steel">
                  {principle.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">BEYOND THE ROLE</p>
        </div>
        <div>
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em]">
            Endurance, rhythm,
            <br />
            <span className="text-steel">and public service.</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["600 KM", "Longest brevet in a completed Super Randonneur series"],
              ["50+", "Live concerts performed as a bassist across India"],
              ["1,500+", "People reached through relief, health, and upskilling programmes"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-ink/10 p-5 dark:border-paper/10">
                <p className="font-serif text-4xl tracking-[-0.04em]">{value}</p>
                <p className="mt-3 text-xs leading-5 text-steel">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-paper dark:bg-paper dark:text-ink"
            >
              Explore experience <ArrowRight className="size-4 group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full border border-ink/15 px-6 py-3 text-sm dark:border-paper/15"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
