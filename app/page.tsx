import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CareerTopology } from "@/components/portfolio/career-topology";
import { CurrentChapter } from "@/components/portfolio/current-chapter";
import { HomeHero } from "@/components/portfolio/home-hero";
import { ProjectCard } from "@/components/portfolio/project-card";
import { publication } from "@/content/insights";
import { artefacts, projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CurrentChapter />
      <CareerTopology />

      <section className="border-y border-ink/10 bg-ocean text-paper dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
          <p className="font-mono text-[10px] tracking-[0.17em] text-paper/55">
            OPERATING PRINCIPLE / 001
          </p>
          <blockquote className="font-serif text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            “I do not assume systems are infallible. I design for the moment
            technology is wrong.”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">SELECTED WORK · 04 CASES</p>
            <h2 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">
              Evidence, not adjectives.
            </h2>
          </div>
          <Link
            href="/work"
            className="group flex items-center gap-3 text-sm font-medium"
          >
            View all work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} large={index === 0} />
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-ink/10 px-5 py-16 dark:border-paper/10 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <p className="eyebrow">PROTOTYPES & VENTURES</p>
            <h2 className="mt-5 max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.045em]">
              Range, without losing the thread.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-steel">
              Product strategy, AI architecture, community, executive
              storytelling, and go-to-market—each artefact is labelled for what
              it is.
            </p>
          </div>
          <div className="divide-y divide-ink/10 dark:divide-paper/10">
            {artefacts.slice(0, 4).map((artefact, index) => (
              <a
                key={artefact.title}
                href={artefact.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 px-5 py-6 transition-colors hover:bg-card sm:grid-cols-[40px_1fr_auto] sm:items-center sm:px-8 lg:px-10"
              >
                <span className="font-mono text-[10px] text-steel">
                  0{index + 1}
                </span>
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.02em]">
                    {artefact.title}
                  </span>
                  <span className="mt-1 block text-sm text-steel">
                    {artefact.type} · {artefact.description}
                  </span>
                </span>
                <ArrowUpRight className="size-4 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">WRITING & IDEAS</p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-steel">
            {publication.title.toUpperCase()}
          </p>
        </div>
        <div>
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl">
            Systems are technical.
            <br />
            <span className="text-steel">Consequences are human.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">
            {publication.description}
          </p>
          <Link
            href="/insights"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
          >
            Read selected insights
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
