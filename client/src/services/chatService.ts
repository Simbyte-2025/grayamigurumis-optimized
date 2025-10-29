/**
 * Servicio de Chat para GrayAmigurumis
 * Sistema de fallback con 3 APIs: Gemini, Perplexity y OpenRouter
 * Usa las credenciales del entorno de Manus
 */

interface ChatMessage {
  role: string;
  parts?: Array<{ text: string }>;
  content?: string;
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
 * Intenta llamar a Google Gemini API
 */
async function tryGemini(userMessage: string, conversationHistory: any[]): Promise<ChatResponse> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("Gemini API key no configurada");
  }

  const contents = [
    ...conversationHistory,
    {
      role: "user",
      parts: [{ text: userMessage }]
    }
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 300,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  
  if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
    throw new Error("Respuesta inválida de Gemini");
  }

  return {
    success: true,
    message: data.candidates[0].content.parts[0].text,
    provider: "Gemini"
  };
}

/**
 * Intenta llamar a Perplexity API (Sonar)
 */
async function tryPerplexity(userMessage: string, conversationHistory: any[]): Promise<ChatResponse> {
  const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;
  
  if (!apiKey) {
    throw new Error("Perplexity API key no configurada");
  }

  const messages = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    ...conversationHistory.map(msg => ({
      role: msg.role === "model" ? "assistant" : msg.role,
      content: msg.parts?.[0]?.text || msg.content || ""
    })),
    { role: "user", content: userMessage }
  ];

  const response = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "sonar-pro",
      messages: messages,
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    throw new Error(`Perplexity API error: ${response.status}`);
  }

  const data = await response.json();
  
  if (!data.choices?.[0]?.message?.content) {
    throw new Error("Respuesta inválida de Perplexity");
  }

  return {
    success: true,
    message: data.choices[0].message.content,
    provider: "Perplexity"
  };
}

/**
 * Intenta llamar a OpenRouter API
 */
async function tryOpenRouter(userMessage: string, conversationHistory: any[]): Promise<ChatResponse> {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  
  if (!apiKey) {
    throw new Error("OpenRouter API key no configurada");
  }

  const messages = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    ...conversationHistory.map(msg => ({
      role: msg.role === "model" ? "assistant" : msg.role,
      content: msg.parts?.[0]?.text || msg.content || ""
    })),
    { role: "user", content: userMessage }
  ];

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "GrayAmigurumis Chatbot"
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-exp:free",
      messages: messages,
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.status}`);
  }

  const data = await response.json();
  
  if (!data.choices?.[0]?.message?.content) {
    throw new Error("Respuesta inválida de OpenRouter");
  }

  return {
    success: true,
    message: data.choices[0].message.content,
    provider: "OpenRouter"
  };
}

/**
 * Envía un mensaje al chatbot con sistema de fallback
 * Intenta en orden: Gemini → Perplexity → OpenRouter
 */
export async function sendChatMessage(
  userMessage: string,
  conversationHistory: any[] = []
): Promise<ChatResponse> {
  const providers = [
    { name: "Gemini", fn: tryGemini },
    { name: "Perplexity", fn: tryPerplexity },
    { name: "OpenRouter", fn: tryOpenRouter }
  ];

  let lastError: Error | null = null;

  // Intentar con cada proveedor en orden
  for (const provider of providers) {
    try {
      console.log(`Intentando con ${provider.name}...`);
      const result = await provider.fn(userMessage, conversationHistory);
      console.log(`✓ ${provider.name} respondió exitosamente`);
      return result;
    } catch (error) {
      console.warn(`✗ ${provider.name} falló:`, error);
      lastError = error instanceof Error ? error : new Error(String(error));
      // Continuar con el siguiente proveedor
    }
  }

  // Si todos fallaron
  console.error("Todos los proveedores fallaron:", lastError);
  
  return {
    success: false,
    error: lastError?.message || "Error desconocido",
    message: "Lo siento, tuve un problema técnico 😅 ¿Podrías intentar de nuevo en un momento?",
  };
}

/**
 * Convierte el historial de mensajes del chatbot al formato de Gemini API
 */
export function convertMessagesToAPIFormat(
  messages: Array<{ sender: "user" | "bot"; text: string }>
): any[] {
  return messages.map((msg) => ({
    role: msg.sender === "user" ? "user" : "model",
    parts: [{ text: msg.text }],
  }));
}
