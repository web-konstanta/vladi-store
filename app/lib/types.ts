export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
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
};
