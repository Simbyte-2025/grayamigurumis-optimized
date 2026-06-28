# Mi Flow — Landing Page Demo

Prototipo web real, navegable y responsive para **Mi Flow**, peluquería canina y centro de estética canina ubicado en Quinta de Tilcoco, Chile.

Construido como demo comercial para presentar al dueño/a del negocio y mostrar las posibilidades de una microweb orientada a reservas por WhatsApp.

---

## Acceder a la landing

Una vez el servidor esté corriendo, navegar a:

```
http://localhost:3000/mi-flow
```

---

## Cómo correrlo localmente

**Requisitos:** Node.js 18+, pnpm

```bash
# Instalar dependencias
pnpm install

# Modo desarrollo (con hot reload)
pnpm dev
# → abre http://localhost:3000/mi-flow

# Build de producción
pnpm build

# Preview del build
pnpm preview
# → abre http://localhost:3000/mi-flow
```

---

## Estructura de archivos Mi Flow

```
client/src/
├── styles/
│   └── mi-flow.css                 # Fuentes Google, paw patterns, animaciones
├── components/mi-flow/
│   ├── MiFlowLogo.tsx              # Logo SVG circular (badge)
│   ├── MiFlowHeader.tsx            # Navbar sticky + menú mobile
│   ├── MiFlowHero.tsx              # Hero con CTA principal
│   ├── MiFlowTrust.tsx             # 4 beneficios / razones de confianza
│   ├── MiFlowServices.tsx          # Tarjetas de servicios
│   ├── MiFlowBooking.tsx           # Sección "Antes de reservar"
│   ├── MiFlowGallery.tsx           # Galería antes/después (placeholders)
│   ├── MiFlowLocation.tsx          # Ubicación + mapa placeholder
│   ├── MiFlowCTA.tsx               # CTA final grande
│   └── MiFlowFooter.tsx            # Footer
└── pages/
    └── MiFlowLanding.tsx           # Página completa (ensambla todos)
```

---

## Cómo editar datos del negocio

Todos los datos de contacto están declarados como constantes al tope de cada componente. Búscalos por el nombre `WA_URL`, `MAPS_URL` o en el propio JSX.

### WhatsApp (número y mensaje pre-cargado)

En cada componente que tiene un botón de WhatsApp, buscar:

```ts
const WA_URL =
  'https://wa.me/56926249565?text=Hola%20Mi%20Flow%2C%20...';
```

Para cambiar el número: reemplazar `56926249565` por el nuevo número (sin el `+`, con código de país).
Para cambiar el mensaje: editar la parte después de `?text=` (URL-encoded).

### Dirección / Google Maps

En `MiFlowLocation.tsx`:

```ts
const MAPS_URL =
  'https://maps.google.com/?q=Av.+Tomás+Argomedo+2016,+Quinta+de+Tilcoco,+Chile';
```

Reemplazar la URL con el enlace de Google Maps real del local (botón "Compartir" → "Copiar enlace").

### Instagram

En `MiFlowLocation.tsx` y `MiFlowFooter.tsx`, buscar `miflow5` y reemplazar si cambia.

### Textos de servicios / descripciones

En `MiFlowServices.tsx`, el array `services` contiene título, descripción e ícono de cada servicio. Editar directamente.

### Beneficios / Trust block

En `MiFlowTrust.tsx`, el array `benefits` contiene los 4 cuadros de ventajas. Editar título y descripción libremente.

---

## Qué reemplazar con fotos reales

### 1. Galería (prioridad alta)

**Archivo:** `client/src/components/mi-flow/MiFlowGallery.tsx`

Los 6 placeholders `<GalleryPlaceholder>` deben reemplazarse con fotos reales.
Dentro del componente `GalleryPlaceholder`, reemplazar el bloque marcado con:

```tsx
{/* Reemplazar esto con la imagen real: */}
<img
  src="/fotos/antes-caniche-01.jpg"
  alt="Caniche antes del corte"
  className="w-full h-full object-cover"
/>
```

Las fotos deben guardarse en `client/public/fotos/`. Formato recomendado: WebP o JPEG, relación 4:5 (vertical).

### 2. Mapa interactivo

**Archivo:** `client/src/components/mi-flow/MiFlowLocation.tsx`

El bloque del mapa tiene un comentario indicando cómo reemplazarlo por un `<iframe>` de Google Maps Embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Ubicación Mi Flow"
/>
```

Obtener la URL embed desde Google Maps → Compartir → Insertar mapa → copiar la `src` del `<iframe>`.

### 3. Logo vectorial oficial

**Archivo:** `client/src/components/mi-flow/MiFlowLogo.tsx`

El logo actual es un SVG de aproximación. Si se cuenta con el archivo SVG oficial del logo circular, reemplazar el SVG en `MiFlowLogo.tsx` o usar:

```tsx
<img src="/logo-miflow.svg" alt="Mi Flow" width={size} height={size} />
```

---

## Paleta de colores del proyecto

| Token       | Hex       | Uso                         |
|-------------|-----------|---------------------------  |
| Pink        | `#FF4DA6` | Color primario, botones CTA |
| Light pink  | `#FFB6D5` | Textos secundarios, detalles|
| Gold        | `#FFC857` | Acentos dorados, badges     |
| Black       | `#0E0E0E` | Fondo principal             |
| Dark 2      | `#141414` | Fondos alternos             |
| Dark 3      | `#1C1C1C` | Tarjetas                    |

---

## Próximos pasos para propuesta comercial real

1. **Agregar fotos reales** del local y de trabajos realizados (antes/después).
2. **Integrar mapa Google Maps** (iframe embed).
3. **Reemplazar logo SVG** con el archivo oficial si está disponible en vector.
4. **Comprar dominio** (ej. `miflow.cl`) y alojar en Cloudflare Pages (gratis, sin servidor).
5. **SEO local**: agregar meta tags con nombre del negocio, ciudad, tipo de servicio + Google Business Profile.
6. **Analytics**: agregar Umami o Google Analytics para medir tráfico desde WhatsApp/Instagram.
7. **Google Business Profile**: crear o reclamar ficha en Google Maps para aparecer en búsquedas locales.
8. **Optimización de imágenes**: convertir fotos a formato WebP para carga rápida en móvil.
