import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CatalogProvider } from "../context/catalog-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Vladi Store",
  description: "Luxury home textiles"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CatalogProvider>{children}</CatalogProvider>
      </body>
    </html>
  );
}
