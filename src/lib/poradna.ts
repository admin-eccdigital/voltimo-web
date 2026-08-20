import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content/poradna");

export type PoradnaFaq = { q: string; a: string };
export type PoradnaCta = {
  heading: string;
  text: string;
  label: string;
  href: string;
};
export type PoradnaRelated = { label: string; href?: string };
export type PoradnaTocItem = { id: string; label: string };

export interface PoradnaMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  kicker: string;
  category: string;
  answer: string;
  readingMinutes: number;
  updated: string;
  hero?: string;
  heroAlt?: string;
  cta: PoradnaCta;
  faq: PoradnaFaq[];
  related: PoradnaRelated[];
}

export interface PoradnaArticle extends PoradnaMeta {
  body: string;
  toc: PoradnaTocItem[];
}

// Stejná logika pro id nadpisů (kotvy) i položky obsahu, ať odkazy sedí.
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractToc(body: string): PoradnaTocItem[] {
  const toc: PoradnaTocItem[] = [];
  for (const line of body.split("\n")) {
    const m = /^##\s+(.+?)\s*$/.exec(line);
    if (m) {
      const label = m[1].replace(/[*_`]/g, "").trim();
      toc.push({ id: slugifyHeading(label), label });
    }
  }
  return toc;
}

export function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticle(slug: string): PoradnaArticle {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const meta = data as Partial<PoradnaMeta>;
  const rt = readingTime(content);
  return {
    slug,
    title: meta.title ?? slug,
    seoTitle: meta.seoTitle,
    description: meta.description ?? "",
    kicker: meta.kicker ?? "",
    category: meta.category ?? "",
    answer: meta.answer ?? "",
    readingMinutes: meta.readingMinutes ?? Math.max(1, Math.round(rt.minutes)),
    updated: meta.updated ?? "2026",
    hero: meta.hero,
    heroAlt: meta.heroAlt,
    cta: meta.cta as PoradnaCta,
    faq: (meta.faq as PoradnaFaq[]) ?? [],
    related: (meta.related as PoradnaRelated[]) ?? [],
    body: content,
    toc: extractToc(content),
  };
}

export function getAllArticles(): PoradnaArticle[] {
  return getSlugs()
    .map(getArticle)
    .sort((a, b) => a.title.localeCompare(b.title, "cs"));
}

// Tematické vstupy na hlavní stránce poradny (dle koncepce).
export const PORADNA_ENTRIES: readonly { label: string; note: string }[] = [
  { label: "Chci se stát elektrikářem", note: "Cesta ke kvalifikaci od nuly i s praxí" },
  { label: "Potřebuji § 6 / § 7", note: "Odborná způsobilost podle NV 194/2022 Sb." },
  { label: "Rekvalifikace přes ÚP", note: "Kdo na ni má nárok a jak postupovat" },
  { label: "Elektro z praxe", note: "Rozvaděče, jističe, chrániče, měření" },
  { label: "Chlazení a F-plyny", note: "Kvalifikace, zkoušky a servisní praxe" },
];
