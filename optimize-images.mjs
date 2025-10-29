import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC_DIR = './client/public';
const MAX_WIDTH = 1200; // Ancho máximo para imágenes

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 Procesando: ${filePath}`);
    console.log(`   Tamaño original: ${metadata.width}x${metadata.height}, ${(metadata.size / 1024).toFixed(2)}KB`);
    
    // Determinar nuevo ancho
    const newWidth = metadata.width > MAX_WIDTH ? MAX_WIDTH : metadata.width;
    
    if (ext === '.png') {
      // Logo y iconos PNG -> WebP optimizado
      const webpPath = filePath.replace('.png', '.webp');
      await image
        .resize(newWidth, null, { withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);
      
      const newStats = await stat(webpPath);
      console.log(`   ✅ Convertido a WebP: ${(newStats.size / 1024).toFixed(2)}KB`);
      console.log(`   📉 Ahorro: ${((1 - newStats.size / metadata.size) * 100).toFixed(1)}%`);
      
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // JPG -> Optimizar y crear WebP
      const optimizedPath = filePath.replace(ext, '-optimized' + ext);
      const webpPath = filePath.replace(ext, '.webp');
      
      // Optimizar JPG
      await image
        .resize(newWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(optimizedPath);
      
      // Crear WebP
      await image
        .resize(newWidth, null, { withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);
      
      const jpgStats = await stat(optimizedPath);
      const webpStats = await stat(webpPath);
      
      console.log(`   ✅ JPG optimizado: ${(jpgStats.size / 1024).toFixed(2)}KB`);
      console.log(`   ✅ WebP creado: ${(webpStats.size / 1024).toFixed(2)}KB`);
      console.log(`   📉 Ahorro: ${((1 - webpStats.size / metadata.size) * 100).toFixed(1)}%`);
    }
    
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        // Excluir archivos ya optimizados
        if (!entry.name.includes('optimized') && !entry.name.includes('backup')) {
          await optimizeImage(fullPath);
        }
      }
    }
  }
}

console.log('🚀 Iniciando optimización de imágenes...\n');
await processDirectory(PUBLIC_DIR);
console.log('\n✨ Optimización completada!');
