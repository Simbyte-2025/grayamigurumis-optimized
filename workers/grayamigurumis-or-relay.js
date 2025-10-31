// grayamigurumis-or-relay.js (secure CORS + ENVIRONMENT support)
const getCorsHeaders = (request, env) => {
  const origin = request.headers.get('origin');
  const isProd = (env && env.ENVIRONMENT) === 'production';

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
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
};

export default {
  async fetch(request, env, ctx) {
    const startTime = Date.now();
    const corsHeaders = getCorsHeaders(request, env);

    console.log(JSON.stringify({
      ts: new Date().toISOString(),
      method: request.method,
      origin: request.headers.get('origin'),
      env: env.ENVIRONMENT || 'unknown'
    }));

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    if (!env.OPENPOUTER_API_KEY) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    try {
      const body = await request.json();

      const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'X-Forwarded-For': request.headers.get('cf-connecting-ip') || ''
        },
        body: JSON.stringify({
          model: body.model || 'minimax/minimax-m2:free',
          messages: body.messages,
          temperature: body.temperature ?? 0.8,
          max_tokens: body.max_tokens ?? 300
        })
      });

      const data = await resp.json();

      console.log(JSON.stringify({ status: resp.status, duration: Date.now() - startTime }));

      return new Response(JSON.stringify(data), {
        status: resp.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    } catch (error) {
      console.error(JSON.stringify({ error: error.message, stack: error.stack, duration: Date.now() - startTime }));
      return new Response(JSON.stringify({ error: 'Internal server error', message: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }
  }
};