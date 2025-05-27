import { partners } from "@/app/lib/constants";
import React from "react";

const Partners = () => {
  return (
    <div className="bg-[#E8E2DB] px-[60px] py-[64px]">
      <div className="container m-auto">
        <div>
          <h1 className="text-center text-[50px] md:text-[72px] lg:text-[86px]">
            PARTNERS
          </h1>
          <div className="text-center text-[18px]">
            Companies already appreciate the quality of VLADI
          </div>
        </div>
        <div className="mt-[52px] flex flex-wrap justify-between">
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
