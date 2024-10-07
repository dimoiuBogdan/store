import {
  ChartColumnIncreasing,
  DollarSign,
  ShoppingBag,
  Truck,
  UserPlus,
} from "lucide-react";
import { notFound } from "next/navigation";
import AdminOverviewSectionCard from "./AdminOverviewSectionCard";
import AdminOverviewSectionError from "./error";
import type { AdminOverviewModel } from "./types/admin-overview-section.types";

export default async function AdminOverviewSection() {
  let overview: AdminOverviewModel | null = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/overview`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    overview = await response.json();

    if (!overview) {
      return <p>No overview found.</p>;
    }
  } catch (error) {
    console.error("Failed to fetch overview:", error);

    return <AdminOverviewSectionError />;
  }

  console.log(overview);

  return (
    <section>
      <div className="mb-4 flex items-center gap-x-4">
        <ChartColumnIncreasing className="h-5 w-5" />
        <h2 className="font-medium">Business Overview</h2>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <AdminOverviewSectionCard
          title="Money earned"
          value={overview.total}
          icon={<DollarSign />}
          color="green"
          currency="$"
        />
        <AdminOverviewSectionCard
          title="Orders count"
          value={overview.ordersCount}
          icon={<Truck />}
          color="yellow"
        />
        <AdminOverviewSectionCard
          title="Products sold"
          value={overview.productsSold}
          icon={<ShoppingBag />}
          color="purple"
        />
        <AdminOverviewSectionCard
          title="New customers"
          value={overview.newCustomers}
          icon={<UserPlus />}
          color="blue"
        />
      </div>
    </section>
  );
}
