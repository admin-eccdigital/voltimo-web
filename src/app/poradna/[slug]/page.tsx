import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/site";
import { SITE_URL, ORG } from "@/lib/site";
import { getSlugs, getArticle } from "@/lib/poradna";
import { mdxComponents } from "@/components/poradna/MdxComponents";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

function withBase(href: string): string {
  return href.startsWith("/") ? `${basePath}${href}` : href;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  const url = `${SITE_URL}/poradna/${slug}/`;
  return {
    // seoTitle už obsahuje „| Voltimo", tak obejdeme šablonu (jinak dvojitě).
    title: a.seoTitle ? { absolute: a.seoTitle } : a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle ?? a.title,
      description: a.description,
      url,
      type: "article",
    },
  };
}

export default async function PoradnaArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();
  const a = getArticle(slug);
  const url = `${SITE_URL}/poradna/${slug}/`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    inLanguage: "cs",
    mainEntityOfPage: url,
    dateModified: `${a.updated}-01-01`,
    author: { "@type": "Organization", name: ORG.legalName },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ORG.legalName,
    },
    ...(a.hero ? { image: `${SITE_URL}/photos/${a.hero}` } : {}),
  };

  const faqLd =
    a.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: a.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <article className="poradna-article">
        <div className="poradna-article__wrap">
          <nav className="poradna-crumbs" aria-label="Drobečková navigace">
            <a href={`${basePath}/`}>Voltimo</a> ›{" "}
            <a href={`${basePath}/poradna/`}>Poradna</a> ›{" "}
            <span>{a.kicker || a.title}</span>
          </nav>

          <header className="poradna-article__head">
            {a.kicker && (
              <span className="poradna-article__kicker">{a.kicker}</span>
            )}
            <h1 className="poradna-article__title">{a.title}</h1>
            <p className="poradna-article__meta">
              Aktualizováno {a.updated} · čtení {a.readingMinutes} min ·{" "}
              {a.category}
            </p>
          </header>

          {a.hero && (
            <div className="poradna-article__hero">
              <Image
                src={`${basePath}/photos/${a.hero}`}
                alt={a.heroAlt ?? a.title}
                width={1200}
                height={640}
                priority
              />
            </div>
          )}

          {a.answer && (
            <div className="poradna-answer">
              <strong>Krátká odpověď:</strong> {a.answer}
            </div>
          )}

          {a.toc.length > 1 && (
            <nav className="poradna-toc" aria-label="Obsah článku">
              <b>Co v článku najdete</b>
              <ol>
                {a.toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>{t.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="poradna-body">
            <MDXRemote
              source={a.body}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {a.cta && (
            <div className="poradna-cta">
              <h3>{a.cta.heading}</h3>
              <p>{a.cta.text}</p>
              <a className="poradna-cta__btn" href={withBase(a.cta.href)}>
                {a.cta.label} <ArrowRight size={18} />
              </a>
            </div>
          )}

          {a.faq.length > 0 && (
            <section className="poradna-faq">
              <h2>Nejčastější dotazy</h2>
              {a.faq.map((f, i) => (
                <details key={i}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>
          )}

          {a.related.length > 0 && (
            <aside className="poradna-related">
              <b>Doporučené související články</b>
              {a.related.map((r, i) =>
                r.href ? (
                  <a key={i} href={withBase(r.href)}>
                    {r.label}
                  </a>
                ) : (
                  <span key={i} className="poradna-related__soon">
                    {r.label} <em>připravujeme</em>
                  </span>
                ),
              )}
            </aside>
          )}

          <p className="poradna-note">
            Článek popisuje obecný postup platný k roku {a.updated}. Konkrétní
            podmínky si vždy ověřte pro svou situaci.
          </p>
        </div>
      </article>
    </>
  );
}
