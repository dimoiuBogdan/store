"use client";

import { AtSign, MessageCircle, Phone } from "lucide-react";
import { Card } from "primereact/card";
import React from "react";

const ContactOption: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}> = ({ icon, title, content }) => (
  <Card
    className="rounded-md bg-zinc-800 p-6 text-zinc-200 shadow-sm transition-colors duration-300 hover:bg-zinc-700"
    title={
      <div className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </div>
    }
  >
    {content}
  </Card>
);

const ContactOptions: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-semibold">Contact Options</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ContactOption
          icon={<Phone className="text-primary" />}
          title="Phone"
          content={
            <a href="tel:+1234567890" className="text-primary hover:underline">
              +1 (234) 567-890
            </a>
          }
        />
        <ContactOption
          icon={<AtSign className="text-primary" />}
          title="Email"
          content={
            <a
              href="mailto:support@accessorystore.com"
              className="text-primary hover:underline"
            >
              support@accessorystore.com
            </a>
          }
        />
        <ContactOption
          icon={<MessageCircle className="text-primary" />}
          title="Live Chat"
          content={
            <div className="cursor-pointer text-primary hover:underline">
              Start Chat
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ContactOptions;
