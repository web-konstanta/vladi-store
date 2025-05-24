"use client";

import React from "react";

const ServiceItem = ({
  service,
  isActive,
  onClick
}: {
  service: { id: number; title: string; description: string };
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`m-2 max-h-[320px] max-w-[400px] cursor-pointer rounded-lg border border-black p-5 transition duration-300 ${
        isActive ? "bg-[#DBD0BF]" : "bg-white"
      }`}
    >
      <div
        className={`flex h-[55px] w-[55px] items-center justify-center rounded-full text-center text-[30px] transition duration-300 ${
          isActive ? "border-2 border-black bg-[#DBD0BF] text-black" : "bg-[#DBD0BF] text-white"
        }`}
      >
        {service.id}
      </div>
      <h3 className="mt-5 text-[24px] font-bold">{service.title}</h3>
      <div className="mt-3">{service.description}</div>
    </div>
  );
};

export default ServiceItem;
