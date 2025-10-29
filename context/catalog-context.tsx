"use client";

import { Product } from "@/lib/types";
import {  getAllProductsWithoutCategory } from "@/lib/sanity-queries";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect
} from "react";

interface CatalogContextType {
  products: Product[];
  allProducts: Product[];
  loading: boolean;
  error: string | null;
  filterProducts: (subCategoryId: string) => void;
  getAllProducts: () => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

export const CatalogProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load products from Sanity on component mountt
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        // const productsData = await getAllProducts(); // commented out to exclude specific category
        const productsData = await getAllProductsWithoutCategory();
        setAllProducts(productsData);
        setProducts(productsData);
      } catch (err) {
        console.error("Error:", err);
        setError("Error loading products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const getAllProductsHandler = useCallback(() => {
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
    <CatalogContext.Provider
      value={{
        products,
        allProducts,
        loading,
        error,
        filterProducts,
        getAllProducts: getAllProductsHandler
      }}
    >
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
