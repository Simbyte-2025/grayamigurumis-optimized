# 🧶 GrayAmigurumis - Sitio Web Optimizado

**E-commerce artesanal para Gray Amigurumis** - Creaciones tejidas a mano en Punta Arenas, Chile.

> Proyecto optimizado con Lighthouse Score 85+ (móvil) — Cloudflare Pages + Worker Proxy + Chatbot IA

---

## 📋 Descripción

Sitio web de una página (landing page) para el emprendimiento artesanal **GrayAmigurumis**, especializado en la creación de amigurumis (muñecos tejidos a crochet) personalizados. Versión optimizada con performance superior, chatbot IA integrado y arquitectura edge-first.

### ✨ Características Principales

- **Hero centrado** con imagen de fondo optimizada (AVIF) y overlay translúcido
- **Catálogo con filtros** por categorías (23 productos con imágenes WebP optimizadas)
- **Chatbot IA conversacional** con sistema de fallback entre 3 modelos FREE de OpenRouter
- **Worker Proxy seguro** para proteger API keys (sin exposición en frontend)
- **Integración WhatsApp** directa para consultas y pedidos
- **Menú móvil optimizado** con background translúcido y animaciones suaves
- **Performance móvil ≥ 85** (Lighthouse) con preloads optimizados
- **Diseño responsive** mobile-first con Tailwind CSS v4
- **Fuentes optimizadas** (WOFF2) con `font-display: swap` para prevenir FOIT

### 🎯 Optimizaciones Implementadas

#### **Performance (Mobile Lighthouse)**
- ✅ **LCP ≤ 2.5s** (preload de imagen hero AVIF)
- ✅ **0 errores de fuentes** (corregido: 20+ → 0)
- ✅ **Tamaño de fuentes reducido 80%** (772KB → 156KB)
- ✅ **3 preloads críticos** (2 fonts + 1 imagen LCP)
- ✅ **Font loading strategy** con `font-display: swap`

#### **Seguridad**
- ✅ **0 API keys expuestas** en frontend
- ✅ **Worker proxy** con API key almacenada como Secret
- ✅ **CORS configurado** correctamente
- ✅ **Variables VITE_** solo para datos públicos

#### **UI/UX Móvil**
- ✅ **WhatsApp icon 1:1** (aspect-square) sin deformación
- ✅ **Menú móvil translúcido** matching header (`rgba(255,192,203,0.85)`)
- ✅ **Sin emojis** en elementos interactivos (usa imágenes WebP)
- ✅ **Animaciones suaves** con Framer Motion

---

## 🚀 Instalación Local

### Prerrequisitos

- **Node.js 18+** y **pnpm 10+** instalados
- **Git** configurado

### Pasos

1. **Clonar repositorio**

```bash
git clone https://github.com/Simbyte-2025/grayamigurumis-optimized.git
cd grayamigurumis-optimized
```

2. **Instalar dependencias**

```bash
pnpm install
```

3. **Configurar variables de entorno** (opcional para desarrollo local)

```bash
# No necesitas API keys para desarrollo local
# El chatbot usa el Worker proxy en producción
cp .env.example .env
```

4. **Iniciar servidor de desarrollo**

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

---

## 📦 Scripts Disponibles

```bash
pnpm dev                  # Servidor desarrollo (Vite)
pnpm build                # Build producción (dist/)
pnpm preview              # Preview build local
pnpm clean-port           # Liberar puerto 3000
pnpm test                 # Test endpoint local

# Git shortcuts
pnpm git:init             # Inicializar git
pnpm git:commit           # Commit rápido
pnpm git:status           # Ver estado
pnpm git:log              # Ver historial
```

---

## 🏗️ Estructura del Proyecto

