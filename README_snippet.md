# 🎨 Grayamigurumis V2 - Visual Aesthetic Overhaul

## 📋 Overview

This document describes the visual changes applied in the **feat/ui-proto-v2-estetica-sin-logica** branch. The goal was to recreate the aesthetic layer and visual coherence of the Grayamigurumis project using the GeminiCanvas code as a visual reference, while maintaining all existing logic, hooks, and functions.

## 🎨 New Artisan Palette

The following color palette was added to create a warm, handcrafted aesthetic:

```css
--c-coral: #E68B6F;        /* Coral for borders and accents */
--c-terracota: #C88B77;    /* Terracota for hover states */
--c-teal: #32808D;         /* Teal for focus states */
--c-crema: #FCF8F3;        /* Cream for backgrounds */
--c-menta: #7AB89C;        /* Mint for success states */
--c-marron: #8B6F47;       /* Brown for text */
```

## ⏱️ Animation System

### Durations
- `--duration-instant`: 200ms (quick interactions)
- `--duration-quick`: 450ms (button hovers)
- `--duration-smooth`: 600ms (card transitions)
- `--duration-gentle`: 700ms (soft animations)
- `--duration-slow`: 800ms (scroll animations)
- `--duration-heartbeat`: 1500ms (pulsing effects)

### Easing Functions
- `--ease-natural`: cubic-bezier(0.16, 1, 0.3, 1) - Smooth natural motion
- `--ease-bounce`: cubic-bezier(0.34, 1.56, 0.64, 1) - Bouncy effect
- `--ease-soft`: cubic-bezier(0.4, 0, 0.2, 1) - Gentle acceleration
- `--ease-elastic`: cubic-bezier(0.68, -0.55, 0.265, 1.55) - Elastic bounce

## 🖼️ Assets Created

### Textures (`/client/public/assets/textures/`)
Five seamless paper textures (1024x1024px) with subtle grain:

1. **paper-cream-1024.png** - Base color `#FFF9F5` (Hero section)
2. **paper-beige-1024.png** - Base color `#F8EBDD` (Featured Products)
3. **paper-warm-1024.png** - Base color `#F5E6D3` (About section)
4. **paper-neutral-1024.png** - Base color `#FCF8F3` (Catalog section)
5. **paper-parchment-1024.png** - Base color `#EFE7DE` (Testimonials)

All textures have less than 6% contrast for subtle, non-intrusive backgrounds.

### Icons (`/client/public/assets/icons/`)
Official brand SVG icons:

1. **whatsapp.svg** - WhatsApp official logo
2. **instagram.svg** - Instagram official logo

Both icons are:
- Monochrome (use `currentColor`)
- Clean `viewBox` with no watermarks
- Include `aria-hidden="true"` and `focusable="false"`
- Container elements have descriptive `aria-label` and `title`

## 🎭 Visual Components

### Product Cards (.producto-card)
- **Aspect Ratio**: 4:5 for images (`aspect-ratio: 4 / 5`)
- **Border**: 2px solid coral with low opacity (20%)
- **Shadow**: Soft default shadow with coral tint on hover
- **Animation**: Gentle lift on hover (`translateY(-8px) scale(1.02)`)
- **Image Zoom**: 1.05 scale on hover with bounce easing
- **Title**: Color transition to coral on hover
- **Price**: Elastic scale animation (1.08) on hover

### Buttons

#### WhatsApp Button (.btn-whatsapp)
- **Background**: WhatsApp green `#25D366`
- **Animation**: Continuous heartbeat pulse on hover
- **Scale**: 1.05 on hover with additional ring shadow
- **Icon**: WhatsApp SVG with scale and bounce animation

#### Comprar/Pay Button (.btn-comprar)
- **Style**: Transparent with pink border
- **Animation**: Soft fill effect from left to right
- **Fill Color**: Pink `#E91E63`
- **Duration**: 700ms gentle timing
- **Disabled State**: Gray with no hover effects

### Category Filters (.categoria-btn)
- **Inactive**: Pink background `#F4C7D4`
- **Active**: Blue background `#B8D4E3` with scale (1.05)
- **Animation**: Filter pulse effect when activated
- **Hover**: Slight lift (`translateY(-2px)`) with shadow

### Testimonial Cards (.testimonio-card)
- **Border**: 2px dashed with stitched appearance
- **Color**: Terracota `rgba(200, 139, 119, 0.5)`
- **Quote Mark**: Large decorative quotation with opacity transition
- **Hover**: Subtle lift with border color intensification

## 🎬 Animation Classes

### Floating Animations
- `.float-animation`: 3-second gentle float with rotation
- `.float-animation-slow`: 8-second slow vertical float (for hero box)

### Hero Animations
- `.hero-title`: Fade in up animation (800ms)
- `.hero-subtitle`: Fade in up with 200ms delay
- `.hero-cta`: Fade in up with 400ms delay

### Scroll Animations
- `.fade-in-scroll`: Opacity and translateY transition
- `.visible`: Triggered by IntersectionObserver
- Staggered delays for multiple elements (0-500ms)

## 🏗️ Section Backgrounds

