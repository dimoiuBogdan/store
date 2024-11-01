"use client";

import BackgroundOverlay from "@/app/common/components/BackgroundOverlay";
import { useViewport } from "@/app/common/hooks/useViewport";
import { useSearchParams } from "next/navigation";
import { Suspense, type JSX } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { ClearFilters } from "./ClearFilters";
import CloseFilters from "./CloseFilters";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { SortFilter } from "./SortFilter";
import useFilters from "./hooks/useFilters";

const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];
const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Rating", value: "rating" },
  { label: "Popularity", value: "popularity" },
];

export function ProductFilter(): JSX.Element | null {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { handleCloseFilters } = useFilters();
  const viewport = useViewport();

  const showFilters = viewport === "mobile" ? params.get("filters") : true;

  if (!showFilters) return null;

  return (
    <>
      <BackgroundOverlay onClick={handleCloseFilters} className="md:hidden" />
      <div className="fixed bottom-0 left-0 z-10 h-fit w-full rounded-lg bg-zinc-800 p-4 shadow-md md:sticky md:top-20 md:w-1/5 md:min-w-min">
        <h2 className="mb-4 flex items-center justify-between text-xl font-semibold">
          Filters
          <div className="flex items-center gap-x-4">
            <ClearFilters />
            <CloseFilters />
          </div>
        </h2>
        <Suspense fallback={<div>Loading filters...</div>}>
          <form className="space-y-6">
            <fieldset>
              <legend className="mb-2 font-semibold">Categories</legend>
              <CategoryFilter categories={categories} />
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-semibold">Price Range</legend>
              <PriceRangeFilter />
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-semibold">Sort By</legend>
              <SortFilter sortOptions={sortOptions} />
            </fieldset>
          </form>
        </Suspense>
      </div>
    </>
  );
}
