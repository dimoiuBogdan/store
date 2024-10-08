import { Search, X } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import useAdminProductTable from "../hooks/useAdminProductTable";

export default function AdminProductsTableHeader() {
  const { onGlobalFilterChange, clearFilters, globalFilterValue } =
    useAdminProductTable();

  return (
    <div className="flex items-center justify-between">
      <span className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Keyword Search"
          className="pl-10"
          pt={{
            root: { className: "p-inputtext-sm" },
          }}
        />
      </span>
      <Button
        type="button"
        icon={<X className="h-4 w-4" />}
        label="Clear Filters"
        severity="secondary"
        text
        size="small"
        onClick={clearFilters}
      />
    </div>
  );
}
