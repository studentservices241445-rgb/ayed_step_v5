// assets/js/aiClient.js
export const AI = (() => {
  const DEFAULT_TIMEOUT_MS = 25000;

  async function postJSON(path, payload, timeoutMs = DEFAULT_TIMEOUT_MS) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);

    try {
      const res = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload || {}),
        signal: ctrl.signal
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`AI proxy error ${res.status}: ${text || res.statusText}`);
      }

      return await res.json();
    } finally {
      clearTimeout(t);
    }
  }

  return {
    chat: (payload) => postJSON("/api/chat", payload),
    genQuiz: (payload) => postJSON("/api/gen-quiz", payload),
    genPlan: (payload) => postJSON("/api/gen-plan", payload),
    genShare: (payload) => postJSON("/api/gen-share", payload),
  };
})();
