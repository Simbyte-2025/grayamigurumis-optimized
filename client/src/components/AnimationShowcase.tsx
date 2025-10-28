/**
 * ============================================================================
 * ANIMATION SHOWCASE COMPONENT
 * ============================================================================
 * 
 * Componente de demostración que muestra todas las 13 animaciones del sistema
 * en acción. Útil para testing y como referencia de implementación.
 * 
 * @author Gray Amigurumis Team
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // 1. Product Cards
  productCardVariants,
  productCardImageVariants,
  productCardTitleVariants,
  productCardPriceVariants,
  
  // 2. WhatsApp Button
  whatsappButtonVariants,
  whatsappIconVariants,
  
  // 3. Buy Button
  buyButtonVariants,
  buyButtonFillVariants,
  buyButtonIconVariants,
  
  // 4. Generate Button
  generateButtonVariants,
  buttonSpinnerVariants,
  
  // 5. Category Filters
  categoryButtonVariants,
  categoryPulseVariants,
  
  // 6. Input Stitch Border
  inputVariants,
  inputBorderPulseVariants,
  
  // 7. Testimonial Cards
  testimonialCardVariants,
  testimonialQuoteVariants,
  
  // 8. Loading Spinner
  loadingSpinnerVariants,
  
  // 9. Toast Notifications
  toastVariants,
  toastSuccessPulseVariants,
  toastCheckVariants,
  
  // 10. Scroll Animations
  scrollFadeInVariants,
  useScrollAnimation,
  
  // 11. Hero Animations
  heroTitleVariants,
  heroSubtitleVariants,
  heroCtaVariants,
  
  // 12. Float Animations
  floatAnimationVariants,
  floatAnimationSlowVariants,
  
  // 13. GPU Acceleration
  gpuAcceleratedConfig,
} from "@/hooks/useAnimations";

export default function AnimationShowcase() {
  // States para demostraciones interactivas
  const [activeCategory, setActiveCategory] = useState("todos");
  const [inputFocused, setInputFocused] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "animalitos", name: "Animalitos" },
    { id: "personajes", name: "Personajes" },
  ];

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 2000);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        🎨 Sistema de Animaciones - Gray Amigurumis
      </h1>

      {/* ================================================================
          1. TARJETA DE PRODUCTO - GENTLE LIFT
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>1. Tarjeta de Producto - Gentle Lift</h2>
        <p>Pasa el mouse sobre la tarjeta para ver la elevación, zoom de imagen, cambio de color y bounce del precio.</p>
        
        <motion.div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "16px",
            border: "2px solid rgba(230, 139, 111, 0.2)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            maxWidth: "300px",
            margin: "20px auto",
          }}
          variants={productCardVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            style={{
              width: "100%",
              height: "200px",
              background: "#f0f0f0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            variants={productCardImageVariants}
          >
            🧸
          </motion.div>
          
          <motion.h3
            style={{
              margin: "12px 0 8px",
              fontSize: "18px",
              color: "#8B6F47",
            }}
            variants={productCardTitleVariants}
          >
            Osito Artesanal
          </motion.h3>
          
          <motion.p
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#E91E63",
              margin: "8px 0 16px",
            }}
            variants={productCardPriceVariants}
          >
            $25.00
          </motion.p>
        </motion.div>
      </section>

      {/* ================================================================
          2. BOTÓN WHATSAPP - HEARTBEAT PULSE
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>2. Botón WhatsApp - Heartbeat Pulse</h2>
        <p>Pasa el mouse para ver el latido continuo y el ícono saltando.</p>
        
        <div style={{ textAlign: "center" }}>
          <motion.button
            style={{
              background: "#25D366",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "24px",
              fontWeight: 550,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)",
            }}
            variants={whatsappButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span variants={whatsappIconVariants}>💬</motion.span>
            {" "}Contactar por WhatsApp
          </motion.button>
        </div>
      </section>

      {/* ================================================================
          3. BOTÓN COMPRAR - SOFT FILL
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>3. Botón Comprar - Soft Fill</h2>
        <p>Pasa el mouse para ver el relleno deslizándose desde la izquierda.</p>
        
        <div style={{ textAlign: "center" }}>
          <motion.button
            style={{
              position: "relative",
              background: "transparent",
              color: "#E91E63",
              border: "2px solid #E91E63",
              padding: "10px 20px",
              borderRadius: "24px",
              fontWeight: 550,
              cursor: "pointer",
              overflow: "hidden",
            }}
            variants={buyButtonVariants}
            initial="initial"
            whileTap="tap"
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "#E91E63",
                zIndex: -1,
              }}
              variants={buyButtonFillVariants}
              initial="initial"
              whileHover="hover"
            />
            <span style={{ position: "relative", zIndex: 1 }}>
              Comprar
            </span>
            <motion.span variants={buyButtonIconVariants}> 💳</motion.span>
          </motion.button>
        </div>
      </section>

      {/* ================================================================
          4. BOTÓN GENERAR - GENTLE BOUNCE
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>4. Botón Generar - Gentle Bounce</h2>
        <p>Pasa el mouse para ver el rebote hacia arriba. Haz clic para ver el spinner de carga.</p>
        
        <div style={{ textAlign: "center" }}>
          <motion.button
            style={{
              position: "relative",
              background: "#E91E63",
              color: "white",
              padding: "12px 32px",
              border: "none",
              borderRadius: "24px",
              fontWeight: 550,
              fontSize: "16px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
            variants={generateButtonVariants}
            initial="initial"
            whileHover={!loading ? "hover" : undefined}
            whileTap={!loading ? "tap" : undefined}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generando..." : "Generar Descripción"}
            
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
        </div>
      </section>

      {/* ================================================================
          5. FILTROS DE CATEGORÍA - SMOOTH TRANSITION
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>5. Filtros de Categoría - Smooth Transition</h2>
        <p>Haz clic en las categorías para ver el pulso de activación.</p>
        
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                style={{
                  position: "relative",
                  padding: "8px 20px",
                  borderRadius: "20px",
                  border: "2px solid transparent",
                  fontWeight: 500,
                  fontSize: "14px",
                  cursor: "pointer",
                  background: isActive ? "#B8D4E3" : "#F4C7D4",
                  color: "#4A5568",
                }}
                variants={categoryButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={isActive ? "active" : "initial"}
                onClick={() => setActiveCategory(category.id)}
              >
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
      </section>

      {/* ================================================================
          6. INPUT FORMULARIO - STITCH BORDER
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>6. Input de Formulario - Stitch Border</h2>
        <p>Haz clic en el input para ver el efecto de "tejido" en el borde.</p>
        
        <div style={{ maxWidth: "400px", margin: "0 auto", position: "relative" }}>
          <motion.input
            type="text"
            placeholder="Escribe algo aquí..."
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid rgba(200, 139, 119, 0.3)",
              borderRadius: "8px",
              fontSize: "14px",
              fontFamily: "inherit",
              outline: "none",
            }}
            variants={inputVariants}
            initial="initial"
            animate={inputFocused ? "focus" : "initial"}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          
          {inputFocused && (
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
      </section>

      {/* ================================================================
          7. TARJETA TESTIMONIO - GENTLE HOVER
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>7. Tarjeta de Testimonio - Gentle Hover</h2>
        <p>Pasa el mouse para ver la elevación suave y la comilla animada.</p>
        
        <motion.div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            border: "2px dashed rgba(200, 139, 119, 0.5)",
            maxWidth: "500px",
            margin: "0 auto",
            position: "relative",
          }}
          variants={testimonialCardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            style={{
              fontSize: "48px",
              color: "#E91E63",
              lineHeight: 0,
              marginBottom: "12px",
            }}
            variants={testimonialQuoteVariants}
          >
            "
          </motion.div>
          
          <p style={{ color: "#4A5568", fontStyle: "italic", marginBottom: "16px", lineHeight: 1.6 }}>
            Los amigurumis son hermosos y de excelente calidad. ¡Súper recomendado!
          </p>
          
          <p style={{ color: "#4A5568", fontWeight: "bold" }}>
            María González
          </p>
        </motion.div>
      </section>

      {/* ================================================================
          8. LOADING SPINNER - GENTLE SPIN
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>8. Loading Spinner - Gentle Spin</h2>
        <p>Spinner de carga con rotación suave personalizada.</p>
        
        <motion.div
          style={{
            width: "40px",
            height: "40px",
            border: "3px solid rgba(230, 139, 111, 0.2)",
            borderTopColor: "#E68B6F",
            borderRadius: "50%",
            margin: "20px auto",
          }}
          variants={loadingSpinnerVariants}
          initial="initial"
          animate="animate"
        />
      </section>

      {/* ================================================================
          9. TOAST NOTIFICATION - SUCCESS
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>9. Toast Notification - Success</h2>
        <p>Haz clic en "Generar Descripción" (arriba) o el botón de abajo para ver el toast.</p>
        
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              background: "#E91E63",
              color: "white",
              cursor: "pointer",
            }}
          >
            Mostrar Toast
          </button>
        </div>

        <AnimatePresence>
          {showToast && (
            <motion.div
              style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                background: "#8CC49E",
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
                ¡Operación exitosa!
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ================================================================
          10. SCROLL ANIMATIONS - FADE IN
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>10. Animaciones de Scroll - Fade In</h2>
        <p>Baja para ver cómo aparecen los elementos con delay escalonado.</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {[1, 2, 3, 4].map((item, index) => {
            const scrollProps = useScrollAnimation(index);
            
            return (
              <motion.div
                key={item}
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                  textAlign: "center",
                }}
                variants={scrollFadeInVariants}
                {...scrollProps}
              >
                <h3>Item {item}</h3>
                <p>Delay: {index * 100}ms</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================================================================
          11. HERO SECTION - FADE IN UP
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>11. Sección Hero - Fade In Up</h2>
        <p>Estas animaciones se ejecutan al cargar la página (ya las viste arriba).</p>
        
        <div style={{ textAlign: "center", padding: "40px", background: "#f9f9f9", borderRadius: "12px" }}>
          <motion.h1
            style={{ fontSize: "32px", marginBottom: "16px" }}
            variants={heroTitleVariants}
            initial="initial"
            animate="animate"
          >
            Título Principal
          </motion.h1>
          
          <motion.p
            style={{ fontSize: "18px", marginBottom: "24px" }}
            variants={heroSubtitleVariants}
            initial="initial"
            animate="animate"
          >
            Subtítulo con delay de 0.2s
          </motion.p>
          
          <motion.button
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              background: "#E91E63",
              color: "white",
              cursor: "pointer",
            }}
            variants={heroCtaVariants}
            initial="initial"
            animate="animate"
          >
            CTA con delay de 0.4s
          </motion.button>
        </div>
      </section>

      {/* ================================================================
          12. GENTLE FLOAT - FLOTACIÓN
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>12. Gentle Float - Flotación Suave</h2>
        <p>El logo flota con rotación (3s). El container flota más lento sin rotación (8s).</p>
        
        <div style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "center" }}>
          <div>
            <p style={{ textAlign: "center", marginBottom: "12px" }}>Float (3s + rotación)</p>
            <motion.div
              style={{
                width: "80px",
                height: "80px",
                background: "#E68B6F",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
              }}
              variants={floatAnimationVariants}
              initial="initial"
              animate="animate"
            >
              🧸
            </motion.div>
          </div>
          
          <div>
            <p style={{ textAlign: "center", marginBottom: "12px" }}>Float Slow (8s)</p>
            <motion.div
              style={{
                width: "120px",
                height: "120px",
                background: "#B8D4E3",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
              }}
              variants={floatAnimationSlowVariants}
              initial="initial"
              animate="animate"
            >
              🎨
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          13. PERFORMANCE OPTIMIZATION
      ================================================================ */}
      <section style={{ marginBottom: "60px" }}>
        <h2>13. Optimización de Performance - GPU Acceleration</h2>
        <p>Todas las animaciones usan aceleración GPU automáticamente para máximo rendimiento.</p>
        
        <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}>
          <code style={{ fontSize: "12px" }}>
            will-change: transform;<br />
            transform: translateZ(0);<br />
            backface-visibility: hidden;
          </code>
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "60px", padding: "40px", background: "#f9f9f9", borderRadius: "12px" }}>
        <h2>🎉 ¡Sistema Completo!</h2>
        <p>Todas las 13 animaciones del demo original están funcionando perfectamente.</p>
        <p style={{ marginTop: "16px", fontSize: "14px", color: "#666" }}>
          Revisa <code>ANIMATION_SYSTEM_GUIDE.md</code> para documentación completa.
        </p>
      </div>
    </div>
  );
}
