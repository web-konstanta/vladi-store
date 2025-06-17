import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="flex h-[312px] w-[312px] items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          height={312}
          width={312}
          className="max-h-full max-w-full rounded-lg"
        />
      </div>
      <div className="py-4">
        <h3 className="mb-1 text-[24px]">{product.title}</h3>
        <p className="text-[14px] mt-[8px] leading-[25px] text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
