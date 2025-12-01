import { useState } from "react";
import { motion } from "framer-motion";
import { products, type Product } from "../data/products";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import ProductImageSlider from "./ProductImageSlider";
import ImageLightbox from "./ImageLightbox";
import {
  animationVariants,
  useScrollAnimation,
  categoryButtonVariants,
  productCardVariants,
} from "@/hooks/useAnimations";

type Category = "all" | "cine-tv" | "animatitos" | "anime-videojuegos";

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const whatsappNumber = "56992834268";
  const scrollAnimationProps = useScrollAnimation();

  const categoryMap: Record<string, Category> = {
    "Cine & TV": "cine-tv",
    "Animatitos": "animatitos",
    "Anime & Videojuegos": "anime-videojuegos",
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => categoryMap[product.category] === activeFilter);

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handlePagar = (flowLink: string) => {
    window.open(flowLink, "_blank");
  };

  const handleImageClick = (product: Product, imageIndex: number) => {
    setSelectedProduct(product);
    setSelectedImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="tienda" className="section-paper bg-catalog py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-4 md:mb-6" style={{ color: "#4A5568" }}>
          Catálogo de Creaciones
        </h2>
        <p
          className="text-center text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed"
          style={{ color: "#777C7C" }}
        >
          Explora algunos de mis trabajos. Si no ves lo que buscas, recuerda que hago confecciones a pedido. ¡Tu imaginación es el
          límite!
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12 md:mb-16">
          <motion.button
            onClick={() => setActiveFilter("all")}
            className={`categoria-btn ${activeFilter === "all" ? "active" : ""}`}
            variants={categoryButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={activeFilter === "all" ? "active" : "initial"}
            aria-pressed={activeFilter === "all"}
          >
            Todos
          </motion.button>
          <motion.button
            onClick={() => setActiveFilter("cine-tv")}
            className={`categoria-btn ${activeFilter === "cine-tv" ? "active" : ""}`}
            variants={categoryButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={activeFilter === "cine-tv" ? "active" : "initial"}
            aria-pressed={activeFilter === "cine-tv"}
          >
            Cine & TV
          </motion.button>
          <motion.button
            onClick={() => setActiveFilter("animatitos")}
            className={`categoria-btn ${activeFilter === "animatitos" ? "active" : ""}`}
            variants={categoryButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={activeFilter === "animatitos" ? "active" : "initial"}
            aria-pressed={activeFilter === "animatitos"}
          >
            Animatitos
          </motion.button>
          <motion.button
            onClick={() => setActiveFilter("anime-videojuegos")}
            className={`categoria-btn ${activeFilter === "anime-videojuegos" ? "active" : ""}`}
            variants={categoryButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={activeFilter === "anime-videojuegos" ? "active" : "initial"}
            aria-pressed={activeFilter === "anime-videojuegos"}
          >
            Anime & Videojuegos
          </motion.button>
        </div>

        {/* Product Grid */}
        <div className="productos-grid-gemini grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] auto-rows-fr">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="flex flex-col"
              variants={animationVariants.fadeInUp}
              {...scrollAnimationProps}
            >
              <motion.div
                className="producto-card flex h-full flex-col"
                variants={productCardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <ProductImageSlider
                  images={product.images}
                  productName={product.name}
                  onImageClick={(imageIndex) => handleImageClick(product, imageIndex)}
                />
                <div className="flex flex-1 flex-col p-4">
                  <h3>{product.name}</h3>
                  <p className="precio">${product.priceCLP.toLocaleString("es-CL")}</p>
                  <p className="text-sm text-gray-600 mb-3">{product.heightCm} cm aprox.</p>

                  <div className="botones">
                    <motion.button
                      onClick={() => handleWhatsApp(product.name)}
                      className="btn-whatsapp"
                      aria-label={`Consultar ${product.name} por WhatsApp`}
                      title={`Consultar ${product.name} por WhatsApp`}
                      whileHover={animationVariants.heartbeat}
                    >
                      <WhatsAppIcon size={20} title="WhatsApp" />
                    </motion.button>

                    <button
                      onClick={() => handlePagar(product.flowLink || "https://www.flow.cl/checkout")}
                      className="btn-comprar"
                      aria-label={`Pagar ${product.name}`}
                      title={`Pagar ${product.name}`}
                    >
                      Pagar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProduct && (
        <ImageLightbox
          images={selectedProduct.images}
          initialIndex={selectedImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          productName={selectedProduct.name}
        />
      )}
    </section>
  );
}
