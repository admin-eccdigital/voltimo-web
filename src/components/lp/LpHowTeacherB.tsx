import Image from "next/image";
import { Hammer, ClipboardCheck, ArrowRight, MapPin } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const GALLERY = [
  { src: "05-rozvadec-praxe.jpg", alt: "Praktická práce na rozvaděči" },
  { src: "10-ucebna-bez-lidi.jpg", alt: "Učebna Voltimo v Přešticích" },
  { src: "06-foto-landscape-doplnek.jpg", alt: "Teoretická příprava v učebně" },
  { src: "o-nas/prace-panel.jpg", alt: "Účastník kurzu při zapojování" },
];

export function LpHowTeacherB() {
  return (
    <Section tone="dark">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow tone="ondark">Jak to reálně běží</Eyebrow>
          <Heading level={2} ondark>
            10 dní. Týden příprava, týden zkoušky.
          </Heading>
        </div>

        <div className="lp-how">
          <div className="lp-week">
            <span className="lp-week__tag">
              <Hammer /> 1. týden
            </span>
            <h3 className="lp-week__title">Příprava</h3>
            <div className="lp-week__days">
              {[0, 1, 2, 3, 4].map((i) => (
                <span className="lp-week__day" key={i} />
              ))}
            </div>
            <p className="lp-week__p">
              5 dní praktického výcviku v dílně. Trénujete na reálných
              rozvaděčích a instalacích, ne u tabule.
            </p>
          </div>
          <div className="lp-week">
            <span className="lp-week__tag">
              <ClipboardCheck /> 2. týden
            </span>
            <h3 className="lp-week__title">Zkoušky</h3>
            <div className="lp-week__days">
              {[0, 1, 2, 3, 4].map((i) => (
                <span className="lp-week__day lp-week__day--exam" key={i} />
              ))}
            </div>
            <p className="lp-week__p">
              5 dní zkoušek z 5 profesních kvalifikací před autorizovanou
              osobou. Zakončeno §6.
            </p>
          </div>
        </div>

        <div className="lp-how__facts">
          <div className="lp-fact">
            <strong>10 dní</strong>
            <small>celkem do osvědčení</small>
          </div>
          <div className="lp-fact">
            <strong>5 × 8 h</strong>
            <small>denně se pracuje</small>
          </div>
          <div className="lp-fact">
            <strong>40 h</strong>
            <small>praktického výcviku</small>
          </div>
        </div>

        <div className="lp-why" style={{ marginTop: "3rem" }}>
          <div className="lp-why__media">
            <div className="lp-teacher">
              <Image
                src={`${basePath}/photos/lektor.jpg`}
                alt="Mistr odborného výcviku – 30 let praxe"
                fill
                sizes="(max-width: 920px) 360px, 40vw"
                style={{ objectFit: "cover", objectPosition: "62% 30%" }}
              />
              <div className="lp-teacher__cap">
                <strong>Bohumír Sobotka</strong>
                <span>Mistr odborného výcviku · 30 let praxe</span>
              </div>
            </div>
          </div>

          <div>
            <div className="lp-head">
              <Eyebrow tone="ondark">Proč 10 dní stačí</Eyebrow>
              <Heading level={3} ondark>
                30 let praxe. Zbavených balastu.
              </Heading>
            </div>
            <p className="lp-why__lead" style={{ color: "var(--c-text-inv)" }}>
              Náš lektor učí odborný výcvik 30 let. Přesně ví, co se ve škole
              učí zbytečně a co potřebujete hned první den v práci.
            </p>

            <div className="lp-why__distill">
              <div className="lp-distill-card">
                <strong>30 let</strong>
                <small>praxe v oboru</small>
              </div>
              <span className="lp-distill-arrow">
                <ArrowRight />
              </span>
              <div className="lp-distill-card lp-distill-card--hi">
                <strong>40 hodin</strong>
                <small>jen to podstatné</small>
              </div>
            </div>
          </div>
        </div>

        <div className="lp-runs" style={{ marginTop: "2rem" }}>
          <span className="lp-runs__ic">
            <MapPin />
          </span>
          <p>
            <strong>
              Učí se u nás osobně, v Přešticích na Plzeňsku.
            </strong>{" "}
            Prezenční výcvik v reálné dílně. Na řemeslo si musíte sáhnout.
          </p>
        </div>

        <div className="chl-gal" style={{ marginTop: "2rem" }}>
          {GALLERY.map((g) => (
            <FadeIn key={g.src}>
              <figure className="chl-gal__item">
                <Image
                  src={`${basePath}/photos/${g.src}`}
                  alt={g.alt}
                  width={800}
                  height={600}
                />
                <figcaption>{g.alt}</figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
