import AdminService from "@/app/common/services/admin/admin.service";
import type { JSX } from "react";
import AdminBestProductsSection from "./AdminBestProductsSection";
import AdminBestProductSectionError from "./error";

export default async function AdminBestProductsSectionDataProvider(): Promise<JSX.Element> {
  try {
    const { getBestProducts } = AdminService;

    const bestProducts = await getBestProducts();

    return <AdminBestProductsSection bestProducts={bestProducts} />;
  } catch (error) {
    console.error("Failed to fetch best products:", error);

    return <AdminBestProductSectionError />;
  }
}
