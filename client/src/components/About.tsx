import { motion } from "framer-motion";
import { animationVariants } from "@/hooks/useAnimations";
import owner from '@/assets/img/about-owner.jpg';

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
              className="relative aspect-[4/3] min-h-[220px] overflow-hidden rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md border-4 border-white"
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
            <p
              className="text-base md:text-lg leading-relaxed mb-4 text-balance"
              style={{ color: "#4A5568" }}
            >
              ¡Hola! Soy la creadora detrás de GrayAmigurumis. Como <strong>emprendedora regional</strong>, mi pasión es dar vida a tus personajes e ideas a través del crochet. Cada pieza es una confección única, hecha a pedido con materiales de la más alta calidad.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-balance" style={{ color: "#4A5568" }}>
              Desde adorables animalitos hasta complejos personajes, me especializo en <strong>pedidos personalizados</strong> para crear ese regalo o auto-regalo perfecto que estás buscando. ¡Gracias por apoyar mi emprendimiento!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
