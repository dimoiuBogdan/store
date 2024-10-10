"use client";

import { Box, Info } from "lucide-react";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Tooltip } from "primereact/tooltip";
import PRImage from "../../../../../../common/components/PRImage";
import { cn } from "../../../../../../common/utils/utils";
import { AdminBestProductModel } from "./types/admin-best-products-section.types";

type Props = {
  bestProducts: AdminBestProductModel[];
};

export default function AdminBestProductsSection({ bestProducts }: Props) {
  const imageBodyTemplate = (rowData: AdminBestProductModel) => {
    return <PRImage src={rowData.productImage} alt={rowData.name} />;
  };

  const priceBodyTemplate = (rowData: AdminBestProductModel) => {
    return <span className="font-bold">{rowData.price} $</span>;
  };

  const stockBodyTemplate = (rowData: AdminBestProductModel) => {
    const stockColor = rowData.stock <= 10 ? "text-red-500" : "";

    return <span className={cn("font-bold", stockColor)}>{rowData.stock}</span>;
  };

  const idHeader = (
    <div className="flex items-center gap-x-2">
      <h2 className="font-medium">ID</h2>
      <Info className="id h-5 w-5 text-primary" />
      <Tooltip target=".id" className="text-xs" position="bottom">
        Click on the ID to view details and take actions
      </Tooltip>
    </div>
  );

  const idBodyTemplate = (rowData: AdminBestProductModel) => {
    return (
      <div className="cursor-pointer font-bold text-primary">
        {rowData.productId}
      </div>
    );
  };

  const categoryBodyTemplate = (rowData: AdminBestProductModel) => {
    return (
      <div>
        {rowData.categories.map((category) => category.name).join(" / ")}
      </div>
    );
  };

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2 text-primary">
          <Box className="h-5 w-5" />
          <h2 className="font-medium">Best Selling Products</h2>
        </div>
        <Link
          href="/admin/products"
          className="cursor-pointer font-medium text-primary underline"
        >
          View All
        </Link>
      </div>
      <DataTable
        value={bestProducts}
        rows={5}
        scrollable
        className="overflow-hidden overflow-x-auto rounded-lg text-sm shadow-sm"
        tableClassName="h-[400px]"
        pt={{
          wrapper: {
            className: "bg-background",
          },
          column: {
            headerCell: {
              className: "bg-zinc-800 text-zinc-200",
            },
            bodyCell: {
              className: "bg-background text-zinc-200",
            },
          },
        }}
      >
        <Column field="productId" header={idHeader} body={idBodyTemplate} />
        <Column field="name" header="Name" />
        <Column field="salesCount" header="Sales" />
        <Column field="price" header="Price" body={priceBodyTemplate} />
        <Column field="stock" header="Stock" body={stockBodyTemplate} />
        <Column
          field="categories"
          header="Category"
          body={categoryBodyTemplate}
        />
        <Column field="productImage" header="Image" body={imageBodyTemplate} />
      </DataTable>
    </section>
  );
}
