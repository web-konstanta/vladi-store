"use client";

import React from "react";
import ServiceItem from "./service-item";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";

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
    title: "Індивідуальний дизайн виробів",
    description:
      "Ми виготовляємо вироби відповідно до ваших побажань та технічних вимог. Однотонні, в клітинку, з жакардовими візерунками."
  },
  {
    id: 2,
    title: "Брендована упаковка для вашої продукції",
    description:
      "Розробляємо та виготовляємо персоналізовану упаковку відповідно до вашого дизайну. Підкресліть унікальність вашого бренду!"
  },
  {
    id: 3,
    title: "Виробництво пряжі",
    description:
      "Пропонуємо професійне виготовлення пряжі високої якості для різноманітних потреб текстильного виробництва."
  },
  {
    id: 4,
    title: "Виробництво нетканого полотна",
    description:
      "Здійснюємо виробництво нетканих матеріалів, зокрема синтепону, для використання в різних галузях промисловості."
  }
];

const ServiceList = () => {
  return (
    <div
      className="mt-[120px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat py-[64px]"
      id="services"
    >
      <div className="container m-auto">
        <div className="flex flex-col justify-between gap-10 px-4 lg:flex-row">
          <div className="flex max-w-[424px] flex-col justify-between">
            <div>
              <h2
                className={`${playfair.className} text-center text-[40px] leading-[54px] md:text-[68px] md:leading-[74px] lg:text-left`}
              >
                VLADI ПОСЛУГИ
              </h2>
              <div
                className={`${noto.className} mt-[24px] text-center text-[18px] leading-[27px] text-gray-700 opacity-55 lg:text-left`}
              >
                Ми надаємо найякісніші послуги на ринку
              </div>
            </div>
            <div className="mt-auto flex hidden justify-center opacity-40 md:block lg:justify-start">
              <Image
                src="/images/home-logo.png"
                alt="VLADI Logo"
                width={200}
                height={100}
                className="h-auto w-auto"
              />
            </div>
          </div>
          <div className="m-auto flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
