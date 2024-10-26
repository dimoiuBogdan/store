"use client";

import { Carousel } from "primereact/carousel";
import React from "react";
import ProductCard from "../../products/components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 129.99,
    imageUrl:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gold Necklace",
  },
  {
    id: 2,
    name: "Silver Bracelet",
    price: 79.99,
    imageUrl:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Silver Bracelet",
  },
  {
    id: 3,
    name: "Diamond Ring",
    price: 299.99,
    imageUrl:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Diamond Ring",
  },
  {
    id: 4,
    name: "Pearl Earrings",
    price: 89.99,
    imageUrl:
      "https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pearl Earrings",
  },
];

const ProductShowcase: React.FC = () => {
  const productTemplate = (product: (typeof products)[0]) => {
    return (
      <div className="p-2">
        <ProductCard {...product} />
      </div>
    );
  };

  return (
    <section className="py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
      <Carousel
        value={products}
        numScroll={1}
        numVisible={3}
        circular
        autoplayInterval={5000}
        itemTemplate={productTemplate}
      />
    </section>
  );
};

export default ProductShowcase;
