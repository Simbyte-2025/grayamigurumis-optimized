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
      className="section-paper bg-quotes py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{color: '#4A5568'}}>
          Lo que dicen los fans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonio-card fade-in-scroll"
            >
              <p style={{color: '#4A5568', fontStyle: 'italic', marginBottom: '24px', lineHeight: '1.6'}}>
                {testimonial.text}
              </p>
              <p style={{color: '#4A5568', fontWeight: 'bold'}}>
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

