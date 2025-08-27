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
    <div
      className={`${noto.className} min-h-[500px] w-full max-w-[320px] rounded-xl border border-black sm:min-h-[550px] sm:max-w-[360px] md:min-h-[660px] md:max-w-[400px]`}
    >
      <div className="flex h-[250px] w-full items-center justify-center rounded-t-xl bg-[url('/images/certificates/background.png')] bg-cover bg-center bg-no-repeat sm:h-[280px] md:h-[322px]">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="max-h-[200px] max-w-[280px] object-contain sm:max-h-[240px] sm:max-w-[320px] md:max-h-[280px] md:max-w-[380px]"
        />
      </div>
      <div className="group relative mt-1 px-7 py-4">
        <h3 className="text-[24px]">{certificate.title}</h3>
        <p className="mt-2 w-full text-sm leading-[25px] text-gray-700">
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

export default CertificateItem;
