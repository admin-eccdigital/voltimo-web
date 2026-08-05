import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { SITE_URL } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Středisko profesního vzdělávání VOLTIMO s.r.o. Učíme řemeslo tak, aby ho člověk uměl. Přeštice, Plzeňsko.",
  alternates: { canonical: `${SITE_URL}/o-nas/` },
  openGraph: {
    title: "O nás — Voltimo",
    description: "Středisko profesního vzdělávání VOLTIMO s.r.o. Učíme řemeslo tak, aby ho člověk uměl.",
  },
};

const BENEFITS: readonly { title: string; text: string; featured?: boolean }[] = [
  {
    title: "Učíme prakticky a přehledně",
    text: "Méně teorie, víc reálné práce. Vše si osaháte na skutečných zařízeních a hned víte, k čemu to je.",
  },
  {
    title: "Naši učitelé jsou odborníci",
    text: "Vedou vás lidé z praxe, ne přednášející od stolu. Poradí vám i s tím, na co se ve škole nikdo neptá.",
  },
  {
    title: "Připravíme vás na to, co vás čeká u zkoušky",
    text: "Projdete si zadání nanečisto, dostanete zpětnou vazbu a ke zkoušce jdete s jistotou, ne s nervy.",
  },
  {
    title: "Moderní učebna, reálné vybavení",
    text: "Cvičné panely, rozvaděče a nářadí jako na stavbě. Trénujete v podmínkách, které odpovídají praxi.",
  },
  {
    title: "Opravdové vzdělání, ne jen papír",
    text: "Nejde nám o razítko. Jde nám o to, abyste odcházeli s dovedností, kterou opravdu umíte použít.",
    featured: true,
  },
];

const GALLERY_THUMBS: readonly { src: string; alt: string; position?: string }[] = [
  { src: "prace-panel.jpg", alt: "Práce na panelu", position: "60% center" },
  { src: "rozvadec-praxe.jpg", alt: "Praxe na rozvaděči" },
  { src: "lektor-zak.jpg", alt: "Lektor s žákem" },
  { src: "studium-ucebna.jpg", alt: "Studium v učebně" },
  { src: "priprava-zkouska.jpg", alt: "Příprava ke zkoušce" },
];

