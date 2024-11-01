"use client";

import PRDropdown from "@/app/common/components/PrimeReact/Inputs/PRDropdown";
import { useRouter, useSearchParams } from "next/navigation";
import type { JSX } from "react";

interface SortOption {
  label: string;
  value: string;
}

interface SortFilterProps {
  sortOptions: SortOption[];
}

export function SortFilter({ sortOptions }: SortFilterProps): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSort = searchParams.get("sort") || null;

  const handleSortChange = (value: string | null): void => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <PRDropdown
      value={selectedSort}
      options={sortOptions}
      onChange={(e) => handleSortChange(e.value)}
      placeholder="Select Sorting"
      className="w-full"
    />
  );
}
