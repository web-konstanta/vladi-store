import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  // CDN можно включить для продакшн, но это может кешировать данные до 24 часов
  // Для разработки лучше отключить: useCdn: false
  useCdn: process.env.NODE_ENV === "production" && process.env.SANITY_USE_CDN !== "false",
  token: process.env.SANITY_API_READ_TOKEN
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to get image URL with specific dimensions
export function getImageUrl(source: SanityImageSource, width?: number, height?: number) {
  if (!source) {
    return null;
  }

  let url = urlFor(source);

  if (width) {
    url = url.width(width);
  }

  if (height) {
    url = url.height(height);
  }

  return url.url();
}
