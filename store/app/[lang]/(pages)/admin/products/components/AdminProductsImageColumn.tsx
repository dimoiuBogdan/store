"use client";

import PRImage from "../../../../../common/components/PRImage";
import type { AdminBestProductModel } from "../../components/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";

type Props = {
  rowData: AdminBestProductModel;
};

export default function AdminProductsImageColumn({ rowData }: Props) {
  return <PRImage src={rowData.productImage} alt={rowData.name} />;
}
