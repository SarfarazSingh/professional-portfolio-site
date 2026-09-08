# Sarfaraz Singh Wahad — Portfolio

An evidence-led, dual-track professional portfolio for AI and digital transformation roles as well as engineering and mission-critical systems leadership.

## Experience

The portfolio is organised around one career trajectory:

- **Operate** — technical operations and nuclear-safety leadership in the Indian Navy Submarine Service
- **Transform** — enterprise GenAI, automation, and architecture programmes at PwC
- **Build** — AI products and ventures including TrackSense AI and UP-ON.AI

Recruiters can select either career lens on the homepage or use the dedicated `/recruiter` briefing route to match evidence and CVs to a hiring mandate.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43127](http://localhost:43127).

For a production check:

```bash
npm run lint
npm run build
npm start
```

## Content and verification

Profile, chronology, projects, and writing are maintained as typed data under `content/`. Case studies explicitly distinguish public evidence, self-reported programme outcomes, planned product targets, and confidential details.

Before a public deployment, set `NEXT_PUBLIC_SITE_URL` to the canonical production origin so metadata, the sitemap, and robots file use the final domain.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui foundation
- Static rendering with small client islands for filters, themes, and recruiter views

## Accessibility

The site includes semantic landmarks, keyboard-operable controls, visible focus states, reduced-motion handling, responsive layouts, print styles, and light/dark themes.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
