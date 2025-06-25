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
          className="max-h-full max-w-full rounded-t-lg"
        />
      </div>
      <div className="group relative">
        <h3 className="mb-1 mt-3 text-[24px]">{product.title}</h3>
        <p
          className="max-h-[100px] cursor-pointer overflow-hidden text-sm leading-[25px] text-gray-700 transition-all duration-300 group-hover:max-h-[500px]"
          title={product.description}
        >
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
