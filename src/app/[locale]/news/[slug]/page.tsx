import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";
import { requireLocale, resolveLocale } from "../../locale-params";
import Content, { buildMetadata } from "./content.vi";

type Props = { params: Promise<{ locale: string; slug: string }> };

/**
 * Articles exist in the default locale only (see content.vi.tsx). Any other
 * locale 404s here: the English news listing links straight at the Vietnamese
 * article URLs, so /en/news/<slug> is a URL we never publish.
 */
/**
 * `generateMetadata` resolves the locale without throwing. A `notFound()` raised
 * during metadata generation runs outside the render tree, so Next falls back to
 * its bare error shell instead of the not-found boundary inside this layout —
 * the page component below is what 404s, and that keeps the site chrome.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (resolveLocale(rawLocale) !== defaultLocale) return {};
  return buildMetadata({ params: Promise.resolve({ slug }) });
}

export default async function ArticlePage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (requireLocale(rawLocale) !== defaultLocale) notFound();
  return <Content params={Promise.resolve({ slug })} />;
}
