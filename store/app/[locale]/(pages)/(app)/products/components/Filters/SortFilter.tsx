"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PRDropdown from "../../../../../../common/components/PrimeReact/Inputs/PRDropdown";

interface SortOption {
  label: string;
  value: string;
}

interface SortFilterProps {
  sortOptions: SortOption[];
}

export function SortFilter({ sortOptions }: SortFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSort = searchParams.get("sort") || null;

  const handleSortChange = (value: string | null) => {
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
