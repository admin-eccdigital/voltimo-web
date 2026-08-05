import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, GraduationCap, Landmark } from "lucide-react";
import { Button, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { SITE_URL } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Voltimo — Středisko profesního vzdělávání",
  description:
    "Z praxe ke kvalifikaci nejkratší cestou. Státní osvědčení, které uznává úřad i zaměstnavatel a otevře cestu na vlastní živnost. Přeštice, Plzeňsko.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Voltimo — Středisko profesního vzdělávání v elektrotechnice",
    description: "Z praxe ke kvalifikaci nejkratší cestou. Státní osvědčení, které uznává úřad i zaměstnavatel. Přeštice, Plzeňsko.",
  },
};

const STEPS: readonly { title: string; text: string }[] = [
  {
    title: "Vyberte si profesní kvalifikaci",
    text: "Zvolte obor, který odpovídá tomu, co umíte nebo co se chcete naučit. Pomůžeme vám vybrat správnou cestu.",
  },
  {
    title: "Příprava na míru",
    text: "Dostanete přístup ke studijním materiálům, konzultacím, modelovým situacím. Efektivně.",
  },
  {
    title: "Zkouška podle NSK",
    text: "Zkouška probíhá podle státního standardu. U nás, prakticky a s důrazem na to, co skutečně děláte v praxi.",
  },
  {
    title: "Osvědčení a další cesta",
    text: "Získáte Osvědčení o získání profesní kvalifikace. A můžete pokračovat dál, třeba až k úplné profesní kvalifikaci a tím vlastnímu podnikání.",
  },
];

const SOUL_COLS: readonly string[] = [
  "Nejsme další vzdělávací agentura. Řemeslo má smysl a šikovný člověk si zaslouží papír, který jeho práci uzná.",
  "Učíme na reálných zařízeních, ne z prezentací. Nářadí chytnete první den a všechno vám vysvětlíme, aby vám to sedlo.",
  "Nejsme anonymní instituce. Jsme lidi z oboru. Provedeme vás od první otázky až po osvědčení.",
];

