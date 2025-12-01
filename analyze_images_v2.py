import os
import re
from collections import defaultdict
from pathlib import Path

# Directorio con las imágenes
img_dir = Path("temp_images/imagenes aoptimizadas amigurumis")

# Diccionario para agrupar imágenes por producto
products = defaultdict(list)

# Mapeo manual basado en nombres observados
product_mapping = {
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
    'juni': ['juni_d', 'juni_de_de', 'juni_de_demon_hunter'],
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

# Invertir el mapeo para búsqueda rápida
reverse_map = {}
for product, patterns in product_mapping.items():
    for pattern in patterns:
        reverse_map[pattern] = product

# Procesar todos los archivos
for file in sorted(img_dir.glob("*.webp")):
    filename = file.name
    
    # Extraer la parte central del nombre
    base = filename.replace("amigurumi_final_", "").replace(".webp", "")
    
    # Buscar coincidencias con los patrones
    matched = False
    for pattern, product in reverse_map.items():
        if base.startswith(pattern):
            products[product].append(filename)
            matched = True
            break
    
    if not matched:
        # Agrupar por las primeras palabras
        key_parts = base.split("_")[:2]
        key = "_".join(key_parts)
        products[f"UNMATCHED_{key}"].append(filename)

# Imprimir tabla de clasificación
print("\n" + "=" * 120)
print(f"{'PRODUCTO IDENTIFICADO':<30} | {'# Imgs':<8} | {'Archivos (primeros 3)'}")
print("=" * 120)

for product, files in sorted(products.items(), key=lambda x: -len(x[1])):
    files_display = []
    for f in files[:3]:
        short_name = f.replace("amigurumi_final_", "")[:50]
        files_display.append(short_name)
    
    files_str = ", ".join(files_display)
    if len(files) > 3:
        files_str += f" ... [+{len(files)-3}]"
    
    print(f"{product:<30} | {len(files):<8} | {files_str}")

print("=" * 120)
print(f"\nTotal de productos identificados: {len(products)}")
print(f"Total de imágenes: {sum(len(f) for f in products.values())}")
