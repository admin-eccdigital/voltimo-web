import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight, Award, BadgeCheck, Briefcase, Check, CheckCircle2, ClipboardCheck,
  BadgePercent, Flame, HardHat, Hammer, Info, Scissors, Signpost, Snowflake, Timer, Users, Wrench,
} from "lucide-react";
import { Button, Eyebrow, Heading, StatCircle, YellowLabel } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { ChlForm } from "@/components/chlazeni/ChlForm";
import { ChlSticky } from "@/components/chlazeni/ChlSticky";
import { JsonLd } from "@/components/site";
import { SITE_URL, ORG } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Chlazení — profesní kvalifikace 23-054 + 23-055 za 4 dny",
  description:
    "Získejte profesní kvalifikaci v chlazení za 4 dny. Dvě osvědčení NSK pro chladicí zařízení a tepelná čerpadla. Prezenčně v Přešticích.",
  alternates: { canonical: `${SITE_URL}/chlazeni/` },
  openGraph: {
    title: "Chlazení — profesní kvalifikace za 4 dny | Voltimo",
    description: "Dvě osvědčení NSK pro malá i velká chladicí zařízení a tepelná čerpadla. 4 dny prezenčně v Přešticích.",
  },
};

const PRICE_FULL = "25 000 Kč";
const PRICE_SALE = "20 000 Kč";
const SALE_UNTIL = "31. 8. 2026";

const GALLERY = [
  { src: "chl-manifold-testo.jpg", cap: "Měření tlaků digitálním manifoldem" },
  { src: "chl-okruh-manometry.jpg", cap: "Práce na reálném chladivovém okruhu" },
  { src: "chl-skupina-vyveva.jpg", cap: "Vakuování okruhu v malé skupině" },
  { src: "chl-odsavani.jpg", cap: "Odsávání chladiva do sběrné nádoby" },
] as const;

const QUICK = [
  { ic: Wrench, t: "Praxe především" },
  { ic: Timer, t: "4 dny intenzivně" },
  { ic: HardHat, t: "Vlastní dílny" },
  { ic: Briefcase, t: "Cesta k živnosti" },
] as const;

const PILLARS = [
  { ic: Wrench, t: "Praktická výuka", d: "Prezenčně, v malé skupině, na reálných chladicích zařízeních. Žádný online, žádná videa." },
  { ic: Users, t: "Malá skupina", d: "Víc prostoru na otázky, vysvětlení i pochopení. Nikdy v davu." },
  { ic: Scissors, t: "Co nepoužijete, neučíme", d: "Neučíte se pro test. Učíte se pro realitu, kterou pak přenesete na zakázku." },
  { ic: Signpost, t: "Jasný další krok", d: "Po zkoušce máte v ruce dvě osvědčení NSK. Otevírá se vám cesta k živnosti." },
] as const;

const THOUGHTS = [
  "Roky to dělám. Proč bych měl chodit na zkoušky?",
  "Nemám čas trávit týdny ve škole.",
  "Co když u zkoušky neuspěju?",
  "Potřebuju to mít rychle a oficiálně.",
] as const;

const REVS = [
  { n: "Filip B.", r: "Servisní mechanik", q: "Lektor byl v pohodě a když jsem se zasekl, hned mi to vysvětlil tak, že to dávalo smysl." },
  { n: "David M.", r: "Montér klimatizací", q: "Dobrý posun za krátký čas. Učebna super, vybavení taky." },
  { n: "Jakub H.", r: "Absolvent 23-054 + 23-055", q: "Po letech jsem si chtěl konečně udělat papír. Bylo to jednodušší, než jsem si myslel." },
  { n: "Milan K.", r: "Servis tepelných čerpadel", q: "Nejvíc mě překvapilo, že to nebyla nudná teorie. Člověk ví, proč to dělá." },
  { n: "Lukáš H.", r: "OSVČ v chlazení", q: "Šel jsem hlavně kvůli papírům, ale dal mi to i jistotu v tom, co dělám." },
] as const;

