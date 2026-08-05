// Centrální konfigurace webu. Přepínání staging ↔ produkce řeší next.config.ts
// přes proměnnou SITE_ENV — tenhle soubor jen čte výsledné hodnoty z env.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Origin bez cesty, např. https://admin-eccdigital.github.io nebo https://www.voltimo.cz */
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://admin-eccdigital.github.io";

/** Plná adresa webu včetně případného basePath (staging). */
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

/** Na stagingu true → celý web se neindexuje. Na produkci prázdné. */
export const NOINDEX = (process.env.NEXT_PUBLIC_NOINDEX ?? "") === "true";

/** GTM kontejner. Veškeré měření (GA4, Ads, Sklik, FB) se konfiguruje v něm. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/** Firemní / kontaktní údaje pro strukturovaná data a patičku. */
export const ORG = {
  legalName: "Středisko profesního vzdělávání VOLTIMO s.r.o.",
  name: "Voltimo",
  street: "Husova 380",
  city: "Přeštice",
  zip: "334 01",
  region: "Plzeňský kraj",
  country: "CZ",
  ico: "08913757",
  phone: "+420 601 002 989",
  email: "info@voltimo.cz",
} as const;
