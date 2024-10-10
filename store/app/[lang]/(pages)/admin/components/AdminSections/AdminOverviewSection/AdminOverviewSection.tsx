import {
  ChartColumnIncreasing,
  DollarSign,
  ShoppingBag,
  Truck,
  UserPlus,
} from "lucide-react";
import AdminService from "../../../../../../common/services/admin/admin.service";
import AdminOverviewSectionCard from "./AdminOverviewSectionCard";
import AdminOverviewSectionError from "./error";

export default async function AdminOverviewSection() {
  try {
    const { getOverview } = AdminService;

    const overview = await getOverview();

    return (
      <section>
        <div className="mb-4 flex items-center gap-x-4 text-primary">
          <ChartColumnIncreasing className="h-5 w-5" />
          <h2 className="font-medium">Business Overview</h2>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <AdminOverviewSectionCard
            title="Money earned"
            value={overview?.total}
            icon={<DollarSign />}
            color="green"
            currency="$"
          />
          <AdminOverviewSectionCard
            title="Orders count"
            value={overview?.ordersCount}
            icon={<Truck />}
            color="yellow"
          />
          <AdminOverviewSectionCard
            title="Products sold"
            value={overview?.productsSold}
            icon={<ShoppingBag />}
            color="purple"
          />
          <AdminOverviewSectionCard
            title="New customers"
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
