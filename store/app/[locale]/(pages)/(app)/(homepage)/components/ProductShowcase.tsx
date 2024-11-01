"use client";

import { Carousel, type CarouselResponsiveOption } from "primereact/carousel";
import React, { type JSX } from "react";
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
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product: (typeof products)[0]): JSX.Element => {
    return (
      <div className="md:p-2">
        <ProductCard {...product} />
      </div>
    );
  };

  return (
    <section className="pb-20">
      <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
      <Carousel
        value={products}
        showIndicators={false}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        autoplayInterval={5000}
        circular
        itemTemplate={productTemplate}
      />
    </section>
  );
};

export default ProductShowcase;
