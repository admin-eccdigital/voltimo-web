interface Env {
  ALLOWED_ORIGIN: string;
  RAYNET_API_URL: string;
  RAYNET_USERNAME: string;
  RAYNET_API_KEY: string;
}

interface LeadPayload {
  form: string;
  topic: string;
  form_id: string;
  name: string;
  phone: string;
  email?: string;
  note?: string;
  gdpr: boolean;
  url: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") ?? "";
    const corsHeaders = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
    }

    if (!origin.startsWith(env.ALLOWED_ORIGIN)) {
      return Response.json({ error: "Forbidden" }, { status: 403, headers: corsHeaders });
    }

    let payload: LeadPayload;
    try {
      payload = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400, headers: corsHeaders });
    }

    if (!payload.name || !payload.phone || !payload.gdpr) {
      return Response.json({ error: "Missing required fields" }, { status: 400, headers: corsHeaders });
    }

    try {
      await createRaynetLead(env, payload);
      return Response.json({ ok: true }, { headers: corsHeaders });
    } catch (err) {
      console.error("Raynet API error:", err);
      return Response.json({ error: "Lead creation failed" }, { status: 502, headers: corsHeaders });
    }
  },
};

async function createRaynetLead(env: Env, payload: LeadPayload): Promise<void> {
  const auth = btoa(`${env.RAYNET_USERNAME}:${env.RAYNET_API_KEY}`);

  // TODO: Adjust endpoint and field mapping based on Raynet instance setup.
  // This mirrors the CF7 integration: creates a lead with topic, contact info, and note.
  const body = {
    topic: payload.topic,
    priority: "DEFAULT",
    notice: [
      payload.note ?? "",
      `Formulář: ${payload.form}`,
      `URL: ${payload.url}`,
      `Form ID: ${payload.form_id}`,
      `GDPR souhlas: ${payload.gdpr ? "ano" : "ne"}`,
    ]
      .filter(Boolean)
      .join("\n"),
    contactInfo: {
      name: payload.name,
      tel: payload.phone,
      email: payload.email ?? "",
    },
  };

  const res = await fetch(`${env.RAYNET_API_URL}/lead/`, {
    method: "PUT",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
      "X-Instance-Name": extractInstance(env.RAYNET_API_URL),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Raynet ${res.status}: ${text}`);
  }
}

function extractInstance(apiUrl: string): string {
  const match = apiUrl.match(/\/\/([^.]+)\./);
  return match?.[1] ?? "app";
}
