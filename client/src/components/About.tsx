import { motion } from "framer-motion";
import { animationVariants } from "@/hooks/useAnimations";

const OWNER_IMAGE = "/assets/img/about-owner.webp";

export default function About() {
  return (
    <section
      id="nosotros"
      className="section-paper bg-about py-16 md:py-24 -mt-px"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Retrato principal */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              className="relative aspect-square w-full min-w-[280px] max-w-[380px] sm:max-w-[420px] overflow-hidden rounded-full shadow-2xl border-4 border-white"
              style={{ backgroundColor: "#FFF9F5" }}
              initial={animationVariants.floatAnimationSlow.initial}
              animate={animationVariants.floatAnimationSlow.animate}
            >
              <img
                src={OWNER_IMAGE}
                alt="Retrato de la artesana GrayAmigurumis"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                onError={(e) => { 
                  const target = e.currentTarget;
                  target.src = 'https://placehold.co/448x448/B8D4E3/FFF9F5?text=Foto'; 
                }}
              />
            </motion.div>
          </div>

          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-5xl sm:text-6xl mb-6 md:mb-8" style={{ color: "#4A5568" }}>
              El Arte de Tejer tus Ideas
            </h2>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
              <p className="text-balance">
                ¡Hola! Soy la creadora detrás de <strong>GrayAmigurumis</strong>. Como <strong>emprendedora regional de Punta Arenas</strong>, mi pasión es dar vida a tus personajes e ideas más queridas a través del arte del crochet. 
              </p>
              
              <p className="text-balance">
                Cada pieza que confecciono es una <strong>creación única y artesanal</strong>, hecha completamente a mano con materiales de la más alta calidad. Trabajo con hilos premium y rellenos suaves que garantizan durabilidad y suavidad en cada amigurumi.
              </p>
              
              <p className="text-balance">
                Desde adorables animalitos y personajes de películas, hasta complejos diseños de anime y videojuegos, me especializo en <strong>pedidos personalizados</strong> que dan vida a tu imaginación. Ya sea para un regalo especial, decoración de tu espacio, o simplemente para consentirte, cada amigurumi lleva mi dedicación y cariño en cada puntada.
              </p>
              
              <p className="text-balance font-medium">
                ¿Tienes una idea especial? <strong>¡Conversemos!</strong> Me encanta trabajar en proyectos únicos y ayudarte a crear ese amigurumi perfecto que estás buscando.
              </p>
              
              <p className="text-balance text-sm mt-6 opacity-80">
                Gracias por apoyar el emprendimiento regional y el trabajo artesanal chileno. 💙
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
