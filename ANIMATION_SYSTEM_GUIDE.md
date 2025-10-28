# 🎨 Sistema Completo de Animaciones - Gray Amigurumis

## 📋 Índice

1. [Descripción General](#descripción-general)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [Guía de Uso por Componente](#guía-de-uso-por-componente)
4. [Referencia Completa de Animaciones](#referencia-completa-de-animaciones)
5. [Ejemplos Prácticos](#ejemplos-prácticos)
6. [Performance y Optimización](#performance-y-optimización)

---

## Descripción General

Este sistema de animaciones está **100% optimizado para Framer Motion** y bypasea completamente el optimizador CSS de Tailwind v4. Incluye **13 sistemas de animación refinados** del demo original de Gemini Canvas, recreados de forma optimizada para React.

### Ventajas del Sistema

- ✅ **Bypasea Tailwind CSS optimizer** - Sin duraciones de 0s o 1e-05s
- ⚡ **Aceleración GPU** - Performance optimizada
- 🎯 **Type-safe** - Completamente tipado con TypeScript
- 🧩 **Modular** - Usa solo lo que necesitas
- 📱 **Responsive** - Funciona en todos los dispositivos
- 🎨 **Personalizable** - Fácil de ajustar duraciones y easings

---

## Instalación y Configuración

### Prerrequisitos

```bash
npm install framer-motion
```

### Importar en Componentes

```typescript
import { motion } from "framer-motion";
import {
  // Importa solo las variantes que necesites
  productCardVariants,
  whatsappButtonVariants,
  floatAnimationVariants,
  // ... etc
} from "@/hooks/useAnimations";
```

---

## Guía de Uso por Componente

### 1. Tarjetas de Producto - Gentle Lift

**Efecto Visual**: La tarjeta se eleva suavemente (-8px) y escala (1.02x) al hover. La imagen interna hace zoom, el título cambia de color, y el precio rebota.

**Uso en Componente**:

```tsx
import { motion } from "framer-motion";
import {
  productCardVariants,
  productCardImageVariants,
  productCardTitleVariants,
  productCardPriceVariants,
} from "@/hooks/useAnimations";

function ProductCard({ product }) {
  return (
    <motion.div
      className="producto-card"
      variants={productCardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      {/* Imagen con zoom */}
      <motion.img
        src={product.image}
        alt={product.name}
        variants={productCardImageVariants}
      />
      
      {/* Título con cambio de color */}
      <motion.h3 variants={productCardTitleVariants}>
        {product.name}
      </motion.h3>
      
      {/* Precio con bounce */}
      <motion.p className="precio" variants={productCardPriceVariants}>
        ${product.price}
      </motion.p>
      
      {/* Botones aquí */}
    </motion.div>
  );
}
```

**Variables CSS necesarias**:
```css
:root {
  --color-marron: #8B6F47;
  --color-coral: #E68B6F;
  --color-rosa-boton: #E91E63;
}
```

---

### 2. Botón WhatsApp - Heartbeat Pulse

**Efecto Visual**: El botón hace un "latido" continuo (scale 1.05 → 1.08 → 1.05) en hover. El ícono salta y rota.

**Uso Básico**:

```tsx
import { motion } from "framer-motion";
import {
  whatsappButtonVariants,
  whatsappIconVariants,
} from "@/hooks/useAnimations";

function WhatsAppButton({ phoneNumber, message }) {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="btn-whatsapp"
      variants={whatsappButtonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.span variants={whatsappIconVariants}>💬</motion.span>
      Contactar por WhatsApp
    </motion.a>
  );
}
```

**Con Ripple Effect (Avanzado)**:

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  whatsappButtonVariants,
  whatsappRippleVariants,
} from "@/hooks/useAnimations";

function WhatsAppButtonWithRipple({ phoneNumber, message }) {
  const [ripple, setRipple] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="btn-whatsapp"
      style={{ position: "relative", overflow: "hidden" }}
      variants={whatsappButtonVariants}
      initial="initial"
      whileHover="hover"
      onTap={() => setRipple(true)}
      onAnimationComplete={() => setRipple(false)}
    >
      <AnimatePresence>
        {ripple && (
          <motion.span
            className="ripple"
            variants={whatsappRippleVariants}
            initial="initial"
            animate="tap"
            exit="initial"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
      💬 Contactar
    </motion.a>
  );
}
```

---

### 3. Botón Comprar - Soft Fill

**Efecto Visual**: Un fondo rosado se desliza desde la izquierda (width 0% → 100%) en hover, mientras el texto cambia a blanco.

**Uso con Pseudo-elemento Simulado**:

```tsx
import { motion } from "framer-motion";
import {
  buyButtonVariants,
  buyButtonFillVariants,
  buyButtonIconVariants,
} from "@/hooks/useAnimations";

function BuyButton({ onClick, disabled }) {
  return (
    <motion.button
      className="btn-comprar"
      style={{ position: "relative", overflow: "hidden" }}
      variants={buyButtonVariants}
      initial="initial"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
    >
      {/* Pseudo-elemento de relleno */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "var(--color-rosa-boton)",
          zIndex: -1,
        }}
        variants={buyButtonFillVariants}
        initial="initial"
        whileHover="hover"
      />
      
      {/* Texto del botón */}
      <span style={{ position: "relative", zIndex: 1 }}>
        Comprar
      </span>
      
      {/* Ícono animado */}
      <motion.span variants={buyButtonIconVariants}>💳</motion.span>
    </motion.button>
  );
}
```

**CSS necesario**:

```css
.btn-comprar {
  background: transparent;
  color: var(--color-rosa-boton);
  border: 2px solid var(--color-rosa-boton);
  padding: 10px 20px;
  border-radius: 24px;
  font-weight: 550;
  cursor: pointer;
  transition: color 0.6s ease;
}

.btn-comprar:hover {
  color: white;
}

.btn-comprar:disabled {
  background-color: #E0E0E0;
  color: #9E9E9E;
  border-color: #E0E0E0;
  cursor: not-allowed;
}
```

---

### 4. Botón Generar - Gentle Bounce

**Efecto Visual**: El botón "salta" hacia arriba (-4px) con un ease bounce en hover, y se ilumina (brightness 1.1).

**Uso Básico**:

```tsx
import { motion } from "framer-motion";
import { generateButtonVariants } from "@/hooks/useAnimations";

function GenerateButton({ onClick, loading }) {
  return (
    <motion.button
      className="btn-generar"
      variants={generateButtonVariants}
      initial="initial"
      whileHover={!loading ? "hover" : undefined}
      whileTap={!loading ? "tap" : undefined}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Generando..." : "Generar Descripción"}
    </motion.button>
  );
}
```

**Con Loading Spinner**:

```tsx
import { motion } from "framer-motion";
import {
  generateButtonVariants,
  buttonSpinnerVariants,
} from "@/hooks/useAnimations";

function GenerateButtonWithSpinner({ onClick, loading }) {
  return (
    <motion.button
      className="btn-generar"
      style={{ position: "relative" }}
      variants={generateButtonVariants}
      initial="initial"
      whileHover={!loading ? "hover" : undefined}
      whileTap={!loading ? "tap" : undefined}
      onClick={onClick}
      disabled={loading}
    >
      Generar Descripción
      
      {loading && (
        <motion.div
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            width: "16px",
            height: "16px",
            border: "2px solid white",
            borderTopColor: "transparent",
            borderRadius: "50%",
            marginTop: "-8px",
          }}
          variants={buttonSpinnerVariants}
          initial="initial"
          animate="animate"
        />
      )}
    </motion.button>
  );
}
```

---

### 5. Filtros de Categoría - Smooth Transition

**Efecto Visual**: Los botones se elevan (-2px) y escalan (1.03x) en hover. Al activarse, escalan a 1.05x y muestran una animación de pulso.

**Uso en Componente**:

```tsx
import { motion } from "framer-motion";
import {
  categoryButtonVariants,
  categoryPulseVariants,
} from "@/hooks/useAnimations";

function CategoryFilters({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="categorias">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            className={`categoria-btn ${isActive ? "active" : ""}`}
            variants={categoryButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={isActive ? "active" : "initial"}
            onClick={() => setActiveCategory(category.id)}
          >
            {/* Animación de pulso solo cuando se activa */}
            {isActive && (
              <motion.div
                variants={categoryPulseVariants}
                initial="initial"
                animate="animate"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  border: "2px solid currentColor",
                  opacity: 0.5,
                }}
              />
            )}
            {category.name}
          </motion.button>
        );
      })}
    </div>
  );
}
```

---

### 6. Inputs de Formulario - Stitch Border

**Efecto Visual**: Al hacer focus, el borde cambia de color a teal y tiene un efecto de "pulsación" que simula el borde "tejido".

**Uso en Componente**:

```tsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  inputVariants,
  inputBorderPulseVariants,
} from "@/hooks/useAnimations";

