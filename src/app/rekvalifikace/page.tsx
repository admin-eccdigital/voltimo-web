import type { Metadata } from "next";
import {
  ArrowRight, Award, BadgeCheck, CheckCircle2, ClipboardCheck,
  GraduationCap, Wallet,
} from "lucide-react";
import { Button, Eyebrow, Heading, StatCircle, YellowLabel } from "@/components/brand";
import { JsonLd } from "@/components/site";
import { FadeIn } from "@/components/lp/FadeIn";
import { RekvForm } from "@/components/rekvalifikace/RekvForm";
import { SITE_URL, ORG } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Rekvalifikace elektrikář přes úřad práce — Montér elektrických instalací",
  description:
    "Rekvalifikační kurz Montér elektrických instalací (26-017-H). 120 hodin prezenčně v Přešticích, hradí úřad práce. Termín 2. 11. – 4. 12. 2026.",
  alternates: { canonical: `${SITE_URL}/rekvalifikace/` },
  openGraph: {
    title: "Rekvalifikace elektrikář přes úřad práce | Voltimo",
    description: "Akreditovaný kurz Montér elektrických instalací (26-017-H). 120 hodin, hradí úřad práce, spoluúčast 0 Kč.",
  },
};

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Rekvalifikace – Montér elektrických instalací (26-017-H)",
  description:
    "Akreditovaný rekvalifikační kurz (MŠMT) připravující ke zkoušce profesní kvalifikace Montér elektrických instalací 26-017-H. 120 hodin prezenčně, hradí úřad práce.",
  url: `${SITE_URL}/rekvalifikace/`,
  inLanguage: "cs",
  provider: {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.legalName,
    url: `${SITE_URL}/`,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: "2026-11-02",
    endDate: "2026-12-04",
    location: {
      "@type": "Place",
      name: "Voltimo, areál STS Přeštice",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Husova 380",
        addressLocality: "Přeštice",
        postalCode: "334 01",
        addressCountry: "CZ",
      },
    },
  },
};

