export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="section-paper bg-hero relative flex items-center justify-center py-24 md:py-32 bg-cover bg-center"
      style={{
        minHeight: '65vh',
        backgroundImage: `url('/assets/img/placeholder-4x5.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <div 
          className="inline-block p-6 sm:p-8 md:p-12 rounded-xl shadow-xl max-w-3xl float-animation-slow"
          style={{backgroundColor: 'rgba(255, 254, 249, 0.85)', backdropFilter: 'blur(5px)'}}
        >
          <h1 className="hero-title font-display text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight" style={{color: '#4A5568'}}>
            Hecho a mano, con el corazón
          </h1>
          <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8" style={{color: 'rgba(74, 85, 104, 0.9)'}}>
            Tus personajes favoritos en crochet
          </p>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{color: '#4A5568'}}>
            Amigurumis y accesorios únicos, confeccionados a pedido con toda la dedicación de una emprendedora regional.
          </p>
          <button
            onClick={() => scrollToSection('tienda')}
            className="hero-cta font-bold py-3 px-8 rounded-full text-base sm:text-lg"
            style={{backgroundColor: '#F4C7D4', color: '#4A5568'}}
          >
            Ver creaciones
          </button>
        </div>
      </div>
    </section>
  );
}

