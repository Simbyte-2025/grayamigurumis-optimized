# 🧶 Gray Amigurumis - Micro-Sitio Web

**Proyecto autogenerado por Manus AI · Micro-Sitios Quilicura 2025 · Fuente Instagram [@grayamigurumis](https://www.instagram.com/grayamigurumis)**

Micro-sitio web de una sola página para el emprendimiento artesanal **Gray Amigurumis**, especializado en la creación de amigurumis tejidos a mano en Punta Arenas, Chile.

## 🎯 Descripción del Proyecto

Este sitio web fue diseñado para presentar de manera profesional y emocional las creaciones artesanales de Gray Amigurumis, facilitando el contacto directo con clientes potenciales a través de WhatsApp y redes sociales. El diseño refleja la calidez, ternura y dedicación que caracteriza cada pieza tejida a mano.

## ✨ Características

- **Diseño Mobile-First:** Optimizado para dispositivos móviles con experiencia responsive
- **Paleta Artesanal:** Colores pasteles suaves que transmiten calidez y ternura
- **Catálogo de Productos:** 8 productos reales extraídos del feed de Instagram
- **Contacto Directo:** Integración con WhatsApp para consultas inmediatas
- **SEO Optimizado:** Metadatos completos para mejor posicionamiento
- **Performance:** Tiempo de carga optimizado < 2.5s

## 🛠️ Stack Tecnológico

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** Wouter
- **Tipografía:** Montserrat + Pacifico (Google Fonts)

## 📦 Instalación

### Prerrequisitos

- Node.js 22.x o superior
- pnpm 10.x o superior

### Pasos de Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/[usuario]/grayamigurumis-manus-v1.git
cd grayamigurumis-manus-v1
```

2. **Instalar dependencias:**
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo:**
```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

## 🚀 Build y Despliegue

### Build para Producción

```bash
pnpm build
```

Los archivos optimizados se generarán en el directorio `dist/`

### Preview del Build

```bash
pnpm preview
```

### Despliegue en Cloudflare Pages

1. **Conectar repositorio a Cloudflare Pages:**
   - Ir a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Seleccionar "Pages" > "Create a project"
   - Conectar con GitHub y seleccionar el repositorio

2. **Configurar Build Settings:**
   - **Framework preset:** Vite
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
   - **Root directory:** `client`

3. **Variables de Entorno (Opcional):**
   ```
   NODE_VERSION=22
   ```

4. **Deploy:**
   - Cloudflare Pages desplegará automáticamente en cada push a `main`
   - URL de producción: `https://grayamigurumis.pages.dev`

### Despliegue Alternativo (Vercel)

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

## 📁 Estructura del Proyecto

```
grayamigurumis-manus-v1/
├── client/
│   ├── public/              # Archivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Catalog.tsx
│   │   │   └── Footer.tsx
│   │   ├── data/
│   │   │   └── products.ts  # Datos de productos
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx          # Configuración de rutas
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globales
│   └── index.html           # HTML principal
├── README.md
├── CHANGELOG.md
├── resumen_tecnico_grayamigurumis.md
└── package.json
```

## 🎨 Personalización

### Colores

Los colores se definen en `client/src/index.css` usando variables CSS:

```css
:root {
  --primary: oklch(0.75 0.12 350);      /* Rosa pastel */
  --secondary: oklch(0.88 0.08 200);    /* Celeste suave */
  --accent: oklch(0.92 0.08 90);        /* Amarillo suave */
}
```

### Productos

Los productos se gestionan en `client/src/data/products.ts`. Para agregar o modificar productos, editar este archivo.

### Número de WhatsApp

El número de contacto se encuentra en:
- `client/src/components/Header.tsx`
- `client/src/components/Hero.tsx`
- `client/src/components/Catalog.tsx`

Buscar `whatsappNumber` y actualizar el valor.

## 📊 Performance

- **Lighthouse Score:** ≥ 85 puntos en mobile
- **Imágenes:** Optimizadas con lazy loading
- **Fonts:** Carga optimizada desde Google Fonts
- **CSS:** Tailwind con purge automático

## 🔍 SEO

El sitio incluye:
- Meta tags completos (title, description, keywords)
- Open Graph tags para redes sociales
- Twitter Card tags
- Geo tags para localización
- Sitemap automático (generado por Vite)

## 📱 Redes Sociales

- **Instagram:** [@grayamigurumis](https://www.instagram.com/grayamigurumis)
- **WhatsApp:** +56 9 9283 4268
- **Ubicación:** Punta Arenas, Chile

## 📄 Licencia

© 2025 Gray Amigurumis. Todos los derechos reservados.

## 🤖 Créditos

Proyecto autogenerado por **Manus AI** como parte de la iniciativa **Micro-Sitios Quilicura 2025**.

Fuente de contenido e inspiración visual: Instagram [@grayamigurumis](https://www.instagram.com/grayamigurumis)

---

**Nota final:** Este proyecto fue creado automáticamente por Manus AI siguiendo las mejores prácticas de desarrollo web, diseño responsive y optimización de performance. El contenido, imágenes y tono de voz fueron extraídos y adaptados del perfil oficial de Instagram de Gray Amigurumis.

