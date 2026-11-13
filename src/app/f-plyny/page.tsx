import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight, Award, BadgeCheck, Check, CheckCircle2, ClipboardCheck,
  Flame, Gauge, GraduationCap, Hammer, Info, MapPin, ShieldCheck, Snowflake,
  Timer, Users, Wrench,
} from "lucide-react";
import { Button, Eyebrow, Heading, StatCircle, YellowLabel } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { JsonLd } from "@/components/site";
import { SITE_URL, ORG } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Zkrácený odkaz na přihlášku (Google Forms) a stránka se zkušebními podmínkami.
const FORM_URL = "https://forms.gle/iaWCKQffzuJxAWCE8";
const PODMINKY_URL = `${basePath}/f-plyny/zkusebni-podminky/`;
const PRICE = "23 500 Kč bez DPH";

export const metadata: Metadata = {
  title: "F-plyny: certifikát A1 pro práci s chladivy",
  description:
    "Pětidenní kurz zakončený certifikační zkouškou F-plyny A1. Oprávnění pracovat s chladivy na chlazení, klimatizacích a tepelných čerpadlech. Prezenčně v Přešticích, kapacita 10 lidí.",
  alternates: { canonical: `${SITE_URL}/f-plyny/` },
  // Sekce F-plyny zatím není v menu ani v indexu – přístupná jen přes přímý odkaz.
  robots: { index: false, follow: false },
};

const QUICK = [
  { ic: Wrench, t: "Praxe na reálných okruzích" },
  { ic: Timer, t: "5 dní prezenčně" },
  { ic: Users, t: "Malá skupina, max. 10" },
  { ic: ShieldCheck, t: "Certifikát na dobu neurčitou" },
] as const;

const WHAT = [
  {
    ic: Snowflake,
    t: "Co jsou F-plyny",
    d: "Fluorované skleníkové plyny jsou chladiva, která kolují v okruzích klimatizací, chladniček, tepelných čerpadel a chladicích zařízení.",
  },
  {
    ic: ShieldCheck,
    t: "Proč certifikát",
    d: "Kdo chladivo při montáži, servisu nebo opravě plní, odsává nebo kontroluje těsnost, musí mít podle zákona certifikát. Bez něj tuto práci legálně dělat nelze.",
  },
  {
    ic: Gauge,
    t: "Co umí A1",
    d: "A1 je nejširší kategorie – opravňuje ke všem činnostem na stacionárních chladicích a klimatizačních zařízeních a tepelných čerpadlech bez omezení velikosti náplně.",
  },
] as const;

const OUTCOME = [
  "Veškeré činnosti: kontroly těsnosti, instalace, servis, opravy i vyřazování zařízení.",
  "Znovuzískávání chladiva z okruhů bez omezení velikosti náplně.",
  "Běžné F-plyny i uhlovodíky (například propan).",
] as const;

const STEPS = [
  {
    ic: GraduationCap,
    tag: "1.–4. den",
    t: "Příprava na reálných zařízeních",
    d: "Fyzika chlazení, chladiva a jejich bezpečnost, kontrola těsnosti, znovuzískávání, pájení a vakuování, aktuální legislativa. Teorie i praxe na skutečných okruzích.",
  },
  {
    ic: ClipboardCheck,
    tag: "5. den",
    t: "Certifikační zkouška",
    d: "Teoretický test (50 otázek, 80 % pro úspěch) a praktická zkouška před komisí na zkušebním pracovišti. Po úspěchu vám vydáme certifikát A1.",
  },
] as const;

const GEAR = [
  "4 chladicí okruhy včetně sdružené jednotky",
  "2 splitové klimatizace a tepelné čerpadlo vzduch–voda",
  "Odsávačka chladiva, vývěva, detektory úniku",
  "Digitální manifoldy, váhy, měřicí přístroje",
] as const;

const GALLERY = [
  { src: "chl-manifold-testo.jpg", cap: "Měření tlaků digitálním manifoldem" },
  { src: "chl-okruh-manometry.jpg", cap: "Práce na reálném chladivovém okruhu" },
  { src: "chl-skupina-vyveva.jpg", cap: "Vakuování okruhu v malé skupině" },
  { src: "chl-odsavani.jpg", cap: "Odsávání chladiva do sběrné nádoby" },
] as const;

