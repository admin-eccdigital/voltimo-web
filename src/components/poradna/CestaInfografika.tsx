// Infografiky "cesta" v brandu Voltima. Bez JS, responzivní.
type Step = { n: string; t: string; d: string };

function Cesta({ label, steps }: { label: string; steps: readonly Step[] }) {
  return (
    <figure className="poradna-flow" aria-label={label}>
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
