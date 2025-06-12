import Header from "@/components/layout/header/header";
import { Product } from "@/lib/types";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import ProductItem from "@/components/common/catalog/product-item";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const allProducts: Product[] = [
  {
    id: "1",
    title: "Valencia",
    description: "Soft and light plaid made of 100% cashmere in a neutral beige shade.",
    image: "/images/product/valencia.png",
    subCategoryId: "valencia"
  }
];

function capitalizeFirstLetter(str: string): string {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export default async function Catalog({ params }: any) {
  const { subCategory } = params;

  const filteredProducts = allProducts.filter(
    (product) => product.subCategoryId.toLowerCase() === subCategory.toLowerCase()
  );

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
            <span>{capitalizeFirstLetter(subCategory)}</span>
          </div>

          <h1
            className={`${playfair.className} mt-[20px] mb-6 text-[80px] font-semibold tracking-tight text-[#27241F]`}
          >
            {capitalizeFirstLetter(subCategory)}
          </h1>

          <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
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
