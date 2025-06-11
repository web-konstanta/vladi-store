"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import ProductList from "./product/product-list";
import CategoryList from "./category/category-list";
import { Playfair_Display } from "next/font/google";
import { useCatalog } from "@/app/context/catalog-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
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
    <div className="mt-[120px] bg-[#E8E2DB] py-8" id="products">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2
            className={`${playfair.className} mb-2 text-center font-serif text-[56px] tracking-tight md:text-[72px]`}
          >
            OUR CATALOG
          </h2>
          <p className="mb-8 text-center text-lg text-gray-700">
            We offer products that are proven over time
          </p>
        </div>
        <CategoryList filterProducts={filterProducts} getAllProducts={getAllProducts} />
        {products.length > 0 ? (
          <>
            <div className="overflow-x-hidden" ref={emblaRef}>
              <ProductList products={products} />
            </div>
            {products.length > 5 && (
              <div className="mt-6 flex justify-center gap-4">
                <button
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[#DBD0BF] transition duration-[600ms] hover:bg-gray-100"
                  onClick={scrollPrev}
                >
                  <span className="text-2xl">&#8592;</span>
                </button>
                <button
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[#DBD0BF] transition duration-[600ms] hover:bg-gray-100"
                  onClick={scrollNext}
                >
                  <span className="text-2xl">&#8594;</span>
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
