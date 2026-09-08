# Portfolio Design System — Phase 0

Status: **proposal awaiting typography approval**  
Scope: design tokens and specimen route only. No production component adopts these tokens before approval.

## Design thesis

The portfolio should feel like an instrument panel designed by an operator: exact, legible, information-dense, and calm under pressure. Its visual authority comes from alignment, proportion, evidence, and working systems—not decoration.

The structural metaphor is a chart recorder. Content registers against a fixed lattice; sections become stations; the visitor’s position becomes a depth reading. The visual language may reference operational systems, but must never become submarine theatre.

## Typography

All candidates are open-licensed and self-hosted. The approved system will be reduced to at most two weights per family, Latin-subset WOFF2, `font-display: swap`, with the text face preloaded. The production build must contain none of the current Geist, Instrument Serif, or Geist Mono files.

### Option A — Expanded Command

- **Display:** Archivo Expanded, 760
- **Text:** Archivo, 400 / 600
- **Mono:** Commit Mono, 400
- **Character:** engineered, severe, highly legible, with enough width-axis personality to feel like technical nomenclature rather than SaaS.
- **Risk:** lowest-risk option; discipline must come from scale and spacing so it does not become generic corporate grotesk.
- **Licence:** SIL Open Font License 1.1.

### Option B — Operational Grotesque

- **Display:** Bricolage Grotesque, 720
- **Text:** Source Sans 3, 400 / 600
- **Mono:** Martian Mono, 400
- **Character:** more human and authored. Bricolage’s width and optical-size axes add tension without sacrificing a senior, professional reading voice.
- **Risk:** expressive details must be used at large sizes only; smaller display text can become visually busy.
- **Licence:** SIL Open Font License 1.1.

### Option C — Redacted Signal

- **Display:** Redaction 10, 400
- **Text:** Public Sans, 400 / 700
- **Mono:** Departure Mono, 400
- **Character:** deliberately uncomfortable. The display face looks like a partially resolved signal, while the body remains institutional and sober.
- **Risk:** highest. Redaction is memorable but could imply secrecy or censorship; if approved, it is limited to the hero and major station titles. Departure Mono is limited to readouts, never paragraphs.
- **Licence:** font files under SIL Open Font License 1.1.

### Fluid type scale

The minimum ratio between named steps is 1.333. Body copy never drops below 17px.

```css
--type-caption: clamp(0.75rem, 0.72rem + 0.12vw, 0.8125rem);
--type-body: clamp(1.0625rem, 1rem + 0.28vw, 1.125rem);
--type-lede: clamp(1.416rem, 1.25rem + 0.75vw, 1.75rem);
--type-h3: clamp(1.888rem, 1.55rem + 1.5vw, 2.75rem);
--type-h2: clamp(2.517rem, 1.9rem + 2.9vw, 4.75rem);
--type-h1: clamp(4.5rem, 12vw, 13.5rem);
```

- Body line-height: `1.6`
- Body measure: `68ch`
- Headline line-height: `0.82–0.92`
- Headline tracking: tuned per approved face, never below `-0.055em`
- Tabular numerals enabled for metrics and instrument readouts

## Colour

The rebuild ships dark-only initially. A light mode will not survive merely as an inversion; it can be designed later as a separate reviewed system.

Sodium amber is the single signal colour. It occupies less than 5% of a typical viewport and is reserved for live state, focus, thresholds, and selected controls. There are no gradients, coloured glows, or bloom shadows.

```css
:root {
  --ground: #090a0b;
  --surface: #111315;
  --surface-raised: #171a1d;
  --text: #f4f1e8;
  --text-muted: #bcb9b0;
  --signal: #ff8a00;
  --line: rgb(244 241 232 / 12%);
  --line-strong: rgb(244 241 232 / 24%);
  --focus: #ff8a00;
}
```

Contrast gates:

- `--text` on `--ground`: target ≥ 17:1
- `--text-muted` on `--ground`: target ≥ 9:1
- `--signal` on `--ground`: target ≥ 7:1
- Body text always uses `--text` or `--text-muted`
- Decorative hairlines are exempt because they do not carry meaning
- A contrast script must verify every declared text/background pairing in CI

No hex literals may appear in production components. Tokens are the only colour source.

## Signature layout primitive: instrument grid

One fixed, low-opacity chart-recorder lattice spans every route:

- Minor interval: `16px`
- Major interval: `80px`
- Major hairline: `--line`
- Minor hairline: 4% white
- Coordinate tick every major interval
- Station marker at every section boundary
- Desktop maximum content width: `1600px`
- Gutters: `20px / 32px / 48px`
- Section spacing registers to the 16px grid

Cards become flat stations or inventory rows. Border radius is `0–4px`, except circular avatars and pill-shaped controls. Elevation comes from line weight and spatial hierarchy, never translucent rounded panels.

The only permitted numbered sequence is the career trajectory: **Operate → Transform → Build**. Other groups use names, station IDs, or direct labels.

## Motion system

Only these four primitives are allowed.

### Reveal

- Opacity `0 → 1`
- Translate Y `16px → 0`
- Duration `380ms`
- Easing `cubic-bezier(0.16, 1, 0.3, 1)`
- IntersectionObserver `rootMargin: "-10% 0px"`, `threshold: 0.15`
- Fires once
- Reaches full opacity within 400ms of crossing the trigger
- Never tied to continuous scroll progress

### Magnetic

- Pointer-fine devices only
- Attraction radius: `40px`
- Maximum displacement: `6px`
- Spring stiffness: `260`
- Spring damping: `20`
- Applies only to primary controls and work-rack items

### Scrub

- Reserved for the depth HUD and case-study architecture diagrams
- Progress derived from document position
- Never controls content opacity or text readability
- Animation work pauses when the relevant section is off-screen

### Transition

- View Transitions API
- Duration `240ms`
- Easing `cubic-bezier(0.16, 1, 0.3, 1)`
- Shared elements: case-study title and poster frame only
- Falls back to immediate navigation

`prefers-reduced-motion: reduce` disables Reveal, Magnetic, and Scrub and renders every element at its final, fully opaque position on first paint. JavaScript-disabled output must remain complete and readable.

## Interaction and accessibility

- Body text targets AAA contrast
- Every control is reachable and operable by keyboard
- Focus uses a 2px `--signal` outline with 3px offset
- Hover never carries information without an equivalent focus state
- Canvas experiences expose a semantic control surface and static SVG fallback
- Minimum target size: 44 × 44px
- No scroll-jacking
- Screen-reader order follows reading order even when the visual grid changes

## Performance budget

- Initial JavaScript: ≤ 180KB gzipped
- LCP: ≤ 1.5s on Fast 3G
- CLS: `0`
- INP: ≤ 150ms
- Interactive canvas chunk: ≤ 40KB gzipped
- No Spline or React Three Fiber in the critical path
- No animation library above 15KB in the approved rebuild
- Canvas modules use dynamic import, `ssr: false`, IntersectionObserver lazy mounting, and a static poster before hydration
- Images use explicit dimensions and AVIF/WebP output
- Maximum two weights per approved font family

## Component geometry

- Standard radius: `2px`
- Control radius: `999px` only when the control is genuinely pill-shaped
- Hairline: `1px`
- Strong divider: `2px`
- No box-shadow blooms
- No `backdrop-filter`
- No glass surfaces
- No gradient fills or text

## Phase 0 checkpoint

The comparison route is `/dev/type`. It presents the same hero, lede, body paragraph, metrics, and instrument readout in all three systems at desktop and mobile widths.

Approval must select exactly one option: **A, B, or C**. Phase 1 may begin only after that choice.
