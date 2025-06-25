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
      title: "Phamilia",
      description: `Family cashmere 10%, superfine merino wool 90% 245 grm 130x190 140x200 Designs: 1.ALICE2.HARRY3.FLEUR4.CARINA5. DUO`,
      image: "/images/product/valencia.png",
      subCategoryId: "1"
    },
    {
      id: "2",
      title: "Toskana",
      description: `Tuscany 5% cashmere, 45% superfine merino wool, 50% acrylic 245 grm 130x190 140x200 Designs: 1.LOOM2.TES3.PETRA4.PARADISIA5. DUO`,
      image: "/images/product/valencia.png",
      subCategoryId: "1"
    },
    {
      id: "3",
      title: "Modena",
      description: `Modena cashmere 5%, superfine merino wool 45%, acrylic 50%200 grm 130x190 140x200Designs: 1.WILLOW2.KAMELIO3.PICK-A-PICK4.BARBARA5. ASHLYE`,
      image: "/images/product/valencia.png",
      subCategoryId: "1"
    },
    {
      id: "4",
      title: "Merino",
      description: `Merino wool superfine merino 100% 275 gm 130x190, 140x200`,
      image: "/images/product/valencia.png",
      subCategoryId: "2"
    },
    {
      id: "5",
      title: "Marcel",
      description: `Marseille 80% merino wool, 20% nylon 275 grm 130x190, 140x200 Designs:1.LILLE2.VENICE3.DENVER4.2FACE5.DAVID`,
      image: "/images/product/valencia.png",
      subCategoryId: "2"
    },
    {
      id: "6",
      title: "Ontario",
      description: `Ontario wool New Zealand Lambswool 100% 300 grm 130x190, 140x200, 170x210, 200x220`,
      image: "/images/product/valencia.png",
      subCategoryId: "3"
    },
    {
      id: "7",
      title: "Oslo",
      description: `Oslo wool New Zealand 100% 350 grm 130x190, 140x200`,
      image: "/images/product/valencia.png",
      subCategoryId: "3"
    },
    {
      id: "8",
      title: "Elf",
      description: `Elf New Zealand wool 70%, polyester 30% 350 grm 140x200, 170x210, 200x220`,
      image: "/images/product/valencia.png",
      subCategoryId: "3"
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
