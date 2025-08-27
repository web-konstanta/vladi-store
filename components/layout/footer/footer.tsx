"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Faq from "@/components/ui/modal/faq";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const Footer = ({ showContact }: { showContact?: boolean }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`relative pb-[44px] ${showContact && "mt-[120px]"}`}>
      <div
        className={`flex ${showContact ? "min-h-[480px]" : "min-h-[100px]"} items-center justify-center`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/footer.png"
            alt="Анимация"
            fill
            unoptimized
            priority
            className="object-cover"
          />
        </div>

        {showContact && (
          <div className="relative z-10 mx-auto max-h-[660px] px-2 text-center sm:px-4">
            <p
              className={`mx-auto text-center text-base leading-[27px] text-white sm:max-w-[800px] md:text-[32px] md:leading-[52px]`}
            >
              Ми завжди готові розглянути можливість співпраці та запропонувати найкращі умови для
              нашої спільної роботи
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-[32px] h-[52px] w-[231px] cursor-pointer rounded-lg border border-white px-6 py-2 text-base leading-[24px] text-white sm:px-10"
            >
              Зв&apos;язатися
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10 container m-auto">
        <h1
          className={`${playfair.className} mb-[32px] text-center text-5xl tracking-widest text-white sm:text-[200px]`}
        >
          VLADI
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 py-6 text-center md:flex-row md:justify-between md:text-left">
          <h1 className="text-[14px] text-white">
            <span>Наш номер телефону</span> +3809797632
          </h1>

          <nav className="flex flex-col items-center gap-2 text-white md:flex-row md:gap-[40px]">
            <a href="#about" className="px-2 py-1 text-[14px]">
              Про компанію
            </a>
            <a href="#services" className="px-2 py-1 text-[14px]">
              Послуги
            </a>
            <a href="#products" className="px-2 py-1 text-[14px]">
              Каталог
            </a>
          </nav>
          <div className="text-[14px] text-white">© VLADI, Inc. All Rights Reserved</div>
        </div>
      </div>

      <Faq isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Footer;
