import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Heading } from "@/components/brand";
import { SITE_URL } from "@/lib/site";
import { getAllArticles, PORADNA_ENTRIES } from "@/lib/poradna";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Voltimo poradna — rady a návody k elektro kvalifikacím",
  description:
    "Vysvětlujeme kvalifikace, § 6 a § 7, rekvalifikace, zkoušky i věci z praxe tak, aby jim rozuměl normální člověk. Poradna Voltima.",
  alternates: { canonical: `${SITE_URL}/poradna/` },
};

export default function PoradnaPage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <section className="poradna-hero">
        <div className="poradna-hero__inner">
          <Eyebrow>Voltimo poradna</Eyebrow>
          <Heading as="h1">Rady, návody a svět řemesla</Heading>
          <p className="poradna-hero__lead">
            Elektro nemusí být složité. Vysvětlujeme kvalifikace, legislativu i
            věci z praxe tak, aby jim rozuměl normální člověk.
          </p>
        </div>
      </section>

      {featured && (
        <section className="poradna-featured">
          <a
            className="poradna-featured__card"
            href={`${basePath}/poradna/${featured.slug}/`}
          >
            {featured.hero && (
              <div className="poradna-featured__img">
                <Image
                  src={`${basePath}/photos/${featured.hero}`}
                  alt={featured.heroAlt ?? featured.title}
                  width={760}
                  height={520}
                />
              </div>
            )}
            <div className="poradna-featured__body">
              <span className="poradna-featured__tag">Doporučený článek</span>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <span className="poradna-featured__go">
                Číst článek <ArrowRight size={18} />
              </span>
            </div>
          </a>
        </section>
      )}

      <section className="poradna-entries">
        <div className="poradna-entries__grid">
          {PORADNA_ENTRIES.map((e) => (
            <div className="poradna-entry" key={e.label}>
              <strong>{e.label}</strong>
              <span>{e.note}</span>
            </div>
          ))}
        </div>
      </section>

      {rest.length > 0 && (
        <section className="poradna-list">
          <div className="poradna-list__grid">
            {rest.map((a) => (
              <a
                className="poradna-listcard"
                href={`${basePath}/poradna/${a.slug}/`}
                key={a.slug}
              >
                <span className="poradna-listcard__cat">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
