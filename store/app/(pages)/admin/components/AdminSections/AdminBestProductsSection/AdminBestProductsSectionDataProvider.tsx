import AdminService from "../../../../../common/services/admin/admin.service";
import AdminBestProductsSection from "./AdminBestProductsSection";
import AdminBestProductSectionError from "./error";

export default async function AdminBestProductsSectionDataProvider() {
  try {
    const { getBestProducts } = AdminService;

    const bestProducts = await getBestProducts();

    return <AdminBestProductsSection bestProducts={bestProducts} />;
  } catch (error) {
    console.error("Failed to fetch best products:", error);

    return <AdminBestProductSectionError />;
  }
}
