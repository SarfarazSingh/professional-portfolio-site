"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Crosshair,
  MoveUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { profile, type Lens } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const identities = [
  {
    label: "Submariner",
    code: "OPS.01",
    statement: "Decisions shaped where failure is not an option.",
  },
  {
    label: "Founder",
    code: "BUILD.02",
    statement: "Products taken from first principle to real users.",
  },
  {
    label: "AI Product Leader",
    code: "AI.03",
    statement: "AI moved beyond the pilot into operating value.",
  },
  {
    label: "Systems Builder",
    code: "SYS.04",
    statement: "People, technology, controls, and context designed as one.",
  },
  {
    label: "IE MBA",
    code: "MAD.05",
    statement: "Venture building and cross-programme leadership in Madrid.",
  },
] as const;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HomeHero() {
  const [lens, setLens] = useState<Lens>("ai");
  const [identity, setIdentity] = useState(0);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 20 });
  const portraitRotateY = useTransform(smoothX, [-1, 1], [-4, 4]);
  const portraitRotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const glowX = useTransform(smoothX, [-1, 1], ["5%", "75%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["10%", "80%"]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setIdentity((current) => (current + 1) % identities.length),
      3200,
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  function selectLens(next: Lens) {
    setLens(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lens", next);
    window.history.replaceState({}, "", url);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  const content = profile.lenses[lens];
  const activeIdentity = identities[identity];

  return (
    <section
      onPointerMove={handlePointerMove}
      className="tech-hero relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-[#07131d] text-[#f5f4ef]"
    >
      <div className="tech-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute -left-48 -top-48 size-[720px] rounded-full bg-signal/20 blur-[120px]"
        style={{ left: glowX, top: glowY }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(31,157,150,.13),transparent_26%),linear-gradient(90deg,rgba(7,19,29,.08),rgba(7,19,29,.82)_100%)]" />
      <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1600px] flex-col px-5 pb-7 pt-6 sm:px-8 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/10 pb-4 font-mono text-[9px] tracking-[0.16em] text-paper/50"
        >
          <span className="flex items-center gap-2">
            <Crosshair className="size-3 text-signal" />
            MADRID · 40.4168° N, 3.7038° W
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            AVAILABLE FOR SELECT SENIOR MANDATES
          </span>
        </motion.div>

        <div className="grid flex-1 gap-8 py-8 lg:grid-cols-[180px_minmax(0,1.1fr)_minmax(360px,.75fr)] lg:items-center lg:gap-9 lg:py-10 xl:grid-cols-[210px_minmax(0,1.2fr)_minmax(430px,.78fr)]">
          <motion.aside
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="order-2 lg:order-1"
            aria-label="Professional identities"
          >
            <p className="mb-4 font-mono text-[9px] tracking-[0.2em] text-paper/35">
              IDENTITY COMMAND
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible">
              {identities.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setIdentity(index)}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 border-l px-3 py-2 text-left transition-all lg:w-full",
                    identity === index
                      ? "border-signal bg-signal/10 text-paper"
                      : "border-paper/10 text-paper/38 hover:border-paper/40 hover:text-paper/75",
                  )}
                  aria-pressed={identity === index}
                >
                  <span className="font-mono text-[8px] text-signal">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-medium tracking-wide">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-8 hidden border-l border-paper/10 pl-4 lg:block">
              <p className="font-mono text-[8px] tracking-[0.16em] text-paper/30">
                ACTIVE SIGNAL
              </p>
              <div className="mt-3 flex h-8 items-end gap-1" aria-hidden="true">
                {[40, 70, 48, 90, 62, 35, 78, 54, 82, 44].map((height, index) => (
                  <motion.span
                    key={index}
                    className="w-1 bg-signal/70"
                    animate={reduceMotion ? undefined : { height: [`${height / 2}%`, `${height}%`, `${height / 2}%`] }}
                    transition={{ duration: 1.2, delay: index * 0.08, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
          </motion.aside>

          <div className="order-1 lg:order-2">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="font-mono text-[10px] font-medium tracking-[0.2em] text-signal"
            >
              SARFARAZ SINGH WAHAD / PROFILE 2026
            </motion.p>
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={0.28}
              className="mt-5 max-w-4xl text-balance font-serif text-[clamp(4.2rem,8vw,8.4rem)] leading-[0.78] tracking-[-0.065em]"
            >
              Sarfaraz
              <br />
              Singh Wahad.
            </motion.h1>

            <div className="mt-7 min-h-[84px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdentity.label}
                  initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-serif text-4xl tracking-[-0.04em] text-signal sm:text-5xl">
                      {activeIdentity.label}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.16em] text-paper/30">
                      {activeIdentity.code}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-paper/52">
                    {activeIdentity.statement}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/work"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-signal px-6 text-sm font-semibold text-white transition-all hover:gap-5 hover:bg-[#31b7af]"
              >
                Enter the portfolio
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/recruiter"
                className="group inline-flex h-12 items-center gap-3 rounded-full border border-paper/20 bg-paper/[0.04] px-6 text-sm font-medium text-paper/80 backdrop-blur transition-colors hover:border-signal hover:text-signal"
              >
                Recruiter brief
                <MoveUpRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="order-3 mx-auto w-full max-w-[540px] [perspective:1200px] lg:mx-0"
          >
            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : { rotateX: portraitRotateX, rotateY: portraitRotateY }
              }
              className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-paper/15 bg-[#e8e5dd] shadow-2xl shadow-black/40"
            >
              <div className="absolute inset-3 z-10 rounded-[1.45rem] border border-ink/10" />
              <Image
                src={assetPath("/images/sarfaraz-singh-wahad-portrait.png")}
                alt="Sarfaraz Singh Wahad"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 34vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink via-ink/55 to-transparent px-6 pb-6 pt-24">
                <p className="font-mono text-[9px] tracking-[0.18em] text-signal">
                  CURRENT POSITION
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Madrid · AI ventures · IE Business School
                </p>
              </div>
              <div className="absolute right-6 top-6 z-20 grid size-14 place-items-center rounded-full border border-ink/10 bg-paper/70 backdrop-blur">
                <Crosshair className="size-5 animate-[spin_12s_linear_infinite] text-ink" />
              </div>
              <div className="absolute left-6 top-6 z-20 font-mono text-[8px] tracking-[0.15em] text-ink/45">
                PORTRAIT / AUTHENTIC
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="grid gap-4 border-t border-paper/10 pt-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        >
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Choose portfolio lens"
          >
            {(Object.keys(profile.lenses) as Lens[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => selectLens(key)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[9px] tracking-[0.1em] transition-all",
                  lens === key
                    ? "border-signal bg-signal/12 text-paper"
                    : "border-paper/10 text-paper/40 hover:border-paper/30 hover:text-paper/70",
                )}
                aria-pressed={lens === key}
              >
                {lens === key && <Check className="size-3 text-signal" />}
                {key === "ai" ? "AI & DIGITAL" : "MISSION-CRITICAL"}
              </button>
            ))}
          </div>
          <a
            href="#current-chapter"
            className="hidden items-center gap-2 font-mono text-[8px] tracking-[0.16em] text-paper/35 hover:text-signal lg:flex"
          >
            SCROLL TO EXPLORE
            <ArrowDown className="size-3 animate-bounce" />
          </a>
          <p className="text-right text-xs text-paper/35">
            {content.title}{" "}
            <span className="hidden xl:inline">— {content.description}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
