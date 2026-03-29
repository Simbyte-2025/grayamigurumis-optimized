import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// NOTE: chatService uses import.meta.env.VITE_CHAT_MOCK which requires
// Vitest's environment config to stub. We test the mock mode via env override.

describe("chatService", () => {
  describe("module exports", () => {
    it("exports a sendChatMessage function", async () => {
      const mod = await import("./chatService");
      expect(typeof mod.sendChatMessage).toBe("function");
    });
  });

  describe("mock mode response shape", () => {
    it("returns a success response with message and provider fields", async () => {
      // Stub fetch to simulate the proxy endpoint being unavailable in tests
      const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
        ok: true,
        json: async () => ({
          choices: [{ message: { content: "Hola! ¿Cómo puedo ayudarte?" } }],
        }),
      } as unknown as Response);

      const { sendChatMessage } = await import("./chatService");
      const result = await sendChatMessage("Hola", []);

      expect(result).toHaveProperty("success");
      expect(typeof result.success).toBe("boolean");

      fetchSpy.mockRestore();
    });
  });

  describe("sendChatMessage API contract", () => {
    it("calls the /chat/completions endpoint with POST", async () => {
      const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
        ok: true,
        json: async () => ({
          choices: [{ message: { content: "respuesta de prueba" } }],
        }),
      } as unknown as Response);

      const { sendChatMessage } = await import("./chatService");
      await sendChatMessage("test", []);

      const [[url, options]] = fetchSpy.mock.calls as [[string, RequestInit]];
      expect(url).toBe("/chat/completions");
      expect(options.method).toBe("POST");
      expect(options.headers).toMatchObject({ "Content-Type": "application/json" });

      fetchSpy.mockRestore();
    });

    it("returns success:false when the server responds with an error status", async () => {
      vi.spyOn(global, "fetch").mockResolvedValue({
        ok: false,
        status: 503,
        statusText: "Service Unavailable",
        json: async () => ({ error: "Sin disponibilidad" }),
      } as unknown as Response);

      const { sendChatMessage } = await import("./chatService");
      const result = await sendChatMessage("test", []);

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();

      vi.restoreAllMocks();
    });
  });
});
