# 🧶 Gray Amigurumis - Versión 2

**Micro-sitio web para Gray Amigurumis** - Creaciones tejidas a mano en Punta Arenas, Chile.

> Proyecto generado por Manus AI — Versión 2 — Micro-Sitios Quilicura 2025 — Fuente visual: HTML de Canvas (Gemini).

## 📋 Descripción

Sitio web de una página (landing page) para el emprendimiento artesanal **Gray Amigurumis**, especializado en la creación de amigurumis (muñecos tejidos a crochet) personalizados. La V2 recrea fielmente el diseño visual del HTML generado por Canvas (Gemini) con componentes React modulares.

### ✨ Características

- **Hero centrado** con imagen de fondo y caja translúcida
- **Sección "Nuestros Favoritos"** con 3 productos destacados
- **Catálogo con filtros** por categorías (Todos, Animalitos, Cine & TV, Anime & Videojuegos)
- **Generador de ideas** con IA (Gemini API) para describir amigurumis personalizados
- **Testimonios** de clientes satisfechos
- **Menú móvil** deslizante desde la derecha
- **Footer oscuro** con CTA de pedidos personalizados
- **Integración WhatsApp** para contacto directo
- **Diseño responsive** mobile-first
- **Paleta Pastel Dreams** (rosa, verde sage, amarillo suave, crema cálido, marrón)

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ y pnpm instalados
- API Key de Google Gemini (para el generador de ideas)

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/suuiso/grayamigurumis-manus-v1.git
cd grayamigurumis-manus-v1
```

2. **Instalar dependencias**

```bash
pnpm install
```

3. **Configurar variables de entorno**

La API Key de Gemini ya está configurada en el proyecto. Si necesitas actualizarla, contacta al administrador.

4. **Iniciar servidor de desarrollo**

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

## 📦 Scripts disponibles

```bash
pnpm dev      # Inicia servidor de desarrollo
pnpm build    # Genera build de producción
pnpm preview  # Previsualiza build de producción
pnpm lint     # Ejecuta linter
```

## 🏗️ Estructura del proyecto

```
grayamigurumis-manus-v1/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Navegación sticky con menú móvil
│   │   │   ├── Hero.tsx                # Hero centrado con overlay
│   │   │   ├── FeaturedProducts.tsx    # 3 productos destacados
│   │   │   ├── About.tsx               # Sobre la artesana (2 columnas)
│   │   │   ├── IdeaGenerator.tsx       # Generador IA con Gemini
│   │   │   ├── Catalog.tsx             # Catálogo con filtros
│   │   │   ├── Testimonials.tsx        # Testimonios de clientes
│   │   │   ├── Footer.tsx              # Footer oscuro
│   │   │   └── ui/                     # Componentes shadcn/ui
│   │   ├── data/
│   │   │   └── products.ts             # Datos de productos
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx                     # Componente principal
│   │   ├── main.tsx                    # Entry point
│   │   └── index.css                   # Estilos globales
│   └── index.html                      # HTML con SEO
├── README.md
├── CHANGELOG.md
├── resumen_tecnico_grayamigurumis_v2.md
└── package.json
```

## 🎨 Stack Tecnológico

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Tipografía**: Quicksand (sans-serif) + Pacifico (display)
- **IA**: Google Gemini API (generador de ideas)
- **Hosting**: Cloudflare Pages (recomendado)

## 🌐 Despliegue en Cloudflare Pages

### Opción 1: Desde el dashboard de Cloudflare

1. Ve a [Cloudflare Pages](https://dash.cloudflare.com/)
2. Haz clic en "Create a project"
3. Conecta tu repositorio de GitHub
4. Configura el build:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Environment variables**: Agregar `VITE_GEMINI_API_KEY`
5. Haz clic en "Save and Deploy"

### Opción 2: Desde la CLI

```bash
# Instalar Wrangler CLI
pnpm add -g wrangler

# Login en Cloudflare
wrangler login

# Desplegar
pnpm build
wrangler pages deploy dist --project-name=grayamigurumis
```

### Variables de entorno en producción

En Cloudflare Pages, ve a:
**Settings → Environment variables** y agrega:

- `VITE_GEMINI_API_KEY`: Tu API Key de Google Gemini

## 📱 Funcionalidades

### Generador de Ideas con IA

La sección "Dale Vida a tu Idea" utiliza la API de Gemini para generar descripciones creativas de amigurumis personalizados. El usuario ingresa una idea (ej: "un gatito con sombrero de mago") y la IA genera una descripción detallada con:

- Apariencia y expresión
- Paleta de colores sugerida
- Accesorios y detalles especiales

### Filtros de Catálogo

El catálogo permite filtrar productos por categorías:

- **Todos**: Muestra todos los productos
- **Animalitos**: Koalas, pollitos, gatitos, etc.
- **Cine & TV**: Personajes de películas y series
- **Anime & Videojuegos**: Personajes de anime y videojuegos

### Integración WhatsApp

Todos los botones "Consultar" y "Añadir al carrito" abren WhatsApp con un mensaje precodificado que incluye el nombre del producto.

## 🎯 SEO y Performance

- **Meta tags** completos (title, description, keywords)
- **Open Graph** tags para redes sociales
- **Twitter Cards** para compartir en Twitter
- **Geo tags** para SEO local (Punta Arenas, Chile)
- **Lazy loading** de imágenes
- **Lighthouse score** objetivo: ≥ 85 (mobile)

## 📄 Documentación adicional

- **CHANGELOG.md**: Historial de cambios V1 → V2
- **resumen_tecnico_grayamigurumis_v2.md**: Detalles técnicos completos

## 📞 Contacto

**Gray Amigurumis**  
📍 Punta Arenas, Chile  
📱 WhatsApp: +56 9 9283 4268  
📷 Instagram: [@grayamigurumis](https://www.instagram.com/grayamigurumis)

## 📝 Licencia

© 2025 Gray Amigurumis. Todos los derechos reservados.

---

**Desarrollado por Manus AI** · Micro-Sitios Quilicura 2025

