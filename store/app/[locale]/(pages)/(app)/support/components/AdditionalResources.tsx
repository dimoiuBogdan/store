import { Box, Shield, Ship } from "lucide-react";
import Link from "next/link";
import { Card } from "primereact/card";
import React from "react";

const ResourceLink: React.FC<{
  icon: React.ReactNode;
  title: string;
  href: string;
}> = ({ icon, title, href }) => (
  <Card className="rounded-md bg-zinc-800 p-4 text-zinc-200 shadow-sm transition-colors duration-300 hover:bg-zinc-700">
    <Link
      href={href}
      className="flex items-center text-zinc-200 hover:text-primary"
    >
      {icon}
      <span className="ml-2">{title}</span>
    </Link>
  </Card>
);

const AdditionalResources: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-semibold">Additional Resources</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ResourceLink
          icon={<Ship className="text-primary" />}
          title="Shipping Information"
          href="/shipping"
        />
        <ResourceLink
          icon={<Box className="text-primary" />}
          title="Return Policy"
          href="/returns"
        />
        <ResourceLink
          icon={<Shield className="text-primary" />}
          title="Privacy Policy"
          href="/privacy"
        />
      </div>
    </section>
  );
};

export default AdditionalResources;