const WHY = [
  { t: "Lidský přístup", d: "Bez zdlouhavého studia. Vysvětlíme vám, co děláte a proč. Krok za krokem." },
  { t: "Jen to, co použijete", d: "Neučíme zbytečnosti. Co si osaháte u nás, děláte pak i na zakázce." },
  { t: "Připravíme vás na 100 %", d: "Zkouška není strašák, když víte, co čekat. Projdete si ji nanečisto, s jasným zadáním a zpětnou vazbou." },
  { t: "Učíme podle NSK", d: "Připraveno přesně podle Národní soustavy kvalifikací. U zkoušky vás nic nepřekvapí." },
] as const;

const FAQ = [
  { q: "Musím mít praxi nebo vzdělání?", a: "Pro samotnou zkoušku stačí 18 let, základní vzdělání a zdravotní způsobilost. Doučíme vás, co budete v praxi potřebovat." },
  { q: "Jak rychle začnu po přihlášení?", a: "Termíny vypisujeme průběžně. Po poptávce vás kontaktujeme a domluvíme nejbližší vhodný termín." },
  { q: "Co když nemám elektro vzdělání?", a: "Pro samostatnou živnost budete potřebovat i odbornou způsobilost §6. To u nás také zařídíme, ale je to samostatný kurz." },
  { q: "Co když zkoušku neudělám napoprvé?", a: "Můžete ji opakovat. Naše příprava ale stojí přesně na tom, abyste prošli napoprvé." },
  { q: "Kde to probíhá?", a: "V Přešticích, v naší učebně a praktických dílnách. Prezenčně. Na řemeslo si musíte sáhnout." },
  { q: "Co potřebuji s sebou?", a: "Platný občanský průkaz a lékařské potvrzení o zdravotní způsobilosti (formulář pošleme po přihlášce). Pracovní oblečení a obuv." },
  { q: "A co F-plyny?", a: "Pro samostatnou práci s chladivy potřebujete kromě profesní kvalifikace i certifikát na F-plyny. Autorizaci na F-plyny očekáváme během září 2026. Kdo u nás absolvuje kurz chlazení teď, dostane F-plyny se slevou." },
] as const;

const CHL_DATES = [
  { d: "7", m: "ZÁŘ", title: "Zářijový běh", range: "Příprava 7. – 8. 9. · zkoušky 9. – 10. 9. 2026", cap: "Poslední 3 místa", low: true, featured: true },
  { d: "6", m: "ŘÍJ", title: "Říjnový běh", range: "Příprava 6. – 7. 10. · zkoušky 8. – 9. 10. 2026", cap: "Zbývá 5 míst", low: false, featured: false },
] as const;

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Chlazení — profesní kvalifikace 23-054 + 23-055",
  description:
    "Profesní kvalifikace Servisní mechanik chladicích a klimatizačních zařízení. Dvě osvědčení NSK za 4 dny prezenčního výcviku v Přešticích.",
  url: `${SITE_URL}/chlazeni/`,
  inLanguage: "cs",
  provider: {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.legalName,
    url: `${SITE_URL}/`,
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      startDate: "2026-09-07",
      endDate: "2026-09-10",
      location: {
        "@type": "Place",
        name: ORG.legalName,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.street,
          addressLocality: ORG.city,
          postalCode: ORG.zip,
          addressCountry: ORG.country,
        },
      },
    },
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      startDate: "2026-10-06",
      endDate: "2026-10-09",
      location: {
        "@type": "Place",
        name: ORG.legalName,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.street,
          addressLocality: ORG.city,
          postalCode: ORG.zip,
          addressCountry: ORG.country,
        },
      },
    },
  ],
};

