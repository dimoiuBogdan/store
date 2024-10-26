import { Accordion, AccordionTab } from "primereact/accordion";
import React from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Please contact our support team to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days, and shipping takes 3-5 business days for domestic orders.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. International shipping times and costs vary depending on the destination.",
  },
  // Add more FAQs as needed
];

const FAQSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-semibold">
        Frequently Asked Questions
      </h2>
      <Accordion className="space-y-6">
        {faqs.map((faq, index) => (
          <AccordionTab
            key={index}
            header={faq.question}
            className="text-zinc-800"
          >
            <p>{faq.answer}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
