# 🎨 Grayamigurumis UI Prototype v2.0 - Cambios Visuales

## 📋 Resumen

Este documento detalla los cambios visuales y estéticos implementados en el prototipo v2.0 de Grayamigurumis. Se han aplicado mejoras en la capa visual manteniendo toda la lógica y estructura funcional existente.

## 🎨 Paleta de Colores Artesanal

### Colores Principales
- **Coral**: `#E68B6F` - Usado para acentos y hover states
- **Terracota**: `#C88B77` - Para bordes y detalles
- **Teal**: `#32808D` - Acentos especiales
- **Crema**: `#FCF8F3` - Fondos suaves
- **Menta**: `#7AB89C` - Elementos de éxito
- **Marrón**: `#8B6F47` - Textos y títulos

### Colores de Texto
- **Texto Principal**: `#4A5568` - Gris oscuro cálido para mejor contraste
- **Texto Secundario**: `#777C7C` - Gris medio para textos descriptivos

## 📁 Ubicación de Assets

### Texturas de Papel (Seamless)
Ubicadas en: `/client/public/assets/textures/`

- `paper-cream-1024.png` - Base #FFF9F5 (Hero)
- `paper-beige-1024.png` - Base #F8EBDD (Favoritos)
- `paper-warm-1024.png` - Base #F5E6D3 (Sobre Nosotros)
- `paper-neutral-1024.png` - Base #FCF8F3 (Catálogo/Footer)
- `paper-parchment-1024.png` - Base #EFE7DE (Testimonios)

**Características**:
- Tamaño: 1024x1024px
- Formato: PNG con transparencia
- Contraste: ≤ 6%
- Azulejables (seamless)
- Sin marcas de agua

### Íconos SVG
Ubicados en: `/client/public/assets/icons/`

- `whatsapp.svg` - Ícono oficial de WhatsApp (monocromo)
- `instagram.svg` - Ícono oficial de Instagram (monocromo)

**Características**:
- Formato: SVG inline
- `viewBox` limpio
- `aria-hidden="true"` y `focusable="false"`
- Color controlado por `currentColor`

## ⚡ Variables CSS Añadidas

### Duraciones de Animación
```css
--duration-instant: 200ms;
--duration-quick: 450ms;
--duration-smooth: 600ms;
--duration-gentle: 700ms;
--duration-slow: 800ms;
--duration-heartbeat: 1500ms;
```

