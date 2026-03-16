import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

declare const Deno: {
  env: {
    get(name: string): string | undefined;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type ContactRequest = {
  name: string;
  organization: string;
  eventName: string;
  eventDate: string;
  expectedAttendees: string;
  email: string;
  phone: string;
  message?: string;
  selectedServices?: string[];
};

type TemplateParameter = {
  name: string;
  value: string;
};

const requiredFields: Array<Exclude<keyof ContactRequest, "message" | "selectedServices">> = [
  "name",
  "organization",
  "eventName",
  "eventDate",
  "expectedAttendees",
  "email",
  "phone",
];

function hasText(value: string | undefined) {
  return typeof value === "string" && value.trim().length > 0;
}

function jsonResponse(body: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
}

function sanitizeText(value: string | undefined, fallback = "Not provided") {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

function normalizePhoneNumber(value: string) {
  const digitsOnly = value.replace(/\D/g, "");
  const normalized = digitsOnly.startsWith("00") ? digitsOnly.slice(2) : digitsOnly;

  if (normalized.length < 8 || normalized.length > 15) {
    throw new Error("Phone number must include a valid country code.");
  }

  return normalized;
}

function buildBroadcastName(prefix: string, name: string) {
  const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 30) || "lead";
  return `${prefix}-${safeName}-${Date.now()}`;
}

function buildAuthorizationHeader(token: string) {
  const trimmed = token.trim();
  return /^Bearer\s+/i.test(trimmed) ? trimmed : `Bearer ${trimmed}`;
}

function buildTemplateSendUrl(endpointOrUrl: string) {
  const trimmed = endpointOrUrl.trim().replace(/\/$/, "");
  if (/\/api\/ext\/v3\/messageTemplates\/send$/i.test(trimmed)) {
    return trimmed;
  }
  return `${trimmed}/api/ext/v3/messageTemplates/send`;
}

async function sendTemplateMessage(options: {
  endpoint: string;
  token: string;
  channel?: string;
  templateName: string;
  broadcastName: string;
  phoneNumber: string;
  parameters: TemplateParameter[];
}) {
  const response = await fetch(buildTemplateSendUrl(options.endpoint), {
    method: "POST",
    headers: {
      Authorization: buildAuthorizationHeader(options.token),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: options.channel || null,
      template_name: options.templateName,
      broadcast_name: options.broadcastName,
      recipients: [
        {
          whatsapp_number: options.phoneNumber,
          parameters: options.parameters,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`WATI request failed (${response.status}): ${errorText}`);
  }

  return response.json().catch(() => null);
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const payload = (await req.json()) as ContactRequest;

    for (const field of requiredFields) {
      if (!hasText(payload[field])) {
        return jsonResponse({ error: `${field} is required` }, { status: 400 });
      }
    }

    const watiEndpoint = Deno.env.get("WATI_API_ENDPOINT")?.trim().replace(/\/$/, "");
    const watiToken = Deno.env.get("WATI_API_TOKEN")?.trim();
    const customerTemplateName = Deno.env.get("WATI_CUSTOMER_TEMPLATE_NAME")?.trim();
    const adminTemplateName = Deno.env.get("WATI_ADMIN_TEMPLATE_NAME")?.trim();
    const adminNumber = Deno.env.get("WATI_ADMIN_WHATSAPP_NUMBER")?.trim();
    const channel = Deno.env.get("WATI_CHANNEL")?.trim();

    if (!watiEndpoint || !watiToken || !customerTemplateName || !adminTemplateName || !adminNumber) {
      throw new Error("WATI environment variables are not fully configured.");
    }

    const customerPhone = normalizePhoneNumber(payload.phone);
    const normalizedAdminNumber = normalizePhoneNumber(adminNumber);
    const selectedServices = Array.isArray(payload.selectedServices) && payload.selectedServices.length > 0
      ? payload.selectedServices.join(", ")
      : "None selected";

    const customerParameters: TemplateParameter[] = [
      { name: "1", value: sanitizeText(payload.name) },
      { name: "2", value: sanitizeText(payload.eventName) },
    ];

    const adminParameters: TemplateParameter[] = [
      { name: "1", value: sanitizeText(payload.name) },
      { name: "2", value: sanitizeText(payload.organization) },
      { name: "3", value: sanitizeText(payload.eventName) },
      { name: "4", value: sanitizeText(payload.eventDate) },
      { name: "5", value: sanitizeText(payload.expectedAttendees) },
      { name: "6", value: sanitizeText(payload.email) },
      { name: "7", value: customerPhone },
      { name: "8", value: selectedServices },
      { name: "9", value: sanitizeText(payload.message) },
    ];

    const customerResult = await sendTemplateMessage({
      endpoint: watiEndpoint,
      token: watiToken,
      channel,
      templateName: customerTemplateName,
      broadcastName: buildBroadcastName("contact-customer", payload.name),
      phoneNumber: customerPhone,
      parameters: customerParameters,
    });

    const adminResult = await sendTemplateMessage({
      endpoint: watiEndpoint,
      token: watiToken,
      channel,
      templateName: adminTemplateName,
      broadcastName: buildBroadcastName("contact-admin", payload.name),
      phoneNumber: normalizedAdminNumber,
      parameters: adminParameters,
    });

    return jsonResponse({
      ok: true,
      customerResult,
      adminResult,
    });
  } catch (error) {
    console.error("Error sending contact enquiry:", error);

    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
});