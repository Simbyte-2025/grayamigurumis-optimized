// Interfaz de imagen del producto
export interface ProductImage {
  src: string;
  alt: string;
}

// Interfaz principal del producto
export interface Product {
  id: string;
  slug: string;
  name: string;
  priceCLP: number;
  heightCm: number;
  category: string;
  images: ProductImage[];
}

// Catálogo completo de productos GrayAmigurumis
export const products: Product[] = [
  {
    id: "stitch",
    slug: "stitch",
    name: "Stitch",
    priceCLP: 18000,
    heightCm: 20,
    category: "Animatitos",
    images: [
      { src: "/assets/products/stitch/stitch-1.webp", alt: "Stitch - Vista frontal" },
      { src: "/assets/products/stitch/stitch-2.webp", alt: "Stitch - Vista lateral" },
      { src: "/assets/products/stitch/stitch-3.webp", alt: "Stitch - Vista trasera" },
      { src: "/assets/products/stitch/stitch-4.webp", alt: "Stitch - Detalle rostro" },
      { src: "/assets/products/stitch/stitch-5.webp", alt: "Stitch - Pose completa" },
      { src: "/assets/products/stitch/stitch-6.webp", alt: "Stitch - Detalle orejas" },
      { src: "/assets/products/stitch/stitch-7.webp", alt: "Stitch - En acción" },
      { src: "/assets/products/stitch/stitch-8.webp", alt: "Stitch - Versión premium" }
    ]
  },
  {
    id: "emociones",
    slug: "emociones",
    name: "Emociones (Inside Out)",
    priceCLP: 22000,
    heightCm: 18,
    category: "Animatitos",
    images: [
      { src: "/assets/products/emociones/emociones-1.webp", alt: "Emociones - Grupo completo" },
      { src: "/assets/products/emociones/emociones-2.webp", alt: "Emociones - Alegría y Tristeza" },
      { src: "/assets/products/emociones/emociones-3.webp", alt: "Emociones - Todas juntas" },
      { src: "/assets/products/emociones/emociones-4.webp", alt: "Emociones - Miedo" },
      { src: "/assets/products/emociones/emociones-5.webp", alt: "Emociones - Ira" },
      { src: "/assets/products/emociones/emociones-6.webp", alt: "Emociones - Desagrado" }
    ]
  },
  {
    id: "el-chapulin",
    slug: "el-chapulin",
    name: "El Chapulín Colorado",
    priceCLP: 24000,
    heightCm: 25,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/el-chapulin/el-chapulin-1.webp", alt: "El Chapulín Colorado - Vista frontal" },
      { src: "/assets/products/el-chapulin/el-chapulin-2.webp", alt: "El Chapulín Colorado - Con martillo" },
      { src: "/assets/products/el-chapulin/el-chapulin-3.webp", alt: "El Chapulín Colorado - Pose heroica" },
      { src: "/assets/products/el-chapulin/el-chapulin-4.webp", alt: "El Chapulín Colorado - Detalle completo" }
    ]
  },
  {
    id: "mira",
    slug: "mira",
    name: "Mira (Demon Slayer)",
    priceCLP: 23000,
    heightCm: 22,
    category: "Anime & Videojuegos",
    images: [
      { src: "/assets/products/mira/mira-1.webp", alt: "Mira - Vista frontal" },
      { src: "/assets/products/mira/mira-2.webp", alt: "Mira - Vista lateral" },
      { src: "/assets/products/mira/mira-3.webp", alt: "Mira - Detalle kimono" },
      { src: "/assets/products/mira/mira-4.webp", alt: "Mira - Pose completa" }
    ]
  },
  {
    id: "angel",
    slug: "angel",
    name: "Ángel (Lilo & Stitch)",
    priceCLP: 18000,
    heightCm: 20,
    category: "Animatitos",
    images: [
      { src: "/assets/products/angel/angel-1.webp", alt: "Ángel - Vista frontal" },
      { src: "/assets/products/angel/angel-2.webp", alt: "Ángel - Vista lateral" },
      { src: "/assets/products/angel/angel-3.webp", alt: "Ángel - Detalle completo" }
    ]
  },
  {
    id: "juni",
    slug: "juni",
    name: "Juni (Demon Slayer)",
    priceCLP: 23000,
    heightCm: 22,
    category: "Anime & Videojuegos",
    images: [
      { src: "/assets/products/juni/juni-1.webp", alt: "Juni - Vista frontal" },
      { src: "/assets/products/juni/juni-2.webp", alt: "Juni - Vista lateral" },
      { src: "/assets/products/juni/juni-3.webp", alt: "Juni - Versión Demon Hunter premium" }
    ]
  },
  {
    id: "zoey",
    slug: "zoey",
    name: "Zoey (Demon Slayer)",
    priceCLP: 23000,
    heightCm: 22,
    category: "Anime & Videojuegos",
    images: [
      { src: "/assets/products/zoey/zoey-1.webp", alt: "Zoey - Vista frontal" },
      { src: "/assets/products/zoey/zoey-2.webp", alt: "Zoey - Vista lateral" },
      { src: "/assets/products/zoey/zoey-3.webp", alt: "Zoey - Pose completa" }
    ]
  },
  {
    id: "coraline",
    slug: "coraline",
    name: "Coraline",
    priceCLP: 22000,
    heightCm: 23,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/coraline/coraline-1.webp", alt: "Coraline - Vista frontal" },
      { src: "/assets/products/coraline/coraline-2.webp", alt: "Coraline - Con impermeable amarillo" }
    ]
  },
  {
    id: "elementos",
    slug: "elementos",
    name: "Elementos (Inside Out)",
    priceCLP: 20000,
    heightCm: 18,
    category: "Animatitos",
    images: [
      { src: "/assets/products/elementos/elementos-1.webp", alt: "Elementos - Grupo" },
      { src: "/assets/products/elementos/elementos-2.webp", alt: "Elementos - Detalle" }
    ]
  },
  {
    id: "elsa",
    slug: "elsa",
    name: "Elsa (Frozen)",
    priceCLP: 22000,
    heightCm: 25,
    category: "Animatitos",
    images: [
      { src: "/assets/products/elsa/elsa-1.webp", alt: "Elsa - Vista frontal" },
      { src: "/assets/products/elsa/elsa-2.webp", alt: "Elsa - Con vestido completo" }
    ]
  },
  {
    id: "hello-kitty",
    slug: "hello-kitty",
    name: "Hello Kitty",
    priceCLP: 18000,
    heightCm: 18,
    category: "Animatitos",
    images: [
      { src: "/assets/products/hello-kitty/hello-kitty-1.webp", alt: "Hello Kitty - Vista frontal" },
      { src: "/assets/products/hello-kitty/hello-kitty-2.webp", alt: "Hello Kitty - Detalle moño" }
    ]
  },
  {
    id: "joker",
    slug: "joker",
    name: "The Joker",
    priceCLP: 24000,
    heightCm: 25,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/joker/joker-1.webp", alt: "The Joker - Vista frontal" },
      { src: "/assets/products/joker/joker-2.webp", alt: "The Joker - Versión premium" }
    ]
  },
  {
    id: "juan-carlos",
    slug: "juan-carlos",
    name: "Juan Carlos Bodoque",
    priceCLP: 23000,
    heightCm: 22,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/juan-carlos/juan-carlos-1.webp", alt: "Juan Carlos Bodoque - Vista frontal" },
      { src: "/assets/products/juan-carlos/juan-carlos-2.webp", alt: "Juan Carlos Bodoque - Detalle completo" }
    ]
  },
  {
    id: "juanin",
    slug: "juanin",
    name: "Juanín Juan Harry",
    priceCLP: 22000,
    heightCm: 20,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/juanin/juanin-1.webp", alt: "Juanín Juan Harry - Vista frontal" },
      { src: "/assets/products/juanin/juanin-2.webp", alt: "Juanín Juan Harry - Detalle" }
    ]
  },
  {
    id: "mafalda",
    slug: "mafalda",
    name: "Mafalda",
    priceCLP: 22000,
    heightCm: 20,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/mafalda/mafalda-1.webp", alt: "Mafalda - Vista frontal" },
      { src: "/assets/products/mafalda/mafalda-2.webp", alt: "Mafalda - Versión premium" }
    ]
  },
  {
    id: "mike-myers",
    slug: "mike-myers",
    name: "Mike Myers (Halloween)",
    priceCLP: 24000,
    heightCm: 25,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/mike-myers/mike-myers-1.webp", alt: "Mike Myers - Vista frontal" },
      { src: "/assets/products/mike-myers/mike-myers-2.webp", alt: "Mike Myers - Con máscara" }
    ]
  },
  {
    id: "papa-pitufo",
    slug: "papa-pitufo",
    name: "Papá Pitufo",
    priceCLP: 20000,
    heightCm: 18,
    category: "Animatitos",
    images: [
      { src: "/assets/products/papa-pitufo/papa-pitufo-1.webp", alt: "Papá Pitufo - Vista frontal" },
      { src: "/assets/products/papa-pitufo/papa-pitufo-2.webp", alt: "Papá Pitufo - Con gorro rojo" }
    ]
  },
  {
    id: "pitufo",
    slug: "pitufo",
    name: "Pitufo",
    priceCLP: 18000,
    heightCm: 16,
    category: "Animatitos",
    images: [
      { src: "/assets/products/pitufo/pitufo-1.webp", alt: "Pitufo - Vista frontal" },
      { src: "/assets/products/pitufo/pitufo-2.webp", alt: "Pitufo - Versión premium" }
    ]
  },
  {
    id: "rumi",
    slug: "rumi",
    name: "Rumi (Demon Slayer)",
    priceCLP: 23000,
    heightCm: 22,
    category: "Anime & Videojuegos",
    images: [
      { src: "/assets/products/rumi/rumi-1.webp", alt: "Rumi - Vista frontal" },
      { src: "/assets/products/rumi/rumi-2.webp", alt: "Rumi - Detalle kimono" }
    ]
  },
  {
    id: "spiderman",
    slug: "spiderman",
    name: "Spider-Man",
    priceCLP: 24000,
    heightCm: 25,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/spiderman/spiderman-1.webp", alt: "Spider-Man - Vista frontal" },
      { src: "/assets/products/spiderman/spiderman-2.webp", alt: "Spider-Man - Pose de acción" }
    ]
  },
  {
    id: "v-vendetta",
    slug: "v-vendetta",
    name: "V de Vendetta",
    priceCLP: 24000,
    heightCm: 25,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/v-vendetta/v-vendetta-1.webp", alt: "V de Vendetta - Vista frontal" },
      { src: "/assets/products/v-vendetta/v-vendetta-2.webp", alt: "V de Vendetta - Con máscara completa" }
    ]
  },
  {
    id: "el-chavo",
    slug: "el-chavo",
    name: "El Chavo del 8",
    priceCLP: 22000,
    heightCm: 22,
    category: "Cine & TV",
    images: [
      { src: "/assets/products/el-chavo/el-chavo-1.webp", alt: "El Chavo del 8 - Vista frontal" }
    ]
  }
];

// Función auxiliar para obtener producto por slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

// Función auxiliar para obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "Todos") return products;
  return products.filter(p => p.category === category);
};

// Categorías disponibles
export const categories = [
  "Todos",
  "Animatitos",
  "Cine & TV",
  "Anime & Videojuegos"
];
