import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { TrackSenseSection } from "@/components/tracksense/tracksense-section";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const isTrackSense = project.slug === "tracksense";

  return (
    <article>
      <header className="relative border-b border-line bg-ground/96">
        <div
          className={`relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 lg:px-12 ${
            isTrackSense ? "lg:py-12" : "lg:py-24"
          }`}
        >
          <Link
            href="/work"
            className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-copy-muted hover:text-signal"
          >
            <ArrowLeft className="size-3.5" />
            All my work
          </Link>
          <div
            className={`grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end ${
              isTrackSense ? "mt-10" : "mt-20"
            }`}
          >
            <div>
              <p className="section-label text-signal">{project.kicker}</p>
              <h1
                className={`mt-7 max-w-5xl leading-[0.82] tracking-[-0.055em] ${
                  isTrackSense
                    ? "text-[clamp(4rem,7vw,8rem)]"
                    : "text-[clamp(4rem,10vw,11rem)]"
                }`}
              >
                {project.title}
              </h1>
            </div>
            <div>
              <p className="text-lg leading-8 text-copy-muted">{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[project.year, project.category, ...project.lens].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[2px] border border-line-strong px-3 py-1.5 text-sm text-copy-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {isTrackSense && <TrackSenseSection />}

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">The problem</p>
        </div>
        <p className="max-w-4xl font-serif [font-size:var(--type-h3)] leading-[1.08] tracking-[-0.035em]">
          {project.challenge}
        </p>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="border-b border-line p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="section-label">My part in the work</p>
            <p className="mt-8 max-w-xl text-xl leading-8">{project.role}</p>
          </div>
          <div className="p-5 sm:p-8 lg:p-12">
            <p className="section-label">What was involved</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.system.map((item) => (
                <span
                  key={item}
                  className="rounded-[2px] border border-line px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="section-label">What I did</p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {project.actions.map((action) => (
            <li key={action} className="grid gap-3 py-5 sm:grid-cols-[20px_1fr]">
              <span className="mt-3 size-1.5 bg-signal" aria-hidden="true" />
              <span className="text-lg leading-7">{action}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <div>
            <p className="section-label">What changed</p>
          </div>
          <ul className="grid gap-5">
            {project.outcome.map((outcome) => (
              <li key={outcome} className="flex gap-4 text-xl leading-8">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-signal" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
        <div>
          <p className="section-label">Why I include this work</p>
          <p className="mt-6 max-w-xl font-serif [font-size:var(--type-h3)] leading-[1.05] tracking-[-0.04em]">
            {project.relevance}
          </p>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-5 text-sm font-semibold text-ground"
            >
              See the live project
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
        <aside className="self-start border border-line bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-signal" />
            <p className="section-label">A note on the evidence</p>
          </div>
          <p className="mt-5 text-sm leading-7 text-steel">{project.evidence}</p>
        </aside>
      </section>
    </article>
  );
}