All sections use the `.section-paper` utility class with specific background textures:

| Section | Background Class | Color | Texture |
|---------|-----------------|-------|---------|
| Hero | `bg-hero` | `#FFF9F5` | paper-cream |
| Featured | `bg-favs` | `#F8EBDD` | paper-beige |
| About | `bg-about` | `#F5E6D3` | paper-warm |
| Catalog | `bg-catalog` | `#FCF8F3` | paper-neutral |
| Testimonials | `bg-quotes` | `#EFE7DE` | paper-parchment |
| Footer | `bg-footer` | `#EDE8E3` | paper-neutral |

## ♿ Accessibility Improvements

### Motion Reduction
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations reduced to 0.01ms duration */
  /* Heartbeat animation disabled */
}
```

### ARIA Labels
- All icon-only buttons have `aria-label` attributes
- All clickable icons have descriptive `title` attributes
- All SVG icons have `aria-hidden="true"` and `focusable="false"`
- Category filter buttons have `aria-pressed` state
- Mobile menu has proper dialog role and labeling

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states preserved with ring utilities
- Tab order follows logical document flow

## 🎯 Performance Optimizations

### Hardware Acceleration
- `transform: translateZ(0)` for animated elements
- `will-change: transform` for hover-enabled elements
- `backface-visibility: hidden` to prevent flickering

### Conditional Will-Change
```css
.producto-card:not(:hover) {
  will-change: auto; /* Reset after animation */
}
```

### Mobile Optimizations
- Reduced lift animations on mobile (`translateY(-4px)` instead of `-8px`)
- Larger button padding for touch targets (12px vs 10px)
- Simplified animations for better performance

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column, larger touch targets
- **Tablet**: 768px - 1024px - Two columns for products
- **Desktop**: > 1024px - Full multi-column layouts

### Grid Adjustments
```css
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px; /* 16px on mobile */
}
```

## 🔍 Custom Scrollbar

Styled scrollbar matching the artisan theme:
- **Track**: Cream background
- **Thumb**: Coral color with terracota on hover
- **Width**: 10px
- **Border radius**: 5px

## ✨ Key Visual Changes Summary

1. ✅ **Paper Textures**: All sections now have subtle, warm paper backgrounds
2. ✅ **Product Cards**: 4:5 aspect ratio with gentle lift and coral accents
3. ✅ **WhatsApp Button**: Heartbeat animation with SVG icon
4. ✅ **Comprar Button**: Soft fill animation with disabled state support
5. ✅ **Category Filters**: Smooth transitions with pulse effect
6. ✅ **Testimonials**: Stitched dashed borders with quote marks
7. ✅ **Floating Animations**: Logo and hero box have subtle float effects
8. ✅ **Scroll Animations**: Fade-in with staggered delays
9. ✅ **Icons**: Official WhatsApp and Instagram SVGs inline
10. ✅ **Accessibility**: Motion reduction, ARIA labels, focus states

## 🚀 What Was NOT Changed

- ❌ Component logic and state management
- ❌ React hooks and effects
- ❌ API integrations (Gemini, WhatsApp links)
- ❌ Routing and navigation logic
- ❌ Data structures (products, testimonials)
- ❌ TypeScript types and interfaces
- ❌ Build configuration (Vite, Tailwind)

## 📦 Files Modified

### New Files
- `/client/public/assets/textures/paper-cream-1024.png`
- `/client/public/assets/textures/paper-beige-1024.png`
- `/client/public/assets/textures/paper-warm-1024.png`
- `/client/public/assets/textures/paper-neutral-1024.png`
- `/client/public/assets/textures/paper-parchment-1024.png`
- `/client/public/assets/icons/whatsapp.svg`
- `/client/public/assets/icons/instagram.svg`

### Modified Files
- `/client/src/index.css` - Added all visual styles and animations
- All component files already had the correct classes applied

## 🎓 Testing Checklist

### Visual QA
- [ ] Hero section has floating box with cream paper texture
- [ ] Product cards maintain 4:5 aspect ratio
- [ ] Product cards lift gently on hover with coral borders
- [ ] WhatsApp button pulses with heartbeat animation
- [ ] Comprar button fills with pink color smoothly
- [ ] Category filters pulse when activated
- [ ] Testimonials have dashed "stitched" borders
- [ ] All sections have distinct paper textures
- [ ] Scroll animations trigger smoothly
- [ ] Logo floats gently in header

### Accessibility
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Icon buttons have aria-labels
- [ ] Keyboard navigation works correctly
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards

### Responsive
- [ ] Mobile layout works correctly (< 768px)
- [ ] Tablet layout shows proper grid (768px-1024px)
- [ ] Desktop shows full multi-column layout (> 1024px)
- [ ] Touch targets are large enough on mobile
- [ ] Animations are simplified on mobile

## 📸 Screenshots

_(Screenshots would be added to PR showing desktop, tablet, and mobile views)_

---

**Version**: 2.0  
**Date**: 2025-10-25  
**Branch**: feat/ui-proto-v2-estetica-sin-logica  
**Author**: Manus AI / GenSpark (Sonet 4.5)
