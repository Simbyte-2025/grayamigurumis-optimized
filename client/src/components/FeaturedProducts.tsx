export default function FeaturedProducts() {
  const whatsappNumber = "56992834268";

  const featured = [
    {
      name: "Poodle Soñador",
      price: "$20.000",
      image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg",
      alt: "Amigurumi de Poodle Blanco"
    },
    {
      name: "Héroe Mercenario",
      price: "$22.000",
      image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg",
      alt: "Amigurumi de Deadpool"
    },
    {
      name: "Pingüino Abrigado",
      price: "$16.000",
      image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg",
      alt: "Amigurumi de Pingüino"
    }
  ];

  const handleAddToCart = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="favoritos" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#8B5E3C'}}>
          Nuestros Favoritos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featured.map((product, index) => (
            <div 
              key={index}
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
                alt={product.alt} 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{color: '#8B5E3C'}}>
                  {product.name}
                </h3>
                <p className="text-xl font-semibold mb-4" style={{color: '#FFC0CB'}}>
                  {product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="font-bold py-2 px-6 rounded-full w-full transition-all duration-300"
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
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

