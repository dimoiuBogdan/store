import {
  ChartColumnIncreasing,
  DollarSign,
  ShoppingBag,
  Truck,
  UserPlus,
} from "lucide-react";
import AdminOverviewSectionCard from "./AdminOverviewSectionCard";

export default async function AdminOverviewSection() {
  return (
    <section>
      <div className="mb-4 flex items-center gap-x-4">
        <ChartColumnIncreasing className="h-5 w-5" />
        <h2 className="font-medium">Business Overview</h2>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <AdminOverviewSectionCard
          title="Money earned"
          value={0}
          percentage={0}
          icon={<DollarSign />}
          color="green"
        />
        <AdminOverviewSectionCard
          title="Orders count"
          value={0}
          percentage={0}
          icon={<Truck />}
          color="yellow"
        />
        <AdminOverviewSectionCard
          title="Products sold"
          value={0}
          percentage={0}
          icon={<ShoppingBag />}
          color="purple"
        />
        <AdminOverviewSectionCard
          title="New customers"
          value={0}
          percentage={0}
          icon={<UserPlus />}
          color="blue"
        />
      </div>
    </section>
  );
}