function StyledInput({ placeholder, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <motion.input
        type="text"
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variants={inputVariants}
        initial="initial"
        animate={isFocused ? "focus" : "initial"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      
      {/* Efecto de pulsación en el borde */}
      {isFocused && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            border: "2px solid rgb(50, 128, 141)",
            borderRadius: "8px",
            pointerEvents: "none",
          }}
          variants={inputBorderPulseVariants}
          initial="initial"
          animate="focus"
        />
      )}
    </div>
  );
}
```

---

### 7. Tarjetas de Testimonios - Gentle Hover

**Efecto Visual**: La tarjeta se eleva suavemente (-4px) en hover. La comilla decorativa aumenta su opacidad de 0.3 a 0.6.

**Uso en Componente**:

```tsx
import { motion } from "framer-motion";
import {
  testimonialCardVariants,
  testimonialQuoteVariants,
} from "@/hooks/useAnimations";

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      className="testimonio-card"
      style={{ position: "relative" }}
      variants={testimonialCardVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Comilla decorativa */}
      <motion.div
        style={{
          fontSize: "48px",
          color: "var(--color-rosa-principal)",
          lineHeight: 0,
        }}
        variants={testimonialQuoteVariants}
      >
        "
      </motion.div>
      
      <p>{testimonial.text}</p>
      <p><strong>{testimonial.author}</strong></p>
    </motion.div>
  );
}
```

---

### 8. Loading Spinner - Gentle Spin

**Efecto Visual**: Un círculo con borde superior coral que gira continuamente con un ease personalizado.

**Uso en Componente**:

```tsx
import { motion } from "framer-motion";
import { loadingSpinnerVariants } from "@/hooks/useAnimations";

