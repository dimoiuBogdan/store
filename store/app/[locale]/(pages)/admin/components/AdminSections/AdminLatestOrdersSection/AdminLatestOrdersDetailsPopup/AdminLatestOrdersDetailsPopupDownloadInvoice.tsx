import { File } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AdminLatestOrdersDetailsPopupDownloadInvoice() {
  const t = useTranslations("admin.overview.orderDetails.actions");

  return (
    <div className="flex cursor-pointer items-center gap-x-2 rounded-md bg-secondary p-2 text-white shadow-md transition-all hover:bg-primary">
      <File size={16} /> {t("downloadInvoice")}
    </div>
  );
}
