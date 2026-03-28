import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { animationVariants, useScrollAnimation } from "@/hooks/useAnimations";

const testimonials = [
  {
    text: "¡Mi Deadpool tejido es simplemente perfecto! La calidad es de otro nivel, lleno de detalles que solo un verdadero fan notaría.",
    author: "Carlos M.",
    rating: 5,
  },
  {
    text: "Le regalé un personaje de anime a mi polola y le encantó. Se nota el cariño en cada puntada. ¡Excelente trabajo!",
    author: "Valentina G.",
    rating: 5,
  },
  {
    text: "Tengo varios de sus amigurumis y son todos preciosos. La atención es súper personalizada y amable. ¡Totalmente recomendado!",
    author: "Francisco A.",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollAnimationProps = useScrollAnimation();

  return (
    <section id="testimonios" className="section-paper bg-quotes py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-12 md:mb-16 text-gray-600">
          Lo que dicen los fans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonio-card"
              variants={animationVariants.fadeInScroll}
              {...scrollAnimationProps}
            >
              {/* Star rating */}
              <div
                className="flex justify-center gap-1 mb-4"
                aria-label={`${testimonial.rating} de 5 estrellas`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <p className="text-gray-600 font-bold">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
