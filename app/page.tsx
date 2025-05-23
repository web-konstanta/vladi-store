import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import Hero from "./components/common/hero/hero";
import About from "./components/common/about/about";
import Catalog from "./components/common/catalog/catalog";
import ServiceList from "./components/common/services/service-list";
import CategoryList from "./components/common/categories/category-list";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Catalog />
        <ServiceList />
        <CategoryList />
      </main>

      <Footer />
    </div>
  );
}
