"use client";

import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-semibold text-gray-800 md:text-4xl">VLADI</h1>
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
          <a href="#" className="px-2 py-1 text-base font-semibold">
            PRODUCTS
          </a>
          <a href="#" className="px-2 py-1 text-base font-semibold">
            SERVICES
          </a>
          <a href="#" className="px-2 py-1 text-base font-semibold">
            ABOUT US
          </a>
        </nav>
        <button className="ml-4 hidden cursor-pointer rounded-xl bg-[#333231] px-8 py-2 text-white md:block">
          CONTACT US
        </button>
      </div>
      {/* Мобильное меню с плавным появлением */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <a href="#" className="px-2 py-2 font-semibold">
              PRODUCTS
            </a>
            <a href="#" className="px-2 py-2 font-semibold">
              SERVICES
            </a>
            <a href="#" className="px-2 py-2 font-semibold">
              ABOUT US
            </a>
            <button className="mt-2 cursor-pointer rounded-xl bg-[#333231] px-8 py-2 text-white">
              CONTACT US
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
