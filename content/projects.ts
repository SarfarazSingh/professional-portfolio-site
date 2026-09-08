import type { Lens } from "./profile";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  category: string;
  year: string;
  lens: Lens[];
  featured: boolean;
  accent: "teal" | "ocean" | "amber" | "steel";
  challenge: string;
  role: string;
  actions: string[];
  system: string[];
  outcome: string[];
  relevance: string;
  evidence: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "tracksense",
    index: "01",
    title: "TrackSense AI",
    kicker: "PREDICTIVE INFRASTRUCTURE INTELLIGENCE",
    summary:
      "An edge-first decision layer that helps railway operators move from reactive maintenance to predictive safety.",
    category: "Industrial AI",
    year: "2026",
    lens: ["engineering", "ai"],
    featured: true,
    accent: "teal",
    challenge:
      "Rail infrastructure is inspected through fragmented, periodic workflows. Signals arrive late, risks are hard to rank, and maintenance teams need decisions—not another dashboard.",
    role:
      "As co-founder and Technical Lead, Sarfaraz helped translate an operational reliability problem into the product architecture, operator workflow, and venture story.",
    actions: [
      "Framed the product around the operator loop: Observe → Understand → Act.",
      "Designed a multimodal concept combining video, vibration, thermal, and acoustic signals.",
      "Defined confidence-weighted risk prioritisation and human review as core product behaviour.",
      "Connected product requirements to pilot metrics, commercial narrative, and deployment constraints.",
    ],
    system: [
      "Edge-first sensing",
      "Multimodal sensor fusion",
      "Risk-ranked alerts",
      "Operator command view",
      "Human-in-the-loop review",
    ],
    outcome: [
      "Best Overall Project — IE School of Science & Technology Venture Bootcamp.",
      "A working command-centre interface and staged pilot hypothesis.",
      "A product narrative spanning rail, bridges, ports, and other linear infrastructure.",
    ],
    relevance:
      "TrackSense demonstrates the full bridge between field operations, AI product thinking, governance, and commercialisation.",
    evidence:
      "Public materials verify the team, recognition, product concept, and Sarfaraz’s Technical Lead role. Pilot and performance targets are presented as planned validation measures—not production results.",
    href: "https://tracksense.in/",
  },
  {
    slug: "enterprise-ai-transformation",
    index: "02",
    title: "Enterprise AI at scale",
    kicker: "PWC · GENAI & AUTOMATION",
    summary:
      "Three transformation programmes that moved conversational AI from technology initiative to operating impact.",
    category: "Enterprise AI",
    year: "2023–25",
    lens: ["ai", "engineering"],
    featured: true,
    accent: "ocean",
    challenge:
      "Large service organisations needed to improve customer operations while working through legacy architecture, release risk, scale, and cross-functional dependencies.",
    role:
      "As a Manager at PwC, Sarfaraz worked across business and technical stakeholders to shape solutions, coordinate delivery, and connect adoption to measurable operational outcomes.",
    actions: [
      "Helped deliver a GenAI conversational solution in a 2M+ user environment.",
      "Designed an automated IVR and chatbot testing platform to remove release bottlenecks.",
      "Redesigned a legacy utilities contact-centre architecture for higher capacity.",
      "Aligned product, architecture, operations, and client stakeholders around delivery decisions.",
    ],
    system: [
      "Conversational AI",
      "Automated testing",
      "Contact-centre architecture",
      "Release governance",
      "Adoption and value metrics",
    ],
    outcome: [
      "30% improvement in service efficiency.",
      "50% reduction in release cycles.",
      "40% increase in contact-centre capacity.",
    ],
    relevance:
      "This work shows enterprise AI as organisational change: architecture, adoption, controls, and value—not a standalone model.",
    evidence:
      "Client identities and implementation details are omitted for confidentiality. Metrics are drawn from the supplied professional record and should be read as programme outcomes.",
  },
  {
    slug: "submarine-systems",
    index: "03",
    title: "Systems under pressure",
    kicker: "INDIAN NAVY · SUBMARINE SERVICE",
    summary:
      "A decade of technical leadership shaped around readiness, human judgement, and systems that cannot simply fail fast.",
    category: "Mission-critical",
    year: "2015–23",
    lens: ["engineering", "ai"],
    featured: true,
    accent: "amber",
    challenge:
      "Submarine operations demand continuous readiness across people, equipment, procedures, and data—with little tolerance for ambiguity at the point of decision.",
    role:
      "Sarfaraz held progressive technical operations, nuclear safety, international programme, and training responsibilities across conventional and nuclear submarines.",
    actions: [
      "Led multidisciplinary teams around safety-critical assets and operating procedures.",
      "Converted 120+ monitored parameters into a decision-support tool for emergency response.",
      "Owned delivery of a VR training programme from requirements through live rollout.",
      "Led assurance work across 20+ facilities and international asset-transfer coordination.",
    ],
    system: [
      "Operational readiness",
      "Nuclear-risk assurance",
      "Incident response",
      "Training systems",
      "Systems integration",
    ],
    outcome: [
      "5,000+ users supported by a $10M VR training platform.",
      "50% faster emergency response through analytics.",
      "$2M saved in international sensor-calibration contracts.",
    ],
    relevance:
      "The operating principles transfer directly to responsible AI: validation, clear boundaries, observability, escalation, and human authority.",
    evidence:
      "Public descriptions intentionally exclude sensitive operational details. The $5B+ figure refers to reported asset value, not a budget personally owned.",
  },
  {
    slug: "up-on-ai",
    index: "04",
    title: "UP-ON.AI",
    kicker: "AGENTIC COMPANY BUILDER",
    summary:
      "A venture-building product that brings research, strategy, positioning, and specialist expertise into one adaptive journey.",
    category: "Agentic products",
    year: "2026",
    lens: ["ai"],
    featured: true,
    accent: "steel",
    challenge:
      "Founders often stitch together agencies, advisers, and disconnected tools before they have clarity on the problem, customer, or path to market.",
    role:
      "As AI Lead at Gamucha Ventures, Sarfaraz owned product framing and architecture across an early-stage company-building experience.",
    actions: [
      "Separated the experience into zero-to-one and growth pathways.",
      "Mapped agentic research and strategy workflows around founder decisions.",
      "Designed adaptive onboarding and retrieval-supported knowledge flows.",
      "Connected product experience, service model, and investor narrative.",
    ],
    system: [
      "Adaptive onboarding",
      "LLM workflows",
      "Retrieval-augmented research",
      "Human expert checkpoints",
      "Strategy synthesis",
    ],
    outcome: [
      "A polished, working company-builder web experience.",
      "An integrated product vision spanning Company Builder, CEO-as-a-Service, and community.",
      "A concrete architecture and delivery roadmap for an early-stage venture.",
    ],
    relevance:
      "UP-ON.AI shows zero-to-one AI product leadership: turning a broad service proposition into an understandable system and shippable experience.",
    evidence:
      "The public product and investor deck demonstrate the concept and experience. Roadmap and platform-scale claims remain forward-looking.",
    href: "https://up-on-ai.vercel.app",
  },
];

