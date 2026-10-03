import type { Locale } from "./config";
import type { Dictionary } from "./types";

// Dynamic imports so a page only ever ships the dictionary for its own locale.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  vi: () => import("./dictionaries/vi").then((m) => m.vi),
  en: () => import("./dictionaries/en").then((m) => m.en),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
