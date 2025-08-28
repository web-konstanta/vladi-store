export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  composition: string[];
  sizes: string[];
  weight: string;
  products: { image: string; title: string }[];
  subCategoryId: string;
  updatedAt?: string;
};

export type SubCategory = {
  id: string;
  title: string;
  categoryId: string;
};

export type Category = {
  id: string;
  title: string;
  image?: string;
};

export type PartnerImage = {
  src: string;
  alt: string;
};

export type CertificateType = Pick<Product, "title" | "description" | "image">;
