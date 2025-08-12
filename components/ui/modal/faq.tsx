"use client";

import React, { useEffect, useRef } from "react";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

interface FaqProps {
  isOpen: boolean;
  onClose: () => void;
}

const Faq: React.FC<FaqProps> = ({ isOpen, onClose }) => {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (faqRef.current && !faqRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${noto.className} fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm`}
      onClick={handleOverlayClick}
    >
      <div
        ref={faqRef}
        className="relative m-auto flex h-[533px] w-[1320px] overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <div className="flex w-full max-w-[252px] flex-col justify-between border-r bg-white p-[35px]">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Контакти</h2>
            <p className="mb-2 text-sm">+ 380 (067) 888 88 88</p>
            <p className="mb-6 text-sm">+ 380 (067) 888 88 88</p>
          </div>

          <div>
            <h3 className="mb-2 text-2xl font-semibold">Адреса складу</h3>
            <p className="mb-2 text-sm">88888, Україна</p>
            <p className="text-sm">м. Харків, вул. Харківська</p>
          </div>
        </div>

        <div className="relative flex-1 bg-white p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer text-2xl text-black"
          >
            &times;
          </button>

          <h2 className="mb-6 text-xl font-bold">Відправити запит</h2>
          <form className="space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Ваше ім'я"
                className="flex-1 rounded border px-4 py-3"
              />
              <input
                type="email"
                placeholder="E-Mail адреса"
                className="flex-1 rounded border px-4 py-3"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Напишіть ваше запитання або пропозицію…"
              className="w-full rounded border px-4 py-3"
            />
            <button
              type="submit"
              className="w-[400px] rounded border px-4 py-3 mt-1 text-center hover:bg-gray-100"
            >
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
