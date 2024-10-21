"use client";

import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function FilterButton() {
  const router = useRouter();

  const handleClearFilters = () => {
    router.replace("?");
  };

  return (
    <TrashIcon
      onClick={handleClearFilters}
      className="h-7 w-7 cursor-pointer rounded-full bg-primary p-1 text-background transition-all hover:bg-primary/20 hover:text-primary"
    />
  );
}
