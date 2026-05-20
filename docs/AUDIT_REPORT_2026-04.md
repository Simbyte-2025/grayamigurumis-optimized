# Auditoría Técnica y de Calidad — GrayAmigurumis

**Fecha:** 2026-04-12
**Proyecto:** grayamigurumis-optimized
**Stack:** React 18.3 · Vite 7 · TypeScript 5.6 · Tailwind CSS v4 · Framer Motion 12 · Cloudflare Pages

---

## 1. PROBLEMAS CRÍTICOS

### 1.1 JSON-LD desincronizado con el catálogo real

**Archivo:** `client/index.html:56-113`

El schema JSON-LD lista 20 productos que **NO existen** en `products.ts`: Deadpool, Groot, Heisenberg, Iron Man, Goku, etc. El catálogo real tiene 22 productos diferentes (Stitch, Emociones, El Chapulín, etc.).

**Impacto:** Google interpreta datos estructurados incorrectos. Puede generar penalización SEO o rich snippets con información falsa (nombres y precios inexistentes).

**Fix:** Regenerar el JSON-LD `ItemList` desde `products.ts` o generarlo dinámicamente.

---

### 1.2 og:image apunta a CDN de Instagram

**Archivo:** `client/index.html:38, 67`

```html
<meta property="og:image" content="https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/..." />
```

Las URLs de `scontent-*.cdninstagram.com` son **temporales** y rotan. Este enlace puede estar roto o romperse en cualquier momento.

**Impacto:** Previews de Open Graph (WhatsApp, Facebook, Twitter) sin imagen. Mala primera impresión al compartir el sitio.

**Fix:** Subir una imagen OG propia a `/client/public/assets/` y referenciar con URL absoluta del dominio.

---

### 1.3 Mock mode activable en producción via querystring

**Archivo:** `functions/chat/completions.ts:77-78`

```typescript
const url = new URL(request.url);
if (url.searchParams.get("mock") === "1") return true;
```

Cualquier usuario puede agregar `?mock=1` a la URL del endpoint y forzar respuestas mock, **sin importar el entorno**. No hay validación de entorno ni autenticación.

**Impacto:** Un usuario puede obtener respuestas mock del chatbot en producción, afectando la experiencia.

**Fix:** Remover la lógica de querystring o condicionarla a un entorno no-producción.

---

## 2. PRIORIDAD ALTA

### 2.1 Dependencias masivamente sin usar (~15 packages)

**Archivo:** `package.json`

**Dependencias instaladas pero no utilizadas en el código de la app:**

| Package | Peso aprox. | Usado en |
|---------|-------------|----------|
| `recharts` | ~450KB | Solo en `ui/chart.tsx` (no importado) |
| `react-hook-form` | ~30KB | Ningún formulario real |
| `react-day-picker` | ~40KB | Solo en `ui/calendar.tsx` (no importado) |
| `input-otp` | ~15KB | Solo en `ui/input-otp.tsx` (no importado) |
| `react-resizable-panels` | ~20KB | Solo en `ui/resizable.tsx` (no importado) |
| `cmdk` | ~12KB | Solo en `ui/command.tsx` (no importado) |
| `next-themes` | ~5KB | App usa `ThemeContext.tsx` propio |
| `vaul` | ~15KB | Solo en `ui/drawer.tsx` (no importado) |
| `embla-carousel-react` | ~15KB | Verificar uso real |
| `tailwindcss-animate` | ~5KB | Tailwind v4 usa approach diferente |
| `autoprefixer` | dev | Innecesario con Tailwind v4 + Vite |
| `postcss` | dev | Innecesario con Tailwind v4 + Vite |
| `vite-plugin-manus-runtime` | dev | Residuo de plataforma Manus |

**Impacto:** Infla `node_modules`, puede afectar tiempos de build e install. Tree-shaking de Vite mitiga el impacto en bundle final, pero el ruido en package.json dificulta mantenimiento.

**Fix:** `pnpm remove` de los packages no utilizados. Eliminar los 40+ archivos UI que no se importan.

---

### 2.2 52 componentes UI sin usar

**Directorio:** `client/src/components/ui/` (52 archivos)

