import React from "react";
import CategoryItem from "./category-item";
import { Category, SubCategory } from "@/app/lib/types";

const categories: Category[] = [
  {
    id: "1",
    title: "Plaids"
  },
  {
    id: "2",
    title: "Kovdry"
  },
  {
    id: "3",
    title: "Lythe blanket"
  }
];

let subCategories: SubCategory[] = [
  {
    id: "1",
    title: "Cashmere",
    categoryId: "1"
  },
  {
    id: "2",
    title: "Wool",
    categoryId: "1"
  },
  {
    id: "3",
    title: "Semi-Cotton",
    categoryId: "1"
  },
  {
    id: "4",
    title: "Cotton",
    categoryId: "1"
  },
  {
    id: "5",
    title: "Silk",
    categoryId: "2"
  },
  {
    id: "6",
    title: "Jute",
    categoryId: "2"
  },
  {
    id: "7",
    title: "Coir",
    categoryId: "3"
  },
  {
    id: "8",
    title: "Sisal",
    categoryId: "3"
  }
];

const CategoryList = () => {
  return (
    <div className="mx-auto flex max-w-[650px] flex-wrap justify-center">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} subCategories={subCategories} />
      ))}
    </div>
  );
};

export default CategoryList;
