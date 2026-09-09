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
            ? "End conversation with Sarfaraz's digital voice guide"
            : "Start conversation with Sarfaraz's digital voice guide",
        );
      };

      const finishConversation = () => {
        conversation = null;
        active = false;
        button.disabled = false;
        if (failed) return;
        setState("idle", "Ready when you are");
        instruction.textContent =
          "Click the orb, allow microphone access, and ask about role fit.";
      };

      const failConversation = (error) => {
        console.error("Unable to use ElevenLabs voice conversation", error);
        failed = true;
        conversation = null;
        active = false;
        button.disabled = false;
        setState("error", "Microphone or voice connection blocked");
        instruction.textContent =
          "Check microphone permission, then click the orb to try again.";
      };

      const prepare = () => {
        loadSdk(runtimeSource).catch(() => {
          setState("error", "Voice service unavailable");
        });
      };

      button.addEventListener("pointerenter", prepare, { once: true });
      button.addEventListener("focus", prepare, { once: true });
      button.addEventListener("click", async () => {
        if (active && conversation) {
          button.disabled = true;
          setState("connecting", "Ending conversation");
          try {
            await conversation.endSession();
          } finally {
            finishConversation();
          }
          return;
        }

        button.disabled = true;
        failed = false;
        setState("connecting", "Connecting securely");
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
            connectionType: "webrtc",
            onConnect: () => {
              failed = false;
              active = true;
              button.disabled = false;
              setState("active", "Conversation live");
              instruction.textContent =
                "Speak naturally. Click the orb again when you want to end.";
            },
            onDisconnect: finishConversation,
            onError: failConversation,
          });

          active = true;
          button.disabled = false;
          setState("active", "Conversation live");
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
