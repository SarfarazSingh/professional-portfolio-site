export type Lens = "ai" | "engineering";

export const profile = {
  name: "Sarfaraz Singh Wahad",
  shortName: "SSW",
  location: "Madrid, Spain",
  email: "sarfarazsingh@student.ie.edu",
  linkedin: "https://www.linkedin.com/in/sarfarazsinghwahad/",
  substack: "https://ourbrainpickings.substack.com/",
  trackSense: "https://tracksense.in/",
  headline: "Complex technology. Made operational.",
  summary:
    "I lead technology from ambiguity to operational reality—across AI products, enterprise transformation, and safety-critical systems.",
  currentChapter: {
    eyebrow: "Now · Madrid / IE Business School",
    title: "Building the next chapter in Spain.",
    description:
      "At IE, I have combined an International MBA with venture building, cross-programme leadership, and applied AI—turning the campus and Madrid into a live laboratory for products, communities, and responsible innovation.",
    highlights: [
      "President, IE Aerospace & Defence Club",
      "President, IE Music Club",
      "Vice President (Events), IE Entrepreneurship Club",
      "IE Blue Torch Award for cross-programme leadership",
      "Winner, IE Tech Venture Lab and IE Climate Tech Lab",
      "IE representative, EU AI Policy Hackathon in Berlin",
    ],
  },
  availability:
    "Madrid-based and open to senior roles across Europe, the Middle East, and India, subject to role-specific work authorisation.",
  lenses: {
    ai: {
      eyebrow: "AI & digital transformation",
      title: "AI that moves beyond the pilot.",
      description:
        "Product strategy, enterprise delivery, adoption, governance, and measurable value—built for organisations where reliability matters.",
      roles: [
        "AI Transformation Lead",
        "AI Product / Delivery Lead",
        "Responsible AI Programme Manager",
        "Industrial AI Lead",
      ],
    },
    engineering: {
      eyebrow: "Engineering & mission-critical systems",
      title: "Systems that perform when failure matters.",
      description:
        "Technical programmes, systems integration, operational readiness, and risk controls shaped by a decade in submarine operations.",
      roles: [
        "Technical Programme Manager",
        "Mission-Critical Systems Lead",
        "Operational Readiness Manager",
        "Industrial Digitalisation Lead",
      ],
    },
  },
  proof: [
    { value: "2M+", label: "users reached by an enterprise GenAI programme" },
    { value: "5,000+", label: "submariners served by a VR training platform" },
    { value: "20+", label: "facilities covered by nuclear-risk assurance" },
    { value: "50%", label: "faster emergency response through analytics" },
  ],
  credentials: [
    "AIGP — AI Governance Professional",
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
