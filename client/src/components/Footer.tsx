import WhatsAppIcon from "./shared/WhatsAppIcon";
import InstagramIcon from "./shared/InstagramIcon";

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
      className="section-paper bg-footer pt-12 sm:pt-16 pb-8"
      style={{backgroundColor: '#4A5568', color: '#FFF9F5'}}
    >
      <div className="container mx-auto px-6">
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-12">
          
          {/* Columna 1: Gray Amigurumis */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl mb-4">
              Gray Amigurumis
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-5 sm:mb-6 opacity-90">
              Confecciones artesanales hechas con amor desde Punta Arenas, Chile.
            </p>
            {/* Iconos de redes sociales */}
            <div className="flex gap-4 text-2xl sm:text-3xl">
              <a 
                href="https://www.instagram.com/grayamigurumis/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70 p-1"
                aria-label="Instagram"
                title="Visitar Instagram"
                style={{color: '#FFF9F5'}}
              >
                <InstagramIcon size={28} title="Instagram" className="text-white" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70 p-1"
                aria-label="WhatsApp"
                title="Contactar por WhatsApp"
                style={{color: '#FFF9F5'}}
              >
                <div style={{ filter: 'brightness(0) invert(1)' }}>
                  <WhatsAppIcon size={28} title="WhatsApp" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <button 
                onClick={() => scrollToSection('tienda')}
                className="text-left text-base sm:text-lg hover:underline transition opacity-90 hover:opacity-100"
              >
                Catálogo
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-base sm:text-lg hover:underline transition opacity-90 hover:opacity-100"
              >
                Quién Soy
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-left text-base sm:text-lg hover:underline transition opacity-90 hover:opacity-100"
              >
                Testimonios
              </button>
            </nav>
          </div>
          
          {/* Columna 3: Ubicación */}
          <div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4">
              Ubicación
            </h3>
            <div className="flex items-start gap-2 text-base sm:text-lg leading-relaxed opacity-90">
              <span className="text-xl sm:text-2xl mt-1">📍</span>
              <div>
                <p>Punta Arenas</p>
                <p>Región de Magallanes</p>
                <p>Chile</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón CTA centrado */}
        <div className="text-center mb-10 md:mb-12">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold py-3 px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            style={{
              backgroundColor: '#F4C7D4',
              color: '#4A5568'
            }}
            aria-label="Hacer pedido personalizado por WhatsApp"
            title="Hacer pedido personalizado"
          >
            Pedidos Personalizados
          </a>
        </div>
        
        {/* Línea divisora */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm opacity-80">
            © {currentYear} Gray Amigurumis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

