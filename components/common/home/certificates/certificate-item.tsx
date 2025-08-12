import { CertificateType } from "@/lib/types";
import { Noto_Sans } from "next/font/google";
import React from "react";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const CertificateItem = ({ certificate }: { certificate: CertificateType }) => {
  return (
    <div className={`${noto.className} border border-black rounded-xl`}>
      <div className="flex h-[322px] w-full items-center justify-center rounded-t-xl bg-[#DBD0BF] text-5xl text-white">
        СЕРТИФІКАТИ
      </div>
      <div className="group relative p-5">
        <h3 className="text-[24px]">{certificate.title}</h3>
        <p
          className="max-h-[100px] w-[360px] cursor-pointer overflow-hidden text-sm leading-[25px] text-gray-700 transition-all duration-300 group-hover:max-h-[500px]"
          title={certificate.description}
        >
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

export default CertificateItem;
