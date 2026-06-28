import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
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
import MiFlowLanding from "./pages/MiFlowLanding";

// Code-split Chatbot para reducir bundle inicial
const Chatbot = lazy(() => import("./components/Chatbot"));

function GrayAmigurumisApp() {
  return (
    <ThemeProvider defaultTheme="light" switchable={true}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-white focus:text-gray-800 focus:shadow-lg"
          >
            Ir al contenido principal
          </a>
          <Header />
          <main id="main-content">
            <Hero />
            <FeaturedProducts />
            <About />
            <Catalog />
            <Testimonials />
          </main>
          <Footer />
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/mi-flow" component={MiFlowLanding} />
        <Route>
          <GrayAmigurumisApp />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
