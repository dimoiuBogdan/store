import type { AdminBestProductModel } from "../../../[locale]/(pages)/admin/components/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";
import type {
  AdminOrderDetailsModel,
  AdminOrderedProductModel,
} from "../../../[locale]/(pages)/admin/components/AdminSections/AdminLatestOrdersSection/AdminLatestOrdersDetailsPopup/types/admin-latest-orders-details-popup.types";
import type { AdminLatestOrderModel } from "../../../[locale]/(pages)/admin/components/AdminSections/AdminLatestOrdersSection/types/admin-latest-orders-section.types";
import type { AdminOverviewModel } from "../../../[locale]/(pages)/admin/components/AdminSections/AdminOverviewSection/types/admin-overview-section.types";
import type { AdminBestCategoriesModel } from "../../../[locale]/(pages)/admin/components/AdminSections/AdminTopCategoriesSection/types/admin-best-categories-section.types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin`;

const getBestProducts = async (): Promise<AdminBestProductModel[]> => {
  const response = await fetch(`${BASE_URL}/best-products`, {
    next: { revalidate: 3600, tags: ["admin-best-products"] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bestProducts = await response.json();

  if (!bestProducts || bestProducts.length === 0) {
    return [];
  }

  return bestProducts;
};

const getLatestOrders = async (): Promise<AdminLatestOrderModel[]> => {
  const response = await fetch(`${BASE_URL}/latest-orders`, {
    next: { revalidate: 3600, tags: ["admin-latest-orders"] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const latestOrders = await response.json();

  if (!latestOrders || latestOrders.length === 0) {
    return [];
  }

  return latestOrders;
};

const getLatestOrderDetails = async (
  orderToEdit: string,
): Promise<AdminOrderDetailsModel> => {
  const response = await fetch(`${BASE_URL}/latest-orders/${orderToEdit}`, {
    next: { revalidate: 3600, tags: [`admin-latest-order-${orderToEdit}`] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const latestOrderDetails = await response.json();

  return latestOrderDetails;
};

const getBestCategories = async (): Promise<AdminBestCategoriesModel[]> => {
  const response = await fetch(`${BASE_URL}/best-categories`, {
    next: { revalidate: 3600, tags: ["admin-best-categories"] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bestCategories = await response.json();

  return bestCategories;
};

const getLatestOrderProducts = async (
  orderToEdit: string,
): Promise<AdminOrderedProductModel[]> => {
  const response = await fetch(`${BASE_URL}/order-products/${orderToEdit}`, {
    next: { revalidate: 3600, tags: [`admin-latest-order-${orderToEdit}`] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const latestOrderProducts = await response.json();

  if (!latestOrderProducts || latestOrderProducts.length === 0) {
    return [];
  }

  return latestOrderProducts;
};

const getOverview = async (): Promise<AdminOverviewModel | null> => {
  const response = await fetch(`${BASE_URL}/overview`, {
    next: { revalidate: 3600, tags: ["admin-overview"] },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const overview = await response.json();

  if (!overview) {
    return null;
  }

  return overview;
};

const AdminService = {
  getBestProducts,
  getLatestOrders,
  getLatestOrderDetails,
  getBestCategories,
  getLatestOrderProducts,
  getOverview,
};

export default AdminService;
