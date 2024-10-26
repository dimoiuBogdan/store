import Link from "next/link";
import React from "react";

const PromotionalBanner: React.FC = () => {
  return (
    <section className="mb-12 rounded-md bg-gradient-to-r from-primary via-emerald-600 to-green-800 py-12 text-white">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Summer Sale: Up to 50% Off!
        </h2>
        <p className="mb-6 text-xl">
          Discover amazing deals on our latest collections.
        </p>
        <Link
          href="/products"
          className="rounded-lg bg-zinc-800 px-6 py-3 font-medium text-primary transition-all hover:bg-zinc-700"
        >
          Shop Sale
        </Link>
      </div>
    </section>
  );
};

export default PromotionalBanner;
