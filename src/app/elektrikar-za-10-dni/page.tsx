import type { Metadata } from "next";
import {
  LpSticky,
  LpHero,
  LpOutcome,
  LpAudience,
  LpTeacher,
  LpHow,
  LpDates,
  LpPrice,
  LpFears,
  LpProof,
  LpEdge,
  LpRegistration,
} from "@/components/lp";
import { JsonLd } from "@/components/site";
import { SITE_URL, ORG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elektrikář za 10 dní",
  description:
    "Úplná kvalifikace Elektrikář za 10 dní výcviku. Praxe, zkouška §6 a státní osvědčení. Prezenční výcvik v Přešticích.",
  alternates: { canonical: `${SITE_URL}/elektrikar-za-10-dni/` },
  openGraph: {
    title: "Elektrikář za 10 dní — Voltimo",
    description: "Úplná kvalifikace za 10 dní výcviku. Praxe, zkouška §6 a státní osvědčení. Přeštice.",
  },
};

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Elektrikář za 10 dní",
  description:
    "Úplná profesní kvalifikace Elektrikář za 10 dní prezenčního výcviku. Praxe, zkouška §6 a státní osvědčení. Přeštice, Plzeňsko.",
  url: `${SITE_URL}/elektrikar-za-10-dni/`,
  inLanguage: "cs",
  provider: {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.legalName,
    url: `${SITE_URL}/`,
  },
};

export default function ElektrikarPage() {
  return (
    <>
      <JsonLd data={courseLd} />
      <LpHero />
      <LpOutcome />
      <LpAudience />
      <LpTeacher />
      <LpHow />
      <LpDates />
      <LpPrice />
      <LpFears />
      <LpProof />
      <LpEdge />
      <LpRegistration />
      <LpSticky />
    </>
  );
}
