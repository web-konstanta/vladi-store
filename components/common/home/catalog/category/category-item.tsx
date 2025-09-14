import { Category, SubCategory, getTranslatedText } from "@/lib/types";
import { useTranslation } from "@/context/translation-context";
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
  const { locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SubCategory | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSubCategories = subCategories.filter(
    (subCategory) => subCategory.categoryId == category.documentId
  );

  useEffect(() => {
    if (selected && selected.documentId) {
      filterProducts(selected.documentId);
    }
  }, [selected, filterProducts]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      setSelected(null);
    };
  }, [open]);

  return (
    <div className="mr-5 mb-4 flex justify-center" ref={dropdownRef}>
      <div className="relative inline-block w-[200px]">
        <button
          className={`w-full rounded-lg border px-8 py-3 text-center text-base transition duration-[600ms] hover:bg-[#DBD0BF] ${
            open
              ? "border-black bg-[#d6c7b5] text-black shadow"
              : "border-gray-400 bg-white text-black"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {getTranslatedText(category.title, category.titleEn, locale)}
        </button>
        {open && filteredSubCategories.length > 0 && (
          <div className="absolute top-[84%] left-0 z-10 mt-2 w-full border bg-white shadow-lg">
            {filteredSubCategories.map((subCategory) => (
              <div
                key={subCategory._id}
                className={`w-full cursor-pointer rounded-lg px-4 py-3 text-center transition duration-[600ms] hover:bg-gray-100 ${
                  selected === subCategory ? "font-bold" : ""
                }`}
                onClick={() => {
                  setSelected(subCategory);
                  setOpen(false);
                }}
              >
                {getTranslatedText(subCategory.title, subCategory.titleEn, locale)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
