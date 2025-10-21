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
      <header className="sticky top-0 z-50 shadow-md" style={{backgroundColor: 'rgba(255, 192, 203, 0.8)', backdropFilter: 'blur(12px)'}}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-display text-3xl text-white" style={{textShadow: '1px 1px 2px rgba(139,94,60,0.5)'}}>
            Grayamigurumis
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-lg font-semibold transition" style={{color: '#8B5E3C'}}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('tienda')} className="text-lg font-semibold transition" style={{color: '#8B5E3C'}}>
              Tienda
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-lg font-semibold transition" style={{color: '#8B5E3C'}}>
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-lg font-semibold transition" style={{color: '#8B5E3C'}}>
              Contacto
            </button>
          </nav>

          <div className="hidden md:block">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesan%20tus%20amigurumis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold py-2 px-4 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#FFC0CB',
                color: '#8B5E3C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A9D1A7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC0CB';
              }}
            >
              <span className="text-xl">💬</span>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-3xl text-white"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 shadow-lg p-8 md:hidden transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{backgroundColor: '#FFC0CB'}}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl text-white"
        >
          &times;
        </button>
        
        <nav className="flex flex-col space-y-6 mt-12">
          <button onClick={() => scrollToSection('inicio')} className="text-xl text-white font-semibold text-left">
            Inicio
          </button>
          <button onClick={() => scrollToSection('tienda')} className="text-xl text-white font-semibold text-left">
            Tienda
          </button>
          <button onClick={() => scrollToSection('nosotros')} className="text-xl text-white font-semibold text-left">
            Nosotros
          </button>
          <button onClick={() => scrollToSection('contacto')} className="text-xl text-white font-semibold text-left">
            Contacto
          </button>
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white font-semibold"
          >
            Carrito 🛒
          </a>
        </nav>
      </div>
    </>
  );
}

