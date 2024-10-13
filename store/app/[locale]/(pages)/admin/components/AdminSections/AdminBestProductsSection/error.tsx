"use client";

export default function AdminBestProductSectionError({
  reset,
}: {
  reset?: () => void;
}) {
  return (
    <div>
      <h2>Error retrieving best products</h2>
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
