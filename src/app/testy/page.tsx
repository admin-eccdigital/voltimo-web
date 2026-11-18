import type { Metadata } from "next";
import { TestyRedirect } from "./TestyRedirect";

// Prozatímní cíl: Moodle portál běží zatím na IP serveru (http, bez domény).
// Až Petr přidá DNS záznam testy.voltimo.cz a nasadíme HTTPS, změnit na:
//   const TESTY_URL = "https://testy.voltimo.cz/";
const TESTY_URL = "http://89.221.218.99/";

export const metadata: Metadata = {
  title: "Testovací portál Voltimo",
  description: "Online procvičování testových otázek Voltimo.",
  robots: { index: false, follow: false },
};

export default function TestyPage() {
  return <TestyRedirect url={TESTY_URL} />;
}
