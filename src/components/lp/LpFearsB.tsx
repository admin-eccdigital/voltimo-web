import { type ReactNode } from "react";
import { HelpCircle, ShieldCheck } from "lucide-react";
import { Section, Eyebrow, Heading } from "@/components/brand";
import { FadeIn } from "./FadeIn";

interface Fear {
  q: string;
  a: ReactNode;
  tag: string;
}

const FEARS: Fear[] = [
  {
    q: "Nikdy jsem elektro nedělal. Zvládnu to?",
    a: (
      <>
        Ano. Kurz je postavený tak, aby ho zvládl člověk{" "}
        <strong>bez předchozí zkušenosti</strong>. Začínáme od základů,
        vše si prakticky osaháte. K elektro škole ani výučnímu listu
        vás nepotřebujeme.
      </>
    ),
    tag: "Začínáme od nuly",
  },
  {
    q: "Zvládnu za 10 dní to, co jiní studují roky?",
    a: (
      <>
        Neučíme teorii pro teorii. Soustředíme se na to, co{" "}
        <strong>reálně potřebujete v praxi</strong>. 10 dní intenzivního
        výcviku nahradí měsíce klasického studia. 96 % účastníků projde
        zkouškou napoprvé.
      </>
    ),
    tag: "96 % úspěšnost",
  },
  {
    q: "Co když zjistím, že elektro není pro mě?",
    a: (
      <>
        Záruka prvního dne: když po prvním dni zjistíte, že to není pro vás,{" "}
        <strong>vrátíme vám peníze</strong>. Žádné riziko, žádné závazky.
      </>
    ),
    tag: "Záruka vrácení peněz",
  },
];

export function LpFearsB() {
  return (
    <Section tone="subtle">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-head">
          <Eyebrow>Bez obav</Eyebrow>
          <Heading level={2}>Změna oboru vypadá velká. Ale nemusí být.</Heading>
        </div>
        <div className="lp-fears">
          {FEARS.map((f) => (
            <div className="lp-fear" key={f.q}>
              <h3 className="lp-fear__q">
                <span className="lp-fear__q-ic">
                  <HelpCircle />
                </span>
                {f.q}
              </h3>
              <p className="lp-fear__a">{f.a}</p>
              <span className="lp-fear__tag">
                <ShieldCheck />
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