export default function ONasPage() {
  return (
    <>
      {/* HERO */}
      <section className="onas-hero">
        <div className="onas-hero__inner">
          <div className="onas-hero__text">
            <Eyebrow>O nás</Eyebrow>
            <h1 className="onas-hero__h1">
              Středisko profesního vzdělávání{" "}
              <span className="onas-hero__accent">VOLTIMO s.r.o.</span>
            </h1>
            <p className="onas-hero__lead">
              Učíme řemeslo tak, aby ho člověk uměl. Ať už se chystáte začít
              novou kariéru, dodělat si kvalifikaci, nebo rozšířit, co umíte, a
              u nás najdete pevnou půdu pod nohama.
            </p>
            <p className="onas-hero__meta">
              Středisko profesního vzdělávání VOLTIMO s.r.o., Přeštice,
              IČO 08913757
            </p>
          </div>
          <div className="onas-hero__photo">
            <div className="onas-hero__photo-frame">
              <Image
                src={`${basePath}/photos/o-nas/hero-lektor.jpg`}
                alt="Lektor s žákem v učebně Voltimo"
                width={640}
                height={480}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <span className="onas-hero__badge">Přeštice · Plzeňsko</span>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="onas-gallery">
        <div className="onas-gallery__inner">
          <FadeIn>
            <div className="onas-gallery__head">
              <Eyebrow>Jak to u nás vypadá</Eyebrow>
              <Heading as="h2">
                Žádné fotky z fotobanky. Tohle je naše skutečné prostředí.
              </Heading>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="onas-gallery__main">
              <Image
                src={`${basePath}/photos/o-nas/ucebna-main.jpg`}
                alt="Učebna Voltimo v Přešticích"
                width={1200}
                height={514}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <span className="onas-gallery__label">
                Naše učebna · cvičné panely a reálné vybavení
              </span>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="onas-gallery__grid">
              {GALLERY_THUMBS.map((img) => (
                <div key={img.src} className="onas-gallery__thumb">
                  <Image
                    src={`${basePath}/photos/o-nas/${img.src}`}
                    alt={img.alt}
                    width={400}
                    height={300}
                    style={{
                      objectFit: "cover",
                      objectPosition: img.position ?? "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISE */}
      <section className="onas-mission">
        <FadeIn>
          <div className="onas-mission__inner">
            <Eyebrow>Naše mise</Eyebrow>
            <h2 className="onas-mission__h2">
              Děláme z lidí z praxe kvalifikované řemeslníky. V nejkratším čase
              a tak, aby odcházeli s jistotou a spokojení.
            </h2>
            <p className="onas-mission__text">
              Ve Středisku profesního vzdělávání VOLTIMO věříme, že{" "}
              <strong>dovednosti dávají člověku sebevědomí.</strong> A to
              sebevědomí otevírá dveře: k lepší práci, ke změně oboru,
              k nezávislosti.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* GOLDEN CIRCLE */}
      <section className="onas-golden">
        <div className="onas-golden__inner">
          <FadeIn>
            <Eyebrow className="onas-golden__eyebrow">
              Proč to děláme
            </Eyebrow>
          </FadeIn>
          <div className="onas-golden__items">
            <FadeIn>
              <div className="onas-golden__row onas-golden__row--border">
                <span className="onas-golden__word onas-golden__word--why">
                  Proč?
                </span>
                <p className="onas-golden__answer onas-golden__answer--lg">
                  Protože řemeslo umí změnit život. A v době AI bude ještě
                  cennější.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="onas-golden__row onas-golden__row--border">
                <span className="onas-golden__word onas-golden__word--how">
                  Jak?
                </span>
                <p className="onas-golden__answer onas-golden__answer--md">
                  Vytváříme podmínky, kde se může naučit každý, kdo má chuť
                  a odvahu.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="onas-golden__row">
                <span className="onas-golden__word onas-golden__word--what">
                  Co?
                </span>
                <p className="onas-golden__answer">
                  Příprava ke zkouškám NSK, praktické kurzy, odborné vedení.
                  Ale to je až na třetím místě.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROČ VOLTIMO */}
      <section className="onas-why">
        <div className="onas-why__inner">
          <div className="onas-why__sticky">
            <Eyebrow>Proč právě Voltimo</Eyebrow>
            <Heading as="h2">
              Protože vás chceme opravdu něco naučit.
            </Heading>
            <p className="onas-why__lead">
              Pomůžeme vám získat opravdovou kvalifikaci a odejít s tím, že
              víte, co děláte.
            </p>
            <div className="onas-why__photo">
              <Image
                src={`${basePath}/photos/o-nas/rozvadec-praxe.jpg`}
                alt="Praktický výcvik na rozvaděči ve Voltimo"
                width={440}
                height={352}
                style={{
                  objectFit: "cover",
                  objectPosition: "center 35%",
                  width: "100%",
                  height: "100%",
                }}
              />
              <span className="onas-why__photo-badge">
                Praxe na reálných zařízeních
              </span>
            </div>
          </div>
          <div className="onas-why__cards">
            {BENEFITS.map((b, i) => (
              <FadeIn key={i}>
                <div
                  className={`onas-why__card${b.featured ? " onas-why__card--featured" : ""}`}
                >
                  <span
                    className={`onas-why__num${b.featured ? " onas-why__num--featured" : ""}`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="onas-why__card-title">{b.title}</h3>
                    <p className="onas-why__card-text">{b.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="onas-quote">
        <FadeIn>
          <div className="onas-quote__inner">
            <span className="onas-quote__mark">„</span>
            <blockquote className="onas-quote__text">
              Není důležité, kolik toho umíš teď. Důležité je, že to{" "}
              <span className="onas-quote__accent">
                chceš umět pořádně.
              </span>{" "}
              A od toho jsme tady.
            </blockquote>
            <Button
              variant="cta"
              size="lg"
              icon={<ArrowRight />}
              href={`${basePath}/elektrikar-za-10-dni/`}
            >
              Nabídka kurzů
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
