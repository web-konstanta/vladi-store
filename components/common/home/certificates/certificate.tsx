"use client";

import { CertificateType } from "@/lib/types";
import React from "react";
import CertificateList from "./certificate-list";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { useTranslation } from "@/context/translation-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const getCertificates = (t: (key: string) => string): CertificateType[] => [
  {
    title: t("certificates.iso_14001"),
    description: t("certificates.iso_14001_description"),
    image: "/images/certificates/certificate-1.png"
  },
  {
    title: t("certificates.oeko_tex"),
    description: t("certificates.oeko_tex_description"),
    image: "/images/certificates/certificate-2.png"
  },
  {
    title: t("certificates.sedex"),
    description: t("certificates.sedex_description"),
    image: "/images/certificates/certificate-3.png"
  }
];

const Certificate = () => {
  const { t } = useTranslation();
  const certificates = getCertificates(t);

  return (
    <div className="mt-[120px] bg-white py-8" id="products">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2
            className={`${playfair.className} mb-2 text-center font-serif text-[40px] tracking-tight sm:text-[40px] md:text-[48px] lg:text-[68px]`}
          >
            {t("certificates.title")}
          </h2>
          <p
            className={`${noto.className} mt-[18px] mb-[48px] text-center text-base text-gray-700 opacity-55 sm:text-base lg:text-lg`}
          >
            {t("certificates.subtitle")}
          </p>
        </div>
        {certificates.length > 0 ? (
          <>
            <div className="mt-[20px]">
              <CertificateList certificates={certificates} />
            </div>
          </>
        ) : (
          <div className="mt-5 text-center text-lg text-gray-600">
            {t("certificates.no_certificates")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
