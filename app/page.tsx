import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative flex items-center justify-center min-h-[660px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/main.gif"
              alt="Анимация"
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>

          <div className="relative z-10 text-center px-4 max-h-[660px]">
            <h1 className="text-9xl font-bold text-black mb-4">VLADI</h1>
            <p className="text-white">
              Natural blankets and plaids from Ukraine. Discover our collection,
              created with love and care.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
