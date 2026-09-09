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
    "The operating philosophy behind Sarfaraz Singh Wahad’s work in AI, transformation, and mission-critical systems.",
};

const principles = [
  {
    icon: Waves,
    title: "See the whole system",
    text: "Technology, people, incentives, controls, and operating context are one design problem.",
  },
  {
    icon: Workflow,
    title: "Make decisions explicit",
    text: "A useful system clarifies what happens next, who has authority, and how uncertainty is handled.",
  },
  {
    icon: Wrench,
    title: "Build for operations",
    text: "The real test begins after the prototype: adoption, observability, failure handling, and value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About · Operating philosophy"
        title="Built beneath the surface."
        description="My career has moved from submarines to consulting to AI ventures. The common thread is systems leadership: making complex technology understandable, governable, and operational."
        aside="Former Indian Navy submarine officer · PwC Manager · AI product builder · AIGP"
      />

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">The through-line</p>
        </div>
        <div className="max-w-3xl">
          <p className="font-serif [font-size:var(--type-h3)] leading-[1.08] tracking-[-0.035em]">
            I learned technology leadership in an environment where the system,
            the operator, and the consequence could never be separated.
          </p>
          <div className="mt-10 grid gap-6 leading-7 text-copy-muted sm:grid-cols-2">
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
              Education · From engineering to enterprise leadership
            </p>
            <h2 className="mt-6 [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.045em]">
              Experience built the questions.
              <br />
              IE sharpened the answers.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-copy-muted">
              At IE Business School in Madrid, I brought together engineering,
              operations, strategy, entrepreneurship, and responsible AI. The
              International MBA became an active platform: I led communities,
              built ventures, represented IE internationally, and connected
              ideas to real users across Spain.
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
              Verify Blue Torch credential <Award className="size-4 text-amber" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">Beyond the role</p>
        </div>
        <div>
          <h2 className="max-w-3xl [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.045em]">
            Endurance, rhythm,
            <br />
            and public service.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["600 KM", "Longest brevet in a completed Super Randonneur series"],
              ["50+", "Live concerts performed as a bassist across India"],
              ["1,500+", "People reached through relief, health, and upskilling programmes"],
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
              Explore experience <ArrowRight className="size-4" />
            </Link>
            <ContactTrigger className="interactive-lift inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 text-sm font-semibold hover:border-signal hover:text-signal">
              Start a conversation
            </ContactTrigger>
          </div>
        </div>
      </section>
    </>
  );
}
