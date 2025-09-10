"use client";

import React, { useState } from "react";
import Image from "next/image";
import Faq from "../../../ui/modal/faq";
import { Noto_Sans } from "next/font/google";
import { useTranslation } from "@/context/translation-context";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto"
});

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`${noto.className} relative flex min-h-[660px] items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Анимация"
          fill
          unoptimized
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-h-[660px] px-2 text-center sm:px-4">
        <div>
          <img src="/images/vladi-logo.png" alt="VLADI Logo" />
        </div>
        <p className="mx-auto mt-10 max-w-[90vw] text-center text-lg leading-[27px] text-white sm:max-w-[460px]">
          {t("hero.description")}
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-[32px] h-[52px] w-[240px] cursor-pointer rounded-lg border border-white px-6 py-2 text-white transition-all duration-300 hover:bg-[#141311] sm:px-10"
        >
          {t("hero.start_button")}
        </button>
      </div>

      <Faq isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Hero;
