// Infografika "cesta ke kvalifikaci" v brandu Voltima. Bez JS, responzivní.
const STEPS: readonly { n: string; t: string; d: string }[] = [
  { n: "1", t: "Zájemce bez elektro školy", d: "Praxe z jiného oboru vítána" },
  { n: "2", t: "Cílená příprava", d: "Prakticky, na reálných zařízeních" },
  { n: "3", t: "Profesní kvalifikace NSK", d: "Zkouška před autorizovanou osobou" },
  { n: "4", t: "Úplná profesní kvalifikace", d: "Všech 5 dílčích = Elektrikář" },
  { n: "5", t: "Odborná způsobilost + praxe", d: "Typicky § 6 a práce pod dohledem" },
  { n: "6", t: "Samostatná práce", d: "V odpovídajícím rozsahu" },
];

export function CestaKvalifikace() {
  return (
    <figure className="poradna-flow" aria-label="Cesta ke kvalifikaci elektrikáře">
      <figcaption className="poradna-flow__cap">Cesta ke kvalifikaci elektrikáře</figcaption>
      <ol className="poradna-flow__list">
        {STEPS.map((s, i) => (
          <li className="poradna-flow__step" key={s.n}>
            <span className="poradna-flow__num">{s.n}</span>
            <span className="poradna-flow__body">
              <strong>{s.t}</strong>
              <small>{s.d}</small>
            </span>
            {i < STEPS.length - 1 && (
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
