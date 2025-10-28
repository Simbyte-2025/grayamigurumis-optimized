/**
 * ============================================================================
 * SISTEMA COMPLETO DE ANIMACIONES - GRAY AMIGURUMIS
 * ============================================================================
 * 
 * Sistema optimizado de animaciones usando Framer Motion para bypasear
 * completamente el optimizador CSS de Tailwind v4.
 * 
 * Incluye 13 sistemas de animación refinados del demo original.
 * 
 * @author Gray Amigurumis Team
 * @version 2.0.0
 */

import { Variants, Transition } from "framer-motion";

// ============================================================================
// CONSTANTES DE EASING (Curvas de aceleración)
// ============================================================================

export const EASING = {
  // Natural - Suave y orgánico (como CSS cubic-bezier(0.16, 1, 0.3, 1))
  natural: [0.16, 1, 0.3, 1] as const,
  
  // Bounce - Rebote elástico (como CSS cubic-bezier(0.34, 1.56, 0.64, 1))
  bounce: [0.34, 1.56, 0.64, 1] as const,
  
  // Soft - Suave y sutil (como CSS cubic-bezier(0.4, 0, 0.2, 1))
  soft: [0.4, 0, 0.2, 1] as const,
  
  // Elastic - Muy elástico (como CSS cubic-bezier(0.68, -0.55, 0.265, 1.55))
  elastic: [0.68, -0.55, 0.265, 1.55] as const,
} as const;

// ============================================================================
// CONSTANTES DE DURACIÓN
// ============================================================================

export const DURATION = {
  instant: 0.2,   // 200ms
  quick: 0.45,    // 450ms (referencia CSS)
  smooth: 0.6,    // 600ms (referencia CSS)
  gentle: 0.7,    // 700ms (referencia CSS)
  slow: 0.8,      // 800ms
  heartbeat: 1.5, // 1500ms
  float: 3,       // 3000ms
  floatSlow: 8,   // 8000ms
  
  // Duraciones ajustadas para Framer Motion (del Showcase Demo funcional)
  framerQuick: 0.65,    // +44% para compensar velocidad de Framer Motion
  framerSmooth: 0.85,   // +42% para suavidad real
  framerGentle: 0.95,   // +36% para zoom lento
  framerSlow: 1.1,      // +38% para animaciones lentas
} as const;

// ============================================================================
// 1. TARJETAS DE PRODUCTO - GENTLE LIFT
// ============================================================================

export const productCardVariants: Variants = {
  initial: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: DURATION.framerSmooth, // 0.85s - Ajustado para Framer Motion
      ease: EASING.natural,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: DURATION.instant,
    },
  },
};

export const productCardImageVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: DURATION.framerGentle, // 0.95s - Zoom lento y suave
      ease: EASING.bounce,
    },
  },
};

export const productCardTitleVariants: Variants = {
  initial: { color: "#8B6F47" }, // var(--color-marron)
  hover: {
    color: "#E68B6F", // var(--color-coral)
    transition: {
      duration: DURATION.framerQuick, // 0.65s - Cambio de color suave
    },
  },
};

export const productCardPriceVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: {
      duration: DURATION.framerQuick, // 0.65s - Bounce del precio
      ease: EASING.elastic,
    },
  },
};

// ============================================================================
// 2. BOTÓN WHATSAPP - HEARTBEAT PULSE
// ============================================================================

export const whatsappButtonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1.05, 1.08, 1.05],
    transition: {
      duration: DURATION.heartbeat,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const whatsappIconVariants: Variants = {
  initial: { y: 0, rotate: 0 },
  hover: {
    y: -2,
    rotate: 5,
    transition: {
      duration: DURATION.quick,
      ease: EASING.bounce,
    },
  },
};

// Variante con ripple effect para el pseudo-elemento
export const whatsappRippleVariants: Variants = {
  initial: { scale: 0, opacity: 0.5 },
  tap: {
    scale: 2.5,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ============================================================================
// 3. BOTÓN COMPRAR - SOFT FILL
// ============================================================================

export const buyButtonVariants: Variants = {
  initial: { scale: 1 },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.1,
    },
  },
};

// Variante para el pseudo-elemento de relleno
export const buyButtonFillVariants: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: DURATION.gentle,
      ease: EASING.natural,
    },
  },
};

export const buyButtonIconVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: 3,
    transition: {
      duration: DURATION.quick,
      ease: EASING.elastic,
    },
  },
};

// ============================================================================
// 4. BOTÓN GENERAR - GENTLE BOUNCE
// ============================================================================

export const generateButtonVariants: Variants = {
  initial: { y: 0, filter: "brightness(1)" },
  hover: {
    y: -4,
    filter: "brightness(1.1)",
    transition: {
      duration: DURATION.quick,
      ease: EASING.bounce,
    },
  },
  tap: {
    y: -1,
    transition: {
      duration: 0.1,
    },
  },
};

// Loading spinner para botón
export const buttonSpinnerVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ============================================================================
// 5. FILTROS DE CATEGORÍA - SMOOTH TRANSITION
// ============================================================================

