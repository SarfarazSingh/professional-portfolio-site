import { createElement } from "react";
import { Mic, Radio, ShieldCheck } from "lucide-react";
import Script from "next/script";

const agentId = "agent_8501m23hs5dje34bkks58kcar615";
const widgetScriptUrl =
  "https://unpkg.com/@elevenlabs/convai-widget-embed@0.18.1";

const voiceAgentRuntime = `
  (() => {
    const root = document.querySelector("[data-voice-agent]");
    if (!root || root.dataset.runtimeReady === "true") return;
    root.dataset.runtimeReady = "true";

    const button = root.querySelector("[data-voice-agent-launch]");
    const status = root.querySelector("[data-voice-agent-status]");
    const instruction = root.querySelector("[data-voice-agent-instruction]");
    const widget = root.querySelector("#portfolio-voice-widget");
    let scriptPromise;
    let active = false;
    let eventsBound = false;

    const setState = (state, message) => {
      root.dataset.voiceState = state;
      status.textContent = message;
      button.setAttribute("aria-pressed", state === "active" ? "true" : "false");
      button.setAttribute(
        "aria-label",
        state === "active"
          ? "End conversation with Sarfaraz's digital voice guide"
          : "Start conversation with Sarfaraz's digital voice guide",
      );
    };

    const loadWidget = () => {
      if (customElements.get("elevenlabs-convai")) return Promise.resolve();
      if (scriptPromise) return scriptPromise;

      scriptPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector("script[data-elevenlabs-widget]");
        if (existing) {
          existing.addEventListener("load", resolve, { once: true });
          existing.addEventListener("error", reject, { once: true });
          return;
        }

        const script = document.createElement("script");
        script.src = ${JSON.stringify(widgetScriptUrl)};
        script.async = true;
        script.dataset.elevenlabsWidget = "true";
        script.addEventListener("load", resolve, { once: true });
        script.addEventListener("error", reject, { once: true });
        document.head.appendChild(script);
      });

      return scriptPromise;
    };

    const finishConversation = () => {
      active = false;
      button.disabled = false;
      setState("idle", "Ready when you are");
      instruction.textContent =
        "Click the orb, allow microphone access, and ask about role fit.";
    };

    const bindWidgetEvents = () => {
      if (eventsBound) return;
      eventsBound = true;
      widget.addEventListener("conversationStarted", () => {
        active = true;
        button.disabled = false;
        setState("active", "Conversation live");
        instruction.textContent =
          "Speak naturally. Click the orb again when you want to end.";
      });
      widget.addEventListener("conversationEnded", finishConversation);
    };

    const prepare = () => {
      loadWidget().catch(() => {
        setState("error", "Voice service unavailable");
      });
    };

    button.addEventListener("pointerenter", prepare, { once: true });
    button.addEventListener("focus", prepare, { once: true });

    button.addEventListener("click", async () => {
      if (active) {
        button.disabled = true;
        setState("connecting", "Ending conversation");
        try {
          await widget.endConversation();
        } finally {
          finishConversation();
        }
        return;
      }

      button.disabled = true;
      setState("connecting", "Connecting securely");
      instruction.textContent =
        "Your browser will ask for microphone permission.";

      try {
        await loadWidget();
        await customElements.whenDefined("elevenlabs-convai");
        bindWidgetEvents();
        await widget.startConversation();
        active = true;
        button.disabled = false;
        setState("active", "Conversation live");
        instruction.textContent =
          "Speak naturally. Click the orb again when you want to end.";
      } catch (error) {
        console.error("Unable to start ElevenLabs conversation", error);
        button.disabled = false;
        setState("error", "Microphone or voice connection blocked");
        instruction.textContent =
          "Check microphone permission, then click the orb to try again.";
      }
    });
  })();
`;

export function VoiceAgentSection() {
  return (
    <section
      aria-labelledby="voice-agent-title"
      className="station bg-surface"
      data-voice-agent
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

      {createElement("elevenlabs-convai", {
        id: "portfolio-voice-widget",
        "agent-id": agentId,
        variant: "compact",
        placement: "bottom-left",
        transcript: "false",
        "text-input": "false",
        "mic-muting": "true",
        "action-text": "Talk to Sarfaraz AI",
        "start-call-text": "Start conversation",
        "end-call-text": "End conversation",
        "listening-text": "Listening",
        "speaking-text": "Sarfaraz AI is speaking",
        style: { display: "none" },
      })}
      <Script id="portfolio-voice-agent-runtime" strategy="afterInteractive">
        {voiceAgentRuntime}
      </Script>
    </section>
  );
}
