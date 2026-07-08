export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-NWB7CG4QTC";
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";

export type ConversionEventName =
  | "whatsapp_click"
  | "facebook_click"
  | "email_click"
  | "inquiry_click"
  | "inquiry_submit_success";

type ConversionEventParams = Record<string, string | number | boolean | undefined>;

const googleAdsLabels: Partial<Record<ConversionEventName, string>> = {
  inquiry_submit_success: process.env.NEXT_PUBLIC_GOOGLE_ADS_INQUIRY_SUBMIT_LABEL || "",
  whatsapp_click: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || "",
  email_click: process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL || "",
  facebook_click: process.env.NEXT_PUBLIC_GOOGLE_ADS_FACEBOOK_LABEL || ""
};

const ga4LeadEventNames: Partial<Record<ConversionEventName, string>> = {
  inquiry_submit_success: "generate_lead",
  whatsapp_click: "contact_whatsapp",
  email_click: "contact_email",
  facebook_click: "contact_facebook",
  inquiry_click: "inquiry_click"
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(eventName: ConversionEventName, params: ConversionEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const eventParams = {
    event_category: "conversion",
    event_label: String(params.label || eventName),
    conversion_source: "eve_toner_website",
    ...params
  };

  window.dataLayer?.push({
    event: eventName,
    ...eventParams
  });

  window.gtag("event", eventName, eventParams);

  const ga4LeadEventName = ga4LeadEventNames[eventName];

  if (ga4LeadEventName && ga4LeadEventName !== eventName) {
    window.gtag("event", ga4LeadEventName, eventParams);
  }

  const googleAdsLabel = googleAdsLabels[eventName];

  if (GOOGLE_ADS_ID && googleAdsLabel) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${googleAdsLabel}`,
      value: eventName === "inquiry_submit_success" ? 1 : 0.2,
      currency: "USD",
      ...eventParams
    });
  }
}