export const categoryButtonVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    y: -2,
    scale: 1.03,
    transition: {
      duration: DURATION.framerQuick, // 0.65s - Progresivo y suave
      ease: EASING.soft,
    },
  },
  active: {
    scale: 1.05,
    transition: {
      duration: DURATION.framerQuick, // 0.65s consistente
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Animación de pulso cuando se selecciona
export const categoryPulseVariants: Variants = {
  initial: { scale: 1.05 },
  animate: {
    scale: [1.05, 1.1, 1.05],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// ============================================================================
// 6. INPUTS DE FORMULARIO - STITCH BORDER
// ============================================================================

// Nota: Esta animación CSS (border-style: dashed -> solid) 
// es difícil de replicar en Framer Motion puro.
// Usaremos una combinación de escala y color para simular el efecto "tejido"

export const inputVariants: Variants = {
  initial: { 
    scale: 1,
    borderColor: "rgba(200, 139, 119, 0.3)",
  },
  focus: {
    scale: 1.01,
    borderColor: "rgb(50, 128, 141)", // var(--color-teal)
    transition: {
      duration: DURATION.quick,
      ease: EASING.soft,
    },
  },
};

// Animación de "pulsación" en el borde al hacer focus
export const inputBorderPulseVariants: Variants = {
  initial: { scale: 1, opacity: 0 },
  focus: {
    scale: [1, 1.03, 1],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ============================================================================
// 7. TARJETAS DE TESTIMONIOS - GENTLE HOVER
// ============================================================================

export const testimonialCardVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: DURATION.smooth,
      ease: EASING.natural,
    },
  },
};

// Animación de comillas decorativas
export const testimonialQuoteVariants: Variants = {
  initial: { opacity: 0.3 },
  hover: {
    opacity: 0.6,
    transition: {
      duration: DURATION.quick,
    },
  },
};

// ============================================================================
// 8. LOADING SPINNER - GENTLE SPIN
// ============================================================================

export const loadingSpinnerVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: [0.5, 0, 0.5, 1], // cubic-bezier(0.5, 0, 0.5, 1)
    },
  },
};

// ============================================================================
// 9. NOTIFICACIONES TOAST - SUCCESS
// ============================================================================

export const toastVariants: Variants = {
  initial: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.smooth,
      ease: EASING.natural,
    },
  },
  exit: {
    x: 400,
    opacity: 0,
    transition: {
      duration: DURATION.smooth,
      ease: EASING.natural,
    },
  },
};

// Pulso de éxito cuando aparece
export const toastSuccessPulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Icono check con bounce
export const toastCheckVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASING.elastic,
    },
  },
};

// ============================================================================
// 10. ANIMACIONES DE SCROLL - FADE IN
// ============================================================================

export const scrollFadeInVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.natural,
    }
  }
};

// Hook para animaciones de scroll con delays escalonados
export const useScrollAnimation = (index: number = 0) => {
  return {
    initial: "initial",
    whileInView: "animate",
    viewport: { 
      once: true, 
      amount: 0.1, 
      margin: "0px 0px -50px 0px" 
    },
    transition: {
      delay: index * 0.1, // 100ms por cada elemento
    }
  };
};

// ============================================================================
// 11. SECCIÓN HERO - FADE IN UP
// ============================================================================

export const heroTitleVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASING.natural,
    },
  },
};

export const heroSubtitleVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: EASING.natural,
    },
  },
};

export const heroCtaVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: EASING.natural,
    },
  },
};

// ============================================================================
// 12. ANIMACIÓN GENTLE FLOAT - FLOTACIÓN SUAVE
// ============================================================================

export const floatAnimationVariants: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-8, 0, -8],
    rotate: [5, 0, 5],
    transition: {
      duration: DURATION.float,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatAnimationSlowVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-6, 0, -6],
    transition: {
      duration: DURATION.floatSlow,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================================================
// 13. OPTIMIZACIÓN DE PERFORMANCE
// ============================================================================

// Configuración común para todas las animaciones con aceleración GPU
export const gpuAcceleratedConfig = {
  style: {
    willChange: "transform",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden" as const,
    WebkitBackfaceVisibility: "hidden" as const,
  },
};

// ============================================================================
// UTILIDADES Y COMPOSICIONES
// ============================================================================

/**
 * Combina múltiples variantes en una sola
 */
export const combineVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({ ...acc, ...variant }), {});
};

/**
 * Crea una variante con delay personalizado
 */
export const withDelay = (variant: Variants, delay: number): Variants => {
  const newVariant: Variants = {};
  
  Object.keys(variant).forEach((key) => {
    const value = variant[key];
    if (typeof value === 'object' && value !== null && 'transition' in value) {
      newVariant[key] = {
        ...value,
        transition: {
          ...(value.transition as Transition),
          delay,
        },
      };
    } else {
      newVariant[key] = value;
    }
  });
  
  return newVariant;
};

/**
 * Hook para animaciones de scroll con configuración personalizada
 */
export const useCustomScrollAnimation = (config?: {
  once?: boolean;
  amount?: number;
  margin?: string;
  delay?: number;
}) => {
  const {
    once = true,
    amount = 0.1,
    margin = "0px 0px -50px 0px",
    delay = 0,
  } = config || {};

  return {
    initial: "initial",
    whileInView: "animate",
    viewport: { once, amount, margin },
    transition: delay > 0 ? { delay } : undefined,
  };
};

// ============================================================================
// EXPORTS LEGACY (Para compatibilidad con código existente)
// ============================================================================

export const animationVariants = {
  floatAnimation: floatAnimationVariants,
  floatAnimationSlow: floatAnimationSlowVariants,
  fadeInUp: scrollFadeInVariants,
  heroTitle: heroTitleVariants,
  heroSubtitle: heroSubtitleVariants,
  heroCta: heroCtaVariants,
  fadeInScroll: scrollFadeInVariants,
  heartbeat: whatsappButtonVariants.hover,
};
