import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { ja } from "./ja";
import { ko } from "./ko";
import { pt } from "./pt";
import { ar } from "./ar";

export const dictionaries = {
  en,
  es,
  fr,
  de,
  ja,
  ko,
  pt,
  ar
} as const;

export type { TranslationDictionary } from "./en";
