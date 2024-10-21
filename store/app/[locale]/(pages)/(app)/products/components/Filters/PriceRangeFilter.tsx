"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { InputNumber } from "primereact/inputnumber";
import { useEffect, useState } from "react";

export function PriceRangeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (minPrice && maxPrice) {
      setPriceRange([parseInt(minPrice), parseInt(maxPrice)]);
    }
  }, [searchParams]);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);

    const params = new URLSearchParams(searchParams);

    params.set("minPrice", value[0].toString());
    params.set("maxPrice", value[1].toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center space-y-2">
      <label htmlFor="minPrice" className="text-sm font-medium text-zinc-300">
        Min Price
      </label>
      <InputNumber
        id="minPrice"
        value={priceRange[0]}
        onValueChange={(e) =>
          handlePriceChange([e.value as number, priceRange[1]])
        }
        mode="currency"
        currency="USD"
        locale="en-US"
        pt={{
          input: {
            root: {
              className: "bg-zinc-700 shadow-sm shadow-zinc-500 py-0.5 px-2",
            },
          },
        }}
      />
      <label htmlFor="maxPrice" className="text-sm font-medium text-zinc-300">
        Max Price
      </label>
      <InputNumber
        id="maxPrice"
        value={priceRange[1]}
        onValueChange={(e) =>
          handlePriceChange([priceRange[0], e.value as number])
        }
        mode="currency"
        currency="USD"
        locale="en-US"
        pt={{
          input: {
            root: {
              className: "bg-zinc-700 shadow-sm shadow-zinc-500 py-0.5 px-2",
            },
          },
        }}
      />
    </div>
  );
}
