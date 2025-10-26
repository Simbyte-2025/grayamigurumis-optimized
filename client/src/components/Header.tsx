import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "56992834268";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 shadow-md" style={{backgroundColor: 'rgba(244, 199, 212, 0.8)', backdropFilter: 'blur(12px)'}}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <div 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full border-2 border-white/50 flex items-center justify-center float-animation"
              style={{ backgroundColor: '#FFF9F5' }}
            >
              <img
                src="/logo.png" 
                alt="Gray Amigurumis Logo"
                className="h-full w-full object-contain rounded-full"
                onError={(e) => { 
                  const target = e.currentTarget;
                  target.src = 'https://placehold.co/48x48/FFF9F5/4A5568?text=GA'; 
                }}
              />
            </div>
            <span className="font-display text-2xl sm:text-3xl text-white drop-shadow-sm" style={{textShadow: '1px 1px 2px rgba(74, 85, 104, 0.5)'}}>
              Grayamigurumis
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-base lg:text-lg font-semibold transition hover:opacity-75" style={{color: '#4A5568'}}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('tienda')} className="text-base lg:text-lg font-semibold transition hover:opacity-75" style={{color: '#4A5568'}}>
              Tienda
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-base lg:text-lg font-semibold transition hover:opacity-75" style={{color: '#4A5568'}}>
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-base lg:text-lg font-semibold transition hover:opacity-75" style={{color: '#4A5568'}}>
              Contacto
            </button>
          </nav>

          <div className="hidden md:block">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesan%20tus%20amigurumis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-sm"
              style={{
                backgroundColor: '#F4C7D4',
                color: '#4A5568'
              }}
              aria-label="Contactar por WhatsApp"
              title="Contactar por WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="transition-opacity duration-300">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-3xl text-white p-2 rounded-md hover:bg-white/20 transition"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 shadow-lg p-6 md:hidden transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{backgroundColor: '#F4C7D4'}}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl p-1 rounded-md hover:bg-black/10 transition"
          style={{color: '#4A5568'}}
          aria-label="Cerrar menú"
        >
          &times;
        </button>
        <h2 id="mobile-menu-title" className="sr-only">Menú Principal</h2>
        
        <nav className="flex flex-col space-y-5 mt-16">
          <button onClick={() => scrollToSection('inicio')} className="text-xl font-semibold text-left py-1 hover:opacity-75 transition" style={{color: '#4A5568'}}>
            Inicio
          </button>
          <button onClick={() => scrollToSection('tienda')} className="text-xl font-semibold text-left py-1 hover:opacity-75 transition" style={{color: '#4A5568'}}>
            Tienda
          </button>
          <button onClick={() => scrollToSection('nosotros')} className="text-xl font-semibold text-left py-1 hover:opacity-75 transition" style={{color: '#4A5568'}}>
            Nosotros
          </button>
          <button onClick={() => scrollToSection('contacto')} className="text-xl font-semibold text-left py-1 hover:opacity-75 transition" style={{color: '#4A5568'}}>
            Contacto
          </button>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesan%20tus%20amigurumis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-left py-1 hover:opacity-75 transition"
            style={{color: '#4A5568'}}
          >
            WhatsApp 💬
          </a>
        </nav>
      </div>
    </>
  );
}

