import { motion } from "framer-motion";
import { animationVariants } from "@/hooks/useAnimations";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="section-paper bg-hero relative flex items-center justify-center py-24 md:py-32 bg-cover bg-center"
      style={{
        minHeight: '65vh',
        backgroundImage: `url('/assets/img/placeholder-4x5.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div 
          className="inline-block p-6 sm:p-8 md:p-12 rounded-xl shadow-xl max-w-3xl"
          style={{backgroundColor: 'rgba(255, 254, 249, 0.85)', backdropFilter: 'blur(5px)'}}
          initial={animationVariants.floatAnimationSlow.initial}
          animate={animationVariants.floatAnimationSlow.animate}
        >
          <motion.h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl mb-4 leading-tight" 
            style={{color: '#4A5568'}}
            variants={animationVariants.heroTitle}
            initial="initial"
            animate="animate"
          >
            Hecho a mano, con el corazón
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8" 
            style={{color: 'rgba(74, 85, 104, 0.9)'}}
            variants={animationVariants.heroSubtitle}
            initial="initial"
            animate="animate"
          >
            Tus personajes favoritos en crochet
          </motion.p>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{color: '#4A5568'}}>
            Amigurumis y accesorios únicos, confeccionados a pedido con toda la dedicación de una emprendedora regional.
          </p>
          <motion.button
            onClick={() => scrollToSection('tienda')}
            className="font-bold py-3 px-8 rounded-full text-base sm:text-lg"
            style={{backgroundColor: '#F4C7D4', color: '#4A5568'}}
            variants={animationVariants.heroCta}
            initial="initial"
            animate="animate"
          >
            Ver creaciones
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

