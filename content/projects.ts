import type { Lens } from "./profile";

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  category: string;
  year: string;
  lens: Lens[];
  featured: boolean;
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
    title: "TrackSense AI",
    kicker: "Helping rail teams spot problems earlier",
    summary:
      "I am building TrackSense with my co-founders: edge sensors and local models that flag possible track problems while keeping the final decision with the operator.",
    category: "Industrial AI",
    year: "2026",
    lens: ["engineering", "ai"],
    featured: true,
    challenge:
      "Rail inspections often happen in separate, periodic steps. By the time signals are brought together, maintenance teams may have lost valuable time.",
    role:
      "As co-founder and technical lead, I turn what operators need into the product architecture, workflow, and technical plan.",
    actions: [
      "I organised the product around three plain questions: what do we see, what might it mean, and what should the operator do next?",
      "I designed a concept that brings video, vibration, thermal, and acoustic signals together.",
      "I made confidence, uncertainty, and human review part of the product rather than an afterthought.",
      "I connected the product requirements to a realistic pilot plan, costs, and deployment limits.",
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
      "A working interface that lets operators review signals and make the call.",
      "A staged pilot plan for testing the idea honestly before making performance claims.",
    ],
    relevance:
      "I include TrackSense because it brings together my engineering background, AI product work, and belief that people must remain accountable for consequential decisions.",
    evidence:
      "The public material shows our team, the award, the product idea, and my role. Pilot and performance figures are plans to test, not production results.",
    href: "https://tracksense.in/",
  },
  {
    slug: "pdip",
    title: "PDIP",
    kicker: "AI governance & disinformation",
    summary:
      "I built a working prototype that turns suspected AI-generated or coordinated political content into a documented compliance review.",
    category: "Responsible AI prototype",
    year: "2026",
    lens: ["ai"],
    featured: true,
    challenge:
      "Teams reviewing suspected disinformation need to move quickly without turning an AI score into a verdict. They also need to show which rule applies, what evidence was used, and who remains accountable.",
    role:
      "I designed and built the Parliamentary Disinformation Intelligence Platform as a policy and interface prototype following my work at the CIVICA EU AI Policy Hackathon.",
    actions: [
      "I designed an intake flow for suspected synthetic or coordinated text, transcripts, and media links.",
      "I connected each review to relevant provisions of the EU AI Act, Digital Services Act, GDPR, and EU political-advertising rules.",
      "I made source evidence, escalation, human review, and an audit trail visible in the interface.",
      "I added red-team scenarios so the review flow can be tested without presenting generated outputs as real incidents.",
    ],
    system: [
      "Disinformation intake",
      "Regulatory mapping",
      "Evidence record",
      "Human review",
      "Escalation queue",
      "Audit trail",
    ],
    outcome: [
      "A public, working prototype that demonstrates the complete review journey.",
      "A plain link between model output, source evidence, regulation, and human accountability.",
      "Reusable test scenarios covering elections, manipulated media, and public-interest claims.",
    ],
    relevance:
      "I include PDIP because it shows the governance work itself—not just a certification. It makes the rules, uncertainty, and human responsibility visible in a product people can try.",
    evidence:
      "The public demo verifies the interface and regulatory references. It is a portfolio prototype, not a deployed parliamentary or government system. Its scores are simulated and do not constitute legal advice.",
    href: "https://frontend-six-bay-39.vercel.app",
  },
  {
    slug: "enterprise-ai-transformation",
    title: "Enterprise AI at PwC",
    kicker: "PwC · GenAI and automation",
    summary:
      "Three programmes where I helped move AI and automation from a promising idea into everyday operations.",
    category: "Enterprise AI",
    year: "2023–25",
    lens: ["ai", "engineering"],
    featured: true,
    challenge:
      "The organisations I worked with wanted better customer service, but they also had legacy systems, careful release processes, and many teams that had to move together.",
    role:
      "As a manager at PwC, I worked between business, product, engineering, and operations teams. My job was to help people make sound decisions and carry them through delivery.",
    actions: [
      "I helped deliver a GenAI conversational programme in a 2M+ user environment.",
      "I designed an automated approach to IVR and chatbot testing so teams could release with more confidence.",
      "I worked on the redesign of a utilities contact-centre architecture to support more demand.",
      "I kept product, architecture, operations, and client teams aligned when decisions became difficult.",
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
      "I include this work because enterprise AI succeeds or fails through people, adoption, controls, and delivery—not through the model alone.",
    evidence:
      "I do not name clients or share confidential implementation details. The figures come from my professional record and describe programme outcomes.",
  },
  {
    slug: "submarine-systems",
    title: "My years in the Submarine Service",
    kicker: "Indian Navy · Submarine Service",
    summary:
      "Eight years of service taught me that readiness is earned every day, responsibility cannot be delegated, and ‘fail fast’ is not a serious option when lives depend on the system.",
    category: "Safety-critical engineering",
    year: "2015–23",
    lens: ["engineering", "ai"],
    featured: true,
    challenge:
      "A submarine is ready only when its people, equipment, procedures, and information are ready together. There is very little room for guesswork when a decision has to be made.",
    role:
      "I served in progressively responsible roles across technical operations, nuclear safety, international programmes, and training on conventional and nuclear submarines, including three years as Senior Operations and Radiation Safety Officer.",
    actions: [
      "I qualified as a Licensed Radiation Safety Officer through India’s Atomic Energy Regulatory Board.",
      "I led multidisciplinary teams responsible for safety-critical equipment and procedures.",
      "My team turned more than 120 monitored parameters into a tool that supported faster emergency decisions.",
      "I led a VR training programme from requirements through rollout to more than 5,000 submariners.",
      "I led assurance work across more than 20 facilities and helped coordinate an international asset transfer.",
    ],
    system: [
      "Operational readiness",
      "Radiation safety",
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
      "What I learned about checking evidence, knowing limits, escalating early, and keeping a person accountable now shapes how I work with AI.",
    evidence:
      "I have deliberately left out sensitive operational details. My Licensed Radiation Safety Officer role is listed in the supplied professional record; the supporting AERB certificate is not published on this site. The $5B+ figure is the reported value of the asset involved; it was never a budget I personally owned.",
  },
  {
    slug: "up-on-ai",
    title: "UP-ON.AI",
    kicker: "A guided product for founders",
    summary:
      "A product that helps founders work through research, strategy, positioning, and expert advice in one guided journey.",
    category: "AI product",
    year: "2026",
    lens: ["ai"],
    featured: true,
    challenge:
      "Early founders often pay several advisers and use several tools before they are clear about the problem, the customer, or the next decision.",
    role:
      "As AI lead at Gamucha Ventures, I shaped the product and architecture for this early-stage company-building experience.",
    actions: [
      "I separated the experience for people starting a company from those trying to grow one.",
      "I mapped research and strategy workflows around the decisions founders actually face.",
      "I designed onboarding that adapts to the founder and uses retrieved source material.",
      "I connected the product experience to the service model and investor story.",
    ],
    system: [
      "Adaptive onboarding",
      "LLM workflows",
      "Retrieval-augmented research",
      "Human expert checkpoints",
      "Strategy synthesis",
    ],
    outcome: [
      "A working web product that people can try.",
      "One clear product direction across the company builder, advisory service, and community.",
      "A practical architecture and delivery plan for the venture’s next stage.",
    ],
    relevance:
      "I include UP-ON.AI because it shows how I take a broad early idea, make choices, and turn it into something people can understand and use.",
    evidence:
      "The public product and investor deck show the idea and experience. The roadmap and any claims about future scale remain forward-looking.",
    href: "https://up-on-ai.vercel.app",
  },
];

export const artefacts = [
  {
    title: "Agentic Systems Keynote",
    type: "Executive education",
    description: "An interactive talk I built to explain agents, tools, memory, verification, and where people still need to decide.",
    href: "https://agentic-systems-keynote.vercel.app",
  },
  {
    title: "AnterVid",
    type: "Industrial AI concept",
    description: "A concept for continuously monitoring the condition of important structures.",
    href: "https://antervid-india.vercel.app",
  },
  {
    title: "YourIE",
    type: "Product prototype",
    description: "An alumni-network prototype designed around thoughtful introductions rather than another directory.",
    href: "https://yourie.vercel.app",
  },
  {
    title: "Weave",
    type: "Community venture",
    description: "A matching and meetup product I designed, launched, and ran in Madrid.",
    href: "https://weave-pitch-deck.vercel.app",
  },
  {
    title: "Guided Ambitions",
    type: "Commercial venture",
    description: "A practical advisory concept for MBA applicants and people leaving military service.",
    href: "https://guidedambitions-gamma.vercel.app",
  },
  {
    title: "Loco Dhaasu",
    type: "Food venture",
    description: "A bilingual food concept my team tested around campus demand, pricing, and community.",
    href: "https://loco-dhaasu.vercel.app",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
