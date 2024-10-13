import { useTranslations } from "next-intl";

type Props = {
  onClick: () => void;
};

export default function AdminProductsFilterApply({ onClick }: Props) {
  const t = useTranslations("admin.products.table.actions");

  return (
    <div
      className="ml-2 flex-1 cursor-pointer rounded-md bg-secondary px-2 py-1 text-center font-medium text-white shadow-md transition-all hover:bg-emerald-600"
      onClick={onClick}
    >
      {t("apply")}
    </div>
  );
}
