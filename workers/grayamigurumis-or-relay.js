// grayamigurumis-or-relay Worker – FIXED VERSION

const getCorsHeaders = (request, env) => {
  const origin = request.headers.get('origin');
  const isProd = env.ENVIRONMENT === 'production';
  const allowedOrigins = isProd
    ? [
        'https://grayamigurumis-optimized.pages.dev',
        'https://grayamigurumis.cl'
      ]
    : null;
  const allowOrigin = !isProd
    ? '*'
    : (allowedOrigins.includes(origin) ? origin : 'null');
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 🧭 Solo manejar /chat/completions
    if (url.pathname !== "/chat/completions") {
      return new Response("Not Found", { status: 404 });
    }

    const corsHeaders = getCorsHeaders(request, env);

    // Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Solo POST permitido
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    if (!env.OPENROUTER_API_KEY) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    try {
      const body = await request.json();
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": request.headers.get("origin") || "https://grayamigurumis-optimized.pages.dev",
          "X-Title": "GrayAmigurumis Chatbot"
        },
        body: JSON.stringify({
          model: body.model || "minimax/minimax-m2:free",
          messages: body.messages,
          temperature: body.temperature || 0.8,
          max_tokens: body.max_tokens || 300
        })
      });

      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });

    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Internal server error",
          message: error.message || "Unknown error"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        }
      );
    }
  }
};
