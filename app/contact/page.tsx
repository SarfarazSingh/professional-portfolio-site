import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { PageIntro } from "@/components/portfolio/page-intro";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sarfaraz Singh Wahad about AI transformation, product, governance, and mission-critical programme leadership.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact · Start a conversation"
        title="The right mandate starts here."
        description="If you are building AI-enabled transformation or leading complex technical systems, send the context. I will respond directly."
        aside="Direct contact · No form, no routing layer"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          <a
            href={`https://wa.me/${profile.phone.replace("+", "")}?text=${encodeURIComponent("Hi Sarfaraz, I found your portfolio and would like to discuss an opportunity.")}`}
            target="_blank"
            rel="noreferrer"
            className="interactive-lift group flex min-h-[300px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="section-label">Immediate channel</p>
              <MessageCircle className="size-5 text-signal" />
            </div>
            <div className="mt-auto">
              <p className="font-serif text-5xl tracking-[-0.045em]">
                WhatsApp.
              </p>
              <p className="mt-4 text-copy-muted">{profile.phoneDisplay}</p>
            </div>
          </a>
          <a
            href={`mailto:${profile.email}?subject=Portfolio conversation`}
            className="interactive-lift group flex min-h-[300px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="section-label">Direct email</p>
              <ArrowUpRight className="size-5 text-signal" />
            </div>
            <div className="mt-auto">
              <p className="font-serif text-5xl tracking-[-0.045em]">Email me.</p>
              <p className="mt-4 break-all text-copy-muted">
                {profile.email}
              </p>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="interactive-lift group flex min-h-[300px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="section-label">Professional profile</p>
              <ArrowUpRight className="size-5 text-steel group-hover:text-signal" />
            </div>
            <div className="mt-auto">
              <p className="font-serif text-5xl tracking-[-0.045em]">LinkedIn.</p>
              <p className="mt-4 text-copy-muted">
                Connect for roles, partnerships, or a focused exchange.
              </p>
            </div>
          </a>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-3">
          <div>
            <MapPin className="size-5 text-signal" />
            <p className="mt-5 font-semibold">{profile.location}</p>
            <p className="mt-2 leading-7 text-copy-muted">
              {profile.availability}
            </p>
          </div>
          <div>
            <p className="section-label">Before we speak</p>
            <p className="mt-5 leading-7 text-copy-muted">
              Use the recruiter brief to select a mandate and see the most
              relevant evidence in under two minutes.
            </p>
            <Link
              href="/recruiter"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-semibold"
            >
              Open recruiter brief
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div>
            <p className="section-label">CV downloads</p>
            <div className="mt-5 grid gap-3">
              <a
                href={assetPath("/cv/sarfaraz-wahad-ai-digital.pdf")}
                download
                className="flex min-h-11 items-center justify-between border-b border-line pb-3 text-sm"
              >
                AI & Digital <ArrowDownToLine className="size-4" />
              </a>
              <a
                href={assetPath("/cv/sarfaraz-wahad-engineering.pdf")}
                download
                className="flex min-h-11 items-center justify-between border-b border-line pb-3 text-sm"
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
