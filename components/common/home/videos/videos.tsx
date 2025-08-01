import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const Videos = () => {
  return (
    <div
      className="mt-[60px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat py-4 md:mt-[80px] md:py-6 lg:mt-[120px] lg:py-8"
      id="products"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-4 md:mb-6">
          <h2
            className={`${playfair.className} mt-[24px] mb-2 font-serif text-[36px] tracking-tight md:text-[56px] lg:text-[86px]`}
          >
            ВІДЕОРОЛИКИ VLADI
          </h2>
          <p className="mb-6 text-[18px] text-[#797979] opacity-70 md:mb-8 md:text-lg">
            Погляньте на наше виробництво глибше
          </p>
        </div>
        <div className="mt-[32px] mb-[44px] flex flex-col items-center justify-between gap-2 md:mt-[48px] lg:flex-row lg:gap-1">
          <div className="w-full rounded-xl border border-black bg-white lg:mr-[24px]">
            <div className="max-h-[300px] w-full md:max-h-[400px] lg:max-h-[510px]">
              <Image
                src="/images/video-1.png"
                alt="video 1"
                height={510}
                width={760}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-10 pb-8">
              <h3 className="mt-[16px] text-[24px] text-[#27241F] md:mt-[24px] md:text-[24px]">
                Виробничий процес та створення продукту
              </h3>
              <p className="mt-[8px] max-w-full text-[14px] md:text-base lg:max-w-[536px]">
                Кожен виріб проходить ретельний, практичний виробничий цикл: розкрій, зшивання,
                деталізація та контроль якості. Ми поєднуємо сучасні технології з кваліфікованою
                майстерністю, щоб гарантувати, що кожна ковдра, плед чи аксесуар відповідає нашим
                стандартам комфорту, довговічності та краси.
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl border border-black bg-white">
            <div className="max-h-[300px] w-full md:max-h-[400px] lg:max-h-[510px]">
              <Image
                src="/images/video-2.png"
                alt="video 2"
                height={510}
                width={760}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-10 pb-8">
              <h3 className="mt-[16px] text-[24px] text-[#27241F] md:mt-[24px] md:text-[24px]">
                Вибір матеріалів та кольорів
              </h3>
              <p className="mt-[8px] max-w-full text-[14px] md:text-base lg:max-w-[536px]">
                Вибір матеріалів - це місце, де творчість зустрічається з досвідом. Ми ретельно
                обираємо тканини та кольорові палітри, які не лише чудово виглядають, але й
                підносять інтер&apos;єр. Це поєднання дизайнерської інтуїції, обізнаності в
                тенденціях та глибокого розуміння позачасового стилю.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
