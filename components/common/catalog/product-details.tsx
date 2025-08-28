"use client";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Magnifier from "@/components/ui/magnifier/magnifier";
import { useCatalog } from "@/context/catalog-context";
import { subCategories } from "../home/catalog/category/category-list";
import ProductCard from "./product-card";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const categories = new Map([
  ["valencia", "Пледи Valencia"],
  ["familia", "Пледи Familia"],
  ["toskana", "Покривала Toskana"],
  ["miami", "Ковдри Miami"],
  ["modena", "Пледи Modena"],
  ["marcel", "Покривала Marcel"],
  ["ontario", "Пледи Ontario"],
  ["oslo", "Ковдри Oslo"],
  ["elf", "Пледи Elf"]
]);

function capitalizeFirstLetter(str: string): string {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

interface CatalogContentProps {
  subCategory: string;
}

const ProductDetails = ({ subCategory }: CatalogContentProps) => {
  const categoryName = categories.get(subCategory) || subCategory;

  const { allProducts } = useCatalog();

  const product = allProducts.find(
    (product) => product.title.toLowerCase() === subCategory.toLowerCase()
  );

  const subCategoryItem = subCategories.find((item) => item.id === product?.subCategoryId);

  const additionalProducts = allProducts
    .filter((product) => product.subCategoryId !== subCategoryItem?.id)
    .slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-[1320px]">
      <div>
        <div className="rounded-lg border border-black bg-white p-[20px] sm:p-6 md:p-4 lg:p-[48px]">
          <div className="flex max-w-[300px] flex-wrap justify-start gap-1 text-sm text-[#9D978D] sm:text-base">
            <Link href="/">
              <span className="opacity-50 hover:underline">Головна</span>
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-[#27241F]">{capitalizeFirstLetter(categoryName)}</span>
          </div>

          <div
            className={`${playfair.className} mt-[14px] mb-4 text-[36px] tracking-tight text-[#27241F] uppercase sm:text-4xl md:mt-4 md:text-5xl lg:text-[68px]`}
          >
            {capitalizeFirstLetter(categoryName)}
          </div>
          <p className="max-w-[984px] text-base leading-[28px] sm:text-lg">
            {product?.description}
          </p>
          <div className="mt-5 flex max-w-[800px] flex-col justify-between gap-4 sm:flex-row sm:gap-0">
            <div>
              <h3 className="text-sm font-bold sm:text-base">Розмір</h3>
              <ul className="mt-[8px] list-disc pl-5 text-sm sm:text-base">
                {product?.sizes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold sm:text-base">Склад виробу</h3>
              <ul className="mt-[8px] list-disc pl-5 text-sm sm:text-base">
                {product?.composition.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold sm:text-base">Вага</h3>
              <ul className="mt-[8px] list-disc pl-5 text-sm sm:text-base">
                <li className="mt-[4px]">{product?.weight}</li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-sm font-bold sm:text-base">Догляд</h3>
              <ul className="mt-[8px] flex list-none text-sm sm:text-base">
                <li className="mt-[4px]">
                  <Image src="/frames/methods.png" alt="Methods" width={260} height={34} />
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <div className="mt-5 grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 lg:grid-cols-3 xl:grid-cols-4">
            {product?.products && product.products.length > 0 ? (
              product.products.map((product) => (
                <div
                  key={product.title}
                  className="flex h-[420px] w-full flex-col overflow-hidden rounded-lg border border-black bg-white sm:h-[380px] lg:h-[426px]"
                >
                  <div className="relative h-[320px] w-full sm:h-[300px] lg:h-[356px]">
                    <Magnifier src={product.image} alt={product.title} width={312} height={356} />
                  </div>
                  <div className="flex h-[100px] flex-col justify-center sm:h-auto sm:flex-1">
                    <div>
                      <h3 className="m-3 text-center text-lg text-[#27241F] sm:m-4 sm:text-xl lg:m-5 lg:text-2xl">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full mt-5 text-center text-lg text-gray-600">
                Товари не знайдені.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1
          className={`${playfair.className} text-3xl uppercase sm:text-4xl md:text-5xl lg:text-[68px]`}
        >
          Вас можуть зацікавити
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 lg:grid-cols-3 xl:grid-cols-4">
          {additionalProducts.length > 0 ? (
            additionalProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full mt-5 text-center text-lg text-gray-600">
              Товари не знайдені.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