const ZIGZAG: readonly {
  num: string;
  title: string;
  text: string;
  img: string;
  alt: string;
  imgPosition?: string;
  imgSide: "left" | "right";
}[] = [
  {
    num: "01",
    title: "Lidský přístup",
    text: 'Nevyžadujeme zdlouhavé studium ani „razítko pro razítko". Vysvětlíme vám, co a proč děláte.',
    img: "lektor-panel.jpg",
    alt: "Lektor s žákem u panelu",
    imgSide: "left",
  },
  {
    num: "02",
    title: "Praxe bez obalu",
    text: "U nás se neučíte zbytečnosti. Všechno, co děláte, má přímý dopad na reálné zakázky.",
    img: "hero-vycvik.jpg",
    alt: "Elektrikář při práci na panelu",
    imgPosition: "60% center",
    imgSide: "right",
  },
  {
    num: "03",
    title: "Připravíme vás na 100 %",
    text: "Zkouška není strašák, když víte, co čekat. Dostanete jasné zadání, praktický trénink, zpětnou vazbu.",
    img: "priprava-zkouska.jpg",
    alt: "Příprava ke zkoušce",
    imgSide: "left",
  },
  {
    num: "04",
    title: "Rekvalifikace i restart",
    text: "Kurzy připravujeme tak, aby odpovídaly i požadavkům úřadů práce. Pomůžeme vám s administrací i dotací.",
    img: "studium-ucebna.jpg",
    alt: "Studium v učebně",
    imgSide: "right",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Split Spotlight */}
      <section className="hp-hero">
        <div className="hp-hero__grid">
          <div className="hp-hero__text">
            <span className="hp-hero__eyebrow">
              <GraduationCap size={17} /> Středisko profesního vzdělávání
            </span>
            <h1 className="hp-hero__labels">
              <span className="hp-hero__label hp-hero__label--top">
                Z praxe ke kvalifikaci.
              </span>
              <span className="hp-hero__label hp-hero__label--bottom">
                Nejkratší cestou.
              </span>
            </h1>
            <p className="hp-hero__lead">
              Státní osvědčení, které uznává úřad i zaměstnavatel a otevře
              cestu na vlastní živnost. Postavené na praxi, ne na měsících
              teorie.
            </p>
            <div className="hp-hero__actions">
              <Button
                variant="cta"
                size="lg"
                icon={<ArrowRight />}
                href="#kurzy"
              >
                Vybrat kurz
              </Button>
              <span className="hp-hero__location">
                Husova 380, Přeštice · Plzeňsko
              </span>
            </div>
          </div>
          <div className="hp-hero__photo">
            <Image
              src={`${basePath}/photos/homepage/hero-vycvik.jpg`}
              alt="Elektrikář při praktickém výcviku"
              width={800}
              height={600}
              priority
              className="hp-hero__img"
            />
            <div className="hp-hero__gradient" />
          </div>
        </div>
      </section>

      {/* VYBERTE SI OBOR */}
      <section className="hp-choose" id="kurzy">
        <div className="hp-choose__inner">
          <FadeIn>
            <div className="hp-choose__head">
              <Eyebrow>Vyberte si obor</Eyebrow>
              <Heading as="h2">Co chcete dělat?</Heading>
            </div>
          </FadeIn>
          <div className="hp-choose__cards">
            <FadeIn>
              <a className="hp-pick hp-pick--e" href={`${basePath}/elektrikar-za-10-dni/`}>
                <span className="hp-pick__kicker">Kompletní kvalifikace</span>
                <h3 className="hp-pick__title">Elektrikář za 10 dní</h3>
                <p className="hp-pick__desc">
                  5 profesních kvalifikací, zkouška §6 a státní osvědčení. Školu
                  mít nemusíte.
                </p>
                <span className="hp-pick__price">
                  od 40 000 Kč <small>sleva 20 %</small>
                </span>
                <span className="hp-pick__go">
                  Chci být elektrikář <ArrowRight size={17} />
                </span>
              </a>
            </FadeIn>
            <FadeIn>
              <a className="hp-pick hp-pick--c" href={`${basePath}/chlazeni/`}>
                <span className="hp-pick__kicker">23-054 + 23-055</span>
                <h3 className="hp-pick__title">Chlazení za 4 dny</h3>
                <p className="hp-pick__desc">
                  Dvě osvědčení NSK pro malá i velká chladicí zařízení a tepelná
                  čerpadla.
                </p>
                <span className="hp-pick__price">
                  od 20 000 Kč <small>sleva 20 %</small>
                </span>
                <span className="hp-pick__go">
                  Chci dělat chlazení <ArrowRight size={17} />
                </span>
              </a>
            </FadeIn>
          </div>
          <FadeIn>
            <a className="hp-choose__strip" href={`${basePath}/rekvalifikace/`}>
              <span className="hp-choose__strip-icon" aria-hidden="true">
                <Landmark size={30} />
              </span>
              <span className="hp-choose__strip-text">
                <strong>Jste v evidenci úřadu práce?</strong>
                Máme rekvalifikaci Elektrikář, kterou hradí úřad práce —
                spoluúčast 0 Kč.
              </span>
              <span className="hp-choose__strip-go">
                Zjistit víc <ArrowRight size={18} />
              </span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* DUŠE ŠKOLY */}
      <section className="hp-soul">
        <div className="hp-soul__decor" aria-hidden="true">
          <div className="hp-soul__glow" />
          <svg
            className="hp-soul__shape hp-soul__shape--check"
            viewBox="0 0 100 100"
          >
            <path
              d="M18 54 L32 41 L47 59 L79 18 L93 30 L47 83 Z"
              fill="#F9DE74"
            />
          </svg>
          <svg
            className="hp-soul__shape hp-soul__shape--circle"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F9DE74"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="hp-soul__inner">
          <FadeIn>
            <Eyebrow tone="ondark" className="hp-soul__eyebrow">
              O nás
            </Eyebrow>
          </FadeIn>
          <FadeIn>
            <blockquote className="hp-soul__quote">
              „Jsme malá škola. Děláme ze šikovných lidí{" "}
              <span className="hp-soul__accent">kvalifikované</span>, rychle a
              tak, aby odcházeli spokojení a s jistotou."
            </blockquote>
          </FadeIn>
          <div className="hp-soul__cols">
            {SOUL_COLS.map((text, i) => (
              <FadeIn key={i}>
                <p className="hp-soul__col">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO FUNGUJE */}
      <section className="hp-steps">
        <div className="hp-steps__inner">
          <FadeIn>
            <div className="hp-steps__head">
              <Eyebrow>Jak to funguje</Eyebrow>
              <Heading as="h2">
                Od rozhodnutí k osvědčení ve čtyřech krocích.
              </Heading>
            </div>
          </FadeIn>
          <ol className="hp-steps__list">
            {STEPS.map((step, i) => (
              <FadeIn key={i}>
                <li className="hp-steps__item">
                  <div className="hp-steps__bullet-col">
                    <span
                      className={`hp-steps__num${i === 3 ? " hp-steps__num--last" : ""}`}
                    >
                      {i + 1}
                    </span>
                    {i < 3 && <span className="hp-steps__line" />}
                  </div>
                  <div className="hp-steps__body">
                    <h3 className="hp-steps__title">{step.title}</h3>
                    <p className="hp-steps__text">{step.text}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* PROČ SI VYBRAT — ZIGZAG */}
      <section className="hp-zigzag">
        <div className="hp-zigzag__inner">
          <FadeIn>
            <div className="hp-zigzag__head">
              <Eyebrow>Proč si vybrat naši školu</Eyebrow>
              <Heading as="h2">
                Čtyři důvody, proč to u nás dává smysl.
              </Heading>
            </div>
          </FadeIn>
          <div className="hp-zigzag__items">
            {ZIGZAG.map((item) => (
              <FadeIn key={item.num}>
                <div
                  className={`hp-zigzag__row${item.imgSide === "right" ? " hp-zigzag__row--reverse" : ""}`}
                >
                  <div className="hp-zigzag__img">
                    <Image
                      src={`${basePath}/photos/homepage/${item.img}`}
                      alt={item.alt}
                      width={600}
                      height={450}
                      style={{
                        objectFit: "cover",
                        objectPosition: item.imgPosition ?? "center",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="hp-zigzag__text">
                    <span className="hp-zigzag__num">{item.num}</span>
                    <h3 className="hp-zigzag__title">{item.title}</h3>
                    <p className="hp-zigzag__desc">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hp-cta">
        <FadeIn>
          <div className="hp-cta__inner">
            <h2 className="hp-cta__h2">Připraveni začít?</h2>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight />}
              href={`${basePath}/elektrikar-za-10-dni/#registrace`}
            >
              Rezervovat termín
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
