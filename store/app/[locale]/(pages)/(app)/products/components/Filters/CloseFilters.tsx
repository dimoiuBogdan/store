"use client";

import { XCircleIcon } from "lucide-react";
import type { JSX } from "react";
import useFilters from "./hooks/useFilters";

const CloseFilters = (): JSX.Element => {
  const { handleCloseFilters } = useFilters();

  return (
    <XCircleIcon
      onClick={handleCloseFilters}
      className="h-8 w-8 rounded-full bg-primary p-1 text-primary-darkest md:hidden"
    />
  );
};

export default CloseFilters;
