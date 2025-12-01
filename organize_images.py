from pathlib import Path
import shutil

# Directorios
source_dir = Path("temp_images/imagenes aoptimizadas amigurumis")
dest_base = Path("client/public/assets/products")

# Mapeo de archivos a productos con orden específico
file_mapping = {
    'stitch': [
        'amigurumi_final_sitch_ (1).webp',
        'amigurumi_final_sitch_ (2).webp',
        'amigurumi_final_sitch_ (3).webp',
        'amigurumi_final_sitch_ (4).webp',
        'amigurumi_final_sitch_ (5).webp',
        'amigurumi_final_sitch_ (6).webp',
        'amigurumi_final_sitch_ (7).webp',
        'amigurumi_final_sitch_prem.webp',
    ],
    'emociones': [
        'amigurumi_final_emocio (1).webp',
        'amigurumi_final_emocio (2).webp',
        'amigurumi_final_emocio (3).webp',
        'amigurumi_final_emocion_ab.webp',
        'amigurumi_final_emocion_mi.webp',
        'amigurumi_final_emocion_ve.webp',
    ],
    'el-chapulin': [
        'amigurumi_final_el_cha (1).webp',
        'amigurumi_final_el_cha (2).webp',
        'amigurumi_final_el_cha.webp',
        'amigurumi_final_el_chapuli.webp',
    ],
    'mira': [
        'amigurumi_final_mira_d (1).webp',
        'amigurumi_final_mira_d (2).webp',
        'amigurumi_final_mira_d (3).webp',
        'amigurumi_final_mira_de_de.webp',
    ],
    'angel': [
        'amigurumi_final_angel_ (1).webp',
        'amigurumi_final_angel_ (2).webp',
        'amigurumi_final_angel_de_l.webp',
    ],
    'juni': [
        'amigurumi_final_juni_d.webp',
        'amigurumi_final_juni_de_de.webp',
        'amigurumi_final_juni_de_demon_hunter_premium_2025-12-01.webp',
    ],
    'zoey': [
        'amigurumi_final_zoey_d (1).webp',
        'amigurumi_final_zoey_d (2).webp',
        'amigurumi_final_zoey_de_de.webp',
    ],
    'coraline': [
        'amigurumi_final_corali.webp',
        'amigurumi_final_coraline_p.webp',
    ],
    'elementos': [
        'amigurumi_final_elemen (1).webp',
        'amigurumi_final_elementos_.webp',
    ],
    'elsa': [
        'amigurumi_final_elsa_d (1).webp',
        'amigurumi_final_elsa_de_fr.webp',
    ],
    'hello-kitty': [
        'amigurumi_final_hello_ (1).webp',
        'amigurumi_final_hello_kitt.webp',
    ],
    'joker': [
        'amigurumi_final_joker_ (1).webp',
        'amigurumi_final_joker_prem.webp',
    ],
    'juan-carlos': [
        'amigurumi_final_juan_c (1).webp',
        'amigurumi_final_juan_carlo.webp',
    ],
    'juanin': [
        'amigurumi_final_juanin (1).webp',
        'amigurumi_final_juanin_31_.webp',
    ],
    'mafalda': [
        'amigurumi_final_mafald (1).webp',
        'amigurumi_final_mafalda_pr.webp',
    ],
    'mike-myers': [
        'amigurumi_final_mike_m (1).webp',
        'amigurumi_final_mike_mayer.webp',
    ],
    'papa-pitufo': [
        'amigurumi_final_papa_p (1).webp',
        'amigurumi_final_papa_pituf.webp',
    ],
    'pitufo': [
        'amigurumi_final_pitufo (1).webp',
        'amigurumi_final_pitufo_pre.webp',
    ],
    'rumi': [
        'amigurumi_final_rumi_d.webp',
        'amigurumi_final_rumi_de_de.webp',
    ],
    'spiderman': [
        'amigurumi_final_sipder (1).webp',
        'amigurumi_final_sipderman_.webp',
    ],
    'v-vendetta': [
        'amigurumi_final_v_de_v (1).webp',
        'amigurumi_final_v_de_venga.webp',
    ],
    'el-chavo': [
        'amigurumi_final_el_chavo_d.webp',
    ],
}

# Copiar y renombrar archivos
total_copied = 0
errors = []

for slug, files in file_mapping.items():
    dest_dir = dest_base / slug
    
    for idx, filename in enumerate(files, 1):
        source_file = source_dir / filename
        dest_file = dest_dir / f"{slug}-{idx}.webp"
        
        if source_file.exists():
            shutil.copy2(source_file, dest_file)
            print(f"✅ {filename} → {slug}/{slug}-{idx}.webp")
            total_copied += 1
        else:
            error_msg = f"❌ ERROR: {filename} no encontrado"
            print(error_msg)
            errors.append(error_msg)

print(f"\n{'='*80}")
print(f"✨ Proceso completado!")
print(f"   Total de archivos copiados: {total_copied}/60")
if errors:
    print(f"\n⚠️  Errores encontrados: {len(errors)}")
    for error in errors:
        print(f"   {error}")
else:
    print(f"   ✅ Sin errores")
print(f"{'='*80}")
