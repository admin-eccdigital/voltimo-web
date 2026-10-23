import { Check, X, Wrench, ClipboardCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

const YES = [
  "Zedník, údržbář, OSVČ nebo hodinový manžel, co elektriku reálně dělá",
  "Kdo nedodělal učňák nebo střední a chce konečně papír",
  "Montér fotovoltaiky nebo chlazení, který se elektriky denně dotýká",
  "Zkušený z oboru, co potřebuje jen §6 pro samostatnou práci",
  "Manuálně zručný člověk, co umí se šroubovákem",
];

const NO = [
  "Kdo chce dělat revizního technika, na to potřebuje školu",
  "Kdo chce pochopit elektriku do posledního detailu",
];

export function LpAudience() {
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Pro koho to je</Eyebrow>
          <Heading level={2}>
            Nemusíte mít školu. Stačí mít ruce a chuť.
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
            <Wrench />
          </span>
          <p>
            <strong>Umíte se šroubovákem? Pak jste pro nás dobrý uchazeč.</strong>{" "}
            Ze zručného člověka uděláme kvalifikovaného. Rok pak ještě děláte
            pod někým zkušenějším, než jedete úplně sami. Ale start máte za 10
            dní.
          </p>
        </div>

        <div className="lp-aud__note">
          <span className="lp-aud__note-ic">
            <ClipboardCheck />
          </span>
          <p>
            <strong>Požadavky:</strong> je vám 18 let a doložíte zdravotní
            způsobilost od lékaře. Výuční list ani praxe nejsou podmínkou.
          </p>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
