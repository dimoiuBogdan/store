import type { CategoryModel } from "../../../../../../common/types/types";

export type AdminBestProductModel = {
    productId: number;
    name: string;
    price: number;
    stock: number;
    categories: CategoryModel[];
    productImage: string;
};
