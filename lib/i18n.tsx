"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { dictionaries, type TranslationDictionary } from "@/locales";

export type LanguageCode = keyof typeof dictionaries;
export type LanguageDirection = "ltr" | "rtl";

export const LANGUAGE_STORAGE_KEY = "eve-toner-language";

export const SUPPORTED_LANGUAGES: Array<{
  code: LanguageCode;
  nativeName: string;
  shortLabel: string;
  dir: LanguageDirection;
}> = [
  { code: "en", nativeName: "English", shortLabel: "EN", dir: "ltr" },
  { code: "es", nativeName: "Español", shortLabel: "ES", dir: "ltr" },
  { code: "fr", nativeName: "Français", shortLabel: "FR", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", shortLabel: "DE", dir: "ltr" },
  { code: "ja", nativeName: "日本語", shortLabel: "JA", dir: "ltr" },
  { code: "ko", nativeName: "한국어", shortLabel: "KO", dir: "ltr" },
  { code: "pt", nativeName: "Português", shortLabel: "PT", dir: "ltr" },
  { code: "ar", nativeName: "العربية", shortLabel: "AR", dir: "rtl" }
];

const languageCodes = new Set<LanguageCode>(SUPPORTED_LANGUAGES.map((language) => language.code));

type I18nContextValue = {
  language: LanguageCode;
  dictionary: TranslationDictionary;
  setLanguage: (language: LanguageCode) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function getLanguageMeta(language: LanguageCode) {
  return SUPPORTED_LANGUAGES.find((item) => item.code === language) || SUPPORTED_LANGUAGES[0];
}

export function getInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isLanguageCode(saved)) {
    return saved;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  const exactMatch = SUPPORTED_LANGUAGES.find((item) => item.code.toLowerCase() === browserLanguage);
  if (exactMatch) {
    return exactMatch.code;
  }

  const baseMatch = SUPPORTED_LANGUAGES.find((item) => item.code === browserLanguage.split("-")[0]);
  return baseMatch?.code || "en";
}

export function setLanguage(language: LanguageCode) {
  if (typeof window === "undefined") {
    return;
  }

  const meta = getLanguageMeta(language);
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language;
  document.documentElement.dir = meta.dir;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => getInitialLanguage());

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  const changeLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
  }, []);

  const dictionary = dictionaries[language];

  const translate = useCallback(
    (path: string) => {
      const value = path.split(".").reduce<unknown>((current, key) => {
        if (current && typeof current === "object" && key in current) {
          return (current as Record<string, unknown>)[key];
        }
        return undefined;
      }, dictionary);

      return typeof value === "string" ? value : path;
    },
    [dictionary]
  );

  const value = useMemo<I18nContextValue>(
    () => ({ language, dictionary, setLanguage: changeLanguage, t: translate }),
    [changeLanguage, dictionary, language, translate]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider.");
  }

  return context;
}

function isLanguageCode(value: string | null): value is LanguageCode {
  return Boolean(value && languageCodes.has(value as LanguageCode));
}
