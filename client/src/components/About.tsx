export default function About() {
  return (
    <section 
      id="nosotros" 
      className="py-20 md:py-28"
      style={{backgroundColor: 'rgba(169, 209, 167, 0.3)'}}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
          <div className="md:w-1/2">
            <img 
              src="https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg" 
              alt="Foto de la artesana de Grayamigurumis" 
              className="rounded-full shadow-2xl w-full max-w-md mx-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-8" style={{color: '#8B5E3C'}}>
              El Arte de Tejer tus Ideas
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{color: '#8B5E3C'}}>
              ¡Hola! Soy la creadora detrás de Grayamigurumis. Como <strong>emprendedora regional</strong>, mi pasión es dar vida a tus personajes e ideas a través del crochet. Cada pieza es una confección única, hecha a pedido con materiales de la más alta calidad.
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#8B5E3C'}}>
              Desde adorables animalitos hasta complejos personajes, me especializo en <strong>pedidos personalizados</strong> para crear ese regalo o auto-regalo perfecto que estás buscando. ¡Gracias por apoyar mi emprendimiento!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

