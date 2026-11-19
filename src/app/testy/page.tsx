import type { Metadata } from "next";
import { TestyRedirect } from "./TestyRedirect";

// Testovací portál Voltimo (Moodle) na vlastní doméně s HTTPS.
const TESTY_URL = "https://testy.voltimo.cz/";

export const metadata: Metadata = {
  title: "Testovací portál Voltimo",
  description: "Online procvičování testových otázek Voltimo.",
  robots: { index: false, follow: false },
};

export default function TestyPage() {
  return <TestyRedirect url={TESTY_URL} />;
}
