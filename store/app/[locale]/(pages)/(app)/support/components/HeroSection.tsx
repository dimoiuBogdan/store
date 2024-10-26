"use client";

import { Button } from "primereact/button";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mb-12 rounded-lg bg-zinc-800 py-16 text-center text-zinc-200">
      <h1 className="mb-4 text-4xl font-bold">We&apos;re Here to Help</h1>
      <p className="mb-8 text-xl">
        Have questions? We&apos;d love to hear from you.
      </p>
      <Button
        label="Contact Us"
        className="rounded-lg bg-zinc-700 px-6 py-3 font-medium text-primary transition-all hover:bg-zinc-800"
        onClick={() => {
          const contactForm = document.getElementById("contact-form");
          contactForm?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </section>
  );
};

export default HeroSection;
