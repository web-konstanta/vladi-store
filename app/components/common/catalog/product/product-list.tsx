import { Product } from "@/app/lib/types";
import React from "react";
import ProductItem from "./product-item";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex gap-4 pr-4 pl-4">
      {products.map((product, index) => (
        <div key={index} className="w-[320px] flex-shrink-0 bg-[#E8E2DB]">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
