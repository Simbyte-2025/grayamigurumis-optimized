import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import {
  animationVariants,
  useScrollAnimation,
  categoryButtonVariants,
  productCardVariants,
  productCardImageVariants,
} from "@/hooks/useAnimations";

type Category = "all" | "cine-tv" | "animatitos" | "anime-videojuegos";

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
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
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    variants={productCardImageVariants}
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.src = "https://placehold.co/400x500/CCCCCC/888888?text=Error";
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3>{product.name}</h3>
                  <p className="precio">{product.price}</p>

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
                      onClick={() => handlePagar(product.flowLink)}
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
    </section>
  );
}
