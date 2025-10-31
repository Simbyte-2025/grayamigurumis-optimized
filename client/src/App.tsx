import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Code-split Chatbot para reducir bundle inicial
const Chatbot = lazy(() => import("./components/Chatbot"));

function App() {
  // Scroll animations handled by Framer Motion (whileInView)
  // Animations applied directly in real components (no showcase needed)

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen">
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
            
            {/* Chatbot flotante - lazy loaded */}
            <Suspense fallback={null}>
              <Chatbot />
            </Suspense>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
