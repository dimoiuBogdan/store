import type { ProductStatus } from "@/app/common/types/enums";

export type AdminProductsNewProduct = {
  name: string;
  description: string;
  status: ProductStatus;
  price: number | null;
  stock: number | null;
  categories: number[];
  images: string[];
};
