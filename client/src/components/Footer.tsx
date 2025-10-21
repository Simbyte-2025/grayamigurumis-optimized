import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧶</span>
              <h3 className="text-xl font-display text-primary">Gray Amigurumis</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Creaciones únicas tejidas a mano con amor y dedicación desde Punta Arenas, Chile.
            </p>
          </div>
          
          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Punta Arenas, Chile</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+56992834268" className="hover:text-primary transition-colors">
                  +56 9 9283 4268
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Instagram className="h-4 w-4 shrink-0" />
                <a 
                  href="https://www.instagram.com/grayamigurumis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @grayamigurumis
                </a>
              </div>
            </div>
          </div>
          
          {/* Horario */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Pedidos</h4>
            <p className="text-sm text-muted-foreground">
              Disponible por encargo. Los tiempos de entrega varían según la complejidad del proyecto.
            </p>
            <p className="text-sm text-muted-foreground">
              También ofrecemos clases de amigurumi para principiantes. ¡Consulta por próximas fechas!
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>© {currentYear} Gray Amigurumis. Todos los derechos reservados.</p>
          <p className="text-xs">
            Proyecto autogenerado por <strong>Manus AI</strong> · Micro-Sitios Quilicura 2025 · 
            Fuente Instagram <a 
              href="https://www.instagram.com/grayamigurumis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              @grayamigurumis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

