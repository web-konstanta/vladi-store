import Header from "@/components/layout/header/header";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair"
});

const mockProduct = {
  id: "1",
  title: "Valencia Terra",
  description:
    "Vaalenсia is a plaid that combines softness, aesthetics and practicality. It is designed for those who appreciate comfort in details and want to surround themselves with quality, tactilely pleasant materials.",
  image: "/images/product/valencia.png",
  composition: ["70% cotton", "30% microfiber"],
  sizes: ["130 × 170 CM", "150 × 200 CM", "180 × 220 CM"],
  category: "Valencia"
};

const ProductCategory = () => {
  // const { id } = params;
  const product = mockProduct;

  if (!product) {
    return <div className="text-center text-lg text-gray-600">Product not found.</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-[#E8E2DB] pt-8 pb-10 md:pb-[153px]">
        <div className="container mx-auto px-4">
          <div className="mt-[50px] mb-4 text-[18px] text-gray-600">
            <Link href="/">
              <span className="opacity-50 hover:underline">Home</span>
            </Link>
            {" / "}
            <Link href="/catalog/valencia" className="opacity-50 hover:underline">
              <span>{product.category}</span>
            </Link>
            {" / "}
            <span>{product.title}</span>
          </div>

          <div className="mt-[40px] grid grid-cols-1 items-start md:grid-cols-2">
            <div className="relative h-[648px] max-w-[750px] overflow-hidden bg-gray-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex max-w-[536px] m-auto flex-col">
              <h1
                className={`${playfair.className} mb-6 mt-5 md:mt-[-20px] text-center text-[45px] leading-[1.1] font-semibold tracking-tight text-[#27241F] uppercase md:text-left md:text-[86px]`}
              >
                {product.title}
              </h1>
              <p className="mb-6 mt-2 text-lg text-gray-700">{product.description}</p>

              <h2 className="mb-3 text-xl font-semibold text-[#27241F]">Product composition</h2>
              <ul className="mb-6 list-inside list-disc text-lg text-gray-700">
                {product.composition.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="mb-3 text-xl font-semibold text-[#27241F] mt-2">Size</h2>
              <div className="mb-6 flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="rounded-lg border border-black px-6 py-3 text-gray-700 transition-colors duration-500 hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button className="mt-2 w-full rounded-lg border border-black bg-inherit px-8 py-4 text-lg font-medium text-[#27241F] transition-colors duration-500 hover:bg-white sm:max-w-none">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductCategory;
