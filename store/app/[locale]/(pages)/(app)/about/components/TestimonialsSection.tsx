"use client";

import { Carousel } from "primereact/carousel";
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The quality of their accessories is unmatched. I've never felt more stylish!",
    name: "Sarah Johnson",
    title: "Fashion Blogger",
  },
  {
    quote:
      "Exceptional customer service and stunning designs. I'm a customer for life!",
    name: "Michael Chen",
    title: "Entrepreneur",
  },
  {
    quote:
      "Their commitment to sustainability aligns perfectly with my values. Highly recommend!",
    name: "Emma Rodriguez",
    title: "Environmental Activist",
  },
];

const TestimonialsSection: React.FC = () => {
  const testimonialTemplate = (testimonial: Testimonial) => {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow-lg">
        <p className="mb-4 italic text-gray-600">
          &quot;{testimonial.quote}&quot;
        </p>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    );
  };

  return (
    <section className="my-16 rounded-md bg-zinc-800 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <Carousel
          value={testimonials}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          itemTemplate={testimonialTemplate}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
