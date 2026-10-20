import { Hammer, ClipboardCheck, MapPin } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

export function LpHow() {
  return (
    <Section tone="dark">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow tone="ondark">Jak to reálně běží</Eyebrow>
          <Heading level={2} ondark>
            10 dní. Týden příprava, týden zkoušky.
          </Heading>
          <p className="lp-head__sub">
            Denně se pracuje 8 hodin. Příprava i zkoušky, krok za krokem.
          </p>
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
              osobou.
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

        <div className="lp-runs">
          <span className="lp-runs__ic">
            <MapPin />
          </span>
          <p>
            <strong>
              Učí se u nás osobně, v Přešticích na Plzeňsku.
            </strong>{" "}
            Je to prezenční výcvik v reálné dílně. Online ani na dálku to
            nejde, na řemeslo si musíte sáhnout. Počítejte s cestou a
            naplánujte si dojíždění.
          </p>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
