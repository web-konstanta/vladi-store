"use client";

import React, { useState } from "react";
import Image from "next/image";
import Faq from "../../../ui/modal/faq";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative flex min-h-[660px] items-center justify-center overflow-hidden">
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
        <div className="mb-[32px] text-5xl tracking-widest text-white sm:text-[180px]">
          <img src="/images/hero-logo.png" alt="Hero Logo" />
        </div>
        <p className="mx-auto max-w-[90vw] text-center text-lg text-white sm:max-w-[460px]">
          Natural blankets and plaids from Ukraine. Discover our collection, created with love and
          care.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-[32px] h-[52px] w-[222px] cursor-pointer rounded-lg border border-white px-6 py-2 text-base leading-[24px] text-white sm:px-10"
        >
          START NOW
        </button>
      </div>

      {/* <div
        className="absolute bottom-0 left-[-6%] z-5 flex h-[80px] w-[2000px] justify-start"
        style={{ transform: `translateX(${transformX}px)` }}
      >
        <Image
          src="/images/hero-active.png"
          alt="Making your wildest dreams come true"
          fill
          unoptimized
          className="object-bottom"
        />
      </div> */}

      <Faq isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Hero;
