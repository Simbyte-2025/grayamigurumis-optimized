import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "producto-card",
    "btn-whatsapp",
    "btn-comprar",
    "categoria-btn",
    "testimonio-card",
    "fade-in-scroll",
    "visible",
    "float-animation",
    "float-animation-slow",
    "hero-title",
    "hero-subtitle",
    "hero-cta",
  ],
  theme: { extend: {} },
  plugins: [animatePlugin],
} satisfies Config;
