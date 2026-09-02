"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { Button, YellowLabel, StatCircle } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { HeroStagger, HeroItem } from "./FadeIn";

export function LpHero() {
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
            <MapPin /> Prezenční výcvik v Přešticích · Plzeňsko
          </span>
        </HeroItem>

        <HeroItem>
          <h1 className="lp-hero__tabs">
            <YellowLabel lines={["Ne škola.", "Výcvik."]} size="lg" />
          </h1>
        </HeroItem>

        <HeroItem>
          <p className="lp-hero__claim">Pro šikovné lidi, co chtějí papír.</p>
        </HeroItem>

        <HeroItem>
          <p className="lp-hero__lead">
            Úplná kvalifikace za 10 dní. Žádné měsíce u videí. Jen praxe,
            zkouška §6 a státní osvědčení. Školu mít nemusíte, stačí ruce a
            chuť.
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
              Rezervovat termín
            </Button>
            <span className="lp-hero__note">
              Nezávazně online ·{" "}
              <strong>vše vyřídíte bez telefonu</strong>
            </span>
          </div>
        </HeroItem>

        <HeroItem>
          <div className="lp-urgency">
            <span className="lp-urgency__dot" />
            <span>Sleva 20 %</span>
            <span className="lp-urgency__chip">
              pro říjnový a listopadový běh
            </span>
          </div>
        </HeroItem>

        <HeroItem>
          <div className="lp-hero__trust">
            <StatCircle value="10" label="dní do osvědčení" variant="yellow" />
            <StatCircle value="5" label="profesních kvalifikací" variant="blue" />
            <StatCircle value="96" label="% úspěšnost u zkoušky" variant="outline" />
          </div>
        </HeroItem>
      </HeroStagger>
    </section>
  );
}
