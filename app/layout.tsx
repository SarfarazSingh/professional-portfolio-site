import type { Metadata } from "next";
import localFont from "next/font/local";
import { InstrumentGrid } from "@/components/portfolio/instrument-grid";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { profile } from "@/content/profile";
import "./globals.css";

const archivoExpanded = localFont({
  src: "../node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2",
  variable: "--font-display",
  display: "swap",
  preload: true,
  weight: "100 900",
});

const sourceSans = localFont({
  src: "../node_modules/@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2",
  variable: "--font-text",
  display: "swap",
  preload: true,
  weight: "200 900",
});

const departureMono = localFont({
  src: "../node_modules/@proj-airi/font-departure-mono/dist/files/DepartureMono-Regular.woff2",
  variable: "--font-readout",
  display: "swap",
  preload: false,
  weight: "400",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:43127";
const revealScript = `document.documentElement.classList.add("js");`;
const revealObserverScript = `
  (() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supported = "IntersectionObserver" in window;
    const seen = new WeakSet();
    const observer = supported && !reduced
      ? new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.dataset.revealState = "visible";
            observer.unobserve(entry.target);
          }
        }, { rootMargin: "-10% 0px", threshold: 0.15 })
      : null;

    const register = (root) => {
      const elements = root.matches?.(".reveal[data-reveal-state='idle']")
        ? [root]
        : root.querySelectorAll?.(".reveal[data-reveal-state='idle']") ?? [];

      for (const element of elements) {
        if (seen.has(element)) continue;
        seen.add(element);
        if (observer) observer.observe(element);
        else element.dataset.revealState = "visible";
      }
    };

    register(document);
    new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) register(node);
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sarfaraz Singh Wahad — Technology & AI Leader",
    template: "%s — Sarfaraz Singh Wahad",
  },
  description:
    "AI, digital transformation, and mission-critical systems leadership. From submarine operations to enterprise AI and critical-infrastructure products.",
  keywords: [
    "AI transformation",
    "AI product leader",
    "mission-critical systems",
    "responsible AI",
    "technical programme manager",
    "critical infrastructure",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: "Complex technology. Made operational.",
    description:
      "AI-enabled transformation and mission-critical systems leadership.",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Complex technology. Made operational.",
    description:
      "AI-enabled transformation and mission-critical systems leadership.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "AI Product and Technology Leader",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "Spain",
    },
    sameAs: [profile.linkedin, profile.substack, profile.trackSense],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivoExpanded.variable} ${sourceSans.variable} ${departureMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only z-[100] bg-signal px-4 py-3 text-ground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <InstrumentGrid />
        <SiteHeader />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <div className="relative z-10">
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script dangerouslySetInnerHTML={{ __html: revealObserverScript }} />
      </body>
    </html>
  );
}
