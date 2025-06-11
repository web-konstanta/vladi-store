"use client";

import { useState } from "react";
import Faq from "../../ui/modal/faq";
import ScrollToTop from "../../ui/scroll-to-top/scroll-to-top";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className={`${playfair.className} text-2xl text-gray-800 md:text-4xl`}>
          <Image src="/images/logo.png" alt="logo" width={108} height={70} />
        </h1>
        <button
          className="flex h-10 w-10 flex-col items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`mb-1 block h-0.5 w-6 origin-center bg-gray-800 transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`mb-1 block h-0.5 w-6 origin-center bg-gray-800 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 origin-center bg-gray-800 transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="px-2 py-1 text-base">
            ABOUT US
          </a>
          <a href="#products" className="px-2 py-1 text-base">
            PRODUCTS
          </a>
          <a href="#services" className="px-2 py-1 text-base">
            SERVICES
          </a>
        </nav>
        <button
          onClick={() => setShowModal(true)}
          className="ml-4 hidden cursor-pointer rounded-[6px] border border-black px-8 py-2 text-base text-black md:block"
        >
          CONTACT US
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <a href="#about" className="px-2 py-1 text-base font-semibold">
              ABOUT US
            </a>
            <a href="#products" className="px-2 py-1 text-base font-semibold">
              PRODUCTS
            </a>
            <a href="#services" className="px-2 py-1 text-base font-semibold">
              SERVICES
            </a>
            <button className="mt-2 cursor-pointer rounded-xl bg-[#333231] px-8 py-2 text-white">
              CONTACT US
            </button>
          </nav>
        </div>
      </div>

      <ScrollToTop />
      <Faq isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
};

export default Header;
