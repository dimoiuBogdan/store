import { ShoppingBag } from "lucide-react";
import { notFound } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import AdminTopCategoriesSectionError from "./error";
import type { AdminBestCategoriesModel } from "./types/admin-best-categories-section.types";

export default async function AdminBestCategoriesSection() {
  let bestCategories: AdminBestCategoriesModel[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/best-categories`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    bestCategories = await response.json();

    if (!bestCategories || bestCategories.length === 0) {
      return <p>No best categories found.</p>;
    }
  } catch (error) {
    console.error("Failed to fetch best categories:", error);

    return <AdminTopCategoriesSectionError />;
  }

  return (
    <section>
      <div className="mb-4 flex items-center gap-x-4">
        <ShoppingBag className="h-5 w-5" />
        <h2 className="font-medium">Top Categories</h2>
      </div>
      <DataTable
        value={bestCategories}
        rows={5}
        tableClassName="h-[400px] text-sm"
        className="overflow-hidden rounded-lg shadow-sm"
      >
        <Column field="name" header="Category" />
        <Column field="salesCount" header="Sales" />
      </DataTable>
    </section>
  );
}
