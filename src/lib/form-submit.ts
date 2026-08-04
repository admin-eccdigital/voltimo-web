const WORKER_URL = process.env.NEXT_PUBLIC_FORM_WORKER_URL ?? "";

export interface LeadPayload {
  form: string;
  topic: string;
  name: string;
  phone: string;
  email?: string;
  note?: string;
  gdpr: boolean;
  url: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!WORKER_URL) {
    throw new Error("NEXT_PUBLIC_FORM_WORKER_URL is not configured");
  }

  const res = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, form_id: crypto.randomUUID() }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Form submission failed (${res.status}): ${body}`);
  }

  pushFormEvent(payload);
}

function pushFormEvent(payload: LeadPayload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit_dl",
    form_data: {
      form_id: crypto.randomUUID(),
      form_name: payload.topic,
      form_type: payload.note || payload.form,
      page_url: payload.url,
    },
  });
}
