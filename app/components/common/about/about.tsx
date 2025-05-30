import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const About = () => {
  return (
    <div className="container m-auto px-5" id="about">
      <h1
        className={`${playfair.className} mt-[60px] mb-[32px] text-center text-[48px] md:mt-[120px] md:mb-[48px] md:text-[86px]`}
      >
        ABOUT VLADI
      </h1>
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-8 lg:flex-row lg:items-start">
        <div className="w-full leading-relaxed lg:w-1/2">
          <div className="text-[20px] text-[#363431] md:text-[20px]">
            VLADI is one of the leading European manufacturers of plaids and blankets of the highest
            quality. The company combines traditional textile craftsmanship with modern technologies
            to create products that give warmth, comfort and coziness every day.
          </div>
          <div className="mt-[24px] flex items-start gap-3 md:mt-[32px]">
            <span className="mt-1 h-[40px] w-[40px] flex-shrink-0 rounded-full bg-[#DCCFBF]"></span>
            <div className="pt-2 pl-[10px]">
              <h3 className="text-[16px] font-bold md:text-[18px]">Time-tested quality</h3>
              <div className="mt-[4px] text-[14px] md:text-[18px]">
                Our products are made of selected cashmere, merino, fine and superfine New Zealand
                wool, cotton. Our range includes bedspreads, quilted and classic blankets, plaids
                made of pure wool, semi-sheer and cotton.
              </div>
            </div>
          </div>
          <div className="mt-[32px] flex items-start gap-3 md:mt-[48px]">
            <span className="mt-1 h-[40px] w-[40px] flex-shrink-0 rounded-full bg-[#B19F89]"></span>
            <div className="pt-2 pl-[10px]">
              <h3 className="text-[16px] font-bold md:text-[18px]">
                Customized solutions for business
              </h3>
              <div className="mt-[4px] text-[14px] md:text-[16px]">
                VLADI offers corporate clients and advertising agencies exclusive products for
                gifts, promotions and branded campaigns.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-shrink-0 lg:w-1/2">
          <Image
            src="/images/about.png"
            alt="Анимация"
            width={760}
            height={534}
            unoptimized
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
