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

