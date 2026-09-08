import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { PageIntro } from "@/components/portfolio/page-intro";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sarfaraz Singh Wahad about AI transformation, product, governance, and mission-critical programme leadership.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT · START A CONVERSATION"
        title="The right mandate starts here."
        description="If you are building AI-enabled transformation or leading complex technical systems, send the context. I will respond directly."
        aside="DIRECT CONTACT · NO FORM, NO ROUTING LAYER"
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-2">
          <a
            href={`mailto:${profile.email}?subject=Portfolio conversation`}
            className="group flex min-h-[340px] flex-col rounded-[1.75rem] bg-ink p-6 text-paper sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[0.16em] text-paper/55">
                PRIMARY CHANNEL
              </p>
              <ArrowUpRight className="size-5 text-signal transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div className="mt-auto">
              <p className="font-serif text-5xl tracking-[-0.045em]">Email me.</p>
              <p className="mt-4 break-all text-sm text-paper/55">
                {profile.email}
              </p>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[340px] flex-col rounded-[1.75rem] border border-ink/10 bg-card p-6 dark:border-paper/10 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow">PROFESSIONAL PROFILE</p>
              <ArrowUpRight className="size-5 text-steel transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
            </div>
            <div className="mt-auto">
              <p className="font-serif text-5xl tracking-[-0.045em]">LinkedIn.</p>
              <p className="mt-4 text-sm text-steel">
                Connect for roles, partnerships, or a focused exchange.
              </p>
            </div>
          </a>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-12 dark:border-paper/10 lg:grid-cols-3">
          <div>
            <MapPin className="size-5 text-signal" />
            <p className="mt-5 font-semibold">{profile.location}</p>
            <p className="mt-2 text-sm leading-6 text-steel">
              {profile.availability}
            </p>
          </div>
          <div>
            <p className="eyebrow">BEFORE WE SPEAK</p>
            <p className="mt-5 text-sm leading-6 text-steel">
              Use the recruiter brief to select a mandate and see the most
              relevant evidence in under two minutes.
            </p>
            <Link
              href="/recruiter"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-medium"
            >
              Open recruiter brief
              <ArrowRight className="size-4 group-hover:translate-x-1" />
            </Link>
          </div>
          <div>
            <p className="eyebrow">CV DOWNLOADS</p>
            <div className="mt-5 grid gap-3">
              <a
                href="/cv/sarfaraz-wahad-ai-digital.pdf"
                download
                className="flex items-center justify-between border-b border-ink/10 pb-3 text-sm dark:border-paper/10"
              >
                AI & Digital <ArrowDownToLine className="size-4" />
              </a>
              <a
                href="/cv/sarfaraz-wahad-engineering.pdf"
                download
                className="flex items-center justify-between border-b border-ink/10 pb-3 text-sm dark:border-paper/10"
              >
                Engineering & Technical <ArrowDownToLine className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
