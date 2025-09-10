export type Product = {
  _id: string;
  _type: "product";
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  composition: string[];
  compositionEn: string[];
  sizes: string[];
  weight: string;
  weightEn: string;
  products: {
    title: string;
    titleEn: string;
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
  }[];
  subCategoryId: string;
  updatedAt: string;
  _createdAt: string;
  _updatedAt: string;
};

export type SubCategory = {
  _id: string;
  _type: "subcategory";
  title: string;
  titleEn: string;
  categoryId: string;
  documentId?: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Category = {
  _id: string;
  _type: "category";
  title: string;
  titleEn: string;
  image?: string;
  documentId?: string;
  _createdAt: string;
  _updatedAt: string;
};

export type PartnerImage = {
  src: string;
  alt: string;
};

export type CertificateType = Pick<Product, "title" | "description" | "image">;

// Utility function to get translated text
export const getTranslatedText = (ua: string, en: string, locale: "ua" | "en"): string => {
  return locale === "en" ? en : ua;
};

// Utility function to get translated array
export const getTranslatedArray = (ua: string[], en: string[], locale: "ua" | "en"): string[] => {
  return locale === "en" ? en : ua;
};
