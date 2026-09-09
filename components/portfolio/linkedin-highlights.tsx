import { ArrowUpRight } from "lucide-react";
import { linkedInHighlights } from "@/content/governance";
import { profile } from "@/content/profile";

export function LinkedInHighlights() {
  return (
    <section
      aria-labelledby="linkedin-highlights-title"
      className="station border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="section-label">Posts & public mentions</p>
            <p className="instrument-readout mt-3">From LinkedIn</p>
          </div>
          <div>
            <h2
              className="[font-size:var(--type-h2)] leading-[0.9] tracking-[-0.045em]"
              id="linkedin-highlights-title"
            >
              Work is better understood through the people who shared it.
            </h2>
            <p className="mt-6 max-w-[66ch] text-lg leading-8 text-copy-muted">
              These posts add context to the formal case studies: teammates,
              institutions, and employers describing work we did together.
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-l border-t border-line md:grid-cols-2 xl:grid-cols-4">
          {linkedInHighlights.map((post) => (
            <a
              className="interactive-lift flex min-h-72 flex-col border-b border-r border-line p-5 hover:bg-surface-raised sm:p-6"
              href={post.href}
              key={post.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="instrument-readout text-signal">
                {post.source}
              </span>
              <span className="mt-7 [font-size:var(--type-h3)] leading-[1.02] tracking-[-0.035em]">
                {post.title}
              </span>
              <span className="mt-5 leading-7 text-copy-muted">
                {post.summary}
              </span>
              <span className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5 text-sm font-semibold">
                Open post
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          ))}
        </div>

        <a
          className="mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-semibold hover:text-signal"
          href={profile.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          See my full LinkedIn profile
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
