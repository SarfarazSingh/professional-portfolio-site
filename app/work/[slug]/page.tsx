import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
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

  return (
    <article>
      <header className="relative overflow-hidden border-b border-ink/10 bg-ink text-paper dark:border-paper/10">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-32 top-1/2 size-[520px] -translate-y-1/2 rounded-full border border-paper/15" />
          <div className="absolute -right-12 top-1/2 size-[360px] -translate-y-1/2 rounded-full border border-paper/15" />
          <div className="absolute right-20 top-1/2 size-[170px] -translate-y-1/2 rounded-full border border-signal/50" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] text-paper/55 hover:text-signal"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            ALL CASES
          </Link>
          <div className="mt-20 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-signal">
                CASE {project.index} · {project.kicker}
              </p>
              <h1 className="mt-7 max-w-5xl font-serif text-7xl leading-[0.86] tracking-[-0.06em] sm:text-8xl lg:text-9xl">
                {project.title}
              </h1>
            </div>
            <div>
              <p className="text-lg leading-8 text-paper/65">{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[project.year, project.category, ...project.lens].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-paper/15 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] uppercase text-paper/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">01 · CHALLENGE</p>
        </div>
        <p className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
          {project.challenge}
        </p>
      </section>

      <section className="border-y border-ink/10 dark:border-paper/10">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="border-b border-ink/10 p-5 dark:border-paper/10 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="eyebrow">02 · ROLE</p>
            <p className="mt-8 max-w-xl text-xl leading-8">{project.role}</p>
          </div>
          <div className="p-5 sm:p-8 lg:p-12">
            <p className="eyebrow">03 · SYSTEM</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.system.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 px-4 py-2 text-sm dark:border-paper/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">04 · ACTIONS</p>
        </div>
        <ol className="divide-y divide-ink/10 border-y border-ink/10 dark:divide-paper/10 dark:border-paper/10">
          {project.actions.map((action, index) => (
            <li key={action} className="grid gap-3 py-5 sm:grid-cols-[45px_1fr]">
              <span className="font-mono text-[10px] text-signal">
                0{index + 1}
              </span>
              <span className="text-lg leading-7">{action}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ocean text-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
          <div>
            <p className="font-mono text-[10px] tracking-[0.16em] text-paper/55">
              05 · OUTCOMES
            </p>
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

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow">WHY IT MATTERS</p>
          <p className="mt-6 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.04em]">
            {project.relevance}
          </p>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-paper dark:bg-paper dark:text-ink"
            >
              View public project
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
        <aside className="self-start rounded-2xl border border-ink/10 bg-card p-6 dark:border-paper/10 sm:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-signal" />
            <p className="eyebrow">EVIDENCE NOTE</p>
          </div>
          <p className="mt-5 text-sm leading-7 text-steel">{project.evidence}</p>
        </aside>
      </section>
    </article>
  );
}
