import { FilterX, Search } from "lucide-react";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import type { ChangeEvent } from "react";

type Props = {
  globalFilterValue: string | null;
  onGlobalFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFilters: () => void;
};

export default function AdminProductsTableHeader({
  globalFilterValue,
  onGlobalFilterChange,
  clearFilters,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Global Search"
          className="bg-zinc-800 pl-10 text-zinc-200"
          pt={{
            root: { className: "shadow-inner p-2" },
          }}
        />
      </span>
      <div className="flex items-center gap-2">
        <FilterX
          id="clear-filters"
          className="h-6 w-6 cursor-pointer"
          onClick={clearFilters}
        />
        <Tooltip
          target="#clear-filters"
          position="bottom"
          content="Clear Filters"
          className="text-xs"
        />
      </div>
    </div>
  );
}
