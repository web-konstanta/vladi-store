import { partners } from "@/lib/constants";
import React from "react";
import { Playfair_Display, Noto_Sans } from "next/font/google";

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
  return (
    <div className="mt-[60px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat py-[20px] pb-15 md:bg-inherit">
      <div className="container m-auto">
        <div className="">
          <h1 className={`${playfair.className} pt-[30px] text-center text-[48px] lg:text-[68px]`}>
            НАШІ ПАРТНЕРИ
          </h1>
          <div className={`${noto.className} text-center text-[18px] text-gray-700 opacity-55`}>
            Компанії вже оцінили якість VLADI
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center p-0 md:justify-between">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex w-[200px] flex-shrink-0 justify-center md:w-[calc(20%-16px)]"
            >
              <img src={partner.src} alt={partner.alt} className="mx-auto my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
