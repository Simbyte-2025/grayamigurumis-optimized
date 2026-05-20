import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_NUMBER } from "@/const";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openWhatsApp(productName: string) {
  const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${productName} 🧸`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}

export function openWhatsAppPurchase(productName: string) {
  const message = encodeURIComponent(`¡Hola! Quiero comprar el producto: ${productName} 🧸 ¿Cómo procedo con el pago?`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}
