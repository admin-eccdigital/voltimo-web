import type { Metadata } from "next";
import { ORG } from "@/lib/site";
import { RecenzeRedirect } from "./RecenzeRedirect";

export const metadata: Metadata = {
  title: "Recenze Voltimo",
  description: "Napište nám recenzi na Googlu.",
  robots: { index: false, follow: false },
};

export default function RecenzePage() {
  return <RecenzeRedirect url={ORG.googleReview} />;
}
