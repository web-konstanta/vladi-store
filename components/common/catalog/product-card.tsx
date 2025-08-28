"use client";

import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link href={`/catalog/${product.title.toLowerCase()}`}>
      <div className="flex min-h-[380px] w-full flex-col justify-between rounded-lg border border-[#797979] bg-white sm:min-h-[430px] lg:min-h-[490px]">
        <div>
          <div className="relative h-[250px] w-full sm:h-[300px] lg:h-[356px]">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="group relative p-3 sm:p-4 lg:p-5">
            <h3 className="mt-1 mb-1 text-lg sm:text-xl lg:text-[24px]">{product.title}</h3>
            <p
              className={`cursor-pointer overflow-hidden text-sm leading-[25px] text-gray-700 transition-all duration-300 ${
                isExpanded
                  ? "max-h-[500px]"
                  : "max-h-[50px] group-hover:max-h-[500px] md:group-hover:max-h-[500px]"
              }`}
              title={product.description}
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
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
