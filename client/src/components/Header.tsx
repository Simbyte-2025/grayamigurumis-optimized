import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import { animationVariants } from "@/hooks/useAnimations";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "56992834268";
  const { theme, toggleTheme, switchable } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusables = menu.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusables[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="h-16 sm:h-18 md:h-20 sticky top-0 z-50 shadow-md bg-[rgba(255,192,203,0.85)] backdrop-blur-md px-3 sm:px-4">
        <div className="container mx-auto h-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 sm:gap-4">
            <motion.div
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full border-2 border-white/50 flex items-center justify-center inline-block"
              style={{ backgroundColor: "#FFF9F5" }}
              initial={animationVariants.floatAnimation.initial}
              animate={animationVariants.floatAnimation.animate}
            >
              <img
                src="/logo.webp"
                alt="GrayAmigurumis Logo"
                className="h-full w-full object-contain pointer-events-none select-none will-change-transform"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://placehold.co/48x48/FFF9F5/4A5568?text=GA";
                }}
              />
            </motion.div>
            <span
              className="font-heading text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-sm"
              style={{ textShadow: "1px 1px 2px rgba(74, 85, 104, 0.5)" }}
            >
              GrayAmigurumis
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {(["inicio", "tienda", "nosotros", "contacto"] as const).map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-base lg:text-lg font-semibold text-gray-600 transition hover:opacity-75 capitalize"
              >
                {id === "nosotros" ? "Nosotros" : id === "contacto" ? "Contacto" : id === "tienda" ? "Tienda" : "Inicio"}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark mode toggle */}
            {switchable && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 hover:bg-white/30 transition"
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesan%20tus%20amigurumis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Contactar por WhatsApp"
              title="Contactar por WhatsApp"
              whileHover={animationVariants.heartbeat}
              style={{ backgroundColor: "#25D366" }}
            >
              <img
                src="/whatsapp-logo.webp"
                alt="WhatsApp"
                className="w-7 h-7 object-contain aspect-square"
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white p-2 rounded-md hover:bg-white/20 transition"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 shadow-lg p-6 md:hidden transition-transform duration-300 ease-in-out z-50 bg-[rgba(255,192,203,0.95)] backdrop-blur-md ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-md hover:bg-black/10 transition text-gray-600"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 id="mobile-menu-title" className="sr-only">
          Menú Principal
        </h2>

        <nav className="flex flex-col space-y-5 mt-16">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-xl font-semibold text-left py-1 text-gray-600 hover:opacity-75 transition"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("tienda")}
            className="text-xl font-semibold text-left py-1 text-gray-600 hover:opacity-75 transition"
          >
            Tienda
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-xl font-semibold text-left py-1 text-gray-600 hover:opacity-75 transition"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-xl font-semibold text-left py-1 text-gray-600 hover:opacity-75 transition"
          >
            Contacto
          </button>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesan%20tus%20amigurumis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-left py-1 text-gray-600 hover:opacity-75 transition flex items-center gap-2"
          >
            <img
              src="/whatsapp-logo.webp"
              alt=""
              className="w-7 h-7 object-contain aspect-square"
              aria-hidden="true"
            />
            WhatsApp
          </a>

          {/* Dark mode toggle in mobile menu */}
          {switchable && (
            <button
              onClick={toggleTheme}
              className="text-xl font-semibold text-left py-1 text-gray-600 hover:opacity-75 transition flex items-center gap-2"
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              {theme === "dark" ? "Modo claro" : "Modo oscuro"}
            </button>
          )}
        </nav>
      </div>
    </>
  );
}
