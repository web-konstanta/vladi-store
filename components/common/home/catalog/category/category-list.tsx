import React, { useEffect, useRef, useState } from "react";
import CategoryItem from "./category-item";
import { Category, SubCategory } from "@/lib/types";

const categories: Category[] = [
  {
    id: "1",
    title: "Throws"
  },
  {
    id: "2",
    title: "Blankets"
  },
  {
    id: "3",
    title: "Bedspreads"
  },
  {
    id: "4",
    title: "Quilted Blankets"
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
    title: "Merino",
    categoryId: "1"
  },
  {
    id: "3",
    title: "Wool Throws",
    categoryId: "1"
  },
  {
    id: "4",
    title: "Wool Blend",
    categoryId: "1"
  },
  {
    id: "5",
    title: "Cotton",
    categoryId: "1"
  },
  {
    id: "6",
    title: "Cashmere",
    categoryId: "2"
  },
  {
    id: "7",
    title: "Merino",
    categoryId: "2"
  },
  {
    id: "8",
    title: "Wool Throws",
    categoryId: "2"
  },
  {
    id: "9",
    title: "Wool Blend",
    categoryId: "2"
  },
  {
    id: "10",
    title: "Cotton",
    categoryId: "3"
  },
  {
    id: "11",
    title: "Wool Throws",
    categoryId: "4"
  },
  {
    id: "12",
    title: "Siliconized",
    categoryId: "4"
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
    return () => {
      getAllProducts()
      document.removeEventListener("mousedown", handleClick);
    }
  }, [open]);

  return (
    <div className="m-auto flex w-[192px] flex-wrap justify-center lg:w-full">
      <div className="mr-5 mb-8 flex justify-center" ref={dropdownRef}>
        <button
          className={`w-48 rounded-lg border px-8 py-2 text-center font-medium transition duration-[600ms] ${
            open
              ? "border-black bg-[#d6c7b5] text-black shadow"
              : "border-gray-400 bg-white text-black"
          }`}
          onClick={() => {
            setOpen((p) => !p);
            getAllProducts();
          }}
        >
          All categories
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
