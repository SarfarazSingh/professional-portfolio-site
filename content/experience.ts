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
      "I came to IE to broaden my judgement beyond engineering. Alongside the MBA, I have built ventures, led student communities, and contributed to life across the school.",
    outcomes: [
      "I serve as President of the IE Aerospace & Defence Club and IE Music Club, and as Vice President for Events of the IE Entrepreneurship Club.",
      "I was honoured to receive the IE Blue Torch Award for contributing across programmes and communities.",
      "I used my time in Spain to build TrackSense AI, Weave, and Loco Dhaasu with classmates and collaborators.",
      "My teams won the IE Tech Venture Lab and IE Climate Tech Lab, and I represented IE at the EU AI Policy Hackathon in Berlin.",
    ],
    lenses: ["ai", "engineering"],
    phase: "build",
  },
  {
    period: "2026 — PRESENT",
    organisation: "Gamucha Ventures",
    role: "AI Lead",
    scope:
      "I help early-stage teams decide what to build, where AI is genuinely useful, and how to turn an early idea into something we can ship.",
    outcomes: [
      "I helped build UP-ON.AI, a guided company-building product that combines LLM workflows, retrieval, and adaptive onboarding.",
      "I lead opportunity validation, product framing, architecture, and delivery across venture ideas.",
    ],
    lenses: ["ai", "engineering"],
    phase: "build",
  },
  {
    period: "2026 — PRESENT",
    organisation: "TrackSense AI",
    role: "Co-founder & Technical Lead",
    scope:
      "I am building TrackSense with a small team to help rail operators spot problems earlier using edge AI and sensor data.",
    outcomes: [
      "I translated railway inspection and maintenance needs into a simple workflow: observe the signal, understand the risk, and let the operator decide.",
      "Our team was recognised with Best Overall Project at the IE School of Science & Technology Venture Bootcamp.",
    ],
    lenses: ["engineering", "ai"],
    phase: "build",
  },
  {
    period: "2025 — PRESENT",
    organisation: "Weave",
    role: "Founder",
    scope:
      "I founded Weave to help international MBA students in Madrid form smaller, more meaningful friendships.",
    outcomes: [
      "I designed the journey from a short questionnaire to carefully matched small-group meetups.",
      "I handled the product, partnerships, pricing, and early events myself, learning directly from the people who joined.",
    ],
    lenses: ["ai"],
    phase: "build",
  },
  {
    period: "2023 — 2025",
    organisation: "PwC",
    role: "Manager — Generative AI & Data Analytics",
    scope:
      "At PwC, I helped large North American organisations put AI and automation into day-to-day operations.",
    outcomes: [
      "I helped deliver a conversational AI programme in a 2M+ user environment, with a reported 30% improvement in service efficiency.",
      "I helped introduce automated IVR and chatbot testing, cutting release cycles by 50%.",
      "I worked on a utilities contact-centre redesign that increased capacity by 40%.",
    ],
    lenses: ["ai", "engineering"],
    phase: "transform",
  },
  {
    period: "2015 — 2023",
    organisation: "Indian Navy — Submarine Service",
    role: "Technical Operations & Nuclear Safety Leadership",
    scope:
      "I served for eight years in the Submarine Service. I remain deeply proud of that time and of the people who trusted me with difficult technical, safety, training, and international responsibilities.",
    outcomes: [
      "I led delivery of a $10M VR training platform that supported more than 5,000 submariners.",
      "I led nuclear-risk assurance across 20+ facilities, with no safety incidents during the programme.",
      "My team turned more than 120 system parameters into an analytics tool that cut emergency-response time by 50%.",
      "I helped oversee the transfer of an asset reported at more than $5B and negotiated $2M in sensor-calibration savings.",
    ],
    lenses: ["engineering", "ai"],
    phase: "operate",
  },
];

export const phases = [
  {
    id: "operate",
    number: "01",
    title: "Indian Navy",
    years: "2015–23",
    statement: "I learned to work carefully, calmly, and without cutting corners.",
  },
  {
    id: "transform",
    number: "02",
    title: "PwC",
    years: "2023–25",
    statement: "I helped large teams turn AI and automation into practical results.",
  },
  {
    id: "build",
    number: "03",
    title: "Madrid & ventures",
    years: "2025–now",
    statement: "I am learning by building products, communities, and new ventures.",
  },
] as const;
