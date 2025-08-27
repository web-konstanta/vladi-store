"use client";

import { CertificateType } from "@/lib/types";
import React from "react";
import CertificateList from "./certificate-list";
import { Noto_Sans, Playfair_Display } from "next/font/google";

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

const certificates: CertificateType[] = [
  {
    title: "Certification ISO 14001:2015",
    description:
      "Наша компанія успішно пройшла сертифікацію ISO 14001:2015, повністю відповідаючи стандартам системи екологічного менеджменту, включаючи зниження відходів тканини на 20%, оптимізацію споживання води та енергії на 15% і використання екологічних матеріалів для виробництва пледів. Це підтверджує нашу прихильність до сталого розвитку та мінімізації вуглецевого сліду.",
    image: "/images/certificates/certificate-1.png"
  },
  {
    title: "OEKO-TEX® Standard 100",
    description:
      "КомпаниУспішно отримала сертифікацію OEKO-TEX® Standard 100, повністю відповідаючи вимогам безпеки текстильних виробів, включаючи відсутність шкідливих речовин, таких як азобарвники і формальдегід, в матеріалах пледів (номер сертифіката 74773 OETI). Це гарантує здоров'я споживачів і зміцнює наші позиції на міжнародних ринках текстильної індустрії.",
    image: "/images/certificates/certificate-2.png"
  },
  {
    title: "Certification Sedex",
    description:
      "Наша компанія успішно пройшла сертифікацію Sedex, повністю відповідаючи стандартам SMETA, включаючи безпечні умови праці, заборону примусової праці та екологічне управління відходами при виробництві пледів. Це відкриває доступ до глобальних ринків і підтверджує нашу прихильність етичним принципам у ланцюжку поставок вовни, бавовни та флісу.",
    image: "/images/certificates/certificate-3.png"
  }
];

const Certificate = () => {
  return (
    <div className="mt-[120px] bg-white py-8" id="products">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2
            className={`${playfair.className} mb-2 text-center font-serif text-[40px] tracking-tight sm:text-[40px] md:text-[48px] lg:text-[68px]`}
          >
            СЕРТИФІКАТИ
          </h2>
          <p
            className={`${noto.className} mt-[18px] mb-[48px] text-center text-base text-gray-700 opacity-55 sm:text-base lg:text-lg`}
          >
            Офіційні підтвердження наших стандартів
          </p>
        </div>
        {certificates.length > 0 ? (
          <>
            <div className="mt-[20px]">
              <CertificateList certificates={certificates} />
            </div>
          </>
        ) : (
          <div className="mt-5 text-center text-lg text-gray-600">No certificates found.</div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
