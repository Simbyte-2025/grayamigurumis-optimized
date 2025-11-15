/**
 * Cloudflare Pages Function: /chat/completions
 *
 * Proxy seguro para OpenRouter API
 *
 * Objetivos:
 * - Mantener la API key solo en el backend (Cloudflare env vars)
 * - Exponer un único endpoint same-origin para el frontend
 * - Implementar retry con backoff exponencial para OpenRouter
 * - Soportar modo mock de backend para entornos de prueba
 *
 * Setup en Cloudflare Dashboard:
 * 1. Pages → Settings → Environment Variables
 * 2. Agregar:
 *    - OPENROUTER_API_KEY = "tu-api-key"
 *    - (opcional) CHAT_MOCK_MODE = "true" para mockear respuestas en entornos no productivos
 */

// Dominios autorizados para CORS
const ALLOWED_ORIGINS = [
  "https://grayamigurumis.pages.dev",
  "https://grayamigurumis.com",
];

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 500;

interface Env {
  OPENROUTER_API_KEY: string;
  CHAT_MOCK_MODE?: string;
}

interface ChatRequestBody {
  model?: string;
  messages: Array<{
    role: string;
    content: string;
    [key: string]: unknown;
  }>;
  temperature?: number;
  max_tokens?: number;
  [key: string]: unknown;
}

function getCorsOrigin(request: Request): string {
  const origin = request.headers.get("origin") || "";
  return ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
}

function buildCorsHeaders(corsOrigin: string): HeadersInit {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": corsOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
  };
}

function jsonResponse(
  data: unknown,
  status: number,
  corsOrigin: string
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: buildCorsHeaders(corsOrigin),
  });
}

function isMockEnabled(env: Env, request: Request): boolean {
  if (env.CHAT_MOCK_MODE === "true") return true;

  // Permitir forzar mock por querystring en entornos de prueba: /chat/completions?mock=1
  const url = new URL(request.url);
  if (url.searchParams.get("mock") === "1") return true;

  return false;
}

function buildMockPayload(body: ChatRequestBody): unknown {
  const lastUserMessage =
    body.messages?.filter((m) => m.role === "user").slice(-1)[0]?.content ??
    "";

  const reply =
    "🧶 [MODO DEMO BACKEND] Este endpoint está en modo mock.\n\n" +
    "No se está llamando a OpenRouter, sino devolviendo una respuesta " +
    "simulada para pruebas de integración.\n\n" +
    (lastUserMessage
      ? `Último mensaje del usuario:\n> ${String(lastUserMessage).slice(
          0,
          400
        )}\n\n`
      : "") +
    "Cuando desactives CHAT_MOCK_MODE o el parámetro ?mock=1, " +
    "esta función usará la API real de OpenRouter.";

  const now = Math.floor(Date.now() / 1000);

  return {
    id: "chatcmpl-mock-backend",
    object: "chat.completion",
    created: now,
    model: body.model || "mock/openrouter-backend",
    choices: [
      {
        index: 0,
        finish_reason: "stop",
        message: {
          role: "assistant",
          content: reply,
        },
      },
    ],
  };
}

function isRetriableStatus(status: number): boolean {
  if (status === 429) return true; // rate limit
  if (status >= 500 && status < 600) return true; // errores 5xx
  return false;
}

async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function callOpenRouterWithRetry(
  body: ChatRequestBody,
  env: Env,
  request: Request
): Promise<Response> {
  let attempt = 0;
  let lastError: unknown = null;

  const refererHeader =
    request.headers.get("origin") || "https://grayamigurumis.pages.dev";

  while (attempt < MAX_RETRIES) {
    try {
      const response = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": refererHeader,
          "X-Title": "GrayAmigurumis Chatbot",
        },
        body: JSON.stringify({
          model: body.model || "openai/gpt-3.5-turbo",
          messages: body.messages,
          temperature: body.temperature ?? 0.7,
          max_tokens: body.max_tokens ?? 500,
        }),
      });

      if (response.ok || !isRetriableStatus(response.status)) {
        return response;
      }

      lastError = new Error(
        `OpenRouter HTTP ${response.status}: ${response.statusText}`
      );
      attempt += 1;

      if (attempt < MAX_RETRIES) {
        const backoffMs = INITIAL_BACKOFF_MS * 2 ** (attempt - 1);
        console.warn(
          `OpenRouter respondió ${response.status}. Reintento ${attempt}/${MAX_RETRIES} en ${backoffMs}ms...`
        );
        await sleep(backoffMs);
      }
    } catch (error) {
      lastError = error;
      attempt += 1;

      if (attempt < MAX_RETRIES) {
        const backoffMs = INITIAL_BACKOFF_MS * 2 ** (attempt - 1);
        console.warn(
          `Error de red al llamar a OpenRouter. Reintento ${attempt}/${MAX_RETRIES} en ${backoffMs}ms...`,
          error
        );
        await sleep(backoffMs);
      }
    }
  }

  console.error("OpenRouter falló después de varios reintentos:", lastError);
  throw lastError ?? new Error("Unknown OpenRouter error after retries");
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const corsOrigin = getCorsOrigin(request);

  // Mock mode de backend (para entornos de prueba / debug)
  if (isMockEnabled(env, request)) {
    try {
      const body = (await request.json()) as ChatRequestBody;
      if (!body.messages || !Array.isArray(body.messages)) {
        return jsonResponse(
          { error: "Invalid request in mock mode: messages array required" },
          400,
          corsOrigin
        );
      }

      const payload = buildMockPayload(body);
      return jsonResponse(payload, 200, corsOrigin);
    } catch (error) {
      console.error("Error en mock mode:", error);
      return jsonResponse(
        {
          error: "Mock mode error",
          message:
            error instanceof Error ? error.message : "Unknown mock error",
        },
        500,
        corsOrigin
      );
    }
  }

  // Validar API key
  if (!env.OPENROUTER_API_KEY) {
    return jsonResponse(
      {
        error:
          "API key not configured. Set OPENROUTER_API_KEY in Cloudflare Dashboard.",
      },
      500,
      corsOrigin
    );
  }

  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch (error) {
    return jsonResponse(
      { error: "Invalid JSON body", message: String(error) },
      400,
      corsOrigin
    );
  }

  // Validar que sea un request válido
  if (!body.messages || !Array.isArray(body.messages)) {
    return jsonResponse(
      { error: "Invalid request: messages array required" },
      400,
      corsOrigin
    );
  }

  try {
    const upstreamResponse = await callOpenRouterWithRetry(body, env, request);
    const raw = await upstreamResponse.text();

    // Reenviamos el cuerpo tal cual, pero con nuestros headers CORS
    return new Response(raw, {
      status: upstreamResponse.status,
      headers: buildCorsHeaders(corsOrigin),
    });
  } catch (error) {
    console.error("Worker error después de reintentos:", error);

    return jsonResponse(
      {
        error: "OpenRouter API error after retries",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      502,
      corsOrigin
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async (context) => {
  const { request } = context;
  const corsOrigin = getCorsOrigin(request);

  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Max-Age": "86400",
    },
  });
};
