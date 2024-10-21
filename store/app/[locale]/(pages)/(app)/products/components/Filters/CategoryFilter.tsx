"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "primereact/checkbox";

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
          <Checkbox
            inputId={`category-${category}`}
            name="category"
            value={category}
            onChange={() => handleCategoryChange(category)}
            checked={selectedCategories.includes(category)}
            pt={{
              box: {
                className: "bg-zinc-700 shadow-sm shadow-zinc-500",
              },
            }}
          />
          <label
            htmlFor={`category-${category}`}
            className="ml-2 cursor-pointer transition-all hover:text-primary"
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
}
