import { Category, SubCategory } from "@/app/lib/types";
import React, { useState, useRef, useEffect } from "react";

const CategoryItem = ({ category, subCategories }: { category: Category; subCategories: SubCategory[] }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(subCategories[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  subCategories = subCategories.filter((subCategory) => subCategory.categoryId == category.id);

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
    <div className="mr-5 mb-8 flex justify-center" ref={dropdownRef}>
      <div className="relative inline-block">
        <button
          className={`w-48 rounded-lg border px-8 py-2 text-center font-medium transition duration-[600ms] ${
            open
              ? "border-black bg-[#d6c7b5] text-black shadow"
              : "border-gray-400 bg-[#e8e2db] text-black"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {category.title}
        </button>
        {open && (
          <div className="absolute top-[110%] left-0 z-10 mt-2 w-48 rounded-lg border bg-white shadow-lg">
            {subCategories.map((subCategory) => (
              <div
                key={subCategory.id}
                className={`w-48 cursor-pointer px-4 py-3 text-center transition duration-[600ms] hover:bg-gray-100 ${
                  selected === subCategory ? "font-bold" : ""
                }`}
                onClick={() => {
                  setSelected(subCategory);
                  setOpen(false);
                }}
              >
                {subCategory.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
