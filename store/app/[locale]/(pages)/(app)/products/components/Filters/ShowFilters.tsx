"use client";

import { FilterIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import type { JSX } from "react";

const ShowFilters = (): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleShowFilters = (): void => {
    params.set("filters", "true");

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="mb-4 flex justify-end md:hidden">
      <FilterIcon
        onClick={handleShowFilters}
        className="h-8 w-8 rounded-full bg-primary p-1 text-primary-darkest md:hidden"
      />
    </div>
  );
};

export default ShowFilters;
