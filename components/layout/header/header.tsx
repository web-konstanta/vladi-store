"use client";

import { useState } from "react";
import Faq from "../../ui/modal/faq";
import ScrollToTop from "../../ui/scroll-to-top/scroll-to-top";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";
import { useTranslation } from "@/context/translation-context";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale, t } = useTranslation();

  return (
    <header className={`${noto.className} fixed top-0 right-0 left-0 z-50 bg-white shadow-md`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="w-[257px]">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={88} height={46} />
          </Link>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>

        <nav className="hidden items-center gap-[40px] md:flex">
          <Link href="/#about" className="px-2 py-1 text-base">
            {t("header.about")}
          </Link>
          <Link href="/#services" className="px-2 py-1 text-base">
            {t("header.services")}
          </Link>
          <Link href="/#products" className="px-2 py-1 text-base">
            {t("header.catalog")}
          </Link>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <button
            className="flex cursor-pointer items-center gap-1"
            onClick={toggleLocale}
            aria-label="Switch language"
          >
            <Image
              src={`/images/${locale === "ua" ? "ua-flag.png" : "gb-flag.png"}`}
              alt={locale === "ua" ? "UA" : "EN"}
              width={28}
              height={18}
            />
            <span className="text-base">{locale === "ua" ? "UA" : "EN"}</span>
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="h-[46px] w-[180px] cursor-pointer rounded-[6px] border border-black text-base text-black transition duration-[600ms] hover:bg-[#27241F] hover:text-white"
          >
            {t("header.contact")}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <Link href="/#about" className="px-2 py-1 text-base font-semibold">
              {t("header.about")}
            </Link>
            <Link href="/#services" className="px-2 py-1 text-base font-semibold">
              {t("header.services")}
            </Link>
            <Link href="/#products" className="px-2 py-1 text-base font-semibold">
              {t("header.catalog")}
            </Link>
            <div className="mt-2 flex items-center justify-between">
              <button className="flex cursor-pointer items-center gap-1" onClick={toggleLocale}>
                <Image
                  src={`/images/${locale === "ua" ? "ua-flag.png" : "gb-flag.png"}`}
                  alt={locale === "ua" ? "UA" : "EN"}
                  width={28}
                  height={18}
                />
                <span className="text-base">{locale === "ua" ? "UA" : "EN"}</span>
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer rounded-xl bg-[#333231] px-6 py-2 text-white"
              >
                {t("header.contact")}
              </button>
            </div>
          </nav>
        </div>
      </div>

      <ScrollToTop />
      <Faq isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
};

export default Header;
