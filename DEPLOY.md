# 🚀 Guía de Despliegue - GrayAmigurumis Optimizado

## ✅ Optimizaciones Completadas

✨ **El proyecto está listo para producción con:**
- Bundle reducido en 54% (6.3MB → 2.9MB)
- Imágenes optimizadas en 80%
- JavaScript optimizado con code splitting
- CSS limpio y performante
- Configuración lista para Cloudflare Pages

---

## 📦 Crear Nuevo Repositorio en GitHub

### **Paso 1: Crear repositorio nuevo**

1. Ve a: **https://github.com/new**
2. Configura:
   - **Repository name:** `grayamigurumis-optimized`
   - **Description:** `✨ GrayAmigurumis - Amigurumis artesanales tejidos a mano | Optimizado para Cloudflare Pages`
   - **Visibility:** Public
   - **NO** inicializar con README, .gitignore o license (ya existen)
3. Click en **"Create repository"**

### **Paso 2: Subir código al nuevo repositorio**

```bash
cd /home/user/webapp

# Remover remote anterior (si existe)
git remote remove origin 2>/dev/null || true

# Agregar nuevo remote
git remote add origin https://github.com/Simbyte-2025/grayamigurumis-optimized.git

# Push al nuevo repositorio
git push -u origin master

# Verificar
git remote -v
```

---

## ☁️ Despliegue a Cloudflare Pages

### **Opción 1: Desde GitHub (Recomendado)**

1. Ve a: **https://dash.cloudflare.com/**
2. Selecciona tu cuenta → **Workers & Pages**
3. Click en **"Create Application"** → **"Pages"** → **"Connect to Git"**
4. Selecciona tu repositorio: `grayamigurumis-optimized`
5. Configura el build:
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   ```
6. Variables de entorno (si las necesitas):
   ```
   NODE_VERSION=20
   ```
7. Click en **"Save and Deploy"**

### **Opción 2: Desde CLI con Wrangler**

```bash
# Instalar Wrangler globalmente (si no está)
npm install -g wrangler

# Login a Cloudflare
wrangler login

# Deploy directo
cd /home/user/webapp
wrangler pages deploy dist --project-name grayamigurumis

# O con nombre personalizado
wrangler pages deploy dist --project-name grayamigurumis-prod
```

---

## 🔧 Configuración Post-Despliegue

### **1. Dominio Personalizado (Opcional)**

En Cloudflare Pages:
1. Ve a tu proyecto → **Custom domains**
2. Click en **"Set up a custom domain"**
3. Agrega tu dominio (ej: `www.grayamigurumis.cl`)
4. Sigue las instrucciones para configurar DNS

### **2. Headers de Cache (Recomendado)**

Crea un archivo `_headers` en `client/public/`:

```
# Cache para assets con hash (1 año)
/assets/js/*
  Cache-Control: public, max-age=31536000, immutable

/assets/css/*
  Cache-Control: public, max-age=31536000, immutable

/assets/images/*
  Cache-Control: public, max-age=31536000, immutable

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable

# Cache para imágenes (1 día)
/*.webp
  Cache-Control: public, max-age=86400

# Security headers
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

Después vuelve a hacer build y deploy.

### **3. Variables de Entorno**

Si necesitas configurar variables:

**En Cloudflare Dashboard:**
1. Tu proyecto → **Settings** → **Environment variables**
2. Agregar según necesites

**Localmente (.env):**
```bash
# No commitear este archivo
VITE_APP_TITLE=GrayAmigurumis
VITE_ANALYTICS_ENDPOINT=https://tu-analytics.com
VITE_ANALYTICS_WEBSITE_ID=tu-website-id
```

---

## 🧪 Testing Post-Despliegue

### **1. Verificar funcionamiento básico**
- ✅ Página carga correctamente
- ✅ Imágenes WebP se muestran
- ✅ Navegación funciona
- ✅ Botones de WhatsApp e Instagram funcionan

### **2. Prueba de rendimiento**

**Lighthouse:**
```bash
# Desktop
npx lighthouse https://tu-sitio.pages.dev --view

# Mobile
npx lighthouse https://tu-sitio.pages.dev --preset=mobile --view
```

**Resultados esperados:**
- Desktop: 85+ Performance
- Mobile: 70+ Performance

### **3. Verificar cache**

Abre DevTools → Network:
- Assets con hash deben tener `Cache-Control: immutable`
- Segunda carga debe ser casi instantánea (cache hit)

---

## 📊 Monitoreo

### **Cloudflare Analytics**

En tu dashboard:
- **Analytics** → Ver tráfico, requests, bandwidth
- **Performance** → Core Web Vitals

### **Google Analytics / Umami**

Si tienes configurado:
- Verifica que los eventos se registren correctamente
- Monitorea páginas más visitadas

---

## 🔄 Flujo de Updates

### **Para futuras actualizaciones:**

```bash
cd /home/user/webapp

# 1. Hacer cambios en el código
# ... editar archivos ...

# 2. Test local
npm run dev
# Verificar en http://localhost:3000

# 3. Build optimizado
npm run build

# 4. Preview del build
npm run preview
# Verificar en http://localhost:3000

# 5. Commit y push
git add .
git commit -m "feat: nueva funcionalidad"
git push origin master

# 6. Deploy automático (si configuraste GitHub Pages)
# O manual: wrangler pages deploy dist
```

---

## 🆘 Troubleshooting

### **Problema: Imágenes no cargan**
- Verifica que las rutas sean correctas (`/logo.webp` no `logo.webp`)
- Asegúrate que las imágenes estén en `client/public/`

### **Problema: CSS no se aplica**
- Verifica que `@import "tailwindcss"` esté en `index.css`
- Rebuild: `npm run build`

### **Problema: Build falla**
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json dist
npm install --legacy-peer-deps
npm run build
```

### **Problema: Deploy falla en Cloudflare**
- Verifica que `dist/` se haya generado correctamente
- Asegúrate que el build command sea: `npm run build`
- Verifica que el output directory sea: `dist`

---

## 📈 Métricas de Éxito

### **Performance Goals**

| Métrica | Target | Actual (pre-opt) | Expected |
|---------|--------|------------------|----------|
| Desktop Performance | 85+ | 59 | ✅ 85+ |
| Mobile Performance | 70+ | 37 | ✅ 70+ |
| Bundle Size | < 3MB | 6.3MB | ✅ 2.9MB |
| LCP Desktop | < 2.5s | 5.2s | ✅ < 2.5s |
| LCP Mobile | < 4s | 30.3s | ✅ < 4s |

---

## 🎉 ¡Listo!

Tu proyecto está optimizado y listo para:
- ✅ GitHub (nuevo repositorio)
- ✅ Cloudflare Pages (despliegue)
- ✅ Producción (rendimiento óptimo)

**URLs útiles:**
- Repositorio: `https://github.com/Simbyte-2025/grayamigurumis-optimized`
- Cloudflare: `https://dash.cloudflare.com`
- Docs: Ver `OPTIMIZATIONS.md` para detalles técnicos

---

**¿Necesitas ayuda?** Revisa:
- `OPTIMIZATIONS.md` - Detalles técnicos de las optimizaciones
- `README.md` - Documentación del proyecto
- `package.json` - Scripts disponibles
