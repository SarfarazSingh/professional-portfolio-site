import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { ContactTrigger } from "@/components/portfolio/contact-actions";
import { governanceSignals } from "@/content/governance";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

const identities = [
  {
    label: "Indian Navy submariner",
    statement: "I am proud to have served for eight years in the Submarine Service.",
  },
  {
    label: "Enterprise AI at PwC",
    statement: "At PwC, I helped large teams put GenAI and automation into daily operations.",
  },
  {
    label: "TrackSense co-founder",
    statement: "I am building a rail-monitoring venture around edge sensing and accountable human decisions.",
  },
] as const;

const careerSignals = [
  {
    period: "8 years",
    organisation: "Indian Navy submariner",
    role: "Operations & radiation safety",
    href: "/work/submarine-systems",
  },
  {
    period: "2M+",
    organisation: "Enterprise AI at PwC",
    role: "Users in a GenAI environment",
    href: "/work/enterprise-ai-transformation",
  },
  {
    period: "Now",
    organisation: "TrackSense",
    role: "Rail-monitoring venture co-founder",
    href: "/work/tracksense",
  },
] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ground/96">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div
          className="hero-entry instrument-readout flex min-h-12 flex-wrap items-center justify-between gap-3 border-b border-line py-3"
          data-hero-entry="1"
        >
          <span>Madrid · 40.4168 N / 3.7038 W</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 bg-signal" aria-hidden="true" />
            Open to full-time senior roles · Europe, Middle East & India
          </span>
        </div>

        <div className="grid gap-x-12 gap-y-10 py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)] lg:items-center lg:py-14 xl:gap-x-20">
          <div className="min-w-0">
            <p className="hero-entry text-signal" data-hero-entry="1" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>
              AI Governance & Product Leader for Critical Systems
            </p>
            <p className="hero-entry instrument-readout mt-3" data-hero-entry="2">
              Sarfaraz Singh Wahad
            </p>
            <h1 className="mt-5 max-w-[10ch] leading-[0.8] tracking-[-0.052em]">
              <span className="hero-title-line [font-size:var(--type-h1)]">I served.</span>
              <span className="hero-title-line [font-size:var(--type-h2)]">I learned.</span>
              <span className="hero-title-line [font-size:var(--type-h2)]">I build.</span>
            </h1>

            <p
              className="hero-entry mt-8 max-w-[52ch] [font-size:var(--type-lede)] leading-[1.35] text-copy-muted"
              data-hero-entry="3"
            >
              {profile.summary}
            </p>

            <div
              className="hero-entry mt-8 flex flex-wrap gap-x-5 gap-y-2 border-y border-line py-4"
              data-hero-entry="4"
            >
              {identities.map((item) => (
                <span
                  key={item.label}
                  className="text-sm font-semibold text-copy"
                  title={item.statement}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div
              className="hero-entry mt-6 grid border-l border-t border-line sm:grid-cols-2"
              data-hero-entry="5"
              aria-label="AI Governance and Regulated-Systems Credentials"
            >
              {governanceSignals.map((signal) => (
                <a
                  className="interactive-lift min-h-20 border-b border-r border-line p-3 hover:bg-surface"
                  href={
                    signal.href.startsWith("/")
                      ? assetPath(signal.href)
                      : signal.href
                  }
                  key={signal.label}
                  rel="noreferrer"
                  target="_blank"
                  title={signal.source}
                >
                  <span className="instrument-readout block text-signal">
                    {signal.label}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-5">
                    {signal.title}
                  </span>
                </a>
              ))}
            </div>

            <div
              className="hero-entry mt-6 flex flex-wrap gap-3"
              data-hero-entry="6"
            >
              <a
                href={assetPath("/work")}
                className="interactive-lift inline-flex min-h-12 items-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ground"
              >
                View case studies
                <ArrowRight className="size-4" />
              </a>
              <a
                href={assetPath("/cv/sarfaraz-wahad-ai-digital.pdf")}
                download
                className="interactive-lift inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold text-copy hover:border-signal hover:text-signal"
              >
                Download CV
                <ArrowDownToLine className="size-4" />
              </a>
              <ContactTrigger className="interactive-lift inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold text-copy hover:border-signal hover:text-signal">
                Contact me
                <MessageCircle className="size-4" />
              </ContactTrigger>
            </div>
          </div>

          <div
            className="hero-entry mx-auto w-full max-w-[560px] lg:mx-0 lg:ml-auto"
            data-hero-entry="3"
          >
            <div className="pointer-depth-card relative pb-4 pr-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 border border-signal/50"
              />
              <figure className="relative border border-line bg-surface p-2">
                <div className="instrument-readout flex items-center justify-between border-b border-line px-2 py-3">
                  <span>My profile</span>
                  <span className="text-signal">Madrid</span>
                </div>
                <Image
                  src={assetPath("/images/sarfaraz-singh-wahad-portrait.png")}
                  alt="Sarfaraz Singh Wahad"
                  width={819}
                  height={819}
                  priority
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <figcaption className="grid gap-1 border-t border-line px-2 py-3 sm:grid-cols-[1fr_auto]">
                  <span className="text-sm font-semibold">
                    Submariner · AI transformation leader · Founder
                  </span>
                  <span className="instrument-readout">Portrait / 2026</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="grid border-t border-line lg:grid-cols-[1.35fr_.65fr] lg:items-stretch">
          <div className="grid sm:grid-cols-3">
            {careerSignals.map((item) => (
              <a
                className="interactive-lift grid min-h-24 grid-cols-[auto_1fr] content-center gap-x-4 border-b border-line py-4 pr-4 hover:bg-surface sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0"
                href={assetPath(item.href)}
                key={item.organisation}
              >
                <span className="instrument-readout row-span-2 text-signal">
                  {item.period}
                </span>
                <span className="font-semibold">{item.organisation}</span>
                <span className="text-sm text-copy-muted">{item.role}</span>
              </a>
            ))}
          </div>

          <div className="grid gap-4 py-4 lg:border-l lg:border-line lg:pl-6">
            <div className="flex flex-wrap gap-2" aria-label="Portfolio paths">
              {(["ai", "engineering"] as const).map((key) => (
                <a
                  key={key}
                  href={assetPath(`/work?lens=${key}`)}
                  className="interactive-lift inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold text-copy-muted hover:border-signal hover:text-copy"
                >
                  {key === "ai" ? "AI & product work" : "Engineering & Navy"}
                </a>
              ))}
            </div>
            <a
              href="#tracksense-live"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-copy-muted hover:text-signal"
            >
              Try the TrackSense demo
              <ArrowDown className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
