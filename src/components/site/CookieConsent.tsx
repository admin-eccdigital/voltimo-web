"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { BASE_PATH } from "@/lib/site";
import {
  CATEGORIES,
  CONSENT_EVENT,
  OPEN_SETTINGS_EVENT,
  allCategories,
  hasValidConsent,
  readConsent,
  saveConsent,
  type ConsentCategory,
  type ConsentChoices,
} from "@/lib/consent";

/** Lišta se ptá, dokud není platný souhlas aktuální verze politiky. */
function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

export function CookieConsent() {
  // useSyncExternalStore místo useEffect+setState: na serveru vrací false
  // (lišta se nepředrenderuje), na klientovi se dotáže cookie hned při mountu.
  const needsConsent = useSyncExternalStore(
    subscribe,
    () => !hasValidConsent(),
    () => false,
  );
  const [reopened, setReopened] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>(() => allCategories(false));
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = needsConsent || reopened;

  // Otevření z patičky („Nastavení cookies“) — rovnou s detailem a s dosud
  // uloženou volbou předvyplněnou.
  useEffect(() => {
    const reopen = () => {
      const stored = readConsent();
      if (stored?.choices) setChoices(stored.choices);
      setDetailOpen(true);
      setReopened(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  // ESC zavře jen tehdy, když už souhlas existuje — jinak by šla lišta odbýt
  // bez volby a Consent Mode by zůstal v denied bez vědomí uživatele.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && hasValidConsent()) setReopened(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const decide = useCallback((value: ConsentChoices) => {
    saveConsent(value);
    setReopened(false);
    setDetailOpen(false);
  }, []);

  if (!open) return null;

  const toggle = (key: ConsentCategory) =>
    setChoices((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      className="cookie-bar"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-bar-title"
      ref={dialogRef}
    >
      <div className="cookie-bar__inner">
        <div className="cookie-bar__head">
          <p className="cookie-bar__text">
            <strong id="cookie-bar-title">Používáme cookies</strong> — nezbytné pro
            fungování webu a, s vaším souhlasem, analytické a marketingové pro měření
            návštěvnosti a reklamy. Více v{" "}
            <a href={`${BASE_PATH}/gdpr/`}>Zásadách zpracování osobních údajů</a>.
          </p>

          <div className="cookie-bar__actions">
            <button
              type="button"
              className="cookie-bar__btn cookie-bar__btn--ghost"
              onClick={() => decide(allCategories(false))}
            >
              Odmítnout vše
            </button>
            <button
              type="button"
              className="cookie-bar__btn cookie-bar__btn--ghost"
              aria-expanded={detailOpen}
              aria-controls="cookie-bar-categories"
              onClick={() => setDetailOpen((v) => !v)}
            >
              Nastavení
            </button>
            <button
              type="button"
              className="cookie-bar__btn cookie-bar__btn--cta"
              onClick={() => decide(allCategories(true))}
            >
              Přijmout vše
            </button>
          </div>
        </div>

        {detailOpen && (
          <div className="cookie-bar__categories" id="cookie-bar-categories">
            {CATEGORIES.map((cat) => (
              <label className="cookie-cat" key={cat.key} htmlFor={`cookie-cat-${cat.key}`}>
                <input
                  type="checkbox"
                  id={`cookie-cat-${cat.key}`}
                  className="cookie-cat__input"
                  checked={cat.locked ? true : choices[cat.key]}
                  disabled={cat.locked}
                  aria-describedby={`cookie-cat-${cat.key}-desc`}
                  onChange={() => toggle(cat.key)}
                />
                <span className="cookie-cat__body">
                  <span className="cookie-cat__name">
                    {cat.name}
                    {cat.locked && (
                      <span className="cookie-cat__always">vždy aktivní</span>
                    )}
                  </span>
                  <span className="cookie-cat__desc" id={`cookie-cat-${cat.key}-desc`}>
                    {cat.desc}
                  </span>
                </span>
              </label>
            ))}

            <div className="cookie-bar__save">
              <button
                type="button"
                className="cookie-bar__btn cookie-bar__btn--cta"
                onClick={() => decide({ ...choices, necessary: true })}
              >
                Uložit volbu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
