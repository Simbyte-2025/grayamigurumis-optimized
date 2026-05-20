import { motion } from "framer-motion";
import { products } from "@/data/products";
import { openWhatsApp, openWhatsAppPurchase } from "@/lib/utils";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import {
  animationVariants,
  useScrollAnimation,
  productCardVariants,
  productCardImageVariants,
} from "@/hooks/useAnimations";

const FEATURED_IDS = ["stitch", "el-chapulin", "emociones"];
const featuredProducts = products.filter((p) => FEATURED_IDS.includes(p.id));

export default function FeaturedProducts() {
  const scrollAnimationProps = useScrollAnimation();

  return (
    <section id="favoritos" className="section-paper bg-favs py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-5xl sm:text-6xl text-center mb-12 md:mb-16" style={{ color: "#4A5568" }}>
          Nuestros Favoritos
        </h2>

        {/* Grid unificado con catálogo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
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
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      variants={productCardImageVariants}
                      onError={(event) => {
                        const target = event.currentTarget;
                        target.src = "https://placehold.co/400x500/CCCCCC/888888?text=Error";
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 text-center">
                    <h3>{product.name}</h3>
                    <p className="precio">${product.priceCLP.toLocaleString("es-CL")}</p>
                    <div className="botones flex justify-center gap-3 mt-2">
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
    </section>
  );
}
