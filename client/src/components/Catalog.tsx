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
    "Accesorios": "animalitos"
  };

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(p => categoryMap[p.category] === activeFilter);

  const handleConsult = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="tienda" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6" style={{color: '#8B5E3C'}}>
          Catálogo de Creaciones
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16 leading-relaxed" style={{color: '#A67C52'}}>
          Explora algunos de mis trabajos. Si no ves lo que buscas, recuerda que hago confecciones a pedido. ¡Tu imaginación es el límite!
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          <button
            onClick={() => setActiveFilter("all")}
            className={`font-bold py-2 px-6 rounded-full transition-all duration-300 ${
              activeFilter === "all" 
                ? 'text-white' 
                : ''
            }`}
            style={{
              backgroundColor: activeFilter === "all" ? '#A9D1A7' : '#F8DDA4',
              color: activeFilter === "all" ? '#FFF8F0' : '#8B5E3C'
            }}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveFilter("animalitos")}
            className={`font-bold py-2 px-6 rounded-full transition-all duration-300`}
            style={{
              backgroundColor: activeFilter === "animalitos" ? '#A9D1A7' : '#F8DDA4',
              color: activeFilter === "animalitos" ? '#FFF8F0' : '#8B5E3C'
            }}
          >
            Animalitos
          </button>
          <button
            onClick={() => setActiveFilter("cine-tv")}
            className={`font-bold py-2 px-6 rounded-full transition-all duration-300`}
            style={{
              backgroundColor: activeFilter === "cine-tv" ? '#A9D1A7' : '#F8DDA4',
              color: activeFilter === "cine-tv" ? '#FFF8F0' : '#8B5E3C'
            }}
          >
            Cine & TV
          </button>
          <button
            onClick={() => setActiveFilter("anime-videojuegos")}
            className={`font-bold py-2 px-6 rounded-full transition-all duration-300`}
            style={{
              backgroundColor: activeFilter === "anime-videojuegos" ? '#A9D1A7' : '#F8DDA4',
              color: activeFilter === "anime-videojuegos" ? '#FFF8F0' : '#8B5E3C'
            }}
          >
            Anime & Videojuegos
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-all duration-300 hover:scale-105"
              style={{boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold" style={{color: '#8B5E3C'}}>
                  {product.name}
                </h3>
                <p className="font-semibold" style={{color: '#FFC0CB'}}>
                  {product.price}
                </p>
                <button
                  onClick={() => handleConsult(product.name)}
                  className="mt-3 font-bold py-2 px-4 rounded-full w-full transition-all duration-300 text-sm"
                  style={{
                    backgroundColor: '#FFC0CB',
                    color: '#8B5E3C',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#A9D1A7';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFC0CB';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  }}
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

