import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CatalogProvider } from "../context/catalog-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vladi Store",
  description: "Luxury home textiles"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CatalogProvider>{children}</CatalogProvider>
      </body>
    </html>
  );
}
