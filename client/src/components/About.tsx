export default function About() {
  return (
    <section 
      id="nosotros" 
      className="py-20 md:py-28"
      style={{backgroundColor: 'rgba(169, 209, 167, 0.3)'}}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
          {/* Imagen circular placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div 
              className="rounded-full shadow-2xl w-full max-w-md aspect-square flex items-center justify-center"
              style={{backgroundColor: '#FFF8F0'}}
            >
              <span className="text-4xl font-bold" style={{color: '#8B5E3C'}}>
                Tu Foto Aquí
              </span>
            </div>
          </div>
          
          {/* Texto */}
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


