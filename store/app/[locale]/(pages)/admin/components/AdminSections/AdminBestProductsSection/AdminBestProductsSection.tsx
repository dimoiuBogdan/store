"use client";

import { Box, Info } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Tooltip } from "primereact/tooltip";
import PRColumn from "../../../../../../common/components/PrimeReact/PRColumn";
import PRDataTable from "../../../../../../common/components/PrimeReact/PRDataTable";
import PRImage from "../../../../../../common/components/PrimeReact/PRImage";
import { cn } from "../../../../../../common/utils/utils";
import { AdminBestProductModel } from "./types/admin-best-products-section.types";

type Props = {
  bestProducts: AdminBestProductModel[];
};

export default function AdminBestProductsSection({ bestProducts }: Props) {
  const t = useTranslations("admin.overview.bestSellingProducts");
  const tCommon = useTranslations("common");

  const imageBodyTemplate = (rowData: AdminBestProductModel) => {
    return <PRImage src={rowData.productImage} alt={rowData.name} />;
  };

  const priceBodyTemplate = (rowData: AdminBestProductModel) => {
    return <span className="font-bold">{rowData.price}</span>;
  };

  const stockBodyTemplate = (rowData: AdminBestProductModel) => {
    const stockColor = rowData.stock <= 10 ? "text-red-500" : "";

    return <span className={cn("font-bold", stockColor)}>{rowData.stock}</span>;
  };

  const idHeader = (
    <div className="flex items-center gap-x-2">
      <h2 className="font-medium">{t("table.id.title")}</h2>
      <Info className="id h-5 w-5 text-primary" />
      <Tooltip target=".id" className="text-xs" position="bottom">
        {t("table.id.tooltip")}
      </Tooltip>
    </div>
  );

  const idBodyTemplate = (rowData: AdminBestProductModel) => {
    return (
      <div className="cursor-pointer font-bold text-primary">
        {rowData.productId}
      </div>
    );
  };

  const categoryBodyTemplate = (rowData: AdminBestProductModel) => {
    return (
      <div>
        {rowData.categories.map((category) => category.name).join(" / ")}
      </div>
    );
  };

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2 text-primary">
          <Box className="h-5 w-5" />
          <h2 className="font-medium">{t("title")}</h2>
        </div>
        <Link
          href="/admin/products"
          className="cursor-pointer font-medium text-primary underline"
        >
          {tCommon("viewAll")}
        </Link>
      </div>

      <PRDataTable value={bestProducts} rows={5} tableClassName="h-[400px]">
        <PRColumn field="productId" header={idHeader} body={idBodyTemplate} />
        <PRColumn field="name" header={t("table.name")} />
        <PRColumn field="salesCount" header={t("table.sales")} />
        <PRColumn
          field="price"
          header={t("table.price")}
          body={priceBodyTemplate}
        />
        <PRColumn
          field="stock"
          header={t("table.stock")}
          body={stockBodyTemplate}
        />
        <PRColumn
          field="categories"
          header={t("table.category")}
          body={categoryBodyTemplate}
        />
        <PRColumn
          field="productImage"
          header={t("table.image")}
          body={imageBodyTemplate}
        />
      </PRDataTable>
    </section>
  );
}
