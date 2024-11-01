"use client";

import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import type { JSX } from "react";

export function ClearFilters(): JSX.Element {
  const router = useRouter();

  const handleClearFilters = (): void => {
    router.replace("?");
  };

  return (
    <TrashIcon
      onClick={handleClearFilters}
      className="h-7 w-7 cursor-pointer rounded-full bg-primary p-1 text-background transition-all hover:bg-primary/20 hover:text-primary"
    />
  );
}
