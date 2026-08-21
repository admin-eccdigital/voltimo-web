"use client";

import { ArrowRight, CalendarClock, Bell, PiggyBank, Check } from "lucide-react";
import { Section, Eyebrow, Heading, Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { FadeIn } from "./FadeIn";

function pickTerm(title: string) {
  window.dispatchEvent(new CustomEvent("lp-pick-term", { detail: title }));
  scrollToRegistration();
}

const INCLUDES = [
  "40 hodin praktického výcviku v dílně",
  "Všech 5 profesních kvalifikací",
  "Zkouška §6 a státní osvědčení",
  "Záruka prvního dne: vrácení peněz",
];

export function LpDatesPriceB() {
  const { price } = LP_DATA;
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head lp-head--center">
          <Eyebrow>Termíny a cena</Eyebrow>
          <Heading level={2}>Vyberte si termín. Cena je jedna.</Heading>
          <p className="lp-head__sub">
            Prezenčně v Přešticích. Kapacita omezená. Rezervace nezávazná.
          </p>
        </div>

        <div className="lp-dates">
          {LP_DATA.dates.map((t, i) => (
            <div
              className={`lp-date${t.featured ? " lp-date--featured" : ""}`}
              key={i}
            >
              <div className="lp-date__cal">
                <strong>{t.d}</strong>
                <small>{t.m}</small>
              </div>
              <div className="lp-date__info">
                <strong>{t.title}</strong>
                <span>{t.range}</span>
              </div>
              <Button
                variant={t.featured ? "cta" : "outline"}
                icon={<ArrowRight />}
                onClick={() => pickTerm(t.title)}
              >
                Chci tento termín
              </Button>
            </div>
          ))}

          <div className="lp-date lp-date--later">
            <div className="lp-date__cal lp-date__cal--later">
              <CalendarClock />
            </div>
            <div className="lp-date__info">
              <strong>Žádný termín mi nevyhovuje</strong>
              <span>Ozveme se vám, jakmile vypíšeme další.</span>
            </div>
            <span className="lp-date__cap lp-date__cap--ok">
              <Bell />
              Bez závazku
            </span>
            <Button
              variant="outline"
              icon={<ArrowRight />}
              onClick={() => pickTerm("Chci jít později")}
            >
              Chci jít později
            </Button>
          </div>
        </div>

        <div className="lp-price" style={{ marginTop: "2.5rem" }}>
          <div className="lp-price__card">
            <div className="lp-price__head">
              <span className="lp-price__variant">10denní kurz Elektrikář</span>
              <span className="lp-price__disc">
                Prázdninová sleva 20 % · platí pouze do {price.deadline}
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
              Ušetříte {price.discount.toLocaleString("cs-CZ")} Kč při
              registraci do {price.deadline}
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
              Při rezervaci nic neplatíte. Kurz se hradí fakturou předem.
            </p>
            <p className="lp-price__fine">
              Tento kurz úřad práce nehradí. Chcete přes ÚP? Máme{" "}
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
