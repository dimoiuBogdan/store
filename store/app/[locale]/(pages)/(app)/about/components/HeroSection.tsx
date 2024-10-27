import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Stylish accessories"
        unoptimized
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-white">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Accessorize Your Style
        </h1>
        <p className="mb-8 text-center text-xl">
          Crafting unique accessories that celebrate personal style
        </p>
        <Link
          href="/products"
          className="rounded-lg bg-zinc-800 px-6 py-3 font-medium text-primary transition-all hover:bg-zinc-700"
        >
          Explore Our Collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