export default function RekvalifikacePage() {
  return (
    <>
      <JsonLd data={courseLd} />

      {/* HERO */}
      <section className="lp-hero">
        <div
          className="lp-hero__media"
          style={{ backgroundImage: `url('${basePath}/photos/03-elektrikar-pri-praci-2.jpg')`, backgroundPosition: "center 40%" }}
        />
        <div className="lp-hero__overlay" />
        <div className="lp-hero__inner">
          <span className="lp-hero__eyebrow">
            <BadgeCheck size={17} /> Rekvalifikace · akreditace MŠMT
          </span>

          <h1 className="lp-hero__tabs">
            <YellowLabel lines={["Elektrikář", "přes úřad práce."]} size="md" />
          </h1>

          <p className="lp-hero__lead">
            Rekvalifikační kurz Montér elektrických instalací (26-017-H). 120 hodin
            prezenčně v Přešticích, zakončeno zkouškou a osvědčením. Pro nezaměstnané
            i zájemce o změnu oboru. Kurz hradí úřad práce.
          </p>

          <div className="lp-hero__cta">
            <Button variant="cta" size="lg" icon={<ArrowRight />} href="#poptavka">
              Mám zájem o rekvalifikaci
            </Button>
            <Button variant="outline" size="lg" className="chl-btn-ondark" href="#prubeh">
              Jak to probíhá
            </Button>
          </div>

          <div className="lp-urgency">
            <span className="lp-urgency__dot" />
            <span>Hradí úřad práce · spoluúčast 0 Kč</span>
            <span className="lp-urgency__chip">Termín 2. 11. – 4. 12. 2026</span>
          </div>

          <div className="lp-hero__trust">
            <StatCircle value="120" label="hodin kurzu" variant="yellow" />
            <StatCircle value="0" label="Kč spoluúčast" variant="blue" />
            <StatCircle value="10" label="míst v běhu" variant="outline" />
          </div>
        </div>
      </section>

      {/* CO ZÍSKÁTE */}
      <section className="vlt-section vlt-section--light">
        <div className="lp-wrap">
          <div className="lp-outcome">
            <div>
              <div className="lp-head">
                <Eyebrow>Co získáte</Eyebrow>
                <Heading level={2}>Osvědčení Montér elektrických instalací.</Heading>
                <p className="lp-head__sub">
                  Profesní kvalifikace 26-017-H dle Národní soustavy kvalifikací.
                  Celostátně uznávaná, autorizace Ministerstva průmyslu a obchodu.
                </p>
              </div>
              <ul className="lp-outcome__list">
                <li>
                  <span className="lp-check"><CheckCircle2 size={15} /></span>
                  Osvědčení o získání profesní kvalifikace (26-017-H).
                </li>
                <li>
                  <span className="lp-check"><CheckCircle2 size={15} /></span>
                  Potvrzení o účasti v akreditovaném vzdělávacím programu.
                </li>
                <li>
                  <span className="lp-check"><CheckCircle2 size={15} /></span>
                  Uplatnění: montér elektrických instalací v domech, realizační
                  firmě, průmyslu, servisním či montážním týmu.
                </li>
              </ul>
            </div>

            <div className="lp-cert">
              <div className="lp-cert__ribbon">Akreditace MŠMT</div>
              <span className="lp-cert__kicker">Profesní kvalifikace NSK</span>
              <h3 className="lp-cert__title">Montér elektrických instalací</h3>
              <p className="lp-cert__meta">26-017-H · úroveň 3 · autorizace MPO</p>
              <ul className="lp-cert__pks">
                <li><CheckCircle2 size={16} />Zkouška před autorizovanou osobou</li>
                <li><CheckCircle2 size={16} />Osvědčení + potvrzení o účasti</li>
                <li><CheckCircle2 size={16} />Celostátně uznávané</li>
              </ul>
              <div className="lp-cert__seal">
                <span className="lp-cert__seal-badge"><Award size={22} /></span>
                <span>120 h<small>teorie i praxe</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DŮLEŽITÉ UPOZORNĚNÍ */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Ať to je fér</Eyebrow>
              <Heading level={2}>Rekvalifikace je jedna kvalifikace z pěti.</Heading>
            </div>
          </FadeIn>
          <p className="chl-problem__quote" style={{ maxWidth: "72ch" }}>
            Tato rekvalifikace vám dá kvalifikaci <strong>26-017 Montér elektrických
            instalací</strong> — jednu z pěti, ze kterých se skládá kompletní
            Elektrikář. Úřad práce hradí právě tuhle rekvalifikaci. Kompletního
            elektrikáře (všech 5 kvalifikací + §6) z ní ale nemáte. Zbytek zkoušek
            se dodělává samostatně a ten už úřad práce nehradí.
          </p>
          <p className="chl-note" style={{ marginTop: 18 }}>
            Chcete rovnou kompletního elektrikáře?{" "}
            <a href={`${basePath}/elektrikar-za-10-dni/`}>Kurz Elektrikář za 10 dní</a>.
          </p>
        </div>
      </section>

      {/* JAK TO PROBÍHÁ */}
      <section className="vlt-section vlt-section--light" id="prubeh">
        <div className="lp-wrap">
          <div className="lp-outcome">
            <div>
              <div className="lp-head">
                <Eyebrow>Jak to probíhá</Eyebrow>
                <Heading level={2}>120 hodin prezenčně, pak zkouška.</Heading>
                <p className="lp-head__sub">
                  Kurz vás připraví na práci elektrikáře od základů až ke zkoušce
                  podle standardu 26-017-H.
                </p>
              </div>
              <ul className="lp-outcome__list">
                <li><span className="lp-check"><GraduationCap size={15} /></span>80 hodin teorie a 40 hodin praxe, prezenčně v Přešticích.</li>
                <li><span className="lp-check"><ClipboardCheck size={15} /></span>Zkouška (8 h): písemný test a praktické předvedení před autorizovanou osobou.</li>
                <li><span className="lp-check"><Award size={15} /></span>Po úspěšné zkoušce získáte osvědčení o profesní kvalifikaci a potvrzení o účasti.</li>
              </ul>
            </div>

            <div>
              <div className="lp-head">
                <Eyebrow>Vstupní požadavky</Eyebrow>
                <Heading level={2}>Kdo se může přihlásit.</Heading>
              </div>
              <ul className="lp-outcome__list">
                <li><span className="lp-check"><CheckCircle2 size={15} /></span>Věk bez omezení.</li>
                <li><span className="lp-check"><CheckCircle2 size={15} /></span>Minimálně základní vzdělání.</li>
                <li><span className="lp-check"><CheckCircle2 size={15} /></span>Zdravotní způsobilost pro práci v elektrotechnice.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CENA A ÚŘAD PRÁCE */}
      <section className="vlt-section vlt-section--dark">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow tone="ondark">Cena a úřad práce</Eyebrow>
              <Heading level={2} ondark>Kurz hradí úřad práce.</Heading>
              <p className="lp-head__sub">
                Cena kurzu je 48 500 Kč. Při schválení „zvolené rekvalifikace" ji
                hradí úřad práce a vaše spoluúčast je 0 Kč.
              </p>
            </div>
          </FadeIn>
          <div className="lp-how__facts">
            <div className="lp-fact">
              <strong>48 500 Kč</strong>
              <small>hradí úřad práce</small>
            </div>
            <div className="lp-fact">
              <strong>0 Kč</strong>
              <small>vaše spoluúčast</small>
            </div>
            <div className="lp-fact">
              <strong>MŠMT</strong>
              <small>akreditace MSMT-27909/2025-5</small>
            </div>
          </div>
          <div className="lp-runs">
            <span className="lp-runs__ic"><Wallet /></span>
            <p>
              <strong>Jak na to:</strong> na svém úřadu práce požádejte o zvolenou
              rekvalifikaci (kurz Montér elektrických instalací, kód kurzu ÚP
              132 026 026 129). Potřebné podklady vám dodáme. Po schválení ÚP kurz
              proplatí.
            </p>
          </div>
        </div>
      </section>

      {/* POPTÁVKA */}
      <RekvForm />
    </>
  );
}
