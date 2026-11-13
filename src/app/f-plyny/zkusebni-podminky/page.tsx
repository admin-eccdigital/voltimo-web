import type { Metadata } from "next";
import { FadeIn } from "@/components/lp/FadeIn";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "F-plyny: informace pro uchazeče a zkušební podmínky",
  description:
    "Informace pro uchazeče o certifikační zkoušce F-plyny (certifikát A1) ve Středisku profesního vzdělávání VOLTIMO s.r.o. Průběh zkoušky, kritéria a zkušební podmínky.",
  alternates: { canonical: `${SITE_URL}/f-plyny/zkusebni-podminky/` },
  robots: { index: false, follow: false },
};

export default function FplynyPodminkyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <span className="legal-hero__eyebrow">F-plyny · certifikát A1</span>
          <h1>Informace pro uchazeče o průběhu zkoušek a zkušebních podmínkách</h1>
          <p className="legal-hero__meta">
            Příloha č. 2 k žádosti o vydání povolení podle § 8 odst. 1 zákona
            č. 73/2012 Sb. · Středisko profesního vzdělávání VOLTIMO s.r.o.
          </p>
        </div>
      </section>

      <section className="legal">
        <FadeIn>
          <div className="legal__inner">
            <p className="legal__intro">
              Vážená uchazečko, vážený uchazeči, tento dokument vám pomůže
              porozumět, jak probíhá certifikační zkouška u společnosti Středisko
              profesního vzdělávání VOLTIMO s.r.o., která je hodnotícím a
              certifikačním subjektem pro oblast stacionárních chladicích
              zařízení, klimatizačních zařízení a tepelných čerpadel obsahujících
              fluorované skleníkové plyny nebo jejich alternativy. Najdete zde
              informace o tom, jak se na zkoušku přihlásit, co vás u zkoušky
              čeká, jaká musíte splnit kritéria a jaký dokument na jejím konci
              získáte.
            </p>

            <div className="legal__section">
              <h2>1. Komu je certifikát určen</h2>
              <p>
                Certifikát je určen fyzickým osobám, které vykonávají některou z
                činností uvedených v čl. 2 odst. 1 Prováděcího nařízení Komise
                (EU) 2024/2215, tedy zejména:
              </p>
              <ul>
                <li>
                  kontroly těsnosti zařízení obsahujících fluorované skleníkové
                  plyny,
                </li>
                <li>
                  instalaci zařízení obsahujících fluorované skleníkové plyny
                  nebo alternativní látky (amoniak, oxid uhličitý nebo
                  uhlovodíky),
                </li>
                <li>
                  opravu, údržbu, servis a vyřazení z provozu uvedených zařízení,
                </li>
                <li>
                  znovuzískávání fluorovaných skleníkových plynů z chladicích
                  okruhů.
                </li>
              </ul>
              <p>
                Bez platného certifikátu nesmí fyzická osoba uvedené činnosti
                provádět.
              </p>
            </div>

            <div className="legal__section">
              <h2>2. Typy certifikátů, které vydáváme</h2>
              <p>
                Středisko profesního vzdělávání VOLTIMO s.r.o. vydává certifikát
                typu <strong>A1</strong> podle čl. 3 odst. 2 písm. a) Prováděcího
                nařízení Komise (EU) 2024/2215. Držitel certifikátu A1 je
                oprávněn vykonávat veškeré činnosti uvedené v čl. 2 odst. 1 v
                souvislosti s fluorovanými skleníkovými plyny a uhlovodíky bez
                omezení velikosti náplně.
              </p>
            </div>

            <div className="legal__section">
              <h2>3. Jak se přihlásit ke zkoušce</h2>
              <ul>
                <li>
                  Stáhněte si formulář žádosti o vydání certifikátu z webových
                  stránek subjektu (nebo si jej vyžádejte e-mailem).
                </li>
                <li>
                  Vyplněnou žádost odešlete e-mailem na adresu{" "}
                  <a href="mailto:info@voltimo.cz">info@voltimo.cz</a>, datovou
                  schránkou ID <strong>uivqak5</strong>, poštou na adresu sídla
                  subjektu, nebo osobně.
                </li>
                <li>
                  Uhraďte cenu za zkoušku podle aktuálního ceníku, který je
                  dostupný na webových stránkách subjektu nebo na vyžádání.
                </li>
                <li>
                  Po přijetí žádosti a platby vám zašleme termín a místo konání
                  zkoušky, nejpozději 14 dnů před jejím konáním.
                </li>
                <li>
                  K samotné zkoušce si přineste platný doklad totožnosti
                  (občanský průkaz nebo cestovní pas).
                </li>
              </ul>
            </div>

            <div className="legal__section">
              <h2>4. Struktura a průběh zkoušky</h2>
              <p>
                Zkouška se skládá ze dvou částí, teoretické a praktické, které
                probíhají v jeden den.
              </p>

              <h3>4.1 Teoretická zkouška</h3>
              <ul>
                <li>Forma: písemný test.</li>
                <li>
                  Délka: nejvýše 60 minut (§ 4 odst. 4 vyhlášky č. 243/2023 Sb.).
                </li>
                <li>
                  Počet otázek: test obsahuje 50 náhodně vybraných otázek ze
                  schváleného seznamu zkušebních otázek.
                </li>
                <li>
                  Struktura: test se skládá ze dvou tematických okruhů. První
                  ověřuje znalosti uvedené v Příloze I Prováděcího nařízení (EU)
                  2024/2215. Druhý ověřuje teoretickou odbornou způsobilost pro
                  typ certifikátu, o který žádáte.
                </li>
                <li>
                  Forma otázek: u každé otázky je výběr ze tří možností, právě
                  jedna je správná.
                </li>
                <li>
                  Hodnocení: pro úspěšné složení je nutné dosáhnout alespoň{" "}
                  <strong>80 % správných odpovědí</strong>. Výsledek je „vyhověl",
                  nebo „nevyhověl".
                </li>
              </ul>

              <h3>4.2 Praktická zkouška</h3>
              <ul>
                <li>
                  Předpoklad: k praktické zkoušce může být připuštěn pouze
                  uchazeč, který úspěšně složil teoretickou zkoušku (§ 5 odst. 1
                  vyhlášky č. 243/2023 Sb.).
                </li>
                <li>
                  Forma: vylosujete si jednu praktickou zkušební otázku ze
                  schváleného seznamu. Úkol řešíte na zkušebním přístrojovém
                  vybavení a zároveň komisi popisujete, co děláte a proč.
                </li>
                <li>
                  Délka: nejméně 30 minut (§ 5 odst. 5 vyhlášky č. 243/2023 Sb.).
                </li>
                <li>
                  Komise: praktickou zkoušku hodnotí nejméně 3 členové zkušební
                  komise, které na návrh subjektu jmenuje Ministerstvo životního
                  prostředí (§ 8a odst. 2 zákona č. 73/2012 Sb.) a kteří jsou
                  uvedeni na schváleném seznamu tvořícím součást povolení
                  subjektu. Před zahájením zkoušky si komise ze svých řad volí
                  předsedu, který řídí průběh a oznamuje výsledek (§ 5 odst. 3
                  vyhlášky č. 243/2023 Sb.).
                </li>
                <li>
                  Dotazy komise: během řešení a po něm vám komise může klást
                  doplňující otázky vztahující se k vylosované úloze.
                </li>
                <li>
                  Protokol: o průběhu praktické zkoušky se vypracovává protokol
                  obsahující identifikační údaje uchazeče, typ certifikátu,
                  identifikaci vylosované otázky a celkové hodnocení (§ 5 odst. 4
                  vyhlášky č. 243/2023 Sb.).
                </li>
                <li>
                  Hodnocení: výsledek je „vyhověl", nebo „nevyhověl". V případě
                  rovnosti hlasů členů komise rozhoduje hlas předsedy.
                </li>
              </ul>
            </div>

            <div className="legal__section">
              <h2>5. Co když zkoušku nesložím napoprvé</h2>
              <p>
                Pokud teoretickou nebo praktickou zkoušku nesložíte, můžete ji
                opakovat; pro opakovanou zkoušku platí stejné minimální
                požadavky (§ 4 odst. 6 vyhlášky č. 243/2023 Sb.). Termín
                opakované zkoušky vám nabídneme nejdříve po uplynutí 14 dnů a
                nejpozději do 12 měsíců od neúspěšné zkoušky.
              </p>
            </div>

            <div className="legal__section">
              <h2>6. Co po úspěšném složení získám</h2>
              <p>
                Po úspěšném složení teoretické i praktické zkoušky vydá Středisko
                profesního vzdělávání VOLTIMO s.r.o. certifikát:
              </p>
              <ul>
                <li>typu A1,</li>
                <li>na dobu neurčitou,</li>
                <li>v listinné nebo elektronické podobě,</li>
                <li>
                  obsahuje vaše identifikační údaje, jedinečné číslo certifikátu,
                  vymezení činností a typu certifikátu, datum vydání a podpis
                  oprávněné osoby (§ 11 odst. 2 vyhlášky č. 243/2023 Sb.).
                </li>
              </ul>
              <p>
                Certifikát vám vystavíme nejpozději do 30 dnů ode dne úspěšného
                složení praktické zkoušky. Ve stejné lhůtě předáme údaje o
                vydaném certifikátu Ministerstvu životního prostředí a jeho kopii
                České inspekci životního prostředí (§ 8a odst. 1 zákona
                č. 73/2012 Sb.).
              </p>
              <p>
                Vydaný certifikát je uznáván ve všech členských státech Evropské
                unie podle čl. 9 Prováděcího nařízení (EU) 2024/2215.
              </p>
            </div>

            <div className="legal__section">
              <h2>7. Cena za zkoušku</h2>
              <p>
                Cena za zkoušku se řídí aktuálním ceníkem, který je k dispozici
                na webových stránkách hodnotícího a certifikačního subjektu a na
                vyžádání. Ceník je aktualizován dle potřeby.
              </p>
            </div>

            <div className="legal__section">
              <h2>8. Recertifikace: povinnost obnovení znalostí</h2>
              <p>
                Držitel certifikátu typu A1 je povinen v souladu s čl. 10 odst. 9
                Nařízení Evropského parlamentu a Rady (EU) 2024/573 o fluorovaných
                skleníkových plynech absolvovat nejméně jednou za 7 let
                aktualizační školení k obnovení znalostí, případně opětovně
                složit certifikační zkoušku. Účelem recertifikace je zajistit,
                aby držitel certifikátu byl seznámen s aktuálním stavem
                legislativy, novými chladivy (zejména přírodními a hořlavými
                alternativami) a aktuálními bezpečnostními a technickými normami.
              </p>
              <p>
                Středisko profesního vzdělávání VOLTIMO s.r.o. bude jako
                hodnotící a certifikační subjekt zajišťovat oba způsoby
                recertifikace, aktualizační školení i opakovanou zkoušku.
                Informace o aktuálních termínech recertifikačních školení a
                zkoušek subjekt průběžně zveřejňuje dálkovým přístupem na svém
                webu.
              </p>
              <p>
                Bez absolvování recertifikace v zákonné lhůtě může dojít k
                pozbytí platnosti certifikátu pro účely výkonu činností uvedených
                v čl. 2 odst. 1 Prováděcího nařízení Komise (EU) 2024/2215.
              </p>
            </div>

            <div className="legal__section">
              <h2>9. Kontakty</h2>
              <p>
                Hodnotící a certifikační subjekt: Středisko profesního vzdělávání
                VOLTIMO s.r.o.
              </p>
              <ul>
                <li>Sídlo: Husova 380, 334 01 Přeštice</li>
                <li>IČO: 08913757</li>
                <li>Datová schránka: uivqak5</li>
                <li>
                  E-mail:{" "}
                  <a href="mailto:info@voltimo.cz">info@voltimo.cz</a>
                </li>
                <li>
                  Telefon: <a href="tel:+420601002989">+420 601 002 989</a>
                </li>
                <li>Web: www.voltimo.cz</li>
              </ul>
            </div>

            <div className="legal__section">
              <h2>10. Ochrana osobních údajů</h2>
              <p>
                Údaje, které uchazeč poskytuje subjektu v rámci přihlášky a v
                průběhu zkoušky, jsou zpracovávány v souladu s nařízením (EU)
                2016/679 (GDPR) a zákonem č. 110/2019 Sb. Zpracování probíhá pro
                účely organizace zkoušky, vydání certifikátu a předání zákonem
                vyžadovaných údajů Ministerstvu životního prostředí a České
                inspekci životního prostředí. Záznamy o zkoušce a vydaných
                certifikátech jsou uchovávány nejméně 5 let (§ 8a odst. 1 písm. c)
                zákona č. 73/2012 Sb.).
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
