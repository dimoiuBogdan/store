import { Suspense } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { FilterButton } from "./FilterButton";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { RatingFilter } from "./RatingFilter";
import { SortFilter } from "./SortFilter";

const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];
const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Rating", value: "rating" },
  { label: "Popularity", value: "popularity" },
];

export function ProductFilter() {
  return (
    <div className="sticky top-20 h-fit w-full rounded-lg bg-zinc-800 p-4 shadow-md md:w-1/5">
      <h2 className="mb-4 flex items-center justify-between text-xl font-semibold">
        Filters <FilterButton />
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
            <legend className="mb-2 font-semibold">Rating</legend>
            <RatingFilter />
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-semibold">Sort By</legend>
            <SortFilter sortOptions={sortOptions} />
          </fieldset>
        </form>
      </Suspense>
    </div>
  );
}