function LoadingSpinner() {
  return (
    <motion.div
      className="loading-spinner"
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid rgba(230, 139, 111, 0.2)",
        borderTopColor: "var(--color-coral)",
        borderRadius: "50%",
        margin: "20px auto",
      }}
      variants={loadingSpinnerVariants}
      initial="initial"
      animate="animate"
    />
  );
}
```

---

### 9. Notificaciones Toast - Success

**Efecto Visual**: El toast se desliza desde la derecha (x: 400px → 0), aparece con un pulso, y el ícono check rebota al entrar.

**Uso con AnimatePresence**:

```tsx
import { AnimatePresence, motion } from "framer-motion";
import {
  toastVariants,
  toastSuccessPulseVariants,
  toastCheckVariants,
} from "@/hooks/useAnimations";

function ToastNotification({ show, message, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="toast-success"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "var(--color-menta)",
            color: "white",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            zIndex: 10000,
          }}
          variants={toastVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div variants={toastSuccessPulseVariants}>
            <motion.span
              variants={toastCheckVariants}
              style={{ marginRight: "8px", fontSize: "20px" }}
            >
              ✓
            </motion.span>
            {message}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Uso en App**:

```tsx
function App() {
  const [showToast, setShowToast] = useState(false);
  
  const handleSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  return (
    <>
      <button onClick={handleSuccess}>Mostrar Toast</button>
      <ToastNotification
        show={showToast}
        message="¡Operación exitosa!"
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
```

---

### 10. Animaciones de Scroll - Fade In

**Efecto Visual**: Los elementos aparecen desde abajo (y: 30px → 0) con fade in al entrar en el viewport. Delay escalonado para efecto cascada.

**Uso Básico**:

```tsx
import { motion } from "framer-motion";
import {
  scrollFadeInVariants,
  useScrollAnimation,
} from "@/hooks/useAnimations";

function ProductGrid({ products }) {
  return (
    <div className="productos-grid">
      {products.map((product, index) => {
        const scrollProps = useScrollAnimation(index);
        
        return (
          <motion.div
            key={product.id}
            className="producto-card fade-in-scroll"
            variants={scrollFadeInVariants}
            {...scrollProps}
          >
            {/* Contenido del producto */}
          </motion.div>
        );
      })}
    </div>
  );
}
```

**Uso Avanzado con Configuración Personalizada**:

```tsx
import { motion } from "framer-motion";
import {
  scrollFadeInVariants,
  useCustomScrollAnimation,
} from "@/hooks/useAnimations";

function CustomSection() {
  const scrollProps = useCustomScrollAnimation({
    once: true,        // Solo animar una vez
    amount: 0.3,       // 30% del elemento visible para disparar
    margin: "0px 0px -100px 0px", // Margen del viewport
    delay: 0.5,        // Delay de 500ms
  });
  
  return (
    <motion.section
      variants={scrollFadeInVariants}
      {...scrollProps}
    >
      {/* Contenido */}
    </motion.section>
  );
}
```

---

### 11. Sección Hero - Fade In Up

**Efecto Visual**: Título, subtítulo y CTA aparecen secuencialmente desde abajo con delays de 0s, 0.2s, y 0.4s respectivamente.

**Uso en Componente Hero**:

```tsx
import { motion } from "framer-motion";
import {
  heroTitleVariants,
  heroSubtitleVariants,
  heroCtaVariants,
} from "@/hooks/useAnimations";

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        variants={heroTitleVariants}
        initial="initial"
        animate="animate"
      >
        Hecho a mano, con el corazón
      </motion.h1>
      
      <motion.p
        className="hero-subtitle"
        variants={heroSubtitleVariants}
        initial="initial"
        animate="animate"
      >
        Tus personajes favoritos en crochet
      </motion.p>
      
      <motion.button
        className="hero-cta"
        variants={heroCtaVariants}
        initial="initial"
        animate="animate"
      >
        Ver creaciones
      </motion.button>
    </section>
  );
}
```

---

### 12. Animación Gentle Float - Flotación Suave

**Efecto Visual**: 
- `floatAnimation`: Logo flota verticalmente (-8px) y rota (5°) en 3s infinito
- `floatAnimationSlow`: Container flota verticalmente (-6px) en 8s infinito

**Uso para Logo**:

```tsx
import { motion } from "framer-motion";
import { floatAnimationVariants } from "@/hooks/useAnimations";

function Logo() {
  return (
    <motion.div
      className="logo float-animation"
      variants={floatAnimationVariants}
      initial="initial"
      animate="animate"
    >
      <img src="/logo.png" alt="Logo" />
    </motion.div>
  );
}
```

**Uso para Hero Container**:

```tsx
import { motion } from "framer-motion";
import { floatAnimationSlowVariants } from "@/hooks/useAnimations";

function Hero() {
  return (
    <motion.div
      className="hero-container float-animation-slow"
      variants={floatAnimationSlowVariants}
      initial="initial"
      animate="animate"
    >
      {/* Contenido del hero */}
    </motion.div>
  );
}
```

---

### 13. Optimización de Performance

**Uso Automático**: Todas las variantes ya incluyen optimización GPU.

**Uso Manual para Elementos Custom**:

```tsx
import { motion } from "framer-motion";
import { gpuAcceleratedConfig } from "@/hooks/useAnimations";

function CustomAnimatedElement() {
  return (
    <motion.div
      {...gpuAcceleratedConfig}
      animate={{ x: 100 }}
    >
      Elemento optimizado
    </motion.div>
  );
}
```

---

## Referencia Completa de Animaciones

### Tabla de Referencia Rápida

| # | Nombre | Variante Principal | Trigger | Duración | Ease |
|---|--------|-------------------|---------|----------|------|
| 1 | Gentle Lift | `productCardVariants` | hover | 0.6s | natural |
| 2 | Heartbeat Pulse | `whatsappButtonVariants` | hover | 1.5s | easeInOut |
| 3 | Soft Fill | `buyButtonFillVariants` | hover | 0.7s | natural |
| 4 | Gentle Bounce | `generateButtonVariants` | hover | 0.45s | bounce |
| 5 | Smooth Transition | `categoryButtonVariants` | hover/click | 0.45s | soft |
| 6 | Stitch Border | `inputVariants` | focus | 0.45s | soft |
| 7 | Gentle Hover | `testimonialCardVariants` | hover | 0.6s | natural |
| 8 | Gentle Spin | `loadingSpinnerVariants` | auto | 1.2s | custom |
| 9 | Success Toast | `toastVariants` | mount | 0.6s | natural |
| 10 | Fade In Scroll | `scrollFadeInVariants` | scroll | 0.8s | natural |
| 11 | Fade In Up | `heroTitleVariants` | mount | 0.8s | natural |
| 12 | Gentle Float | `floatAnimationVariants` | auto | 3s/8s | easeInOut |
| 13 | GPU Acceleration | `gpuAcceleratedConfig` | n/a | n/a | n/a |

---

## Ejemplos Prácticos

### Ejemplo Completo: Tarjeta de Producto

```tsx
import { motion } from "framer-motion";
import {
  productCardVariants,
  productCardImageVariants,
  productCardTitleVariants,
  productCardPriceVariants,
  whatsappButtonVariants,
  buyButtonVariants,
  buyButtonFillVariants,
  scrollFadeInVariants,
  useScrollAnimation,
} from "@/hooks/useAnimations";

function ProductCard({ product, index }) {
  const scrollProps = useScrollAnimation(index);

  return (
    <motion.div
      className="producto-card fade-in-scroll"
      variants={productCardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...scrollProps}
    >
      {/* Imagen */}
      <motion.img
        src={product.image}
        alt={product.name}
        variants={productCardImageVariants}
      />
      
      {/* Título */}
      <motion.h3 variants={productCardTitleVariants}>
        {product.name}
      </motion.h3>
      
      {/* Precio */}
      <motion.p className="precio" variants={productCardPriceVariants}>
        ${product.price}
      </motion.p>
      
      {/* Botones */}
      <div className="botones">
        <motion.a
          href={`https://wa.me/...`}
          className="btn-whatsapp"
          variants={whatsappButtonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          💬 Consultar
        </motion.a>
        
        <motion.button
          className="btn-comprar"
          style={{ position: "relative", overflow: "hidden" }}
          variants={buyButtonVariants}
          whileTap="tap"
        >
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--color-rosa-boton)",
              zIndex: -1,
            }}
            variants={buyButtonFillVariants}
            initial="initial"
            whileHover="hover"
          />
          Comprar 💳
        </motion.button>
      </div>
    </motion.div>
  );
}
```

---

## Performance y Optimización

### Best Practices

1. **Usa `gpuAcceleratedConfig`** para elementos que se animan frecuentemente
2. **Limita animaciones infinitas** a elementos visibles (usa `IntersectionObserver` si es necesario)
3. **Usa `AnimatePresence`** para animaciones de entrada/salida
4. **Prefiere `whileHover`/`whileTap`** sobre event handlers manuales
5. **Agrupa animaciones relacionadas** en un solo `motion` component

### Debugging

```tsx
// Ver timing de animaciones
<motion.div
  animate={{ x: 100 }}
  onAnimationStart={() => console.log("Inicio")}
  onAnimationComplete={() => console.log("Fin")}
/>
```

### Desactivar Animaciones para Tests

```tsx
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <MotionConfig reducedMotion="always">
      {/* Todas las animaciones desactivadas */}
    </MotionConfig>
  );
}
```

---

## Recursos Adicionales

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Easing Functions Cheatsheet](https://easings.net/)
- [Animation Performance Guide](https://web.dev/animations/)

---

**Última actualización**: 2025-10-28  
**Versión del sistema**: 2.0.0  
**Autor**: Gray Amigurumis Team
