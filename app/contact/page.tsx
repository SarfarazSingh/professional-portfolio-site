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
    "Get in touch with me about a role, a project, or a conversation worth having.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact · Get in touch"
        title="I would be glad to hear from you."
        description="If you are hiring, building something difficult, or simply think we should speak, send me a short note. I read and reply to every message myself."
        aside="You reach me directly · No form or inbox team"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          <a
            href={`https://wa.me/${profile.phone.replace("+", "")}?text=${encodeURIComponent("Hi Sarfaraz — I saw your portfolio and wanted to get in touch about a role or project.")}`}
            target="_blank"
            rel="noreferrer"
            className="interactive-lift group flex min-h-[300px] flex-col border border-line bg-surface p-6 hover:bg-surface-raised sm:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="section-label">Message me</p>
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
              <p className="section-label">Write to me</p>
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
              <p className="section-label">My professional profile</p>
              <ArrowUpRight className="size-5 text-steel group-hover:text-signal" />
            </div>
            <div className="mt-auto">
              <p className="font-serif text-5xl tracking-[-0.045em]">LinkedIn.</p>
              <p className="mt-4 text-copy-muted">
                Connect with me for a role, a partnership, or a straightforward
                conversation.
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
            <p className="section-label">If you are recruiting</p>
            <p className="mt-5 leading-7 text-copy-muted">
              I have put together a short recruiter page with the roles I am
              considering, the work behind them, and where I may not be the
              right fit.
            </p>
            <Link
              href="/recruiter"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-semibold"
            >
              See the recruiter page
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
