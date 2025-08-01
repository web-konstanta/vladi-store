import { Category, SubCategory } from "@/lib/types";
import React, { useState, useRef, useEffect } from "react";

const CategoryItem = ({
  category,
  subCategories,
  filterProducts
}: {
  category: Category;
  subCategories: SubCategory[];
  filterProducts: (categoryId: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SubCategory | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSubCategories = subCategories.filter(
    (subCategory) => subCategory.categoryId == category.id
  );

  useEffect(() => {
    if (selected) {
      filterProducts(selected.id);
    }
  }, [selected]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    return () => {
      setSelected(null);
    };
  });

  return (
    <div className="mr-5 mb-8 flex justify-center" ref={dropdownRef}>
      <div className="relative inline-block">
        <button
          className={`w-52 rounded-lg border px-8 py-3 text-center text-base font-medium transition duration-[600ms] ${
            open
              ? "border-black bg-[#d6c7b5] text-black shadow"
              : "border-gray-400 bg-white text-black"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {category.title}
        </button>
        {open && (
          <div className="absolute top-[84%] left-0 z-10 mt-2 w-50 rounded-lg border bg-white shadow-lg">
            {filteredSubCategories.map((subCategory) => (
              <div
                key={subCategory.id}
                className={`w-full cursor-pointer rounded-lg px-4 py-3 text-center transition duration-[600ms] hover:bg-gray-100 ${
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
