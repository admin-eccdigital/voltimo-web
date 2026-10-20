import { Check, CheckCircle, Award } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

const PKS = [
  "Montér elektrických instalací",
  "Montér elektrických rozvaděčů",
  "Montér slaboproudých rozvodů",
  "Montér hromosvodů",
  "Montér elektrických sítí",
];

export function LpOutcome() {
  return (
    <Section tone="light">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-outcome">
          <div>
            <div className="lp-head">
              <Eyebrow>Co budete mít na konci</Eyebrow>
              <Heading level={2}>Státní osvědčení Elektrikář.</Heading>
              <p className="lp-head__sub">
                Skládáte úplnou profesní kvalifikaci Elektrikář, tedy 5
                profesních kvalifikací a státní osvědčení. K samostatné práci
                lze navíc dokoupit §6 (odborná způsobilost dle NV 194/2022 Sb.).
              </p>
            </div>
            <ul className="lp-outcome__list">
              <li>
                <span className="lp-check"><Check /></span>
                Státní osvědčení o úplné profesní kvalifikaci, celostátně
                uznávané.
              </li>
              <li>
                <span className="lp-check"><Check /></span>
                §6 – odbornou způsobilost pro samostatnou práci lze dokoupit
                navíc.
              </li>
              <li>
                <span className="lp-check"><Check /></span>
                Můžete legálně pracovat, po roce praxe pod dohledem i na vlastní
                živnost.
              </li>
            </ul>
          </div>

          <div className="lp-cert">
            <div className="lp-cert__ribbon">Státem uznané</div>
            <span className="lp-cert__kicker">Úplná profesní kvalifikace</span>
            <h3 className="lp-cert__title">Elektrikář</h3>
            <p className="lp-cert__meta">
              5 profesních kvalifikací · úplná kvalifikace · NV 194/2022 Sb.
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
                Úplná kvalifikace
                <small>5 profesních kvalifikací</small>
              </span>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
