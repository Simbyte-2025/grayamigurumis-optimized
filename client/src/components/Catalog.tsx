import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import { products } from "@/data/products";

export default function Catalog() {
  const whatsappNumber = "56992834268";
  
  const handleProductInquiry = (productName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el ${productName} 🧶`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary">
            Catálogo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras creaciones únicas. Cada amigurumi puede ser personalizado según tus preferencias.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    {product.category}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  onClick={() => handleProductInquiry(product.name)}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Consultar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras lo que buscas? ¡Puedo crear el amigurumi de tus sueños!
          </p>
          <Button 
            asChild
            size="lg"
            variant="outline"
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola! Quiero hacer un pedido personalizado 🎨")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedido Personalizado
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

