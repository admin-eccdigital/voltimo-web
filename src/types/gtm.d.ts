// Globální typy pro měřicí vrstvu (GTM dataLayer + gtag pro Consent Mode).
export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