const FP_DATES: readonly {
  d: string; m: string; title: string; range: string; featured: boolean;
}[] = [
  { d: "7", m: "PRO", title: "Prosincový běh", range: "7. – 11. 12. 2026", featured: true },
  { d: "18", m: "LED", title: "Lednový běh 2027", range: "18. – 22. 1. 2027", featured: false },
  { d: "15", m: "ÚNO", title: "Únorový běh 2027", range: "15. – 19. 2. 2027", featured: false },
  { d: "15", m: "BŘE", title: "Březnový běh 2027", range: "15. – 19. 3. 2027", featured: false },
];

const FAQ = [
  {
    q: "Jsou v tom i hořlavá chladiva?",
    a: "Ano. Protože se chladiva s vysokým dopadem na klima postupně omezují, obor přechází na chladiva s nízkým GWP – a ta jsou často hořlavá (například R32 nebo propan R290). Umět s nimi bezpečně pracovat je dnes součást řemesla a připraví vás na to i náš kurz.",
  },
  {
    q: "Co se v F-plynech změnilo?",
    a: "Od roku 2024 platí nové evropské nařízení o F-plynech (2024/573) a nový systém certifikace osob (2024/2215). Staré kategorie I–IV nahradily nové A–E. Certifikát A1 navazuje na dřívější nejvyšší kategorii – plný rozsah bez omezení náplně. Certifikáty nově vydává přímo pověřený subjekt a platí na dobu neurčitou.",
  },
  {
    q: "Musím mít praxi nebo vzdělání?",
    a: "Ke zkoušce není potřeba dokládat vzdělání ani praxi. Příprava vás provede vším, co u zkoušky i v praxi potřebujete.",
  },
  {
    q: "Jak dlouho certifikát platí?",
    a: "Certifikát A1 se vydává na dobu neurčitou. Podle evropského nařízení je držitel povinen nejméně jednou za 7 let absolvovat aktualizační školení k obnovení znalostí.",
  },
  {
    q: "Kde zkouška probíhá?",
    a: "Prezenčně v Přešticích, na vlastním zkušebním pracovišti s reálnými chladicími a klimatizačními zařízeními a tepelným čerpadlem.",
  },
  {
    q: "Co si mám přinést?",
    a: "Platný doklad totožnosti (občanský průkaz nebo cestovní pas). Podrobné informace o průběhu zkoušky najdete ve zkušebních podmínkách.",
  },
] as const;

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "F-plyny – certifikát A1",
  description:
    "Pětidenní kurz zakončený certifikační zkouškou pro certifikát F-plyny A1. Oprávnění pro činnosti na zařízeních obsahujících fluorované skleníkové plyny.",
  url: `${SITE_URL}/f-plyny/`,
  inLanguage: "cs",
  provider: {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.legalName,
    url: `${SITE_URL}/`,
  },
};

