import { useState } from "react";
import { motion } from "framer-motion";
import { products, type Product } from "../data/products";
import { openWhatsApp, openWhatsAppPurchase } from "@/lib/utils";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import ProductImageSlider from "./ProductImageSlider";
import ProductDetailModal from "./ProductDetailModal";
import {
  animationVariants,
  useScrollAnimation,
  categoryButtonVariants,
  productCardVariants,
} from "@/hooks/useAnimations";

type Category = "all" | "cine-tv" | "animatitos" | "anime-videojuegos";

const CATEGORY_FILTERS: { key: Category; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "cine-tv", label: "Cine & TV" },
  { key: "animatitos", label: "Animatitos" },
  { key: "anime-videojuegos", label: "Anime & Videojuegos" },
];

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setDetailOpen(true);
  };

  const closeProductDetail = () => {
    setDetailOpen(false);
  };

  return (
    <section id="tienda" className="section-paper bg-catalog py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-4 md:mb-6 text-gray-600">
          Catálogo de Creaciones
        </h2>
        <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed text-gray-500">
          Explora algunos de mis trabajos. Si no ves lo que buscas, recuerda que hago confecciones a pedido. ¡Tu imaginación es el
          límite!
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12 md:mb-16">
          {CATEGORY_FILTERS.map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`categoria-btn ${activeFilter === key ? "active" : ""}`}
              variants={categoryButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={activeFilter === key ? "active" : "initial"}
              aria-pressed={activeFilter === key}
            >
              {label}
            </motion.button>
          ))}
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
                  onImageClick={() => openProductDetail(product)}
                />
                <div className="flex flex-1 flex-col p-4">
                  <h3
                    className="cursor-pointer hover:text-[var(--c-coral)] transition-colors"
                    onClick={() => openProductDetail(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="precio">${product.priceCLP.toLocaleString("es-CL")}</p>
                  <p className="text-sm text-gray-600 mb-3">{product.heightCm} cm aprox.</p>

                  <div className="botones">
                    <motion.button
                      onClick={() => openWhatsApp(product.name)}
                      className="btn-whatsapp"
                      aria-label={`Consultar ${product.name} por WhatsApp`}
                      title={`Consultar ${product.name} por WhatsApp`}
                      whileHover={animationVariants.heartbeat}
                    >
                      <WhatsAppIcon size={20} title="WhatsApp" />
                    </motion.button>

                    <button
                      onClick={() => openWhatsAppPurchase(product.name)}
                      className="btn-comprar"
                      aria-label={`Comprar ${product.name} por WhatsApp`}
                      title={`Comprar ${product.name} por WhatsApp`}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={detailOpen}
        onClose={closeProductDetail}
      />
    </section>
  );
}
