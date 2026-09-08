"use client";

import Link from "next/link";
import { ArrowDownToLine, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { profile } from "@/content/profile";
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
        {(Object.keys(mandates) as Mandate[]).map((key, index) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={cn(
              "rounded-xl border p-4 text-left transition-colors",
              active === key
                ? "border-signal bg-signal/8"
                : "border-ink/10 hover:border-ink/30 dark:border-paper/10 dark:hover:border-paper/30",
            )}
          >
            <span className="font-mono text-[9px] tracking-[0.14em] text-steel">
              0{index + 1}
            </span>
            <span className="mt-2 block text-sm font-medium">
              {mandates[key].short}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[2rem] bg-ink text-paper">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="font-mono text-[10px] tracking-[0.16em] text-signal">
              30-SECOND BRIEF / {item.short.toUpperCase()}
            </p>
            <h2 className="mt-8 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              {item.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/65">
              {item.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={item.cv}
                download
                className="inline-flex h-12 items-center gap-3 rounded-full bg-paper px-6 text-sm font-medium text-ink transition-colors hover:bg-signal hover:text-white"
              >
                Download matched CV <ArrowDownToLine className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`Conversation about ${item.short}`)}`}
                className="inline-flex h-12 items-center gap-3 rounded-full border border-paper/20 px-6 text-sm font-medium hover:border-signal hover:text-signal"
              >
                Start a conversation <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-paper/10 bg-paper/[0.045] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="font-mono text-[9px] tracking-[0.16em] text-paper/45">
              CAPABILITY MATCH
            </p>
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

        <div className="grid border-t border-paper/10 lg:grid-cols-3">
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[9px] tracking-[0.16em] text-paper/45">
              BEST EVIDENCE
            </p>
            <div className="mt-4 grid gap-2">
              {item.cases.map((caseItem) => (
                <Link
                  key={caseItem.href}
                  href={caseItem.href}
                  className="flex items-center justify-between border-b border-paper/10 py-2 text-sm hover:text-signal"
                >
                  {caseItem.title} <ArrowRight className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-paper/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="font-mono text-[9px] tracking-[0.16em] text-paper/45">
              SUITABLE ROLES
            </p>
            <p className="mt-4 text-sm leading-6 text-paper/75">{item.roles}</p>
          </div>
          <div className="border-t border-paper/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="font-mono text-[9px] tracking-[0.16em] text-paper/45">
              HONEST BOUNDARY
            </p>
            <p className="mt-4 text-sm leading-6 text-paper/55">{item.caveat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
