import type { Metadata } from "next";
import { FadeIn } from "@/components/lp/FadeIn";
import { SITE_URL } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Všeobecné obchodní podmínky",
  description:
    "Všeobecné obchodní podmínky (VOP) pro kurzy a zkoušky Střediska profesního vzdělávání VOLTIMO s.r.o. Platné od 1. 3. 2026.",
  alternates: { canonical: `${SITE_URL}/vop/` },
};

export default function VopPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <span className="legal-hero__eyebrow">Právní informace</span>
          <h1>Všeobecné obchodní podmínky</h1>
          <p className="legal-hero__meta">
            Kurzy a zkoušky · Středisko profesního vzdělávání VOLTIMO s.r.o. ·
            Platné od 1. 3. 2026
          </p>
        </div>
      </section>

      <section className="legal">
        <FadeIn>
          <div className="legal__inner">
            <div className="legal__section">
              <h2>1. Kdo jsme (poskytovatel)</h2>
              <p>Poskytovatelem vzdělávacích služeb je:</p>
              <ul>
                <li>Středisko profesního vzdělávání VOLTIMO s.r.o.</li>
                <li>IČ: 08913757</li>
                <li>Sídlo: Husova 380, 334 01 Přeštice</li>
                <li>Zapsáno: C 327468 vedená u Městského soudu v Praze</li>
                <li>
                  E-mail:{" "}
                  <a href="mailto:info@voltimo.cz">info@voltimo.cz</a>
                </li>
                <li>
                  Telefon: <a href="tel:+420601002989">+420 601 002 989</a>
                </li>
              </ul>
              <p>
                Objednatelem je osoba (spotřebitel nebo podnikatel), která
                objedná kurz, školení nebo zkoušku (dále jen „Účastník").
              </p>
            </div>

            <div className="legal__section">
              <h2>2. Co poskytujeme</h2>
              <p>
                Poskytujeme vzdělávací služby a související služby, zejména:
              </p>
              <ul>
                <li>
                  přípravné kurzy/školení k profesním kvalifikacím a odborné
                  způsobilosti dle příslušných předpisů,
                </li>
                <li>
                  kvalifikační zkoušky (dle příslušných standardů / pravidel
                  daných pro daný obor),
                </li>
                <li>související organizační a administrativní zajištění.</li>
              </ul>
              <p>
                Konkrétní obsah, rozsah, místo konání, termín a cena jsou vždy
                uvedeny u daného kurzu/zkoušky na webu nebo v nabídce potvrzené
                Poskytovatelem.
              </p>
            </div>

            <div className="legal__section">
              <h2>3. Objednávka a vznik smlouvy</h2>
              <p>3.1. Objednávku lze provést zejména:</p>
              <ul>
                <li>online přihláškou / formulářem na webu,</li>
                <li>e-mailem,</li>
                <li>telefonicky (následně potvrzeno e-mailem).</li>
              </ul>
              <p>
                3.2. Smlouva je uzavřena okamžikem, kdy Poskytovatel potvrdí
                Účastníkovi přijetí objednávky a termín (nebo nabídne termín)
                a současně jsou splněny podmínky účasti a uhrazena cena nebo
                záloha dle pokynů Poskytovatele.
              </p>
              <p>
                3.3. Účastník je povinen uvádět pravdivé a úplné údaje.
                Poskytovatel může vyžádat doplnění údajů či dokumentů (např.
                pro splnění podmínek účasti).
              </p>
            </div>

            <div className="legal__section">
              <h2>4. Cena a platební podmínky</h2>
              <p>
                4.1. Cena kurzu/zkoušky je uvedena na webu u konkrétní nabídky,
                nebo v cenové nabídce zaslané Účastníkovi.
              </p>
              <p>
                4.2. Ceny jsou uvedeny v Kč. Není-li výslovně uvedeno jinak,
                cena je konečná.
              </p>
              <p>
                4.3. Platba probíhá bankovním převodem na základě faktury /
                zálohové faktury, nebo jiným způsobem, který Poskytovatel
                umožní a předem potvrdí.
              </p>
              <p>
                4.4. Není-li dohodnuto jinak, místo/termín je závazně
                rezervován až po připsání platby (nebo zálohy) na účet
                Poskytovatele.
              </p>
            </div>

            <div className="legal__section">
              <h2>5. Termíny, organizace a změny ze strany poskytovatele</h2>
              <p>
                5.1. Termín konání je stanoven dohodou nebo podle vypsaných
                termínů. U individuálních termínů platí, že termín je závazný
                po potvrzení Poskytovatelem.
              </p>
              <p>
                5.2. Poskytovatel si vyhrazuje právo změnit organizační detaily
                (např. místnost, čas zahájení v rámci dne), změnit lektora,
                nebo v odůvodněných případech termín přesunout (např. nemoc
                lektora, technické důvody, vyšší moc).
              </p>
              <p>
                5.3. Pokud Poskytovatel zruší kurz/zkoušku bez náhradního
                termínu, vrátí Účastníkovi již uhrazenou cenu (nebo její
                poměrnou část). Poskytovatel nehradí vedlejší náklady Účastníka
                (např. doprava, ubytování).
              </p>
            </div>

            <div className="legal__section">
              <h2>6. Storno podmínky (zrušení účasti účastníkem)</h2>
              <p>
                6.1. Zrušení účasti musí Účastník provést písemně (e-mailem).
              </p>
              <p>
                6.2. Storno poplatky (počítáno podle počtu kalendářních dnů
                před zahájením 1. dne kurzu/zkoušky):
              </p>
              <ul>
                <li>9 a více dnů: storno 0 % (vrací se 100 % uhrazené částky)</li>
                <li>8 až 4 dny: storno 50 % ceny</li>
                <li>3 až 0 dnů nebo neúčast: storno 100 % ceny</li>
              </ul>
              <p>
                6.3. V případě, že kurz/zkoušku hradí zaměstnavatel nebo jiný
                subjekt, storno podmínky platí stejně; komunikace může probíhat
                přes plátce, odpovědnost za včasné storno nese Účastník.
              </p>
            </div>

            <div className="legal__section">
              <h2>7. Práva spotřebitele při uzavření smlouvy na dálku</h2>
              <p>
                7.1. Pokud je Účastník spotřebitel a smlouva byla uzavřena na
                dálku (online/e-mail/telefon), může mít obecně právo odstoupit
                od smlouvy do 14 dnů.
              </p>
              <p>
                7.2. Pokud však má být služba poskytnuta v konkrétním termínu
                (např. konkrétní datum kurzu/zkoušky) nebo Účastník požaduje
                zahájení plnění před uplynutím 14 dnů, mohou se uplatnit
                zákonné výjimky a v praxi se poté použijí storno podmínky dle
                čl. 6.
              </p>
            </div>

            <div className="legal__section">
              <h2>8. Podmínky účasti a bezpečnost</h2>
              <p>8.1. Účastník je povinen:</p>
              <ul>
                <li>dostavit se včas,</li>
                <li>řídit se pokyny lektora/autorizované osoby,</li>
                <li>
                  dodržovat bezpečnostní pravidla a provozní řád učeben/dílen,
                </li>
                <li>
                  mít předepsané osobní ochranné pomůcky, pokud jsou vyžadovány
                  (Poskytovatel sdělí předem).
                </li>
              </ul>
              <p>
                8.2. Pokud Účastník svým chováním ohrožuje bezpečnost, průběh
                kurzu nebo ostatní účastníky, je Poskytovatel oprávněn
                Účastníka vyloučit bez nároku na vrácení ceny.
              </p>
            </div>

            <div className="legal__section">
              <h2>9. Zkoušky, výsledky a osvědčení</h2>
              <p>
                9.1. Účast na zkoušce je možná pouze při splnění podmínek, které
                jsou pro danou zkoušku požadované (včetně případných dokladů
                a předepsané účasti na přípravě, pokud je stanovena).
              </p>
              <p>
                9.2. Poskytovatel zajistí organizační průběh zkoušky podle
                příslušných standardů a pravidel platných pro daný obor.
              </p>
              <p>
                9.3. Poskytovatel nemůže garantovat úspěšné složení zkoušky –
                výsledek závisí na výkonu Účastníka. Poskytovatel však garantuje
                férové podmínky, jasné instrukce a přípravu v rozsahu dané
                nabídky.
              </p>
            </div>

            <div className="legal__section">
              <h2>10. Reklamace a stížnosti</h2>
              <p>
                10.1. Pokud má Účastník výhrady ke službě (organizace, průběh),
                doporučujeme je řešit ihned na místě.
              </p>
              <p>
                10.2. Reklamaci lze uplatnit písemně na e-mail Poskytovatele do
                7 dnů od poskytnutí služby. Uveďte jméno, kurz/termín, popis
                problému a návrh řešení.
              </p>
              <p>
                10.3. Poskytovatel vyřídí reklamaci bez zbytečného odkladu,
                nejpozději do 30 dnů.
              </p>
            </div>

            <div className="legal__section">
              <h2>11. Ochrana osobních údajů</h2>
              <p>
                Osobní údaje zpracováváme za účelem přihlášení, evidence
                a organizace kurzů/zkoušek, vystavení dokladů a komunikace.
                Podrobnosti jsou uvedeny v samostatném dokumentu{" "}
                <a href={`${basePath}/gdpr/`}>
                  „Zásady ochrany osobních údajů"
                </a>{" "}
                na webu.
              </p>
            </div>

            <div className="legal__section">
              <h2>12. Závěrečná ustanovení</h2>
              <p>12.1. Tyto VOP jsou platné a účinné od 1. 3. 2026.</p>
              <p>
                12.2. Poskytovatel může VOP přiměřeně měnit. Nové znění zveřejní
                na webu; u již objednaných kurzů platí znění účinné ke dni
                objednávky (pokud se strany nedohodnou jinak).
              </p>
              <p>
                12.3. Práva a povinnosti výslovně neupravené těmito VOP se řídí
                právními předpisy České republiky.
              </p>
            </div>

            <p className="legal__updated">Platné a účinné od 1. 3. 2026.</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
