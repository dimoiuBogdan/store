import { Suspense, type JSX } from "react";
import AdminBestProductsSectionDataProvider from "./components/AdminSections/AdminBestProductsSection/AdminBestProductsSectionDataProvider";
import AdminLatestOrdersSectionDataProvider from "./components/AdminSections/AdminLatestOrdersSection/AdminLatestOrdersSectionDataProvider";
import AdminOverviewSection from "./components/AdminSections/AdminOverviewSection/AdminOverviewSection";
import AdminBestCategoriesSection from "./components/AdminSections/AdminTopCategoriesSection/AdminTopCategoriesSection";

export default function AdminPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-10">
      <Suspense fallback={<div>Loading Overview...</div>}>
        <AdminOverviewSection />
      </Suspense>
      <div className="grid grid-cols-3 gap-x-6">
        <Suspense fallback={<div>Loading Latest Orders...</div>}>
          <AdminLatestOrdersSectionDataProvider />
        </Suspense>
        <Suspense fallback={<div>Loading Best Categories...</div>}>
          <AdminBestCategoriesSection />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading Best Products...</div>}>
        <AdminBestProductsSectionDataProvider />
      </Suspense>
    </div>
  );
}
