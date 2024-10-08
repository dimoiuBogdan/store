"use client";

export default function AdminProductsActionsColumn() {
  return (
    <div className="flex gap-x-2">
      <button className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600">
        Edit
      </button>
      <button className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600">
        Delete
      </button>
    </div>
  );
}
