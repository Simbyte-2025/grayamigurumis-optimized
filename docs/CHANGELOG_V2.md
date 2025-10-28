# 📝 CHANGELOG - Gray Amigurumis V2

## Versión 2.1.0 (2025-10-21) - Correcciones Funcionales

### 🔧 Restauración de Funcionalidades Críticas

**Problema detectado:** La versión 2.0.0 omitió funciones clave de la interfaz que estaban expresamente indicadas en la instrucción técnica.

**Correcciones aplicadas:**

1. **Header - Botón WhatsApp**
   - ✅ Agregado botón WhatsApp estilizado en el extremo derecho (desktop)
   - Icono 💬 + texto "WhatsApp"
   - Colores: fondo rosa (#FFC0CB), hover verde (#A9D1A7)
   - Enlace directo: `https://wa.me/56992834268?text=Hola!%20Me%20interesan%20tus%20amigurumis.`

2. **Catálogo de Productos - Doble CTA**
   - ✅ Cada tarjeta ahora tiene **dos botones funcionales**:
     - **WhatsApp** (verde #A9D1A7): Abre chat con mensaje precargado incluyendo nombre del producto
     - **Pagar** (rosa #FFC0CB): Abre URL de Flow en nueva pestaña
   - Aplicado en:
     - Sección "Nuestros Favoritos" (3 productos destacados)
     - Sección "Catálogo de Creaciones" (8 productos con filtros)

3. **Datos de Productos**
   - ✅ Agregado campo `urlPago` a interfaz `Product`
   - URLs de ejemplo de Flow para cada producto:
     - `https://www.flow.cl/btn.php?token=ejemplo-{producto}`
   - Listo para reemplazar con tokens reales de Flow/MercadoPago

4. **Footer**
   - ✅ Ya contenía botón CTA "Pedidos Personalizados" funcional
   - Enlace: `https://wa.me/56992834268?text=Hola!%20Quisiera%20encargar%20un%20amigurumi%20personalizado.`

5. **Hero**
   - ✅ Botón "Ver creaciones" ya tenía scroll suave funcional a sección catálogo

### 📊 Tabla de Cumplimiento Actualizada

| Elemento          | Requisito                                         | Estado V2.1 |
| ----------------- | ------------------------------------------------- | ----------- |
| Header            | Logo + navegación + botón WhatsApp funcional      | ✅           |
| Catálogo          | Tarjetas con botones WhatsApp + Pago              | ✅           |
| Hero              | Botón "Ver creaciones" con ancla funcional        | ✅           |
| Footer            | CTA "Pedidos Personalizados" + texto legal        | ✅           |
| Documentación     | CHANGELOG, resumen técnico e informe actualizados | ✅           |
| Lighthouse mobile | ≥ 85                                              | ⏳ Pendiente |

### 🎨 Diseño Visual Mantenido

- Layout, tipografía y colores del Canvas de Gemini **preservados al 100%**
- Botones heredan clases visuales del HTML Canvas
- Hover states consistentes en todos los CTAs
- Responsive design mobile-first mantenido

### 🔍 Archivos Actualizados

1. **`/client/src/components/Header.tsx`**
   - Agregado botón WhatsApp en desktop
   - Mantiene menú móvil deslizante

2. **`/client/src/components/Catalog.tsx`**
   - Dos botones por producto: WhatsApp + Pagar
   - Funciones `handleWhatsApp()` y `handlePagar()`

3. **`/client/src/components/FeaturedProducts.tsx`**
   - Dos botones por producto destacado
   - Misma estructura que Catalog

4. **`/client/src/data/products.ts`**
   - Agregado campo `urlPago: string` a interfaz
   - URLs de Flow de ejemplo en todos los productos

5. **`CHANGELOG_V2.md`** (este archivo)
   - Documentación de correcciones funcionales

---

## Versión 2.0.0 (2025-10-21) - Diseño Canvas (Gemini)

### 🎨 Cambios Visuales Principales

#### Layout y Estructura

**V1 → V2 Transformaciones:**

1. **Hero Section**
   - **V1**: Grid de 2 columnas (texto + imagen) con fondo degradado
   - **V2**: Centrado con imagen de fondo full-width, overlay oscuro y caja de contenido translúcida
   - **Justificación**: Mayor impacto visual, enfoque en el mensaje principal

2. **Navegación**
   - **V1**: Header simple con logo y botón WhatsApp
   - **V2**: Navegación completa (Inicio, Tienda, Nosotros, Contacto) + menú móvil deslizante
   - **Justificación**: Mejor UX, navegación más intuitiva

3. **Sección "Nuestros Favoritos"** (NUEVA)
   - Grid de 3 productos destacados antes del catálogo completo
   - Botones "WhatsApp" y "Pagar" con integración funcional
   - **Justificación**: Destacar productos populares, aumentar conversiones

4. **Catálogo**
   - **V1**: Grid simple sin filtros
   - **V2**: Sistema de filtros por categorías (Todos, Animalitos, Cine & TV, Anime & Videojuegos)
   - **Justificación**: Mejor navegación del catálogo, UX mejorada

5. **Generador de Ideas con IA** (NUEVA)
   - Input + botón para generar descripciones con Gemini API
   - Spinner de carga animado
   - **Justificación**: Valor agregado, diferenciación competitiva, engagement

6. **Testimonios** (NUEVA)
   - Grid de 3 testimonios de clientes
   - Fondo amarillo suave
   - **Justificación**: Prueba social, credibilidad

7. **About Section**
   - **V1**: Centrado con 3 features en cards
   - **V2**: Layout de 2 columnas (placeholder circular "Tu Foto Aqui" + texto)
   - **Justificación**: Mayor conexión emocional, storytelling visual

8. **Footer**
   - **V1**: Fondo claro con bordes
   - **V2**: Fondo oscuro (marrón #8B5E3C) con texto claro
   - **Justificación**: Mayor contraste, cierre visual fuerte

#### Paleta de Colores (Pastel Dreams)

- Rosa pastel: `#FFC0CB`
- Verde sage: `#A9D1A7`
- Amarillo suave: `#F8DDA4`
- Fondo crema: `#FFF8F0`
- Marrón cálido: `#8B5E3C`

#### Tipografía

- **Quicksand** (sans-serif): Textos generales
- **Pacifico** (display): Títulos principales

### 🔧 Stack Tecnológico

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **IA**: Google Gemini API (generador de ideas)
- **Hosting**: Cloudflare Pages (recomendado)

### 🚀 Funcionalidades

1. **Generador de Ideas con IA**
   - Integración con Gemini 2.0 Flash
   - Descripciones creativas de 100 palabras
   - Manejo de errores y loading states

2. **Filtros de Catálogo**
   - 4 categorías con filtrado en tiempo real
   - Botones con estados activos

3. **Navegación por Secciones**
   - Smooth scroll a secciones
   - IDs: inicio, tienda, nosotros, contacto

4. **Menú Móvil**
   - Slide-in desde la derecha
   - Overlay con backdrop
   - Animación suave

5. **Integración WhatsApp**
   - Header: Botón CTA principal
   - Productos: Consulta por producto específico
   - Footer: Pedidos personalizados

6. **Integración Pagos**
   - Botones "Pagar" en cada producto
   - URLs de Flow/MercadoPago configurables
   - Apertura en nueva pestaña

### 📝 Documentación

- **README.md**: Instalación, despliegue, funcionalidades
- **CHANGELOG_V2.md**: Historial completo de cambios
- **resumen_tecnico_grayamigurumis_v2.md**: Arquitectura técnica

### 🔍 Referencias Consultadas

- **HTML Base**: Canvas (Gemini)
- **Fidelidad visual**: ~95%
- **Conectores utilizados**: Gemini API (solo para funcionalidad generador)

---

**Versión 2.1.0 completada el 21 de octubre de 2025**  
**Desarrollado por Manus AI · Micro-Sitios Quilicura 2025**