```
grayamigurumis-optimized/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot/
│   │   │   │   ├── Chatbot.tsx           # Componente principal chatbot
│   │   │   │   ├── ChatWindow.tsx        # Ventana de chat
│   │   │   │   └── ChatButton.tsx        # Botón flotante
│   │   │   ├── Header.tsx                # Navegación sticky
│   │   │   ├── Hero.tsx                  # Hero con imagen optimizada
│   │   │   ├── FeaturedProducts.tsx      # 3 productos destacados
│   │   │   ├── Catalog.tsx               # Catálogo con filtros
│   │   │   ├── About.tsx                 # Sobre la artesana
│   │   │   ├── Testimonials.tsx          # Testimonios
│   │   │   └── Footer.tsx                # Footer con CTA
│   │   ├── services/
│   │   │   └── chatService.ts            # Lógica chatbot + fallback
│   │   ├── data/
│   │   │   └── products.ts               # 23 productos con rutas WebP
│   │   ├── App.tsx                       # Componente raíz
│   │   ├── main.tsx                      # Entry point
│   │   └── index.css                     # Estilos globales + fonts
│   ├── public/
│   │   ├── fonts/                        # 5 WOFF2 optimizados (156KB)
│   │   ├── assets/
│   │   │   ├── products/                 # 23 imágenes WebP
│   │   │   └── img/
│   │   │       └── placeholder-4x5.avif  # Imagen LCP
│   │   ├── logo.webp                     # Logo 48x48
│   │   ├── whatsapp-logo.webp            # Icon WhatsApp
│   │   └── robot-face.webp               # Avatar chatbot
│   └── index.html                        # HTML con preloads optimizados
├── vite.config.ts                        # Config unificada (outDir=dist)
├── package.json                          # Scripts y dependencias
├── .env.example                          # Ejemplo variables (sin secrets)
├── .gitignore                            # Ignora node_modules, .env, etc.
└── README.md                             # Este archivo
```

---

## 🎨 Stack Tecnológico

### **Frontend**
- **React 18.3.1** - Framework UI
- **TypeScript 5.x** - Type safety
- **Vite 7.1.7** - Build tool ultrarrápido
- **Tailwind CSS v4** - Utility-first styling con plugin @tailwindcss/vite
- **Framer Motion** - Animaciones suaves

### **Backend / Edge**
- **Cloudflare Pages** - Hosting estático edge-first
- **Cloudflare Worker** - Proxy seguro para OpenRouter API
  - Worker URL: `grayamigurumis-or-relay.caballero-sepulveda-nicolas.workers.dev`
  - API Key almacenada como Secret (no expuesta)

### **IA / Chatbot**
- **OpenRouter API** - Plataforma de modelos LLM
- **Modelos FREE con fallback**:
  1. `minimax/minimax-m2:free`
  2. `nvidia/nemotron-nano-12b-v2-vl:free`
  3. `deepseek/deepseek-chat-v3.1:free`

### **Fonts**
- **Quicksand** (regular, medium, semibold, bold) - Sans-serif principal
- **Pacifico** - Display heading
- **Moon Flower** - Decorativo (uso ocasional)
- Formato: **WOFF2** optimizado con `font-display: swap`

---

## 🌐 Despliegue en Cloudflare Pages

### **Configuración del Proyecto**

**Settings → Build & Deployments**
```yaml
Framework preset: None
Build command (Preview): pnpm install --no-frozen-lockfile && pnpm build
Build command (Production): pnpm install --frozen-lockfile && pnpm build
Build output directory: dist
Root directory: client
Node version: 18
```

**Settings → Environment Variables**

⚠️ **CRÍTICO**: NO configurar `OPENROUTER_API_KEY` en Pages. La API key está en el Worker como Secret.

```bash
# Variables públicas (opcional, ya están hardcoded)
VITE_WHATSAPP_PHONE=+56992834268
```

### **Deploy Branches**

```yaml
Production branch: master
Preview deployments: ✅ Enabled
Preview branch: staging/cleanup-chatbot
```

### **URLs del Proyecto**

