import AdminBestProductsSection from "./AdminBestProductsSection";
import { AdminBestProductModel } from "./types/admin-best-products-section.types";

export default async function AdminBestProductsSectionDataProvider() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/best-products`,
  );
  const bestProducts: AdminBestProductModel[] = await response.json();

  return <AdminBestProductsSection bestProducts={bestProducts} />;
}
