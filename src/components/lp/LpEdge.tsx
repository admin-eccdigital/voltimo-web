import { Zap, CheckCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

export function LpEdge() {
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Už něco umíte?</Eyebrow>
          <Heading level={2}>Kratší cesty, pokud na ně máte.</Heading>
          <p className="lp-head__sub">
            Většině lidí doporučíme celý výcvik. Ale pokud spadáte do jedné z
            těchto skupin, ozvěte se a poradíme.
          </p>
        </div>
        <div className="lp-variants">
          <div className="lp-variant">
            <span className="lp-variant__ic">
              <Zap />
            </span>
            <div>
              <h3>Den + paragraf</h3>
              <p>
                Máte elektro školu? 1 den přípravy a zkouška §6. Rychlá cesta k
                vyhlášce.
              </p>
              <span className="lp-variant__tag">
                Pro lidi s elektro vzděláním
              </span>
            </div>
          </div>
          <div className="lp-variant">
            <span className="lp-variant__ic">
              <CheckCheck />
            </span>
            <div>
              <h3>Jen zkoušky</h3>
              <p>
                Fakt to umíte? Přijďte rovnou ke zkouškám, bez přípravy. I tak
                ale většině lidí sedne spíš celý výcvik.
              </p>
              <span className="lp-variant__tag">Pro zkušené z oboru</span>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
