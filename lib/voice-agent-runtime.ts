const widgetScriptUrl =
  "https://unpkg.com/@elevenlabs/convai-widget-embed@0.18.1";

export const voiceAgentScript = `
  (() => {
    let scriptPromise;

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

    const initialise = (root) => {
      if (!(root instanceof HTMLElement) || root.dataset.runtimeReady === "true") {
        return;
      }

      const button = root.querySelector("[data-voice-agent-launch]");
      const status = root.querySelector("[data-voice-agent-status]");
      const instruction = root.querySelector("[data-voice-agent-instruction]");
      const widget = root.querySelector("#portfolio-voice-widget");
      if (!(button instanceof HTMLButtonElement) || !status || !instruction || !widget) {
        return;
      }

      root.dataset.runtimeReady = "true";
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
    };

    const register = (root) => {
      if (root.matches?.("[data-voice-agent]")) initialise(root);
      root.querySelectorAll?.("[data-voice-agent]").forEach(initialise);
    };

    register(document);
    new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) register(node);
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  })();
`;
