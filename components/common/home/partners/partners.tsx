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
    <div className="mt-[60px] bg-[#E8E2DB] px-[60px] py-[64px] md:bg-inherit">
      <div className="container m-auto bg-[#E8E2DB]">
        <div>
          <h1
            className={`${playfair.className} text-center text-[50px] md:text-[72px] lg:text-[86px]`}
          >
            PARTNERS
          </h1>
          <div className="text-center text-[18px]">
            Companies already appreciate the quality of VLADI
          </div>
        </div>
        <div className="mg:px-[108px] mt-[52px] flex flex-wrap justify-between">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img src={partner.src} alt={partner.alt} className="mx-auto my-4 h-[100px] w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
