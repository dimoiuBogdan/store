"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { RadioButton } from "primereact/radiobutton";

export function RatingFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedRating = searchParams.get("rating");

  const handleRatingChange = (rating: string) => {
    const params = new URLSearchParams(searchParams);

    console.log(rating, selectedRating);

    if (rating === selectedRating) {
      params.delete("rating");
    } else {
      params.set("rating", rating);
    }

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col space-y-2">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div key={rating} className="flex items-center">
          <RadioButton
            inputId={`rating-${rating}`}
            name="rating"
            value={rating.toString()}
            onChange={(e) => handleRatingChange(e.value)}
            checked={selectedRating === rating.toString()}
            pt={{
              box: {
                className: "bg-zinc-700 shadow-sm shadow-zinc-500",
              },
            }}
          />
          <label
            htmlFor={`rating-${rating}`}
            className="ml-2 cursor-pointer transition-all hover:text-primary"
          >
            {rating} Stars & Up
          </label>
        </div>
      ))}
    </div>
  );
}