export default function FplynyPage() {
  return (
    <>
      <JsonLd data={courseLd} />

      {/* HERO */}
      <section className="lp-hero">
        <div
          className="lp-hero__media"
          style={{ backgroundImage: `url('${basePath}/photos/chl-hero-detektor.jpg')`, backgroundPosition: "right 20%" }}
        />
        <div className="lp-hero__overlay" />
        <div className="lp-hero__inner">
          <span className="lp-hero__eyebrow">
            <BadgeCheck size={17} /> Certifikát F-plyny A1
          </span>

          <h1 className="lp-hero__tabs">
            <YellowLabel lines={["Pracujete s chladivy?", "Získejte certifikát A1."]} size="md" />
          </h1>

          <p className="lp-hero__lead">
            Pětidenní kurz zakončený certifikační zkouškou. Pro techniky chlazení, klimatizací
            a tepelných čerpadel, kteří potřebují oprávnění pracovat s F-plyny. Prezenčně
            v Přešticích, na reálných zařízeních.
          </p>

          <div className="lp-hero__cta">
            <Button variant="cta" size="lg" icon={<ArrowRight />} href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Přihlásit se na kurz
            </Button>
            <Button variant="outline" size="lg" className="chl-btn-ondark" href="#prubeh">
              Jak to probíhá
            </Button>
          </div>

          <div className="lp-hero__trust">
            <StatCircle value="5" label="dní prezenčně" variant="yellow" />
            <StatCircle value="10" label="míst v běhu" variant="blue" />
            <StatCircle value="A1" label="plný rozsah" variant="outline" />
          </div>
        </div>
      </section>

      {/* PÁSEK VÝHOD */}
      <div className="chl-quick">
        {QUICK.map(({ ic: Ic, t }) => (
          <div className="chl-quick__item" key={t}>
            <span className="chl-quick__ic"><Ic size={18} /></span>
            {t}
          </div>
        ))}
      </div>

      {/* CO JE A1 */}
      <section className="vlt-section vlt-section--light" id="co-je-a1">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>O co vlastně jde</Eyebrow>
              <Heading level={2}>Co je certifikát F-plyny A1.</Heading>
              <p className="lp-head__sub">
                Krátce a srozumitelně, ať víte, do čeho jdete a proč to dnes potřebuje
                skoro každý, kdo dělá chlazení.
              </p>
            </div>
          </FadeIn>
          <div className="chl-pillars">
            {WHAT.map(({ ic: Ic, t, d }) => (
              <FadeIn key={t}>
                <div className="chl-pillar">
                  <span className="chl-pillar__ic"><Ic size={22} /></span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="chl-note chl-note--fplyn" style={{ marginTop: 28 }}>
              <Flame size={18} style={{ flexShrink: 0 }} />
              <span>
                <strong>A co hořlavá chladiva?</strong> Moderní chladiva s nízkým dopadem na
                klima jsou často hořlavá (R32, propan R290). Certifikát A1 nově zahrnuje i práci
                s uhlovodíky a bezpečné zacházení s nimi je součástí kurzu.
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CO ZÍSKÁTE */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <div className="lp-outcome">
            <div>
              <div className="lp-head">
                <Eyebrow>Co získáte</Eyebrow>
                <Heading level={2}>Certifikát A1 pro veškeré činnosti s F-plyny.</Heading>
                <p className="lp-head__sub">
                  Nejširší kategorie bez omezení velikosti náplně. Platí na dobu neurčitou
                  a je uznávaný ve všech státech Evropské unie.
                </p>
              </div>
              <ul className="lp-outcome__list">
                {OUTCOME.map((t) => (
                  <li key={t}>
                    <span className="lp-check"><Check size={15} /></span>
                    {t}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 22 }}>
                <Button variant="cta" size="lg" icon={<ArrowRight />} href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Přihlásit se na kurz
                </Button>
              </div>
            </div>

            <div className="lp-cert">
              <div className="lp-cert__ribbon">Platný v EU</div>
              <span className="lp-cert__kicker">Certifikát pro fyzické osoby</span>
              <h3 className="lp-cert__title">F-plyny – certifikát A1</h3>
              <p className="lp-cert__meta">Plný rozsah · bez omezení náplně · na dobu neurčitou</p>
              <ul className="lp-cert__pks">
                <li><CheckCircle2 size={16} />Kontroly těsnosti a znovuzískávání chladiva</li>
                <li><CheckCircle2 size={16} />Instalace, servis, opravy a vyřazování zařízení</li>
                <li><CheckCircle2 size={16} />F-plyny i uhlovodíky (propan)</li>
              </ul>
              <div className="lp-cert__seal">
                <span className="lp-cert__seal-badge"><Award size={22} /></span>
                <span>A1<small>podle nařízení (EU) 2024/2215</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JAK TO PROBÍHÁ */}
      <section className="vlt-section vlt-section--light" id="prubeh">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Jak to probíhá</Eyebrow>
              <Heading level={2}>Pět dní: příprava a zkouška na jednom místě.</Heading>
              <p className="lp-head__sub">
                Děláme ucelený kurz – příprava a certifikační zkouška v jednom. Vše prezenčně
                v Přešticích.
              </p>
            </div>
          </FadeIn>
          <div className="chl-days">
            {STEPS.map(({ ic: Ic, tag, t, d }) => (
              <FadeIn key={t}>
                <div className={`chl-day${tag === "5. den" ? "" : " chl-day--feat"}`}>
                  <span className="chl-day__code"><Ic size={15} />{tag}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="chl-note" style={{ marginTop: 22 }}>
              <Info size={18} style={{ flexShrink: 0 }} />
              <span>
                Podrobný průběh zkoušky, kritéria a zkušební podmínky najdete na stránce{" "}
                <a href={PODMINKY_URL}>informace pro uchazeče a zkušební podmínky</a>.
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ZKUŠEBNÍ PRACOVIŠTĚ */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <div className="lp-outcome">
            <div>
              <div className="lp-head">
                <Eyebrow>Zkušební pracoviště</Eyebrow>
                <Heading level={2}>Zkoušíme na skutečných zařízeních.</Heading>
                <p className="lp-head__sub">
                  Žádné modely a schémata na tabuli. Vlastní učebna a dílny v Přešticích
                  s kompletním vybavením pro praktickou zkoušku.
                </p>
              </div>
              <ul className="lp-outcome__list">
                {GEAR.map((t) => (
                  <li key={t}>
                    <span className="lp-check"><Wrench size={14} /></span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="chl-note" style={{ marginTop: 18 }}>
                <MapPin size={18} style={{ flexShrink: 0 }} />
                <span>{ORG.street}, {ORG.zip} {ORG.city}</span>
              </p>
            </div>
            <div className="chl-gal chl-gal--tight">
              {GALLERY.map((s) => (
                <figure className="chl-gal__item" key={s.src}>
                  <Image
                    src={`${basePath}/photos/${s.src}`}
                    alt={s.cap}
                    width={1400}
                    height={1750}
                  />
                  <figcaption>{s.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TERMÍNY */}
      <section className="vlt-section vlt-section--light" id="terminy">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Nejbližší termíny</Eyebrow>
              <Heading level={2}>Vyberte si běh a držte si místo.</Heading>
              <p className="lp-head__sub">
                Všechny běhy probíhají prezenčně v Přešticích. Kapacita je 10 lidí na běh –
                jakmile se naplní, otevíráme další termín.
              </p>
            </div>
          </FadeIn>
          <div className="lp-dates">
            {FP_DATES.map((t) => (
              <div className={`lp-date${t.featured ? " lp-date--featured" : ""}`} key={t.title}>
                <div className="lp-date__cal">
                  <strong>{t.d}</strong>
                  <small>{t.m}</small>
                </div>
                <div className="lp-date__info">
                  <strong>{t.title}</strong>
                  <span>{t.range}</span>
                </div>
                <span className="lp-date__cap lp-date__cap--ok">
                  <Users />10 míst
                </span>
                <Button
                  variant={t.featured ? "cta" : "outline"}
                  icon={<ArrowRight />}
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chci tento termín
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENA */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head lp-head--center">
              <Eyebrow>Cena</Eyebrow>
              <Heading level={2}>Jedna cena za celý kurz i zkoušku.</Heading>
              <p className="lp-head__sub">
                Příprava, certifikační zkouška i vydání certifikátu v jedné ceně. Bez skrytých položek.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="chl-pricecard">
              <div className="chl-pricecard__top">
                <div>
                  <span className="chl-pricecard__kicker">Ucelený kurz F-plyny A1</span>
                  <span className="chl-pricecard__prices">
                    <span className="chl-pricecard__val">{PRICE}</span>
                  </span>
                </div>
                <span className="chl-pricecard__note">Příprava i zkouška. Pětidenní běh v Přešticích.</span>
              </div>
              <div className="chl-pricecard__body">
                <ul className="chl-pricecard__list">
                  {["Příprava (4 dny)", "Praxe na reálných okruzích", "Materiály a pomůcky"].map((t) => (
                    <li key={t}><span className="lp-check"><Check size={15} /></span>{t}</li>
                  ))}
                </ul>
                <ul className="chl-pricecard__list">
                  {["Certifikační zkouška", "Teoretická i praktická část", "Vydání certifikátu A1"].map((t) => (
                    <li key={t}><span className="lp-check"><Check size={15} /></span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="chl-pricecard__foot">
                <Button variant="cta" size="lg" icon={<ArrowRight />} href={FORM_URL} target="_blank" rel="noopener noreferrer">
                  Přihlásit se na kurz
                </Button>
                <small>Kapacita je 10 lidí na běh. Přihláška je nezávazná, ozveme se vám s detaily.</small>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="vlt-section vlt-section--light" id="faq">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head lp-head--center">
              <Eyebrow>Nejčastější dotazy</Eyebrow>
              <Heading level={2}>Na co se uchazeči ptají nejčastěji.</Heading>
            </div>
          </FadeIn>
          <div className="chl-faq">
            {FAQ.map((x) => (
              <details key={x.q}>
                <summary>{x.q}</summary>
                <p>{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ZÁVĚREČNÉ CTA */}
      <section className="vlt-section vlt-section--dark">
        <div className="lp-wrap">
          <div className="chl-final">
            <h2>Certifikát A1 je vstupenka k samostatné práci s chladivy.</h2>
            <p>
              Pět dní prakticky, na reálných zařízeních, zakončených zkouškou.{" "}
              <strong>Prakticky. Lidsky. Bez zbytečné omáčky.</strong>
            </p>
            <Button variant="cta" size="lg" icon={<ArrowRight />} href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Přihlásit se na kurz
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
