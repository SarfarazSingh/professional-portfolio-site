export const voiceAgentScript = `
  (() => {
    const initialised = new WeakSet();
    const modules = new Map();

    const loadSdk = (source) => {
      if (!modules.has(source)) modules.set(source, import(source));
      return modules.get(source);
    };

    const initialise = (root) => {
      if (!(root instanceof HTMLElement) || initialised.has(root)) return;

      const button = root.querySelector("[data-voice-agent-launch]");
      const status = root.querySelector("[data-voice-agent-status]");
      const instruction = root.querySelector("[data-voice-agent-instruction]");
      const agentId = root.dataset.voiceAgentId;
      const runtimeSource = root.dataset.voiceRuntimeSrc;
      if (
        !(button instanceof HTMLButtonElement) ||
        !status ||
        !instruction ||
        !agentId ||
        !runtimeSource
      ) {
        return;
      }

      initialised.add(root);
      let conversation = null;
      let active = false;
      let failed = false;

      const setState = (state, message) => {
        root.dataset.voiceState = state;
        status.textContent = message;
        button.setAttribute("aria-pressed", state === "active" ? "true" : "false");
        button.setAttribute(
          "aria-label",
          state === "active"
            ? "End my voice guide"
            : "Start my voice guide",
        );
      };

      const finishConversation = () => {
        conversation = null;
        active = false;
        button.disabled = false;
        if (failed) return;
        setState("idle", "Ready");
        instruction.textContent =
          "Click the orb, allow the microphone, and ask about my AI work, governance record, or submarine service.";
      };

      const failConversation = (error) => {
        console.warn("ElevenLabs voice conversation unavailable", error);
        failed = true;
        conversation = null;
        active = false;
        button.disabled = false;
        setState("error", "I could not start the voice guide");
        instruction.textContent =
          "Please check your microphone permission, then click again.";
      };

      const prepare = () => {
        loadSdk(runtimeSource).catch(() => {
          setState("error", "The voice guide is unavailable");
        });
      };

      button.addEventListener("pointerenter", prepare, { once: true });
      button.addEventListener("focus", prepare, { once: true });
      button.addEventListener("click", async () => {
        if (active && conversation) {
          button.disabled = true;
          setState("connecting", "Ending…");
          try {
            await conversation.endSession();
          } finally {
            finishConversation();
          }
          return;
        }

        button.disabled = true;
        failed = false;
        setState("connecting", "Connecting…");
        instruction.textContent =
          "Your browser will ask for microphone permission.";

        try {
          if (!navigator.mediaDevices?.getUserMedia) {
            throw new Error("Microphone access is unavailable in this browser");
          }

          const permissionStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });
          permissionStream.getTracks().forEach((track) => track.stop());

          const { Conversation } = await loadSdk(runtimeSource);
          conversation = await Conversation.startSession({
            agentId,
            connectionType: "websocket",
            onConnect: () => {
              failed = false;
              active = true;
              button.disabled = false;
              setState("active", "Listening");
              instruction.textContent =
                "Speak naturally. Click the orb again when you want to end.";
            },
            onDisconnect: finishConversation,
            onError: failConversation,
          });

          active = true;
          button.disabled = false;
          setState("active", "Listening");
          instruction.textContent =
            "Speak naturally. Click the orb again when you want to end.";
        } catch (error) {
          failConversation(error);
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
