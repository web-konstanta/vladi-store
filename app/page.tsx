import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import Hero from "../components/common/home/hero/hero";
import About from "../components/common/home/about/about";
import Catalog from "../components/common/home/catalog/catalog";
import ServiceList from "../components/common/home/services/service-list";
import Partners from "../components/common/home/partners/partners";
import Videos from "../components/common/home/videos/videos";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <ServiceList />
        <Catalog />
        <Videos />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
