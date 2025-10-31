export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  flowLink: string;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: "Deadpool", price: "$22.000", image: "/assets/products/deadpool.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 2, name: "El Grinch", price: "$20.000", image: "/assets/products/grinch.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 3, name: "Groot", price: "$18.000", image: "/assets/products/groot.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 4, name: "Heisenberg", price: "$25.000", image: "/assets/products/heisenberg.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 5, name: "Iron Man", price: "$22.000", image: "/assets/products/ironman.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 6, name: "Jack Skellington", price: "$21.000", image: "/assets/products/jack.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 7, name: "V for Vendetta", price: "$24.000", image: "/assets/products/vforvendetta.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 8, name: "Howl Pendragon", price: "$23.000", image: "/assets/products/howl.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 9, name: "Aslo el Dinosaurio", price: "$18.000", image: "/assets/products/aslo.webp", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 10, name: "Stitch", price: "$18.000", image: "/assets/products/stitch.webp", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 11, name: "Peach", price: "$22.000", image: "/assets/products/peach.webp", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 12, name: "Jazmín", price: "$22.000", image: "/assets/products/jazmin.webp", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 13, name: "Ana de Arendelle", price: "$20.000", image: "/assets/products/ana.webp", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 14, name: "Naruto Uzumaki", price: "$23.000", image: "/assets/products/naruto.webp", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 15, name: "Goku", price: "$24.000", image: "/assets/products/goku.webp", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 16, name: "Vegeta", price: "$24.000", image: "/assets/products/vegeta.webp", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 17, name: "Zenitsu Agatsuma", price: "$22.000", image: "/assets/products/zenitsu.webp", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 18, name: "The Joker", price: "$21.000", image: "/assets/products/joker.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 19, name: "Kurt Cobain", price: "$25.000", image: "/assets/products/kurt.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 20, name: "Ansiedad Espacial", price: "$21.000", image: "/assets/products/ansiedad.webp", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" }
];

