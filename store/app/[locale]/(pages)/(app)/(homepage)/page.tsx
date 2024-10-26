import React from "react";
import FeaturedCategories from "./components/FeaturedCategories";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import PromotionalBanner from "./components/PromotionalBanner";

const Homepage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        <ProductShowcase />
        <PromotionalBanner />
      </main>
    </div>
  );
};

export default Homepage;
