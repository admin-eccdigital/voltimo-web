import type { Metadata } from "next";
import Image from "next/image";
import {
  Snowflake, Gift, ArrowRight, CalendarClock, GraduationCap, ClipboardCheck, Wrench,
  Hammer, TrendingUp, Check,
} from "lucide-react";
import { Section, Eyebrow, Heading, Button, YellowLabel, StatCircle } from "@/components/brand";
import { FadeIn, HeroStagger, HeroItem } from "@/components/lp/FadeIn";
import { VnVideos } from "@/components/lp/VnVideos";
import { LP_DATA } from "@/lib/lp-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Nedodělal jsi školu? Řemeslo tím nekončí. Kurzy Voltimo 2027",
  description:
    "Nedodělali jste učňák nebo střední? Elektrikáře i chlaďaře uděláte přes zkoušku, ne přes diplom. Letos plno, zajistěte si místo na jaro 2027, nebo darujte kurz pod stromeček.",
};

const ELEKTRO = LP_DATA.price;
const ELEKTRO_2027 = LP_DATA.dates.filter((d) => d.title.includes("2027"));
const CHL_2027 = [
  { title: "Lednový běh 2027", range: "Zkoušky 13. – 14. 1. 2027" },
  { title: "Únorový běh 2027", range: "Zkoušky 10. – 11. 2. 2027" },
];

const PERSONAS = [
  {
    ic: GraduationCap,
    t: "Nedodělal jsi školu",
    d: "Učňák nebo střední jsi nedotáhl? Na řemeslo to stačí. Papír doženeš zkouškou, ne diplomem.",
  },
  {
    ic: Hammer,
    t: "Děláš řemeslo, papír nemáš",
    d: "Montér, údržbář, servisák, člověk od fotovoltaiky nebo klimatizací? Co roky umíš rukama, si konečně necháš uznat.",
  },
  {
    ic: TrendingUp,
    t: "Přemýšlíš o změně oboru",
    d: "Chceš dělat něco, co tě uživí a jen tak nenahradí? Elektro a chlazení je sázka na jistotu.",
  },
];

const PATH = [
  {
    ic: ClipboardCheck,
    t: "Stačí ti základka",
    d: "Ke zkoušce potřebuješ základní vzdělání, 18 let a zdraví. Výuční list ani maturitu ne.",
  },
  {
    ic: Check,
    t: "Papír doženeš zkouškou",
    d: "Řemeslo dnes dokládá zkouška, ne diplom. Příprava je krátká a praktická, bez návratu do lavic.",
  },
  {
    ic: Wrench,
    t: "Nemáš praxi? Nevadí.",
    d: "Připravíme tě. Bez praxe pak chvíli děláš pod dohledem zkušenějšího. Papír je start, mistra z tebe udělá praxe.",
  },
];

const REVIEWS = [
  { n: "Jakub H.", r: "Absolvent Chlazení", q: "Po letech jsem si chtěl konečně udělat papír. Bylo to jednodušší, než jsem čekal." },
  { n: "Absolvent kurzu", r: "Elektrikář", q: "Přemýšlel jsem o změně oboru, i kvůli AI. Elektriku nahradit nemůže. Znalosti jsem si konečně ucelil v kuse." },
  { n: "Milan K.", r: "Servis tepelných čerpadel", q: "Nejvíc mě překvapilo, že to nebyla nudná teorie. Člověk ví, proč to dělá." },
  { n: "Lukáš H.", r: "OSVČ v chlazení", q: "Šel jsem hlavně kvůli papírům, ale dal mi to i jistotu v tom, co dělám." },
];

const ROZCESTNIK = [
  { t: "Elektrikář za 10 dní", d: "Úplná kvalifikace, 5 profesních kvalifikací.", href: "/elektrikar-za-10-dni/" },
  { t: "Chlazení za 4 dny", d: "Dvě osvědčení NSK, malá i velká zařízení.", href: "/chlazeni/" },
  { t: "Rekvalifikace přes ÚP", d: "Jak si nechat kurz zaplatit úřadem práce.", href: "/rekvalifikace/" },
  { t: "Poradna", d: "Jak se stát elektrikářem nebo chlaďařem, krok za krokem.", href: "/poradna/" },
];

