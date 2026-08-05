"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarClock, Check, GraduationCap, Loader2, MailCheck, Phone } from "lucide-react";
import { Button, Checkbox, Eyebrow, Heading, Input, Textarea } from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { submitLead } from "@/lib/form-submit";

export function ChlForm() {
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
        form: "poptavka-chlazeni",
        formType: "poptavka",
        topic: "Voltimo.cz - Poptávka chlazení",
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
                <h3>Máme to. Ozveme se s termínem.</h3>
                <p>
                  Potvrzení a všechny detaily vám pošleme e-mailem. Žádné čekání na telefon,
                  žádný tlak.
                </p>
              </div>
            ) : (
              <>
                <div className="lp-head" style={{ marginBottom: 22 }}>
                  <Eyebrow>Nezávazná poptávka</Eyebrow>
                  <Heading level={3}>Poptejte termín kurzu chlazení</Heading>
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
                    label="Kolik let děláte chlazení? (nepovinné)"
                    rows={3}
                    placeholder="Např. 6 let montáže klimatizací, servis tepelných čerpadel."
                    name="note"
                  />
                  <Checkbox
                    required
                    label="Souhlasím se zpracováním osobních údajů za účelem kontaktu ohledně kurzu."
                  />
                  {error && <p className="lp-form__error">{error}</p>}
                  <Button type="submit" variant="cta" size="lg" block icon={sending ? <Loader2 className="animate-spin" /> : <ArrowRight />} disabled={sending}>
                    {sending ? "Odesílám…" : "Poptat termín nezávazně"}
                  </Button>
                  <p className="lp-form__fine">
                    Bez závazků a bez platby předem. Termín potvrdíte online, bez nutnosti volat.
                  </p>
                </form>
              </>
            )}
          </div>

          <div className="lp-reg__aside">
            <ul className="lp-reassure">
              <li>
                <span className="lp-reassure__ic"><MailCheck size={20} /></span>
                <div>
                  <strong>Vše vyřídíte online</strong>
                  <span>Termín i detaily po e-mailu. Telefon jen když sám chcete.</span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic"><CalendarClock size={20} /></span>
                <div>
                  <strong>Termíny průběžně</strong>
                  <span>Ozveme se s nejbližším vhodným během v Přešticích.</span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic"><GraduationCap size={20} /></span>
                <div>
                  <strong>Bez praxe? Řekneme rovnou</strong>
                  <span>Nabídneme vstupní program, ať ke zkoušce jdete připravený.</span>
                </div>
              </li>
            </ul>
            <div className="lp-reg__call">
              <small>Radši osobně?</small>
              <a href={LP_DATA.phoneHref}><Phone size={18} />{LP_DATA.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
