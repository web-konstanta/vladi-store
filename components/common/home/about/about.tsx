import React from "react";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import CheckIcon from "@/components/icons/check";

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

const About = () => {
  return (
    <div className="container m-auto px-5" id="about">
      <h1
        className={`${playfair.className} mt-[60px] mb-[32px] text-center text-[48px] md:mt-[120px] md:mb-[48px] md:text-[86px]`}
      >
        ПРО КОМПАНІЮ
      </h1>
      <div className="mx-auto">
        <div className="flex items-center justify-center">
          <img src="/images/about.png" alt="About company image" />
        </div>
        <ul className={`${noto.className} mt-[32px] flex flex-wrap justify-center gap-5`}>
          <li className="max-w-[400px] text-2xl leading-10">
            <span className="font-extrabold">Компанiя VLADI</span> - один з провідних європейських
            виробників пледів і ковдр вищої якості. Компанія об'єднує традиційну текстильну
            майстерність із сучасними технологіями, щоб створювати вироби, що дарують тепло, комфорт
            і затишок щодня.
          </li>
          <li className="max-w-[400px]">
            <div className="flex">
              <CheckIcon />
              <div className="mb-[24px] ml-3">
                <h3 className="text-lg font-extrabold">Якість, перевірена часом</h3>
                <p className="mt-[4px] text-sm leading-6">
                  Наші вироби виготовляються з добірного кашеміру, мериноса, тонкої та надтонкої
                  новозеландської вовни, бавовни. Наш асортимент включає покривала, стьобані та
                  класичні ковдри, пледи з чистої вовни, напівпрозорої вовни та бавовни.
                </p>
              </div>
            </div>
            <div className="flex">
              <CheckIcon />
              <div className="ml-3">
                <h3 className="text-lg font-extrabold">Індивідуальні рішення для бізнесу</h3>
                <p className="mt-[4px] text-sm leading-6">
                  Комапанія VLADI пропонує корпоративним клієнтам та рекламним агенціям ексклюзивну
                  продукцію для подарунків, промо-акцій та брендованих кампаній.
                </p>
              </div>
            </div>
          </li>
          <li className="max-w-[400px]">
            <div className="flex">
              <CheckIcon />
              <div className="mb-[24px] ml-3">
                <h3 className="text-lg font-extrabold">Де купити</h3>
                <p className="mt-[4px] text-sm leading-6">
                  Продукція VLADI представлена в провідних торгових мережах по всій Україні, а також
                  доступна через наших офіційних партнерів.
                </p>
                <p className="text-sm leading-6">
                  В асортименті - покривала, стьобані та класичні ковдри, пледи з чистої вовни,
                  напіввовни та бавовни.
                </p>
              </div>
            </div>
            <div className="flex">
              <CheckIcon />
              <div className="ml-3">
                <h3 className="text-lg font-extrabold">Колекції на будь-який смак</h3>
                <p className="mt-[4px] text-sm leading-6">
                  Ми розробили три лінійки, щоб кожен наш клієнт міг обрати ідеальне рішення.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
