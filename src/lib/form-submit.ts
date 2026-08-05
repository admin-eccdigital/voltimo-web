const WORKER_URL = process.env.NEXT_PUBLIC_FORM_WORKER_URL ?? "";

export interface LeadPayload {
  /** Slug formuláře — jde do dataLayer jako form_data.form_name. */
  form: string;
  /** Druh formuláře: "registrace" (závazná přihláška) | "poptavka". */
  formType: "registrace" | "poptavka";
  /** Předmět leadu pro Raynet. Do měření nejde. */
  topic: string;
  name: string;
  phone: string;
  email?: string;
  /** Volný text od uživatele nebo zvolený termín. Do měření NIKDY nejde (PII). */
  note?: string;
  gdpr: boolean;
  url: string;
}

export async function submitLead({ formType, ...lead }: LeadPayload): Promise<void> {
  if (!WORKER_URL) {
    throw new Error("NEXT_PUBLIC_FORM_WORKER_URL is not configured");
  }

  // Jedno ID pro CRM i pro dataLayer — jen tak jde spárovat lead v Raynetu
  // s konverzí v GA4 / Ads.
  const formId = crypto.randomUUID();

  const res = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, form_id: formId }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Form submission failed (${res.status}): ${body}`);
  }

  pushFormEvent(formId, lead.form, formType, lead.url);
}

/**
 * Jediný měřicí výstup webu. Kontejner GTM-PZ8XMNPH na tento event váže
 * GA4 (form_submit_datalayer), konverze Google Ads a Skliku a FB pixel.
 * Názvy klíčů odpovídají dataLayer proměnným v kontejneru — neměnit bez
 * úpravy GTM.
 */
function pushFormEvent(
  formId: string,
  formName: string,
  formType: string,
  pageUrl: string,
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit_dl",
    form_data: {
      form_id: formId,
      form_name: formName,
      form_type: formType,
      page_url: pageUrl,
    },
  });
}
