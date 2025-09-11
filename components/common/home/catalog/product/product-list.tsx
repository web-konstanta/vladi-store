import { Product } from "@/lib/types";
import React from "react";
import ProductItem from "./product-item";
import Link from "next/link";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product._id} href={`/catalog/${product._id}`}>
          <ProductItem product={product} />
        </Link>
      ))}
    </>
  );
};

export default ProductList;
