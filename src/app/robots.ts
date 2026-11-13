import type { MetadataRoute } from "next";
import { SITE_URL, NOINDEX } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Na stagingu zakázat vše (hlavní ochranu dělá i meta robots noindex).
  if (NOINDEX) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  // Produkce: povolit vše kromě interní design-system stránky
  // a sekce /f-plyny/ (zatím mimo index, přístupná jen přímým odkazem).
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/design-system/", "/f-plyny/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
