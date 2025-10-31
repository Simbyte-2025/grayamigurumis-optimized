#!/usr/bin/env node
/**
 * Script para convertir imagen hero a AVIF con fallback WebP
 * Objetivo: Reducir LCP (Largest Contentful Paint)
 * 
 * Optimizaciones:
 * - AVIF: Máxima compresión, soporte moderno
 * - WebP: Fallback para navegadores sin AVIF
 * - Quality 80: Balance entre calidad visual y tamaño
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_PATH = join(__dirname, 'client/public/assets/img/placeholder-4x5.jpg');
const OUTPUT_DIR = join(__dirname, 'client/public/assets/img');

const AVIF_OUTPUT = join(OUTPUT_DIR, 'placeholder-4x5.avif');
const WEBP_OUTPUT = join(OUTPUT_DIR, 'placeholder-4x5.webp');

async function convertImage() {
  if (!existsSync(INPUT_PATH)) {
    console.error(`❌ Error: No se encontró ${INPUT_PATH}`);
    process.exit(1);
  }

  console.log('🎨 Convirtiendo imagen hero a AVIF y WebP...\n');

  try {
    const image = sharp(INPUT_PATH);
    const metadata = await image.metadata();
    
    console.log(`📊 Imagen original: ${metadata.width}x${metadata.height}, ${(metadata.size / 1024).toFixed(2)} KB`);

    // Convertir a AVIF (mejor compresión)
    console.log('🔄 Generando AVIF...');
    await image
      .clone()
      .avif({ quality: 80, effort: 6 })
      .toFile(AVIF_OUTPUT);
    
    const avifStats = await sharp(AVIF_OUTPUT).metadata();
    console.log(`✅ AVIF creado: ${(avifStats.size / 1024).toFixed(2)} KB (-${(100 - (avifStats.size / metadata.size * 100)).toFixed(1)}%)`);

    // Convertir a WebP (fallback)
    console.log('🔄 Generando WebP...');
    await image
      .clone()
      .webp({ quality: 80 })
      .toFile(WEBP_OUTPUT);
    
    const webpStats = await sharp(WEBP_OUTPUT).metadata();
    console.log(`✅ WebP creado: ${(webpStats.size / 1024).toFixed(2)} KB (-${(100 - (webpStats.size / metadata.size * 100)).toFixed(1)}%)`);

    console.log('\n✨ Conversión completada con éxito');
    console.log('\n📝 Actualiza Hero.tsx para usar <picture> con AVIF y WebP fallback');

  } catch (error) {
    console.error('❌ Error durante la conversión:', error.message);
    process.exit(1);
  }
}

convertImage();
