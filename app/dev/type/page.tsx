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
              I take on difficult work and stay with it until it works.
            </h2>

            <p className={styles.lede}>
              I do not assume systems are infallible. I design for the moment
              technology is wrong.
            </p>
            <p className={styles.body}>
              Eight years in the Indian Navy’s Submarine Service taught me that
              reliability depends on people as much as machinery. I now carry
              that care into AI products, technical programmes, and the teams I
              am fortunate to lead.
            </p>

            <div className={styles.data}>
              <div>
                <strong>8 yrs</strong>
                <span>Indian Navy Submarine Service</span>
              </div>
              <div>
                <strong>3 chapters</strong>
                <span>Indian Navy → PwC → Madrid</span>
              </div>
              <div>
                <strong>24 ms</strong>
                <span>Example local-processing reading</span>
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
