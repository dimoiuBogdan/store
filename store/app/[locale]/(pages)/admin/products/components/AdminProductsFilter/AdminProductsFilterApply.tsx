import { useTranslations } from "next-intl";
import type { ColumnFilterApplyTemplateOptions } from "primereact/column";
import type { JSX } from "react";

type Props = {
  options: ColumnFilterApplyTemplateOptions;
};

export default function AdminProductsFilterApply({
  options,
}: Props): JSX.Element {
  const t = useTranslations("admin.products.table.actions");

  const handleApply = (): void => {
    // @ts-expect-error error
    const constraints = options.filterModel.constraints[0];

    if (constraints.matchMode === "between") {
      if (Array.isArray(constraints.value) && constraints.value[1] === null) {
        constraints.value[1] = new Date(
          new Date().setFullYear(new Date().getFullYear() + 10),
        );
      }
    }

    options.filterApplyCallback();
  };

  return (
    <div
      className="ml-2 flex-1 cursor-pointer rounded-md bg-secondary px-2 py-1 text-center text-sm font-medium text-white shadow-md transition-all hover:bg-emerald-600"
      onClick={handleApply}
    >
      {t("apply")}
    </div>
  );
}
