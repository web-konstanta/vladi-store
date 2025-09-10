import { client } from "./sanity";
import { Product, Category, SubCategory } from "./types";

// GROQ queries for fetching data from Sanity

export const getAllProductsQuery = `
  *[_type == "product"] | order(_createdAt asc) {
    _id,
    _type,
    title,
    titleEn,
    description,
    descriptionEn,
    image,
    composition,
    compositionEn,
    sizes,
    weight,
    weightEn,
    products,
    subCategoryId,
    updatedAt,
    _createdAt,
    _updatedAt
  }
`;

export const getProductByIdQuery = `
  *[_type == "product" && _id == $id][0] {
    _id,
    _type,
    title,
    titleEn,
    description,
    descriptionEn,
    image,
    composition,
    compositionEn,
    sizes,
    weight,
    weightEn,
    products,
    subCategoryId,
    updatedAt,
    _createdAt,
    _updatedAt
  }
`;

export const getProductsBySubcategoryQuery = `
  *[_type == "product" && subCategoryId == $subcategoryId] | order(_createdAt asc) {
    _id,
    _type,
    title,
    titleEn,
    description,
    descriptionEn,
    image,
    composition,
    compositionEn,
    sizes,
    weight,
    weightEn,
    products,
    subCategoryId,
    updatedAt,
    _createdAt,
    _updatedAt
  }
`;

export const getAllCategoriesQuery = `
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    _type,
    title,
    titleEn,
    image,
    _createdAt,
    _updatedAt
  }
`;

export const getAllSubcategoriesQuery = `
  *[_type == "subcategory"] | order(_createdAt asc) {
    _id,
    _type,
    title,
    titleEn,
    categoryId,
    _createdAt,
    _updatedAt
  }
`;

export const getSubcategoriesByCategoryQuery = `
  *[_type == "subcategory" && categoryId == $categoryId] | order(_createdAt asc) {
    _id,
    _type,
    title,
    titleEn,
    categoryId,
    _createdAt,
    _updatedAt
  }
`;

// API functions

export async function getAllProducts(): Promise<Product[]> {
  return await client.fetch(getAllProductsQuery);
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = await client.fetch(getProductByIdQuery, { id });
  return product || null;
}

export async function getProductsBySubcategory(subcategoryId: string): Promise<Product[]> {
  return await client.fetch(getProductsBySubcategoryQuery, { subcategoryId });
}

export async function getAllCategories(): Promise<Category[]> {
  return await client.fetch(getAllCategoriesQuery);
}

export async function getAllSubcategories(): Promise<SubCategory[]> {
  return await client.fetch(getAllSubcategoriesQuery);
}

export async function getSubcategoriesByCategory(categoryId: string): Promise<SubCategory[]> {
  return await client.fetch(getSubcategoriesByCategoryQuery, { categoryId });
}
