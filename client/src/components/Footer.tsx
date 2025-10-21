export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "56992834268";
  const message = encodeURIComponent("¿Tienes una idea? ¡La tejo para ti! Contáctame para cotizar tu próximo amigurumi.");
  
  return (
    <footer 
      id="contacto" 
      className="pt-20 pb-10"
      style={{backgroundColor: '#8B5E3C', color: '#FFF8F0'}}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-5xl mb-6">
          Grayamigurumis
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          ¿Tienes una idea? ¡La tejo para ti! Contáctame para cotizar tu próximo amigurumi.
        </p>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-bold py-3 px-8 rounded-full text-lg mb-12 transition-all duration-300"
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
          Pedidos Personalizados
        </a>
        <div className="flex justify-center space-x-6 mb-12 text-4xl">
          <a 
            href="https://www.instagram.com/grayamigurumis/" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#FFC0CB]"
          >
            📷
          </a>
        </div>
        <p>
          &copy; {currentYear} Grayamigurumis. Tejido con amor desde Punta Arenas, Chile.
        </p>
      </div>
    </footer>
  );
}

