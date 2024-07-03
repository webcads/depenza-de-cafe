export enum ProductCategory {
  cratebox = "crate boxes",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  link_whatsapp: string;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
  units: number;
}

export const products: Product[] = [
  {
    id: 32,
    name: "Vinera en pino",
    slug: "vinera-en-pino-2024-barata-artesanal-colombiano",
    price: 12000,
    link_whatsapp: 'https://wa.link/wikb5c',
    description: "Caja de madera fina de Dimensiones: 33x10x9cm ",
    cover: "/s.png", //imagen link o direccion
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 10,
  },
  {
    id: 33,
    name: "M-Crate Box",
    slug: "m-crate-box",
    price: 18000,
    link_whatsapp: 'https://wa.link/wikb5c',
    description: "Perfecta para una tarde inolvidable con amigos. La M-Crate Box asegura una experiencia compartida. Contiene 9 unidades,  No olvides llevar tus snacks favoritos.",
    cover: "/m.png", // Actualiza la URL de la imagen de la caja mediana
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 9,
  },
  {
    id: 34,
    name: "XL-Crate Box",
    slug: "xl-crate-box",
    price: 100000,
    link_whatsapp: 'https://wa.link/eih1a6',
    description: "La XL-Crate Box es ideal para grandes eventos o celebraciones. Con 50 unidades, esta caja garantiza que todos en la fiesta tengan una experiencia premium. ¡Asegúrate de tener suficiente espacio para compartir!",
    cover: "/xl.png", // Actualiza la URL de la imagen de la caja extra grande
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 50,
  },
  {
    id: 35,
    name: "Max-Crate Box",
    slug: "max-crate-box",
    price: 200000,
    link_whatsapp: 'https://wa.link/eih1a6',
    description: "Para los eventos más grandes, la Max-Crate Box es la opción definitiva. Con un máximo de 100 unidades, esta caja está diseñada para aquellos que buscan llevar su experiencia al siguiente nivel. Perfecta para festivales y grandes reuniones.",
    cover: "/extra.png", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 100,
  },
  {
    id: 35,
    name: "Max-Crate Box",
    slug: "max-crate-box",
    price: 200000,
    link_whatsapp: 'https://wa.link/eih1a6',
    description: "Para los eventos más grandes, la Max-Crate Box es la opción definitiva. Con un máximo de 100 unidades, esta caja está diseñada para aquellos que buscan llevar su experiencia al siguiente nivel. Perfecta para festivales y grandes reuniones.",
    cover: "/extra.png", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 100,
  }
]
