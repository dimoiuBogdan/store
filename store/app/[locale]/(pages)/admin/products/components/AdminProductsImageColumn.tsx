"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import PRImage from "../../../../../common/components/PrimeReact/PRImage";
import type { AdminProductModel } from "../types/admin-products-table.types";

type Props = {
  rowData: AdminProductModel;
};

export default function AdminProductsImageColumn({ rowData }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    if (index < 0) return setImageIndex(rowData.productImages.length - 1);

    if (index >= rowData.productImages.length) return setImageIndex(0);

    setImageIndex(index);
  };

  return (
    <div className="flex items-center">
      <ChevronLeftIcon
        className="h-6 w-6 cursor-pointer text-primary"
        onClick={() => handleIndexChange(imageIndex - 1)}
      />
      <PRImage
        key={rowData.productImages[imageIndex].imageId}
        src={rowData.productImages[imageIndex].url}
        alt={rowData.name}
      />
      <ChevronRightIcon
        className="h-6 w-6 cursor-pointer text-primary"
        onClick={() => handleIndexChange(imageIndex + 1)}
      />
    </div>
  );
}
