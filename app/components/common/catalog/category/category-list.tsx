import React, { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="m-auto flex w-[192px] flex-wrap justify-center lg:w-full">
      <div className="mr-5 mb-8 flex justify-center" ref={dropdownRef}>
        <button
          className={`w-48 rounded-lg border px-8 py-2 text-center font-medium transition duration-[600ms] ${
            open
              ? "border-black bg-[#d6c7b5] text-black shadow"
              : "border-gray-400 bg-[#e8e2db] text-black"
          }`}
          onClick={() => {
            setOpen((p) => !p);
            getAllProducts();
          }}
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
