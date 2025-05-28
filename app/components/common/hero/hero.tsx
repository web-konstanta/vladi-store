"use client";

import React, { useState } from "react";
import Image from "next/image";
import Faq from "../../ui/modal/faq";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative flex min-h-[660px] items-center justify-center">
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
        <h1 className="text-5xl font-bold tracking-widest text-white sm:text-[180px]">VLADI</h1>
        <p className="mx-auto max-w-[90vw] text-center text-lg text-white sm:max-w-[460px]">
          Natural blankets and plaids from Ukraine. Discover our collection, created with love and
          care.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-5 cursor-pointer rounded-lg border border-white px-6 py-2 text-white sm:px-10"
        >
          CONTACT US
        </button>
      </div>

      <Faq isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Hero;
