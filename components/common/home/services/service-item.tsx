"use client";

import { Noto_Sans } from "next/font/google";
import React from "react";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const ServiceItem = ({
  service,
  isActive,
  onMouseEnter
}: {
  service: { id: number; title: string; description: string };
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`${noto.className} m-2 max-h-[300px] max-w-[350px] cursor-pointer rounded-lg border border-black p-[24px] transition duration-600 ${
        isActive ? "bg-[#DBD0BF]" : "bg-white"
      }`}
    >
      <div
        className={`flex h-[55px] w-[55px] items-center justify-center rounded-full border-1 border-black text-center text-[30px] text-[#27241F] transition duration-600 ${
          isActive ? "bg-[#DBD0BF]" : "bg-[#E8E2DB]"
        }`}
      >
        {service.id}
      </div>
      <h3 className="mt-5 text-[24px] leading-[32px] font-medium">{service.title}</h3>
      <div className="mt-3 text-[14px] leading-[24px]">{service.description}</div>
    </div>
  );
};

export default ServiceItem;
