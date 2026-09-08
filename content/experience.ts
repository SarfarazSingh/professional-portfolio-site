import type { Lens } from "./profile";

export type ExperienceItem = {
  period: string;
  organisation: string;
  role: string;
  scope: string;
  outcomes: string[];
  lenses: Lens[];
  phase: "build" | "transform" | "operate";
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 — 2026",
    organisation: "IE Business School · Madrid",
    role: "International MBA · Technology Impact Scholar",
    scope:
      "Combined graduate business education with venture building, cross-programme leadership, and applied AI work across the IE and Madrid ecosystems.",
    outcomes: [
      "Led the IE Aerospace & Defence Club and IE Music Club as President, while serving as Vice President (Events) of the IE Entrepreneurship Club.",
      "Received the IE Blue Torch Award for cross-programme contribution and leadership.",
      "Built TrackSense AI, Weave, and Loco Dhaasu as live product, community, and go-to-market experiments in Spain.",
      "Won the IE Tech Venture Lab and IE Climate Tech Lab, and represented IE at the EU AI Policy Hackathon in Berlin.",
    ],
    lenses: ["ai", "engineering"],
    phase: "build",
  },
  {
    period: "2026 — PRESENT",
    organisation: "Gamucha Ventures",
    role: "AI Lead",
    scope:
      "Own AI product strategy and architecture across early-stage ventures, turning zero-to-one problems into shippable roadmaps.",
    outcomes: [
      "Built UP-ON.AI, an agentic company-building platform combining LLM workflows, retrieval, and adaptive onboarding.",
      "Lead opportunity validation, product framing, architecture, and delivery across venture concepts.",
    ],
    lenses: ["ai", "engineering"],
    phase: "build",
  },
  {
    period: "2026 — PRESENT",
    organisation: "TrackSense AI",
    role: "Co-founder & Technical Lead",
    scope:
      "Developing predictive intelligence for critical infrastructure using edge AI, sensor fusion, and operator-centred workflows.",
    outcomes: [
      "Translated railway inspection and maintenance needs into an Observe → Understand → Act product workflow.",
      "Co-built an award-winning venture recognised as Best Overall Project at the IE Venture Bootcamp.",
    ],
    lenses: ["engineering", "ai"],
    phase: "build",
  },
  {
    period: "2025 — PRESENT",
    organisation: "Weave",
    role: "Founder",
    scope:
      "Built and operated a curated community-matching product for international MBA students in Madrid.",
    outcomes: [
      "Designed the matching journey from behavioural questionnaire through curated small-group meetups.",
      "Ran product, partnerships, pricing, and go-to-market as a live campus experiment.",
    ],
    lenses: ["ai"],
    phase: "build",
  },
  {
    period: "2023 — 2025",
    organisation: "PwC",
    role: "Manager — Generative AI & Data Analytics",
    scope:
      "Delivered enterprise automation and digital-transformation programmes for Fortune 500 clients in North America.",
    outcomes: [
      "Shipped a conversational AI solution improving service efficiency by 30% across a 2M+ user environment.",
      "Launched automated IVR and chatbot testing, reducing release cycles by 50%.",
      "Redesigned a utilities contact-centre architecture to increase capacity by 40%.",
    ],
    lenses: ["ai", "engineering"],
    phase: "transform",
  },
  {
    period: "2015 — 2023",
    organisation: "Indian Navy — Submarine Service",
    role: "Technical Operations & Nuclear Safety Leadership",
    scope:
      "Led technical operations, modernisation, training, and safety assurance across submarines, shore facilities, and international programmes.",
    outcomes: [
      "Delivered a $10M VR training platform supporting 5,000+ submariners.",
      "Led nuclear-risk assurance across 20+ facilities with zero safety incidents during the programme.",
      "Built analytics across 120+ system parameters, cutting emergency-response time by 50%.",
      "Oversaw the transfer of a $5B+ critical asset and negotiated $2M in sensor-calibration savings.",
    ],
    lenses: ["engineering", "ai"],
    phase: "operate",
  },
];

export const phases = [
  {
    id: "operate",
    number: "01",
    title: "Operate",
    years: "2015–23",
    statement: "Built judgement where reliability is non-negotiable.",
  },
  {
    id: "transform",
    number: "02",
    title: "Transform",
    years: "2023–25",
    statement: "Turned enterprise complexity into measurable change.",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    years: "2025–now",
    statement: "Create AI-enabled products from first principle to market.",
  },
] as const;
