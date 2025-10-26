import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import IdeaGenerator from "./components/IdeaGenerator";
import Catalog from "./components/Catalog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all fade-in-scroll elements
    const targets = document.querySelectorAll('.fade-in-scroll');
    targets.forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      targets.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []); // Empty array ensures this runs once on mount

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
              <IdeaGenerator />
              <Catalog />
              <Testimonials />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

