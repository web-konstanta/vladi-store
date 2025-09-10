"use client";

import { Category } from "@/lib/types";
import React from "react";
import CategoryItem from "./category-item";
import { useCatalog } from "@/context/catalog-context";

const categories: Category[] = [
  {
    _id: "1",
    _type: "category",
    title: "VALENCIA",
    titleEn: "VALENCIA",
    image: "/images/product/valencia.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "2",
    _type: "category",
    title: "MARCEL",
    titleEn: "MARCEL",
    image: "/images/product/marcel.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "3",
    _type: "category",
    title: "MODENA",
    titleEn: "MODENA",
    image: "/images/product/modena.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "4",
    _type: "category",
    title: "ONTARIO",
    titleEn: "ONTARIO",
    image: "/images/product/ontario.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "5",
    _type: "category",
    title: "VALENCIA",
    titleEn: "VALENCIA",
    image: "/images/product/valencia.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "6",
    _type: "category",
    title: "MARCEL",
    titleEn: "MARCEL",
    image: "/images/product/marcel.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "7",
    _type: "category",
    title: "MODENA",
    titleEn: "MODENA",
    image: "/images/product/modena.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  },
  {
    _id: "8",
    _type: "category",
    title: "ONTARIO",
    titleEn: "ONTARIO",
    image: "/images/product/ontario.png",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString()
  }
];

const CategoryList = () => {
  const { filterProducts } = useCatalog();

  return (
    <div className="container m-auto">
      <div className="mt-[120px] overflow-x-hidden">
        <div className="animate-carousel flex gap-4 pr-4 pl-4">
          {categories.map((category) => (
            <a
              href="#products"
              onClick={() => filterProducts(category._id)}
              key={category._id}
              className="w-[320px] flex-shrink-0"
            >
              <CategoryItem category={category} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
