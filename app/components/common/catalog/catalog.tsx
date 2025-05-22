"use client";

import { Product } from "@/app/lib/types";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useState } from "react";
import ProductList from "./product/product-list";
import CategoryList from "./category/category-list";

const Catalog = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [allProducts] = useState<Product[]>([
    {
      id: "1",
      title: "Valencia",
      description:
        "Soft and light plaid made of 100% cashmere in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
      image: "/images/product/valencia.png",
      subCategoryId: "1"
    },
    {
      id: "2",
      title: "Marcel",
      description:
        "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
      image: "/images/product/marcel.png",
      subCategoryId: "2"
    },
    {
      id: "3",
      title: "Modena",
      description:
        "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
      image: "/images/product/modena.png",
      subCategoryId: "3"
    },
    {
      id: "4",
      title: "Ontario",
      description:
        "Soft and light plaid made of 100% cashmere, made in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
      image: "/images/product/ontario.png",
      subCategoryId: "4"
    },
    {
      id: "5",
      title: "Modena",
      description:
        "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
      image: "/images/product/modena.png",
      subCategoryId: "5"
    },
    {
      id: "6",
      title: "Marcel",
      description:
        "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
      image: "/images/product/marcel.png",
      subCategoryId: "6"
    }
  ]);

  const [products, setProducts] = useState<Product[]>(allProducts);

  const filterProducts = (subCategoryId: string) => {
    const filterProducts = allProducts.filter((product) => product.subCategoryId === subCategoryId);
    setProducts(filterProducts);
  };

  return (
    <div className="bg-[#E8E2DB] py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-2 text-center font-serif text-[56px] tracking-tight md:text-[72px]">
            OUR CATALOG
          </h2>
          <p className="mb-8 text-center text-lg text-gray-700">
            We offer products that are proven over time
          </p>
        </div>
        <CategoryList filterProducts={filterProducts} />
        {products.length > 0 ? (
          <>
            <div className="overflow-x-hidden" ref={emblaRef}>
              <ProductList products={products} />
            </div>
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
