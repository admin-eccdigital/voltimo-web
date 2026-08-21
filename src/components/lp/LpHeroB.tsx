"use client";

import { MapPin, ArrowRight, Briefcase } from "lucide-react";
import { Button, YellowLabel, StatCircle } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { HeroStagger, HeroItem } from "./FadeIn";

export function LpHeroB() {
  return (
    <section className="lp-hero">
      <div
        className="lp-hero__media"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/03-elektrikar-pri-praci-2.jpg)`,
        }}
      />
      <div className="lp-hero__overlay" />
      <HeroStagger className="lp-hero__inner">
        <HeroItem>
          <span className="lp-hero__eyebrow">
            <Briefcase /> Rekvalifikace s budoucností · Přeštice
          </span>
        </HeroItem>

        <HeroItem>
          <h1 className="lp-hero__tabs">
            <YellowLabel lines={["Nová kariéra.", "Za 10 dní."]} size="lg" />
          </h1>
        </HeroItem>

        <HeroItem>
          <p className="lp-hero__claim">
            Z jakéhokoliv oboru rovnou k elektrikářskému osvědčení.
          </p>
        </HeroItem>

        <HeroItem>
          <p className="lp-hero__lead">
            Změňte obor za 10 dní. Žádné měsíce studia, žádné dojíždění do
            školy. Praktický výcvik, státní zkouška a osvědčení, se kterým
            můžete pracovat jako elektrikář nebo si otevřít živnost. Školu
            ani praxi mít nemusíte.
          </p>
        </HeroItem>

        <HeroItem>
          <div className="lp-hero__cta">
            <Button
              variant="cta"
              size="lg"
              icon={<ArrowRight />}
              onClick={scrollToRegistration}
            >
              Chci změnit obor
            </Button>
            <span className="lp-hero__note">
              Nezávazná rezervace ·{" "}
              <strong>vše vyřídíte online</strong>
            </span>
          </div>
        </HeroItem>

        <HeroItem>
          <div className="lp-urgency">
            <span className="lp-urgency__dot" />
            <span>Prázdninová sleva 20 %</span>
            <span className="lp-urgency__chip">
              při registraci do {LP_DATA.price.deadline}
            </span>
          </div>
        </HeroItem>

        <HeroItem>
          <div className="lp-hero__trust">
            <StatCircle value="10" label="dní do nové kariéry" variant="yellow" />
            <StatCircle value="5" label="profesních kvalifikací" variant="blue" />
            <StatCircle value="96" label="% úspěšnost u zkoušky" variant="outline" />
          </div>
        </HeroItem>
      </HeroStagger>
    </section>
  );
}
