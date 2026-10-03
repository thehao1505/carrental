import type { Metadata } from "next";
import { requireLocale, resolveLocale, type LocaleParams } from "../locale-params";
import ViContent, { buildMetadata as viMetadata } from "./content.vi";
import EnContent, { buildMetadata as enMetadata } from "./content.en";

type Props = LocaleParams & {
  searchParams: Promise<{ page?: string }>;
};

const byLocale = {
  vi: { Content: ViContent, buildMetadata: viMetadata },
  en: { Content: EnContent, buildMetadata: enMetadata },
} as const;

/**
 * `generateMetadata` resolves the locale without throwing. A `notFound()` raised
 * during metadata generation runs outside the render tree, so Next falls back to
 * its bare error shell instead of the not-found boundary inside this layout —
 * the page component below is what 404s, and that keeps the site chrome.
 */
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  return byLocale[locale].buildMetadata({ searchParams });
}

export default async function NewsPage({ params, searchParams }: Props) {
  const locale = requireLocale((await params).locale);
  const { Content } = byLocale[locale];
  return <Content searchParams={searchParams} />;
}
