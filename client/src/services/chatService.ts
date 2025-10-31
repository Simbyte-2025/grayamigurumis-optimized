/**
 * Servicio de Chat para GrayAmigurumis
 * 
 * SEGURIDAD: Usa SOLO el proxy de Pages Function (/chat/completions)
 * - NUNCA expone API keys en el frontend
 * - La API key de OpenRouter se almacena como secreto en Cloudflare Dashboard
 * - Fallback automático entre modelos gratuitos de OpenRouter
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
 * Modelos gratuitos de OpenRouter con fallback
 * https://openrouter.ai/docs#models
 */
const FREE_MODELS = [
  "minimax/minimax-m2:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
  "deepseek/deepseek-chat-v3.1:free"
];

/**
 * Endpoint del proxy seguro (Cloudflare Worker existente)
 * Worker: grayamigurumis-or-relay.caballero-sepulveda-nicolas.workers.dev
 * La API key de OpenRouter está almacenada como Secret en el Worker
 */
const PROXY_ENDPOINT = 'https://grayamigurumis-or-relay.caballero-sepulveda-nicolas.workers.dev/chat/completions';

/**
 * Intenta enviar mensaje usando el proxy con un modelo específico
 */
async function tryModel(
  model: string,
  userMessage: string,
  conversationHistory: ChatMessage[]
): Promise<ChatResponse> {
  const messages: ChatMessage[] = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    ...conversationHistory,
    { role: "user", content: userMessage }
  ];

  const response = await fetch(PROXY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error || `HTTP ${response.status}: ${response.statusText}`
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
 * Envía un mensaje al chatbot con sistema de fallback entre modelos
 * Intenta en orden: Minimax M2 → Nemotron Nano 12B V2 VL → DeepSeek Chat V3.1
 */
export async function sendChatMessage(
  userMessage: string,
  conversationHistory: Array<{ sender: "user" | "bot"; text: string }> = []
): Promise<ChatResponse> {
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

/**
 * Convierte el historial de mensajes del chatbot al formato de la API
 * @deprecated Esta función ya no es necesaria con el nuevo sistema
 */
export function convertMessagesToAPIFormat(
  messages: Array<{ sender: "user" | "bot"; text: string }>
): ChatMessage[] {
  return messages.map((msg) => ({
    role: msg.sender === "user" ? "user" : "assistant",
    content: msg.text,
  }));
}
