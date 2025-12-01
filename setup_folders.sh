#!/bin/bash

# Limpiar carpeta de productos anterior
echo "🗑️  Limpiando productos antiguos..."
rm -f client/public/assets/products/*.webp

# Crear carpetas para los 22 productos
echo "📁 Creando estructura de carpetas..."

products=(
    "stitch"
    "emociones"
    "el-chapulin"
    "mira"
    "angel"
    "juni"
    "zoey"
    "coraline"
    "elementos"
    "elsa"
    "hello-kitty"
    "joker"
    "juan-carlos"
    "juanin"
    "mafalda"
    "mike-myers"
    "papa-pitufo"
    "pitufo"
    "rumi"
    "spiderman"
    "v-vendetta"
    "el-chavo"
)

for product in "${products[@]}"; do
    mkdir -p "client/public/assets/products/$product"
    echo "✅ Creada carpeta: $product"
done

echo "✨ Estructura de carpetas lista!"
