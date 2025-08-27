"use client";

import { Noto_Sans } from "next/font/google";
import React, { useState } from "react";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const ServiceItem = ({
  service
}: {
  service: { id: number; title: string; description: string };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundImage = (id: number) => {
    return `/images/services/service-${id}.jpg`;
  };

  return (
    <div
      className={`${noto.className} relative max-h-[290px] max-w-[350px] cursor-pointer overflow-hidden rounded-lg border border-black bg-white p-[24px] transition duration-600`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-600 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${getBackgroundImage(service.id)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="relative z-10">
        <div
          className={`flex h-[55px] w-[55px] items-center justify-center rounded-full border-black text-center text-[30px] transition duration-600 ${
            isHovered
              ? "border-2 border-white bg-inherit text-white"
              : "border-1 border-black bg-[#E8E2DB] text-[#27241F]"
          }`}
        >
          {service.id}
        </div>
        <h3
          className={`mt-5 text-[24px] leading-[32px] font-medium transition-colors duration-600 ${
            isHovered ? "text-white" : "text-black"
          }`}
        >
          {service.title}
        </h3>
        <div
          className={`mt-3 text-[14px] leading-[24px] transition-colors duration-600 ${
            isHovered ? "text-white" : "text-gray-700"
          }`}
        >
          {service.description}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
