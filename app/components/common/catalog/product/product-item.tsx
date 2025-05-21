import { Product } from "@/app/lib/types";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="flex-shrink-0">
      <Image
        src={product.image}
        alt={product.title}
        height={440}
        width={312}
        className="w-full rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
