import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const whatsappNumber = "56992834268";
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa conocer más sobre los amigurumis de Gray Amigurumis 🧶");
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧶</span>
          <h1 className="text-xl md:text-2xl font-display text-primary">
            Gray Amigurumis
          </h1>
        </div>
        
        <Button 
          asChild
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
        >
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Contactar</span>
          </a>
        </Button>
      </div>
    </header>
  );
}

