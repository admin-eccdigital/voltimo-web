import { Check, X, Briefcase, ClipboardCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

const YES = [
  "Chcete změnit obor a začít v elektrotechnice od nuly",
  "Jste v evidenci úřadu práce a hledáte uplatnění",
  "Pracujete manuálně a chcete lépe placenou práci s budoucností",
  "Děláte údržbu, fotovoltaiku nebo hobby elektro a chcete to dělat oficiálně",
];

const NO = [
  "Kdo chce dělat revizního technika — na to je potřeba škola",
  "Kdo hledá čistě teoretický kurz na dálku",
];

export function LpAudienceB() {
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Pro koho je to ideální</Eyebrow>
          <Heading level={2}>
            Měníte obor? Přesně pro vás to děláme.
          </Heading>
        </div>
        <div className="lp-aud">
          <div className="lp-aud__card">
            <h3 className="lp-aud__title">
              <span className="lp-aud__mark lp-aud__mark--yes">
                <Check />
              </span>
              Tohle je pro vás
            </h3>
            <ul className="lp-aud__list lp-aud__list--yes">
              {YES.map((t) => (
                <li key={t}>
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lp-aud__card lp-aud__card--no">
            <h3 className="lp-aud__title">
              <span className="lp-aud__mark lp-aud__mark--no">
                <X />
              </span>
              Tohle pro vás není
            </h3>
            <ul className="lp-aud__list lp-aud__list--no">
              {NO.map((t) => (
                <li key={t}>
                  <X />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lp-aud__note">
          <span className="lp-aud__note-ic">
            <Briefcase />
          </span>
          <p>
            <strong>Elektrotechnika je obor s budoucností.</strong>{" "}
            Elektrikářů je nedostatek a poptávka roste. S osvědčením
            máte jistotu práce i slušný výdělek — ať už jako zaměstnanec,
            nebo na vlastní živnost.
          </p>
        </div>

        <div className="lp-aud__note">
          <span className="lp-aud__note-ic">
            <ClipboardCheck />
          </span>
          <p>
            <strong>Požadavky:</strong> je vám 18 let a doložíte zdravotní
            způsobilost od lékaře. Předchozí vzdělání ani praxe v oboru
            nejsou podmínkou — naučíme vás vše od základů.
          </p>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
