import type { DataTableFilterMeta } from "primereact/datatable";
import { useState, type ChangeEvent } from "react";

const FILTERS: DataTableFilterMeta = {
  global: { value: null, matchMode: "contains" },
  productId: { value: null, matchMode: "equals" },
  name: { value: null, matchMode: "contains" },
  "categories.name": { value: null, matchMode: "contains" },
};
const useAdminProductTable = () => {
  const [filters, setFilters] = useState<DataTableFilterMeta>(FILTERS);

  const [globalFilterValue, setGlobalFilterValue] = useState<string | null>(
    null,
  );

  const onGlobalFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFilters((prevFilters) => ({
      ...prevFilters,
      global: { value, matchMode: "contains" },
    }));

    setGlobalFilterValue(value);
  };

  const clearFilters = () => {
    setFilters(FILTERS);

    setGlobalFilterValue(null);
  };

  return {
    onGlobalFilterChange,
    clearFilters,
    filters,
    globalFilterValue,
  };
};

export default useAdminProductTable;
