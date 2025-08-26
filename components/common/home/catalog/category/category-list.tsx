import React, { useEffect, useRef, useState } from "react";
import CategoryItem from "./category-item";
import { Category, SubCategory } from "@/lib/types";

const categories: Category[] = [
  {
    id: "1",
    title: "Пледи"
  },
  {
    id: "2",
    title: "Ковдри"
  },
  {
    id: "3",
    title: "Покривала"
  },
  {
    id: "4",
    title: "Стьобані ковдри"
  },
  {
    id: "5",
    title: "Пряжа"
  }
];

const subCategories: SubCategory[] = [
  {
    id: "1",
    title: "Кашемір",
    categoryId: "1"
  },
  {
    id: "2",
    title: "Мерінос",
    categoryId: "1"
  },
  {
    id: "3",
    title: "Вовняні накидки",
    categoryId: "1"
  },
  {
    id: "4",
    title: "Суміш вовни",
    categoryId: "1"
  },
  {
    id: "5",
    title: "Бавовна",
    categoryId: "1"
  },
  {
    id: "6",
    title: "Кашемір",
    categoryId: "2"
  },
  {
    id: "7",
    title: "Мерінос",
    categoryId: "2"
  },
  {
    id: "8",
    title: "Вовняні накидки",
    categoryId: "2"
  },
  {
    id: "9",
    title: "Суміш вовни",
    categoryId: "2"
  },
  {
    id: "10",
    title: "Бавовна",
    categoryId: "3"
  },
  {
    id: "11",
    title: "Вовняні накидки",
    categoryId: "4"
  },
  {
    id: "12",
    title: "Силіконізоване волокно",
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
      getAllProducts();
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <div className="m-auto flex flex-wrap justify-center lg:w-full 2xl:justify-between">
      <div className="mr-5 mb-4 flex w-[200px] justify-center" ref={dropdownRef}>
        <button
          className={`h-[50px] w-48 rounded-lg border px-8 py-2 text-center font-medium transition duration-[600ms] hover:bg-[#DBD0BF] ${
            open
              ? "border-black bg-[#d6c7b5] text-black shadow"
              : "border-gray-400 bg-white text-black"
          }`}
          onClick={() => {
            setOpen((p) => !p);
            getAllProducts();
          }}
        >
          Всі категорії
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
