"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { routePaths, switchLocalePath } from "@/lib/i18n/routes";
import type { Dictionary } from "@/lib/i18n/types";

/**
 * Remembers that the visitor has answered the banner (switched or dismissed),
 * so it is shown at most once.
 *
 * This cookie exists for the banner only. It must never be read to choose the
 * locale a page renders in: the locale always comes from the URL, so that
 * Googlebot and every visitor get the same page for the same URL.
 */
const COOKIE = "locale_suggestion";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function hasAnswered(): boolean {
  return document.cookie
    .split("; ")
    .some((entry) => entry.startsWith(`${COOKIE}=`));
}

function rememberAnswer() {
  document.cookie = `${COOKIE}=1; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

/** The site locale the browser ranks highest, if it ranks any. */
function preferredLocale(): Locale | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return null;
}

type Suggestion = { locale: Locale; href: string };

type LocaleSuggestionProps = {
  current: Locale;
  /** Banner copy for every locale other than `current`, in that locale. */
  dicts: Partial<Record<Locale, Dictionary["localeSuggestion"]>>;
};

/**
 * Suggests, never redirects: a visitor whose browser prefers another site
 * locale gets a link to the equivalent page in it. The locale is never
 * switched automatically, since that would also redirect Googlebot (which
 * crawls with an English Accept-Language) away from the Vietnamese pages.
 */
export default function LocaleSuggestion({
  current,
  dicts,
}: LocaleSuggestionProps) {
  const pathname = usePathname() ?? "/";
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);

  useEffect(() => {
    const target = preferredLocale();
    if (target === null || target === current || hasAnswered()) {
      setSuggestion(null);
      return;
    }

    // switchLocalePath falls back to the target's home page when this page has
    // no counterpart (e.g. an article). That isn't "this page in your
    // language", so don't offer it.
    const href = switchLocalePath(pathname, target);
    const isHome = pathname === routePaths.home[current];
    setSuggestion(
      href === routePaths.home[target] && !isHome
        ? null
        : { locale: target, href },
    );
  }, [current, pathname]);

  const dict = suggestion ? dicts[suggestion.locale] : undefined;
  if (!suggestion || !dict) return null;

  const close = () => {
    rememberAnswer();
    setSuggestion(null);
  };

  return (
    <div
      lang={suggestion.locale}
      className="bg-forest-50 text-forest-700 text-sm border-b border-forest-100"
      role="region"
      aria-label={dict.message}
    >
      <div className="px-5 md:px-10 xl:px-30 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span>{dict.message}</span>
        {/* Plain <a> for the same reason as LanguageSwitcher: the root layout
            only re-renders in the new language on a document load. */}
        <a
          href={suggestion.href}
          hrefLang={suggestion.locale}
          onClick={rememberAnswer}
          className="font-semibold underline underline-offset-2 hover:no-underline"
        >
          {dict.switchCta}
        </a>
        <button
          type="button"
          onClick={close}
          aria-label={dict.dismiss}
          className="ml-1 rounded p-1 hover:bg-forest-100"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
