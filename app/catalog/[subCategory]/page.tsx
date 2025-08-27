import Header from "@/components/layout/header/header";
import { Product } from "@/lib/types";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/layout/footer/footer";
import Magnifier from "@/components/ui/magnifier/magnifier";
import Image from "next/image";

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
  },
  {
    id: "5",
    title: "Valencia Terra",
    description:
      "Soft and light plaid made of 100% cashmere in a neutral beige shade. Ideal for minimalistic interiors and cozy evenings.",
    image: "/valencia/VALENCIA ANTONIO.png",
    subCategoryId: "1"
  },
  {
    id: "6",
    title: "Marcel Terra",
    description:
      "Warm plaid with traditional Scottish pattern. The combination of natural and deep shades emphasizes the nobility of the material.",
    image: "/valencia/VALENCIA BOUCLE.png",
    subCategoryId: "2"
  },
  {
    id: "7",
    title: "Modena Terra",
    description:
      "Elegant plaid with different colors on each side – gray-blue and graphite. Versatile, suitable for home.",
    image: "/valencia/VALENCIA HARRY.png",
    subCategoryId: "3"
  },
  {
    id: "8",
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
    description: "М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.",
    image: "/images/product/valencia.png",
    subCategoryId: "1"
  },
  {
    id: "2",
    title: "Marcel Terra",
    description: "М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.",
    image: "/images/product/marcel.png",
    subCategoryId: "2"
  },
  {
    id: "3",
    title: "Modena Terra",
    description: "М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.",
    image: "/images/product/modena.png",
    subCategoryId: "3"
  },
  {
    id: "4",
    title: "Ontario Terra",
    description: "М'який і легкий плед зі 100% кашеміру нейтрального бежевого відтінку.",
    image: "/images/product/ontario.png",
    subCategoryId: "4"
  }
];

const categories = new Map([
  ["valencia", "Пледи Valencia"],
  ["toskana", "Покривала Toskana"],
  ["miami", "Ковдри Miami"],
  ["modena", "Пледи Modena"],
  ["marcel", "Покривала Marcel"],
  ["ontario", "Пледи Ontario"],
  ["oslo", "Ковдри Oslo"],
  ["elf", "Пледи Elf"]
]);

function capitalizeFirstLetter(str: string): string {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

interface CatalogProps {
  params: Promise<{
    subCategory: string;
  }>;
}

const Catalog = async ({ params }: CatalogProps) => {
  const resolvedParams = await params;
  let subCategory = decodeURIComponent(resolvedParams.subCategory);
  subCategory = categories.get(subCategory) || subCategory;

  return (
    <div className={`${noto.className} flex min-h-screen flex-col`}>
      <Header />

      <main
        className={`${noto.className} flex-1 bg-[#E8E2DB] bg-[url('/images/long-waves.png')] bg-cover bg-top bg-no-repeat px-4 pt-[130px] sm:px-6 lg:px-8`}
      >
        <div className="mx-auto w-full max-w-[1320px]">
          <div>
            <div className="rounded-lg border border-black bg-white p-[20px] sm:p-6 md:p-4 lg:p-[48px]">
              <div className="flex max-w-[300px] flex-wrap justify-start gap-1 text-sm text-[#9D978D] sm:text-base">
                <Link href="/">
                  <span className="opacity-50 hover:underline">Головна</span>
                </Link>
                <span className="opacity-50">/</span>
                <span className="text-[#27241F]">{capitalizeFirstLetter(subCategory)}</span>
              </div>

              <div
                className={`${playfair.className} mt-[14px] mb-4 text-[36px] tracking-tight text-[#27241F] uppercase sm:text-4xl md:mt-4 md:text-5xl lg:text-[68px]`}
              >
                {capitalizeFirstLetter(subCategory)}
              </div>
              <p className="max-w-[984px] text-base leading-[28px] sm:text-lg">
                &quot;Фамілія&quot; - це втілення вишуканого затишку та елегантності. Створений зі
                шляхетного поєднання супертонкої вовни і кашеміру, він вирізняється неймовірною
                м&apos;якістю, легкістю і здатністю чудово зберігати тепло. Найтонші волокна надають
                пледу шовковистої текстури, а кашемір - витонченої розкоші та благородного блиску.
              </p>
              <div className="mt-5 flex max-w-[1000px] flex-col justify-between gap-4 sm:flex-row sm:gap-0">
                <div>
                  <h3 className="text-sm font-bold sm:text-base">Склад виробу</h3>
                  <ul className="mt-[8px] list-disc pl-5 text-sm sm:text-base">
                    <li>90% ультратонка мериносова вовна</li>
                    <li className="mt-[4px]">10% кашемір</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold sm:text-base">Розмір</h3>
                  <ul className="mt-[8px] list-disc pl-5 text-sm sm:text-base">
                    <li>130×190 cm</li>
                    <li className="mt-[4px]">140×200 cm</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold sm:text-base">Вага</h3>
                  <ul className="mt-[8px] list-disc pl-5 text-sm sm:text-base">
                    <li className="mt-[4px]">200 г/м²</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold sm:text-base">Догляд</h3>
                  <ul className="mt-[8px] flex list-none text-sm sm:text-base">
                    <li className="mt-[4px]">
                      <Image src="/frames/methods.png" alt="Methods" width={260} height={34} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <div className="mt-5 grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 lg:grid-cols-3 xl:grid-cols-4">
                {allProducts.length > 0 ? (
                  allProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex h-[420px] w-full flex-col overflow-hidden rounded-lg border border-black bg-white sm:h-[380px] lg:h-[426px]"
                    >
                      <div className="relative h-[320px] w-full sm:h-[300px] lg:h-[356px]">
                        <Magnifier
                          src={product.image}
                          alt={product.title}
                          width={312}
                          height={356}
                        />
                      </div>
                      <div className="flex h-[100px] flex-col justify-center sm:h-auto sm:flex-1">
                        <div>
                          <h3 className="m-3 text-center text-lg text-[#27241F] sm:m-4 sm:text-xl lg:m-5 lg:text-2xl">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </div>
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
            <h1
              className={`${playfair.className} text-3xl uppercase sm:text-4xl md:text-5xl lg:text-[68px]`}
            >
              Вас можуть зацікавити
            </h1>
            <div className="mt-5 grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 lg:grid-cols-3 xl:grid-cols-4">
              {additionalProducts.length > 0 ? (
                additionalProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex h-[380px] w-full flex-col justify-between rounded-lg border border-[#797979] bg-white sm:h-[430px] lg:h-[490px]"
                  >
                    <div>
                      <div className="relative h-[250px] w-full sm:h-[300px] lg:h-[356px]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <div className="group relative p-3 sm:p-4 lg:p-5">
                        <h3 className="mt-1 mb-1 text-lg sm:text-xl lg:text-[24px]">
                          {product.title}
                        </h3>
                        <p
                          className="max-h-[80px] cursor-pointer overflow-hidden text-xs leading-[18px] text-gray-700 transition-all duration-300 group-hover:max-h-[500px] sm:max-h-[100px] sm:text-sm sm:leading-[22px]"
                          title={product.description}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
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
