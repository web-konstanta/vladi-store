"use client";

import { Product } from "@/lib/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CatalogContextType {
  products: Product[];
  allProducts: Product[];
  filterProducts: (subCategoryId: string) => void;
  getAllProducts: () => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

export const CatalogProvider = ({ children }: { children: ReactNode }) => {
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

  const getAllProducts = () => {
    setProducts(allProducts);
  };

  const filterProducts = (subCategoryId: string) => {
    const filteredProducts = allProducts.filter(
      (product) => product.subCategoryId === subCategoryId
    );
    setProducts(filteredProducts);
  };

  return (
    <CatalogContext.Provider value={{ products, allProducts, filterProducts, getAllProducts }}>
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  const context = useContext(CatalogContext);
  if (context === undefined) {
    throw new Error("useCatalog must be used within a CatalogProvider");
  }
  return context;
};
