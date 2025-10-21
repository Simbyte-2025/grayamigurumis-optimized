import { Heart, Sparkles, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Hecho con Amor",
      description: "Cada puntada lleva un pedacito de cariño y dedicación"
    },
    {
      icon: Sparkles,
      title: "Creaciones Únicas",
      description: "Diseños personalizados pensados especialmente para ti"
    },
    {
      icon: Package,
      title: "Listo para Regalar",
      description: "Presentación especial en caja de acrílico"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary">
            Quién Soy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Soy una artesana apasionada del crochet y el arte del amigurumi, ubicada en <strong>Punta Arenas, Chile</strong>. 
            Cada creación nace de la técnica japonesa del tejido a mano, donde transformo hilos de colores en personajes 
            llenos de personalidad y ternura. Más que simples muñecos, mis amigurumis son compañeros que transmiten 
            calidez, alegría y ese toque especial que solo lo hecho a mano puede ofrecer.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

