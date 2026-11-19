import type { Metadata } from "next";
import { ArrowRight, Lock, Check, Clock, RefreshCw, Smartphone } from "lucide-react";
import { Button, Eyebrow, Heading } from "@/components/brand";

// Testovací portál Voltimo (Moodle) na vlastní doméně s HTTPS.
const TESTY_URL = "https://testy.voltimo.cz/";

export const metadata: Metadata = {
  title: "Online testy pro kurzanty",
  description:
    "Online procvičování testových otázek Voltimo. Jako v autoškole, neomezeně. Přístup pro přihlášené kurzanty.",
  robots: { index: false, follow: false },
};

type Okruh = { stav: "live" | "soon"; nazev: string; popis: string };

const OKRUHY: readonly Okruh[] = [
  {
    stav: "live",
    nazev: "F-plyny (A1)",
    popis:
      "Příprava na certifikační zkoušku. Otázky z oficiálních příloh, teoretické i praktické úlohy, u každé vysvětlení.",
  },
  {
    stav: "soon",
    nazev: "Elektro (§ 6 a § 7)",
    popis:
      "Odborná způsobilost dle NV 194/2022 Sb. Zařadíme hned po F-plynech.",
  },
  {
    stav: "soon",
    nazev: "Chlazení",
    popis: "Profesní kvalifikace chladaře. Přidáváme postupně.",
  },
];

const JAK: readonly { icon: React.ReactNode; text: string }[] = [
  { icon: <RefreshCw />, text: "Neomezené pokusy a okamžitá zpětná vazba u každé otázky." },
  { icon: <Smartphone />, text: "Z mobilu i z počítače, kdykoli. Stačí se přihlásit." },
  { icon: <Check />, text: "Cvičná zkouška nanečisto s hodnocením prošel / neprošel." },
];

export default function TestyPage() {
  return (
    <main className="testy">
      <section className="testy-hero">
        <div className="testy-hero__inner">
          <Eyebrow>Pro studenty Voltima</Eyebrow>
          <Heading as="h1" level={1} className="testy-hero__h1">
            Online procvičování testů
          </Heading>
          <p className="testy-hero__lead">
            Testové otázky si projdete jako v autoškole: neomezeně, kdykoli,
            z mobilu i z počítače. Portál je jen pro přihlášené kurzanty.
            Přístupové údaje vám pošleme e-mailem po zaplacení kurzu.
          </p>
          <div className="testy-hero__cta">
            <Button
              variant="cta"
              size="lg"
              icon={<ArrowRight />}
              href={TESTY_URL}
              rel="noopener"
            >
              Přihlásit se do testů
            </Button>
          </div>
          <p className="testy-hero__note">
            <Lock />
            <span>
              Vstup je jen po přihlášení. Nemáte účet?{" "}
              <a href="/kontakt/">Ozvěte se nám</a> a přidáme vás ke kurzu.
            </span>
          </p>
        </div>
      </section>

      <section className="testy-okruhy">
        <div className="testy-okruhy__inner">
          <Heading as="h2" level={2} className="testy-okruhy__h2">
            Co si můžete procvičit
          </Heading>
          <div className="testy-okruhy__grid">
            {OKRUHY.map((o) => (
              <div
                key={o.nazev}
                className={`testy-card${o.stav === "soon" ? " testy-card--soon" : ""}`}
              >
                <span className={`testy-card__tag testy-card__tag--${o.stav}`}>
                  {o.stav === "live" ? (
                    <>
                      <Check /> K dispozici
                    </>
                  ) : (
                    <>
                      <Clock /> Připravujeme
                    </>
                  )}
                </span>
                <h3 className="testy-card__title">{o.nazev}</h3>
                <p className="testy-card__text">{o.popis}</p>
              </div>
            ))}
          </div>
          <p className="testy-okruhy__foot">
            Po přihlášení uvidíte jen kurzy, ke kterým jste zapsaní.
          </p>
        </div>
      </section>

      <section className="testy-jak">
        <div className="testy-jak__inner">
          <ul className="testy-jak__list">
            {JAK.map((j, i) => (
              <li className="testy-jak__item" key={i}>
                <span className="testy-jak__icon">{j.icon}</span>
                <span>{j.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
