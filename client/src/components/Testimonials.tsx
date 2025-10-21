export default function Testimonials() {
  const testimonials = [
    {
      text: "¡Mi Deadpool tejido es simplemente perfecto! La calidad es de otro nivel, lleno de detalles que solo un verdadero fan notaría.",
      author: "- Carlos M."
    },
    {
      text: "Le regalé un personaje de anime a mi polola y le encantó. Se nota el cariño en cada puntada. ¡Excelente trabajo!",
      author: "- Valentina G."
    },
    {
      text: "Tengo varios de sus amigurumis y son todos preciosos. La atención es súper personalizada y amable. ¡Totalmente recomendado!",
      author: "- Francisco A."
    }
  ];

  return (
    <section 
      id="testimonios" 
      className="py-20 md:py-28"
      style={{backgroundColor: 'rgba(248, 221, 164, 0.4)'}}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#8B5E3C'}}>
          Lo que dicen los fans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <p className="text-lg italic mb-6 leading-relaxed" style={{color: '#8B5E3C'}}>
                "{testimonial.text}"
              </p>
              <p className="font-bold" style={{color: '#8B5E3C'}}>
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

