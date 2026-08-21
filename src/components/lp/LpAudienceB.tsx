import Image from "next/image";
import { Check, ShieldCheck, Briefcase, ClipboardCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const WHY = [
  "Elektrikářů je nedostatek — práce je hned",
  "Průměrný výdělek 45 000 Kč měsíčně",
  "Po roce praxe si můžete otevřít vlastní živnost",
  "Školu ani předchozí praxi nepotřebujete",
];

const GALLERY = [
  { src: "05-rozvadec-praxe.jpg", alt: "Praktická práce na rozvaděči" },
  { src: "10-ucebna-bez-lidi.jpg", alt: "Učebna Voltimo v Přešticích" },
  { src: "homepage/lektor-panel.jpg", alt: "Lektor s žákem u panelu" },
  { src: "homepage/kurz-rozvadec.jpg", alt: "Výcvik na reálném rozvaděči" },
];

export function LpAudienceB() {
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Proč zrovna elektro</Eyebrow>
          <Heading level={2}>Obor s budoucností. A vy v něm za 10 dní.</Heading>
        </div>

        <div className="lp-aud">
          <div className="lp-aud__card">
            <h3 className="lp-aud__title">
              <span className="lp-aud__mark lp-aud__mark--yes"><Briefcase /></span>
              Proč to dává smysl
            </h3>
            <ul className="lp-aud__list lp-aud__list--yes">
              {WHY.map((t) => (
                <li key={t}><Check /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="lp-aud__card">
            <h3 className="lp-aud__title">
              <span className="lp-aud__mark lp-aud__mark--yes"><ShieldCheck /></span>
              Bez rizika
            </h3>
            <ul className="lp-aud__list lp-aud__list--yes">
              <li><Check /><span>Záruka prvního dne — vrátíme peníze</span></li>
              <li><Check /><span>96 % účastníků projde zkouškou napoprvé</span></li>
              <li><Check /><span>Začínáme od základů, zvládnete to</span></li>
            </ul>
          </div>
        </div>

        <div className="lp-aud__note">
          <span className="lp-aud__note-ic"><ClipboardCheck /></span>
          <p>
            <strong>Stačí vám 18 let a zdravotní způsobilost.</strong>{" "}
            Výuční list ani praxe nejsou podmínkou.
          </p>
        </div>

        <div className="chl-gal" style={{ marginTop: 32 }}>
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
