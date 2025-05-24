import { Product } from "@/app/lib/types";
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
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