export const artefacts = [
  {
    title: "Agentic Systems Keynote",
    type: "Executive education",
    description: "A clear, interactive explanation of agents, tools, memory, verification, and human checkpoints.",
    href: "https://agentic-systems-keynote.vercel.app",
  },
  {
    title: "AnterVid",
    type: "Industrial AI concept",
    description: "A systems story for continuous structural-health intelligence across critical assets.",
    href: "https://antervid-india.vercel.app",
  },
  {
    title: "YourIE",
    type: "Product prototype",
    description: "A relationship-led alumni network with ranked introduction paths and deep discovery flows.",
    href: "https://yourie.vercel.app",
  },
  {
    title: "Weave",
    type: "Live venture experiment",
    description: "A lightweight matching and meetup product designed, launched, and operated in Madrid.",
    href: "https://weave-pitch-deck.vercel.app",
  },
  {
    title: "Guided Ambitions",
    type: "Commercial venture",
    description: "A complete consulting proposition for MBA applicants and military-career transitions.",
    href: "https://guidedambitions-gamma.vercel.app",
  },
  {
    title: "Loco Dhaasu",
    type: "Brand & go-to-market",
    description: "A bold bilingual food concept built around campus demand, pricing, and community.",
    href: "https://loco-dhaasu.vercel.app",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
