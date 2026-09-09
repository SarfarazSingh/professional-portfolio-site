export type Lens = "ai" | "engineering";

export const profile = {
  name: "Sarfaraz Singh Wahad",
  shortName: "SSW",
  location: "Madrid, Spain",
  email: "sarfarazsingh@student.ie.edu",
  phone: "+34663462250",
  phoneDisplay: "+34 663 462 250",
  linkedin: "https://www.linkedin.com/in/sarfarazsinghwahad/",
  substack: "https://ourbrainpickings.substack.com/",
  trackSense: "https://tracksense.in/",
  headline: "I take on difficult work and stay with it until it works.",
  summary:
    "I spent eight years in the Indian Navy’s Submarine Service. It taught me to stay calm, take responsibility, and never cut corners. I now bring that discipline to enterprise AI, governance, products, and teams.",
  currentChapter: {
    eyebrow: "Now · Madrid / IE Business School",
    title: "Learning, leading, and building in Madrid.",
    description:
      "At IE, I have worked hard to make my MBA more than a degree. I have built ventures, led student communities, represented the school, and learned from people whose lives and careers are very different from mine.",
    highlights: [
      "I serve as President of the IE Aerospace & Defence Club.",
      "I also serve as President of the IE Music Club.",
      "I am Vice President for Events of the IE Entrepreneurship Club.",
      "I was honoured to receive the IE Blue Torch Award.",
      "My teams won the IE Tech Venture Lab and IE Climate Tech Lab.",
      "I represented IE at AI-governance hackathons in Berlin and Warsaw.",
    ],
  },
  availability:
    "I am based in Madrid and open to the right senior role in Europe, the Middle East, or India, depending on the role and visa requirements.",
  lenses: {
    ai: {
      eyebrow: "AI & enterprise delivery",
      title: "I want AI to be useful, not just impressive.",
      description:
        "I work across product, delivery, adoption, and governance, especially where reliability and accountability matter.",
      roles: [
        "AI Transformation Lead",
        "AI Product / Delivery Lead",
        "Responsible AI Programme Manager",
        "Industrial AI Lead",
      ],
    },
    engineering: {
      eyebrow: "Engineering & safety-critical systems",
      title: "I learned engineering where failure had real consequences.",
      description:
        "My approach to technical programmes, integration, readiness, and risk was shaped by eight years in submarine operations.",
      roles: [
        "Technical Programme Manager",
        "Mission-Critical Systems Lead",
        "Operational Readiness Manager",
        "Industrial Digitalisation Lead",
      ],
    },
  },
  proof: [
    { value: "2M+", label: "users in a GenAI programme I helped deliver at PwC" },
    { value: "5,000+", label: "submariners supported by a VR training platform" },
    { value: "20+", label: "facilities covered during a nuclear-safety programme" },
    { value: "50%", label: "faster emergency response after we introduced analytics" },
  ],
  credentials: [
    "AIGP — Artificial Intelligence Governance Professional",
    "AERB-certified Licensed Radiation Safety Officer",
    "PMP — Project Management Professional",
    "IE International MBA — expected September 2026",
    "IE Blue Torch Award — Cross-Program Experience",
    "B.E. Information Science",
  ],
  languages: ["English", "Hindi", "Punjabi", "Russian", "Spanish (A2)"],
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
