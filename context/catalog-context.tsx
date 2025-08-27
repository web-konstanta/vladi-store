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
      title: "Elf",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/ELF.png",
      subCategoryId: "1"
    },
    {
      id: "2",
      title: "Toskana",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/TOSCANA.png",
      subCategoryId: "1"
    },
    {
      id: "3",
      title: "Miami",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/MIAMI.png",
      subCategoryId: "1"
    },
    {
      id: "4",
      title: "Modena",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/MODENA.png",
      subCategoryId: "2"
    },
    {
      id: "5",
      title: "Marcel",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/MARSEL.png",
      subCategoryId: "2"
    },
    {
      id: "6",
      title: "Ontario",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/ONTARIO.png",
      subCategoryId: "3"
    },
    {
      id: "7",
      title: "Oslo",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/OSLO.png",
      subCategoryId: "1"
    },
    {
      id: "8",
      title: "Valencia",
      description: `М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.`,
      image: "/images/product/VALENCIA.png",
      subCategoryId: "1"
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