export default function ChlazeniPage() {
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
            <BadgeCheck size={17} /> Profesní kvalifikace 23-054 + 23-055
          </span>

          <h1 className="lp-hero__tabs">
            <YellowLabel lines={["Děláte chlazení?", "Papír za 4 dny."]} size="md" />
          </h1>

          <p className="lp-hero__lead">
            Dva dny příprava, dva dny zkoušky. Pro lidi, kteří chlazení už dělají a potřebují to mít
            konečně oficiálně. Dvě osvědčení NSK pro malá i velká chladicí zařízení a tepelná čerpadla.
          </p>

          <div className="lp-hero__cta">
            <Button variant="cta" size="lg" icon={<ArrowRight />} href="#poptavka">
              Poptat termín kurzu
            </Button>
            <Button variant="outline" size="lg" className="chl-btn-ondark" href="#kurz">
              Podrobnosti kurzu
            </Button>
          </div>

          <div className="lp-urgency">
            <span className="lp-urgency__dot" />
            <span>Prázdninová sleva 20 %</span>
            <span className="lp-urgency__chip">{PRICE_SALE} při přihlášení do {SALE_UNTIL}</span>
          </div>

          <div className="chl-nopraxe">
            <Info size={18} />
            <span>
              Nemáte žádnou praxi v chlazení?{" "}
              <a href="#poptavka">Napište nám pro vstupní program →</a>
            </span>
          </div>

          <div className="lp-hero__trust">
            <StatCircle value="4" label="dny do osvědčení" variant="yellow" />
            <StatCircle value="2" label="osvědčení NSK" variant="blue" />
            <StatCircle value="1" label="cena, jeden balíček" variant="outline" />
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

      {/* PILÍŘE */}
      <section className="vlt-section vlt-section--light">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Nový směr, který dává smysl</Eyebrow>
              <Heading level={2}>Kurz pro lidi z praxe, ne pro studenty.</Heading>
            </div>
          </FadeIn>
          <div className="chl-pillars">
            {PILLARS.map(({ ic: Ic, t, d }) => (
              <FadeIn key={t}>
                <div className="chl-pillar">
                  <span className="chl-pillar__ic"><Ic size={22} /></span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLÉM */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <div className="chl-problem">
            <div>
              <div className="lp-head">
                <Eyebrow>Proč to řešit</Eyebrow>
                <Heading level={2}>Chlazení děláte roky. Papír na to vám ale chybí.</Heading>
              </div>
              <p style={{ marginTop: 20 }}>
                Montujete klimatizace, servisujete tepelná čerpadla, opravujete chladicí jednotky.
                Umíte to. Klienti si vás chválí. Šéf vás potřebuje.
              </p>
              <p>
                Jenže <strong>bez profesní kvalifikace to dnes legálně provádět nejde.</strong>{" "}
                Zaměstnavatel chce papír kvůli kontrolám a pojištění. A jestli děláte na sebe,
                bez kvalifikace živnost nedostanete.
              </p>
              <p className="chl-problem__quote">
                Když přijde kontrola na stavbu nebo do firmy, papír chce vidět první.
              </p>
            </div>
            <div className="chl-photo">
              <Image
                src={`${basePath}/photos/chlazeni-praxe.jpg`}
                alt="Praktický výcvik v dílně Voltimo"
                width={1200}
                height={800}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NAŠE DÍLNY */}
      <section className="vlt-section vlt-section--light">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Naše dílny</Eyebrow>
              <Heading level={2}>Takhle to u nás vypadá.</Heading>
              <p className="lp-head__sub">
                Žádné modely a schémata na tabuli. Vlastní chladicí okruhy, vývěva, odsávačka,
                digitální manifold i detektor úniků. Vše, co pak držíte v ruce na zakázce.
              </p>
            </div>
          </FadeIn>
          <div className="chl-gal">
            {GALLERY.map((s) => (
              <FadeIn key={s.src}>
                <figure className="chl-gal__item">
                  <Image
                    src={`${basePath}/photos/${s.src}`}
                    alt={s.cap}
                    width={1400}
                    height={1750}
                  />
                  <figcaption>{s.cap}</figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEKTOR */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <div className="chl-lektor">
            <div className="chl-lektor__photo">
              <Image
                src={`${basePath}/photos/lektor-jasansky.jpg`}
                alt="Lektor Jan Jasanský v dílně Voltimo"
                width={480}
                height={600}
                style={{ objectFit: "cover", objectPosition: "center 20%", width: "100%", height: "100%" }}
              />
            </div>
            <div className="chl-lektor__text">
              <FadeIn>
                <div className="lp-head">
                  <Eyebrow>Kdo vás povede</Eyebrow>
                  <Heading level={2}>Jan Jasanský</Heading>
                  <p className="lp-head__sub">
                    Lektor pro elektro i chlazení. Učí prakticky, na reálných
                    zařízeních. Vysvětlí vám přesně to, co potřebujete u zkoušky
                    i na zakázce.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CO LIDEM BĚŽÍ HLAVOU */}
      <section className="vlt-section vlt-section--dark">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow tone="ondark">Co lidem v oboru běží hlavou</Eyebrow>
              <Heading level={2} ondark>Slyšíme to při každém běhu.</Heading>
              <p className="lp-head__sub">
                Proto je kurz postavený na čtyři dny a na praxi, ne na měsíce teorie.
              </p>
            </div>
          </FadeIn>
          <div className="chl-thoughts">
            {THOUGHTS.map((t) => (
              <FadeIn key={t}>
                <div className="chl-thought">
                  <span className="chl-thought__mark">„</span>
                  <p>{t}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BALÍČEK */}
      <section className="vlt-section vlt-section--light">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Náš balíček</Eyebrow>
              <Heading level={2}>Proto jsme připravili balíček dvou kvalifikací.</Heading>
              <p className="lp-head__sub">
                Dvě profesní kvalifikace dle Národní soustavy kvalifikací. Čtyři dny v Přešticích.
                Jedna cena. Pro lidi, kteří už chlazení dělají a jen potřebují papír.
              </p>
            </div>
          </FadeIn>
          <div className="chl-pack">
            <FadeIn>
              <div className="chl-packcard">
                <span className="chl-packcard__tag"><Hammer size={16} /> 1.–2. den</span>
                <h3>Dva dny přípravy</h3>
                <div className="chl-packcard__days">
                  <span className="chl-packcard__day" />
                  <span className="chl-packcard__day" />
                </div>
                <p>
                  Teorie i praktická cvičení na reálných zařízeních. Procházíme s vámi vše, co budete
                  u zkoušky potřebovat.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="chl-packcard chl-packcard--exam">
                <span className="chl-packcard__tag"><ClipboardCheck size={16} /> 3.–4. den</span>
                <h3>Dva dny zkoušek</h3>
                <div className="chl-packcard__days">
                  <span className="chl-packcard__day" />
                  <span className="chl-packcard__day" />
                </div>
                <p>Písemná i praktická část před autorizovanou osobou. Obě kvalifikace na jednom místě.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CO ODEJDETE S SEBOU */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <div className="lp-outcome">
            <div>
              <div className="lp-head">
                <Eyebrow>Co si odnesete</Eyebrow>
                <Heading level={2}>Dvě osvědčení NSK. Po čtvrtém dni v ruce.</Heading>
                <p className="lp-head__sub">
                  Pro malá i velká chladicí a klimatizační zařízení a tepelná čerpadla. Papír, který
                  chce zaměstnavatel. A doklad, který otevírá cestu k vyššímu platu a k vlastní živnosti.
                </p>
              </div>
              <ul className="lp-outcome__list">
                <li>
                  <span className="lp-check"><Check size={15} /></span>
                  Osvědčení o získání profesní kvalifikace dle Národní soustavy kvalifikací.
                </li>
                <li>
                  <span className="lp-check"><Check size={15} /></span>
                  Doklad pro zaměstnavatele, kvůli kontrolám i pojištění.
                </li>
                <li>
                  <span className="lp-check"><Check size={15} /></span>
                  Podklad pro vlastní živnost v oboru chlazení a klimatizace.
                </li>
              </ul>
              <p className="chl-note">
                Nemáte elektro vzdělání a budete k živnosti potřebovat i odbornou způsobilost §6?
                Zajistíme i to,{" "}
                <a href={`${basePath}/elektrikar-za-10-dni/`}>elektro u nás děláme také</a>.
              </p>
              <p className="chl-note chl-note--fplyn">
                <strong>F-plyny brzy u nás.</strong> Pro samostatnou práci s
                chladivy je potřeba i certifikát na F-plyny. Autorizaci
                očekáváme během září 2026. Kdo u nás absolvuje chlazení teď,
                dostane F-plyny se slevou.
              </p>
              <div style={{ marginTop: 22 }}>
                <Button variant="cta" size="lg" icon={<ArrowRight />} href="#poptavka">
                  Poptat termín kurzu
                </Button>
              </div>
            </div>

            <div className="lp-cert">
              <div className="lp-cert__ribbon">Státem uznané</div>
              <span className="lp-cert__kicker">Profesní kvalifikace NSK</span>
              <h3 className="lp-cert__title">Servisní mechanik chlazení a klimatizací</h3>
              <p className="lp-cert__meta">23-054-H + 23-055-H · malá i velká zařízení · tepelná čerpadla</p>
              <ul className="lp-cert__pks">
                <li><CheckCircle2 size={16} />23-054-H: malá chladicí a klimatizační zařízení</li>
                <li><CheckCircle2 size={16} />23-055-H: velká chladicí a klimatizační zařízení</li>
                <li><CheckCircle2 size={16} />Tepelná čerpadla v obou kvalifikacích</li>
              </ul>
              <div className="lp-cert__seal">
                <span className="lp-cert__seal-badge"><Award size={22} /></span>
                <span>4 dny<small>od přípravy k osvědčení</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM 4 DNŮ */}
      <section className="vlt-section vlt-section--light" id="kurz">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Podrobnosti kurzu</Eyebrow>
              <Heading level={2}>Co přesně během 4 dní absolvujete.</Heading>
              <p className="lp-head__sub">
                Dva dny příprava, dva dny zkoušky, vše na jednom místě, v Přešticích.
              </p>
            </div>
          </FadeIn>
          <div className="chl-days">
            <FadeIn>
              <div className="chl-day chl-day--feat">
                <span className="chl-day__code"><Hammer size={15} />Příprava · 2 dny</span>
                <h3>Příprava na reálných zařízeních</h3>
                <p>
                  Teorie i praktická cvičení na reálných chladicích zařízeních. Projdeme s vámi{" "}
                  <strong>přesně to, co budete u zkoušky potřebovat.</strong>
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="chl-day">
                <span className="chl-day__code"><Snowflake size={15} />23-054-H</span>
                <h3>Zkouška: malá zařízení</h3>
                <p>
                  Servisní mechanik/mechanička <strong>malých</strong> chladicích a klimatizačních
                  zařízení a tepelných čerpadel.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="chl-day">
                <span className="chl-day__code"><Snowflake size={15} />23-055-H</span>
                <h3>Zkouška: velká zařízení</h3>
                <p>
                  Servisní mechanik/mechanička <strong>velkých</strong> chladicích a klimatizačních
                  zařízení a tepelných čerpadel.
                </p>
              </div>
            </FadeIn>
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
                Všechny běhy probíhají prezenčně v Přešticích. Kapacita je
                omezená. Poptávka je nezávazná, ozveme se vám s detaily.
              </p>
            </div>
          </FadeIn>
          <div className="lp-dates">
            {CHL_DATES.map((t) => (
              <div
                className={`lp-date${t.featured ? " lp-date--featured" : ""}`}
                key={t.title}
              >
                <div className="lp-date__cal">
                  <strong>{t.d}</strong>
                  <small>{t.m}</small>
                </div>
                <div className="lp-date__info">
                  <strong>{t.title}</strong>
                  <span>{t.range}</span>
                </div>
                <span
                  className={`lp-date__cap ${t.low ? "lp-date__cap--low" : "lp-date__cap--ok"}`}
                >
                  {t.low ? <Flame /> : <Users />}
                  {t.cap}
                </span>
                <Button
                  variant={t.featured ? "cta" : "outline"}
                  icon={<ArrowRight />}
                  href="#poptavka"
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
              <Eyebrow>Cena balíčku</Eyebrow>
              <Heading level={2}>Jedna cena za obě kvalifikace.</Heading>
              <p className="lp-head__sub">
                Prázdninová sleva 20 % při přihlášení do {SALE_UNTIL}. Platí do naplnění kapacity.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="chl-pricecard">
              <div className="chl-pricecard__top">
                <div>
                  <span className="chl-pricecard__kicker">Cena balíčku se slevou 20 %</span>
                  <span className="chl-pricecard__prices">
                    <span className="chl-pricecard__val">{PRICE_SALE}</span>
                    <span className="chl-pricecard__old">{PRICE_FULL}</span>
                  </span>
                </div>
                <span className="chl-pricecard__note">Příprava i obě zkoušky. Bez skrytých položek.</span>
              </div>
              <div className="chl-pricecard__body">
                <ul className="chl-pricecard__list">
                  {["Příprava (2 dny)", "Skripta předem", "Materiály a pomůcky"].map((t) => (
                    <li key={t}><span className="lp-check"><Check size={15} /></span>{t}</li>
                  ))}
                </ul>
                <ul className="chl-pricecard__list">
                  {["Zkouška 23-054-H", "Zkouška 23-055-H", "Osvědčení NSK"].map((t) => (
                    <li key={t}><span className="lp-check"><Check size={15} /></span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="chl-sale-strip">
                <BadgePercent size={24} />
                <span>
                  Prázdninová sleva 20 % při přihlášení <strong>do {SALE_UNTIL}</strong> · ušetříte 5 000 Kč
                </span>
              </div>
              <div className="chl-pricecard__foot">
                <Button variant="cta" size="lg" icon={<ArrowRight />} href="#poptavka">
                  Poptat termín kurzu
                </Button>
                <small>Termíny vypisujeme průběžně. Po poptávce vám nabídneme nejbližší vhodný.</small>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REFERENCE */}
      <section className="vlt-section vlt-section--light" id="reference">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head lp-head--center">
              <Eyebrow>Reference absolventů</Eyebrow>
              <Heading level={2}>Co o kurzu říkají naši studenti.</Heading>
            </div>
          </FadeIn>
          <div className="chl-revs">
            {REVS.map((r) => (
              <FadeIn key={r.n}>
                <div className="chl-rev">
                  <p>„{r.q}“</p>
                  <div className="chl-rev__who">
                    <span className="chl-rev__av">{r.n.charAt(0)}</span>
                    <span><strong>{r.n}</strong><small>{r.r}</small></span>
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn>
              <div className="chl-rev chl-rev--next">
                <h3>Buďte další</h3>
                <p>Staňte se dalším servisním mechanikem s oficiální kvalifikací. Neodkládejte to.</p>
                <div style={{ marginTop: "auto" }}>
                  <Button variant="cta" icon={<ArrowRight />} href="#poptavka">Poptat termín</Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROČ VOLTIMO */}
      <section className="vlt-section vlt-section--subtle">
        <div className="lp-wrap">
          <FadeIn>
            <div className="lp-head">
              <Eyebrow>Vyzkoušejte Voltimo</Eyebrow>
              <Heading level={2}>Proč si vybrat naši školu.</Heading>
              <p className="lp-head__sub">
                Víme, že papír nestačí. Potřebujete praxi, pochopení a důvěru. Voltimo vám dá nástroje
                i jistotu, že na zkoušku i práci budete připraveni.
              </p>
            </div>
          </FadeIn>
          <div className="chl-why">
            {WHY.map((i) => (
              <FadeIn key={i.t}>
                <div className="chl-whyitem">
                  <span className="lp-check"><Check size={15} /></span>
                  <div>
                    <h3>{i.t}</h3>
                    <p>{i.d}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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

      {/* POPTÁVKA */}
      <ChlForm />

      {/* ZÁVĚREČNÉ CTA */}
      <section className="vlt-section vlt-section--dark">
        <div className="lp-wrap">
          <div className="chl-final">
            <h2>Buď budete dál čekat. Nebo budete mít papír do týdne.</h2>
            <p>
              Čtyři dny, dvě kvalifikace, otevřená cesta k vyššímu platu i vlastní živnosti.{" "}
              <strong>Prakticky. Lidsky. Bez zbytečné omáčky.</strong>
            </p>
            <Button variant="cta" size="lg" icon={<ArrowRight />} href="#poptavka">
              Chci poptat termín kurzu
            </Button>
          </div>
        </div>
      </section>

      <ChlSticky />
    </>
  );
}
