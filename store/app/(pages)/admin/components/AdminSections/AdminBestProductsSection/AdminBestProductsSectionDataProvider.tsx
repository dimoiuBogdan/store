import { fetchBestProducts } from "./admin-best-products-section-data-provider.action";
import AdminBestProductsSection from "./AdminBestProductsSection";
import AdminBestProductSectionError from "./error";

export default async function AdminBestProductsSectionDataProvider() {
  try {
    const bestProducts = await fetchBestProducts();

    return <AdminBestProductsSection bestProducts={bestProducts} />;
  } catch (error) {
    console.error("Failed to fetch best products:", error);

    return <AdminBestProductSectionError />;
  }
}
