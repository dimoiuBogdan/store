"use client";

import { Image } from "primereact/image";
import type { AdminBestProductModel } from "../../components/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";

export default function AdminProductsImageColumn({
  rowData,
}: {
  rowData: AdminBestProductModel;
}) {
  return (
    <Image
      src={rowData.productImage}
      alt={rowData.name}
      className="h-16 w-16 overflow-hidden rounded-md shadow-sm"
      pt={{
        image: {
          className: "h-16 w-16 object-cover object-center",
        },
      }}
      preview
    />
  );
}
