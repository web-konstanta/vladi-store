"use client";

import React, { useState } from "react";
import ServiceItem from "./service-item";
import { Noto_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const services = [
  {
    id: 1,
    title: "Iндивідуальний дизайн вашої продукції",
    description:
      "Додайте унікальності за допомогою вишивки логотипу.Додайте унікальності за допомогою вишивки логотипу."
  },
  {
    id: 2,
    title: "Брендована упаковка для вашої продукції",
    description:
      "Ми пропонуємо стильні пакувальні рішення.Ми пропонуємо стильні пакувальні рішення.Ми пропонуємо стильні пакувальні рішення."
  },
  {
    id: 3,
    title: "Iндивідуальний дизайн вашої продукції",
    description:
      "Додайте унікальності за допомогою вишивки логотипу.Додайте унікальності за допомогою вишивки логотипу."
  },
  {
    id: 4,
    title: "Iндивідуальний дизайн вашої продукції",
    description:
      "Додайте унікальності за допомогою вишивки логотипу.Додайте унікальності за допомогою вишивки логотипу."
  }
];

const ServiceList = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div
      className="mt-[120px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat py-[64px]"
      id="services"
    >
      <div className="container m-auto">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex max-w-[424px] flex-col justify-between">
            <div>
              <h2
                className={`${playfair.className} text-center text-[48px] leading-[74px] md:text-[68px] lg:text-left`}
              >
                VLADI ПОСЛУГИ
              </h2>
              <div
                className={`${noto.className} mt-[24px] text-center text-[18px] leading-[27px] text-gray-700 opacity-55 lg:text-left`}
              >
                Ми пропонуємо унікальні можливості кастомізації продукту відповідно до ваших
                корпоративних вимог.
              </div>
            </div>
            <div className="mt-auto flex justify-center opacity-40 lg:justify-start">
              <img src="/images/home-logo.png" />
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
    </div>
  );
};

export default ServiceList;
