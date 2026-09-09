import { Mic, Radio, ShieldCheck } from "lucide-react";
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
          <div className="voice-agent-orb-wrap mx-auto">
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
              aria-label="Start conversation with Sarfaraz's digital voice guide"
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

          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="section-label">Sarfaraz · Digital voice guide</p>
              <span className="instrument-readout flex items-center gap-2 text-signal">
                <Radio className="size-3.5" />
                <span aria-live="polite" data-voice-agent-status>
                  Ready when you are
                </span>
              </span>
            </div>
            <h2
              className="mt-5 max-w-3xl [font-size:var(--type-h3)] leading-[0.98] tracking-[-0.04em]"
              id="voice-agent-title"
            >
              Ask whether the experience fits your mandate.
            </h2>
            <p
              className="mt-5 max-w-[58ch] leading-7 text-copy-muted"
              data-voice-agent-instruction
            >
              Click the orb, allow microphone access, and ask about role fit.
            </p>
            <p
              className="instrument-readout mt-6 flex max-w-2xl items-start gap-2 border-t border-line pt-4 leading-5"
              id="voice-agent-disclosure"
            >
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-signal" />
              AI voice experience powered by ElevenLabs. It identifies itself
              as a digital guide—not the live human. Microphone access begins
              only after you click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
