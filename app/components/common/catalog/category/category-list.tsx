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

const subCategories: SubCategory[] = [
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

const CategoryList = ({
  filterProducts,
  getAllProducts
}: {
  filterProducts: (categoryId: string) => void;
  getAllProducts: () => void;
}) => {
  return (
    <div className="mx-auto flex flex-wrap justify-center">
      <div className="mr-5 mb-8 flex justify-center">
        <button
          className="w-48 cursor-pointer rounded-lg border border-gray-400 bg-[#e8e2db] px-8 py-2 text-center font-medium transition duration-[600ms] hover:shadow"
          onClick={getAllProducts}
        >
          All products
        </button>
      </div>

      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          subCategories={subCategories}
          filterProducts={filterProducts}
        />
      ))}
    </div>
  );
};

export default CategoryList;
