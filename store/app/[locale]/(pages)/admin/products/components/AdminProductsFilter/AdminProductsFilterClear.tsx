import { useTranslations } from "next-intl";
import type { JSX } from "react";

type Props = {
  onClick: () => void;
};

export default function AdminProductsFilterClear({
  onClick,
}: Props): JSX.Element {
  const t = useTranslations("admin.products.table.actions");

  return (
    <div
      className="mr-2 flex-1 cursor-pointer rounded-md bg-red-500 px-2 py-1 text-center text-sm font-medium text-white shadow-md transition-all hover:bg-red-600"
      onClick={onClick}
    >
      {t("clear")}
    </div>
  );
}
