import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CareerTopology } from "@/components/portfolio/career-topology";
import { CurrentChapter } from "@/components/portfolio/current-chapter";
import { GovernanceSpotlight } from "@/components/portfolio/governance-spotlight";
import { HomeHero } from "@/components/portfolio/home-hero";
import { LinkedInHighlights } from "@/components/portfolio/linkedin-highlights";
import { ProjectCard } from "@/components/portfolio/project-card";
import { VoiceAgentSection } from "@/components/portfolio/voice-agent-section";
import { TrackSenseSection } from "@/components/tracksense/tracksense-section";
import { publication } from "@/content/insights";
import { artefacts, projects } from "@/content/projects";
import { assetPath } from "@/lib/asset-path";

export default function Home() {
  return (
    <>
      <HomeHero />
      <GovernanceSpotlight />
      <VoiceAgentSection />
      <TrackSenseSection />
      <CurrentChapter />
      <CareerTopology />

      <section className="station bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
          <p className="section-label">A rule I work by</p>
          <blockquote className="font-serif [font-size:var(--type-h3)] leading-[1.05] tracking-[-0.035em]">
            “I do not assume systems are infallible. I design for the moment
            technology is wrong.”
          </blockquote>
        </div>
      </section>

      <section className="station mx-auto max-w-[1600px] bg-ground/96 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-4 [font-size:var(--type-h2)] leading-[0.88] tracking-[-0.045em]">
              Work I can point to.
            </h2>
          </div>
          <a
            href={assetPath("/work")}
            className="group flex items-center gap-3 text-sm font-semibold"
          >
            View all work
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="station bg-ground/96">
        <div className="mx-auto grid max-w-[1600px] border-x border-line lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-line px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <p className="section-label">Other things I have built</p>
            <h2 className="mt-5 max-w-md [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.04em]">
              Different ideas. The same work ethic.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-copy-muted">
              Some became ventures, some are prototypes, and some helped me
              explain a difficult idea. I have labelled each one honestly.
            </p>
          </div>
          <div className="divide-y divide-line">
            {artefacts.slice(0, 4).map((artefact) => (
              <a
                key={artefact.title}
                href={artefact.href}
                target="_blank"
                rel="noreferrer"
                className="group grid min-h-28 gap-3 px-5 py-6 hover:bg-surface sm:grid-cols-[1fr_auto] sm:items-center sm:px-8 lg:px-10"
              >
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.02em]">
                    {artefact.title}
                  </span>
                  <span className="mt-1 block text-sm text-copy-muted">
                    {artefact.type} · {artefact.description}
                  </span>
                </span>
                <ArrowUpRight className="size-4 text-copy-muted group-hover:text-signal" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <LinkedInHighlights />

      <section className="station mx-auto grid max-w-[1600px] gap-8 bg-ground/96 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">What I write about</p>
          <p className="instrument-readout mt-3">
            {publication.title}
          </p>
        </div>
        <div>
          <h2 className="max-w-3xl [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.045em]">
            I write about systems—and the people who live with their
            consequences.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-copy-muted">
            {publication.description}
          </p>
          <a
            href={assetPath("/insights")}
            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
          >
            Read my writing
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
