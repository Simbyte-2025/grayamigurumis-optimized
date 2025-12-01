import os
import re
from collections import defaultdict
from pathlib import Path

# Directorio con las imágenes
img_dir = Path("temp_images/imagenes aoptimizadas amigurumis")

# Diccionario para agrupar imágenes por producto
products = defaultdict(list)

# Patrón para extraer nombre base
pattern = re.compile(r'amigurumi_final_(.+?)(?:_premium|_\(\d+\)|_\d{4}-\d{2}-\d{2})?\.webp$')

for file in sorted(img_dir.glob("*.webp")):
    filename = file.name
    
    # Extraer nombre base del producto
    match = pattern.match(filename)
    if match:
        base_name = match.group(1)
        # Limpiar sufijos adicionales
        base_name = re.sub(r'_$', '', base_name)
        products[base_name].append(filename)
    else:
        # Caso sin match perfecto
        base_name = filename.replace("amigurumi_final_", "").split("_")[0:2]
        base_name = "_".join(base_name)
        products[base_name].append(filename)

# Imprimir tabla de clasificación
print("=" * 100)
print(f"{'PRODUCTO (Base Name)':<40} | {'# Imgs':<8} | {'Archivos'}")
print("=" * 100)

for product, files in sorted(products.items(), key=lambda x: -len(x[1])):
    files_str = ", ".join([f[:30] for f in files[:3]])
    if len(files) > 3:
        files_str += f" ... (+{len(files)-3} más)"
    print(f"{product:<40} | {len(files):<8} | {files_str}")

print("=" * 100)
print(f"\nTotal de productos únicos: {len(products)}")
print(f"Total de imágenes: {sum(len(f) for f in products.values())}")
