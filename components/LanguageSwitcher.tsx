"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useState } from "react";
import { getLanguageMeta, SUPPORTED_LANGUAGES, useTranslation } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const current = getLanguageMeta(language);

  return (
    <div className="relative">
      <button
        type="button"
        className={`inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white/80 font-black text-slate-800 shadow-sm backdrop-blur transition hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)] ${
          compact ? "h-11 w-full px-3 text-sm" : "h-11 px-3 text-sm"
        }`}
        aria-label={t("header.languageSelector")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe2 className="h-5 w-5" />
        <span>{compact ? current.nativeName : current.shortLabel}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+10px)] z-[60] w-52 overflow-hidden rounded-xl border border-white/70 bg-white/92 p-2 shadow-2xl shadow-slate-950/15 ring-1 ring-slate-900/5 backdrop-blur-2xl">
          {SUPPORTED_LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              dir={item.dir}
              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-bold transition hover:bg-[var(--soft-cyan)] hover:text-[var(--brand-cyan)] ${
                item.code === language ? "bg-[var(--soft-cyan)] text-[var(--brand-cyan)]" : "text-slate-700"
              }`}
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
            >
              <span>{item.nativeName}</span>
              {item.code === language ? <Check className="h-4 w-4" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
