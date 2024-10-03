import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { getQueryClient } from "../../get-query-client";
import AdminBestProductsSectionDataProvider from "./(components)/AdminSections/AdminBestProductsSection/AdminBestProductsSectionDataProvider";
import AdminLatestOrdersSectionDataProvider from "./(components)/AdminSections/AdminLatestOrdersSection/AdminLatestOrdersSectionDataProvider";
import AdminOverviewSection from "./(components)/AdminSections/AdminOverviewSection/AdminOverviewSection";
import AdminTopCategoriesSection from "./(components)/AdminSections/AdminTopCategoriesSection/AdminTopCategoriesSection";

export default function AdminPage() {
  const queryClient = getQueryClient();

  return (
    <div className="flex flex-col gap-y-10">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading Overview...</div>}>
          <AdminOverviewSection />
        </Suspense>
        <div className="grid grid-cols-3 gap-x-6">
          <Suspense fallback={<div>Loading Latest Orders...</div>}>
            <AdminLatestOrdersSectionDataProvider />
          </Suspense>
          <Suspense fallback={<div>Loading Top Categories...</div>}>
            <AdminTopCategoriesSection />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading Best Products...</div>}>
          <AdminBestProductsSectionDataProvider />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
