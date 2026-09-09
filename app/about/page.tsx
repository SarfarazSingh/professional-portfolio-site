import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Waves, Workflow, Wrench } from "lucide-react";
import { ContactTrigger } from "@/components/portfolio/contact-actions";
import { PageIntro } from "@/components/portfolio/page-intro";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "About",
  description:
    "How my years in the Indian Navy, PwC, and IE shaped the way I work.",
};

const principles = [
  {
    icon: Waves,
    title: "I look at the whole picture",
    text: "Technology does not work on its own. I look at the people, rules, incentives, and conditions around it.",
  },
  {
    icon: Workflow,
    title: "I make responsibility clear",
    text: "People should know what happens next, who makes the call, and what to do when the answer is uncertain.",
  },
  {
    icon: Wrench,
    title: "I build for the day after launch",
    text: "A prototype is only the beginning. I care about whether people use it, trust it, and know what to do when it goes wrong.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About · How I work"
        title="Service shaped how I work."
        description="I have moved from submarines to PwC to building AI products in Madrid. The work has changed, but the values have not: prepare properly, respect the team, own the outcome, and be honest about what you do not know."
        aside="AIGP · AERB-certified Radiation Safety Officer · Indian Navy veteran · IE MBA"
      />

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">What connects the work</p>
        </div>
        <div className="max-w-3xl">
          <p className="font-serif [font-size:var(--type-h3)] leading-[1.08] tracking-[-0.035em]">
            The Submarine Service taught me that leadership begins with
            responsibility—for the system, for the team, and for the
            consequences of your decision.
          </p>
          <div className="mt-10 grid gap-6 leading-7 text-copy-muted sm:grid-cols-2">
            <p>
              In the Indian Navy, I led technical operations, safety assurance,
              modernisation, and training across conventional and nuclear
              submarines, including three years as a Radiation Safety Officer.
              I remain proud of that service and grateful to the people who
              trained me, challenged me, and trusted me.
            </p>
            <p>
              At PwC and in my own ventures, I have tried to carry those lessons
              forward. I do not build AI for a presentation. I want to solve a
              real problem, help the people doing the work, and leave behind
              something they can rely on.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article
                key={principle.title}
                className="border-b border-line p-6 last:border-b-0 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0 lg:p-12"
              >
                <div className="flex justify-end">
                  <Icon className="size-5 text-signal" />
                </div>
                <h2 className="mt-20 [font-size:var(--type-h3)] tracking-[-0.04em]">
                  {principle.title}
                </h2>
                <p className="mt-5 leading-7 text-copy-muted">
                  {principle.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-24">
          <div className="border border-line p-2 lg:self-center">
            <Image
              src={assetPath("/images/submarine-service-collage.jpg")}
              alt="Sarfaraz Singh Wahad during submarine service, training, and technical operations"
              width={960}
              height={508}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="lg:pl-8">
            <p className="section-label">
              Education · Engineering, management, and business
            </p>
            <h2 className="mt-6 [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.045em]">
              The Navy taught me responsibility.
              <br />
              IE broadened my view.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-copy-muted">
              I came to IE Business School to learn how other people see the
              world—founders, investors, operators, and classmates from many
              countries. Alongside the MBA, I led communities, built ventures,
              represented IE at AI-governance hackathons in Berlin and Warsaw,
              and tried to contribute wherever I could.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                ["IE Business School", "International MBA · Technology Impact Scholarship · 2026"],
                ["IIM Shillong", "Business Management Programme: Operations · First Class Honours"],
                ["VTU Bengaluru", "B.E. Information Science · First Class"],
                ["IE Blue Torch", "Cross-programme experience and leadership · June 2026"],
              ].map(([institution, detail]) => (
                <div
                  key={institution}
                  className="border border-line p-4"
                >
                  <p className="font-semibold">{institution}</p>
                  <p className="mt-2 text-sm leading-6 text-copy-muted">{detail}</p>
                </div>
              ))}
            </div>
            <a
              href={assetPath("/credentials/ie-blue-torch-award.pdf")}
              target="_blank"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-5 text-sm font-semibold text-ground"
            >
              View my Blue Torch Award <Award className="size-4 text-amber" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">Outside work</p>
        </div>
        <div>
          <h2 className="max-w-3xl [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.045em]">
            Cycling, music, and service keep me grounded.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["600 KM", "My longest brevet in a completed Super Randonneur series"],
              ["50+", "Concerts I have played as a bassist across India"],
              ["1,500+", "People our relief, health, and upskilling programmes reached"],
            ].map(([value, label]) => (
              <div key={value} className="border border-line p-5">
                <p className="font-serif text-4xl tracking-[-0.04em]">{value}</p>
                <p className="mt-3 text-sm leading-6 text-copy-muted">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="interactive-lift group inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ground"
            >
              See my experience <ArrowRight className="size-4" />
            </Link>
            <ContactTrigger className="interactive-lift inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 text-sm font-semibold hover:border-signal hover:text-signal">
              Get in touch
            </ContactTrigger>
          </div>
        </div>
      </section>
    </>
  );
}
