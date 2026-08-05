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
    // GTM kontejner www.voltimo.cz. Veškeré měření (GA4, Ads, Sklik, FB)
    // se konfiguruje uvnitř kontejneru, ne v kódu.
    // Staging je záměrně bez měření, aby netekl do produkčních dat —
    // pro test lze přes env podstrčit testovací kontejner.
    NEXT_PUBLIC_GTM_ID:
      process.env.NEXT_PUBLIC_GTM_ID ?? (isProd ? "GTM-PZ8XMNPH" : ""),
  },
};

export default nextConfig;
