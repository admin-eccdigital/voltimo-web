// Infografiky "cesta" v brandu Voltima. Bez JS, responzivní.
type Step = { n: string; t: string; d: string };

function Cesta({
  label,
  steps,
  variant = "default",
}: {
  label: string;
  steps: readonly Step[];
  variant?: "default" | "hl" | "muted";
}) {
  const cls =
    variant === "hl"
      ? "poradna-flow poradna-flow--hl"
      : variant === "muted"
        ? "poradna-flow poradna-flow--muted"
        : "poradna-flow";
  return (
    <figure className={cls} aria-label={label}>
      <figcaption className="poradna-flow__cap">{label}</figcaption>
      <ol className="poradna-flow__list">
        {steps.map((s, i) => (
          <li className="poradna-flow__step" key={s.n}>
            <span className="poradna-flow__num">{s.n}</span>
            <span className="poradna-flow__body">
              <strong>{s.t}</strong>
              <small>{s.d}</small>
            </span>
            {i < steps.length - 1 && (
              <span className="poradna-flow__arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

const KVALIFIKACE: readonly Step[] = [
  { n: "1", t: "Zájemce bez elektro školy", d: "Praxe z jiného oboru vítána" },
  { n: "2", t: "Cílená příprava", d: "Prakticky, na reálných zařízeních" },
  { n: "3", t: "Profesní kvalifikace NSK", d: "Zkouška před autorizovanou osobou" },
  { n: "4", t: "Úplná profesní kvalifikace", d: "Všech 5 dílčích = Elektrikář" },
  { n: "5", t: "Odborná způsobilost + praxe", d: "Typicky § 6 a práce pod dohledem" },
  { n: "6", t: "Samostatná práce", d: "V odpovídajícím rozsahu" },
];

const PARAGRAF6: readonly Step[] = [
  { n: "1", t: "Odborná kvalifikace", d: "Elektro škola, výuční list nebo zkoušky v NSK" },
  { n: "2", t: "Příprava a zaškolení", d: "Předpisy, bezpečnost a praktický nácvik" },
  { n: "3", t: "Zkouška z odborné způsobilosti", d: "Písemná i ústní část, v každé aspoň 80 %" },
  { n: "4", t: "§ 6 Elektrotechnik", d: "Doklad platí tři roky" },
  { n: "5", t: "Praxe", d: "Bez elektro praxe rok pod dohledem" },
];

export function CestaKvalifikace() {
  return <Cesta label="Cesta ke kvalifikaci elektrikáře" steps={KVALIFIKACE} />;
}

export function CestaKParagrafu6() {
  return <Cesta label="Cesta k § 6" steps={PARAGRAF6} />;
}

const CESTA_ROZTRISTENA: readonly Step[] = [
  { n: "1", t: "Rekvalifikace na jednu PK", d: "Jeden kurz, jeden obor" },
  { n: "2", t: "1 z 5 kvalifikací", d: "Máte pětinu cesty" },
  { n: "3", t: "Další kurz na další PK", d: "Začínáte znovu od začátku" },
  { n: "4", t: "…a tak dokola", d: "Každou zkoušku řešíte zvlášť" },
  { n: "5", t: "Kompletní sada 5 PK", d: "Po řadě dílčích kroků" },
  { n: "6", t: "ÚPK Elektrikář", d: "Cíl až na konci oklik" },
];

const CESTA_VOLTIMO: readonly Step[] = [
  { n: "1", t: "Ucelený kurz Voltimo", d: "Příprava na všech 5 potřebných PK" },
  { n: "2", t: "Jednotlivé zkoušky", d: "V souvislostech, ne izolovaně" },
  { n: "3", t: "Kompletní sada 5 PK", d: "Bez oklik a opakovaných startů" },
  { n: "4", t: "ÚPK Elektrikář", d: "Cíl v jedné ucelené cestě" },
];

export function CestaSrovnani() {
  return (
    <div className="poradna-flow-compare">
      <Cesta
        label="Cesta po jednotlivých rekvalifikacích"
        steps={CESTA_ROZTRISTENA}
        variant="muted"
      />
      <Cesta
        label="Ucelená cesta Voltimo"
        steps={CESTA_VOLTIMO}
        variant="hl"
      />
    </div>
  );
}

// Srovnání § 6 a § 7 + společná cesta dole.
const P67_SPOLECNA = [
  "Odborná kvalifikace",
  "Praxe podle stupně",
  "Zaškolení",
  "Zkouška",
];

export function Paragraf67() {
  return (
    <figure className="poradna-p67" aria-label="Srovnání § 6 a § 7">
      <div className="poradna-p67__cols">
        <div className="poradna-p67__card">
          <span className="poradna-p67__tag">§ 6 Elektrotechnik</span>
          <strong>Samostatně pracuji</strong>
          <small>
            Práce na elektrických zařízeních v rozsahu odborné způsobilosti
          </small>
        </div>
        <div className="poradna-p67__card poradna-p67__card--hl">
          <span className="poradna-p67__tag">§ 7 Vedoucí elektrotechnik</span>
          <strong>Samostatně pracuji + řídím</strong>
          <small>
            Navíc řízení činností, řízení provozu a projektování vyhrazených
            zařízení
          </small>
        </div>
      </div>
      <div className="poradna-p67__shared">
        <span className="poradna-p67__shared-cap">Společná cesta</span>
        <ol className="poradna-p67__steps">
          {P67_SPOLECNA.map((s, i) => (
            <li key={s}>
              {s}
              {i < P67_SPOLECNA.length - 1 && (
                <span aria-hidden="true"> → </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

// Cesta "Jak se stát chlaďařem".
const CESTA_CHLADAR: readonly Step[] = [
  { n: "1", t: "Vyberu směr", d: "Chlazení, klimatizace, nebo tepelná čerpadla" },
  { n: "2", t: "Praktická příprava", d: "Na reálných zařízeních ve Voltimo" },
  { n: "3", t: "Profesní kvalifikace", d: "23-054-H a/nebo 23-055-H" },
  { n: "4", t: "Zkouška u autorizované osoby", d: "Voltimo je autorizovaná osoba" },
  { n: "5", t: "Praxe", d: "Zažité postupy na reálných zakázkách" },
  { n: "6", t: "Doplním způsobilosti", d: "Elektro (§ 6) a certifikace na chladiva" },
];

export function CestaChladar() {
  return <Cesta label="Jak se stát chlaďařem" steps={CESTA_CHLADAR} variant="hl" />;
}

// Cesta k živnosti na chlazení bez chlaďařské školy.
const CESTA_ZIVNOST_CHLAZENI: readonly Step[] = [
  { n: "1", t: "Kurz Voltimo", d: "Příprava na malá i velká zařízení" },
  { n: "2", t: "Zkoušky 23-054-H + 23-055-H", d: "U autorizované osoby" },
  { n: "3", t: "Osvědčení NSK", d: "Doklad o profesní kvalifikaci" },
  { n: "4", t: "Doložení způsobilosti", d: "Na živnostenském úřadu" },
  { n: "5", t: "Ohlášení řemeslné živnosti", d: "Montáž, opravy a rekonstrukce" },
  { n: "6", t: "Vlastní podnikání", d: "Fakturujete na sebe" },
];

export function CestaZivnostChlazeni() {
  return (
    <Cesta
      label="Cesta k živnosti bez chlaďařské školy"
      steps={CESTA_ZIVNOST_CHLAZENI}
      variant="hl"
    />
  );
}

// Srovnání malé a velké chlaďařské PK + společný základ dole.
const CHLADAR_ZAKLAD = [
  "Chladicí okruh",
  "Diagnostika",
  "Úniky",
  "Instalace",
  "Chladiva",
  "Bezpečnost",
];

export function ChladarMalaVelka() {
  return (
    <figure className="poradna-p67" aria-label="Srovnání malé a velké chlaďařské kvalifikace">
      <div className="poradna-p67__cols">
        <div className="poradna-p67__card">
          <span className="poradna-p67__tag">23-054-H · malá</span>
          <strong>Do 3 kg chladiva</strong>
          <small>
            Hermetické okruhy do 6 kg. Menší klimatizace, chladicí systémy a
            tepelná čerpadla.
          </small>
        </div>
        <div className="poradna-p67__card poradna-p67__card--hl">
          <span className="poradna-p67__tag">23-055-H · velká</span>
          <strong>Nad 3 kg chladiva</strong>
          <small>
            Hermetické okruhy nad 6 kg. Vícekompresorové sdružené jednotky,
            komerční a průmyslové chlazení.
          </small>
        </div>
      </div>
      <div className="poradna-p67__shared">
        <span className="poradna-p67__shared-cap">Společný základ</span>
        <ol className="poradna-p67__steps">
          {CHLADAR_ZAKLAD.map((s, i) => (
            <li key={s}>
              {s}
              {i < CHLADAR_ZAKLAD.length - 1 && (
                <span aria-hidden="true"> → </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
