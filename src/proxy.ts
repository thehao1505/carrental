import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isPublishedPath,
  newsArticleSlug,
  toInternalPath,
  toPublicPath,
} from "@/lib/i18n/routes";
import { defaultLocale, prefixedLocales } from "@/lib/i18n/config";
import { postExists } from "@/sanity/post-slugs";

/**
 * Rewrite target for URLs that aren't pages. Folders prefixed with `_` are
 * private in the App Router and can never become a route, so this path is
 * guaranteed to match nothing — which sends Next to app/not-found.tsx and its
 * fully server-rendered 404 with the right status.
 */
const NOT_FOUND_PATH = `/${defaultLocale}/_not-found`;

/** Requests the page router doesn't own: API routes, Next internals, files. */
function isNonPageRequest(pathname: string): boolean {
  return (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    // sitemap.xml, robots.txt, llms.txt, /en/llms.txt, files in public/
    /\.[a-z0-9]+$/i.test(pathname)
  );
}

/** An article URL whose slug no post in Sanity has. */
async function isUnknownArticle(pathname: string): Promise<boolean> {
  const slug = newsArticleSlug(pathname);
  if (slug === null) return false;
  try {
    return !(await postExists(decodeURIComponent(slug)));
  } catch {
    // Malformed percent-encoding: no post can have this slug.
    return true;
  }
}

export async function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleadservices.com https://www.google.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com data:;
    img-src 'self' data: blob: https://cdn.sanity.io https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://googleads.g.doubleclick.net;
    frame-src https://www.google.com https://maps.google.com https://www.googletagmanager.com https://td.doubleclick.net;
    connect-src 'self' https://*.sanity.io https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://www.google.com https://www.googleadservices.com https://googleadservices.com https://googleads.g.doubleclick.net;
    object-src 'none';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const { pathname } = request.nextUrl;

  // The default locale is served without a URL prefix, and its paths are
  // Vietnamese while the app tree is keyed by the English segment names. Map
  // the public path onto the internal route; /en/* already matches its route
  // and passes through untouched.
  // not-found.tsx never receives route params, so the locale it should render
  // in has to come from somewhere. This header is that somewhere, and is read
  // only there — every real page resolves its locale from `params.locale`.
  const prefix = pathname.split("/")[1]?.toLowerCase();
  requestHeaders.set(
    "x-locale",
    prefixedLocales.find((l) => l === prefix) ?? defaultLocale,
  );

  const isPage =
    isNonPageRequest(pathname) ||
    (isPublishedPath(pathname) && !(await isUnknownArticle(pathname)));

  const internal = isPage ? toInternalPath(pathname) : null;
  if (internal !== null) {
    const url = request.nextUrl.clone();
    url.pathname = internal;
    const rewritten = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    rewritten.headers.set("Content-Security-Policy", cspHeader);
    return rewritten;
  }

  // The rewrite target stays reachable on its own, which would publish every
  // Vietnamese page at a second URL (/vi/car-rental as well as /thue-xe).
  // Send the internal form back to the canonical public one.
  if (
    pathname === `/${defaultLocale}` ||
    pathname.startsWith(`/${defaultLocale}/`)
  ) {
    const publicPath = toPublicPath(pathname);
    if (publicPath !== null) {
      const url = request.nextUrl.clone();
      url.pathname = publicPath;
      return NextResponse.redirect(url, 308);
    }
  }

  // Not a page we publish. Answer with the 404 before the router sees it:
  // otherwise /car-rental or /abc would match app/[locale] as a locale and 404
  // from inside the page, which Next serves as an error shell rendered on the
  // client instead of real HTML.
  if (!isPage) {
    const url = request.nextUrl.clone();
    url.pathname = NOT_FOUND_PATH;
    const notFound = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    notFound.headers.set("Content-Security-Policy", cspHeader);
    return notFound;
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", cspHeader);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
