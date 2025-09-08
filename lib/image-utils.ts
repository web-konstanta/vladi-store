import { getImageUrl } from "./sanity";
import { Product, Category, SubCategory } from "./types";

// Helper function to get product main image URL
export function getProductImageUrl(product: Product, width?: number, height?: number): string {
  if (!product.image) {
    return "/images/placeholder-product.png"; // Fallback image
  }

  const imageUrl = getImageUrl(product.image, width, height);
  return imageUrl || "/images/placeholder-product.png";
}

// Helper function to get product variant image URL
export function getProductVariantImageUrl(
  variant: Product["products"][0],
  width?: number,
  height?: number
): string {
  if (!variant.image) {
    return "/images/placeholder-product.png"; // Fallback image
  }

  const imageUrl = getImageUrl(variant.image, width, height);
  return imageUrl || "/images/placeholder-product.png";
}

// Helper function to get category image URL
export function getCategoryImageUrl(category: Category, width?: number, height?: number): string {
  if (!category.image) {
    return "/images/placeholder-category.png"; // Fallback image
  }

  const imageUrl = getImageUrl(category.image, width, height);
  return imageUrl || "/images/placeholder-category.png";
}

// Helper function to get product ID
export function getProductId(product: Product): string {
  return product._id;
}

// Helper function to get category ID
export function getCategoryId(category: Category): string {
  return category._id;
}

// Helper function to get subcategory ID
export function getSubcategoryId(subcategory: SubCategory): string {
  return subcategory._id;
}

// Helper function to convert Sanity product to legacy format (for backward compatibility)
export function convertToLegacyProduct(product: Product) {
  return {
    id: product._id,
    title: product.title,
    description: product.description,
    image: getProductImageUrl(product),
    composition: product.composition,
    sizes: product.sizes,
    weight: product.weight,
    products: product.products.map((variant) => ({
      image: getProductVariantImageUrl(variant),
      title: variant.title
    })),
    subCategoryId: product.subCategoryId,
    updatedAt: product.updatedAt
  };
}
