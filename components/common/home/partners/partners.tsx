import { partners } from "@/lib/constants";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const Partners = () => {
  return (
    <div className="mt-[60px] bg-[#E8E2DB] py-[64px] md:bg-inherit">
      <div className="container m-auto bg-[#E8E2DB] py-[34px]">
        <div className="">
          <h1
            className={`${playfair.className} pt-[30px] text-center text-[50px] md:text-[72px] lg:text-[86px]`}
          >
            PARTNERS
          </h1>
          <div className="text-center text-[18px]">
            Companies already appreciate the quality of VLADI
          </div>
        </div>
        <div className="m-auto flex max-w-[1300px] flex-wrap justify-center gap-[20px] md:justify-between md:overflow-visible md:p-[60px]">
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
