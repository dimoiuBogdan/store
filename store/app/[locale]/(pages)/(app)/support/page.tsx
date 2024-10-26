import React from "react";
import AdditionalResources from "./components/AdditionalResources";
import ContactForm from "./components/ContactForm";
import ContactOptions from "./components/ContactOptions";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import StoreLocation from "./components/StoreLocation";

const SupportPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <HeroSection />
      <ContactOptions />
      <FAQSection />
      <ContactForm />
      <AdditionalResources />
      <StoreLocation />
    </div>
  );
};

export default SupportPage;
