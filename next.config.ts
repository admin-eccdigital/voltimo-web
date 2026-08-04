import type { NextConfig } from "next";

// Jeden přepínač: SITE_ENV=production přepne build na voltimo.cz.
// Staging (výchozí) běží na GitHub Pages pod /voltimo-staging.
const isProd = process.env.SITE_ENV === "production";

const basePath = isProd ? "" : (process.env.BASE_PATH ?? "/voltimo-staging");
const siteOrigin = isProd
  ? "https://www.voltimo.cz"
  : "https://admin-eccdigital.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
    // Staging se neindexuje; na produkci se noindex vypne.
    NEXT_PUBLIC_NOINDEX: isProd ? "" : "true",
    // GA4 Measurement ID – nastav přes prostředí (CI secret) až bude k dispozici.
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? "",
  },
};

export default nextConfig;
