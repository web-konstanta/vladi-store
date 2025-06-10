"use client";

import { Category } from "@/app/lib/types";
import React from "react";
import CategoryItem from "./category-item";

const categories: Category[] = [
  {
    id: "1",
    title: "VALENCIA",
    image: "/images/product/valencia.png"
  },
  {
    id: "2",
    title: "MARCEL",
    image: "/images/product/marcel.png"
  },
  {
    id: "3",
    title: "MARCEL",
    image: "/images/product/modena.png"
  },
  {
    id: "4",
    title: "MARCEL",
    image: "/images/product/ontario.png"
  },
  {
    id: "5",
    title: "VALENCIA",
    image: "/images/product/valencia.png"
  },
  {
    id: "6",
    title: "MARCEL",
    image: "/images/product/marcel.png"
  },
  {
    id: "7",
    title: "MARCEL",
    image: "/images/product/modena.png"
  },
  {
    id: "8",
    title: "MARCEL",
    image: "/images/product/ontario.png"
  }
];

const CategoryList = () => {
  return (
    <div className="container m-auto">
      <div className="mt-[120px] overflow-x-hidden">
        <div className="animate-carousel flex gap-4 pr-4 pl-4">
          {categories.map((category) => (
            <div key={category.id} className="w-[320px] flex-shrink-0">
              <CategoryItem category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
