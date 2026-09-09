"use client";

import Link from "next/link";
import { ArrowDownToLine, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactTrigger } from "@/components/portfolio/contact-actions";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const hiringAreas = {
  transformation: {
    short: "Enterprise AI",
    title: "I help large organisations put AI to work.",
    summary:
      "At PwC, I worked between business and technical teams to choose useful problems, make sound delivery decisions, and help people adopt what we built.",
    capabilities: [
      "Choosing problems worth solving",
      "Making a clear business case",
      "Leading work across teams",
      "Measuring use and results",
      "Building in responsible controls",
      "Speaking plainly with senior leaders",
    ],
    cases: [
      { title: "Enterprise AI at PwC", href: "/work/enterprise-ai-transformation" },
      { title: "UP-ON.AI", href: "/work/up-on-ai" },
    ],
    roles: "AI Transformation Lead · AI Delivery Lead · Data & AI Programme Manager",
    caveat:
      "I am strongest in product, delivery, and transformation leadership. I am not applying to be a principal ML engineer or research scientist.",
    cv: "/cv/sarfaraz-wahad-ai-digital.pdf",
  },
  product: {
    short: "AI Products",
    title: "I turn real operational problems into products.",
    summary:
      "I start with the people doing the work, understand what gets in their way, and then make the product, technical, and commercial choices needed to ship something useful.",
    capabilities: [
      "Product direction and choices",
      "Requirements and practical roadmaps",
      "AI agents and retrieval workflows",
      "Testing what good looks like",
      "Keeping people in control",
      "Connecting product and market",
    ],
    cases: [
      { title: "TrackSense AI", href: "/work/tracksense" },
      { title: "UP-ON.AI", href: "/work/up-on-ai" },
    ],
    roles: "Senior AI Product Manager · AI Product Owner · Industrial AI Product Lead",
    caveat:
      "My commercial AI-product experience is recent. What I bring alongside it is eight years of operational leadership and the discipline to learn quickly without pretending to know what I do not.",
    cv: "/cv/sarfaraz-wahad-ai-digital.pdf",
  },
  governance: {
    short: "Responsible AI",
    title: "I build guardrails into the work from the start.",
    summary:
      "My AIGP training gives me the formal framework. My years in submarines taught me the deeper habit: know the limits, plan for failure, keep a person accountable, and speak up early.",
    capabilities: [
      "Understanding AI risk",
      "Meaningful human oversight",
      "Working knowledge of the EU AI Act",
      "NIST AI RMF",
      "Controls across the product lifecycle",
      "Clear incident and escalation paths",
    ],
    cases: [
      { title: "TrackSense AI", href: "/work/tracksense" },
      { title: "Systems under pressure", href: "/work/submarine-systems" },
    ],
    roles: "Responsible AI Programme Manager · AI Governance Manager · AI Assurance Lead",
    caveat:
      "I work on governance inside products and programmes. I am not a lawyer and would not present myself as specialist legal counsel.",
    cv: "/cv/sarfaraz-wahad-ai-digital.pdf",
  },
  systems: {
    short: "Technical Programmes",
    title: "I lead technical programmes until people can rely on them.",
    summary:
      "Eight years in the Submarine Service taught me to prepare properly, check the evidence, train the team, and stay calm when a technical decision carries real consequences.",
    capabilities: [
      "Operational readiness",
      "Technical programme delivery",
      "Systems integration",
      "Risk and assurance",
      "International stakeholders",
      "Data-led operations",
    ],
    cases: [
      { title: "Systems under pressure", href: "/work/submarine-systems" },
      { title: "TrackSense AI", href: "/work/tracksense" },
    ],
    roles:
      "Technical Programme Manager · Operational Readiness Lead · Industrial Digitalisation Lead",
    caveat:
      "I am a technical programme and operations leader. I am not a licensed civil, electrical, structural, or nuclear-design authority.",
    cv: "/cv/sarfaraz-wahad-engineering.pdf",
  },
} as const;

type HiringArea = keyof typeof hiringAreas;

export function RecruiterBrief() {
  const [active, setActive] = useState<HiringArea>("transformation");
  const item = hiringAreas[active];

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="Select a hiring area">
        {(Object.keys(hiringAreas) as HiringArea[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={cn(
              "min-h-20 rounded-[2px] border p-4 text-left",
              active === key
                ? "border-signal bg-surface-raised"
                : "border-line hover:border-line-strong",
            )}
          >
            <span className="block text-sm font-semibold">
              {hiringAreas[key].short}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 border border-line bg-surface">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="section-label text-signal">
              Quick summary · {item.short}
            </p>
            <h2 className="mt-8 max-w-3xl [font-size:var(--type-h2)] leading-[0.9] tracking-[-0.05em]">
              {item.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-copy-muted">
              {item.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={assetPath(item.cv)}
                download
                className="inline-flex h-12 items-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-ground"
              >
                Download the right CV <ArrowDownToLine className="size-4" />
              </a>
              <ContactTrigger className="interactive-lift inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold hover:border-signal hover:text-signal">
                Get in touch <ArrowRight className="size-4" />
              </ContactTrigger>
            </div>
          </div>

          <div className="border-t border-line bg-ground p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="section-label">What I bring</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {item.capabilities.map((capability) => (
                <li key={capability} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-4 text-signal" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid border-t border-line lg:grid-cols-3">
          <div className="p-6 sm:p-8">
            <p className="section-label">Work behind this</p>
            <div className="mt-4 grid gap-2">
              {item.cases.map((caseItem) => (
                <Link
                  key={caseItem.href}
                  href={caseItem.href}
                  className="flex min-h-11 items-center justify-between border-b border-line py-2 text-sm hover:text-signal"
                >
                  {caseItem.title} <ArrowRight className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="section-label">Roles I am considering</p>
            <p className="mt-4 leading-7 text-copy-muted">{item.roles}</p>
          </div>
          <div className="border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="section-label">Where I am not the right fit</p>
            <p className="mt-4 leading-7 text-copy-muted">{item.caveat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
