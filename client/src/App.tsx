import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
// import IdeaGenerator from "./components/IdeaGenerator"; // Reemplazado por Chatbot flotante
import Catalog from "./components/Catalog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import AnimationShowcase from "./components/AnimationShowcase";

function App() {
  // Toggle para mostrar el showcase de animaciones
  const [showAnimationShowcase, setShowAnimationShowcase] = useState(false);
  
  // Check URL parameter for direct showcase access
  const urlParams = new URLSearchParams(window.location.search);
  const showcaseFromUrl = urlParams.get('showcase') === 'true';

  // Scroll animations handled by Framer Motion (whileInView)
  // No need for manual IntersectionObserver anymore

  // Si el showcase está activado, mostrar solo eso
  if (showAnimationShowcase || showcaseFromUrl) {
    return (
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <div className="min-h-screen" style={{ background: "#f5f5f5" }}>
              {/* Botón para volver a la app normal */}
              <div style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 9999,
              }}>
                <button
                  onClick={() => {
                    setShowAnimationShowcase(false);
                    // Limpiar URL parameter si existe
                    if (showcaseFromUrl) {
                      window.history.pushState({}, '', window.location.pathname);
                    }
                  }}
                  style={{
                    padding: "10px 20px",
                    background: "#E91E63",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 500,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  ← Volver a la App
                </button>
              </div>
              
              <AnimationShowcase />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen">
            {/* Botón flotante para acceder al showcase */}
            <div style={{
              position: "fixed",
              bottom: "80px",
              left: "20px",
              zIndex: 9999,
            }}>
              <button
                onClick={() => setShowAnimationShowcase(true)}
                style={{
                  padding: "12px",
                  background: "#E68B6F",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "56px",
                  height: "56px",
                  cursor: "pointer",
                  fontSize: "24px",
                  boxShadow: "0 4px 12px rgba(230, 139, 111, 0.4)",
                  transition: "transform 0.3s ease",
                }}
                title="Ver Showcase de Animaciones"
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                🎨
              </button>
            </div>
            
            <Header />
            <main>
              <Hero />
              <FeaturedProducts />
              <About />
              {/* <IdeaGenerator /> - Reemplazado por Chatbot flotante */}
              <Catalog />
              <Testimonials />
            </main>
            <Footer />
            
            {/* Chatbot flotante - reemplaza la sección IdeaGenerator */}
            <Chatbot />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

