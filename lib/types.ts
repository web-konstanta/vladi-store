export type Product = {
  _id: string;
  _type: "product";
  title: string;
  description: string;
  image: string;
  composition: string[];
  sizes: string[];
  weight: string;
  products: {
    title: string;
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
  categoryId: string;
  documentId?: string;
  _createdAt: string;
  _updatedAt: string;
};

export type Category = {
  _id: string;
  _type: "category";
  title: string;
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
