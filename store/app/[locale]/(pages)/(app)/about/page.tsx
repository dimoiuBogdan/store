import React from "react";
import BrandStory from "./components/BrandStory";
import CallToAction from "./components/CallToAction";
import HeroSection from "./components/HeroSection";
import MissionValues from "./components/MissionValues";
import TestimonialsSection from "./components/TestimonialsSection";

const AboutPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <main className="flex-grow">
        <BrandStory />
        <MissionValues />
        <TestimonialsSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default AboutPage;
