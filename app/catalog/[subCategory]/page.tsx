import Header from "@/components/layout/header/header";
import { Product } from "@/lib/types";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/footer/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

const allProducts: Product[] = [
  {
    id: "1",
    title: "Valencia Terra",
    description:
      "Soft and light plaid made of 100% cashmere in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/valencia/VALENCIA ANTONIO.png",
    subCategoryId: "1"
  },
  {
    id: "2",
    title: "Marcel Terra",
    description:
      "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
    image: "/valencia/VALENCIA BOUCLE.png",
    subCategoryId: "2"
  },
  {
    id: "3",
    title: "Modena Terra",
    description:
      "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
    image: "/valencia/VALENCIA HARRY.png",
    subCategoryId: "3"
  },
  {
    id: "4",
    title: "Ontario Terra",
    description:
      "Soft and light plaid made of 100% cashmere, made in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/valencia/VALENCIA PARQUET.png",
    subCategoryId: "4"
  }
];

const additionalProducts: Product[] = [
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
  }
];

function capitalizeFirstLetter(str: string): string {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

const Catalog = () => {
  const subCategory = "Пледи Valencia";

  // const filteredProducts = allProducts.filter(
  //   (product) => product.subCategoryId.toLowerCase() === subCategory.toLowerCase()
  // );

  return (
    <div className={`${noto.className} flex min-h-screen flex-col`}>
      <Header />

      <main
        className={`${noto.className} flex-1 bg-[#E8E2DB] bg-[url('/images/long-waves.png')] bg-cover bg-top bg-no-repeat pt-8`}
      >
        <div className="container mx-auto px-4">
          <div className="mt-5 flex max-w-[220px] justify-between text-[18px] text-[#9D978D]">
            <Link href="/">
              <span className="opacity-50 hover:underline">Головна</span>
            </Link>
            <div className="opacity-50">{" / "}</div>
            <span className="text-[#27241F]">{capitalizeFirstLetter(subCategory)}</span>
          </div>

          <div
            className={`${playfair.className} mt-4 mb-2 text-[68px] tracking-tight text-[#27241F] uppercase`}
          >
            {capitalizeFirstLetter(subCategory)}
          </div>

          <div>
            <p className="max-w-[960px]">
              "Фамілія" - це втілення вишуканого затишку та елегантності. Створений зі шляхетного
              поєднання супертонкої вовни і кашеміру, він вирізняється неймовірною м'якістю,
              легкістю і здатністю чудово зберігати тепло. Найтонші волокна надають пледу
              шовковистої текстури, а кашемір - витонченої розкоші та благородного блиску.
            </p>
            <div className="mt-5 flex max-w-[800px] justify-between">
              <div>
                <h3 className="font-extrabold">Склад виробу</h3>
                <ul className="list-disc pl-5">
                  <li>90% ультратонка мериносова вовна</li>
                  <li>10% кашемір</li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold">Розмір</h3>
                <ul className="list-disc pl-5">
                  <li>130×190 cm</li>
                  <li>140×200 cm</li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold">Вага</h3>
                <ul className="list-disc pl-5">
                  <li>200 г/м²</li>
                </ul>
              </div>
              {/* <div>
                <h3 className="font-extrabold">Догляд</h3>
                <ul className="flex justify-between gap-4">
                  <li>
                    <img src="/frames/wash.png" alt="" />
                  </li>
                  <li>
                    <img src="/frames/white.png" alt="" />
                  </li>
                  <li>
                    <img src="/frames/warm.png" alt="" />
                  </li>
                  <li>
                    <img src="/frames/match.png" alt="" />
                  </li>
                  <li>
                    <img src="/frames/clean.png" alt="" />
                  </li>
                </ul>
              </div> */}
            </div>
            <div>
              <div className="mt-12 grid grid-cols-1 gap-20 pb-12 sm:grid-cols-2 lg:grid-cols-4">
                {allProducts.length > 0 ? (
                  allProducts.map((product) => (
                    <Link key={product.id} href={`/catalog/product/${product.id}`}>
                      <div className="flex h-full w-[312px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                        <div className="relative h-[320px] w-full">
                          <Image
                            src={product.image}
                            alt={product.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="m-5 text-center text-2xl text-[#27241F]">
                              {product.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full mt-5 text-center text-lg text-gray-600">
                    Товари не знайдені.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className={`${playfair.className} text-[68px] uppercase`}>Вас можуть зацікавити</h1>
            <div className="mt-5 grid grid-cols-1 gap-20 pb-12 sm:grid-cols-2 lg:grid-cols-4">
              {additionalProducts.length > 0 ? (
                allProducts.map((product) => (
                  <Link key={product.id} href={`/catalog/product/${product.id}`}>
                    <div className="flex h-full w-[312px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                      <div className="relative h-[320px] w-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          style={{ objectFit: "cover" }}
                          priority={false}
                        />
                      </div>
                      <div className="flex flex-grow flex-col justify-between p-6">
                        <div>
                          <h3 className="mb-2 text-2xl text-[#27241F]">{product.title}</h3>
                          <p className="text-base leading-relaxed text-gray-700">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full mt-5 text-center text-lg text-gray-600">
                  Товари не знайдені.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
