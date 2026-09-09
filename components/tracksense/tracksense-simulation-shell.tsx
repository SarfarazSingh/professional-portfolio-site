"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { TrackSensePoster } from "./tracksense-poster";

const TrackSenseSimulation = dynamic(
  () => import("./tracksense-simulation"),
  {
    ssr: false,
    loading: () => <TrackSensePoster />,
  },
);

function subscribeToMotionPreference(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TrackSenseSimulationShell() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => true,
  );

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || reducedMotion || shouldMount) return;

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldMount(true);
        observer.disconnect();
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, [reducedMotion, shouldMount]);

  return (
    <div ref={shellRef} data-tracksense-shell>
      {shouldMount && !reducedMotion ? (
        <TrackSenseSimulation />
      ) : (
        <TrackSensePoster />
      )}
    </div>
  );
}
