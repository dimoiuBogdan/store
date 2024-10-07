"use client";

export default function AdminOverviewSectionError({
  reset,
}: {
  reset?: () => void;
}) {
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
