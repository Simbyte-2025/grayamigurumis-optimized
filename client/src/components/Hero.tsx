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
      className="relative flex items-center justify-center py-20 bg-cover bg-center"
      style={{
        minHeight: '60vh',
        backgroundImage: `url('https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg')`,
      }}
    >
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.1)'}}></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div 
          className="inline-block p-8 md:p-12 rounded-xl shadow-lg"
          style={{backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)'}}
        >
          <h1 className="font-display text-5xl md:text-7xl mb-4" style={{color: '#8B5E3C'}}>
            Hecho a mano, con el corazón
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8" style={{color: 'rgba(139,94,60,0.8)'}}>
            Tus personajes favoritos en crochet
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{color: '#8B5E3C'}}>
            Amigurumis y accesorios únicos, confeccionados a pedido con toda la dedicación de una emprendedora regional.
          </p>
          <button
            onClick={() => scrollToSection('tienda')}
            className="font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
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
            Ver creaciones
          </button>
        </div>
      </div>
    </section>
  );
}

