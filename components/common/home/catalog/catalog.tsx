"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import ProductList from "./product/product-list";
import CategoryList from "./category/category-list";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { useCatalog } from "@/context/catalog-context";
import SlideLeft from "@/components/icons/slide-left";
import SlideRight from "@/components/icons/slide-right";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const Catalog = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { products, filterProducts, getAllProducts } = useCatalog();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mt-[120px] bg-white py-8" id="products">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-6">
          <h2
            className={`${playfair.className} mb-2 text-center font-serif text-[40px] tracking-tight md:text-[68px]`}
          >
            НАШ КАТАЛОГ
          </h2>
          <p
            className={`${noto.className} mt-[24px] mb-[48px] text-center text-base text-gray-700 opacity-55`}
          >
            Ми пропонуємо продукти, перевірені часом
          </p>
        </div>
        <CategoryList filterProducts={filterProducts} getAllProducts={getAllProducts} />
        {products.length > 0 ? (
          <>
            <div className="mt-[20px] overflow-x-hidden" ref={emblaRef}>
              <ProductList products={products} />
            </div>
            {products.length > 4 && (
              <div className="mt-6 flex justify-center gap-4">
                <button
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-white transition duration-[600ms] hover:bg-[#DBD0BF]"
                  onClick={scrollPrev}
                >
                  <SlideLeft />
                </button>
                <button
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-white transition duration-[600ms] hover:bg-[#DBD0BF]"
                  onClick={scrollNext}
                >
                  <SlideRight />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-5 text-center text-lg text-gray-600">
            No products found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
