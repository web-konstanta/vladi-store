import React from "react";
import { Product } from "@/lib/types";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="relative h-[320px] w-full">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-2xl font-semibold text-[#27241F]">{product.title}</h3>
          <p className="mb-4 text-base leading-relaxed text-gray-700">{product.description}</p>
        </div>
        <Link href={`/catalog/${product.id}`}>
          <button className="w-full rounded-md border border-black px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-100">
            VIEW MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
