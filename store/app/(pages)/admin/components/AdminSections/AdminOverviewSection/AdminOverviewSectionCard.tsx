import type { ReactNode } from "react";
import { cn } from "../../../../../common/utils/utils";

interface AdminOverviewSectionCardProps {
  title: string;
  value: number | undefined;
  icon: ReactNode;
  color: "green" | "yellow" | "blue" | "purple";
  currency?: string;
}

export default function AdminOverviewSectionCard({
  title,
  value,
  currency,
  icon,
  color,
}: AdminOverviewSectionCardProps) {
  const colorClasses = {
    green: "bg-green-100 text-green-500",
    yellow: "bg-yellow-100 text-yellow-500",
    blue: "bg-blue-100 text-blue-500",
    purple: "bg-purple-100 text-purple-500",
  };

  return (
    <div className="flex items-center rounded-lg bg-white p-6 shadow-sm">
      <div
        className={cn(
          "rounded-lg p-4 shadow-sm",
          colorClasses[color as keyof typeof colorClasses],
        )}
      >
        {icon}
      </div>
      <div className="px-6">
        <div className="mb-1 flex items-center justify-between gap-x-6">
          <div className="text-2xl font-semibold">
            {value?.toLocaleString() ?? 0} {currency}
          </div>
        </div>
        <div className="text-sm text-zinc-400">{title}</div>
      </div>
    </div>
  );
}
