"use client";

export default function AdminTopCategoriesSectionError({
  reset,
}: {
  reset?: () => void;
}) {
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
