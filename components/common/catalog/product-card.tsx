"use client";

import { Product } from "@/lib/types";
import { getProductImageUrl } from "@/lib/image-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/catalog/${product._id}`}>
      <div className="flex min-h-[380px] w-full flex-col justify-between rounded-lg border border-[#797979] bg-white sm:min-h-[430px] lg:min-h-[490px]">
        <div>
          <div className="relative h-[250px] w-full sm:h-[300px] lg:h-[356px]">
            <Image
              src={getProductImageUrl(product, 312, 356)}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="group relative p-3 sm:p-4 lg:p-5">
            <h3 className="mt-1 mb-1 text-lg sm:text-xl lg:text-[24px]">{product.title}</h3>
            <p
              className="overflow-hidden text-sm leading-[25px] text-gray-700"
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
      </div>
    </Link>
  );
};

export default ProductCard;
