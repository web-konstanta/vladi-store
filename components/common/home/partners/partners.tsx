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
    <div className="mt-[60px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat py-[64px] md:bg-inherit">
      <div className="container m-auto py-[34px]">
        <div className="">
          <h1
            className={`${playfair.className} pt-[30px] text-center text-[50px] md:text-[72px] lg:text-[86px]`}
          >
            НАШІ ПАРТНЕРИ
          </h1>
          <div className={`${noto.className} text-center text-[18px] opacity-70`}>
            Компанії вже оцінили якість VLADI
          </div>
        </div>
        <div className="flex flex-wrap justify-center p-0 md:justify-between md:p-[60px]">
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
