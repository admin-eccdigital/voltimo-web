import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  SiteHeader,
  SiteFooter,
  JsonLd,
  Gtm,
  CookieConsent,
} from "@/components/site";
import { BASE_PATH, SITE_ORIGIN, SITE_URL, NOINDEX, ORG } from "@/lib/site";
import "./globals.css";

const sourceSans = localFont({
  src: [
    { path: "../../public/fonts/SourceSans3-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SourceSans3-400-latin-ext.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SourceSans3-400-italic-latin.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/SourceSans3-400-italic-latin-ext.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/SourceSans3-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SourceSans3-500-latin-ext.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/SourceSans3-600-latin.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SourceSans3-600-latin-ext.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SourceSans3-700-latin.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/SourceSans3-700-latin-ext.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

const OG_IMAGE = `${BASE_PATH}/og/og-default.png`;
const TITLE = "Voltimo — Výcvik elektrikářů";
const DESCRIPTION =
  "Středisko profesního vzdělávání v elektrotechnice. Výcvik, zkouška §6 a státní osvědčení Elektrikář za 10 dní.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: { default: TITLE, template: "%s | Voltimo" },
  description: DESCRIPTION,
  applicationName: "Voltimo",
  alternates: { canonical: `${SITE_URL}/` },
  icons: {
    icon: `${BASE_PATH}/logo/favicon.svg`,
    apple: `${BASE_PATH}/icons/apple-touch-icon.png`,
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Voltimo",
    url: `${SITE_URL}/`,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "Voltimo — Elektrikář za 10 dní" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: NOINDEX ? { index: false, follow: false } : undefined,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG.legalName,
  alternateName: ORG.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icons/icon-512.png`,
  image: `${SITE_URL}/og/og-default.png`,
  email: ORG.email,
  telephone: ORG.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG.street,
    addressLocality: ORG.city,
    postalCode: ORG.zip,
    addressRegion: ORG.region,
    addressCountry: ORG.country,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${sourceSans.variable} antialiased`}>
      <head>
        <Gtm />
      </head>
      <body>
        <a
          href="#hlavni-obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-voltimo-yellow focus:text-voltimo-primary focus:px-4 focus:py-2 focus:rounded-voltimo-md focus:font-semibold"
        >
          Přeskočit na obsah
        </a>
        <SiteHeader />
        <main id="hlavni-obsah">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
