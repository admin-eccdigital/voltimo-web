"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarClock, Check, Loader2, MailCheck, Phone, Wallet } from "lucide-react";
import { Button, Checkbox, Eyebrow, Heading, Input, Textarea } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { submitLead } from "@/lib/form-submit";

export function RekvForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSending(true);

    const fd = new FormData(e.currentTarget as HTMLFormElement);

    try {
      await submitLead({
        form: "poptavka-rekvalifikace",
        topic: "Voltimo.cz - Poptávka rekvalifikace",
        name: fd.get("name") as string,
        phone: fd.get("phone") as string,
        email: (fd.get("email") as string) || undefined,
        note: (fd.get("note") as string) || undefined,
        gdpr: true,
        url: window.location.href,
      });
      setDone(true);
    } catch {
      setError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo zavolejte.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="vlt-section vlt-section--subtle" id="poptavka">
      <div className="lp-wrap">
        <div className="lp-reg">
          <div className="lp-reg__form">
            {done ? (
              <div className="lp-done">
                <span className="lp-done__ic"><Check size={26} /></span>
                <h3>Máme to. Ozveme se vám.</h3>
                <p>
                  Projdeme s vámi kroky přes úřad práce a domluvíme detaily. Žádné
                  čekání na telefon, žádný tlak.
                </p>
              </div>
            ) : (
              <>
                <div className="lp-head" style={{ marginBottom: 22 }}>
                  <Eyebrow>Nezávazná poptávka</Eyebrow>
                  <Heading level={3}>Mám zájem o rekvalifikaci</Heading>
                  <p className="lp-head__sub">
                    Vyplníte během 2 minut. Nebo zavolejte na {LP_DATA.phone}.
                  </p>
                </div>
                <form className="lp-form" onSubmit={submit}>
                  <div className="lp-form__row">
                    <Input label="Jméno a příjmení" required placeholder="Jan Novák" name="name" />
                    <Input label="Telefon" required type="tel" placeholder="+420 ..." name="phone" />
                  </div>
                  <Input label="E-mail" type="email" placeholder="jan@email.cz" name="email" />
                  <Textarea
                    label="Jste vedení na úřadu práce? (nepovinné)"
                    rows={3}
                    placeholder="Např. jsem v evidenci ÚP v Plzni, mám zájem o rekvalifikaci elektrikář."
                    name="note"
                  />
                  <Checkbox
                    required
                    label="Souhlasím se zpracováním osobních údajů za účelem kontaktu ohledně rekvalifikace."
                  />
                  {error && <p className="lp-form__error">{error}</p>}
                  <Button type="submit" variant="cta" size="lg" block icon={sending ? <Loader2 className="animate-spin" /> : <ArrowRight />} disabled={sending}>
                    {sending ? "Odesílám…" : "Odeslat nezávaznou poptávku"}
                  </Button>
                  <p className="lp-form__fine">
                    Bez závazků. Ozveme se vám a projdeme kroky přes úřad práce.
                  </p>
                </form>
              </>
            )}
          </div>

          <div className="lp-reg__aside">
            <ul className="lp-reassure">
              <li>
                <span className="lp-reassure__ic"><Wallet size={20} /></span>
                <div>
                  <strong>Hradí úřad práce</strong>
                  <span>Při schválení zvolené rekvalifikace je spoluúčast 0 Kč.</span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic"><CalendarClock size={20} /></span>
                <div>
                  <strong>Termín 2. 11. – 4. 12. 2026</strong>
                  <span>Kapacita běhu je 10 míst, prezenčně v Přešticích.</span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic"><MailCheck size={20} /></span>
                <div>
                  <strong>Poradíme s papírováním</strong>
                  <span>Podklady pro úřad práce vám dodáme.</span>
                </div>
              </li>
            </ul>
            <div className="lp-reg__call">
              <small>Chcete to vyřídit hned? Zavolejte.</small>
              <a href={LP_DATA.phoneHref}><Phone size={18} />{LP_DATA.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
