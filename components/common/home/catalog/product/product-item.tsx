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

  // Debug: check if English fields exist
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
    <div className="flex min-h-[623px] w-[312px] flex-col justify-between rounded-lg border border-[#797979] bg-white">
      <div>
        <div className="flex h-[356px] items-center justify-center">
          <Image
            src={getProductImageUrl(product, 312, 356)}
            alt={translatedTitle}
            height={356}
            width={312}
            className="max-h-full max-w-full rounded-t-lg"
          />
        </div>
        <div className="group relative p-5">
          <h3 className="mt-1 mb-1 text-[24px]">{product.title}</h3>
          <p
            className="max-h-[75px] overflow-hidden text-sm leading-[25px] text-gray-700"
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

      <div className="p-5 pt-0">
        <button className="w-full cursor-pointer rounded-md border border-black px-6 py-3 text-base font-medium text-black transition-colors duration-[600ms] hover:bg-[#DBD0BF]">
          {t("common.learn_more")}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
