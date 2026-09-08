"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";

export function CursorAura() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 38 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 38 });

  useEffect(() => {
    if (reduceMotion) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal mix-blend-difference lg:block"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/60 mix-blend-difference lg:block"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}
