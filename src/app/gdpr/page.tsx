import type { Metadata } from "next";
import { FadeIn } from "@/components/lp/FadeIn";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zásady zpracování osobních údajů",
  description:
    "Zásady zpracování osobních údajů (GDPR) Střediska profesního vzdělávání VOLTIMO s.r.o. Účinné od 1. 3. 2026.",
  alternates: { canonical: `${SITE_URL}/gdpr/` },
};

export default function GdprPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <span className="legal-hero__eyebrow">Ochrana soukromí</span>
          <h1>Zásady zpracování osobních údajů</h1>
          <p className="legal-hero__meta">
            GDPR · Středisko profesního vzdělávání VOLTIMO s.r.o. · Účinné od
            1. 3. 2026
          </p>
        </div>
      </section>

      <section className="legal">
        <FadeIn>
          <div className="legal__inner">
            <p className="legal__intro">
              Tyto zásady vysvětlují, jak zpracováváme osobní údaje účastníků
              kurzů, zkoušek a návštěvníků webu voltimo.cz, jaké údaje
              potřebujeme, proč je potřebujeme, jak dlouho je uchováváme a jaká
              máte práva.
            </p>

            <div className="legal__section">
              <h2>1. Správce osobních údajů</h2>
              <p>Správcem osobních údajů je:</p>
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
                Nemáme povinnost jmenovat pověřence pro ochranu osobních údajů
                (DPO). Pokud se nás přesto chcete na cokoliv zeptat, kontaktujte
                nás na uvedeném e-mailu.
              </p>
            </div>

            <div className="legal__section">
              <h2>2. Jaké osobní údaje zpracováváme</h2>
              <ul>
                <li>
                  <strong>Identifikační a kontaktní údaje:</strong> jméno,
                  příjmení, datum narození (pokud je vyžadováno), adresa (pokud
                  je vyžadována), e-mail, telefon.
                </li>
                <li>
                  <strong>Údaje o účasti:</strong> objednaný kurz/zkouška,
                  termín, docházka, výsledky zkoušek, vydaná osvědčení
                  (v rozsahu nutném pro organizaci a evidenci).
                </li>
                <li>
                  <strong>Fakturační údaje:</strong> fakturační adresa, IČ/DIČ
                  (u podnikatelů), platební informace a historie plateb.
                </li>
                <li>
                  <strong>Komunikační údaje:</strong> obsah komunikace (např.
                  e-maily) související s objednávkou, organizací nebo
                  reklamací.
                </li>
                <li>
                  <strong>Údaje z webu:</strong> technické údaje a identifikátory
                  (např. IP adresa, cookies) v rozsahu popsaném v části Cookies.
                </li>
              </ul>
            </div>

            <div className="legal__section">
              <h2>3. Proč údaje zpracováváme (účely) a na jakém základě</h2>
              <p>
                Osobní údaje zpracováváme jen v nezbytném rozsahu a pro jasné
                účely:
              </p>
              <h3>A) Přihlášení, organizace a realizace kurzů a zkoušek</h3>
              <p>
                Zajištění registrace, komunikace, organizace termínů, účasti
                a vystavení dokladů/osvědčení. Právní základ: plnění smlouvy
                a kroky před uzavřením smlouvy.
              </p>
              <h3>B) Plnění zákonných povinností</h3>
              <p>
                Např. účetní a daňové povinnosti, vedení povinné dokumentace.
                Právní základ: plnění právní povinnosti.
              </p>
              <h3>C) Ochrana našich právních nároků a interní evidence</h3>
              <p>
                Řešení reklamací, vymáhání pohledávek, vedení nezbytné
                dokumentace a auditní stopy. Právní základ: oprávněný zájem.
              </p>
              <h3>
                D) Marketing a obchodní sdělení (pokud dáte souhlas nebo to
                zákon dovolí)
              </h3>
              <p>
                Zasílání informací o našich kurzech a novinkách. Právní základ:
                souhlas, případně oprávněný zájem u stávajících zákazníků
                v mezích zákona (s možností jednoduchého odhlášení).
              </p>
              <h3>E) Zlepšování webu a měření návštěvnosti</h3>
              <p>
                Zajištění fungování webu, bezpečnost, statistiky a zlepšování
                obsahu. Právní základ: oprávněný zájem (nezbytné cookies)
                a souhlas (analytické/marketingové cookies).
              </p>
            </div>

            <div className="legal__section">
              <h2>4. Kdo může mít k údajům přístup (příjemci a zpracovatelé)</h2>
              <p>
                K osobním údajům mají přístup pouze osoby, které je potřebují
                k zajištění služby. Můžeme využívat externí dodavatele
                (zpracovatele), typicky:
              </p>
              <ul>
                <li>
                  poskytovatelé e-mailu a IT služeb, webhostingu a správy webu,
                </li>
                <li>účetní a daňové služby,</li>
                <li>platební a bankovní služby,</li>
                <li>
                  poskytovatelé nástrojů pro formuláře, analýzu návštěvnosti
                  a marketing (pouze dle nastavení souhlasů).
                </li>
              </ul>
              <p>
                Se zpracovateli máme uzavřené smlouvy o zpracování osobních
                údajů, pokud to vyžaduje GDPR.
              </p>
            </div>

            <div className="legal__section">
              <h2>5. Předávání osobních údajů mimo EU/EHP</h2>
              <p>
                Primárně zpracováváme údaje v EU/EHP. Pokud by některý z našich
                dodavatelů zpracovával údaje mimo EU/EHP (např. u některých
                cloudových služeb), děje se to pouze při zajištění odpovídajících
                záruk (např. standardní smluvní doložky).
              </p>
            </div>

            <div className="legal__section">
              <h2>6. Jak dlouho údaje uchováváme</h2>
              <p>Údaje uchováváme jen po dobu nezbytně nutnou:</p>
              <ul>
                <li>
                  údaje k přihlášení a realizaci služby – po dobu trvání služby
                  a následně po dobu nutnou pro administrativu a obhajobu
                  nároků,
                </li>
                <li>
                  účetní a daňové doklady – po dobu vyžadovanou právními
                  předpisy,
                </li>
                <li>
                  marketingová sdělení – do odvolání souhlasu nebo do odhlášení,
                </li>
                <li>
                  cookies – dle typu cookies a nastavení ve vašem prohlížeči
                  (podrobněji níže).
                </li>
              </ul>
            </div>

            <div className="legal__section">
              <h2>7. Jaká máte práva</h2>
              <p>
                V souvislosti se zpracováním osobních údajů máte zejména tato
                práva:
              </p>
              <ul>
                <li>právo na přístup k osobním údajům,</li>
                <li>právo na opravu nepřesných údajů,</li>
                <li>právo na výmaz (v případech stanovených GDPR),</li>
                <li>právo na omezení zpracování,</li>
                <li>
                  právo vznést námitku proti zpracování na základě oprávněného
                  zájmu,
                </li>
                <li>
                  právo na přenositelnost údajů (pokud je zpracování založeno na
                  smlouvě nebo souhlasu a probíhá automatizovaně),
                </li>
                <li>
                  právo odvolat souhlas (pokud zpracování stojí na souhlasu) –
                  odvolání nemá vliv na zákonnost předchozího zpracování.
                </li>
              </ul>
              <p>
                Pokud se domníváte, že zpracování osobních údajů porušuje právní
                předpisy, máte právo podat stížnost u dozorového úřadu: Úřad pro
                ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7,{" "}
                <a
                  href="https://www.uoou.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.uoou.cz
                </a>
              </p>
            </div>

            <div className="legal__section">
              <h2>8. Cookies a měření návštěvnosti</h2>
              <p>Na webu používáme cookies a podobné technologie pro:</p>
              <ul>
                <li>nezbytné fungování webu a bezpečnost (nezbytné cookies),</li>
                <li>
                  měření návštěvnosti a výkonu (analytické cookies) – pouze
                  pokud dáte souhlas,
                </li>
                <li>marketing (marketingové cookies) – pouze pokud dáte souhlas.</li>
              </ul>
              <p>
                Souhlasy s cookies můžete kdykoliv změnit v nastavení cookies na
                webu nebo ve vašem prohlížeči.
              </p>
            </div>

            <div className="legal__section">
              <h2>9. Zabezpečení</h2>
              <p>
                Přijímáme přiměřená technická a organizační opatření
                k zabezpečení osobních údajů (např. řízení přístupů, zabezpečené
                účty, pravidelné aktualizace, zálohování).
              </p>
            </div>

            <div className="legal__section">
              <h2>10. Závěrečná ustanovení</h2>
              <p>
                Tyto zásady můžeme průběžně aktualizovat. Aktuální verze je vždy
                dostupná na webu. Máte-li dotaz ke zpracování osobních údajů,
                kontaktujte nás na e-mailu uvedeném v části 1.
              </p>
            </div>

            <p className="legal__updated">Účinné od 1. 3. 2026.</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
