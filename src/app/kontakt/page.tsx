import type { Metadata } from "next";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import { Button, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { JsonLd } from "@/components/site";
import { SITE_URL, ORG } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Středisko profesního vzdělávání VOLTIMO s.r.o. Telefon +420 601 002 989, e-mail info@voltimo.cz, Husova 380, Přeštice.",
  alternates: { canonical: `${SITE_URL}/kontakt/` },
  openGraph: {
    title: "Kontakt — Voltimo",
    description: "Telefon +420 601 002 989, e-mail info@voltimo.cz. Husova 380, Přeštice.",
  },
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: ORG.legalName,
  url: `${SITE_URL}/`,
  telephone: ORG.phone,
  email: ORG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG.street,
    addressLocality: ORG.city,
    postalCode: ORG.zip,
    addressCountry: ORG.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={contactLd} />
      {/* HERO */}
      <section className="kt-hero">
        <div className="kt-hero__grid" aria-hidden="true" />
        <div className="kt-hero__inner">
          <Eyebrow>Kontakt</Eyebrow>
          <h1 className="kt-hero__h1">Kontaktujte nás</h1>
          <p className="kt-hero__sub">
            Středisko profesního vzdělávání VOLTIMO s.r.o.
          </p>
        </div>
      </section>

      {/* KONTAKTNÍ BLOKY */}
      <section className="kt-blocks">
        <div className="kt-blocks__grid-bg" aria-hidden="true" />
        <div className="kt-blocks__inner">
          {/* Featured: telefon */}
          <FadeIn>
            <div className="kt-phone">
              <div className="kt-phone__text">
                <span className="kt-phone__label">
                  <PhoneCall size={16} /> Zavolejte nám
                </span>
                <a href="tel:+420601002989" className="kt-phone__number">
                  +420 601 002 989
                </a>
                <span className="kt-phone__note">
                  Po–pá 9:00–17:00 · nebo nám nechte číslo a ozveme se
                </span>
              </div>
              <Button variant="cta" size="lg" href="tel:+420601002989">
                Zavolat
              </Button>
            </div>
          </FadeIn>

          {/* 3 karty */}
          <FadeIn>
            <div className="kt-cards">
              <a href="mailto:info@voltimo.cz" className="kt-card">
                <span className="kt-card__icon">
                  <Mail size={22} />
                </span>
                <span className="kt-card__label">E-mail</span>
                <span className="kt-card__value">info@voltimo.cz</span>
                <span className="kt-card__desc">
                  Napište nám kdykoliv, odpovídáme do druhého dne.
                </span>
              </a>
              <a
                href="https://mapy.cz/?q=Husova%20380%20P%C5%99e%C5%A1tice"
                target="_blank"
                rel="noopener noreferrer"
                className="kt-card"
              >
                <span className="kt-card__icon">
                  <MapPin size={22} />
                </span>
                <span className="kt-card__label">Adresa</span>
                <span className="kt-card__value">
                  Husova 380
                  <br />
                  334 01 Přeštice
                </span>
                <span className="kt-card__desc">
                  Areál STS Přeštice, budova B, přízemí. Při vstupu chodbou
                  doleva.
                </span>
                <span className="kt-card__link">
                  Zobrazit na mapě <ArrowUpRight size={15} />
                </span>
              </a>
              <div className="kt-card">
                <span className="kt-card__icon">
                  <Clock size={22} />
                </span>
                <span className="kt-card__label">Provozní doba</span>
                <span className="kt-card__value">Pondělí až pátek</span>
                <span className="kt-card__desc">9:00 – 17:00</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MAPA */}
      <section className="kt-map">
        <FadeIn>
          <div className="kt-map__inner">
            <div className="kt-map__frame">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.3069%2C49.5701%2C13.3269%2C49.5801&amp;layer=mapnik&amp;marker=49.5751%2C13.3169"
                className="kt-map__iframe"
                loading="lazy"
                title="Mapa — Husova 380, Přeštice"
              />
              <a
                href="https://mapy.cz/?q=Husova%20380%20P%C5%99e%C5%A1tice"
                target="_blank"
                rel="noopener noreferrer"
                className="kt-map__btn"
              >
                <Navigation size={15} /> Najít cestu
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="kt-cta">
        <FadeIn>
          <div className="kt-cta__inner">
            <Heading as="h2">Máte dotazy?</Heading>
            <p className="kt-cta__text">
              Zavolejte nám na{" "}
              <strong className="kt-cta__strong">+420 601 002 989</strong>.
              Nebo nám na sebe nechte číslo a my se vám co nejdříve ozveme.
            </p>
            <div className="kt-cta__actions">
              <Button variant="cta" size="lg" href="tel:+420601002989">
                Zavolat
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`${basePath}/elektrikar-za-10-dni/#registrace`}
              >
                Rezervovat termín
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
