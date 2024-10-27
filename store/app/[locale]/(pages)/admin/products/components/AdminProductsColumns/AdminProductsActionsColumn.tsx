"use client";

import { EditIcon, TrashIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import PRConfirmationDialog from "../../../../../../common/components/PrimeReact/PRConfirmationDialog";

type Props = {
  productId: string;
};

export default function AdminProductsActionsColumn({ productId }: Props) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const showQuitConfirmationModal = params.get("deleteProduct") === productId;

  const handleEditProduct = (productId: string) => {
    params.set("product", productId);
    replace(`?${params.toString()}`);
  };

  const handleDeleteProduct = (productId: string) => {
    params.set("deleteProduct", productId);

    replace(`?${params.toString()}`);
  };

  const handleHideDeleteProductModal = () => {
    params.delete("deleteProduct");

    replace(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-x-4">
      <EditIcon
        onClick={() => handleEditProduct(productId)}
        className="h-5 w-5 cursor-pointer text-yellow-500"
      />
      <div>
        <TrashIcon
          onClick={() => handleDeleteProduct(productId)}
          className="h-5 w-5 cursor-pointer text-red-500"
        />
        <PRConfirmationDialog
          visible={showQuitConfirmationModal}
          onHide={handleHideDeleteProductModal}
          message="Are you sure you want to delete this product?"
          accept={() => alert("Product deleted")}
          header="Delete product"
        />
      </div>
    </div>
  );
}
