import { useState } from "react";
import { products } from "../data/products";

type Category = "all" | "animalitos" | "cine-tv" | "anime-videojuegos";

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const whatsappNumber = "56992834268";

  const categoryMap: Record<string, Category> = {
    "Animalitos": "animalitos",
    "Personajes": "cine-tv",
    "Anime": "anime-videojuegos",
    "Accesorios": "animalitos",
    "Objetos": "cine-tv"
  };

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(p => categoryMap[p.category] === activeFilter);

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePagar = (urlPago: string) => {
    window.open(urlPago, '_blank');
  };

  return (
    <section id="tienda" className="section-paper bg-catalog py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6" style={{color: '#4A5568'}}>
          Catálogo de Creaciones
        </h2>
        <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed" style={{color: '#777C7C'}}>
          Explora algunos de mis trabajos. Si no ves lo que buscas, recuerda que hago confecciones a pedido. ¡Tu imaginación es el límite!
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12 md:mb-16">
          <button
            onClick={() => setActiveFilter("all")}
            className={`categoria-btn ${activeFilter === "all" ? 'active' : ''}`}
            aria-pressed={activeFilter === "all"}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveFilter("animalitos")}
            className={`categoria-btn ${activeFilter === "animalitos" ? 'active' : ''}`}
            aria-pressed={activeFilter === "animalitos"}
          >
            Animalitos
          </button>
          <button
            onClick={() => setActiveFilter("cine-tv")}
            className={`categoria-btn ${activeFilter === "cine-tv" ? 'active' : ''}`}
            aria-pressed={activeFilter === "cine-tv"}
          >
            Cine & TV
          </button>
          <button
            onClick={() => setActiveFilter("anime-videojuegos")}
            className={`categoria-btn ${activeFilter === "anime-videojuegos" ? 'active' : ''}`}
            aria-pressed={activeFilter === "anime-videojuegos"}
          >
            Anime & Videojuegos
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="producto-card fade-in-scroll"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                loading="lazy"
                onError={(e) => { 
                  const target = e.currentTarget;
                  target.src = `https://placehold.co/400x500/CCCCCC/888888?text=Error`; 
                }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3>
                  {product.name}
                </h3>
                <p className="precio">
                  {product.price}
                </p>
                
                {/* Botones con nuevas clases */}
                <div className="botones">
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="btn-whatsapp"
                    aria-label={`Consultar ${product.name} por WhatsApp`}
                    title={`Consultar ${product.name} por WhatsApp`}
                  >
                    WhatsApp
                  </button>
                  
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

