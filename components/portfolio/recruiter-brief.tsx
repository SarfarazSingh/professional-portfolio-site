"use client";

import Link from "next/link";
import { ArrowDownToLine, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactTrigger } from "@/components/portfolio/contact-actions";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const mandates = {
  transformation: {
    short: "AI Transformation",
    title: "Make AI useful across the enterprise.",
    summary:
      "Sarfaraz combines enterprise AI delivery, operating-model judgement, and executive communication to take programmes from use-case selection through adoption and value.",
    capabilities: [
      "Use-case prioritisation",
      "Business-case framing",
      "Cross-functional delivery",
      "Adoption and value metrics",
      "Responsible AI controls",
      "Executive communication",
    ],
    cases: [
      { title: "Enterprise AI at scale", href: "/work/enterprise-ai-transformation" },
      { title: "UP-ON.AI", href: "/work/up-on-ai" },
    ],
    roles: "AI Transformation Lead · AI Delivery Lead · Data & AI Programme Manager",
    caveat:
      "Best suited to product, delivery, and transformation leadership—not principal ML engineering or research roles.",
    cv: "/cv/sarfaraz-wahad-ai-digital.pdf",
  },
  product: {
    short: "AI Product & Delivery",
    title: "Translate operational problems into AI products.",
    summary:
      "Sarfaraz works across customer need, product architecture, delivery constraints, governance, and commercial narrative—especially in regulated or operational environments.",
    capabilities: [
      "Product strategy",
      "Requirements and roadmap",
      "Agentic and RAG workflows",
      "Evaluation framing",
      "Human-in-the-loop design",
      "Go-to-market alignment",
    ],
    cases: [
      { title: "TrackSense AI", href: "/work/tracksense" },
      { title: "UP-ON.AI", href: "/work/up-on-ai" },
    ],
    roles: "Senior AI Product Manager · AI Product Owner · Industrial AI Product Lead",
    caveat:
      "Commercial AI-product tenure is recent and concentrated; the differentiator is deep leadership and operating experience.",
    cv: "/cv/sarfaraz-wahad-ai-digital.pdf",
  },
  governance: {
    short: "Responsible AI",
    title: "Governance designed into delivery.",
    summary:
      "AIGP capability is grounded in high-consequence operating experience: define boundaries, evaluate failure, retain human authority, and make accountability executable.",
    capabilities: [
      "AI risk assessment",
      "Human oversight",
      "EU AI Act literacy",
      "NIST AI RMF",
      "Lifecycle controls",
      "Incident and escalation design",
    ],
    cases: [
      { title: "TrackSense AI", href: "/work/tracksense" },
      { title: "Systems under pressure", href: "/work/submarine-systems" },
    ],
    roles: "Responsible AI Programme Manager · AI Governance Manager · AI Assurance Lead",
    caveat:
      "Positioned for applied governance inside product and transformation—not as specialist legal counsel.",
    cv: "/cv/sarfaraz-wahad-ai-digital.pdf",
  },
  systems: {
    short: "Mission-Critical Programmes",
    title: "Lead complex systems to operational readiness.",
    summary:
      "A decade in submarine operations built a rigorous approach to technical programmes, systems integration, risk control, training, and decisions under pressure.",
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
      "Not positioned as a licensed civil, electrical, structural, or nuclear-design authority.",
    cv: "/cv/sarfaraz-wahad-engineering.pdf",
  },
} as const;

type Mandate = keyof typeof mandates;

export function RecruiterBrief() {
  const [active, setActive] = useState<Mandate>("transformation");
  const item = mandates[active];

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="Select a hiring mandate">
        {(Object.keys(mandates) as Mandate[]).map((key) => (
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
              {mandates[key].short}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 border border-line bg-surface">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="section-label text-signal">
              Two-minute brief · {item.short}
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
                Download matched CV <ArrowDownToLine className="size-4" />
              </a>
              <ContactTrigger className="interactive-lift inline-flex h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold hover:border-signal hover:text-signal">
                Start a conversation <ArrowRight className="size-4" />
              </ContactTrigger>
            </div>
          </div>

          <div className="border-t border-line bg-ground p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="section-label">Capability match</p>
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
            <p className="section-label">Best evidence</p>
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
            <p className="section-label">Suitable roles</p>
            <p className="mt-4 leading-7 text-copy-muted">{item.roles}</p>
          </div>
          <div className="border-t border-line p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="section-label">Honest boundary</p>
            <p className="mt-4 leading-7 text-copy-muted">{item.caveat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
