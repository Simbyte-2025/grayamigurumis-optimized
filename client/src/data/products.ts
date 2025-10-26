export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  urlPago: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Homero Simpson",
    description: "Amigurumi personalizado tejido a mano con mucho cariño. Viene en su caja de acrílico, perfecto para regalar.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Personajes",
    price: "$20.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-homero"
  },
  {
    id: 2,
    name: "Mamá Koala con Bebé",
    description: "Dulce mamá koala con su bebé, tejidos a mano con toda la ternura. Transmiten esa sensación de refugio y amor.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Animalitos",
    price: "$22.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-koala"
  },
  {
    id: 3,
    name: "Hombre Araña",
    description: "El fantástico Hombre Araña en versión amigurumi, perfecto para colgar donde tú quieras.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Personajes",
    price: "$22.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-spiderman"
  },
  {
    id: 4,
    name: "Labubu",
    description: "Una criatura única con carácter. No es tierna, tampoco es fea. Labubu es simplemente ella, auténtica.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Personajes",
    price: "$16.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-labubu"
  },
  {
    id: 5,
    name: "Pollito Asesino",
    description: "Pequeño, adorable y letalmente tierno. Tejido a mano en técnica amigurumi, listo para conquistar tu corazón.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Animalitos",
    price: "$20.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-pollito"
  },
  {
    id: 6,
    name: "Máquina de Coser",
    description: "Máquina de coser hecha en el arte del Amigurumis, un regalo perfecto hecho con amor.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Objetos",
    price: "$18.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-maquina"
  },
  {
    id: 7,
    name: "Mesh Hat",
    description: "Gorro tejido a mano, ligero, fresco y con estilo único. Perfecto para días de sol y escapadas al aire libre.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Accesorios",
    price: "$15.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-gorro"
  },
  {
    id: 8,
    name: "Bichito Adorable",
    description: "Un nuevo amiguito tejido con amor y paciencia, perfecto para acompañarte o decorar tu espacio.",
    image: "/assets/img/placeholder-4x5.jpg",
    category: "Animalitos",
    price: "$16.000",
    urlPago: "https://www.flow.cl/btn.php?token=ejemplo-bichito"
  }
];

