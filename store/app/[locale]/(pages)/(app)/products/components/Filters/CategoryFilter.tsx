"use client";

import PRCheckbox from "@/app/common/components/PrimeReact/Inputs/PRCheckbox";
import { useRouter, useSearchParams } from "next/navigation";
import type { JSX } from "react";

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({
  categories,
}: CategoryFilterProps): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategories = searchParams.get("categories")?.split(",") || [];

  const handleCategoryChange = (category: string): void => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    const params = new URLSearchParams(searchParams);

    if (updatedCategories.length > 0) {
      params.set("categories", updatedCategories.join(","));
    } else {
      params.delete("categories");
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category} className="flex items-center">
          <PRCheckbox
            inputId={`category-${category}`}
            name="category"
            value={category}
            onChange={() => handleCategoryChange(category)}
            checked={selectedCategories.includes(category)}
            label={category}
          />
        </div>
      ))}
    </div>
  );
}
