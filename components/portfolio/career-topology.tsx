import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";
import { assetPath } from "@/lib/asset-path";

const chapters = [
  {
    number: "01",
    title: "Operate",
    years: "2015–23",
    organisation: "Indian Navy · Submarine Service",
    role: "Technical operations & nuclear safety",
    evidence: "$10M VR platform · 5,000+ users · 50% faster response",
    href: "/work/submarine-systems",
  },
  {
    number: "02",
    title: "Transform",
    years: "2023–25",
    organisation: "PwC · Generative AI",
    role: "Enterprise architecture & programme delivery",
    evidence: "2M+ users · 30% service efficiency · 50% faster releases",
    href: "/work/enterprise-ai-transformation",
  },
  {
    number: "03",
    title: "Build",
    years: "2026–now",
    organisation: "TrackSense AI",
    role: "Co-founder & Technical Lead",
    evidence: "Edge AI · sensor fusion · human-authorised decisions",
    href: "/work/tracksense",
  },
] as const;

export function CareerTopology() {
  return (
    <section
      className="station bg-ground/96"
      aria-labelledby="trajectory-title"
    >
      <Reveal
        className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
        sequence
      >
        <div
          className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]"
          data-reveal-item
        >
          <div>
            <p className="section-label">Career trajectory</p>
            <h2
              id="trajectory-title"
              className="mt-4 text-balance text-[var(--type-h2)] leading-[0.88] tracking-[-0.045em]"
            >
              One operating system.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-copy-muted">
            The environments changed. The method did not: understand the
            system, establish control, align people, and make technology useful
            at the point of decision.
          </p>
        </div>

        <div
          className="grid border border-line bg-surface lg:grid-cols-[0.88fr_1.12fr]"
          data-reveal-item
        >
          <figure className="border-b border-line lg:border-b-0 lg:border-r">
            <div className="instrument-readout flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
              <span>Visual record · Submarine service</span>
              <span className="text-signal">2015–23</span>
            </div>
            <div className="bg-ground p-3 sm:p-5">
              <Image
                alt="Sarfaraz Singh Wahad during submarine service, technical training, and operations"
                className="h-auto w-full border border-line object-contain"
                height={508}
                sizes="(max-width: 1024px) 100vw, 43vw"
                src={assetPath("/images/submarine-service-collage.jpg")}
                width={960}
              />
            </div>
            <figcaption className="grid gap-3 border-t border-line p-5 sm:grid-cols-2 sm:p-6">
              <p className="font-semibold">
                Systems leadership began where readiness was continuous.
              </p>
              <p className="text-sm leading-6 text-copy-muted">
                Technical operations, safety assurance, modernisation, and
                training across conventional and nuclear submarine programmes.
              </p>
            </figcaption>
          </figure>

          <div className="divide-y divide-line">
            {chapters.map((chapter) => (
              <a
                className="interactive-lift group grid min-h-48 gap-6 p-5 hover:bg-surface-raised sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
                href={assetPath(chapter.href)}
                key={chapter.title}
              >
                <span className="instrument-readout grid size-11 place-items-center rounded-full border border-signal text-signal">
                  {chapter.number}
                </span>
                <span>
                  <span className="instrument-readout block">
                    {chapter.years}
                  </span>
                  <span className="mt-3 block text-[var(--type-h3)] leading-none tracking-[-0.035em]">
                    {chapter.title}
                  </span>
                  <span className="mt-3 block font-semibold">
                    {chapter.organisation}
                  </span>
                  <span className="mt-1 block text-copy-muted">
                    {chapter.role}
                  </span>
                  <span className="instrument-readout mt-4 block text-signal">
                    {chapter.evidence}
                  </span>
                </span>
                <span className="grid size-11 place-items-center rounded-full border border-line-strong group-hover:border-signal group-hover:text-signal">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
