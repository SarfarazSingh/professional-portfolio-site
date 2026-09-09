"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 14;
const CHECKPOINT = 9.8;
const FIXED_STEP = 1 / 60;
const NODE_COUNT = 5;
const ANOMALY_NODE = 3;

type Decision = "dispatch" | "monitor" | "false-positive";

type Runtime = {
  time: number;
  playing: boolean;
  speed: number;
  decision: Decision | null;
  raw: boolean;
  inView: boolean;
  tabVisible: boolean;
  checkpointHeld: boolean;
};

const decisions: Array<{
  id: Decision;
  label: string;
  outcome: string;
  tradeoff: string;
  resolution: string;
}> = [
  {
    id: "dispatch",
    label: "Dispatch inspection",
    outcome:
      "The inspection cost is accepted. The emerging defect is confirmed before service risk escalates.",
    tradeoff: "Planned inspection window and crew time.",
    resolution: "Risk contained with human confirmation.",
  },
  {
    id: "monitor",
    label: "Continue monitoring",
    outcome:
      "Immediate disruption is avoided. The anomaly strengthens, forcing an urgent inspection later.",
    tradeoff:
      "Lower immediate cost, but higher exposure and less scheduling flexibility.",
    resolution: "Escalated inspection after delayed confirmation.",
  },
  {
    id: "false-positive",
    label: "Flag as false positive",
    outcome:
      "No inspection is raised. Persistent evidence moves the asset into a higher-risk state.",
    tradeoff:
      "Avoided inspection cost transfers into unplanned intervention risk.",
    resolution: "The system reopens the alert as evidence accumulates.",
  },
];

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function seededNoise(value: number) {
  const result = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
  return (result - Math.floor(result)) * 2 - 1;
}

function anomalyProgress(time: number) {
  return clamp((time - 2.5) / 5.2);
}

function telemetryValue(
  node: number,
  channel: number,
  sampleTime: number,
) {
  const sample = Math.floor(sampleTime * 12);
  const phase = node * 1.71 + channel * 2.43;
  const baseline =
    Math.sin(sampleTime * (1.8 + channel * 0.45) + phase) * 0.13 +
    seededNoise(sample + node * 41 + channel * 113) * 0.1;

  if (node !== ANOMALY_NODE) return baseline;

  const growth = anomalyProgress(sampleTime);
  const anomaly =
    channel === 0
      ? Math.sin(sampleTime * 9.5) * 0.62 * growth
      : channel === 1
        ? (Math.sin(sampleTime * 5.4) + Math.sin(sampleTime * 12.2) * 0.35) *
          0.34 *
          growth
        : growth * 0.48;

  return baseline + anomaly;
}

function confidenceAt(time: number) {
  if (time < 5.5) return 0;
  return clamp(0.46 + (time - 5.5) * 0.16, 0, 0.934);
}

function stageAt(time: number, decision: Decision | null) {
  if (time < 2.5) return "Baseline observation";
  if (time < 5.5) return "Signal divergence emerging";
  if (time < 7.5) return "Local edge inference";
  if (time < CHECKPOINT) return "Evidence threshold crossed";
  if (!decision) return "Human checkpoint";
  if (time < 12.8) return "Decision consequence";
  return "Resolution";
}

function formatTime(time: number) {
  return `${time.toFixed(1).padStart(4, "0")} s`;
}

function canvasColors() {
  const styles = getComputedStyle(document.documentElement);
  const token = (name: string) => styles.getPropertyValue(name).trim();

  return {
    ground: token("--ground"),
    surface: token("--surface"),
    text: token("--text"),
    muted: token("--text-muted"),
    signal: token("--signal"),
    line: token("--line"),
    lineStrong: token("--line-strong"),
    readout: token("--font-readout"),
    body: token("--font-text"),
  };
}

