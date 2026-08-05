import type { Metadata } from "next";
import { Award, Wrench, Banknote, ShieldCheck, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "@/components/lp/FadeIn";
import { JsonLd } from "@/components/site";
import { SITE_URL } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Časté dotazy",
  description:
    "Nejčastější dotazy o profesních kvalifikacích, kurzech a zkouškách NSK ve Středisku profesního vzdělávání VOLTIMO.",
  alternates: { canonical: `${SITE_URL}/faq/` },
  openGraph: {
    title: "Časté dotazy — Voltimo",
    description: "Odpovědi na nejčastější otázky o kurzech, zkouškách a profesních kvalifikacích.",
  },
};

// Textové verze odpovědí pro strukturovaná data (FAQPage rich results).
const FAQ_LD_ITEMS: { q: string; a: string }[] = [
  {
    q: "Co je to profesní kvalifikace podle NSK?",
    a: "Je to oficiálně uznávané osvědčení o odbornosti. Získáte ho složením zkoušky dle Národní soustavy kvalifikací. Má váhu u zaměstnavatelů, živnostenského úřadu i státu.",
  },
  {
    q: "Je to stejné jako výuční list?",
    a: "Ne. Výuční list se získává studiem na odborné střední škole. NSK kvalifikace je určená pro dospělé, dá se složit na základě kurzu a zkoušky, bez tříletého studia.",
  },
  {
    q: "Co můžu se zkouškou podle NSK dělat dál?",
    a: "Získáte Osvědčení o profesní kvalifikaci, které má váhu u zaměstnavatelů, živnostenských úřadů i státu. Můžete s ním žádat o živnostenské oprávnění v daném oboru, doložit odbornost zaměstnavateli, využít ho jako součást rekvalifikace nebo kariérního postupu, nebo si rozšířit stávající kvalifikaci (např. u elektro profesí ve spojení s NV 194/2022 Sb. a získat odbornou způsobilost elektrotechnik §6).",
  },
  {
    q: "Musím už mít praxi v oboru, nebo můžu začít od nuly?",
    a: "Můžete obojí. Některé zkoušky jsou vhodné i pro začátečníky, zvládnete je s intenzivní přípravou. Pokud už máte praxi, budete mít výhodu, ale není to podmínkou.",
  },
  {
    q: "Kolik času mi zabere příprava?",
    a: "Záleží na vaší úrovni znalostí. Někteří se připraví za pár týdnů, jiní potřebují víc času. Na kurzu vám pomůžeme zaměřit se na to, co je pro vás klíčové.",
  },
  {
    q: "Kde probíhá výuka a zkouška?",
    a: "Praktická i teoretická část výuky i zkoušky probíhá ve vybavené učebně v Přešticích na reálných zařízeních.",
  },
  {
    q: "Co když zkoušku neudělám napoprvé?",
    a: "Můžete ji opakovat. A hlavně: připravíme vás tak, abyste ji napoprvé zvládli. Máme zkušenosti s tím, jak vás připravit prakticky a srozumitelně.",
  },
  {
    q: "Kolik to stojí a co je v ceně?",
    a: "Cenu najdete u každého kurzu. V ceně je výuka, podklady i příprava ke zkoušce. Neplatíte žádné skryté poplatky, vše vám vysvětlíme předem.",
  },
  {
    q: "Co když mi nevyhovuje termín kurzu nebo zkoušky?",
    a: "Ozvěte se nám, v mnoha případech umíme najít individuální řešení. Přípravu můžeme přizpůsobit vašemu času, případně domluvit individuální konzultace nebo náhradní termín.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_LD_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

type FaqItem = { q: string; a: ReactNode };

const GROUP_A: FaqItem[] = [
  {
    q: "Co je to profesní kvalifikace podle NSK?",
    a: (
      <>
        Je to oficiálně uznávané osvědčení o odbornosti. Získáte ho složením
        zkoušky dle Národní soustavy kvalifikací. Má váhu u zaměstnavatelů,
        živnostenského úřadu i státu.{" "}
        <a
          href="https://www.narodnikvalifikace.cz/kvalifikace-578-Monter_monterka_elektrickych_instalaci/revize-3458/kvalifikacni-standard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Podívejte se na kvalifikační standard.
        </a>
      </>
    ),
  },
  {
    q: "Je to stejné jako výuční list?",
    a: "Ne. Výuční list se získává studiem na odborné střední škole. NSK kvalifikace je určená pro dospělé, dá se složit na základě kurzu a zkoušky, bez tříletého studia.",
  },
  {
    q: "Co můžu se zkouškou podle NSK dělat dál?",
    a: (
      <>
        Získáte{" "}
        <strong className="faq-strong">
          Osvědčení o profesní kvalifikaci
        </strong>
        , které má váhu u zaměstnavatelů, živnostenských úřadů i státu. S tímto
        dokumentem můžete:
        <ul className="faq-list">
          <li>
            žádat o{" "}
            <strong className="faq-strong">živnostenské oprávnění</strong>{" "}
            v daném oboru,
          </li>
          <li>
            doložit odbornost zaměstnavateli při nástupu do nové práce,
          </li>
          <li>
            využít ho jako{" "}
            <strong className="faq-strong">
              součást rekvalifikace nebo kariérního postupu
            </strong>
            ,
          </li>
          <li>
            rozšířit si stávající kvalifikaci nebo oprávnění (např. u elektro
            profesí ve spojení s NV 194/2022 Sb. a získat odbornou kvalifikaci
            elektrotechnik §6).
          </li>
        </ul>
      </>
    ),
  },
];

const GROUP_B: FaqItem[] = [
  {
    q: "Musím už mít praxi v oboru, nebo můžu začít od nuly?",
    a: "Můžete obojí. Některé zkoušky jsou vhodné i pro začátečníky, zvládnete je s intenzivní přípravou. Pokud už máte praxi, budete mít výhodu, ale není to podmínkou.",
  },
  {
    q: "Kolik času mi zabere příprava?",
    a: "Záleží na vaší úrovni znalostí. Někteří se připraví za pár týdnů, jiní potřebují víc času. Na kurzu vám pomůžeme zaměřit se na to, co je pro vás klíčové.",
  },
  {
    q: "Kde probíhá výuka a zkouška?",
    a: "Praktická i teoretická část výuky i zkoušky probíhá ve vybavené učebně v Přešticích na reálných zařízeních.",
  },
  {
    q: "Co když zkoušku neudělám napoprvé?",
    a: (
      <>
        Můžete ji opakovat. A hlavně: připravíme vás tak, abyste ji{" "}
        <strong className="faq-strong">napoprvé zvládli.</strong> Máme
        zkušenosti s tím, jak vás připravit prakticky a srozumitelně.
      </>
    ),
  },
];

const GROUP_C: FaqItem[] = [
  {
    q: "Kolik to stojí a co je v ceně?",
    a: "Cenu najdete u každého kurzu. V ceně je výuka, podklady i příprava ke zkoušce. Neplatíte žádné skryté poplatky, vše vám vysvětlíme předem.",
  },
  {
    q: "Co když mi nevyhovuje termín kurzu nebo zkoušky?",
    a: (
      <>
        Ozvěte se nám, v mnoha případech umíme najít individuální řešení.
        Přípravu můžeme přizpůsobit vašemu času, případně domluvit{" "}
        <strong className="faq-strong">
          individuální konzultace nebo náhradní termín.
        </strong>
      </>
    ),
  },
];

function FaqGroup({
  icon,
  label,
  items,
  firstOpen,
}: {
  icon: ReactNode;
  label: string;
  items: FaqItem[];
  firstOpen?: boolean;
}) {
  return (
    <FadeIn>
      <div className="faq-group">
        <div className="faq-group__head">
          {icon}
          <span className="faq-group__label">{label}</span>
        </div>
        <div className="faq-group__items">
          {items.map((item, i) => (
            <details
              key={i}
              className="faq-item"
              {...(firstOpen && i === 0 ? { open: true } : {})}
            >
              <summary className="faq-item__summary">
                <span className="faq-item__q">{item.q}</span>
                <span className="faq-item__plus">+</span>
              </summary>
              <div className="faq-item__answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero__grid" aria-hidden="true" />
        <div className="faq-hero__inner">
          <Eyebrow>Nejčastější dotazy</Eyebrow>
          <h1 className="faq-hero__h1">
            Máte dotazy?{" "}
            <span className="faq-hero__accent">Nabízíme odpovědi.</span>
          </h1>
          <p className="faq-hero__sub">
            Tady najdete odpovědi na to, na co se nás lidé ptají nejčastěji.
            Nenašli jste svoji otázku? Ozvěte se, rádi vám poradíme.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faq-accordion">
        <div className="faq-accordion__grid-bg" aria-hidden="true" />
        <div className="faq-accordion__inner">
          <FaqGroup
            icon={<Award size={18} />}
            label="Kvalifikace a osvědčení"
            items={GROUP_A}
            firstOpen
          />
          <FaqGroup
            icon={<Wrench size={18} />}
            label="Kurz, příprava a zkouška"
            items={GROUP_B}
          />
          <FaqGroup
            icon={<Banknote size={18} />}
            label="Cena a termíny"
            items={GROUP_C}
          />
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="faq-reassure">
        <div className="faq-reassure__glow" />
        <FadeIn>
          <div className="faq-reassure__inner">
            <span className="faq-reassure__icon">
              <ShieldCheck size={34} />
            </span>
            <div className="faq-reassure__text">
              <h2 className="faq-reassure__h2">
                Připravíme vás tak, abyste zkoušku zvládli napoprvé.
              </h2>
              <p className="faq-reassure__desc">
                Jasné zadání, praktický trénink a zpětná vazba. Žádné
                překvapení u zkoušky, budete přesně vědět, co čekat.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <FadeIn>
          <div className="faq-cta__inner">
            <Heading as="h2">Nenašli jste odpověď?</Heading>
            <p className="faq-cta__text">
              Napište nám nebo zavolejte, rádi vám poradíme s výběrem i s
              administrativou.
            </p>
            <Button
              variant="cta"
              size="lg"
              icon={<ArrowRight />}
              href={`${basePath}/kontakt/`}
            >
              Kontaktujte nás
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
