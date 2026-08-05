"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  MailCheck,
  ShieldCheck,
  GraduationCap,
  Phone,
  Loader2,
} from "lucide-react";
import {
  Section,
  Eyebrow,
  Heading,
  Button,
  Input,
  Checkbox,
} from "@/components/brand";
import { LP_DATA } from "@/lib/lp-data";
import { scrollToRegistration } from "@/lib/lp-scroll";
import { submitLead } from "@/lib/form-submit";
import { FadeIn } from "./FadeIn";

export function LpRegistration() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [term, setTerm] = useState<string>(LP_DATA.dates[0].title);

  useEffect(() => {
    function handler(e: Event) {
      setTerm((e as CustomEvent<string>).detail);
    }
    window.addEventListener("lp-pick-term", handler);
    return () => window.removeEventListener("lp-pick-term", handler);
  }, []);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSending(true);

    const fd = new FormData(e.currentTarget as HTMLFormElement);

    try {
      await submitLead({
        form: "registrace-elektrikar",
        formType: "registrace",
        topic: "Voltimo.cz - Registrace elektrikář",
        name: fd.get("name") as string,
        phone: fd.get("phone") as string,
        email: (fd.get("email") as string) || undefined,
        note: `Termín: ${term}`,
        gdpr: true,
        url: window.location.href,
      });
      setDone(true);
      scrollToRegistration();
    } catch {
      setError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo zavolejte.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Section tone="light" id="registrace">
      <FadeIn>
      <div className="lp-wrap">
        <div className="lp-reg">
          <div className="lp-reg__form">
            {done ? (
              <div className="lp-done">
                <span className="lp-done__ic">
                  <Check />
                </span>
                <h3>Máme to. Držte si místo.</h3>
                <p>
                  Potvrzení a všechny detaily vám pošleme e-mailem. Žádné
                  čekání na telefon, žádný tlak.
                </p>
              </div>
            ) : (
              <>
                <div className="lp-head" style={{ marginBottom: 22 }}>
                  <Eyebrow>Nezávazná rezervace</Eyebrow>
                  <Heading level={3}>
                    Držte si místo v nejbližším běhu
                  </Heading>
                </div>
                <form className="lp-form" onSubmit={submit}>
                  <div className="lp-form__row">
                    <Input
                      label="Jméno a příjmení"
                      required
                      placeholder="Jan Novák"
                      name="name"
                    />
                    <Input
                      label="Telefon"
                      required
                      type="tel"
                      placeholder="+420 ..."
                      name="phone"
                    />
                  </div>
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="jan@email.cz"
                    name="email"
                  />
                  <div className="lp-form__group">
                    <label className="lp-form__label">
                      Který termín vás láká?
                    </label>
                    <div className="lp-form__chips">
                      {LP_DATA.dates.map((t) => (
                        <button
                          type="button"
                          key={t.title}
                          className={`lp-chip${term === t.title ? " is-active" : ""}`}
                          onClick={() => setTerm(t.title)}
                        >
                          {t.title}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`lp-chip${term === "Chci jít později" ? " is-active" : ""}`}
                        onClick={() => setTerm("Chci jít později")}
                      >
                        Chci jít později
                      </button>
                    </div>
                  </div>
                  <Checkbox
                    required
                    label="Souhlasím se zpracováním osobních údajů za účelem kontaktu ohledně kurzu."
                  />
                  {error && <p className="lp-form__error">{error}</p>}
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    block
                    icon={sending ? <Loader2 className="animate-spin" /> : <ArrowRight />}
                    disabled={sending}
                  >
                    {sending ? "Odesílám…" : "Rezervovat termín nezávazně"}
                  </Button>
                  <p className="lp-form__fine">
                    Rezervace je nezávazná, při rezervaci nic neplatíte. Termín
                    potvrdíte online, bez nutnosti volat.
                  </p>
                </form>
              </>
            )}
          </div>

          <div className="lp-reg__aside">
            <ul className="lp-reassure">
              <li>
                <span className="lp-reassure__ic">
                  <MailCheck />
                </span>
                <div>
                  <strong>Potvrzení e-mailem</strong>
                  <span>
                    Žádné obvolávání. Detaily a termín vyřídíte online.
                  </span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic">
                  <ShieldCheck />
                </span>
                <div>
                  <strong>Záruka prvního dne</strong>
                  <span>
                    Když to po prvním dni není pro vás, vrátíme peníze.
                  </span>
                </div>
              </li>
              <li>
                <span className="lp-reassure__ic">
                  <GraduationCap />
                </span>
                <div>
                  <strong>Připravíme vás krok za krokem</strong>
                  <span>
                    Ke zkoušce jdete, až na ni budete připravený.
                  </span>
                </div>
              </li>
            </ul>
            <div className="lp-reg__call">
              <small>Chcete to vyřídit hned? Zavolejte.</small>
              <a href={LP_DATA.phoneHref}>
                <Phone />
                {LP_DATA.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
