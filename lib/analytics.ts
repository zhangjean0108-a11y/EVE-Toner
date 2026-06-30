export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-NWB7CG4QTC";

export type ConversionEventName =
  | "whatsapp_click"
  | "facebook_click"
  | "email_click"
  | "inquiry_click"
  | "inquiry_submit_success";

type ConversionEventParams = Record<string, string | number | boolean | undefined>;

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

  window.gtag("event", eventName, {
    event_category: "conversion",
    ...params
  });
}
