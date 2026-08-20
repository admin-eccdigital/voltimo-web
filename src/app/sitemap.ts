import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getSlugs } from "@/lib/poradna";

export const dynamic = "force-static";

// Veřejné routy (bez /design-system).
const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/elektrikar-za-10-dni", priority: 1 },
  { path: "/chlazeni", priority: 1 },
  { path: "/rekvalifikace", priority: 0.8 },
  { path: "/poradna", priority: 0.7 },
  { path: "/o-nas", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
  { path: "/kontakt", priority: 0.6 },
  { path: "/vop", priority: 0.3 },
  { path: "/gdpr", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}/`,
    lastModified: new Date("2026-08-05"),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const articleRoutes = getSlugs().map((slug) => ({
    url: `${SITE_URL}/poradna/${slug}/`,
    lastModified: new Date("2026-08-05"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
