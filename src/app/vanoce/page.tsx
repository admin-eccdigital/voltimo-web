import type { Metadata } from "next";
import Image from "next/image";
import {
  Snowflake, Gift, ArrowRight, CalendarClock, GraduationCap, ClipboardCheck, Wrench,
} from "lucide-react";
import { Section, Eyebrow, Heading, Button, YellowLabel, StatCircle } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
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

const PATH = [
  {
    ic: GraduationCap,
    t: "Stačí ti základka",
    d: "Ke zkoušce potřebuješ základní vzdělání, 18 let a zdraví. Výuční list ani maturitu ne.",
  },
  {
    ic: ClipboardCheck,
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
      <section className="vn-hero">
        <div
          className="vn-hero__media"
          style={{
            backgroundImage: `linear-gradient(165deg, rgba(10,23,51,0.80) 0%, rgba(10,19,40,0.9) 70%), url('${basePath}/photos/poradna/vyuka-skupina-panel.jpg')`,
          }}
          aria-hidden="true"
        />
        <div className="vn-hero__snow" aria-hidden="true" />
        <div className="lp-wrap vn-hero__inner">
          <span className="vn-eyebrow">
            <Snowflake size={16} /> Vánoce ve Voltimu
          </span>
          <h1 className="vn-hero__title">
            <YellowLabel lines={["Nedodělal jsi školu?", "Řemeslo tím nekončí."]} size="md" />
          </h1>
          <p className="vn-hero__lead">
            Elektrikáře i chlaďaře dnes uděláš přes zkoušku, ne přes diplom. Stačí
            základka, 18 let a chuť makat rukama. Řemeslo, které tě uživí a jde dělat
            i na sebe. Letos máme plno, na jarní běhy 2027 ale místo ještě je.
          </p>
          <div className="vn-hero__cta">
            <Button variant="cta" size="lg" icon={<ArrowRight />} href="#kurzy">
              Vybrat kurz na 2027
            </Button>
            <Button variant="outline" size="lg" className="chl-btn-ondark" href="#darek">
              Darovat kurz
            </Button>
          </div>
          <div className="vn-hero__stats">
            <StatCircle value="2026" label="vyprodáno" variant="yellow" />
            <StatCircle value={LP_DATA.stats.graduates} label="absolventů" variant="blue" />
            <StatCircle value={LP_DATA.stats.successRate} label="u zkoušky" variant="outline" />
          </div>
        </div>
      </section>

      {/* NEDODĚLAL JSI ŠKOLU */}
      <Section tone="light">
        <FadeIn>
          <div className="lp-wrap">
            <div className="lp-head lp-head--center">
              <Eyebrow>Nedodělal jsi školu?</Eyebrow>
              <Heading level={2}>Není to konec. Je to nový začátek.</Heading>
              <p className="lp-head__sub">
                Spousta lidí si myslí, že bez výučního listu nemají v řemesle šanci.
                Dávno to neplatí. Takhle se k papíru dostaneš.
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
              Celé to rozebíráme v článku{" "}
              <a href={`${basePath}/poradna/nedodelal-jsem-skolu-muzu-delat-elektrikare/`}>
                Nedodělal jsem školu. Můžu dělat elektrikáře nebo chlaďaře?
              </a>
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* KURZY 2027 */}
      <Section tone="subtle" id="kurzy">
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
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* VIDEORECENZE */}
      <Section tone="light">
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
      <Section tone="subtle">
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
      <Section tone="light" id="darek">
        <FadeIn>
          <div className="lp-wrap">
            <div className="vn-gift">
              <div className="vn-gift__body">
                <span className="vn-gift__tag"><Gift size={16} /> Dárkový poukaz</span>
                <Heading level={2}>Darujte dětem řemeslo do života.</Heading>
                <p>
                  Dítě nedodělalo školu a neví, kam dál? Nebo chce konečně dělat
                  rukama a mít papír? Darujte mu kurz elektrikáře nebo chlazení.
                  Poukaz rozbalí u stromečku, na kurz nastoupí na jaře a má v ruce
                  řemeslo, které ho uživí.
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
      <Section tone="subtle">
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
          <p>Letos je plno. Jaro 2027 je na dosah. Zamluvte si místo, než ho vezme někdo jiný.</p>
          <Button variant="cta" size="lg" icon={<ArrowRight />} href="#kurzy">
            Vybrat kurz na 2027
          </Button>
        </div>
      </Section>
    </>
  );
}
