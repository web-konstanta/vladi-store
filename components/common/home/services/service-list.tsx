"use client";

import React from "react";
import ServiceItem from "./service-item";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useTranslation } from "@/context/translation-context";

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

const getServices = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("services.individual_design"),
    description: t("services.individual_design_description")
  },
  {
    id: 2,
    title: t("services.branded_packaging"),
    description: t("services.branded_packaging_description")
  },
  {
    id: 3,
    title: t("services.yarn_production"),
    description: t("services.yarn_production_description")
  },
  {
    id: 4,
    title: t("services.nonwoven_production"),
    description: t("services.nonwoven_production_description")
  }
];

const ServiceList = () => {
  const { t } = useTranslation();
  const services = getServices(t);

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
                {t("services.title")}
              </h2>
              <div
                className={`${noto.className} mt-[24px] text-center text-[18px] leading-[27px] text-gray-700 opacity-55 lg:text-left`}
              >
                {t("services.subtitle")}
              </div>
            </div>
            <div className="mt-auto hidden justify-center opacity-40 md:flex lg:justify-start">
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
