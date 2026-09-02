"use client";

import { ArrowRight, PiggyBank, Check } from "lucide-react";
import { Section, Eyebrow, Heading, Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { FadeIn } from "./FadeIn";

const INCLUDES = [
  "40 hodin praktického výcviku v dílně",
  "Všech 5 profesních kvalifikací",
  "Zkouška §6 a státní osvědčení",
  "Záruka prvního dne: vrácení peněz",
];

export function LpPrice() {
  const { price } = LP_DATA;
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head lp-head--center">
          <Eyebrow>Cena kurzu</Eyebrow>
          <Heading level={2}>Jedna cena. Teď s prázdninovou slevou 20 %.</Heading>
          <p className="lp-head__sub">
            Kompletní 10denní výcvik včetně všech 5 zkoušek a §6. Žádné skryté
            poplatky.
          </p>
        </div>
        <div className="lp-price">
          <div className="lp-price__card">
            <div className="lp-price__head">
              <span className="lp-price__variant">10denní kurz Elektrikář</span>
              <span className="lp-price__disc">
                Sleva 20 % pro říjnový a listopadový běh
              </span>
            </div>
            <div className="lp-price__amounts">
              <span className="lp-price__old">
                {price.regular.toLocaleString("cs-CZ")} Kč
              </span>
              <span className="lp-price__now">
                {price.current.toLocaleString("cs-CZ")} Kč
              </span>
            </div>
            <p className="lp-price__save">
              <PiggyBank />
              Ušetříte {price.discount.toLocaleString("cs-CZ")} Kč na
              říjnovém a listopadovém běhu
            </p>
            <ul className="lp-price__incl">
              {INCLUDES.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant="cta"
              size="lg"
              block
              icon={<ArrowRight />}
              onClick={scrollToRegistration}
            >
              Rezervovat za {price.current.toLocaleString("cs-CZ")} Kč
            </Button>
            <p className="lp-price__fine">
              Při rezervaci nic neplatíte. Kurz se hradí celou částkou předem
              fakturou, žádné zálohy ani splátky.
            </p>
            <p className="lp-price__fine">
              Tento kompletní kurz úřad práce nehradí. Chcete přes ÚP? Máme{" "}
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/rekvalifikace/`}>
                samostatnou rekvalifikaci
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
