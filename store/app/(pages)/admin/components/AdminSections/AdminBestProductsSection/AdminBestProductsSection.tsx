"use client";

import { Box, Info } from "lucide-react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Image } from "primereact/image";
import { Tooltip } from "primereact/tooltip";
import { cn } from "../../../../../common/utils/utils";
import { AdminBestProductModel } from "./types/admin-best-products-section.types";

type Props = {
  bestProducts: AdminBestProductModel[];
};

export default function AdminBestProductsSection({ bestProducts }: Props) {
  const imageBodyTemplate = (rowData: AdminBestProductModel) => {
    return (
      <Image
        src={rowData.productImage}
        alt={rowData.name}
        className="h-20 w-20 overflow-hidden rounded-md shadow-sm"
        pt={{
          toolbar: {
            className: "text-purple-500",
          },
          image: {
            className: "h-20 w-20 object-cover object-center",
          },
          preview: {
            className: "max-h-[80vh] max-w-[80vw] object-center object-cover",
          },
        }}
        preview
      />
    );
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
      <Info className="id h-5 w-5 text-purple-500" />
      <Tooltip target=".id" className="text-xs" position="bottom">
        Click on the ID to view details and take actions
      </Tooltip>
    </div>
  );

  const idBodyTemplate = (rowData: AdminBestProductModel) => {
    return (
      <div className="cursor-pointer font-bold text-purple-500">
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
      <div className="mb-4 flex items-center gap-x-4">
        <Box className="h-5 w-5" />
        <h2 className="font-medium">Best Selling Products</h2>
      </div>
      <DataTable
        value={bestProducts}
        rows={5}
        scrollable
        className="overflow-hidden overflow-x-auto rounded-lg text-sm shadow-sm"
        tableClassName="h-[400px]"
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
