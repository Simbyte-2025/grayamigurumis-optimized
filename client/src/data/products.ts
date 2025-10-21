export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Homero Simpson",
    description: "Amigurumi personalizado tejido a mano con mucho cariño. Viene en su caja de acrílico, perfecto para regalar.",
    image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/559367774_2652763835076944_5348790701336978053_n.jpg",
    category: "Personajes",
    price: "$20.000"
  },
  {
    id: 2,
    name: "Mamá Koala con Bebé",
    description: "Dulce mamá koala con su bebé, tejidos a mano con toda la ternura. Transmiten esa sensación de refugio y amor.",
    image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/505778483_18508718422008405_5814952680945592103_n.webp",
    category: "Animalitos",
    price: "$22.000"
  },
  {
    id: 3,
    name: "Hombre Araña",
    description: "El fantástico Hombre Araña en versión amigurumi, perfecto para colgar donde tú quieras.",
    image: "https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/534898410_1806726907394591_1929007495604877269_n.jpg",
    category: "Personajes",
    price: "$22.000"
  },
  {
    id: 4,
    name: "Labubu",
    description: "Una criatura única con carácter. No es tierna, tampoco es fea. Labubu es simplemente ella, auténtica.",
    image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/499968843_18503632354008405_6811601565806232521_n.webp",
    category: "Personajes",
    price: "$16.000"
  },
  {
    id: 5,
    name: "Pollito Asesino",
    description: "Pequeño, adorable y letalmente tierno. Tejido a mano en técnica amigurumi, listo para conquistar tu corazón.",
    image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/491469980_18496788487008405_6284135241539810754_n.webp",
    category: "Animalitos",
    price: "$20.000"
  },
  {
    id: 6,
    name: "Máquina de Coser",
    description: "Máquina de coser hecha en el arte del Amigurumis, un regalo perfecto hecho con amor.",
    image: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/532643455_745625528204606_6327165834864313860_n.jpg",
    category: "Objetos",
    price: "$18.000"
  },
  {
    id: 7,
    name: "Mesh Hat",
    description: "Gorro tejido a mano, ligero, fresco y con estilo único. Perfecto para días de sol y escapadas al aire libre.",
    image: "https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/542481567_1977948012957675_9025700326613124733_n.jpg",
    category: "Accesorios",
    price: "$15.000"
  },
  {
    id: 8,
    name: "Bichito Adorable",
    description: "Un nuevo amiguito tejido con amor y paciencia, perfecto para acompañarte o decorar tu espacio.",
    image: "https://scontent-dfw5-3.cdninstagram.com/v/t51.2885-15/500210799_18503940907008405_471635110949178277_n.webp",
    category: "Animalitos",
    price: "$16.000"
  }
];

