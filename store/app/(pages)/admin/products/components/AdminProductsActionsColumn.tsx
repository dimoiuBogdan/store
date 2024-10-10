"use client";

import { EditIcon, TrashIcon } from "lucide-react";

export default function AdminProductsActionsColumn() {
  return (
    <div className="flex gap-x-4">
      <EditIcon className="h-6 w-6 cursor-pointer text-yellow-500" />
      <TrashIcon className="h-6 w-6 cursor-pointer text-red-500" />
    </div>
  );
}
