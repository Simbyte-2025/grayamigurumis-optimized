import os
import re
from collections import defaultdict
from pathlib import Path

# Directorio con las imágenes
img_dir = Path("temp_images/imagenes aoptimizadas amigurumis")

# Estructura de productos con información completa
products_data = {
    'angel': {
        'name': 'Ángel de Lilo & Stitch',
        'slug': 'angel',
        'category': 'Animatitos',
        'images': []
    },
    'coraline': {
        'name': 'Coraline',
        'slug': 'coraline',
        'category': 'Cine & TV',
        'images': []
    },
    'el_chapulin': {
        'name': 'El Chapulín Colorado',
        'slug': 'el-chapulin',
        'category': 'Cine & TV',
        'images': []
    },
    'el_chavo': {
        'name': 'El Chavo del 8',
        'slug': 'el-chavo',
        'category': 'Cine & TV',
        'images': []
    },
    'elementos': {
        'name': 'Elementos (Inside Out)',
        'slug': 'elementos',
        'category': 'Animatitos',
        'images': []
    },
    'elsa': {
        'name': 'Elsa de Frozen',
        'slug': 'elsa',
        'category': 'Animatitos',
        'images': []
    },
    'emociones': {
        'name': 'Emociones (Inside Out)',
        'slug': 'emociones',
        'category': 'Animatitos',
        'images': []
    },
    'hello_kitty': {
        'name': 'Hello Kitty',
        'slug': 'hello-kitty',
        'category': 'Animatitos',
        'images': []
    },
    'joker': {
        'name': 'The Joker',
        'slug': 'joker',
        'category': 'Cine & TV',
        'images': []
    },
    'juan_carlos': {
        'name': 'Juan Carlos Bodoque',
        'slug': 'juan-carlos',
        'category': 'Cine & TV',
        'images': []
    },
    'juanin': {
        'name': 'Juanín Juan Harry',
        'slug': 'juanin',
        'category': 'Cine & TV',
        'images': []
    },
    'juni': {
        'name': 'Juni (Demon Slayer)',
        'slug': 'juni',
        'category': 'Anime & Videojuegos',
        'images': []
    },
    'mafalda': {
        'name': 'Mafalda',
        'slug': 'mafalda',
        'category': 'Cine & TV',
        'images': []
    },
    'mike_myers': {
        'name': 'Mike Myers (Halloween)',
        'slug': 'mike-myers',
        'category': 'Cine & TV',
        'images': []
    },
    'mira': {
        'name': 'Mira (Demon Slayer)',
        'slug': 'mira',
        'category': 'Anime & Videojuegos',
        'images': []
    },
    'papa_pitufo': {
        'name': 'Papá Pitufo',
        'slug': 'papa-pitufo',
        'category': 'Animatitos',
        'images': []
    },
    'pitufo': {
        'name': 'Pitufo',
        'slug': 'pitufo',
        'category': 'Animatitos',
        'images': []
    },
    'rumi': {
        'name': 'Rumi (Demon Slayer)',
        'slug': 'rumi',
        'category': 'Anime & Videojuegos',
        'images': []
    },
    'spiderman': {
        'name': 'Spider-Man',
        'slug': 'spiderman',
        'category': 'Cine & TV',
        'images': []
    },
    'stitch': {
        'name': 'Stitch',
        'slug': 'stitch',
        'category': 'Animatitos',
        'images': []
    },
    'v_for_vendetta': {
        'name': 'V de Vendetta',
        'slug': 'v-vendetta',
        'category': 'Cine & TV',
        'images': []
    },
    'zoey': {
        'name': 'Zoey (Demon Slayer)',
        'slug': 'zoey',
        'category': 'Anime & Videojuegos',
        'images': []
    },
}

# Patrones de búsqueda para cada producto
patterns = {
    'angel': ['angel_', 'angel_de_l'],
    'coraline': ['corali', 'coraline_p'],
    'el_chapulin': ['el_cha', 'el_chapuli'],
    'el_chavo': ['el_chavo_d'],
    'elementos': ['elemen', 'elementos'],
    'elsa': ['elsa_d', 'elsa_de_fr'],
    'emociones': ['emocio', 'emocion_ab', 'emocion_mi', 'emocion_ve'],
    'hello_kitty': ['hello_', 'hello_kitt'],
    'joker': ['joker_', 'joker_prem'],
    'juan_carlos': ['juan_c', 'juan_carlo'],
    'juanin': ['juanin'],
    'juni': ['juni_d', 'juni_de_de', 'juni_de_demon'],
    'mafalda': ['mafald', 'mafalda_pr'],
    'mike_myers': ['mike_m', 'mike_mayer'],
    'mira': ['mira_d', 'mira_de_de'],
    'papa_pitufo': ['papa_p', 'papa_pituf'],
    'pitufo': ['pitufo'],
    'rumi': ['rumi_d', 'rumi_de_de'],
    'spiderman': ['sipder', 'sipderman'],
    'stitch': ['sitch_', 'sitch_prem'],
    'v_for_vendetta': ['v_de_v', 'v_de_venga'],
    'zoey': ['zoey_d', 'zoey_de_de'],
}

# Invertir el mapeo
reverse_map = {}
for product_key, pattern_list in patterns.items():
    for pattern in pattern_list:
        reverse_map[pattern] = product_key

# Procesar archivos
for file in sorted(img_dir.glob("*.webp")):
    filename = file.name
    base = filename.replace("amigurumi_final_", "").replace(".webp", "")
    
    matched = False
    for pattern, product_key in reverse_map.items():
        if base.startswith(pattern):
            if product_key in products_data:
                products_data[product_key]['images'].append(filename)
            matched = True
            break

# Generar tabla en formato Markdown
print("\n# 📊 CLASIFICACIÓN PROPUESTA DE PRODUCTOS - GrayAmigurumis\n")
print("| # | Nombre del Producto | Slug Propuesto | Categoría | # Imágenes | Archivos Asociados |")
print("|---|---------------------|----------------|-----------|------------|-------------------|")

counter = 1
total_images = 0

for key, data in sorted(products_data.items(), key=lambda x: -len(x[1]['images'])):
    name = data['name']
    slug = data['slug']
    category = data['category']
    num_images = len(data['images'])
    total_images += num_images
    
    # Mostrar hasta 2 archivos como muestra
    files_sample = ", ".join([f.split("_")[-1][:15] for f in data['images'][:2]])
    if num_images > 2:
        files_sample += f" (+{num_images-2})"
    
    if num_images == 0:
        files_sample = "⚠️ SIN IMÁGENES"
    
    print(f"| {counter} | {name} | `{slug}` | {category} | **{num_images}** | {files_sample} |")
    counter += 1

print(f"\n**Total de productos:** {len(products_data)}")
print(f"**Total de imágenes:** {total_images}")
print(f"\n---\n")

# Listar productos sin imágenes
print("## ⚠️ PRODUCTOS SIN IMÁGENES ASIGNADAS:\n")
no_images = [data['name'] for data in products_data.values() if len(data['images']) == 0]
if no_images:
    for prod in no_images:
        print(f"- {prod}")
else:
    print("✅ Todos los productos tienen imágenes asignadas")
