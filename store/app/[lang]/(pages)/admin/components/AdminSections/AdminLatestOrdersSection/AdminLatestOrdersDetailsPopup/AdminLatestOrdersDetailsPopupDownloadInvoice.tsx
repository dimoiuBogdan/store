import { File } from "lucide-react";

export default function AdminLatestOrdersDetailsPopupDownloadInvoice() {
  return (
    <div className="flex cursor-pointer items-center gap-x-2 rounded-md bg-secondary p-2 text-white shadow-md transition-all hover:bg-primary">
      <File size={16} /> Download Invoice
    </div>
  );
}
