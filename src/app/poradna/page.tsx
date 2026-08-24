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
  const entries = PORADNA_ENTRIES.filter((e) => e.href);

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

      <section className="poradna-list">
        <div className="poradna-list__grid">
          {articles.map((a) => (
            <a
              className="poradna-listcard"
              href={`${basePath}/poradna/${a.slug}/`}
              key={a.slug}
            >
              {a.hero && (
                <span className="poradna-listcard__img">
                  <Image
                    src={`${basePath}/photos/${a.hero}`}
                    alt={a.heroAlt ?? a.title}
                    width={640}
                    height={360}
                  />
                </span>
              )}
              <span className="poradna-listcard__body">
                <span className="poradna-listcard__cat">{a.category}</span>
                <h2>{a.title}</h2>
                <p>{a.description}</p>
                <span className="poradna-listcard__go">
                  Číst článek <ArrowRight size={17} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="poradna-entries">
        <div className="poradna-entries__grid">
          <p className="poradna-entries__cap">Co potřebujete řešit?</p>
          <div className="poradna-entries__row">
            {entries.map((e) => (
              <a
                className="poradna-entry"
                href={`${basePath}${e.href}`}
                key={e.label}
              >
                <strong>{e.label}</strong>
                <span>{e.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
