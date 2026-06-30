"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, trackConversion, type ConversionEventName } from "@/lib/analytics";

type ConversionDetail = {
  eventName: ConversionEventName;
  params?: Record<string, string | number | boolean | undefined>;
};

function getTrackedClick(target: Element) {
  const action = target.closest("a,button");

  if (!action) {
    return null;
  }

  const label = action.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) || "";
  const href = action instanceof HTMLAnchorElement ? action.href : "";
  const path = href ? new URL(href, window.location.href).pathname : "";

  if (href.includes("wa.me")) {
    return { eventName: "whatsapp_click" as const, label, href };
  }

  if (href.includes("facebook.com")) {
    return { eventName: "facebook_click" as const, label, href };
  }

  if (href.startsWith("mailto:")) {
    return { eventName: "email_click" as const, label, href };
  }

  if (path === "/inquiry" || /quote|inquiry|rfq|requirements/i.test(label)) {
    return { eventName: "inquiry_click" as const, label, href };
  }

  return null;
}

export function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const trackedClick = getTrackedClick(event.target);

      if (trackedClick) {
        trackConversion(trackedClick.eventName, {
          label: trackedClick.label,
          href: trackedClick.href,
          page_path: window.location.pathname
        });
      }
    };

    const handleConversion = (event: Event) => {
      const customEvent = event as CustomEvent<ConversionDetail>;

      if (!customEvent.detail?.eventName) {
        return;
      }

      trackConversion(customEvent.detail.eventName, {
        page_path: window.location.pathname,
        ...customEvent.detail.params
      });
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("eve:conversion", handleConversion);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("eve:conversion", handleConversion);
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
