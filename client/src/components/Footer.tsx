export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "56992834268";
  const message = encodeURIComponent("Hola! Quisiera encargar un amigurumi personalizado.");
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer 
      id="contacto" 
      className="pt-16 pb-8"
      style={{backgroundColor: '#8B5E3C', color: '#FFF8F0'}}
    >
      <div className="container mx-auto px-6">
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Gray Amigurumis */}
          <div>
            <h3 className="font-display text-3xl mb-4">
              Gray Amigurumis
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Confecciones artesanales hechas con amor desde Punta Arenas, Chile.
            </p>
            {/* Iconos de redes sociales */}
            <div className="flex gap-4 text-3xl">
              <a 
                href="https://www.instagram.com/grayamigurumis/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-2xl mb-4">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('tienda')}
                className="text-left text-lg hover:underline transition"
              >
                Catálogo
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-lg hover:underline transition"
              >
                Quién Soy
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-lg hover:underline transition"
              >
                Contacto
              </button>
            </nav>
          </div>
          
          {/* Columna 3: Ubicación */}
          <div>
            <h3 className="font-bold text-2xl mb-4">
              Ubicación
            </h3>
            <div className="flex items-start gap-2 text-lg leading-relaxed">
              <span className="text-2xl">📍</span>
              <div>
                <p>Punta Arenas</p>
                <p>Región de Magallanes</p>
                <p>Chile</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón CTA centrado */}
        <div className="text-center mb-12">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
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
            Pedidos Personalizados
          </a>
        </div>
        
        {/* Línea divisora */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {currentYear} Gray Amigurumis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

