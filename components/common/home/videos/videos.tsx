"use client";

import VideoPlayIcon from "@/components/icons/video-play";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "@/context/translation-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const Videos = () => {
  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="mt-[120px] bg-[#E8E2DB] bg-[url('/images/waves.png')] bg-cover bg-center bg-no-repeat px-5 py-4 md:mt-[80px] md:py-6 lg:mt-[120px] lg:py-8"
      id="products"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-4 md:mb-6">
          <h2
            className={`${playfair.className} mt-[24px] mb-2 font-serif text-[40px] leading-[54px] md:text-[68px] md:leading-[74px]`}
          >
            {t("videos.title")}
          </h2>
          <p className="mb-6 text-base text-gray-700 opacity-55 md:mb-8 md:text-lg">
            {t("videos.subtitle")}
          </p>
        </div>
        <div className="mt-[32px] mb-[44px] flex flex-col items-center justify-between gap-6 md:mt-[48px] lg:flex-row lg:gap-8">
          <div className="w-full max-w-[773px] rounded-xl border border-black bg-white">
            <div className="flex justify-center">
              {!video1Playing ? (
                <div
                  className="relative w-full cursor-pointer"
                  onClick={() => setVideo1Playing(true)}
                >
                  <Image
                    src="/images/video-1.png"
                    alt={t("videos.production_magic")}
                    width={648}
                    height={349}
                    className="h-auto w-full rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VideoPlayIcon />
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/Sz4fHmujW0k?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=1&mute=0"
                    title={t("videos.production_magic")}
                    className="h-full w-full rounded-t-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <div className="px-4 sm:px-6 md:px-10 md:pb-8">
              <h3 className="mt-[16px] text-[24px] text-[#27241F] md:mt-[24px] md:text-[24px]">
                {t("videos.production_magic")}
              </h3>
              <p className="mt-[8px] max-w-full pb-4 text-[14px] leading-relaxed md:text-base">
                {t("videos.production_magic_description")}
              </p>
            </div>
          </div>
          <div className="w-full max-w-[773px] rounded-xl border border-black bg-white">
            <div className="flex justify-center">
              {!video2Playing ? (
                <div
                  className="relative w-full cursor-pointer"
                  onClick={() => setVideo2Playing(true)}
                >
                  <Image
                    src="/images/video-2.png"
                    alt={t("videos.blankets_production")}
                    width={648}
                    height={349}
                    className="h-auto w-full rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VideoPlayIcon />
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/q_5yonwhPww?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=1&mute=0"
                    title={t("videos.blankets_production")}
                    className="h-full w-full rounded-t-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <div className="px-4 sm:px-6 md:px-10 md:pb-8">
              <h3 className="mt-[16px] text-[24px] text-[#27241F] md:mt-[24px] md:text-[24px]">
                {t("videos.blankets_production")}
              </h3>
              <p className="mt-[8px] max-w-full pb-4 text-[14px] leading-relaxed md:text-base">
                {t("videos.blankets_production_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
