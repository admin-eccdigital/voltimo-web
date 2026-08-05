import { GTM_ID } from "@/lib/site";
import {
  CONSENT_COOKIE,
  CONSENT_VERSION,
  EU_REGIONS,
  GOOGLE_SIGNALS,
  WAIT_FOR_UPDATE,
} from "@/lib/consent";

// Veškeré měření jede přes GTM kontejner — v kódu webu není žádný přímý
// GA4 / Ads / Sklik / FB tag. Web pouze:
//   1) nastaví Consent Mode default (dřív, než se kontejner načte),
//   2) načte kontejner,
//   3) posílá do dataLayer eventy (viz lib/form-submit.ts a lib/consent.ts).
// Co se s eventy stane, se konfiguruje výhradně v GTM.
//
// Pozor: oba skripty musí být syrové inline <script> v <head>, ne next/script.
// `next/script` se strategy="beforeInteractive" se v App Routeru serializuje
// do React payloadu a spustí se až při hydrataci — to je pro consent default
// pozdě a kontejner by stihl odpálit tagy s prázdným stavem.

const ALL_SIGNALS = Object.values(GOOGLE_SIGNALS).flat();
const DENIABLE_SIGNALS = ALL_SIGNALS.filter((s) => s !== "security_storage");

// Uloženou volbu čteme synchronně z cookie, aby vracející se návštěvník
// nemusel čekat na hydrataci Reactu. Musí se stihnout do WAIT_FOR_UPDATE ms,
// jinak Google odešle první ping ještě s defaulty.
const consentDefault = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var SIGNALS = ${JSON.stringify(GOOGLE_SIGNALS)};
  var denied = { security_storage: 'granted', wait_for_update: ${WAIT_FOR_UPDATE} };
  ${JSON.stringify(DENIABLE_SIGNALS)}.forEach(function(k){ denied[k] = 'denied'; });

  // V EU je default denied, mimo ni granted — legální i datově čistší.
  var granted = { wait_for_update: ${WAIT_FOR_UPDATE} };
  ${JSON.stringify(ALL_SIGNALS)}.forEach(function(k){ granted[k] = 'granted'; });

  gtag('consent', 'default', Object.assign({}, denied, { region: ${JSON.stringify(EU_REGIONS)} }));
  gtag('consent', 'default', granted);

  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);

  // Uložená volba z minulé návštěvy — aplikuj hned, ať tagy nečekají.
  try {
    var raw = document.cookie.split('; ').filter(function(r){
      return r.indexOf(${JSON.stringify(CONSENT_COOKIE)} + '=') === 0;
    })[0];
    if (raw) {
      var data = JSON.parse(decodeURIComponent(raw.slice(raw.indexOf('=') + 1)));
      if (data && data.v === ${JSON.stringify(CONSENT_VERSION)} && data.choices) {
        var update = {};
        Object.keys(SIGNALS).forEach(function(cat){
          var val = (cat === 'necessary' || data.choices[cat]) ? 'granted' : 'denied';
          SIGNALS[cat].forEach(function(sig){ update[sig] = val; });
        });
        gtag('consent', 'update', update);
      }
    }
  } catch (e) { /* poškozená cookie — zůstanou defaulty, lišta se ukáže */ }
})();
`;

const gtmLoader = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;

/**
 * Consent Mode default + načtení GTM kontejneru. Patří do <head> root layoutu.
 * Bez GTM_ID nedělá nic (staging).
 *
 * Záměrně bez <noscript> iframe: bez JS nejde vyhodnotit souhlas, takže by
 * kontejner běžel bezpodmínečně. Web bez JS stejně nenabízí formuláře.
 */
export function Gtm() {
  if (!GTM_ID) return null;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: consentDefault }} />
      <script dangerouslySetInnerHTML={{ __html: gtmLoader }} />
    </>
  );
}
