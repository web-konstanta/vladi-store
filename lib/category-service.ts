import { client } from "./sanity";
import { Category, SubCategory } from "./types";
import { getImageUrl } from "./sanity";

// GROQ queries for categories and subcategories
export const getAllCategoriesQuery = `
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    _type,
    title,
    image,
    documentId,
    _createdAt,
    _updatedAt
  }
`;

export const getCategoryByIdQuery = `
  *[_type == "category" && _id == $id][0] {
    _id,
    _type,
    title,
    image,
    documentId,
    _createdAt,
    _updatedAt
  }
`;

export const getAllSubcategoriesQuery = `
  *[_type == "subcategory"] | order(_createdAt asc) {
    _id,
    _type,
    title,
    categoryId,
    documentId,
    _createdAt,
    _updatedAt
  }
`;

export const getSubcategoryByIdQuery = `
  *[_type == "subcategory" && _id == $id][0] {
    _id,
    _type,
    title,
    categoryId,
    documentId,
    _createdAt,
    _updatedAt
  }
`;

export const getSubcategoriesByCategoryQuery = `
  *[_type == "subcategory" && categoryId == $categoryId] | order(_createdAt asc) {
    _id,
    _type,
    title,
    categoryId,
    documentId,
    _createdAt,
    _updatedAt
  }
`;

export const getCategoriesWithSubcategoriesQuery = `
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    _type,
    title,
    image,
    documentId,
    _createdAt,
    _updatedAt,
    "subcategories": *[_type == "subcategory" && categoryId == ^._id] | order(_createdAt asc) {
      _id,
      _type,
      title,
      categoryId,
      documentId,
      _createdAt,
      _updatedAt
    }
  }
`;

// Service class for category operations
export class CategoryService {
  /**
   * Get all categories
   */
  static async getAllCategories(): Promise<Category[]> {
    try {
      const categories = await client.fetch(getAllCategoriesQuery);
      return categories || [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  /**
   * Get category by ID
   */
  static async getCategoryById(id: string): Promise<Category | null> {
    try {
      const category = await client.fetch(getCategoryByIdQuery, { id });
      return category || null;
    } catch (error) {
      console.error("Error fetching category by ID:", error);
      return null;
    }
  }

  /**
   * Get all subcategories
   */
  static async getAllSubcategories(): Promise<SubCategory[]> {
    try {
      const subcategories = await client.fetch(getAllSubcategoriesQuery);
      return subcategories || [];
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      return [];
    }
  }

  /**
   * Get subcategory by ID
   */
  static async getSubcategoryById(id: string): Promise<SubCategory | null> {
    try {
      const subcategory = await client.fetch(getSubcategoryByIdQuery, { id });
      return subcategory || null;
    } catch (error) {
      console.error("Error fetching subcategory by ID:", error);
      return null;
    }
  }

  /**
   * Get subcategories by category ID
   */
  static async getSubcategoriesByCategory(categoryId: string): Promise<SubCategory[]> {
    try {
      const subcategories = await client.fetch(getSubcategoriesByCategoryQuery, { categoryId });
      return subcategories || [];
    } catch (error) {
      console.error("Error fetching subcategories by category:", error);
      return [];
    }
  }

  /**
   * Get categories with their subcategories
   */
  static async getCategoriesWithSubcategories(): Promise<Category[]> {
    try {
      const categories = await client.fetch(getCategoriesWithSubcategoriesQuery);
      return categories || [];
    } catch (error) {
      console.error("Error fetching categories with subcategories:", error);
      return [];
    }
  }

  /**
   * Get category with image URL
   */
  static async getCategoryWithImageUrl(
    category: Category,
    width?: number,
    height?: number
  ): Promise<Category & { imageUrl?: string }> {
    const imageUrl = category.image ? getImageUrl(category.image, width, height) : undefined;
    return {
      ...category,
      imageUrl: imageUrl || undefined
    };
  }

  /**
   * Get all categories with image URLs
   */
  static async getAllCategoriesWithImages(
    width?: number,
    height?: number
  ): Promise<(Category & { imageUrl?: string })[]> {
    try {
      const categories = await this.getAllCategories();
      return Promise.all(
        categories.map((category) => this.getCategoryWithImageUrl(category, width, height))
      );
    } catch (error) {
      console.error("Error fetching categories with images:", error);
      return [];
    }
  }

  /**
   * Search categories by title
   */
  static async searchCategories(searchTerm: string): Promise<Category[]> {
    try {
      const query = `
        *[_type == "category" && title match "*${searchTerm}*"] | order(title asc) {
          _id,
          _type,
          title,
          image,
          documentId,
          _createdAt,
          _updatedAt
        }
      `;
      const categories = await client.fetch(query);
      return categories || [];
    } catch (error) {
      console.error("Error searching categories:", error);
      return [];
    }
  }

  /**
   * Search subcategories by title
   */
  static async searchSubcategories(searchTerm: string): Promise<SubCategory[]> {
    try {
      const query = `
        *[_type == "subcategory" && title match "*${searchTerm}*"] | order(title asc) {
          _id,
          _type,
          title,
          categoryId,
          documentId,
          _createdAt,
          _updatedAt
        }
      `;
      const subcategories = await client.fetch(query);
      return subcategories || [];
    } catch (error) {
      console.error("Error searching subcategories:", error);
      return [];
    }
  }
}

// Export individual functions for backward compatibility
export const {
  getAllCategories,
  getCategoryById,
  getAllSubcategories,
  getSubcategoryById,
  getSubcategoriesByCategory,
  getCategoriesWithSubcategories,
  getAllCategoriesWithImages,
  searchCategories,
  searchSubcategories
} = CategoryService;
