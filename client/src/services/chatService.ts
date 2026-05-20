/**
 * Servicio de Chat para GrayAmigurumis
 *
 * Arquitectura unificada:
 * - Frontend llama a un único endpoint same-origin: /chat/completions
 * - Backend: Cloudflare Pages Function que llama a OpenRouter con API key segura
 *
 * Seguridad:
 * - NUNCA se expone la API key en el frontend
 * - Todo el tráfico pasa por el dominio del sitio (same-origin)
 *
 * Fallback:
 * - Lista de modelos FREE de OpenRouter, probados en orden
 *
 * Modo mock:
 * - Activado en frontend con VITE_CHAT_MOCK=true
 * - Útil para desarrollo local sin consumir cuota de OpenRouter
 */

interface ChatMessage {
  role: string;
  content: string;
}

interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
  provider?: string;
}

const SYSTEM_INSTRUCTION = `Eres el asistente virtual amoroso y respetuoso de Grayamigurumis, emprendimiento regional especialista en la creación de amigurumis personalizados y accesorios tejidos a mano desde Punta Arenas, Chile.

**Tus funciones principales:**
- Ayudar al usuario a decidirse por alguno de los productos disponibles y sugerir alternativas según sus preferencias.
- Orientar al usuario para concretar ideas, crear productos personalizados o realizar pedidos a medida, inspirándolo con el universo de personajes y creaciones de Grayamigurumis.
- Incentivar la comunicación directa por WhatsApp para resolver dudas, cotizar y concretar pedidos personalizados.
- Ofrecer amablemente los productos que están listados en la web, presentando opciones atractivas para que el usuario se sienta cómodo y motivado a comprar, resaltando la posibilidad de solicitar creaciones únicas.

**Sobre los productos:**
- Muñecos amigurumi personalizados, accesorios tejidos a mano, figuras icónicas y objetos originales, todos elaborados con la técnica japonesa del amigurumi y crochet de algodón.
- Personajes disponibles incluyen Homero Simpson, Hombre Araña, Pollito Asesino, Labubu y muchas más creaciones exclusivas del emprendimiento.

**Normas de seguridad y convivencia:**
- Ante mensajes con insultos, vulgaridades o lenguaje ofensivo, responde siempre con amabilidad y sin revelar información sensible. Ejemplo de respuesta: "En Grayamigurumis creemos en la amabilidad y el respeto. ¿En qué puedo ayudarte a encontrar ese amigurumi especial?"
- Nunca respondas a provocaciones ni te involucres en conversaciones irrespetuosas.
- No compartas datos personales, información interna o cualquier detalle confidencial.

**Contexto de respuesta:**
- Mantén siempre un tono cálido, artesanal y profesional.
- Busca que la experiencia de usuario transmita amor por la creación artesanal y respeto por quienes visitan el emprendimiento.
- Incentiva con entusiasmo la comunicación por WhatsApp, mostrando predisposición para acompañar el proceso creativo y la decisión de compra.

**Ejemplo de reacción ante insultos/vulgaridades:**
- Si detectas un mensaje ofensivo: "En Grayamigurumis, todas las dudas se atienden con cariño y respeto. ¿Te gustaría saber más sobre nuestros muñecos tejidos o pedir uno personalizado?"

**Formato de interacción:**
- Saludo inicial.
- Respuesta precisa, contextual y centrada en los productos y valores del emprendimiento.
- Sugerencias de productos disponibles y opciones de personalización.
- Invitación amable a conversar por WhatsApp para concretar pedidos.
- Despedida amorosa si corresponde.

¡Haz que cada interacción sea un reflejo del mundo afectuoso, creativo y personalizado de Grayamigurumis!`;

/**
 * Modelos gratuitos de OpenRouter con fallback optimizado por velocidad.
 * Ordenados por latencia: más rápido primero, más potente último.
 */
const FREE_MODELS = [
  "meituan/longcat-flash-chat:free",      // 1º: Ultra-rápido (2-5s) - MoE chat specialist
  "anthropic/claude-3.5-haiku:free",      // 2º: Premium speed (3-6s) - Real-time chat
  "google/gemini-flash-1.5:free",         // 3º: Estable y rápido (4-8s) - High uptime
  "deepseek/deepseek-chat-v3.1:free"      // 4º: Potente fallback (8-12s) - Deep reasoning
];

