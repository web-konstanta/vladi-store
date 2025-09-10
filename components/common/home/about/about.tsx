"use client";

import React from "react";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { CertificateType } from "@/lib/types";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const certificates: CertificateType[] = [
  {
    title: "Компанія VLADI",
    description:
      "Один з провідних європейських виробників пледів і ковдр вищої якості. Компанія об'єднує традиційну текстильну майстерність з сучасними технологіями, щоб створювати вироби, що дарують тепло, комфорт і затишок щодня.",
    image: "/images/about/about-1.png"
  },
  {
    title: "Якість, перевірена часом",
    description:
      "Наші вироби виготовляються з добірного кашеміру, мериноса, тонкої та надтонкої новозеландської вовни, бавовни. Наш асортимент включає покривала, стьобані та класичні ковдри, пледи з чистої вовни, напіввовни та бавовни.",
    image: "/images/about/about-2.png"
  },
  {
    title: "Широкий асортимент",
    description:
      "Продукція VLADI представлена в провідних торгових мережах по всій Україні, а також доступна через наших офіційних партнерів. В асортименті - покривала, стьобані та класичні ковдри, пледи з чистої вовни, напіввовни та бавовни.",
    image: "/images/about/about-3.png"
  },
  {
    title: "Індивідуальні рішення",
    description:
      "Компанія VLADI пропонує корпоративним клієнтам та рекламним агенціям ексклюзивну продукцію для подарунків, промо-акцій та брендованих кампаній.",
    image: "/images/about/about-4.png"
  },
  {
    title: "Де знайти нашу продукцію",
    description:
      "Продукція VLADI представлена в провідних торгових мережах по всій Україні, а також доступна через наших офіційних партнерів. В асортименті - покривала, стьобані та класичні ковдри, пледи з чистої вовни, напіввовни та бавовни.",
    image: "/images/about/about-5.png"
  }
];

const About = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });

  return (
    <div className="mx-auto w-full" id="about">
      <h1
        className={`${playfair.className} mt-[120px] mb-2 text-center text-[40px] sm:text-[40px] md:mt-[120px] md:text-[48px] lg:text-[68px]`}
      >
        ПРО КОМПАНІЮ
      </h1>
      <p
        className={`${noto.className} mt-2 mb-15 text-center text-base text-gray-700 opacity-55 sm:text-[18px]`}
      >
        Дізнайтеся більше про нашу компанію
      </p>

      <div className="overflow-x-hidden" ref={emblaRef}>
        <div className="flex gap-4 pr-4 pl-4 sm:gap-6 sm:pr-6 sm:pl-6">
          {certificates.map((certificate, index) => (
            <div
              key={`certificate-${index}-${certificate.title}`}
              className="w-[280px] flex-shrink-0 sm:w-[400px] lg:w-[424px]"
            >
              <div
                className={`${noto.className} h-[390px] overflow-hidden rounded-xl border border-black sm:h-[550px] lg:h-[610px]`}
              >
                <div className="flex h-[200px] w-full items-center justify-center bg-gray-50 sm:h-[280px] lg:h-[400px]">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="group relative p-3 sm:p-6 lg:px-7 lg:py-4">
                  <h3 className="mb-2 text-[16px] font-medium sm:mb-[8px] sm:text-[20px] lg:text-[24px]">
                    {certificate.title}
                  </h3>
                  <p className="text-xs leading-[18px] text-gray-700 sm:text-sm sm:leading-[22px] lg:leading-[25px]">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
