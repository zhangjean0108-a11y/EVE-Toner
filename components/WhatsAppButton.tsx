"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";
import { useTranslation } from "@/lib/i18n";
import { createWhatsAppHref } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-3 right-3 z-[60] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      <a
        href={company.facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open EVE Toner Facebook"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-xl font-black leading-none text-white shadow-[0_16px_38px_rgba(24,119,242,0.28)] ring-[3px] ring-white/70 transition duration-200 hover:scale-105 hover:bg-[#0f62cf] hover:shadow-[0_22px_54px_rgba(24,119,242,0.34)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#9bc7ff] sm:h-12 sm:w-12"
      >
        f
        <span className="sr-only">Facebook</span>
      </a>
      <a
        href={createWhatsAppHref(company.whatsapp)}
        target="_blank"
        rel="noreferrer"
        aria-label={t("home.faq.chat")}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10a66a] text-white shadow-[0_18px_45px_rgba(6,95,70,0.28)] ring-[3px] ring-[#f5c400]/20 transition duration-200 hover:scale-105 hover:bg-[#0b8b59] hover:shadow-[0_24px_60px_rgba(6,95,70,0.34)] hover:ring-[#f5c400]/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f5c400]/55 sm:h-14 sm:w-14 sm:ring-4"
      >
        <MessageCircle className="h-[22px] w-[22px] sm:h-[27px] sm:w-[27px]" strokeWidth={2.4} />
        <span className="sr-only">{t("common.whatsapp")}</span>
      </a>
    </div>
  );
}
