import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="flex min-h-[572px] w-[320px] flex-col justify-between rounded-lg border border-gray-200 bg-white">
      <div>
        <div className="flex h-[312px] items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            height={312}
            width={320}
            className="max-h-full max-w-full rounded-t-lg"
          />
        </div>
        <div className="group relative p-5">
          <h3 className="mt-3 mb-1 text-[24px]">{product.title}</h3>
          <p
            className="max-h-[100px] cursor-pointer overflow-hidden text-sm leading-[25px] text-gray-700 transition-all duration-300 group-hover:max-h-[500px]"
            title={product.description}
          >
            {product.description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button className="w-full cursor-pointer rounded-md border border-black px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-100">
          ДІЗНАТИСЯ БІЛЬШЕ
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