function drawSimulation(
  canvas: HTMLCanvasElement,
  time: number,
  decision: Decision | null,
  showRaw: boolean,
) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const colors = canvasColors();
  const compact = width < 700;
  const margin = compact ? 22 : 54;
  const railY = compact ? 116 : 132;
  const telemetryTop = compact ? 245 : 270;
  const telemetryBottom = height - 184;
  const telemetryHeight = Math.max(150, telemetryBottom - telemetryTop);
  const nodeSpacing = (width - margin * 2) / (NODE_COUNT - 1);
  const confidence = confidenceAt(time);

  context.clearRect(0, 0, width, height);
  context.fillStyle = colors.ground;
  context.fillRect(0, 0, width, height);

  context.save();
  context.strokeStyle = colors.text;
  context.lineWidth = 1;
  context.globalAlpha = 0.04;
  for (let x = 0; x <= width; x += 16) {
    context.beginPath();
    context.moveTo(x + 0.5, 0);
    context.lineTo(x + 0.5, height);
    context.stroke();
  }
  for (let y = 0; y <= height; y += 16) {
    context.beginPath();
    context.moveTo(0, y + 0.5);
    context.lineTo(width, y + 0.5);
    context.stroke();
  }
  context.globalAlpha = 0.12;
  for (let x = 0; x <= width; x += 80) {
    context.beginPath();
    context.moveTo(x + 0.5, 0);
    context.lineTo(x + 0.5, height);
    context.stroke();
  }
  for (let y = 0; y <= height; y += 80) {
    context.beginPath();
    context.moveTo(0, y + 0.5);
    context.lineTo(width, y + 0.5);
    context.stroke();
  }
  context.restore();

  context.save();
  context.strokeStyle = colors.text;
  context.lineWidth = compact ? 2 : 3;
  context.beginPath();
  context.moveTo(margin, railY);
  context.lineTo(width - margin, railY);
  context.moveTo(margin, railY + 25);
  context.lineTo(width - margin, railY + 25);
  context.stroke();

  context.globalAlpha = 0.4;
  context.lineWidth = compact ? 4 : 7;
  const sleeperCount = compact ? 18 : 30;
  for (let index = 0; index < sleeperCount; index += 1) {
    const x =
      margin + ((width - margin * 2) / (sleeperCount - 1)) * index;
    context.beginPath();
    context.moveTo(x, railY - 14);
    context.lineTo(x, railY + 39);
    context.stroke();
  }
  context.restore();

  for (let node = 0; node < NODE_COUNT; node += 1) {
    const x = margin + nodeSpacing * node;
    const active = node === ANOMALY_NODE && time >= 5.5;
    const traceActive = node === ANOMALY_NODE && time >= 2.5;
    const panelWidth = Math.min(compact ? 60 : 158, nodeSpacing * 0.82);

    context.save();
    context.strokeStyle = active ? colors.signal : colors.muted;
    context.fillStyle = active ? colors.signal : colors.ground;
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(x, railY - 44);
    context.lineTo(x, railY);
    context.stroke();
    context.fillRect(x - 10, railY - 58, 20, 20);
    if (!active) context.strokeRect(x - 10, railY - 58, 20, 20);

    context.fillStyle = active ? colors.signal : colors.muted;
    context.font = `${compact ? 9 : 11}px ${colors.readout}`;
    context.textAlign = "center";
    context.fillText(`E-${String(node + 1).padStart(2, "0")}`, x, railY - 70);

    context.strokeStyle = colors.lineStrong;
    context.fillStyle = colors.surface;
    context.fillRect(
      x - panelWidth / 2,
      telemetryTop,
      panelWidth,
      telemetryHeight,
    );
    context.strokeRect(
      x - panelWidth / 2,
      telemetryTop,
      panelWidth,
      telemetryHeight,
    );

    const channelHeight = telemetryHeight / 3;
    for (let channel = 0; channel < 3; channel += 1) {
      const center = telemetryTop + channelHeight * (channel + 0.5);
      const samples = compact ? 22 : 38;
      context.strokeStyle =
        traceActive && anomalyProgress(time) > 0.08
          ? colors.signal
          : colors.muted;
      context.globalAlpha =
        traceActive && anomalyProgress(time) > 0.08 ? 1 : 0.58;
      context.lineWidth = traceActive ? 1.8 : 1;
      context.beginPath();

      for (let sample = 0; sample < samples; sample += 1) {
        const sampleTime = Math.max(
          0,
          time - (samples - 1 - sample) * 0.11,
        );
        const value = telemetryValue(node, channel, sampleTime);
        const sampleX =
          x -
          panelWidth / 2 +
          5 +
          ((panelWidth - 10) * sample) / (samples - 1);
        const sampleY =
          center - clamp(value, -1, 1) * channelHeight * 0.36;
        if (sample === 0) context.moveTo(sampleX, sampleY);
        else context.lineTo(sampleX, sampleY);
      }
      context.stroke();

      if (showRaw && (!compact || node === ANOMALY_NODE)) {
        context.globalAlpha = 1;
        context.fillStyle = traceActive ? colors.signal : colors.muted;
        context.textAlign = "left";
        context.font = `${compact ? 7 : 9}px ${colors.readout}`;
        const rawValue = telemetryValue(node, channel, time);
        context.fillText(
          rawValue.toFixed(2),
          x - panelWidth / 2 + 5,
          telemetryTop + channelHeight * channel + 11,
        );
      }
    }
    context.restore();
  }

  const statusY = height - 146;
  context.save();
  context.fillStyle = colors.surface;
  context.strokeStyle = colors.lineStrong;
  context.fillRect(margin, statusY, width - margin * 2, 112);
  context.strokeRect(margin, statusY, width - margin * 2, 112);
  context.textAlign = "left";
  context.fillStyle = confidence >= 0.82 ? colors.signal : colors.muted;
  context.font = `${compact ? 10 : 12}px ${colors.readout}`;
  context.fillText(
    time < 5.5
      ? "EDGE NODE / WATCHING LOCALLY"
      : `EDGE NODE E-04 / SYNTHETIC INFERENCE ${(confidence * 100).toFixed(1)}%`,
    margin + 16,
    statusY + 27,
  );

  context.fillStyle = colors.text;
  context.font = `${compact ? 13 : 17}px ${colors.body}`;
  const summary =
    time < 5.5
      ? "Telemetry remains inside the operator summary boundary."
      : time < 7.5
        ? "Inference is running at the sensor node—not in a remote cloud."
        : "Bearing-pattern anomaly · human review remains authoritative.";
  context.fillText(
    compact ? summary.slice(0, 48) : summary,
    margin + 16,
    statusY + 57,
  );

  if (time >= 7.5 && !compact) {
    context.fillStyle = colors.muted;
    context.font = `11px ${colors.readout}`;
    context.fillText(
      "Features / vibration kurtosis · acoustic sideband · thermal drift",
      margin + 16,
      statusY + 87,
    );
  }

  const latency = 18 + Math.round((seededNoise(Math.floor(time * 8)) + 1) * 3);
  context.fillStyle = colors.signal;
  context.textAlign = "right";
  context.font = `${compact ? 10 : 12}px ${colors.readout}`;
  context.fillText(
    time >= 5.5 ? `${latency} ms / local` : "No alert",
    width - margin - 16,
    statusY + 27,
  );

  if (decision && time >= CHECKPOINT) {
    const selected = decisions.find((item) => item.id === decision);
    context.fillStyle = colors.signal;
    context.fillRect(width - margin - 8, statusY, 8, 112);
    context.fillStyle = colors.muted;
    context.textAlign = "right";
    context.font = `${compact ? 9 : 11}px ${colors.readout}`;
    context.fillText(
      selected?.resolution ?? "",
      width - margin - 16,
      statusY + 87,
    );
  }
  context.restore();
}

