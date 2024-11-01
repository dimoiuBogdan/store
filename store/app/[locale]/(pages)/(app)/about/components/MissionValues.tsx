import { Card } from "primereact/card";
import React from "react";

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "We take pride in creating accessories that stand the test of time, using only the finest materials and expert techniques.",
    icon: "🛠️",
  },
  {
    title: "Sustainability",
    description:
      "Our commitment to the environment drives us to use eco-friendly materials and ethical production practices.",
    icon: "🌿",
  },
  {
    title: "Customer-Centric",
    description:
      "Your satisfaction is our top priority. We strive to provide exceptional service and products that exceed expectations.",
    icon: "❤️",
  },
];

const MissionValues: React.FC = () => {
  return (
    <section className="rounded-md bg-zinc-800 px-4 py-16 text-zinc-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Our Mission & Values
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              className="rounded-lg bg-zinc-700/50 p-6 text-zinc-200 shadow-md"
            >
              <div className="text-center">
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-zinc-300">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
