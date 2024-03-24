export type ProductType = {
  id: number;
  name: string;
  image: string;
  category: string;
  stock: number;
  price: number;
  price_discount: number | boolean;
  updated_at: string;
  status: "dijual" | "tidak dijual" | "stok habis";
};
