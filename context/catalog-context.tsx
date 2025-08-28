"use client";

import { Product } from "@/lib/types";
import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

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
      description:
        "Повсякденна універсальність і комфорт. \"Ельф\" поєднує тепло натуральної шерсті й практичність синтетики — міцний, зносостійкий і приємний на дотик. Відмінний як для будинку, так і для дачі, авто чи пікніка; стриманий дизайн підійде до будь-якого інтер’єру.",
      image: "/images/product/Elf.png",
      subCategoryId: "1",
      composition: ["70% новозеландська шерсть", "30% поліестер"],
      sizes: ["130×190", "140×205", "170×210", "200×220"],
      weight: "350 г/м²",
      products: [
        { image: "/valencia/VALENCIA ANTONIO.png", title: "Elf Antonio" },
        { image: "/valencia/VALENCIA BOUCLE.png", title: "Elf Boucle" },
        { image: "/valencia/VALENCIA HARRY.png", title: "Elf Harry" },
        { image: "/valencia/VALENCIA PARQUET.png", title: "Elf Parquet" }
      ]
    },
    {
      id: "2",
      title: "Familia",
      description:
        "Плед \"Фамілія\" — втілення вишуканого затишку й легкості. Поєднання надтонкої шерсті й кашеміру надає виробу неймовірну м’якість, легкість і чудову теплоізоляцію. Тонкі волокна створюють шовковисту текстуру, а кашемір — благородний блиск і розкіш. Ідеально підходить для холодних вечорів із книгою та чаєм або як стильний акцент у спальні чи вітальні.",
      image: "/images/product/Familia.png",
      subCategoryId: "2",
      composition: ["10% кашеміру,", "90% супертонкого мериносу"],
      sizes: ["130×190", "140×205", "170×210", "200×220"],
      weight: "245 г/м²",
      products: [
        { image: "/valencia/VALENCIA ANTONIO.png", title: "Elf Antonio" },
        { image: "/valencia/VALENCIA BOUCLE.png", title: "Elf Boucle" },
        { image: "/valencia/VALENCIA HARRY.png", title: "Elf Harry" },
        { image: "/valencia/VALENCIA PARQUET.png", title: "Elf Parquet" }
      ]
    }
  ]);

  const [products, setProducts] = useState<Product[]>(allProducts);

  const getAllProducts = useCallback(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const filterProducts = useCallback(
    (subCategoryId: string) => {
      const filteredProducts = allProducts.filter(
        (product) => product.subCategoryId === subCategoryId
      );
      setProducts(filteredProducts);
    },
    [allProducts]
  );

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
