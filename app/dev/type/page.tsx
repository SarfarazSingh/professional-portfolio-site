import type { Metadata } from "next";

import "@fontsource-variable/archivo/standard.css";
import "@fontsource/commit-mono/400.css";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/source-sans-3/wght.css";
import "@fontsource-variable/martian-mono/wght.css";
import "@fontsource/redaction-10/400.css";
import "@fontsource-variable/public-sans/wght.css";
import "@proj-airi/font-departure-mono";

import styles from "./type.module.css";

export const metadata: Metadata = {
  title: "Typography specimens",
  description: "Phase 0 typography comparison for the portfolio rebuild.",
  robots: {
    index: false,
    follow: false,
  },
};

const specimens = [
  {
    id: "option-a",
    option: "A",
    name: "Expanded Command",
    className: styles.optionA,
    stack: "Archivo Expanded / Archivo / Commit Mono",
    note: "Disciplined · severe · lowest risk",
  },
  {
    id: "option-b",
    option: "B",
    name: "Operational Grotesque",
    className: styles.optionB,
    stack: "Bricolage Grotesque / Source Sans 3 / Martian Mono",
    note: "Authored · human · controlled tension",
  },
  {
    id: "option-c",
    option: "C",
    name: "Redacted Signal",
    className: styles.optionC,
    stack: "Redaction 10 / Public Sans / Departure Mono",
    note: "Uncomfortable · memorable · highest risk",
  },
] as const;

export default function TypeSpecimensPage() {
  return (
    <main className={styles.page}>
      <svg
        aria-hidden="true"
        className={styles.grid}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="minor-grid"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 16 0 L 0 0 0 16"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="major-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <rect width="80" height="80" fill="url(#minor-grid)" />
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#major-grid)" />
      </svg>

      <header className={styles.intro}>
        <div>
          <p className={styles.kicker}>Phase 0 / Typography checkpoint</p>
          <h1>Choose the voice before the interface.</h1>
        </div>
        <p>
          The same words, scale, spacing, instrument grid, and sodium-amber
          signal appear in every specimen. Compare authority, readability, and
          whether the system feels authored rather than decorated.
        </p>
      </header>

      <nav aria-label="Typography options" className={styles.nav}>
        {specimens.map((specimen) => (
          <a href={`#${specimen.id}`} key={specimen.id}>
            {specimen.option} · {specimen.name}
          </a>
        ))}
      </nav>

      {specimens.map((specimen) => (
        <section
          className={`${styles.specimen} ${specimen.className}`}
          id={specimen.id}
          key={specimen.id}
        >
          <aside className={styles.rail}>
            <div className={styles.option}>{specimen.option}</div>
            <div className={styles.meta}>
              {specimen.stack}
              <br />
              {specimen.note}
            </div>
          </aside>

          <div className={styles.content}>
            <p className={styles.kicker}>{specimen.name}</p>
            <h2 className={styles.display}>
              Complex technology. Made operational.
            </h2>

            <p className={styles.lede}>
              I do not assume systems are infallible. I design for the moment
              technology is wrong.
            </p>
            <p className={styles.body}>
              Eleven years operating mission-critical submarine systems taught
              me that reliability is a human and technical discipline. I now
              apply that operating instinct to AI products, enterprise
              transformation, and edge-first infrastructure—turning uncertain
              signals into decisions people can trust.
            </p>

            <div className={styles.data}>
              <div>
                <strong>11 yrs</strong>
                <span>Mission-critical naval operations</span>
              </div>
              <div>
                <strong>3 modes</strong>
                <span>Operate → Transform → Build</span>
              </div>
              <div>
                <strong>24 ms</strong>
                <span>Illustrative edge inference readout</span>
              </div>
            </div>

            <div className={styles.readout}>
              <span>Station / Madrid</span>
              <span>System / TrackSense</span>
              <span>
                Confidence / <b>92.4%</b>
              </span>
              <span>State / Human review</span>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
