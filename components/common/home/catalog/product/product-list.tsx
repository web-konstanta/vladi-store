import { Product } from "@/lib/types";
import React from "react";
import ProductItem from "./product-item";
import Link from "next/link";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="scrollbar-hide flex gap-4 pr-4 pl-4 sm:justify-center">
      {products.map((product) => (
        <Link
          href={`/catalog/${product._id}`}
          key={product._id}
          className="w-[320px] flex-shrink-0"
        >
          <ProductItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
