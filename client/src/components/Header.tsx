import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import { animationVariants } from "@/hooks/useAnimations";

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
      <header className="sticky top-0 z-50 shadow-md h-16 sm:h-18 md:h-20" style={{backgroundColor: 'rgba(244, 199, 212, 0.8)', backdropFilter: 'blur(12px)'}}>
        <div className="container mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 sm:gap-4">
            <motion.div 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full border-2 border-white/50 flex items-center justify-center inline-block"
              style={{ backgroundColor: '#FFF9F5' }}
              initial={animationVariants.floatAnimation.initial}
              animate={animationVariants.floatAnimation.animate}
            >
              <img
                src="/logo.png" 
                alt="GrayAmigurumis Logo"
                className="h-full w-full object-contain aspect-square rounded-full"
                onError={(e) => { 
                  const target = e.currentTarget;
                  target.src = 'https://placehold.co/48x48/FFF9F5/4A5568?text=GA'; 
                }}
              />
            </motion.div>
            <span className="font-heading text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-sm" style={{textShadow: '1px 1px 2px rgba(74, 85, 104, 0.5)'}}>
              GrayAmigurumis
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

          {/* WhatsApp Button - Desktop and Mobile */}
          <div className="flex items-center gap-3">
            <motion.a 
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesan%20tus%20amigurumis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Contactar por WhatsApp"
              title="Contactar por WhatsApp"
              whileHover={animationVariants.heartbeat}
              style={{ backgroundColor: '#25D366' }}
            >
              <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-7 h-7" />
            </motion.a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-3xl text-white p-2 rounded-md hover:bg-white/20 transition"
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
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

