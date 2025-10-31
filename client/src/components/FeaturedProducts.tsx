import { motion } from "framer-motion";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import {
  animationVariants,
  useScrollAnimation,
  productCardVariants,
  productCardImageVariants,
} from "@/hooks/useAnimations";

const featuredProducts = [
  { id: 1, name: "Deadpool", price: "$22.000", image: "/src/assets/deadpool.webp", flowLink: "https://www.flow.cl/checkout" },
  { id: 10, name: "Stitch", price: "$18.000", image: "/src/assets/stitch.webp", flowLink: "https://www.flow.cl/checkout" },
  { id: 15, name: "Goku", price: "$24.000", image: "/src/assets/goku.webp", flowLink: "https://www.flow.cl/checkout" },
];

export default function FeaturedProducts() {
  const scrollAnimationProps = useScrollAnimation();
  const whatsappNumber = "56992834268";

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handlePagar = (flowLink: string) => {
    window.open(flowLink, "_blank");
  };

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
                      src={product.image}
                      alt={product.name}
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
                    <p className="precio">{product.price}</p>
                    <div className="botones flex justify-center gap-3 mt-2">
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
