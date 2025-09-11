import { Product, getTranslatedText } from "@/lib/types";
import { getProductImageUrl } from "@/lib/image-utils";
import { useTranslation } from "@/context/translation-context";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  const { locale, t } = useTranslation();

  const translatedTitle = getTranslatedText(product.title, product.titleEn, locale);
  const translatedDescription = getTranslatedText(
    product.description,
    product.descriptionEn,
    locale
  );

  console.log("Product debug:", {
    locale,
    title: product.title,
    titleEn: product.titleEn,
    description: product.description,
    descriptionEn: product.descriptionEn,
    translatedTitle,
    translatedDescription
  });

  return (
    <div className="flex min-h-[390px] w-full flex-col justify-between rounded-lg border border-[#797979] bg-white sm:min-h-[550px] lg:min-h-[610px]">
      <div>
        <div className="flex h-[200px] items-center justify-center sm:h-[280px] lg:h-[400px]">
          <Image
            src={getProductImageUrl(product, 312, 356)}
            alt={translatedTitle}
            height={356}
            width={312}
            className="h-full w-full rounded-t-lg object-cover"
          />
        </div>
        <div className="group relative p-3 sm:p-6 lg:px-7 lg:py-4">
          <h3 className="mb-2 text-[16px] font-medium sm:mb-[8px] sm:text-[20px] lg:text-[24px]">
            {product.title}
          </h3>
          <p
            className="text-xs leading-[18px] text-gray-700 sm:text-sm sm:leading-[22px] lg:leading-[25px]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            title={translatedDescription}
          >
            {translatedDescription}
          </p>
        </div>
      </div>

      <div className="p-3 pt-0 sm:p-6 sm:pt-0 lg:px-7 lg:py-4 lg:pt-0">
        <button className="w-full cursor-pointer rounded-md border border-black px-6 py-3 text-base font-medium text-black transition-colors duration-[600ms] hover:bg-[#DBD0BF]">
          {t("common.learn_more")}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
