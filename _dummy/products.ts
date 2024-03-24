import { ProductType } from "@/types/product.type";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Lavender",
    image: "/assets/img/product-img-1.png",
    category: "Tanaman Hias",
    stock: 300,
    price: 150000,
    price_discount: false,
    updated_at: "18 Mar 2023 10:52",
    status: "dijual",
  },
  {
    id: 2,
    name: "Kaktus Mini",
    image: "/assets/img/product-img-2.png",
    category: "Tanaman Hias",
    stock: 150,
    price: 100000,
    price_discount: 80000,
    updated_at: "22 Mar 2023 09:38",
    status: "tidak dijual",
  },
  {
    id: 3,
    name: "Anggrek Ungu",
    image: "/assets/img/product-img-3.png",
    category: "Tanaman Hias",
    stock: 0,
    price: 120000,
    price_discount: 100000,
    updated_at: "24 Mar 2023 12:29",
    status: "stok habis",
  },
];
