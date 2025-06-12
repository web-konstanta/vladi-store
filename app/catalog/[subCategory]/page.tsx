import Header from "@/components/layout/header/header";
import { Product, SubCategory } from "@/lib/types";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import ProductItem from "@/components/common/catalog/product-item";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

interface CatalogPageProps {
  params: {
    subCategory: string;
  };
}

const subCategories: SubCategory[] = [
  {
    id: "1",
    title: "Cashmere",
    categoryId: "1"
  },
  {
    id: "2",
    title: "Wool",
    categoryId: "1"
  },
  {
    id: "3",
    title: "Semi-Cotton",
    categoryId: "1"
  },
  {
    id: "4",
    title: "Cotton",
    categoryId: "1"
  },
  {
    id: "5",
    title: "Silk",
    categoryId: "2"
  },
  {
    id: "6",
    title: "Jute",
    categoryId: "2"
  },
  {
    id: "7",
    title: "Coir",
    categoryId: "3"
  },
  {
    id: "8",
    title: "Sisal",
    categoryId: "3"
  }
];

const allProducts: Product[] = [
  {
    id: "1",
    title: "Valencia",
    description:
      "Soft and light plaid made of 100% cashmere in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/images/product/valencia.png",
    subCategoryId: "1"
  },
  {
    id: "2",
    title: "Marcel",
    description:
      "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
    image: "/images/product/marcel.png",
    subCategoryId: "2"
  },
  {
    id: "3",
    title: "Modena",
    description:
      "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
    image: "/images/product/modena.png",
    subCategoryId: "3"
  },
  {
    id: "4",
    title: "Ontario",
    description:
      "Soft and light plaid made of 100% cashmere, made in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/images/product/ontario.png",
    subCategoryId: "4"
  },
  {
    id: "5",
    title: "Modena",
    description:
      "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
    image: "/images/product/modena.png",
    subCategoryId: "5"
  },
  {
    id: "6",
    title: "Marcel",
    description:
      "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
    image: "/images/product/marcel.png",
    subCategoryId: "6"
  }
];

function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Catalog({ params }: CatalogPageProps) {
  const { subCategory: title } = params;

  const subCategoryItem = subCategories.find((subCategory) => subCategory.title === title);
  const filteredProducts = allProducts.filter((product) => product.subCategoryId === subCategoryItem?.title);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-[#E8E2DB] pt-8">
        <div className="container mx-auto px-4">
          <div className="mt-[50px] mb-4 text-[18px] text-gray-600">
            <Link href="/">
              <span className="opacity-50 hover:underline">Home</span>
            </Link>
            {" / "}
            <span>{capitalizeFirstLetter(title)}</span>
          </div>

          <h1
            className={`${playfair.className} mt-[20px] mb-6 text-[80px] font-semibold tracking-tight text-[#27241F]`}
          >
            {capitalizeFirstLetter(title)}
          </h1>

          <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            {allProducts.length > 0 ? (
              allProducts.map((product) => <ProductItem key={product.id} product={product} />)
            ) : (
              <div className="col-span-full mt-5 text-center text-lg text-gray-600">
                No products found for this category.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
