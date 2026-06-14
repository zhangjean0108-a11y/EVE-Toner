"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";
import { useTranslation } from "@/lib/i18n";
import { createWhatsAppHref } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const { t } = useTranslation();

  return (
    <a
      href={createWhatsAppHref(company.whatsapp)}
      target="_blank"
      rel="noreferrer"
      aria-label={t("home.faq.chat")}
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#10a66a] text-white shadow-[0_18px_45px_rgba(6,95,70,0.28)] ring-4 ring-[#f5c400]/20 transition duration-200 hover:scale-105 hover:bg-[#0b8b59] hover:shadow-[0_24px_60px_rgba(6,95,70,0.34)] hover:ring-[#f5c400]/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f5c400]/55 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={27} strokeWidth={2.4} />
      <span className="sr-only">{t("common.whatsapp")}</span>
    </a>
  );
}
