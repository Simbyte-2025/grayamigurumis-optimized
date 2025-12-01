from pathlib import Path
from collections import defaultdict

# Directorio con imágenes
img_dir = Path("temp_images/imagenes aoptimizadas amigurumis")

# Definición completa de productos con toda la información
products_info = {
    'stitch': {
        'name': 'Stitch',
        'slug': 'stitch',
        'category': 'Animatitos',
        'patterns': ['sitch_', 'sitch_prem']
    },
    'emociones': {
        'name': 'Emociones (Inside Out)',
        'slug': 'emociones',
        'category': 'Animatitos',
        'patterns': ['emocio', 'emocion_']
    },
    'el_chapulin': {
        'name': 'El Chapulín Colorado',
        'slug': 'el-chapulin',
        'category': 'Cine & TV',
        'patterns': ['el_chapuli']
    },
    'el_chavo': {
        'name': 'El Chavo del 8',
        'slug': 'el-chavo',
        'category': 'Cine & TV',
        'patterns': ['el_chavo_d']
    },
    'mira': {
        'name': 'Mira (Demon Slayer)',
        'slug': 'mira',
        'category': 'Anime & Videojuegos',
        'patterns': ['mira_']
    },
    'angel': {
        'name': 'Ángel (Lilo & Stitch)',
        'slug': 'angel',
        'category': 'Animatitos',
        'patterns': ['angel_']
    },
    'juni': {
        'name': 'Juni (Demon Slayer)',
        'slug': 'juni',
        'category': 'Anime & Videojuegos',
        'patterns': ['juni_']
    },
    'zoey': {
        'name': 'Zoey (Demon Slayer)',
        'slug': 'zoey',
        'category': 'Anime & Videojuegos',
        'patterns': ['zoey_']
    },
    'coraline': {
        'name': 'Coraline',
        'slug': 'coraline',
        'category': 'Cine & TV',
        'patterns': ['corali', 'coraline_p']
    },
    'elementos': {
        'name': 'Elementos (Inside Out)',
        'slug': 'elementos',
        'category': 'Animatitos',
        'patterns': ['elemen', 'elementos_']
    },
    'elsa': {
        'name': 'Elsa (Frozen)',
        'slug': 'elsa',
        'category': 'Animatitos',
        'patterns': ['elsa_']
    },
    'hello_kitty': {
        'name': 'Hello Kitty',
        'slug': 'hello-kitty',
        'category': 'Animatitos',
        'patterns': ['hello_']
    },
    'joker': {
        'name': 'The Joker',
        'slug': 'joker',
        'category': 'Cine & TV',
        'patterns': ['joker_']
    },
    'juan_carlos': {
        'name': 'Juan Carlos Bodoque',
        'slug': 'juan-carlos',
        'category': 'Cine & TV',
        'patterns': ['juan_c']
    },
    'juanin': {
        'name': 'Juanín Juan Harry',
        'slug': 'juanin',
        'category': 'Cine & TV',
        'patterns': ['juanin']
    },
    'mafalda': {
        'name': 'Mafalda',
        'slug': 'mafalda',
        'category': 'Cine & TV',
        'patterns': ['mafald']
    },
    'mike_myers': {
        'name': 'Mike Myers (Halloween)',
        'slug': 'mike-myers',
        'category': 'Cine & TV',
        'patterns': ['mike_m']
    },
    'papa_pitufo': {
        'name': 'Papá Pitufo',
        'slug': 'papa-pitufo',
        'category': 'Animatitos',
        'patterns': ['papa_p']
    },
    'pitufo': {
        'name': 'Pitufo',
        'slug': 'pitufo',
        'category': 'Animatitos',
        'patterns': ['pitufo']
    },
    'rumi': {
        'name': 'Rumi (Demon Slayer)',
        'slug': 'rumi',
        'category': 'Anime & Videojuegos',
        'patterns': ['rumi_']
    },
    'spiderman': {
        'name': 'Spider-Man',
        'slug': 'spiderman',
        'category': 'Cine & TV',
        'patterns': ['sipder', 'sipderman_']
    },
    'v_for_vendetta': {
        'name': 'V de Vendetta',
        'slug': 'v-vendetta',
        'category': 'Cine & TV',
        'patterns': ['v_de_v']
    }
}

# Clasificar imágenes
product_images = defaultdict(list)

for file in sorted(img_dir.glob("*.webp")):
    filename = file.name
    base = filename.replace("amigurumi_final_", "").replace(".webp", "")
    
    matched = False
    for product_key, info in products_info.items():
        for pattern in info['patterns']:
            if base.startswith(pattern) or pattern in base:
                product_images[product_key].append(filename)
                matched = True
                break
        if matched:
            break
    
    # Capturar "el_cha" para el chapulín
    if not matched and "el_cha" in filename and "chapuli" not in filename and "chavo" not in filename:
        product_images['el_chapulin'].append(filename)
        matched = True

# Generar el reporte final
print("\n" + "="*120)
print(" 📊 CLASIFICACIÓN FINAL DE PRODUCTOS - GrayAmigurumis".center(120))
print("="*120 + "\n")

print(f"{'#':<4} {'Nombre del Producto':<35} {'Slug':<20} {'Categoría':<25} {'Imágenes':<10}")
print("-"*120)

total_products = 0
total_images = 0

for idx, (product_key, info) in enumerate(sorted(
    products_info.items(), 
    key=lambda x: len(product_images[x[0]]), 
    reverse=True
), 1):
    name = info['name']
    slug = info['slug']
    category = info['category']
    num_imgs = len(product_images[product_key])
    
    total_products += 1
    total_images += num_imgs
    
    print(f"{idx:<4} {name:<35} {slug:<20} {category:<25} {num_imgs:<10}")

print("-"*120)
print(f"\n{'TOTALES':>60} → Productos: {total_products} | Imágenes: {total_images}\n")
print("="*120)

# Detalle de archivos por producto
print("\n\n" + "="*120)
print(" 📁 DETALLE DE ARCHIVOS POR PRODUCTO".center(120))
print("="*120 + "\n")

for idx, (product_key, info) in enumerate(sorted(
    products_info.items(), 
    key=lambda x: len(product_images[x[0]]), 
    reverse=True
), 1):
    images = product_images[product_key]
    
    print(f"\n{idx}. **{info['name']}** (slug: `{info['slug']}`)")
    print(f"   Categoría: {info['category']}")
    print(f"   Total de imágenes: {len(images)}")
    
    if images:
        print(f"   Archivos:")
        for img_file in sorted(images):
            print(f"      - {img_file}")
    else:
        print(f"   ⚠️  SIN IMÁGENES DETECTADAS")

print("\n" + "="*120)