De los 52 componentes Radix/shadcn generados, la app solo importa un puñado:
- **Usados:** `sonner.tsx`, `tooltip.tsx`, `dialog.tsx`, `input.tsx`, `textarea.tsx`
- **Probablemente sin usar:** accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button-group, calendar, carousel, chart, checkbox, collapsible, command, context-menu, drawer, dropdown-menu, empty, field, form, hover-card, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, spinner, switch, table, tabs, toggle-group, toggle

**Impacto:** Código muerto que dificulta navegación, auditorías y genera ruido en búsquedas.

**Fix:** Verificar imports con `depcheck` (ya instalado) y eliminar componentes no importados.

---

### 2.3 Datos duplicados e inconsistentes en FeaturedProducts

**Archivo:** `client/src/components/FeaturedProducts.tsx:11-15`

```typescript
const featuredProducts = [
  { id: "stitch", name: "Stitch", price: "$18.000", ... },
  // ...
];
```

Los productos destacados están **hardcodeados** con su propio formato (`price: "$18.000"` string) en vez de referenciar `products.ts` que tiene `priceCLP: 18000` (number). Si se actualiza un precio en `products.ts`, no se refleja aquí.

**Impacto:** Riesgo de precios inconsistentes entre secciones del sitio.

**Fix:** Importar desde `products.ts` y filtrar por IDs destacados.

---

### 2.4 Botón "Pagar" con link genérico no funcional

**Archivo:** `client/src/components/Catalog.tsx:41-43` y `FeaturedProducts.tsx:27-29`

```typescript
const handlePagar = (flowLink: string) => {
  window.open(flowLink, "_blank");
};
// Llama con: product.flowLink || "https://www.flow.cl/checkout"
```

Ningún producto tiene `flowLink` definido en `products.ts` (es campo opcional). Todos abren `flow.cl/checkout` genérico, que probablemente no lleva a un checkout real.

**Impacto:** UX confusa. El usuario clickea "Pagar" y llega a una página genérica de Flow.

**Fix:** Remover botón "Pagar" hasta tener links reales, o redirigir a WhatsApp como canal principal de compra.

---

## 3. PRIORIDAD MEDIA

### 3.1 Función `handleWhatsApp()` duplicada

**Archivos:** `Catalog.tsx:36-39` y `FeaturedProducts.tsx:21-24`

Lógica idéntica en ambos componentes. 

**Fix:** Extraer a `lib/utils.ts` o un helper compartido.

---

### 3.2 Función `@deprecated` exportada

**Archivo:** `client/src/services/chatService.ts:218-225`

```typescript
/** @deprecated Esta función ya no es necesaria */
export function convertMessagesToAPIFormat(...) { ... }
```

**Fix:** Verificar que no se importa en ningún lado y eliminar.

---

### 3.3 Uso de `any` (5 instancias)

| Archivo | Línea | Contexto |
|---------|-------|----------|
| `chatService.ts` | 148 | `(errorData as any).error` |
| `input.tsx` | 25 | `(e.nativeEvent as any).isComposing` |
| `textarea.tsx` | 24 | `(e.nativeEvent as any).isComposing` |
| `dialog.tsx` | 107 | `(e as any).isComposing` |
| `usePersistFn.ts` | 3 | `(...args: any[]) => any` |

Los de input/textarea/dialog son para IME composition (razonable, `isComposing` no está en el tipo estándar). El de chatService debería tiparse con una interfaz de error.

---

### 3.4 Botones de categoría repetidos sin mapear

**Archivo:** `client/src/components/Catalog.tsx:68-116`

4 botones de filtro de categoría con props casi idénticas. Podrían mapearse desde un array.

---

### 3.5 Variable `ext` sin usar en vite.config.ts

**Archivo:** `vite.config.ts:67`

```typescript
const info = assetInfo.name.split('.');
const ext = info[info.length - 1]; // ← nunca se usa
```

La variable `ext` se declara pero se usan regex para clasificar assets. Código muerto.

---

### 3.6 `tailwind.config.ts` potencialmente innecesario

**Archivo:** `tailwind.config.ts`

Tailwind CSS v4 usa configuración basada en CSS (`@theme` en `index.css`), no archivo JS/TS. El archivo `tailwind.config.ts` puede estar siendo ignorado o causar conflictos con la config CSS.

