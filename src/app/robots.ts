import type { MetadataRoute } from "next";
import { SITE_URL, NOINDEX } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Na stagingu zakázat vše (hlavní ochranu dělá i meta robots noindex).
  if (NOINDEX) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  // Produkce: povolit vše kromě interní design-system stránky.
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/design-system/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