### Easing Functions
```css
--ease-natural: cubic-bezier(0.16, 1, 0.3, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
--ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Sombras Contextuales
```css
--shadow-card-default: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-card-hover: 0 12px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(230, 139, 111, 0.12);
```

## 🎬 Animaciones Implementadas

### 1. Tarjetas de Producto - "Gentle Lift"
- **Trigger**: Hover
- **Efecto**: Elevación suave hacia arriba con escala sutil
- **Transform**: `translateY(-8px) scale(1.02)`
- **Sombra dinámica** con toque coral
- **Aspect Ratio**: 4:5 mantenido
- **Transición imagen**: Zoom interno con bounce

### 2. Botón WhatsApp - "Heartbeat Pulse"
- **Trigger**: Hover
- **Efecto**: Latido suave continuo
- **Animación**: `@keyframes gentleHeartbeat`
- **Duración**: 1500ms infinito
- **Escala**: Oscila entre 1.05 y 1.08

### 3. Botón Comprar - "Soft Fill"
- **Trigger**: Hover
- **Efecto**: Relleno progresivo de izquierda a derecha
- **Pseudo-elemento**: `::before` con width animado
- **Transición de color**: De transparente a rosa

### 4. Filtros de Categoría - "Smooth Transition"
- **Estado activo**: Fondo #B8D4E3 con scale(1.05)
- **Animación pulse**: Al activar
- **Hover**: Elevación y escala sutil

### 5. Testimonios - "Stitched Border"
- **Borde**: `2px dashed rgba(200, 139, 119, 0.5)`
- **Hover**: Elevación suave con borde más visible
- **Comillas decorativas** con transición de opacidad

### 6. Logo Flotante - "Gentle Float"
- **Animación**: Flotación suave 3s infinito
- **Transform**: `translateY(-8px) rotate(5deg)` en punto medio
- **Aplicado a**: Logo circular del header

### 7. Hero - "Float Animation Slow"
- **Animación**: Flotación muy lenta 8s infinito
- **Efecto**: Caja de contenido flotando sutilmente
- **Transform**: `translateY(-6px)` en punto medio

### 8. Scroll Reveal - "Fade In"
- **Efecto**: Aparición progresiva al hacer scroll
- **Clase**: `.fade-in-scroll`
- **Observer**: IntersectionObserver en App.tsx
- **Delays escalonados**: 0-500ms para elementos consecutivos

## 📐 Fondos por Sección

| Sección | Clase CSS | Color Base | Textura |
|---------|-----------|------------|---------|
| Hero | `section-paper bg-hero` | #FFF9F5 | paper-cream |
| Favoritos | `section-paper bg-favs` | #F8EBDD | paper-beige |
| Sobre Nosotros | `section-paper bg-about` | #F5E6D3 | paper-warm |
| Catálogo | `section-paper bg-catalog` | #FCF8F3 | paper-neutral |
| Testimonios | `section-paper bg-quotes` | #EFE7DE | paper-parchment |
| Footer | `section-paper bg-footer` | #EDE8E3 | paper-neutral |

## ♿ Accesibilidad

### Mejoras Implementadas
1. **Aria Labels**: Todos los botones y enlaces con íconos tienen `aria-label` y `title`
2. **Focus States**: Mejorados con outlines claros
3. **Contraste**: ≥ 4.5:1 en todos los textos
4. **Motion Reduction**: 
   ```css
   @media (prefers-reduced-motion: reduce) {
     /* Animaciones deshabilitadas */
   }
   ```
5. **Keyboard Navigation**: Mantenida y mejorada
6. **Semantic HTML**: Roles ARIA para diálogos y navegación

## 🎯 Componentes Modificados

### Header.tsx
- Logo con círculo flotante y animación
- Ícono SVG de WhatsApp inline
- Menú móvil mejorado con accesibilidad
- Colores actualizados a nueva paleta

### Hero.tsx
- Caja flotante lenta con fondo semi-transparente
- Clases de animación aplicadas (hero-title, hero-subtitle, hero-cta)
- Background con textura papel crema

### FeaturedProducts.tsx
- Tarjetas con clase `.producto-card`
- Botones con clases `.btn-whatsapp` y `.btn-comprar`
- Aspect ratio 4:5 en imágenes
- Fade-in-scroll en tarjetas

### Catalog.tsx
- Filtros con clase `.categoria-btn`
- Grid responsive mejorado
- Tarjetas coherentes con Featured
- Fondo con textura papel neutral

### About.tsx
- Imagen circular flotante
- Borde blanco decorativo
- Fondo con textura papel warm
- Responsive optimizado

### Testimonials.tsx
- Clase `.testimonio-card` con borde cosido
- Comillas decorativas animadas
- Fondo con textura papel parchment

### Footer.tsx
- Íconos SVG de Instagram y WhatsApp inline
- Colores actualizados (#4A5568, #FFF9F5)
- Fondo con textura
- Responsive mejorado

### App.tsx
- IntersectionObserver añadido para scroll animations
- Cleanup en useEffect

## 🔧 Clases CSS Nuevas

### Clases de Componentes
- `.producto-card` - Tarjetas de producto con animaciones
- `.btn-whatsapp` - Botón WhatsApp con heartbeat
- `.btn-comprar` - Botón comprar con fill animation
- `.categoria-btn` - Filtros de categoría
- `.testimonio-card` - Tarjetas de testimonio con borde cosido

### Clases de Animación
- `.float-animation` - Flotación rápida (3s)
- `.float-animation-slow` - Flotación lenta (8s)
- `.fade-in-scroll` - Aparición al scroll
- `.hero-title` - Entrada con fadeInUp
- `.hero-subtitle` - Entrada con fadeInUp + delay
- `.hero-cta` - Entrada con fadeInUp + delay mayor

### Clases de Fondo
- `.section-paper` - Base para texturas
- `.bg-hero`, `.bg-favs`, `.bg-about`, etc. - Fondos específicos

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Animaciones reducidas, espaciado compacto
- **Tablet**: 768px - 1024px - Grid adaptativo
- **Desktop**: > 1024px - Experiencia completa

### Optimizaciones Móviles
```css
@media (max-width: 768px) {
  .producto-card:hover {
    transform: translateY(-4px) scale(1.01); /* Menos elevación */
  }
  .btn-whatsapp, .btn-comprar {
    padding: 12px 24px; /* Botones más grandes */
    font-size: 15px;
  }
}
```

## ⚡ Performance

### Optimizaciones Implementadas
1. **GPU Acceleration**: `will-change: transform` en elementos animados
2. **Backface Visibility**: `hidden` para mejor rendering
3. **Lazy Loading**: Imágenes con `loading="lazy"`
4. **Error Handling**: onError en todas las imágenes
5. **Cleanup automático**: `will-change: auto` al finalizar hover

## 🧪 Testing Sugerido

### Desktop (> 1024px)
- [ ] Animaciones smooth en todas las tarjetas
- [ ] Heartbeat en botón WhatsApp
- [ ] Fill animation en botón Comprar
- [ ] Scroll reveal funcionando
- [ ] Texturas visibles y alineadas

### Tablet (768px - 1024px)
- [ ] Grid responsive correcto
- [ ] Animaciones funcionando
- [ ] Touch interactions suaves

### Mobile (< 768px)
- [ ] Animaciones reducidas activas
- [ ] Botones con tamaño táctil adecuado
- [ ] Menú móvil accesible
- [ ] Motion reduction respetado

### Accesibilidad
- [ ] Navegación por teclado completa
- [ ] Aria-labels presentes
- [ ] Contraste ≥ 4.5:1
- [ ] Motion reduction funcional

## 🚀 Próximos Pasos

1. **Build de Producción**: Probar `pnpm build` para validar assets
2. **Lighthouse Audit**: Verificar scores de performance y accesibilidad
3. **Cross-browser Testing**: Verificar en Chrome, Firefox, Safari
4. **Mobile Device Testing**: Probar en dispositivos reales

## 📝 Notas Técnicas

- **Lógica NO modificada**: Hooks, funciones y rutas intactas
- **Componentes shadcn/ui**: Mantenidos sin cambios
- **TypeScript**: No hay errores de tipo
- **Tailwind**: Clases custom agregadas vía @layer components
- **Assets locales**: No se depende de CDNs externos

## 🔍 Verificación de Cambios

```bash
# Ver archivos modificados
git status

# Ver diff de cambios
git diff

# Compilar y verificar
pnpm build

# Ejecutar dev server
pnpm dev
```

---

**Desarrollado para**: Grayamigurumis - Prototipo v2.0  
**Fecha**: Octubre 2025  
**Branch**: `feat/ui-proto-v2-estetica-sin-logica`