export default function VanocePage() {
  return (
    <>
      {/* HERO */}
      <section className="lp-hero">
        <div
          className="lp-hero__media"
          style={{ backgroundImage: `url(${basePath}/photos/poradna/vyuka-skupina-panel.jpg)` }}
        />
        <div className="lp-hero__overlay" />
        <HeroStagger className="lp-hero__inner">
          <HeroItem>
            <span className="lp-hero__eyebrow">
              <Snowflake /> Vánoční zápis · registrace do 24. 12.
            </span>
          </HeroItem>
          <HeroItem>
            <h1 className="lp-hero__tabs">
              <YellowLabel lines={["Umíš dělat rukama?", "Dožeň si papír."]} size="lg" />
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="lp-hero__claim">Elektrikář i chlaďař přes zkoušku, ne přes školu.</p>
          </HeroItem>
          <HeroItem>
            <p className="lp-hero__lead">
              Děláš řemeslo z praxe a chybí ti papír? Nedodělal jsi školu? Nebo
              přemýšlíš o změně oboru? Kvalifikaci elektrikáře i chlaďaře dnes uděláš
              přes zkoušku, ne přes diplom. Letos máme plno, na jarní běhy 2027 ale
              místo ještě je.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="lp-hero__cta">
              <Button variant="cta" size="lg" icon={<ArrowRight />} href="#kurzy">
                Vybrat kurz na 2027
              </Button>
              <Button variant="outline" size="lg" className="chl-btn-ondark" icon={<Gift />} href="#darek">
                Darovat kurz pod stromeček
              </Button>
            </div>
          </HeroItem>
          <HeroItem>
            <div className="lp-urgency">
              <span className="lp-urgency__dot" />
              <span>Letos plno</span>
              <span className="lp-urgency__chip">nejbližší termín leden 2027</span>
            </div>
          </HeroItem>
          <HeroItem>
            <div className="lp-hero__trust">
              <StatCircle value="2026" label="vyprodáno" variant="yellow" />
              <StatCircle value={LP_DATA.stats.graduates} label="absolventů" variant="blue" />
              <StatCircle value={LP_DATA.stats.successRate} label="úspěšnost u zkoušky" variant="outline" />
            </div>
          </HeroItem>
        </HeroStagger>
      </section>

      {/* PRO KOHO TO JE */}
      <Section tone="light">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Pro koho to je</Eyebrow>
              <Heading level={2}>Ať jsi kdokoli z nich, papír tu dohoníš.</Heading>
            </div>
            <div className="vn-why">
              {PERSONAS.map((w) => (
                <div className="vn-why__card" key={w.t}>
                  <span className="vn-why__ic"><w.ic size={20} /></span>
                  <strong>{w.t}</strong>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* JAK TO FUNGUJE */}
      <Section tone="subtle">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Jak to funguje</Eyebrow>
              <Heading level={2}>Jak se k papíru dostaneš.</Heading>
              <p className="lp-head__sub">
                Žádné roky ve škole. Cílená příprava a zkouška podle Národní soustavy
                kvalifikací. Stejná cesta, ať začínáš od nuly, nebo roky děláš z praxe.
              </p>
            </div>
            <div className="vn-why">
              {PATH.map((w) => (
                <div className="vn-why__card" key={w.t}>
                  <span className="vn-why__ic"><w.ic size={20} /></span>
                  <strong>{w.t}</strong>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
            <p className="vn-note">
              Víc v článku{" "}
              <a href={`${basePath}/poradna/nedodelal-jsem-skolu-muzu-delat-elektrikare/`}>
                Nedodělal jsem školu. Můžu dělat elektrikáře nebo chlaďaře?
              </a>
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* KURZY 2027 */}
      <Section tone="light" id="kurzy">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Termíny 2027</Eyebrow>
              <Heading level={2}>Vyberte si běh a zamluvte místo.</Heading>
              <p className="lp-head__sub">
                Letos je plno. Tohle jsou nejbližší volné běhy na jaře 2027.
              </p>
            </div>

            <div className="vn-courses">
              {/* ELEKTRO */}
              <div className="vn-course">
                <div className="vn-course__img">
                  <Image src={`${basePath}/photos/poradna/vyuka-skupina-panel.jpg`} alt="Výcvik elektrikářů ve Voltimu" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
                <span className="vn-course__kicker">Úplná kvalifikace · 5 PK</span>
                <h3 className="vn-course__title">Elektrikář za 10 dní</h3>
                <p className="vn-course__price">
                  {ELEKTRO.current.toLocaleString("cs-CZ")} Kč
                  <small>{(40_000).toLocaleString("cs-CZ")} Kč bez DPH</small>
                </p>
                <ul className="vn-course__dates">
                  {ELEKTRO_2027.map((d) => (
                    <li key={d.title}>
                      <CalendarClock size={15} />
                      <span><strong>{d.title}</strong> · {d.range}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" block icon={<ArrowRight />} href={`${basePath}/elektrikar-za-10-dni/#registrace`}>
                  Zamluvit místo
                </Button>
                <a className="vn-course__more" href={`${basePath}/elektrikar-za-10-dni/`}>
                  Více o kurzu <ArrowRight size={14} />
                </a>
              </div>

              {/* CHLAZENÍ */}
              <div className="vn-course">
                <div className="vn-course__img">
                  <Image src={`${basePath}/photos/chl-manifold-testo.jpg`} alt="Výcvik chlaďařů ve Voltimu" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
                <span className="vn-course__kicker">23-054 + 23-055</span>
                <h3 className="vn-course__title">Chlazení za 4 dny</h3>
                <p className="vn-course__price">
                  26 620 Kč
                  <small>22 000 Kč bez DPH</small>
                </p>
                <ul className="vn-course__dates">
                  {CHL_2027.map((d) => (
                    <li key={d.title}>
                      <CalendarClock size={15} />
                      <span><strong>{d.title}</strong> · {d.range}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" block icon={<ArrowRight />} href={`${basePath}/chlazeni/#poptavka`}>
                  Zamluvit místo
                </Button>
                <a className="vn-course__more" href={`${basePath}/chlazeni/`}>
                  Více o kurzu <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* VIDEORECENZE */}
      <Section tone="subtle">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Videorecenze</Eyebrow>
              <Heading level={2}>Podívejte se, kdo tím prošel.</Heading>
            </div>
            <VnVideos />
          </div>
        </FadeIn>
      </Section>

      {/* ABSOLVENTI */}
      <Section tone="light">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Co říkají absolventi</Eyebrow>
              <Heading level={2}>Prošli tím před vámi. A nelitují.</Heading>
            </div>
            <div className="vn-reviews">
              {REVIEWS.map((rev) => (
                <figure className="vn-review" key={rev.q}>
                  <blockquote>„{rev.q}"</blockquote>
                  <figcaption>
                    <strong>{rev.n}</strong>
                    <span>{rev.r}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* DÁREK */}
      <Section tone="subtle" id="darek">
        <FadeIn>
          <div className="lp-wrap">
            <div className="vn-gift">
              <div className="vn-gift__body">
                <span className="vn-gift__tag"><Gift size={16} /> Dárkový poukaz · do 24. 12.</span>
                <Heading level={2}>Darujte dětem řemeslo do života.</Heading>
                <p>
                  Dítě nedodělalo školu a neví, kam dál? Nebo chce konečně dělat
                  rukama a mít papír? Darujte mu kurz elektrikáře nebo chlazení.
                  Poukaz rozbalí u stromečku, na kurz nastoupí na jaře a má v ruce
                  řemeslo, které ho uživí. Napište si o něj do 24. 12., ať je pod
                  stromečkem včas.
                </p>
                <Button variant="cta" icon={<ArrowRight />} href={`${basePath}/kontakt/`}>
                  Chci dárkový poukaz
                </Button>
              </div>
              <div className="vn-gift__art" aria-hidden="true">
                <Gift size={88} />
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ROZCESTNÍK */}
      <Section tone="light">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Kam dál</Eyebrow>
              <Heading level={2}>Mrkněte na konkrétní kurzy.</Heading>
            </div>
            <div className="vn-nav">
              {ROZCESTNIK.map((r) => (
                <a className="vn-nav__card" key={r.href} href={`${basePath}${r.href}`}>
                  <strong>{r.t}</strong>
                  <p>{r.d}</p>
                  <span className="vn-nav__go">Otevřít <ArrowRight size={16} /></span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ZÁVĚR */}
      <Section tone="dark">
        <div className="lp-wrap vn-final">
          <Heading level={2}>Nový rok, nová kvalifikace.</Heading>
          <p>Letos je plno. Jaro 2027 je na dosah. Registrujte se do 24. 12. a místo je vaše.</p>
          <Button variant="cta" size="lg" icon={<ArrowRight />} href="#kurzy">
            Vybrat kurz na 2027
          </Button>
        </div>
      </Section>
    </>
  );
}
