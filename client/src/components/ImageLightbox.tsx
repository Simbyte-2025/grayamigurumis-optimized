import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import type { ProductImage } from "../data/products";

interface ImageLightboxProps {
  images: ProductImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  productName,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";

      // Listener para tecla ESC
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoomLevel(1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
            aria-label="Cerrar lightbox"
          >
            <X size={24} />
          </button>

          {/* Controles de zoom */}
          <div className="absolute top-4 left-4 flex gap-2 z-50">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-3 transition-colors"
              aria-label="Reducir zoom"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-3 transition-colors"
              aria-label="Aumentar zoom"
            >
              <ZoomIn size={20} />
            </button>
            <div className="bg-white/10 text-white rounded-full px-4 py-3 text-sm">
              {Math.round(zoomLevel * 100)}%
            </div>
          </div>

          {/* Navegación izquierda */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Navegación derecha */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Imagen principal */}
          <motion.div
            className="relative max-w-7xl max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-[90vh] object-contain mx-auto transition-transform duration-300"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center center",
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Información del producto y navegación inferior */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-50">
            <p className="text-white text-lg font-medium mb-2">{productName}</p>
            <p className="text-white/80 text-sm mb-3">{images[currentIndex].alt}</p>

            {/* Miniaturas */}
            {images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setZoomLevel(1);
                    }}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? "border-white scale-110"
                        : "border-white/30 hover:border-white/60"
                    }`}
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

            {/* Contador */}
            <p className="text-white/60 text-sm mt-3">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
