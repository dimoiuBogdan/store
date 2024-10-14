import type {
  CategoryModel,
  ImageModel,
} from "../../../../../common/types/types";

export type AdminProductModel = {
  productId: number;
  name: string;
  price: number;
  stock: number;
  categories: CategoryModel[];
  salesCount: number;
  productImages: ImageModel[];
  isActive: boolean;
  createdAt: string;
};
