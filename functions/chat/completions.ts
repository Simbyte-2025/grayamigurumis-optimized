/**
 * Cloudflare Pages Function: /chat/completions
 * 
 * Proxy seguro para OpenRouter API
 * - La API key se almacena como secreto en Cloudflare Dashboard
 * - No expone credenciales al frontend
 * 
 * Setup en Cloudflare Dashboard:
 * 1. Pages → Settings → Environment Variables
 * 2. Agregar: OPENROUTER_API_KEY = "tu-api-key"
 */

interface Env {
  OPENROUTER_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Validar API key
  if (!env.OPENROUTER_API_KEY) {
    return new Response(
      JSON.stringify({ 
        error: 'API key not configured. Set OPENROUTER_API_KEY in Cloudflare Dashboard.' 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Leer body del request
    const body = await request.json();

    // Validar que sea un request válido
    if (!body.messages || !Array.isArray(body.messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid request: messages array required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Llamar a OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': request.headers.get('origin') || 'https://grayamigurumis.pages.dev',
        'X-Title': 'GrayAmigurumis Chatbot'
      },
      body: JSON.stringify({
        model: body.model || 'openai/gpt-3.5-turbo',
        messages: body.messages,
        temperature: body.temperature || 0.7,
        max_tokens: body.max_tokens || 500,
      })
    });

    // Verificar respuesta de OpenRouter
    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenRouter API error:', errorData);
      
      return new Response(
        JSON.stringify({ 
          error: 'OpenRouter API error',
          details: errorData
        }), 
        { 
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Retornar respuesta
    const data = await response.json();
    
    return new Response(
      JSON.stringify(data), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );

  } catch (error) {
    console.error('Worker error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
};
