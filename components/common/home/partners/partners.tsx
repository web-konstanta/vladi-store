"use client";

import { partners } from "@/lib/constants";
import React from "react";
import { Playfair_Display, Noto_Sans } from "next/font/google";
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

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[120px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat py-[20px] pb-15 md:bg-inherit">
      <div className="container m-auto">
        <div className="">
          <h1 className={`${playfair.className} pt-[30px] text-center text-[40px] lg:text-[68px]`}>
            {t("partners.title")}
          </h1>
          <div className={`${noto.className} text-center text-base text-gray-700 opacity-55`}>
            {t("partners.subtitle")}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-y-12 p-0 md:justify-between">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex w-[200px] flex-shrink-0 justify-center md:w-[calc(20%-16px)]"
            >
              <img src={partner.src} alt={partner.alt} className="mx-auto h-[56px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
