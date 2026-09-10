import { MessageSquareText, Mic, Radio, Send, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

const agentId = "agent_8501m23hs5dje34bkks58kcar615";

export function VoiceAgentSection() {
  return (
    <section
      aria-labelledby="voice-agent-title"
      className="station bg-surface"
      data-voice-agent
      data-voice-agent-id={agentId}
      data-voice-runtime-src={assetPath("/voice-agent-client.js")}
      data-voice-state="idle"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 border border-line bg-ground p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14 lg:p-10">
          <div className="mx-auto grid justify-items-center gap-3">
            <div className="voice-agent-orb-wrap">
              <svg
                aria-hidden="true"
                className="voice-agent-rings"
                viewBox="0 0 132 132"
              >
                <circle
                  className="voice-agent-ring voice-agent-ring-outer"
                  cx="66"
                  cy="66"
                  fill="none"
                  r="60"
                />
                <circle
                  className="voice-agent-ring voice-agent-ring-inner"
                  cx="66"
                  cy="66"
                  fill="none"
                  r="51"
                />
              </svg>
              <button
                aria-describedby="voice-agent-disclosure"
                aria-label="Start my voice guide"
                aria-pressed="false"
                className="voice-agent-orb"
                data-voice-agent-launch
                type="button"
              >
                <span className="voice-agent-wave" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                <Mic className="voice-agent-mic size-5" aria-hidden="true" />
              </button>
            </div>
            <span className="text-sm font-semibold">Talk with voice</span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="section-label">Ask my voice guide</p>
              <span className="instrument-readout flex items-center gap-2 text-signal">
                <Radio className="size-3.5" />
                <span aria-live="polite" data-voice-agent-status>
                  Ready
                </span>
              </span>
            </div>
            <h2
              className="mt-5 max-w-3xl [font-size:var(--type-h3)] leading-[0.98] tracking-[-0.04em]"
              id="voice-agent-title"
            >
              Ask about my AI Transformation work, Governance record, or years
              in submarines.
            </h2>
            <p
              className="mt-5 max-w-[58ch] leading-7 text-copy-muted"
              data-voice-agent-instruction
            >
              Click the orb, allow the microphone, and ask whether my background
              fits the role you have in mind. It can also explain my AIGP,
              radiation-safety work, policy hackathons, and PDIP prototype.
            </p>
            <button
              aria-controls="sarfaraz-text-guide"
              aria-expanded="false"
              className="interactive-lift mt-6 inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-5 text-sm font-semibold hover:border-signal hover:text-signal"
              data-text-agent-toggle
              type="button"
            >
              <MessageSquareText className="size-4" />
              Type a question
            </button>
            <p
              className="instrument-readout mt-6 flex max-w-2xl items-start gap-2 border-t border-line pt-4 leading-5"
              id="voice-agent-disclosure"
            >
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-signal" />
              This is an AI voice guide powered by ElevenLabs, not me speaking
              live. Voice mode requests your microphone only after you click;
              text mode does not request microphone access.
            </p>
          </div>

          <div
            className="border-t border-line pt-8 lg:col-span-2"
            hidden
            id="sarfaraz-text-guide"
            data-text-agent-panel
          >
            <div
              aria-live="polite"
              aria-relevant="additions"
              className="voice-agent-transcript grid max-h-80 gap-3 overflow-y-auto"
              data-text-agent-log
            >
              <p className="text-sm leading-6 text-copy-muted" data-text-agent-empty>
                Ask about role fit, Enterprise AI, Governance, TrackSense, or my
                years in the Submarine Service.
              </p>
            </div>
            <form
              className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]"
              data-text-agent-form
            >
              <label className="sr-only" htmlFor="sarfaraz-text-question">
                Question for Sarfaraz&apos;s AI guide
              </label>
              <input
                autoComplete="off"
                className="min-h-12 min-w-0 border border-line-strong bg-ground px-4 text-copy placeholder:text-copy-muted focus:border-signal"
                id="sarfaraz-text-question"
                maxLength={400}
                name="question"
                placeholder="Would Sarfaraz fit an AI Governance leadership role?"
                required
                type="text"
              />
              <button
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-signal px-5 text-sm font-semibold text-ground disabled:cursor-wait disabled:opacity-60"
                data-text-agent-send
                type="submit"
              >
                Send
                <Send className="size-4" />
              </button>
            </form>
            <p
              className="instrument-readout mt-3"
              data-text-agent-status
              role="status"
            >
              Text guide ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