- **Production**: `https://grayamigurumis.pages.dev`
- **Deploy Preview**: `https://staging-cleanup-chatbot.grayamigurumis.pages.dev`
- **Worker Proxy**: `https://grayamigurumis-or-relay.caballero-sepulveda-nicolas.workers.dev/chat/completions`

---

## 🤖 Chatbot - Arquitectura & Seguridad

### **Flujo de Comunicación**

```
[Frontend]
    ↓ fetch()
[Worker Proxy] ← API Key almacenada como Secret
    ↓ fetch() con Authorization
[OpenRouter API]
    ↓ respuesta JSON
[Worker] → procesa y reenvía
    ↓
[Frontend] → muestra mensaje
```

### **Sistema de Fallback**

El chatbot intenta con 3 modelos FREE en orden:

1. **Minimax M2** (intent 1)
2. **Nemotron Nano 12B V2 VL** (si falla anterior)
3. **DeepSeek Chat V3.1** (último recurso)

Si todos fallan, muestra mensaje amigable invitando a contactar por WhatsApp.

### **Código del Servicio** (`chatService.ts`)

```typescript
const PROXY_ENDPOINT = 'https://grayamigurumis-or-relay.caballero-sepulveda-nicolas.workers.dev/chat/completions';

const FREE_MODELS = [
  "minimax/minimax-m2:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
  "deepseek/deepseek-chat-v3.1:free"
];

// Sistema de fallback automático
for (const model of FREE_MODELS) {
  try {
    const result = await tryModel(model, userMessage, apiHistory);
    return result; // ✅ Éxito
  } catch (error) {
    // Intenta siguiente modelo
  }
}
```

---

## 📊 Performance Metrics

### **Lighthouse Score (Mobile)**

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| **Performance** | 51 | 85+ | +67% |
| **LCP** | >4s | ≤2.5s | -38% |
| **Font Errors** | 20+ | 0 | -100% |
| **Font Size** | 772KB | 156KB | -80% |
| **Preloads** | 13 | 3 | -77% |

### **Cambios Clave para Performance**

1. ✅ **Fuentes corruptas reemplazadas** con WOFF2 válidos de Google Fonts
2. ✅ **Moon Flower convertido** de TTF (66KB) a WOFF2 (20KB)
3. ✅ **Eliminados 672KB** de archivos innecesarios (covers, ZIP, OTF, TTF)
4. ✅ **font-display: swap** implementado en CSS para prevenir FOIT
5. ✅ **Preloads reducidos** a solo recursos críticos (2 fonts + 1 imagen LCP)
6. ✅ **Imagen hero** optimizada (AVIF con fetchpriority="high")

---

## 🔧 QA Checklist

### **Pre-Deploy**
- [ ] Build exitoso: `pnpm build`
- [ ] 0 warnings de TypeScript
- [ ] Git tree clean
- [ ] Branch sincronizado con remote

### **Post-Deploy (Preview)**
- [ ] Deploy Preview URL generada
- [ ] **Lighthouse Mobile** ≥ 85
- [ ] **LCP** ≤ 2.5s
- [ ] **0 console warnings** "preload but not used"
- [ ] **Network tab**: Solo llamadas a Worker proxy
- [ ] **Chatbot funcional**: Fallback activo entre 3 modelos
- [ ] **WhatsApp icon**: No deformado (1:1)
- [ ] **Menú móvil**: Translúcido matching header

### **Post-Deploy (Production)**
- [ ] URL producción accesible: `grayamigurumis.pages.dev`
- [ ] Custom domain configurado (si aplica)
- [ ] Variables replicadas en Production
- [ ] Lighthouse Production ≥ 85

---

## 📱 Funcionalidades

### **Catálogo de Productos**
- **23 productos** organizados en 3 categorías
- Filtros dinámicos: Todos | Animalitos | Cine & TV | Anime & Videojuegos
- Imágenes optimizadas WebP con lazy loading
- Botón "Consultar" abre WhatsApp con mensaje pre-redactado

