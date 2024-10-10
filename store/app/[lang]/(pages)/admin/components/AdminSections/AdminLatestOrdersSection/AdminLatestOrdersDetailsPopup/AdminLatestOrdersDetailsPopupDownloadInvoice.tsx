import { File } from "lucide-react";

export default function AdminLatestOrdersDetailsPopupDownloadInvoice() {
  return (
    <div className="bg-primary hover:bg-secondary flex cursor-pointer items-center gap-x-2 rounded-md p-2 text-white shadow-md transition-all">
      <File size={16} /> Download Invoice
    </div>
  );
}
