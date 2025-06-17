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
    title: "Valencia Terra",
    description:
      "Soft and light plaid made of 100% cashmere in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/images/product/valencia.png",
    subCategoryId: "1"
  },
  {
    id: "2",
    title: "Marcel Terra",
    description:
      "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
    image: "/images/product/marcel.png",
    subCategoryId: "2"
  },
  {
    id: "3",
    title: "Modena Terra",
    description:
      "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
    image: "/images/product/modena.png",
    subCategoryId: "3"
  },
  {
    id: "4",
    title: "Ontario Terra",
    description:
      "Soft and light plaid made of 100% cashmere, made in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/images/product/ontario.png",
    subCategoryId: "4"
  },
  {
    id: "5",
    title: "Modena Terra",
    description:
      "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
    image: "/images/product/modena.png",
    subCategoryId: "5"
  },
  {
    id: "6",
    title: "Marcel Terra",
    description:
      "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
    image: "/images/product/marcel.png",
    subCategoryId: "6"
  }
];

function capitalizeFirstLetter(str: string): string {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

//TODO: Implement dynamic props params
const Catalog = () => {
  const subCategory = "valencia";

  // const filteredProducts = allProducts.filter(
  //   (product) => product.subCategoryId.toLowerCase() === subCategory.toLowerCase()
  // );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-[#E8E2DB] pt-8">
        <div className="container mx-auto px-4">
          <div className="mt-[45px] mb-4 flex max-w-[160px] items-center justify-between gap-[8px] text-[18px] text-gray-600">
            <Link href="/">
              <span className="text-[#9D978D] opacity-50 hover:underline">Home</span>
            </Link>
            <div className="text-[#9D978D] opacity-50">{" / "}</div>
            <span>{capitalizeFirstLetter(subCategory)}</span>
          </div>

          <h1
            className={`${playfair.className} mt-[20px] mb-6 text-[86px] font-semibold tracking-tight text-[#27241F] uppercase`}
          >
            {capitalizeFirstLetter(subCategory)}
          </h1>

          <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            {allProducts.length > 0 ? (
              allProducts.map((product) => (
                <Link key={product.id} href={`/catalog/product/${product.id}`}>
                  <ProductItem product={product} />
                </Link>
              ))
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
};

export default Catalog;
