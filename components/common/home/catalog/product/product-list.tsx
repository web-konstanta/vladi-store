import { Product } from "@/lib/types";
import React from "react";
import ProductItem from "./product-item";
import Link from "next/link";

const ProductList = ({ products }: { products: Product[] }) => {
  const justifyClass = products.length === 1 ? "justify-center md:justify-between" : "justify-between";

  return (
    <div className={`${justifyClass} flex gap-4 pr-4 pl-4`}>
      {products.map((product, index) => (
        <Link href={`/catalog/${product.title.toLocaleLowerCase()}`} key={index} className="w-[320px] flex-shrink-0">
          <ProductItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
