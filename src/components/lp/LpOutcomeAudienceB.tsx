import { Check, CheckCircle, Award, Briefcase, ClipboardCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

const PKS = [
  "Montér elektrických instalací",
  "Montér elektrických rozvaděčů",
  "Montér slaboproudých rozvodů",
  "Montér hromosvodů",
  "Montér elektrických sítí",
];

const WHY = [
  "Elektrikářů je nedostatek — práce je hned",
  "Průměrný výdělek 45 000 Kč měsíčně",
  "Po roce praxe si můžete otevřít vlastní živnost",
  "Školu ani předchozí praxi nepotřebujete",
];

export function LpOutcomeAudienceB() {
  return (
    <Section tone="light">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-outcome">
          <div>
            <div className="lp-head">
              <Eyebrow>Co získáte</Eyebrow>
              <Heading level={2}>Státní osvědčení Elektrikář.</Heading>
              <p className="lp-head__sub">
                Úplná profesní kvalifikace — 5 dílčích kvalifikací zakončených
                zkouškou §6. Celostátně uznávaný doklad, se kterým můžete
                pracovat hned.
              </p>
            </div>
            <ul className="lp-outcome__list">
              <li>
                <span className="lp-check"><Check /></span>
                Státní osvědčení o úplné profesní kvalifikaci.
              </li>
              <li>
                <span className="lp-check"><Check /></span>
                §6 – odborná způsobilost pro samostatnou práci.
              </li>
              <li>
                <span className="lp-check"><Check /></span>
                Po roce praxe pod dohledem můžete na vlastní živnost.
              </li>
            </ul>
          </div>

          <div className="lp-cert">
            <div className="lp-cert__ribbon">Státem uznané</div>
            <span className="lp-cert__kicker">Úplná profesní kvalifikace</span>
            <h3 className="lp-cert__title">Elektrikář</h3>
            <p className="lp-cert__meta">
              5 profesních kvalifikací · zkouška §6 · NV 194/2022 Sb.
            </p>
            <ul className="lp-cert__pks">
              {PKS.map((p) => (
                <li key={p}>
                  <CheckCircle />
                  {p}
                </li>
              ))}
            </ul>
            <div className="lp-cert__seal">
              <span className="lp-cert__seal-badge">
                <Award />
              </span>
              <span>
                Zkouška §6
                <small>Odborná způsobilost</small>
              </span>
            </div>
          </div>
        </div>

        <div className="lp-aud" style={{ marginTop: "2.5rem" }}>
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
              <span className="lp-aud__mark lp-aud__mark--yes"><ClipboardCheck /></span>
              Požadavky
            </h3>
            <ul className="lp-aud__list lp-aud__list--yes">
              <li><Check /><span>Je vám 18 let</span></li>
              <li><Check /><span>Doložíte zdravotní způsobilost od lékaře</span></li>
              <li><Check /><span>Výuční list ani praxe nejsou podmínkou</span></li>
            </ul>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