export default function TrackSenseSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runtimeRef = useRef<Runtime>({
    time: 0,
    playing: true,
    speed: 1,
    decision: null,
    raw: false,
    inView: true,
    tabVisible: true,
    checkpointHeld: false,
  });
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [decision, setDecision] = useState<Decision | null>(null);
  const [showRaw, setShowRaw] = useState(false);
  const [displayTime, setDisplayTime] = useState(0);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const runtime = runtimeRef.current;
    let frameRequest = 0;
    let previous = performance.now();
    let accumulator = 0;
    let lastUiUpdate = 0;
    let frameWindowStart = previous;
    let frameCount = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      const context = canvas.getContext("2d");
      context?.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawSimulation(canvas, runtime.time, runtime.decision, runtime.raw);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        runtime.inView = entry.isIntersecting;
        previous = performance.now();
      },
      { threshold: 0.01 },
    );
    visibilityObserver.observe(canvas);

    const onVisibilityChange = () => {
      runtime.tabVisible = document.visibilityState === "visible";
      previous = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const frame = (now: number) => {
      const elapsed = Math.min((now - previous) / 1000, 0.1);
      previous = now;

      if (runtime.playing && runtime.inView && runtime.tabVisible) {
        accumulator += elapsed * runtime.speed;

        while (accumulator >= FIXED_STEP) {
          const nextTime = runtime.time + FIXED_STEP;

          if (!runtime.decision && nextTime >= CHECKPOINT) {
            runtime.time = CHECKPOINT;
            runtime.playing = false;
            if (!runtime.checkpointHeld) {
              runtime.checkpointHeld = true;
              setPlaying(false);
              setDisplayTime(CHECKPOINT);
            }
            accumulator = 0;
            break;
          }

          if (nextTime >= DURATION) {
            runtime.time = 0;
            runtime.decision = null;
            runtime.checkpointHeld = false;
            setDecision(null);
          } else {
            runtime.time = nextTime;
          }
          accumulator -= FIXED_STEP;
        }
      }

      if (runtime.inView) {
        drawSimulation(canvas, runtime.time, runtime.decision, runtime.raw);
        frameCount += 1;
      }

      if (now - lastUiUpdate >= 120) {
        setDisplayTime(runtime.time);
        lastUiUpdate = now;
      }

      if (now - frameWindowStart >= 1000) {
        if (runtime.inView && runtime.tabVisible) {
          setFps(Math.round((frameCount * 1000) / (now - frameWindowStart)));
        }
        frameCount = 0;
        frameWindowStart = now;
      }

      frameRequest = requestAnimationFrame(frame);
    };

    frameRequest = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameRequest);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const waitingForDecision = displayTime >= CHECKPOINT && !decision;
  const selectedDecision = decisions.find((item) => item.id === decision);
  const stage = stageAt(displayTime, decision);

  function setPlayback(next: boolean) {
    if (waitingForDecision && next) return;
    runtimeRef.current.playing = next;
    setPlaying(next);
  }

  function chooseDecision(next: Decision) {
    const runtime = runtimeRef.current;
    runtime.decision = next;
    runtime.checkpointHeld = false;
    runtime.playing = true;
    runtime.time = Math.max(runtime.time, CHECKPOINT);
    setDecision(next);
    setPlaying(true);
    setDisplayTime(runtime.time);
  }

  function scrubTo(next: number) {
    const runtime = runtimeRef.current;

    if (next < CHECKPOINT) {
      runtime.decision = null;
      runtime.checkpointHeld = false;
      setDecision(null);
    } else if (!runtime.decision) {
      next = CHECKPOINT;
      runtime.playing = false;
      runtime.checkpointHeld = true;
      setPlaying(false);
    }

    runtime.time = clamp(next, 0, DURATION);
    setDisplayTime(runtime.time);
  }

  function cycleSpeed() {
    const next = speed === 0.5 ? 1 : speed === 1 ? 2 : 0.5;
    runtimeRef.current.speed = next;
    setSpeed(next);
  }

  function toggleRaw() {
    const next = !showRaw;
    runtimeRef.current.raw = next;
    setShowRaw(next);
  }

  function restart() {
    const runtime = runtimeRef.current;
    runtime.time = 0;
    runtime.decision = null;
    runtime.checkpointHeld = false;
    runtime.playing = true;
    setDisplayTime(0);
    setDecision(null);
    setPlaying(true);
  }

  function handleCanvasKey(event: React.KeyboardEvent<HTMLCanvasElement>) {
    if (event.key === " ") {
      event.preventDefault();
      setPlayback(!playing);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrubTo(displayTime - 0.5);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrubTo(displayTime + 0.5);
    }
  }

  return (
    <div className="border border-line bg-ground" data-tracksense-simulation>
      <div className="instrument-readout flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
        <span>{stage}</span>
        <span>
          Synthetic clock / {formatTime(displayTime)} · render / {fps} fps
        </span>
      </div>

      <canvas
        ref={canvasRef}
        className="block h-[620px] w-full sm:h-[680px]"
        tabIndex={0}
        onKeyDown={handleCanvasKey}
        aria-label="Interactive TrackSense rail telemetry simulation. Press Space to play or pause and use Left and Right Arrow keys to scrub."
        aria-describedby="tracksense-simulation-summary"
      >
        Five edge sensors monitor synthetic vibration, acoustic, and thermal
        data. Node E-04 develops an anomaly and requests human review.
      </canvas>

      <p id="tracksense-simulation-summary" className="sr-only">
        {stage}. This demonstration uses deterministic synthetic data and makes
        no production performance claim.
      </p>
      <p className="sr-only" aria-live="polite">
        {waitingForDecision
          ? "Human decision required."
          : selectedDecision?.resolution ?? stage}
      </p>

      {waitingForDecision && (
        <fieldset className="border-t-2 border-signal bg-surface p-5 sm:p-7">
          <legend className="px-2 font-semibold text-signal">
            Human authority checkpoint
          </legend>
          <p className="mt-2 max-w-3xl leading-7 text-copy-muted">
            Confidence crossed the synthetic review threshold. The model
            proposes an anomaly; you decide what happens operationally.
          </p>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {decisions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseDecision(item.id)}
                className="min-h-14 rounded-[2px] border border-line-strong px-4 text-left font-semibold hover:border-signal focus-visible:border-signal"
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {selectedDecision && displayTime >= CHECKPOINT && (
        <div className="grid border-t border-line bg-surface lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-line p-5 lg:border-b-0 lg:border-r">
            <p className="section-label">Your decision</p>
            <p className="mt-2 font-semibold text-signal">
              {selectedDecision.label}
            </p>
          </div>
          <div className="p-5">
            <p className="leading-7">{selectedDecision.outcome}</p>
            <p className="mt-2 leading-7 text-copy-muted">
              Cost trade-off: {selectedDecision.tradeoff}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-4 border-t border-line p-4 lg:grid-cols-[auto_minmax(220px,1fr)_auto_auto_auto] lg:items-center">
        <button
          type="button"
          onClick={() => setPlayback(!playing)}
          disabled={waitingForDecision}
          className="min-h-11 rounded-full border border-line-strong px-5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
        >
          {playing ? "Pause" : "Play"}
        </button>

        <label className="grid gap-2 text-sm font-semibold">
          <span className="flex justify-between gap-4">
            Timeline
            <span className="instrument-readout">{formatTime(displayTime)}</span>
          </span>
          <input
            type="range"
            min="0"
            max={DURATION}
            step="0.05"
            value={displayTime}
            onChange={(event) => scrubTo(Number(event.target.value))}
            className="h-11 w-full [accent-color:var(--signal)]"
            aria-valuetext={`${formatTime(displayTime)}, ${stage}`}
          />
        </label>

        <button
          type="button"
          onClick={cycleSpeed}
          className="min-h-11 rounded-full border border-line-strong px-5 text-sm font-semibold"
          aria-label={`Playback speed ${speed} times. Activate to change speed.`}
        >
          Speed {speed}×
        </button>

        <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-full border border-line-strong px-5 text-sm font-semibold">
          <input
            type="checkbox"
            checked={showRaw}
            onChange={toggleRaw}
            className="size-4 [accent-color:var(--signal)]"
          />
          Raw telemetry
        </label>

        <button
          type="button"
          onClick={restart}
          className="min-h-11 rounded-full border border-line-strong px-5 text-sm font-semibold"
        >
          Restart
        </button>
      </div>

      <p className="border-t border-line px-5 py-4 leading-7 text-copy-muted">
        Deterministic synthetic data for interface demonstration only. Latency,
        confidence, classification, and consequences are simulated—not field
        results or production claims.
      </p>
    </div>
  );
}
