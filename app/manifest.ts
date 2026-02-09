import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "disi.rs - Premium Trakice za Nos",
    short_name: "disi",
    description:
      "Premium trakice za nos za bolje disanje i smanjenje hrkanja. Poručite online sa brzom dostavom u Srbiji.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
