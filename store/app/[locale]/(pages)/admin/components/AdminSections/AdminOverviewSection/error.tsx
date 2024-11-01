"use client";

import type { JSX } from "react";

export default function AdminOverviewSectionError({
  reset,
}: {
  reset?: () => void;
}): JSX.Element {
  return (
    <div>
      <h2>Error retrieving overview</h2>
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