---

## 4. PRIORIDAD BAJA

### 4.1 Cobertura de tests mínima

Solo 2 archivos de test:
- `chatService.test.ts` (71 LOC) — contratos de API
- `products.test.ts` (67 LOC) — integridad de datos

No hay tests de componentes, ni e2e, ni snapshot tests. Para un sitio en producción, sería recomendable al menos tests de los componentes principales (Header, Catalog, Chatbot).

---

### 4.2 PWA manifest sin service worker

`manifest.json` está configurado pero no hay service worker registrado. La PWA no funciona offline.

---

### 4.3 Preconnect a Google Fonts sin uso

**Archivo:** `client/index.html:18`

```html
<link rel="preconnect" href="https://fonts.gstatic.com">
```

Todas las fuentes son locales (WOFF2). El preconnect a Google Fonts es innecesario y desperdicia una conexión temprana.

---

### 4.4 `.remember/` en directorio raíz

Directorio de propósito desconocido. Si no es necesario, debería estar en `.gitignore` o eliminarse.

---

### 4.5 Sección `#contacto` no existe

**Archivo:** `client/src/components/Header.tsx:93`

El header tiene un botón "Contacto" que llama `scrollToSection("contacto")`, pero no existe ninguna sección con `id="contacto"` en la app. El scroll no llega a ningún destino.

---

## 5. FORTALEZAS

| Área | Detalle |
|------|---------|
| **Seguridad API** | API key nunca expuesta. Proxy via Pages Function con CORS restringido |
| **Optimización de imágenes** | PNG → WebP/AVIF (-80-87%). Scripts de conversión incluidos |
| **Optimización de fuentes** | WOFF2 local + `font-display: swap`. 772KB → 156KB (-80%) |
| **Bundle** | Code splitting (4 vendor chunks), Terser con drop_console, lazy-load del chatbot |
| **Accesibilidad** | Skip-to-content link, ARIA labels, focus trap en mobile menu, `aria-pressed` en filtros |
| **TypeScript strict** | `strict: true` habilitado, disciplina consistente |
| **Sistema de animaciones** | 13 sistemas Framer Motion bien organizados con easing curves y GPU acceleration |
| **Fallback del chatbot** | 4 modelos free con fallback automático y retry exponencial |
| **Estructura de datos** | Catálogo tipado con interfaces claras (`Product`, `ProductImage`) |
| **Git history** | Commits descriptivos y organizados con PRs |

---

## 6. RESUMEN DE RECOMENDACIONES

| # | Acción | Severidad | Estado |
|---|--------|-----------|--------|
| 1 | Regenerar JSON-LD desde `products.ts` | **Crítico** | HECHO |
| 2 | Reemplazar og:image con asset propio | **Crítico** | HECHO |
| 3 | Eliminar mock por querystring en prod | **Crítico** | HECHO |
| 4 | Limpiar dependencias y UI no usados | **Alto** | HECHO (36 packages, 48 archivos UI eliminados) |
| 5 | Unificar FeaturedProducts con products.ts | **Alto** | HECHO |
| 6 | Resolver botón "Pagar" (quitar o configurar) | **Alto** | PENDIENTE (decisión del usuario) |
| 7 | Extraer `handleWhatsApp` a utils | **Medio** | HECHO |
| 8 | Eliminar función @deprecated | **Medio** | HECHO |
| 9 | Tipar `any` en chatService | **Medio** | HECHO |
| 10 | Mapear botones de categoría | **Medio** | HECHO |
| 11 | Limpiar variable `ext` en vite.config | **Medio** | HECHO |
| 12 | `#contacto` — ya existe en Footer | **Bajo** | N/A (falso positivo) |
| 13 | Remover preconnect a Google Fonts | **Bajo** | HECHO |
| 14 | Agregar tests de componentes | **Bajo** | PENDIENTE |

### Verificación post-fix
- `pnpm build`: OK (2.79s)
- `pnpm test`: 2 archivos, 11 tests, todos pasan
- Errores TS preexistentes: 9 (Framer Motion Variant type mismatch, no introducidos por esta auditoría)
