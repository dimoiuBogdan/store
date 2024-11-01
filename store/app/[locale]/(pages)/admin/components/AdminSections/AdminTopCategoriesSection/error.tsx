"use client";

import type { JSX } from "react";

export default function AdminTopCategoriesSectionError({
  reset,
}: {
  reset?: () => void;
}): JSX.Element {
  return (
    <div>
      <h2>Error retrieving top categories</h2>
      <button
        onClick={() => {
          if (reset) {
            reset();
          } else {
            window.location.reload();
          }
        }}
      >
        Try again
      </button>
    </div>
  );
}
