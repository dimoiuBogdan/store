import React from "react";
import FeaturedCategories from "./components/FeaturedCategories";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import PromotionalBanner from "./components/PromotionalBanner";

const Homepage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturedCategories />
      <ProductShowcase />
      <PromotionalBanner />
    </main>
  );
};

export default Homepage;
