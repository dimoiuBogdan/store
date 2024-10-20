import type { ProductStatus } from "../../../../../../../common/types/enums";

export type AdminProductsNewProduct = {
  name: string;
  description: string;
  status: ProductStatus;
  price: number;
  stock: number;
  categories: number[];
  images: string[];
};
