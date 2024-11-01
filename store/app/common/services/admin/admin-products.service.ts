import type { AdminProductModel } from "@/app/[locale]/(pages)/admin/products/types/admin-products-table.types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin/products`;

const getProducts = async (): Promise<AdminProductModel[]> => {
  const response = await fetch(`${BASE_URL}`, {
    next: { revalidate: 3600, tags: ["admin-products"] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const products = await response.json();

  if (!products || products.length === 0) {
    return [];
  }

  return products;
};

const addNewProduct = async (
  formData: FormData,
): Promise<AdminProductModel> => {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const newProduct = await response.json();

  return newProduct;
};

const AdminProductsService = {
  getProducts,
  addNewProduct,
};

export default AdminProductsService;
