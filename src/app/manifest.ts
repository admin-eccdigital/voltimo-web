import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Voltimo — Středisko profesního vzdělávání",
    short_name: "Voltimo",
    description:
      "Výcvik, zkoušky a státní osvědčení Elektrikář za 10 dní.",
    lang: "cs",
    start_url: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1E3876",
    icons: [
      { src: `${BASE_PATH}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${BASE_PATH}/icons/icon-512.png`, sizes: "512x512", type: "image/png" },
      {
        src: `${BASE_PATH}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
