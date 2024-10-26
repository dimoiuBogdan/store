import Link from "next/link";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="mb-12 rounded-md bg-gradient-to-r from-primary via-emerald-600 to-green-800 py-12 text-white">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Elevate Your Style?
        </h2>
        <p className="mb-6 text-xl">
          Discover our latest collections and find the perfect accessory to
          express yourself.
        </p>
        <Link
          href="/products"
          className="rounded-lg bg-zinc-800 px-6 py-3 font-medium text-primary transition-all hover:bg-zinc-700"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
