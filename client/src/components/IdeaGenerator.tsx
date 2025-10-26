import { useState } from "react";

export default function IdeaGenerator() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const generateIdea = async () => {
    if (!idea.trim()) {
      alert('Por favor, ingresa tu idea para el amigurumi.');
      return;
    }

    setShowResult(true);
    setLoading(true);
    setResult('');

    const systemPrompt = `Eres un asistente creativo para 'Grayamigurumis', una tienda de muñecos de crochet (amigurumis) hechos a mano. Un cliente quiere un pedido personalizado. Tu tarea es tomar su idea y expandirla en una descripción adorable, detallada y mágica para ayudarle a visualizar el producto final.
- Describe su apariencia general y su expresión.
- Sugiere una paleta de colores que combine bien, usando tonos suaves y cálidos.
- Menciona los accesorios o detalles especiales que lo harían único.
- El texto debe ser un párrafo único de no más de 100 palabras.
- Mantén un tono amigable, entusiasta y mágico. No actúes como un chatbot, sino como un verdadero asistente creativo. No te presentes, solo da la descripción.`;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: idea }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }

      const data = await response.json();
      const candidate = data.candidates?.[0];

      if (candidate && candidate.content?.parts?.[0]?.text) {
        const generatedText = candidate.content.parts[0].text;
        setResult(generatedText);
      } else {
        throw new Error('No se pudo generar una descripción. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error al llamar a la API de Gemini:', error);
      setResult('Lo siento, ocurrió un error al generar la idea. Por favor, intenta de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="idea-generator" 
      className="py-20 md:py-28"
      style={{backgroundColor: 'rgba(248, 221, 164, 0.4)'}}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{color: '#8B5E3C'}}>
          ✨ Dale Vida a tu Idea
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed" style={{color: '#8B5E3C'}}>
          ¿Tienes una idea para un amigurumi personalizado pero no sabes por dónde empezar? ¡Usa nuestro asistente creativo! Describe tu idea y la inteligencia artificial te ayudará a imaginar los detalles.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              id="idea"
              name="idea"
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Ej: un gatito con sombrero de mago"
              className="w-full px-4 py-3 rounded-lg border-2 transition-all input-idea"
              style={{
                borderColor: 'rgba(139,94,60,0.2)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#FFC0CB';
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 192, 203, 0.4)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,94,60,0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              onClick={generateIdea}
              className="font-bold py-3 px-6 rounded-lg whitespace-nowrap transition-all duration-300"
              style={{
                backgroundColor: '#FFC0CB',
                color: '#8B5E3C',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A9D1A7';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC0CB';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              Generar Descripción
            </button>
          </div>
          
          {showResult && (
            <div 
              className="bg-white p-8 rounded-lg shadow-md text-left min-h-[150px] relative"
            >
              {loading && (
                <div 
                  className="absolute inset-0 bg-white/70 flex justify-center items-center rounded-lg"
                >
                  <div 
                    className="animate-spin rounded-full h-12 w-12 border-b-2"
                    style={{borderColor: '#FFC0CB'}}
                  ></div>
                </div>
              )}
              <div className="prose max-w-none" style={{color: '#8B5E3C'}}>
                {result && <p>{result}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

