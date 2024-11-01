import Image from "next/image";
import { Card } from "primereact/card";
import React from "react";

const categories = [
  {
    name: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bracelets",
    image:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rings",
    image:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Earrings",
    image:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-screen-xl py-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Featured Categories
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="cursor-pointer overflow-hidden rounded-md bg-zinc-700/50 py-0 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden rounded-md">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
