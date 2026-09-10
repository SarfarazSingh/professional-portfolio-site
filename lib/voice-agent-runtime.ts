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
      const textToggle = root.querySelector("[data-text-agent-toggle]");
      const textPanel = root.querySelector("[data-text-agent-panel]");
      const textForm = root.querySelector("[data-text-agent-form]");
      const textInput = textForm?.querySelector("input");
      const textSend = root.querySelector("[data-text-agent-send]");
      const textLog = root.querySelector("[data-text-agent-log]");
      const textStatus = root.querySelector("[data-text-agent-status]");
      const textEmpty = root.querySelector("[data-text-agent-empty]");
      let conversation = null;
      let mode = null;
      let sessionToken = 0;

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

      const resetVoice = () => {
        button.disabled = false;
        setState("idle", "Ready");
        instruction.textContent =
          "Click the orb, allow the microphone, and ask about my AI work, governance record, or submarine service.";
      };

      const finishConversation = (token) => {
        if (token !== sessionToken) return;
        conversation = null;
        const finishedMode = mode;
        mode = null;
        if (finishedMode === "voice") resetVoice();
        if (finishedMode === "text" && textStatus) {
          textStatus.textContent = "Session ended · send another question to reconnect";
        }
      };

      const failVoiceConversation = (error, token) => {
        if (token !== sessionToken) return;
        console.warn("ElevenLabs voice conversation unavailable", error);
        conversation = null;
        mode = null;
        button.disabled = false;
        setState("error", "I could not start the voice guide");
        instruction.textContent =
          "Please check your microphone permission, then click again.";
      };

      const endCurrentConversation = async () => {
        const current = conversation;
        conversation = null;
        mode = null;
        sessionToken += 1;
        if (current) {
          try {
            await current.endSession();
          } catch (error) {
            console.warn("Could not close ElevenLabs conversation", error);
          }
        }
      };

      const appendTextMessage = (role, message) => {
        if (!textLog || !message) return;
        textEmpty?.remove();
        const item = document.createElement("article");
        item.className = "voice-agent-message";
        item.dataset.role = role;
        const label = document.createElement("span");
        label.className = "instrument-readout";
        label.textContent = role === "agent" ? "Sarfaraz’s AI guide" : "You";
        const copy = document.createElement("p");
        copy.textContent = message;
        item.append(label, copy);
        textLog.append(item);
        textLog.scrollTop = textLog.scrollHeight;
      };

      const setTextControlsDisabled = (disabled) => {
        if (textInput instanceof HTMLInputElement) textInput.disabled = disabled;
        if (textSend instanceof HTMLButtonElement) textSend.disabled = disabled;
      };

      const failTextConversation = (error, token) => {
        if (token !== sessionToken) return;
        console.warn("ElevenLabs text conversation unavailable", error);
        conversation = null;
        mode = null;
        setTextControlsDisabled(false);
        if (textStatus) {
          textStatus.textContent =
            "The text guide could not connect · please try again";
        }
      };

      const prepare = () => {
        loadSdk(runtimeSource).catch(() => {
          setState("error", "The voice guide is unavailable");
        });
      };

      button.addEventListener("pointerenter", prepare, { once: true });
      button.addEventListener("focus", prepare, { once: true });
      button.addEventListener("click", async () => {
        if (mode === "voice" && conversation) {
          button.disabled = true;
          setState("connecting", "Ending…");
          await endCurrentConversation();
          resetVoice();
          return;
        }

        if (mode === "text") await endCurrentConversation();
        if (textPanel instanceof HTMLElement) textPanel.hidden = true;
        textToggle?.setAttribute("aria-expanded", "false");
        button.disabled = true;
        setState("connecting", "Connecting…");
        instruction.textContent =
          "Your browser will ask for microphone permission.";
        const token = ++sessionToken;
        mode = "voice";

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
              if (token !== sessionToken) return;
              button.disabled = false;
              setState("active", "Listening");
              instruction.textContent =
                "Speak naturally. Click the orb again when you want to end.";
            },
            onDisconnect: () => finishConversation(token),
            onError: (error) => failVoiceConversation(error, token),
          });

          if (token !== sessionToken) {
            await conversation.endSession();
            return;
          }
          button.disabled = false;
          setState("active", "Listening");
          instruction.textContent =
            "Speak naturally. Click the orb again when you want to end.";
        } catch (error) {
          failVoiceConversation(error, token);
        }
      });

      textToggle?.addEventListener("pointerenter", prepare, { once: true });
      textToggle?.addEventListener("focus", prepare, { once: true });
      textToggle?.addEventListener("click", async () => {
        if (!(textPanel instanceof HTMLElement)) return;
        const willOpen = textPanel.hidden;
        textPanel.hidden = !willOpen;
        textToggle.setAttribute("aria-expanded", String(willOpen));
        if (!willOpen && mode === "text") {
          await endCurrentConversation();
          if (textStatus) textStatus.textContent = "Text guide ready";
        }
        if (willOpen && textInput instanceof HTMLInputElement) {
          textInput.focus();
        }
      });

      textForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (
          !(textInput instanceof HTMLInputElement) ||
          !(textSend instanceof HTMLButtonElement)
        ) {
          return;
        }
        const question = textInput.value.trim();
        if (!question) return;
        textInput.value = "";
        appendTextMessage("user", question);
        setTextControlsDisabled(true);

        try {
          if (mode === "voice") {
            await endCurrentConversation();
            resetVoice();
          }

          if (mode !== "text" || !conversation) {
            if (textStatus) textStatus.textContent = "Connecting text guide…";
            const token = ++sessionToken;
            mode = "text";
            const { Conversation } = await loadSdk(runtimeSource);
            const session = await Conversation.startSession({
              agentId,
              connectionType: "websocket",
              textOnly: true,
              onMessage: ({ message, role }) => {
                if (token !== sessionToken || role !== "agent") return;
                appendTextMessage("agent", message);
                setTextControlsDisabled(false);
                if (textStatus) textStatus.textContent = "Text guide ready";
              },
              onDisconnect: () => finishConversation(token),
              onError: (error) => failTextConversation(error, token),
            });
            if (token !== sessionToken) {
              await session.endSession();
              return;
            }
            conversation = session;
          }

          conversation.sendUserMessage(question);
          setTextControlsDisabled(false);
          if (textStatus) textStatus.textContent = "Waiting for a reply…";
          textInput.focus();
        } catch (error) {
          failTextConversation(error, sessionToken);
        }
      });

      window.addEventListener(
        "pagehide",
        () => {
          if (conversation) void conversation.endSession();
        },
        { once: true },
      );
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
