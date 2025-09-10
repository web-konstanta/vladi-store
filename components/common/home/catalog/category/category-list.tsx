import React, { useEffect, useRef, useState } from "react";
import CategoryItem from "./category-item";
import { Category, SubCategory } from "@/lib/types";
import { CategoryService } from "@/lib/category-service";
import { useTranslation } from "@/context/translation-context";

const CategoryList = ({
  filterProducts,
  getAllProducts
}: {
  filterProducts: (categoryId: string) => void;
  getAllProducts: () => void;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [categoriesData, subCategoriesData] = await Promise.all([
          CategoryService.getAllCategories(),
          CategoryService.getAllSubcategories()
        ]);

        setCategories(categoriesData);
        setSubCategories(subCategoriesData);
      } catch (err) {
        console.error("Error loading categories:", err);
        setError(t("common.categories_error"));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  if (loading) {
    return (
      <div className="m-auto flex flex-wrap justify-center lg:w-full 2xl:justify-between">
        <div className="flex w-full items-center justify-center py-8">
          <div className="text-gray-600">{t("common.categories_loading")}</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-auto flex flex-wrap justify-center lg:w-full 2xl:justify-between">
        <div className="flex w-full items-center justify-center py-8">
          <div className="text-red-600">{t("common.categories_error")}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="m-auto flex max-w-[1320px] flex-wrap justify-center lg:w-full 2xl:justify-between">
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
          {t("common.all_categories")}
        </button>
      </div>

      {categories.map((category) => (
        <CategoryItem
          key={category._id}
          category={category}
          subCategories={subCategories}
          filterProducts={filterProducts}
        />
      ))}
    </div>
  );
};

export default CategoryList;
