import { motion } from "framer-motion";
import WhatsAppIcon from "./shared/WhatsAppIcon";
import { animationVariants, useScrollAnimation, productCardVariants, productCardImageVariants } from "@/hooks/useAnimations";

export default function FeaturedProducts() {
  const scrollAnimationProps = useScrollAnimation();
  const whatsappNumber = "56992834268";

  const featured = [
    {
      name: "Poodle Soñador",
      price: "$20.000",
      image: "/assets/img/placeholder-4x5.jpg",
      alt: "Amigurumi de Poodle Blanco",
      urlPago: "https://www.flow.cl/btn.php?token=ejemplo-poodle"
    },
    {
      name: "Héroe Mercenario",
      price: "$22.000",
      image: "/assets/img/placeholder-4x5.jpg",
      alt: "Amigurumi de Deadpool",
      urlPago: "https://www.flow.cl/btn.php?token=ejemplo-deadpool"
    },
    {
      name: "Pingüino Abrigado",
      price: "$16.000",
      image: "/assets/img/placeholder-4x5.jpg",
      alt: "Amigurumi de Pingüino",
      urlPago: "https://www.flow.cl/btn.php?token=ejemplo-pinguino"
    }
  ];

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePagar = (urlPago: string) => {
    window.open(urlPago, '_blank');
  };

  return (
    <section id="favoritos" className="section-paper bg-favs py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{color: '#4A5568'}}>
          Nuestros Favoritos
        </h2>
        <div className="productos-grid-gemini md:grid-cols-3">
          {featured.map((product, index) => (
            <motion.div 
              key={index}
              variants={animationVariants.fadeInScroll}
              {...scrollAnimationProps}
            >
              <motion.div 
                className="producto-card"
                variants={productCardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
              <motion.img 
                src={product.image} 
                alt={product.alt} 
                loading="lazy"
                variants={productCardImageVariants}
                style={{
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                }}
                onError={(e) => { 
                  const target = e.currentTarget;
                  target.src = `https://placehold.co/400x500/CCCCCC/888888?text=Error+${index+1}`; 
                }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3>
                  {product.name}
                </h3>
                <p className="precio">
                  {product.price}
                </p>
                
                {/* Botones con nuevas clases */}
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
                    onClick={() => handlePagar(product.urlPago)}
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