/**
 * Endpoint del proxy same-origin (Pages Function)
 * - En dev: Vite proxeará /chat/completions al entorno de Pages (según configuración)
 * - En prod: mismo dominio de grayamigurumis.pages.dev / dominio custom
 */
const PROXY_ENDPOINT = "/chat/completions";

/**
 * Modo mock de frontend (desarrollo local)
 * - Controlado por VITE_CHAT_MOCK=true
 * - NO hace llamadas de red, devuelve una respuesta simulada
 */
const USE_MOCK = import.meta.env.VITE_CHAT_MOCK === "true";

function buildMockResponse(
  userMessage: string,
  conversationHistory: Array<{ sender: "user" | "bot"; text: string }>
): ChatResponse {
  const lastUserMessage = userMessage.trim();

  const intro =
    "🧶 [MODO DEMO] Este es un entorno de desarrollo sin conexión real a la API de OpenRouter.\n\n";
  const body =
    "Normalmente aquí te ayudaría a elegir amigurumis, combinar ideas personalizadas " +
    "y luego te invitaría a escribir por WhatsApp para coordinar tu pedido.\n\n";
  const echo =
    lastUserMessage.length > 0
      ? `Mensaje recibido para pruebas:\n> ${lastUserMessage.slice(0, 280)}\n\n`
      : "";

  const outro =
    "Cuando desactives el modo demo (VITE_CHAT_MOCK=false), el chatbot usará la API real " +
    "mediante la Pages Function /chat/completions.\n";

  return {
    success: true,
    provider: "mock-local",
    message: `${intro}${body}${echo}${outro}`,
  };
}

/**
 * Intenta enviar mensaje usando el proxy same-origin con un modelo específico.
 */
async function tryModel(
  model: string,
  userMessage: string,
  conversationHistory: ChatMessage[]
): Promise<ChatResponse> {
  const messages: ChatMessage[] = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    ...conversationHistory,
    { role: "user", content: userMessage },
  ];

  const response = await fetch(PROXY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      (errorData as { error?: string }).error ||
        `HTTP ${response.status}: ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!data.choices?.[0]?.message?.content) {
    throw new Error("Respuesta inválida del servidor");
  }

  return {
    success: true,
    message: data.choices[0].message.content,
    provider: `OpenRouter (${model})`,
  };
}

/**
 * Envía un mensaje al chatbot con sistema de fallback entre modelos:
 * LongCat Flash → Claude 3.5 Haiku → Gemini Flash 1.5 → DeepSeek V3.1
 *
 * Optimizado para velocidad (2-6s respuesta promedio en condiciones normales).
 */
export async function sendChatMessage(
  userMessage: string,
  conversationHistory: Array<{ sender: "user" | "bot"; text: string }> = []
): Promise<ChatResponse> {
  // Modo mock de desarrollo: no hace llamadas de red
  if (USE_MOCK) {
    return buildMockResponse(userMessage, conversationHistory);
  }

  // Convertir historial al formato de OpenRouter
  const apiHistory: ChatMessage[] = conversationHistory.map((msg) => ({
    role: msg.sender === "user" ? "user" : "assistant",
    content: msg.text,
  }));

  let lastError: Error | null = null;

  // Intentar con cada modelo en orden
  for (const model of FREE_MODELS) {
    try {
      console.log(`🤖 Intentando con ${model}...`);
      const result = await tryModel(model, userMessage, apiHistory);
      console.log(`✅ ${model} respondió exitosamente`);
      return result;
    } catch (error) {
      console.warn(`❌ ${model} falló:`, error);
      lastError = error instanceof Error ? error : new Error(String(error));
      // Continuar con el siguiente modelo
    }
  }

  // Si todos los modelos fallaron
  console.error("❌ Todos los modelos fallaron:", lastError);

  return {
    success: false,
    error: lastError?.message || "Error desconocido",
    message:
      "Lo siento, tuve un problema técnico 😅 ¿Podrías intentar de nuevo en un momento? También puedes contactarme directamente por WhatsApp.",
  };
}

