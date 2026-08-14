"use client";

import { ArrowRight, CalendarClock, Bell } from "lucide-react";
import { Section, Eyebrow, Heading, Button } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { FadeIn } from "./FadeIn";

function pickTerm(title: string) {
  window.dispatchEvent(new CustomEvent("lp-pick-term", { detail: title }));
  scrollToRegistration();
}

export function LpDates() {
  return (
    <Section tone="light">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Nejbližší termíny</Eyebrow>
          <Heading level={2}>Vyberte si běh a držte si místo.</Heading>
          <p className="lp-head__sub">
            Všechny běhy probíhají prezenčně v Přešticích na Plzeňsku. Kapacita
            každého běhu je omezená. Rezervace je nezávazná, termín potvrdíte
            online, bez čekání na telefon.
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
              <span>
                Chci to, ale radši později. Dejte vědět a ozveme se vám, jakmile
                vypíšeme další termín.
              </span>
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
      </div>
      </FadeIn>
    </Section>
  );
}
