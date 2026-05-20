import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Ruler, Tag, Sparkles } from "lucide-react";
import type { Product } from "../data/products";
import { openWhatsApp } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/const";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import { EASING, DURATION } from "@/hooks/useAnimations";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageDirection, setImageDirection] = useState(0);

  // Reset state when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setImageDirection(0);
  }, [product?.id]);

  // Lock body scroll & keyboard nav
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigateImage(-1);
      if (e.key === "ArrowRight") navigateImage(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentImageIndex]);

  const navigateImage = useCallback(
    (direction: number) => {
      if (!product) return;
      setImageDirection(direction);
      setCurrentImageIndex((prev) => {
        if (direction > 0) return prev === product.images.length - 1 ? 0 : prev + 1;
        return prev === 0 ? product.images.length - 1 : prev - 1;
      });
    },
    [product]
  );

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `¡Hola! Me encantó "${product.name}" ($${product.priceCLP.toLocaleString("es-CL")} CLP, ${product.heightCm} cm). ¿Está disponible? 🧸`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCustomOrder = () => {
    const message = encodeURIComponent(
      `¡Hola! Vi "${product.name}" en la web y me gustaría hacer un pedido personalizado similar. ¿Podemos conversar? 🧶`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const imageVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal container */}
          <motion.div
            className="relative z-10 w-[95vw] max-w-5xl max-h-[92vh] bg-[var(--c-crema)] rounded-3xl overflow-y-auto md:overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASING.natural }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-2.5 shadow-md transition-all duration-200 hover:scale-110"
              aria-label="Cerrar detalle del producto"
            >
              <X size={20} />
            </button>

            {/* Content: Split layout */}
            <div className="flex flex-col md:flex-row md:max-h-[92vh]">
              {/* ===== LEFT: Image Gallery ===== */}
              <div className="relative md:w-[55%] bg-white flex-shrink-0">
                {/* Main image */}
                <div className="relative aspect-[4/5] md:h-full overflow-hidden">
                  <AnimatePresence mode="wait" custom={imageDirection}>
                    <motion.img
                      key={currentImageIndex}
                      src={product.images[currentImageIndex].src}
                      alt={product.images[currentImageIndex].alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      custom={imageDirection}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: EASING.soft }}
                      draggable={false}
                    />
                  </AnimatePresence>

                  {/* Decorative stitch pattern overlay at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, var(--color-rosa-principal) 0px, var(--color-rosa-principal) 8px, transparent 8px, transparent 16px)",
                    }}
                  />

                  {/* Nav arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={() => navigateImage(-1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all hover:scale-110 z-20"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        onClick={() => navigateImage(1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all hover:scale-110 z-20"
                        aria-label="Imagen siguiente"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}

                  {/* Image counter pill */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm z-20">
                    {currentImageIndex + 1} / {product.images.length}
                  </div>
                </div>

                {/* Thumbnail strip */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 p-3 bg-white overflow-x-auto scrollbar-thin">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setImageDirection(index > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(index);
                        }}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all duration-200 ${
                          index === currentImageIndex
                            ? "ring-2 ring-[var(--c-coral)] ring-offset-2 scale-105"
                            : "opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      >
                        <img
                          src={image.src}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ===== RIGHT: Product Info ===== */}
              <div className="md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col md:overflow-y-auto">
                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--c-teal)] bg-[var(--c-teal)]/10 px-3 py-1.5 rounded-full">
                    <Tag size={12} />
                    {product.category}
                  </span>
                </motion.div>

                {/* Product name */}
                <motion.h2
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-700 mt-4 mb-2 leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: EASING.natural }}
                >
                  {product.name}
                </motion.h2>

                {/* Price */}
                <motion.div
                  className="flex items-baseline gap-2 mt-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <span className="text-3xl lg:text-4xl font-bold text-[var(--c-coral)]">
                    ${product.priceCLP.toLocaleString("es-CL")}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">CLP</span>
                </motion.div>

                {/* Specs */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-[var(--border)]">
                    <Ruler size={16} className="text-[var(--c-marron)]" />
                    <span className="text-sm font-medium text-gray-600">
                      {product.heightCm} cm de alto
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-[var(--border)]">
                    <Sparkles size={16} className="text-[var(--c-coral)]" />
                    <span className="text-sm font-medium text-gray-600">Hecho a mano</span>
                  </div>
                </motion.div>

                {/* Divider with stitch pattern */}
                <div
                  className="h-px my-2 mb-6"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, var(--c-terracota) 0px, var(--c-terracota) 6px, transparent 6px, transparent 12px)",
                    opacity: 0.3,
                  }}
                />

                {/* Description / craft details */}
                <motion.div
                  className="mb-8 space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Amigurumi tejido completamente a mano con la técnica japonesa de crochet,
                    usando algodón de alta calidad. Cada pieza es única y está hecha con dedicación
                    desde Punta Arenas, Chile.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-[var(--color-rosa-principal)]/30 text-[var(--c-marron)] px-2.5 py-1 rounded-full">
                      🧶 Algodón premium
                    </span>
                    <span className="bg-[var(--secondary)]/30 text-[var(--c-marron)] px-2.5 py-1 rounded-full">
                      🪡 Crochet japonés
                    </span>
                    <span className="bg-[var(--accent)]/30 text-[var(--c-marron)] px-2.5 py-1 rounded-full">
                      🎁 Envío nacional
                    </span>
                  </div>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  className="mt-auto space-y-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {/* Primary CTA: WhatsApp */}
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full flex items-center justify-center gap-3 text-white font-semibold text-base rounded-2xl py-4 px-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
                    style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
                    aria-label={`Consultar ${product.name} por WhatsApp`}
                  >
                    <WhatsAppIcon size={22} title="" />
                    Consultar disponibilidad
                  </button>

                  {/* Secondary CTA: Custom order */}
                  <button
                    onClick={handleCustomOrder}
                    className="w-full flex items-center justify-center gap-2 font-semibold text-sm rounded-2xl py-3.5 px-6 transition-all duration-300 border-2 border-[var(--c-coral)] text-[var(--c-coral)] hover:bg-[var(--c-coral)] hover:text-white active:scale-[0.98]"
                    aria-label="Pedir personalización"
                  >
                    <Sparkles size={16} />
                    Pedir uno personalizado
                  </button>

                  {/* Trust signal */}
                  <p className="text-center text-xs text-gray-400 pt-1">
                    Respuesta en menos de 24 horas · Envíos a todo Chile
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
