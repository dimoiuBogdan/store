import AdminService from "@/app/common/services/admin/admin.service";
import {
  ChartColumnIncreasing,
  DollarSign,
  ShoppingBag,
  Truck,
  UserPlus,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { JSX } from "react";
import AdminOverviewSectionCard from "./AdminOverviewSectionCard";
import AdminOverviewSectionError from "./error";

export default async function AdminOverviewSection(): Promise<JSX.Element> {
  try {
    const { getOverview } = AdminService;

    const overview = await getOverview();

    const t = await getTranslations("admin.overview");

    return (
      <section>
        <div className="mb-4 flex items-center gap-x-4 text-primary">
          <ChartColumnIncreasing className="h-5 w-5" />
          <h2 className="font-medium">{t("businessOverview.title")}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <AdminOverviewSectionCard
            title={t("businessOverview.moneyEarned")}
            value={overview?.total}
            icon={<DollarSign />}
            color="green"
            currency="$"
          />
          <AdminOverviewSectionCard
            title={t("businessOverview.orders")}
            value={overview?.ordersCount}
            icon={<Truck />}
            color="yellow"
          />
          <AdminOverviewSectionCard
            title={t("businessOverview.productsSold")}
            value={overview?.productsSold}
            icon={<ShoppingBag />}
            color="purple"
          />
          <AdminOverviewSectionCard
            title={t("businessOverview.newCustomers")}
            value={overview?.newCustomers}
            icon={<UserPlus />}
            color="blue"
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch overview:", error);

    return <AdminOverviewSectionError />;
  }
}
