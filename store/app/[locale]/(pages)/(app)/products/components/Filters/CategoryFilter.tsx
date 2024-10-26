"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PRCheckbox from "../../../../../../common/components/PrimeReact/Inputs/PRCheckbox";

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategories = searchParams.get("categories")?.split(",") || [];

  const handleCategoryChange = (category: string) => {
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
