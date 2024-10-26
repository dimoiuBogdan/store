import Image from "next/image";
import React from "react";

const BrandStory: React.FC = () => {
  return (
    <section className="px-4 py-16 text-zinc-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our brand story"
              layout="fill"
              unoptimized
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="mb-4">
              Founded in 2010, our journey began with a passion for creating
              unique, high-quality accessories that empower individuals to
              express their personal style. What started as a small workshop has
              grown into a beloved brand, known for its attention to detail and
              commitment to craftsmanship.
            </p>
            <p>
              Today, we continue to push the boundaries of design, blending
              traditional techniques with modern aesthetics to create
              accessories that are both timeless and contemporary. Our vision is
              to inspire confidence and creativity through every piece we craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
