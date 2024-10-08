import { notFound } from "next/navigation";
import AdminBestProductsSection from "./AdminBestProductsSection";
import AdminBestProductSectionError from "./error";
import { AdminBestProductModel } from "./types/admin-best-products-section.types";

export default async function AdminBestProductsSectionDataProvider() {
  let bestProducts: AdminBestProductModel[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/best-products`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    bestProducts = await response.json();

    if (!bestProducts || bestProducts.length === 0) {
      return <p>No best products found.</p>;
    }
  } catch (error) {
    console.error("Failed to fetch best products:", error);

    return <AdminBestProductSectionError />;
  }

  return <AdminBestProductsSection bestProducts={bestProducts} />;
}
