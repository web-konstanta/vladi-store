import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import ProductDetails from "@/components/common/catalog/product-details";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto"
});

interface CatalogProps {
  params: Promise<{
    subCategory: string;
  }>;
}

const Catalog = async ({ params }: CatalogProps) => {
  const resolvedParams = await params;
  const subCategory = decodeURIComponent(resolvedParams.subCategory);

  return (
    <div className={`${noto.className} flex min-h-screen flex-col`}>
      <Header />

      <main
        className={`${noto.className} flex-1 bg-[#E8E2DB] bg-[url('/images/long-waves.png')] bg-cover bg-top bg-no-repeat px-4 pt-[130px] sm:px-6 lg:px-8`}
      >
        <ProductDetails subCategory={subCategory} />
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
