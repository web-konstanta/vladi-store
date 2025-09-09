import { Product } from "@/lib/types";
import { getProductImageUrl } from "@/lib/image-utils";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="flex min-h-[623px] w-[312px] flex-col justify-between rounded-lg border border-[#797979] bg-white">
      <div>
        <div className="flex h-[356px] items-center justify-center">
          <Image
            src={getProductImageUrl(product, 312, 356)}
            alt={product.title}
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
            title={product.description}
          >
            {product.description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button className="w-full cursor-pointer rounded-md border border-black px-6 py-3 text-base font-medium text-black transition-colors duration-[600ms] hover:bg-[#DBD0BF]">
          Дізнатися більше
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
