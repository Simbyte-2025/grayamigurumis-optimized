import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "56992834268";
  const whatsappMessage = encodeURIComponent("¡Hola! Quiero hacer un pedido personalizado 🧸");
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8D5C4]/30 to-background py-12 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight" style={{color: '#8B5E3C'}}>
              Tejidos con Ternura
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Cada amigurumi es una creación única, hecha a mano con dedicación y pensada para esa persona especial que la recibirá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-base"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hacer un Pedido
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="text-base"
              >
                <a 
                  href="https://www.instagram.com/grayamigurumis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  Ver Instagram
                </a>
              </Button>
            </div>
          </div>
          
          {/* Imagen */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-sm">
              <img 
                src="https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg"
                alt="Homero Simpson Amigurumi"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decoración */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

