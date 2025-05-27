import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative flex min-h-[480px] items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact.png"
          alt="Анимация"
          fill
          unoptimized
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-h-[660px] px-2 text-center sm:px-4">
        <p className="mx-auto max-w-[460px] text-center text-[24px] text-white sm:max-w-[635px] lg:text-[32px]">
          We are always ready to consider cooperation and offer the best conditions for our work
          together care.
        </p>
        <button className="mt-5 cursor-pointer rounded-lg border border-white px-6 py-2 text-white sm:px-10">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Contact;