### **Chatbot IA (GrayBot)**
- Asistente conversacional para ideas de amigurumis personalizados
- Sistema de fallback entre 3 modelos FREE
- Respuestas contextuales basadas en SYSTEM_INSTRUCTION
- Manejo de errores amigable con invitación a WhatsApp
- Avatar robot amigurumi personalizado

### **Integración WhatsApp**
- **Header**: Botón flotante con icono WhatsApp 1:1
- **Menú móvil**: Link directo con icono optimizado
- **Productos**: Botón "Consultar" en cada card
- Mensaje pre-codificado: "Hola! Me interesan tus amigurumis."

### **UI Responsiva**
- **Mobile-first** design con breakpoints optimizados
- **Menú hamburguesa** con transición suave (translate-x)
- **Hero centrado** con overlay translúcido rosa
- **Footer oscuro** con CTA de pedidos personalizados

---

## 🔒 Seguridad

### **Protección de API Keys**

✅ **Worker Proxy Pattern**
- API Key de OpenRouter almacenada como Secret en Worker
- Frontend solo conoce URL del Worker
- Worker maneja Authorization header

❌ **NO hacer**
- Nunca exponer API keys con `VITE_` prefix
- Nunca incluir tokens en código frontend
- Nunca commitear `.env` con secrets

### **Variables de Entorno**

```bash
# .env.example (seguro para commit)
VITE_WHATSAPP_PHONE=56992834268  # ✅ Público

# ❌ NUNCA poner en frontend:
# OPENROUTER_API_KEY=sk-or-v1-xxx  # ← Va en Worker Secret
```

---

## 📞 Contacto

**Gray Amigurumis**  
📍 Punta Arenas, Chile  
📱 WhatsApp: [+56 9 9283 4268](https://wa.me/56992834268)  
📷 Instagram: [@grayamigurumis](https://www.instagram.com/grayamigurumis)

---

## 🔄 Historial de Cambios

### **v2.1 - Optimización Performance + Chatbot Worker** (2025-01-31)

#### 🚀 **Performance**
- Reemplazadas fuentes corruptas (HTML 404 → WOFF2 válidos)
- Convertido Moon Flower TTF (66KB) → WOFF2 (20KB)
- Eliminados 672KB de archivos innecesarios
- Implementado `font-display: swap` en CSS
- Reducidos preloads de 13 → 3 (2 fonts + 1 imagen LCP)
- Lighthouse Mobile: 51 → 85+ (+67%)

#### 🤖 **Chatbot**
- Integrado Worker proxy seguro (grayamigurumis-or-relay)
- Sistema de fallback con 3 modelos FREE de OpenRouter
- Eliminadas dependencias de Gemini y Perplexity
- 0 API keys expuestas en frontend

#### 🎨 **UI/UX**
- Corregido WhatsApp icon a 1:1 (w-7 h-7 aspect-square)
- Menú móvil con background translúcido matching header
- Reemplazados emojis por imágenes WebP

#### 🔧 **Build**
- Unificada configuración Vite (vite.config.ts con outDir=dist)
- Eliminado submodule roto GreyAmigurumis.Demo
- Limpieza de package-lock.json (usando pnpm)

### **v2.0 - Versión Base** (2025-01)
- Migración desde Canvas HTML a React components
- Implementación de catálogo con filtros
- Integración WhatsApp
- Deploy en Cloudflare Pages

---

## 📝 Licencia

© 2025 Gray Amigurumis. Todos los derechos reservados.

---

## 🎯 Próximos Pasos

1. **Merge a Production**: Después de QA exitoso en Deploy Preview
2. **Custom Domain**: Configurar dominio personalizado en Cloudflare
3. **Analytics**: Integrar Google Analytics o Cloudflare Web Analytics
4. **A/B Testing**: Probar variaciones de CTA y hero copy
5. **SEO Local**: Optimizar para búsquedas "amigurumis Punta Arenas"

---

**Desarrollado con ❤️ por Nicolas Caballero Sepúlveda** · Optimizado para Cloudflare Pages
