// Správa souhlasu s cookies podle Google Consent Mode v2 (advanced implementation).
//
// Jak to funguje dohromady:
//   1) Gtm.tsx vykreslí do <head> defaults skript — nastaví consent na `denied`
//      (v EU) JEŠTĚ NEŽ se načte GTM kontejner, a hned aplikuje uloženou volbu
//      z cookie, pokud existuje.
//   2) Kontejner se načte vždy. Při `denied` posílají Google tagy jen cookieless
//      pings (bez identifikátorů) — díky tomu funguje modelování konverzí.
//   3) Klik v liště → writeConsent() + applyConsent() → gtag('consent','update').
//
// Non-Google tagy (Sklik, Meta) mají consent ošetřený uvnitř svých GTM šablon,
// proto se tu — na rozdíl od WP řešení — neblokují žádné skripty v DOM.

export type ConsentCategory = "necessary" | "analytics" | "ads" | "functionality";

export type ConsentChoices = Record<ConsentCategory, boolean>;

export interface StoredConsent {
  /** Verze politiky, se kterou byl souhlas udělen. */
  v: string;
  /** Datum volby (ISO). */
  ts: string;
  choices: ConsentChoices;
}

/** 1st-party cookie — na rozdíl od localStorage ji vidí i subdomény a server. */
export const CONSENT_COOKIE = "voltimo_consent";

/** Bump = všem návštěvníkům se lišta zobrazí znovu (změna politiky). */
export const CONSENT_VERSION = "1";

/** ÚOOÚ i CNIL doporučují ptát se znovu nejpozději po roce. */
export const CONSENT_LIFETIME_DAYS = 180;

/** Kolik ms Google čeká, než pošle první ping — mezitím stihneme aplikovat cookie. */
export const WAIT_FOR_UPDATE = 500;

/** Mimo tyto země je default `granted` — zlepšuje kvalitu dat z non-EU provozu. */
export const EU_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "GB", "IS", "LI", "NO", "CH",
];

/** Mapování kategorií na 7 signálů Consent Mode v2. */
export const GOOGLE_SIGNALS: Record<ConsentCategory, string[]> = {
  necessary: ["security_storage"],
  analytics: ["analytics_storage"],
  ads: ["ad_storage", "ad_user_data", "ad_personalization"],
  functionality: ["functionality_storage", "personalization_storage"],
};

/** Pořadí a texty pro lištu. `necessary` je vždy zapnuté a needitovatelné. */
export const CATEGORIES: {
  key: ConsentCategory;
  name: string;
  desc: string;
  locked?: boolean;
}[] = [
  {
    key: "necessary",
    name: "Nezbytné",
    desc: "Nutné pro fungování webu a odeslání formulářů. Bez nich web nefunguje.",
    locked: true,
  },
  {
    key: "analytics",
    name: "Analytika",
    desc: "Google Analytics 4 — měření návštěvnosti a toho, které stránky vás zajímají.",
  },
  {
    key: "ads",
    name: "Marketing",
    desc: "Google Ads, Sklik a Meta Pixel — měření konverzí a remarketing.",
  },
  {
    key: "functionality",
    name: "Funkční",
    desc: "Rozšířené funkce a zapamatování preferencí (vložená videa, mapy).",
  },
];

export const CONSENT_EVENT = "voltimo-consent-change";
export const OPEN_SETTINGS_EVENT = "voltimo-open-cookie-settings";

/** Všechny kategorie na danou hodnotu; `necessary` zůstává vždy true. */
export function allCategories(value: boolean): ConsentChoices {
  return {
    necessary: true,
    analytics: value,
    ads: value,
    functionality: value,
  };
}

export function readConsent(): StoredConsent | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split("; ")
    .find((r) => r.startsWith(`${CONSENT_COOKIE}=`));
  if (!raw) return null;
  try {
    const data = JSON.parse(decodeURIComponent(raw.slice(raw.indexOf("=") + 1)));
    if (!data || typeof data !== "object" || !data.choices) return null;
    return data as StoredConsent;
  } catch {
    return null; // poškozená cookie → lišta se ukáže znovu
  }
}

/** Souhlas platí, jen když sedí verze politiky. Jinak se ptáme znovu. */
export function hasValidConsent(): boolean {
  const stored = readConsent();
  return stored !== null && stored.v === CONSENT_VERSION;
}

export function writeConsent(choices: ConsentChoices): void {
  const data: StoredConsent = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    choices,
  };
  const value = encodeURIComponent(JSON.stringify(data));
  const expires = new Date(
    Date.now() + CONSENT_LIFETIME_DAYS * 24 * 60 * 60 * 1000,
  ).toUTCString();
  // Doména s tečkou → cookie platí i na subdoménách.
  const host = location.hostname.replace(/^www\./, "");
  const domain = host.includes(".") ? `; domain=.${host}` : "";
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; expires=${expires}; path=/${domain}; SameSite=Lax${secure}`;
}

/** Přeloží kategorie na Google signály. */
export function toSignals(choices: ConsentChoices): Record<string, string> {
  const update: Record<string, string> = {};
  for (const [cat, signals] of Object.entries(GOOGLE_SIGNALS)) {
    const granted = cat === "necessary" || choices[cat as ConsentCategory];
    for (const sig of signals) {
      update[sig] = granted ? "granted" : "denied";
    }
  }
  return update;
}

/**
 * Propíše volbu do Consent Mode a do dataLayer.
 * Volat po každé změně volby — i při obnovení z cookie to za nás udělá
 * už defaults skript v <head>, takže tady jen po kliknutí v liště.
 */
export function applyConsent(choices: ConsentChoices): void {
  const signals = toSignals(choices);
  window.gtag?.("consent", "update", signals);

  // Vlastní event, aby šlo v GTM navěsit trigger na okamžik volby.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent_choices: choices,
    consent_version: CONSENT_VERSION,
  });

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choices }));
}

/** Uloží volbu a rovnou ji propíše do měření. */
export function saveConsent(choices: ConsentChoices): void {
  writeConsent(choices);
  applyConsent(choices);
}

/** Znovu otevře lištu — pro odkaz „Nastavení cookies“ v patičce. */
export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
