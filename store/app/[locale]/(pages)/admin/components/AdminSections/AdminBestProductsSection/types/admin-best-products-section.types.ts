import type { CategoryModel } from "../../../../../../../common/types/types";

export type AdminBestProductModel = {
  productId: number;
  name: string;
  price: number;
  stock: number;
  salesCount: number;
  categories: CategoryModel[];
  productImage: string;
};
