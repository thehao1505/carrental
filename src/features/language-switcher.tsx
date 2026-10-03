"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/routes";
import type { Dictionary } from "@/lib/i18n/types";

type LanguageSwitcherProps = {
  dict: Dictionary["languageSwitcher"];
  current: Locale;
};

/**
 * Links to the equivalent page in the other locale rather than always to its
 * home page. Pages with no counterpart (e.g. blog posts) fall back to the home
 * page of the target locale — see switchLocalePath.
 *
 * Deliberately a plain <a>, not next/link: the locale is resolved in the root
 * layout, which is a shared segment for every route, and the App Router does
 * not re-render shared layouts on client-side navigation. A soft nav from / to
 * /en would therefore swap the page body but leave the header, footer and
 * <html lang> in the previous language until the next full load. Next.js has
 * the same constraint across separate root layouts and also falls back to a
 * document load there.
 */
export default function LanguageSwitcher({
  dict,
  current,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";

  return (
    <nav aria-label={dict.label} className="flex items-center gap-1 text-sm">
      {dict.options.map((option, index) => {
        const isCurrent = option.locale === current;
        return (
          <span key={option.locale} className="flex items-center">
            {index > 0 && <span className="text-gray-300 px-1">|</span>}
            {isCurrent ? (
              <span
                aria-current="true"
                className="font-bold text-forest-500 px-1"
              >
                {option.short}
              </span>
            ) : (
              <a
                href={switchLocalePath(pathname, option.locale as Locale)}
                hrefLang={option.locale}
                lang={option.locale}
                title={option.name}
                className="text-forest-500/70 hover:text-forest-500 hover:underline px-1"
              >
                {option.short}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
