"use client";

import React, { useState } from "react";
import ServiceItem from "./service-item";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const services = [
  {
    id: 1,
    title: "Personalization and individual product design",
    description:
      "Add uniqueness with logo embroidery.Add uniqueness with logo embroidery.Add uniqueness with logo embroidery."
  },
  {
    id: 2,
    title: "Branded packaging for your products",
    description:
      "We offer stylish packaging solutions.We offer stylish packaging solutions.We offer stylish packaging solutions."
  },
  {
    id: 3,
    title: "Personalization and individual product design",
    description:
      "Add uniqueness with logo embroidery.Add uniqueness with logo embroidery.Add uniqueness with logo embroidery."
  },
  {
    id: 4,
    title: "Personalization and individual product design",
    description:
      "Add uniqueness with logo embroidery.Add uniqueness with logo embroidery.Add uniqueness with logo embroidery."
  }
];

const ServiceList = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="container m-auto" id="services">
      <div className="mt-[120px] flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="max-w-[424px]">
          <h2
            className={`${playfair.className} text-center text-[56px] leading-none md:text-[72px] lg:text-left`}
          >
            VLADI SERVICES
          </h2>
          <div className="mt-3 text-center lg:text-left">
            We offer unique product customization options to meet your corporate requirements
          </div>
        </div>
        <div
          className="m-auto flex max-w-[872px] flex-wrap justify-center"
          onMouseLeave={() => setActiveId(null)}
        >
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isActive={activeId === service.id}
              onMouseEnter={() => setActiveId(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
