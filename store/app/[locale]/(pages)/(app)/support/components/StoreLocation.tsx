import { Card } from "primereact/card";
import React from "react";

const StoreLocation: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-semibold">Store Location</h2>
      <Card className="overflow-hidden rounded-lg bg-zinc-800 p-0 text-zinc-200">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1619614977254!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-semibold">Accessory Store</h3>
          <p className="text-zinc-400">
            350 5th Ave, New York, NY 10118, United States
          </p>
          <p className="mt-2 text-zinc-400">
            <strong>Hours:</strong> Mon-Fri: 9am-8pm, Sat-Sun: 10am-6pm
          </p>
        </div>
      </Card>
    </section>
  );
};

export default StoreLocation;
