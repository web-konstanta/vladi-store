import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const Videos = () => {
  return (
    <div
      className="mt-[60px] bg-[#E8E2DB] py-4 md:mt-[80px] md:py-6 lg:mt-[120px] lg:py-8"
      id="products"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-4 md:mb-6">
          <h2
            className={`${playfair.className} mb-2 mt-[24px] text-center font-serif text-[36px] tracking-tight md:text-[56px] lg:text-[86px]`}
          >
            OUR VIDEOS
          </h2>
          <p className="mb-6 text-center text-[18px] text-gray-700 md:mb-8 md:text-lg">
            Take a deeper look into our production
          </p>
        </div>
        <div className="mt-[32px] mb-[44px] flex flex-col items-center justify-between gap-2 md:mt-[48px] lg:flex-row lg:gap-1">
          <div className="w-full lg:mr-[24px]">
            <div className="max-h-[300px] w-full md:max-h-[400px] lg:max-h-[510px]">
              <Image
                src="/images/video-1.png"
                alt="video 1"
                height={510}
                width={760}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-[16px] text-[24px] text-[#27241F] md:mt-[24px] md:text-[24px]">
              Production Process and Product Creation
            </h3>
            <p className="mt-[8px] max-w-full text-[14px] md:text-base lg:max-w-[536px]">
              Each item goes through a meticulous, hands-on production cycle: cutting, stitching,
              detailing, and quality control. We blend modern technologies with skilled
              craftsmanship to ensure that every blanket, throw, or accessory meets our standards of
              comfort, durability, and beauty.
            </p>
          </div>
          <div className="w-full">
            <div className="max-h-[300px] w-full md:max-h-[400px] lg:max-h-[510px]">
              <Image
                src="/images/video-2.png"
                alt="video 2"
                height={510}
                width={760}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-[16px] text-[24px] text-[#27241F] md:mt-[24px] md:text-[24px]">
              Material and Color Selection
            </h3>
            <p className="mt-[8px] max-w-full text-[14px] md:text-base lg:max-w-[536px]">
              Each item goes through a meticulous, hands-on production cycle: cutting, stitching,
              detailing, and quality control. We blend modern technologies with skilled
              craftsmanship to ensure that every blanket, throw, or accessory meets our standards of
              comfort, durability, and beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
